import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
@api userDetails
showDetailsofParent=false

notifyParentEvent(event){
  const bubbleVal=new CustomEvent('show',{bubbles:true}) //bubbles property shld be mentioned for bubbling to occur 
  this.dispatchEvent(bubbleVal)

}
showHandler(){
  this.showDetailsofParent=true
}
}