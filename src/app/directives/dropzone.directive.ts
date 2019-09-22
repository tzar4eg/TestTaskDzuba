import { Directive, Output, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Output() fileDropped: EventEmitter<FileList> = new EventEmitter<FileList>();
  @Output() hoveredWithFile: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.hoveredWithFile.emit(true);
    
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void{
    event.preventDefault();
    event.stopPropagation();
    this.hoveredWithFile.emit(false);

  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files.length === 0) {
      return;
    }
    this.hoveredWithFile.emit(false);    
    this.fileDropped.emit(event.dataTransfer.files);
  }
}
