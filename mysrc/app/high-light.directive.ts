import { Directive ,ElementRef,Renderer2,OnInit,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{
@Input() defaultColor:string='transparent';
@Input() highLightColor:string='green';


@HostBinding('style.backgroundColor') bgcolor:string;
@HostBinding('style.color') txtColor:string='black';
// @HostBinding('style.padding') pdng:string;
// @HostBinding('style.transform') trasformRotate:string;
// @HostBinding('style.transform') tscale:string;
  constructor(private eleref:ElementRef,private renderer:Renderer2) { }
ngOnInit(){

  this.bgcolor=this.defaultColor;
  this.eleref.nativeElement.style.backgroundColor='blue';
  this.eleref.nativeElement.style.color='white';
  this.eleref.nativeElement.style.padding='1px';
  this.eleref.nativeElement.style.transform = "rotate(0deg)";
  this.eleref.nativeElement.style.transform='scale(1,1)';
  // this.renderer.setStyle(this.eleref.nativeElement,'background-color' ,'red');
}
@HostListener('mouseenter') mouseover(eventData:Event){
  // this.renderer.setStyle(this.eleref.nativeElement,'background-color','blue');
  this.bgcolor=this.highLightColor;
  // this.txtColor='black';
  // this.pdng='40px';
  // this.tscale='scale(1,5)';
  // // this.trasformRotate='rotate(90deg)';
  
}
@HostListener('mouseleave') mouseleave(eventData:Event){
  // this.renderer.setStyle(this.eleref.nativeElement,'background-color','transparent');
  this.bgcolor=this.defaultColor;
  this.txtColor='black';
  // this.pdng='20px';
  // // this.trasformRotate='rotate(0deg)';
  // this.tscale='scale(1,1)';
  
}
}
