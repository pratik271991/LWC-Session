import { LightningElement, api,wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo;//{roomName:'A-01',roomCapacity:'12'} use @api to define Public property
    @api showRoomInfo=false; // boolean property
    @wire(CurrentPageReference) pageReference123; //pageReference123 holds the actual (Lightning)page reference of our meeting room component

    tileClickHandler(){
        const titleClicked=new CustomEvent('tileclick',{detail:this.meetingRoomInfo,bubbles:true});
        
        this.dispatchEvent(titleClicked);
        fireEvent(this.pageReference123,'pubsubtileclick',this.meetingRoomInfo);
    }
}
