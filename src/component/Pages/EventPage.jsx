// import React from "react";
// import "./EventPage.css";
// import { useNavigate, Outlet } from "react-router-dom";
// import Vector from "../../assets/eventDetailPic/Vector.png"
// import eventimg from "../../assets/eventDetailPic/eventimg.png"
// import billinginvoiceimg from "../../assets/eventDetailPic/billinginvoiceimg.png"
// import liverevenueimg from "../../assets/eventDetailPic/liverevenueimg.png"
// import notificationimg from "../../assets/eventDetailPic/notificationimg.png"
// import outreachimg from "../../assets/eventDetailPic/notificationimg.png"
// import publishedeventimg from "../../assets/eventDetailPic/publishedeventimg.png"
// import queryimg from "../../assets/eventDetailPic/queryimg.png"
// import servicesimg from "../../assets/eventDetailPic/servicesimg.png"
// import ticketimg from "../../assets/eventDetailPic/ticketimg.png"

// function EventPage() {
//   const navigate = useNavigate();

//   function handleLiveAndLoud() {
//     navigate("/eventpage/liveandloud");
//   }

//   function handleDashboard() {
//     navigate("/eventpage/dashboard");
//   }

//   function handleEventDetail() {
//     navigate("/eventpage/eventdetail");
//   }

//   function handleLiveRevenue() {
//     navigate("/eventpage/liverevenue");
//   }

//   function handleTicket() {
//     navigate("/eventpage/ticket");
//   }

//   function handleOutreach() {
//     navigate("/eventpage/outreach");
//   }

//   function handleNotification() {
//     navigate("/eventpage/notification");
//   }

//   function handlePublishedEvent() {
//     navigate("/eventpage/publishedevent");
//   }

//   function handleBillingInvoice() {
//     console.log("billinginvoice");
//     navigate("/eventpage/billinginvoice");
//   }

//   function handleServices() {
//     navigate("/eventpage/servicesevent");
//   }

//   function handleQuery() {
//     console.log("clicked query");
//     navigate("query");
//   }

//   return (
//     <div>
//       <div className="leftSide-content">
//         <button onClick={handleLiveAndLoud}>
//            Live and Loud
//         </button>
//         <button onClick={handleDashboard}>
//             <img src={Vector} alt="Vector Icon"/>Dashboard
//         </button>
//         <button onClick={handleEventDetail}>
//             <img src={eventimg} alt="eventimg"/>Event Detail
//         </button>
//         <button onClick={handleLiveRevenue}>
//             <img src={liverevenueimg} alt="revenueimg"/> Live Revenue
//        </button>
//         <button onClick={handleTicket}>
//             <img src={ticketimg} alt="ticketimg"/>Ticketing
//         </button>
//         <button onClick={handleOutreach}>
//            <img src={outreachimg} alt="outreachimg"/> Outreach
//         </button>
//         <button onClick={handleNotification}>
//             <img src={notificationimg} alt ="notificationimg"/>Notifications
//         </button>
//         <button onClick={handlePublishedEvent}>
//             <img src={publishedeventimg} alt ="publishedeventimg"/>Published Event
//         </button>
//         <button onClick={handleBillingInvoice}>
//             <img src={billinginvoiceimg} alt="billinginvoiceimg"/>Billing & Invoice
//         </button>
//         <button onClick={handleServices}>
//             <img src={servicesimg} alt ="servicesimg"/>Services
//         </button>
//         <button onClick={handleQuery}>
//             <img src={queryimg}/>Query
//         </button>
//       </div>

//       <div className="rightSide-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default EventPage;


import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Vector from "../../assets/eventDetailPic/Vector.png"
import eventimg from "../../assets/eventDetailPic/eventimg.png"
import billinginvoiceimg from "../../assets/eventDetailPic/billinginvoiceimg.png"
import liverevenueimg from "../../assets/eventDetailPic/liverevenueimg.png"
import notificationimg from "../../assets/eventDetailPic/notificationimg.png"
import outreachimg from "../../assets/eventDetailPic/notificationimg.png"
import publishedeventimg from "../../assets/eventDetailPic/publishedeventimg.png"
import queryimg from "../../assets/eventDetailPic/queryimg.png"
import servicesimg from "../../assets/eventDetailPic/servicesimg.png"
import ticketimg from "../../assets/eventDetailPic/ticketimg.png"
import "./eventPage.css"; // Import the CSS file

function EventPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState("");

  // Set active path based on current location
  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActivePath(path);
  }, [location]);

  // Helper function to check if a button is active
  const isActive = (path) => {
    return activePath === path;
  };

  function handleLiveAndLoud() {
    navigate("/eventpage/liveandloud");
  }

  function handleDashboard() {
    navigate("/eventpage/dashboard");
  }

  function handleEventDetail() {
    navigate("/eventpage/eventdetail");
  }

  function handleLiveRevenue() {
    navigate("/eventpage/liverevenue");
  }

  function handleTicket() {
    navigate("/eventpage/ticket");
  }

  function handleOutreach() {
    navigate("/eventpage/outreach");
  }

  function handleNotification() {
    navigate("/eventpage/notification");
  }

  function handlePublishedEvent() {
    navigate("/eventpage/publishedevent");
  }

  function handleBillingInvoice() {
    navigate("/eventpage/billinginvoice");
  }

  function handleServices() {
    navigate("/eventpage/servicesevent");
  }

  function handleQuery() {
    navigate("/eventpage/query");
  }

  return (
    <div className="event-page-container">
      <div className="leftSide-content">
        <button onClick={handleLiveAndLoud}>
          Live and Loud
        </button>
        <button 
          className={isActive("dashboard") ? "active" : ""}
          onClick={handleDashboard}
        >
          <img src={Vector} alt="Vector Icon"/>
          Dashboard
        </button>
        <button 
          className={isActive("eventdetail") ? "active" : ""}
          onClick={handleEventDetail}
        >
          <img src={eventimg} alt="eventimg"/>
          Event Detail
          {isActive("eventdetail") && <span className="metrics-tag">7.95 × 5.87</span>}
        </button>
        <button 
          className={isActive("liverevenue") ? "active" : ""}
          onClick={handleLiveRevenue}
        >
          <img src={liverevenueimg} alt="revenueimg"/> 
          Live Revenue
        </button>
        <button 
          className={isActive("ticket") ? "active" : ""}
          onClick={handleTicket}
        >
          <img src={ticketimg} alt="ticketimg"/>
          Ticketing
        </button>
        <button 
          className={isActive("outreach") ? "active" : ""}
          onClick={handleOutreach}
        >
          <img src={outreachimg} alt="outreachimg"/> 
          Outreach
        </button>
        <button 
          className={isActive("notification") ? "active" : ""}
          onClick={handleNotification}
        >
          <img src={notificationimg} alt="notificationimg"/>
          Notifications
        </button>
        <button 
          className={isActive("publishedevent") ? "active" : ""}
          onClick={handlePublishedEvent}
        >
          <img src={publishedeventimg} alt="publishedeventimg"/>
          Published Event
        </button>
        <button 
          className={isActive("billinginvoice") ? "active" : ""}
          onClick={handleBillingInvoice}
        >
          <img src={billinginvoiceimg} alt="billinginvoiceimg"/>
          Billing & Invoice
        </button>
        <button 
          className={isActive("servicesevent") ? "active" : ""}
          onClick={handleServices}
        >
          <img src={servicesimg} alt="servicesimg"/>
          Services
        </button>
        <button 
          className={isActive("query") ? "active" : ""}
          onClick={handleQuery}
        >
          <img src={queryimg} alt="queryimg"/>
          Query
        </button>
      </div>

      <div className="rightSide-content">
        <Outlet />
      </div>
    </div>
  );
}

export default EventPage;