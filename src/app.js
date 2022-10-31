import { LightningElement } from "lwc";

export default class App extends LightningElement {
fullname="Karthikeyan Baburajendran";
title="";

handlechange(event){
  this.title=event.target.value;
}
handleClick(event){
  this.fullname=this.title;
}
}
