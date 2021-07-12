console.log('This is text to speech converting app');

 var voiceList = document.querySelector('#voiceList');
 var txtInput = document.querySelector('#txtInput');
 var btnSpeak = document.querySelector('#btnSpeak');

 var txtToSpeech = window.speechSynthesis;
 var voices = [];

 GetVoices();
 if(speechSynthesis !== undefined){
     speechSynthesis.onvoiceschanged = GetVoices;
 }

 btnSpeak.addEventListener('click', speakVoice);


 function speakVoice(e){
     e.preventDefault();
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    txtToSpeech.speak(toSpeak);
 }

 function GetVoices() {
     voices = txtToSpeech.getVoices();
     voices.forEach(voice =>{
         var listItem = document.createElement('option');
         listItem.textContent = voice.name + '(' + voice.lang + ')';
         listItem.setAttribute('data-name', voice.name);
         listItem.setAttribute('data-lang', voice.lang);
         voiceList.appendChild(listItem);
     })

     voiceList.selectedIndex = 0;

 }

