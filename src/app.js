import { LightningElement } from "lwc";

export default class App extends LightningElement {
fullname;
details
hideText=false

handleClick(){
  this.ShowText=!this.ShowText
  this.fullname="Name : karthikeyan"
  this.details="Designation: Software Engineer"
}
hideHandler(){
  
this.hideText=true;
}
}
