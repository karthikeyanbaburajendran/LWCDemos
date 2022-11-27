import { LightningElement } from 'lwc';

export default class MethodCaller extends LightningElement {
showModal=false
headerText="Model Class"
contentText="Hi This is triggered from Parent Component to Child Component and close Event triggered from child to Parent and handled here"
handleClick(){
    this.showModal=true

}
modalCloseHandler(){
    this.showModal=false
}
}