var currentIndex = 0;
window.addEventListener("load", function () {
  console.log("Hello World!");
});

function nav(move) {
  if (currentIndex == 0 && move == -1) {
    currentIndex = 0;
  } else if (currentIndex == 1 && move == 1) {
    currentIndex = 1;
  } else {
    currentIndex = currentIndex + move;
  }
  var items = document.querySelectorAll(".items");
  var targetElement = items[currentIndex];
  targetElement.focus();
}
const softkeyCallback = {
  center: function () {
    if(currentIndex == 1){
      var stringToSend = document.getElementById("getInput").value;
      $.post("http://192.168.43.194:8000/", {msg: "1" }, function(data, status) {
        console.log(status)
        console.log(data)
//         var text = data.split(',')
//         console.log(text[0])
      document.getElementById('resp').innerHTML = data;
      },dataType="text")
    }

  
}
}
function handleKeyDown(evt) {
  switch (evt.key) {
    case 'Enter':
      // Action case press center key
      softkeyCallback.center();
      break;
      case "ArrowUp":
      nav(-1);
      break;
    case "ArrowDown":
      nav(1);
      break;
    case "ArrowRight":
      nav(1);
      break;
    case "ArrowLeft":
      nav(-1);
      break;
  }
};
document.addEventListener('keydown', handleKeyDown);

