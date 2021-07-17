import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  shouldMenuIconVisible:boolean = true;
  isMenuButtonClicked = false;
  @HostListener('window:resize', ['$event'])
  makeMenuIconInVisible(event?:Event) {
      if(window.innerWidth < 680 ){ //480
        console.log("receieved value "+ window.innerWidth);
        this.shouldMenuIconVisible=false;
      }
      else if(window.innerWidth > 680) //480
          this.shouldMenuIconVisible=true;
  }

  constructor() { 
    this.makeMenuIconInVisible();
  }

  ngOnInit(): void {
    //this.makeMenuIconInVisible();
  }
  menuIconClicked(){
    if(!this.isMenuButtonClicked) 
       this.isMenuButtonClicked = true ;
    else
       this.isMenuButtonClicked= false;
  }

}
