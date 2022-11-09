import { LightningElement } from "lwc";

export default class App extends LightningElement {

name
fullname
storetheName(event){
this.name=event.target.value
}
get showText(){
  return this.fullname==="Karthikeyan"?true:false
}
onSubmit(event){
  this.fullname=this.name
}
}