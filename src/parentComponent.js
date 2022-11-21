import { LightningElement } from 'lwc';

export default class MethodCaller extends LightningElement {
  buttonAction=true
    video = "https://www.w3schools.com/tags/movie.mp4";

    handlePlay() {
        this.template.querySelector('c-child-component').play();//We call methods in child class here
        this.buttonAction=!this.buttonAction
    }

    handlePause() {
        this.template.querySelector('c-child-component').pause();//We call methods in child class here
        this.buttonAction=!this.buttonAction
    }
}