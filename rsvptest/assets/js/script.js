// 'use strict';

// /* globals MediaRecorder */

// let mediaRecorder;
// let recordedBlobs;

// const errorMsgElement = document.querySelector('span#errorMsg');
// const recordedVideo = document.querySelector('video#recorded');
// const recordButton = document.querySelector('button#record');
// const playButton = document.querySelector('button#play');
// const downloadButton = document.querySelector('button#download');



// //  recordcideo
// function recordvideo(){
//   if (document.querySelector('button#record').textContent === 'Record') {
//     startRecording();
//   } else {
//     stopRecording();
//     document.querySelector('button#record').textContent = 'Record';
//     document.querySelector('button#play').disabled = false;
//     document.querySelector('button#download').disabled = false;
//   }
// }

// // play button
// function playVideo(){
//   const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
//   document.querySelector('video#recorded').src = null;
//   document.querySelector('video#recorded').srcObject = null;
//   document.querySelector('video#recorded').src = window.URL.createObjectURL(superBuffer);
//   document.querySelector('video#recorded').controls = true;
//   document.querySelector('video#recorded').play();
// }
// // download
// function downloadVideo(){
//   const blob = new Blob(recordedBlobs, {type: 'video/mp4'});
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.style.display = 'none';
//   a.href = url;
//   a.download = 'test.mp4';
//   document.body.appendChild(a);
//   a.click();
//   setTimeout(() => {
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
//   }, 100);
// }
// function handleDataAvailable(event) {
//   console.log('handleDataAvailable', event);
//   if (event.data && event.data.size > 0) {
//     recordedBlobs.push(event.data);
//   }
// }

// function startRecording() {
//   recordedBlobs = [];
//   let options = {mimeType: 'video/webm;codecs=vp9,opus'};
//   try {
//     mediaRecorder = new MediaRecorder(window.stream, options);
//   } catch (e) {
//     console.error('Exception while creating MediaRecorder:', e);
//     errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
//     return;
//   }

//   console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
//   document.querySelector('button#record').textContent = 'Stop Recording';
//   document.querySelector('button#play').disabled = true;
//   document.querySelector('button#download').disabled = true;
//   mediaRecorder.onstop = (event) => {
//     console.log('Recorder stopped: ', event);
//     console.log('Recorded Blobs: ', recordedBlobs);
//   };
//   mediaRecorder.ondataavailable = handleDataAvailable;
//   mediaRecorder.start();
//   console.log('MediaRecorder started', mediaRecorder);
// }
// function stopRecording() {
//   mediaRecorder.stop();
// }
// function handleSuccess(stream) {
//   document.querySelector('button#record').disabled = false;
//   console.log('getUserMedia() got stream:', stream);
//   window.stream = stream;

//   const gumVideo = document.querySelector('video#gum');
//   gumVideo.srcObject = stream;
// }

// async function init(constraints) {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia(constraints);
//     handleSuccess(stream);
//   } catch (e) {
//     console.error('navigator.getUserMedia error:', e);
//     errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
//   }
// }

// // start camera
// async function startCamera(){
//   const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
//   const constraints = {
//     audio: {
//       echoCancellation: {exact: hasEchoCancellation}
//     },
//     video: {
//       width: 1280, height: 720
//     }
//   };
//   console.log('Using media constraints:', constraints);
//   await init(constraints);
// }
