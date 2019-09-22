import { Directive, Output, HostListener, HostBinding } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Output() fileDropped: EventEmitter<FileList> = new EventEmitter<FileList>();
  //@Output() hoveredWithFile: EventEmitter<boolean> = new EventEmitter<boolean>();

 
  constructor() { }

  @HostBinding('class.isHoveredWithFile') isHoveredWithFile: boolean = false;

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isHoveredWithFile = true;
    
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void{
    event.preventDefault();
    event.stopPropagation();
    this.isHoveredWithFile = false;

  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files.length === 0) {
      return;
    }
    this.isHoveredWithFile = false;
    this.fileDropped.emit(event.dataTransfer.files);
  }
}
