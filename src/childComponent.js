import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
@api percentage

get getStyle(){
  return 'width:' + this.percentage + '%'
}
}
