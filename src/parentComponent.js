import { LightningElement } from 'lwc';

export default class MethodCaller extends LightningElement {
   barcolor = "greenBar"
   bool=true
handleClick(){
    this.template.querySelector('c-child-component').getColor()
this.bool=!this.bool
    console.log(this.bool)
}
}