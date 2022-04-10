import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track value;
    checkboxSelectHandler() {
        const chieldComponent = this.template.querySelector('c-public-method-child')
        const returnMessage = chieldComponent.selectCheckbox(this.value);
        console.log('Return Message :', returnMessage);
    }
    onInputChangeHandler(event){
        this.value=event.target.value;
    }
}