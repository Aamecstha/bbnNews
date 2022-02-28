import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-intro',
  templateUrl: './pipe-intro.component.html',
  styleUrls: ['./pipe-intro.component.css']
})
export class PipeIntroComponent implements OnInit {
  filterQuery=''
  userData=[
    {
      name:'ram',
      age:12,
      birthDate:new Date(12,2,2008)
    },
    {
      name:'shyam',
      age:23,
      birthDate:new Date(23,5,1998)
    },
    {
      name:'hari',
      age:32,
      birthDate:new Date(5,3,1980)
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
