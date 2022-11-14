import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import defaultTemplate from './app.html'
export default class RenderMultipleDemo extends LightningElement {

selectedTemplate

render(){
  return this.selectedTemplate==="Sign In"?signinTemplate:this.selectedTemplate==="Sign Up"?
  
  signupTemplate:defaultTemplate

}

handleClick(event){
  this.selectedTemplate=event.target.value
}
}