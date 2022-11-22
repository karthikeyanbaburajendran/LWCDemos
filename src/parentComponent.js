import { LightningElement,api } from 'lwc';

export default class AlertParentComponent extends LightningElement {
percentage

handleChange(event){

    this.percentage = event.target.value<=100 ? event.target.value:100
    
}

}