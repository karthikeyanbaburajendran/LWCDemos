import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api barcolor
    @api bool
    colorName="green"


    @api getColor(){
        if(this.bool==true){
        this.colorName="red"
        this.barcolor="redBar"
        }
        else{
            this.colorName="green"
            this.barcolor="greenBar"
        }
    }
}

    