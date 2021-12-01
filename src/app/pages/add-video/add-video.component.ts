import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "app/shared/api.service";
import { Router } from "@angular/router";
import stopMediaStream from "stop-media-stream";
import videojs from "video.js";
declare var MediaRecorder: any;
declare var localStream: any;
declare var $: any;
@Component({
  selector: "app-add-video",
  templateUrl: "./add-video.component.html",
  styleUrls: ["./add-video.component.css"],
})
export class AddVideoComponent implements OnInit {
  @ViewChild('attachments', { static: false }) attachment: any;
  public mediaRecorder;
  public recordedBlobs: any;
  element: HTMLVideoElement;
  public stream: MediaStream;
  recording: boolean;
  videowishform: any;
  submitted: boolean;
  showtitle: boolean;
  clicked: boolean;
  loading: boolean;
  RSVPForm: any;
  superBuffer: Blob;
  startCam: boolean;
  uploadVideoForm: any;
  fileData;
  thumbFile = [];
  selectedFile: File;
  fileList: File[] = [];
  selectedVideo: any;
  thumbFileVideo: any[];
  uploadfileType: boolean;
  fileType: string;
  videowishUploadform: any;
  showuploadVideo: boolean;
  mob: boolean;
  web: boolean;
  fileName: any;
  pid: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.showtitle = false;
    this.videowishform = this.fb.group({
      title: [''],
    });
    this.videowishUploadform = this.fb.group({
      videotitle: [''],
    });

    this.uploadVideoForm = this.fb.group({
      video: [''],
    });
  }

  ngOnInit() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    this.startCamera();
    this.checkMobileorDesktop();
  }
  checkMobileorDesktop() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var element = document.getElementById('text');
    if (isMobile) {
      this.mob = true;
      this.web = false;
    } else {
      this.web = true;
      this.mob = false;
    }
  }

  get videofrm() {
    return this.videowishform.controls;
  }
  get uploadvideofrm() {
    return this.videowishUploadform.controls;
  }
  /* globals MediaRecorder */

  // const errorMsgElement = document.querySelector('span#errorMsg');
  // const recordedVideo = document.querySelector('video#recorded');
  // const recordButton = document.querySelector('button#record');
  // const playButton = document.querySelector('button#play');
  // const downloadButton = document.querySelector('button#download');

  //  recordcideo
  recordvideo() {
    this.startCamera();
    if (document.querySelector('button#record').textContent === 'Record') {
      this.startRecording();
      this.recording = true;
    } else {
      this.stopRecording();
      this.recording = false;
      document.querySelector('button#record').textContent = 'Record';
      // document.getElementById('play').disabled = false;
      // document.querySelector('button#download').disabled = false;
    }
  }

  // play button
  playVideo() {
    this.superBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' });
    (<HTMLVideoElement>document.querySelector('video#recorded')).src = null;
    (<HTMLVideoElement>document.querySelector('video#recorded')).srcObject =
      null;
    // (<HTMLVideoElement>document.querySelector('video#recorded')).volume = 0;
    (<HTMLVideoElement>document.querySelector('video#recorded')).src =
      window.URL.createObjectURL(this.superBuffer);
    (<HTMLVideoElement>document.querySelector('video#recorded')).controls =
      true;
    (<HTMLVideoElement>document.querySelector('video#recorded')).play();
    document.getElementById('gum').style.display = 'none';
  }
  // download
  downloadVideo() {
    const blob = new Blob(this.recordedBlobs, { type: 'video/mp4' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.mp4';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
  handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
      this.recordedBlobs.push(event.data);
    }
  }

  startRecording() {
    document.getElementById('gum').style.display = 'block';
    document.getElementById('recorded').style.display = 'none';
    this.recordedBlobs = [];
    let options = { mimeType: 'video/webm;codecs=vp9,opus' };
    try {
      this.mediaRecorder = new MediaRecorder(window.MSStream, options);
    } catch (e) {
      // errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`;
      return;
    }

    document.querySelector('button#record').textContent = 'Stop Recording';

    // document.querySelector('button#play').disabled = true;
    // document.querySelector('button#download').disabled = true;
    this.mediaRecorder.onstop = (event) => {};
    this.mediaRecorder.ondataavailable = this.handleDataAvailable.bind(this);
    this.mediaRecorder.start();
  }
  stopRecording() {
    this.mediaRecorder.stop();
    document.getElementById('gum').style.display = 'block';
    document.getElementById('recorded').style.display = 'none';
    setTimeout(() => {
      this.stopCam();
      this.showtitle = true;
    }, 1000);
  }
  handleSuccess(stream) {
    // document.querySelector('button#record').disabled = false;
    window.MSStream = stream;

    const gumVideo = <HTMLVideoElement>document.querySelector('video#gum');
    gumVideo.srcObject = stream;
    gumVideo.volume = 0;
  }

  async init(constraints) {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.handleSuccess(this.stream);
      this.startCam = true;
    } catch (e) {
      // errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
  }

  // start camera
  async startCamera() {
    this.startCam = false;
    document.getElementById('gum').style.display = 'block';
    document.getElementById('recorded').style.display = 'none';
    this.showtitle = false;
    // const hasEchoCancellation = document.querySelector('#echoCancellation').checked;
    const constraints = {
      audio: {
        echoCancellation: { exact: true },
        sampleRate: 48000,
        channelCount: 2,
      },
      video: {
        width: 1280,
        height: 720,
      },
    };
    await this.init(constraints);
  }
  async stopCam() {
    document.getElementById('gum').style.display = 'none';
    this.stream.getTracks().forEach((element) => {
      element.stop();
      document.getElementById('recorded').style.display = 'block';
      setTimeout(() => {
        this.playVideo();
      }, 1000);
    });
  }

  uploadVideo(event: any) {
    this.selectedVideo = event.target.files[0];
    this.fileList.push(this.selectedVideo);
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedVideo);
    reader.onload = (event) => {
      this.fileData = event.target;
      this.thumbFileVideo = [];
      this.thumbFileVideo.push(this.fileData.result);
      this.attachment.nativeElement.value = '';
      if (this.selectedVideo.type != 'video/mp4') {
        this.uploadfileType = false;
      } else {
        this.fileType = 'video';
        this.uploadfileType = true;
        this.showtitle = true;
        this.showuploadVideo = true;
        this.fileName = this.selectedVideo.name;
      }
    };
  }
  sendWish() {
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.videowishform.invalid) {
      this.clicked = false;
    }
    let formValue = this.videowishform.value;
    formData.append('caption', formValue.title);
    formData.append('event_participant_id', localStorage.getItem("pid"));
    if (this.selectedVideo) {
      formData.append('video', this.selectedVideo);
    } else {
      formData.append('video', this.superBuffer);
    }
    if (this.videowishform.invalid === false) {
      this.loading = true;
      this.apiService.sendVideo(formData).subscribe(
        (res: any) => {
          // location.reload();
          this.videowishform.reset();
          this.loading = false;
          this.submitted = false;
          this.clicked = false;
          this.stream.getTracks().forEach((element) => {
            console.log(element);
            element.stop();
            document.getElementById('recorded').style.display = 'block';
          });
          // this.mediaRecorder.stop();
          this.router.navigateByUrl('/dashboard');

          $('#successModal').modal('show');
        },
        (error) => {}
      );
    }
  }

  uploadVideoWish() {
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    if (this.videowishUploadform.invalid) {
      this.clicked = false;
    }
    let formValue = this.videowishUploadform.value;
    formData.append('caption', formValue.videotitle);
    formData.append('event_participant_id', localStorage.getItem("pid"));
    formData.append('video', this.selectedVideo);
    if (this.videowishUploadform.invalid === false) {
      this.loading = true;
      this.apiService.sendVideo(formData).subscribe(
        (res: any) => {
          // location.reload();
          this.videowishUploadform.reset();
          this.loading = false;
          this.submitted = false;
          this.clicked = false;
          this.stopCam();
          // this.mediaRecorder.stop();
          $('#successModal').modal('show');
          this.router.navigateByUrl('/dashboard');

        },
        (error) => {}
      );
    }
  }
  closeSuccessModal() {
    $('#successModal').modal('hide');
    this.router.navigateByUrl('/home');
  }
}
