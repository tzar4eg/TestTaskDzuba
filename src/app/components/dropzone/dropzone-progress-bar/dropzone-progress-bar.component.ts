import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-dropzone-progress-bar",
  templateUrl: "./dropzone-progress-bar.component.html",
  styleUrls: ["./dropzone-progress-bar.component.less"]
})


export class DropzoneProgressBarComponent implements OnInit {
  @Input() uploadingStream: { stream: Observable<any>; fileName: string };
  @Input() progress: number = 0;
  @Output() upload: EventEmitter<string> = new EventEmitter<string>();  
  constructor() {}
  
  ngOnInit() {
    this.uploadingStream.stream.subscribe(event => {     
      if (event.type === HttpEventType.UploadProgress) {
        
        this.progress = Math.round((event.loaded / event.total * 100) )  ;
      }
      else if(event.type === HttpEventType.Response) {
        
       this.upload.emit(event.body.data.name);
      }
    });
  }
}
