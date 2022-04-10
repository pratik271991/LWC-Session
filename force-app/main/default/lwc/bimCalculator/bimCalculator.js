import { LightningElement ,track} from 'lwc';
import {getBmi} from 'c/bmi'; // Export from bmi module or component 

export default class BimCalculator extends LightningElement {
    cardTitle='BMI Calculator';
    @track bmiData={
        weight:0,
        height:0,
        result:0
    };
    

    onWeightChange(event){
        this.bmiData.weight=parseFloat(event.target.value);
    }
    onHeightChange(event){
        this.bmiData.height=parseFloat(event.target.value);
    }
    calculateBmi(){
        /*try{
        this.bmiData.result=this.bmiData.weight/(this.bmiData.height*this.bmiData.height)
        }catch(error){
            this.bmiData.result=undefined;
        }*/
        this.bmiData.result=getBmi(this.bmiData.weight,this.bmiData.height) ;
    }
    get bmiValue(){
        if(this.bmiData.result=== undefined)
            return "";
        return `Your BMI is ${this.bmiData.result}`;
    }
}