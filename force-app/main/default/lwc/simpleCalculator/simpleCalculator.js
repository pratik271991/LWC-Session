import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResults;
    @track previousResult=[];
    @track showPreviousResult=false;
    firstNumber;
    secondNumber;
    

    numberChangeHandaler(event){
        const inputBoxName=event.target.name;

        if(inputBoxName==='firstNumber'){
            this.firstNumber=event.target.value;
        }
        else if(inputBoxName==='secondNumber'){
            this.secondNumber=event.target.value;
        }
    }
        addHandaler(){
            const firstN=parseInt(this.firstNumber);
            const secondN=parseInt(this.secondNumber);

            this.currentResults=`Result of ${firstN}+${secondN} is ${firstN+secondN}` ;//Grave
            this.previousResult.push(this.currentResults);
        }
       SubtractHandaler(){
            const firstN=parseInt(this.firstNumber);
            const secondN=parseInt(this.secondNumber);

            this.currentResults=`Result of ${firstN}-${secondN} is ${firstN-secondN}` ;//Grave
            this.previousResult.push(this.currentResults);
        }
         multiplyHandaler(){
            const firstN=parseInt(this.firstNumber);
            const secondN=parseInt(this.secondNumber);

            this.currentResults=`Result of ${firstN}*${secondN} is ${firstN*secondN}` ;//Grave
            this.previousResult.push(this.currentResults);
        }
        devisionHandaler(){
            const firstN=parseInt(this.firstNumber);
            const secondN=parseInt(this.secondNumber);

            this.currentResults=`Result of ${firstN}/${secondN} is ${firstN/secondN}` ;//Grave
            this.previousResult.push(this.currentResults);
        }
        showPreviousResultToggle(event){
            this.showPreviousResult=event.target.checked;
        }
}