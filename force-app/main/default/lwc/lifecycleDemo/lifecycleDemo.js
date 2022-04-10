import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {
    constructor() {
        super();
        console.log('Constractor Called');
    }
    connectedCallback(){
        console.log('Component connected callback is called');
    }
    renderedCallback(){
        console.log('Component rendered callback is called');
    }
    disconnectedCallback(){
        console.log('Component Disconnected callback is called');
    }
}