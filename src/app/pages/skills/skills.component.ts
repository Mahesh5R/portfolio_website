import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  progress:number =80;
  progressType:number=70;
  progressHtml:number=85;

  constructor() { }

  ngOnInit(): void {
  }

}
