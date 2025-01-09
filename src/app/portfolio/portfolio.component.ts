import { Component } from '@angular/core';
interface Iitem {
  image:string,
}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  // img1src: string = 'images/poert1.png';
  // img2src: string = 'images/port2.png';
  // img3src: string = 'images/port3.png';
  images:Iitem[] =[
    {image:'images/poert1.png'},
    {image:'images/port2.png'},
    {image:'images/port3.png'},
    {image:'images/poert1.png'},
    {image:'images/port2.png'},
    {image:'images/port3.png'},
  ];


  isModuleOpen=false;
  selectedImage="";

openModal(item:Iitem){
this.selectedImage=item.image;
this.isModuleOpen=true;
}


closeModel(){
  this.isModuleOpen= false;
}


}
