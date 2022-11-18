import { LightningElement,track} from 'lwc';
export default class parentComponent extends LightningElement {

boo=false
buttonLabel=true
iter
handleClick(){
  this.buttonLabel=!this.buttonLabel
  this.boo=!this.boo
  console.log(this.buttonLabel)
}
}