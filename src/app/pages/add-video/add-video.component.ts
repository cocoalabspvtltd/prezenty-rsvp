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
  @ViewChild("attachments", { static: false }) attachment: any;
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
  showuploadVideo: boolean = false;
  mob: boolean;
  web: boolean;
  fileName: any;
  pid: any;
  url: string | ArrayBuffer;
  broseVideo: boolean;
  loadingvideo: boolean;
  eventt: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.uploadfileType = false;
    this.broseVideo = false;
    this.showtitle = false;
    this.videowishform = this.fb.group({
      title: [""],
    });
    this.videowishUploadform = this.fb.group({
      videotitle: [""],
    });

    this.uploadVideoForm = this.fb.group({
      video: [""],
    });
  }

  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    this.checkMobileorDesktop();
  }
  checkMobileorDesktop() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    var element = document.getElementById("text");
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

  uploadVideo(event: any) {
    this.selectedVideo = "";
    this.url = "";
    this.eventt = event;
    this.selectedVideo = event.target.files[0];
    this.selectedVideo;
    this.loadingvideo = true;
    this.fileList.push(this.selectedVideo);
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedVideo);
    reader.onload = (event) => {
      this.fileData = event.target;
      this.thumbFileVideo = [];
      this.thumbFileVideo.push(this.fileData.result);
      this.attachment.nativeElement.value = "";
      console.log(this.selectedVideo.type);
      if (
        this.selectedVideo.type == "image/jpeg" ||
        this.selectedVideo.type == "image/png" ||
        this.selectedVideo.type == "image/jpg"
      ) {
        this.uploadfileType = false;
        this.broseVideo = false;
        this.loadingvideo = false;
        this.showuploadVideo = false;
      } else {
        this.url = (<FileReader>event.target).result;
        console.log(this.url);
        this.fileType = "video";
        this.uploadfileType = true;
        this.showtitle = true;
        this.showuploadVideo = true;
        this.loadingvideo = false;
        this.broseVideo = true;
        this.fileName = this.selectedVideo.name;
        console.log(this.fileName);
      }
    };
  }

  retry() {
    this.router.navigateByUrl("/sent-video");
    $("#payed-modal").modal("hide");
  }
  uploadVideoWish() {
    this.submitted = true;
    this.clicked = true;
    const formData = new FormData();
    let formValue = this.videowishUploadform.value;
    formData.append("caption", formValue.videotitle);
    formData.append("event_participant_id", localStorage.getItem("pid"));
    formData.append("video", this.selectedVideo);
    console.log(this.selectedVideo);
    if (this.videowishUploadform.invalid === false) {
      this.loading = true;
      this.apiService.sendVideo(formData).subscribe(
        (res: any) => {
          if (res.success == true) {
            this.videowishUploadform.reset();
            this.loading = false;
            this.submitted = false;
            this.clicked = false;
            $("#successModal").modal("show");
          } else {
            this.loading = false;
            $("#payed-modal").modal("show");
          }
        },
        (error) => {}
      );
    }
  }
  closeSuccessModal() {
    $("#successModal").modal("hide");
    this.router.navigateByUrl("/home");
  }
}
