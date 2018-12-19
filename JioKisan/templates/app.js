
document.getElementById("softkey-centre").addEventListener("click", function() {
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.lang = 'en-IN';
  recognition.interimResults = true;
  recognition.start();

  finalTranscripts = '';

  recognition.onresult = function (event) {
    var interimTranscripts = '';
    for (var i = event.resultIndex; i < event.results.length; i++) {
      var transcript = event.results[i][0].transcript;
      transcript.replace("\n", "<br>");
      if (event.results[i].isFinal) {
        finalTranscripts += transcript;
      } else {
        interimTranscripts += transcript;
      }
    }
    document.getElementById("demo").innerHTML = finalTranscripts  + '<span style="color:#999">'+ interimTranscripts + '</span>';

  };

  recognition.onerror = function (event) {

  }

});




  // },
//   right: function () {
//     console.log('You click on SoftRight');
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("POST", "http://127.0.0.1:8000/", true);
//     xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//     // console.log(csrfcookie())
//     xhttp.setRequestHeader('X-CSRFToken', csrfcookie());
//     xhttp.send("msg=mnbvc");
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML =
//           this.responseText;
//       }
//     };

//   }

// };


// function handleKeyDown(evt) {
//   switch (evt.key) {
//     case 'SoftLeft':
//       // Action case press left key
//       softkeyCallback.left();
//       break;

//     case 'SoftRight':
//       // Action case press right key
//       softkeyCallback.right();
//       break;

//     case 'Enter':
//       // Action case press center key
//       softkeyCallback.center();
//       break;
//   }
// };

// var csrfcookie = function () {
//   var cookieValue = null,
//     name = 'csrftoken';
//   if (document.cookie && document.cookie !== '') {
//     var cookies = document.cookie.split(';');
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) == (name + '=')) {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// };

// document.addEventListener('keydown', handleKeyDown);

