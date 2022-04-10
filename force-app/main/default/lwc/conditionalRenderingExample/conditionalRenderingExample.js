import { LightningElement,track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv=false;
    @track cityList=['Jaipur','Banglure','Hyderabad','Mumbai'];
    showDivHandaler(event){
        this.displayDiv=event.target.checked;
    }
}