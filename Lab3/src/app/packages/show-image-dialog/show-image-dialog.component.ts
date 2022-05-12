import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'lab3-show-image-dialog',
  templateUrl: './show-image-dialog.component.html',
  styleUrls: ['./show-image-dialog.component.css']
})
export class ShowImageDialogComponent implements OnInit {

  img:string = ''
  constructor(@Inject(MAT_DIALOG_DATA) public image: string) {
    this.img = image;
  }

  ngOnInit(): void {
  }

}
