import { LightningElement ,track} from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track selectedMeetingRoomInfo;
    /*REMOTE ADD*/
    meetingRoomsInfo = [
        { roomName: 'A-01', roomCapacity: '11' },
        { roomName: 'A-02', roomCapacity: '12' },
        { roomName: 'A-03', roomCapacity: '13' },
        { roomName: 'B-01', roomCapacity: '14' },
        { roomName: 'B-02', roomCapacity: '15' },
        { roomName: 'B-03', roomCapacity: '16' },
        { roomName: 'C-01', roomCapacity: '17' }
    ];

    onTileSelectHandler(event){
        const  meetingRoomInfo=event.detail ;
        this.selectedMeetingRoomInfo=meetingRoomInfo.roomName;
    }
    //Declare Handler event programmatically in parent component
    /*constructor(){
        super();
        this.template.addEventListener('tileclick',this.onTileSelectHandler.bind(this));

    }*/
}