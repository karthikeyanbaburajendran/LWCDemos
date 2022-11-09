import { LightningElement } from "lwc";

export default class App extends LightningElement {
fullname;
details
ShowText=false
title="This is a getter class";
sldbutton="OFF";

handleClick(){
  this.ShowText=!this.ShowText
  this.fullname="Name : karthikeyan"
  this.details="Designation: Software Engineer"
}
get getTitle(){
  return this.title.toUpperCase();
}
selectButton(event){
console.log(event.target.value)
this.sldbutton=event.target.value;
}
get boxStatus(){
  return `box ${this.sldbutton === 'ON' ? 'green':'red'}`
}
}
