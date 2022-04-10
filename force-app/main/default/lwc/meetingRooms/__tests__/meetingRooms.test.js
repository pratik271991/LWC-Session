import {createElement} from "lwc";
import MeetingRooms from "c/meetingRooms";

describe("c-meetingRooms",()=>{
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while(document.body.firstChild) {
          document.body.removeChild(document.body.firstChild);
        }
      });
    it("count of meeting room should be 7",()=>{
        const meetingRooms=createElement('c-meeting-Rooms',{is: MeetingRooms});
        document.body.appendChild(meetingRooms);

        const allMeetingRoomsComponents=meetingRooms.shadowRoot.querySelectorAll('c-meeting-room');
        expect(allMeetingRoomsComponents.length).toBe(7);
    })
})