import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSideNavOpened:boolean=true;
  shouldMenuIconVisible:boolean = true;

  @HostListener('window:resize', ['$event'])
  makeMenuIconInVisible(event?:Event) {
      if(window.innerWidth < 480 ){
        console.log("receieved value "+ window.innerWidth);
        this.shouldMenuIconVisible=false;
      }
      else if(window.innerWidth > 480)
          this.shouldMenuIconVisible=true;
}

  constructor() { 
    this.makeMenuIconInVisible();
  }

  ngOnInit(): void {
    //this.makeMenuIconInVisible();
  }
  menuIconClicked(){
    if(this.isSideNavOpened)
        this.isSideNavOpened=false;
    else
        this.isSideNavOpened=true;
  }

}
