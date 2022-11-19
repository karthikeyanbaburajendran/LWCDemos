import { LightningElement,track} from 'lwc';
export default class parentComponent extends LightningElement {

boo=false
buttonLabel="Show Child Component"
buttonValue="Show"
buttonVariant="success"

handleClick(event){
this.buttonValue=event.target.value
if(this.buttonValue=="Show"){
  this.buttonLabel="Hide Child Component"
  this.boo=!this.boo
  this.buttonVariant="destructive"
  this.buttonValue="Hide"
}
else{
  this.buttonLabel="Show Child Component"
  this.boo=!this.boo
  this.buttonVariant="success"
  this.buttonValue="Show"
}

}
}