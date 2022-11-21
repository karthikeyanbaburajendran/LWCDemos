import { LightningElement } from 'lwc';

export default class MethodCaller extends LightningElement {
  buttonAction=true
    video = "https://www.w3schools.com/tags/movie.mp4";

    handlePlay() {
        this.template.querySelector('c-child-component').play();
        this.buttonAction=!this.buttonAction
    }

    handlePause() {
        this.template.querySelector('c-child-component').pause();
        this.buttonAction=!this.buttonAction
    }
}