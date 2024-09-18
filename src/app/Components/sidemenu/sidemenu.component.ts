import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  userName : String="DANIELA CORDOVA";
  theme:string="";
  widhtMenu:number = 25;
  visibleMenu:boolean= true;

  setVisiblityMenu():boolean{
    this.visibleMenu=!this.visibleMenu;
    return this.visibleMenu;
  }

  setVisibleBtn():boolean{
    return this.visibleMenu;
    
  }

  setThemeColor(color:string):void{
    this.theme= color;
  }
  setSizeMenu(){
    this.widhtMenu+=10;
    if(this.widhtMenu>100){
      this.widhtMenu=25;
    }
  }
}
