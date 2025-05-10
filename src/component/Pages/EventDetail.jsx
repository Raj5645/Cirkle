import React, { useEffect, useState, useRef } from "react";

function EventDetail() {
  const [selectveneue, setSelectVenue] = useState("");
  const [text, setText] = useState("");
  const [date, setdate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [fileName , setFileName] = useState("");
  const [EventType, setEventType] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [text]);


  const handleFile = async (e) =>{
    const file = e.target.files[0];

    if(!file)
      return ;

    setFileName(file.name);

    const formData = new FormData();
    formData.append("itenary",file);

      // try {
        
      // } catch (error) {
        
      // }


  }




  return (
    <form>
      <div>
        <div className="venue-type">
          <label>
            <input
              type="radio"
              name="options"
              value="option1"
              checked={selectveneue === "option1"}
              onChange={(e) => setSelectVenue(e.target.value)}
            />Ground
          </label>

          <label>
            <input
              type="radio"
              name="options"
              value="option2"
              checked={selectveneue === "option2"}
              onChange={(e) => setSelectVenue(e.target.value)}
            />Online
          </label>

          <label>
            <input
              type="radio"
              name="options"
              value="option3"
              checked={selectveneue === "option3"}
              onChange={(e) => setSelectVenue(e.target.value)}
            />Hybrid
          </label>
        </div>

        <div className="event-image">
          <img
            src="https://th.bing.com/th/id/OIP.W2giC8TjletygTa_fV67_AHaE8?rs=1&pid=ImgDetMain"
            alt="event-image"
          />
        </div>

        <div className="about-the-event">
          <label
            htmlFor="event-detail"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            About the event
          </label>
          <textarea
            id="event-detail"
            ref={textareaRef}
            value={text}
            inChange={(e) => setText(e.target.value)}
            rows="1"
            placeholder="write here"
          />
        </div>

        <div className="event-schedule">
          <label
            htmlFor="dateInput"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Event Date
          </label>

          <input
            type="date"
            id="dateInput"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />

          <label
            htmlFor="timeInput"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Event Time
          </label>

          <input
            type="time"
            id="timeInput"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <label
            htmlFor="locationInput"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Location
          </label>

          <input
            type="location"
            id="locationInput"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

      <label htmlFor="uploadItinerary" style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
        Upload Itinerary
      </label>
      <input
        type="file"
        id="uploadItinerary"
        style={{ display: "none" }}
        accept=".pdf,.docx,.txt"
        onChange={handleFile}
      />

        </div>

        <div className="event-type">
          <p>Type of Event</p>

          <label>
            <input
              type="radio"
              value="Concert"
              name="event"
              checked={EventType === "Concert"}
              onChange={(e)=>setEventType(e.target.value)}
            />Concert
          </label>

          <label>
            <input
              type="radio"
              value="Festival"
              name="event"
              checked={EventType === "Festival"}
              onChange={(e)=>setEventType(e.target.value)}
            />Festival
          </label>

          <label>
            <input
              type="radio"
              value="Meetup"
              name="event"
              checked={EventType === "Meetup"}
              onChange={(e)=>setEventType(e.target.value)}
            />Meetup
          </label>

          <label>
            <input
              type="radio"
              value="OpenMic"
              name="event"
              checked={EventType === "OpenMic"}
              onChange={(e)=>setEventType(e.target.value)}
            />Open Mic
          </label>

          <label>
            <input
              type="radio"
              value="CampusEvent"
              name="event"
              checked={EventType === "CampusEvent"}
              onChange={(e)=>setEventType(e.target.value)}
            />Campus Event
          </label>

          <label>
            <input
              type="radio"
              value="EDM"
              name="event"
              checked={EventType === "EDM"}
              onChange={(e)=>setEventType(e.target.value)}
            />EDM
          </label>
        </div>


      </div>
    </form>
  );
}

export default EventDetail;
