import { Component, OnInit, ViewChild } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
@ViewChild('memeCanvas', { static: false}) myCanvas: any;

  topText: string= '';
  bottomText: string= '';
  fileEvent:any;
  textColor: string='#000000'
  

  constructor() { }

  ngOnInit(): void {
  }
preview(e:any){

this.fileEvent=e;

let canvas = this.myCanvas.nativeElement;
let ctx= canvas.getContext('2d');
let render= new FileReader();
render.readAsDataURL(e.target.files[0])
render.onload= function(event){
const img = new Image();
img.src = event.target?.result as string;


img.onload= function(){
  ctx.drawImage(img, 50, 150, 600, 500);
}
}
}
drawText(){
   let canvas = this.myCanvas.nativeElement;
let ctx= canvas.getContext('2d');

ctx.clearRect(0,0, canvas.width, canvas.height);
this.preview(this.fileEvent);

ctx.fillStyle= this.textColor;
ctx.font='50px Comic Sans MS';
ctx.textAlign='center';
ctx.fillText(this.topText, canvas.width/2, 100);
ctx.fillText(this.bottomText, canvas.width/2, 750);


}
canvasTextColor($event: ColorEvent){
this.textColor=$event.color.hex;
  this.drawText();
}
downloadImg(){
  let canvas= this.myCanvas.nativeElement;
  let image =canvas.toDataURL('image/png');
  let link= document.createElement('a');
  link.download= 'memeImg.png';
  link.href =image;
  link.click(); 
}

// $("#slider").on("input",function () {
//             $('#name').css("font-size", $(this).val() + "px");
//     });
// getSliderValue(event: { target: { value: any; }; }) {
//   console.log(event.target.value);
// }

}
