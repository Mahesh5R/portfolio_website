import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  introTitle :string = "Hi !!"; 
  introSubtitle :string ="With experience in following technologies.";
  constructor() { }

  ngOnInit(): void {
  }

}
