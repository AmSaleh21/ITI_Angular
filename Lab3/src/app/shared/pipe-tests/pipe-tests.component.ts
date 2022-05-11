import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab3-pipe-tests',
  templateUrl: './pipe-tests.component.html',
  styleUrls: ['./pipe-tests.component.css']
})
export class PipeTestsComponent implements OnInit {

  constructor() { }

  //for power pipe
  base:number = 1;
  power:number = 1;

  //for string replace
  dashedString:string = 'Iti-1';

  //for array filteration
  names:string[]=[
    "Aly","Ahmed","Mohamed","Sara","Alaa","Ahlam"
  ];
  tr:boolean=true;
  filter:string = "";

  ngOnInit(): void {
  }

}
