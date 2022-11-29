import { LightningElement,api } from 'lwc';

export default class AlertParentComponent extends LightningElement {
selecteceo= null
bool=false
 userDetails=[{
            name: 'John Doe',
            title: 'CEO & Founder',
            company: 'Harvard University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team1.jpg',
            phoneNumber:"9876578654"
        },
        {
            name: 'Steve Smith',
            title: 'CEO & Founder',
            company: 'Standford University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team2.jpg',
            phoneNumber:"7657657687"
        },
        {
            name: 'David Warner',
            title: 'CEO & Founder',
            company: 'Sydney University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team3.jpg',
            phoneNumber:"4354657576"
        },
        {
            name: 'Peter Parker',
            title: 'CEO & Founder',
            company: 'Melbourne University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team4.jpg',
            phoneNumber:"865745643543"
        }
]
handleEventFromChild(event){
    const ceoName=event.detail
    this.selecteceo = this.userDetails.find(item=>item.name === ceoName)
    if(this.selecteceo){
        this.bool=!this.bool
    }
console.log(this.selecteceo)
}
}