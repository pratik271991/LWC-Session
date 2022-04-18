import { LightningElement,track } from 'lwc';
import getCarTypes from '@salesforce/apex/CarSearchFormController.getCarTypes';

export default class CarSearchForm extends LightningElement {
    @track carTypes;

    @wire(getCarTypes)
    wiredCarType{Data,Error}
    handleCarTypeChange(event)
    {

    }
    createNewCarType(){

    }
}