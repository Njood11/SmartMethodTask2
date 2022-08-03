

var myFuncCalls = 0;
var transcript="";
  
async function Send() {
  var speech=true;
  var SpeechRecognition ;


  SpeechRecognition= SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    if(speech ==true){recognition.start();}

    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
          transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

            convert_text.innerHTML= transcript;
            str=transcript;
            
    });
 

 
if ("serial" in navigator) {
 var delayInMilliseconds = 5000; //1 second

 // The Web Serial API is supported.
 
 //select and open port 
 if (myFuncCalls==0 ) {
  const port = await navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });
  myFuncCalls++; }
 else  if (myFuncCalls!=0 ) {
   console.log('port is already opened');}


  setTimeout( async function() {
    //write text data
    const textEncoder = new TextEncoderStream();
    const writer = textEncoder.writable.getWriter();
    if(transcript.includes("يمين")){ writer.write("right");
    console.log('said right');}

    else if(transcript.includes("يسار")){
       writer.write("left"); console.log('said left');}

    else {console.log('no direction');}
    writer.releaseLock();
 
 }, delayInMilliseconds);
 
 

}else console.log('The Web Serial API not supported');

}
 