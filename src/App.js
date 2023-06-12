import './App.css';
import './index.css';
import './mic.css';
import Header from './MyComponents/Header';
import Home from './MyPages/Home';
import Hero from './MyPages/Hero';
import Coursecat from './MyPages/Coursecat';
import Aboutus from './MyPages/Aboutus';
import Donation from './MyPages/Donation';
import Ngoenroll from './MyComponents/Ngoenroll';
// import Career from './MyPages/Career';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { Navigate} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Videos  from './MyComponents/Videos';
import Sidebarvideo from './MyComponents/Sidebarvideos';
import { useTranslation } from 'react-i18next'
import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Lead from "./MyComponents/leaders"
import Login from './MyComponents/login'
import Popup from './MyComponents/popup'
import Banner from './MyComponents/banner'
import Profile from './MyPages/profile'
import Science from './MyPages/Science'
import Math from './MyPages/Math'
import vol from "./images/volume.png"
import VoiceNav from "./MyComponents/VoiceNav"

function App() {
  // const commands = [
  //   {
  //     command: ["Go to * page", "Go to *", "Open * page", "Open *"],
  //     callback: (redirectPage) => setRedirectUrl(redirectPage),
  //   },
  // ];
  
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/" + website.split(" ").join(""));
      },
    },
    {
      command: "go to *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/" + website.split(" ").join(""));
      },
    },
    {
      command: "open courses",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/coursecat");
      },
    },
    {
      command: "enroll for *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/videos");
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    {
      command: "stop",
      callback: () => {
        stopHandle();
      },
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };


//   (function(d, w, c) {
//     w.ChatraID = '5vCLi7r4tiubquMC9';
//     var s = d.createElement('script');
//     w[c] = w[c] || function() {
//         (w[c].q = w[c].q || []).push(arguments);
//     };
//     s.async = true;
//     s.src = 'https://call.chatra.io/chatra.js';
//     if (d.head) d.head.appendChild(s);
// })(document, window, 'Chatra');

  // const { transcript } = useSpeechRecognition({ commands });
  // const [redirectUrl, setRedirectUrl] = useState("");
  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null
  // }
  const pages = ["home", "about", "course", "profile"];
  const urls = {
    home: "/",
    about: "/aboutus",
    course: "/coursecat",
    profile: "/ngoenroll",
  };

  // let redirect = "";

  // if (redirectUrl) {
  //   if (pages.includes(redirectUrl)) {
  //     redirect = <Navigate to={urls[redirectUrl]} />;
  //   } else {
  //     redirect = <p>Could not find page: {redirectUrl}</p>;
  //   }
  // }
  return (
  
   <Router>
   <div className='App'>
    <VoiceNav/>
   <Routes>
    <Route path="/" element={<Login/> } />
    <Route path="/home" element={<Hero/> } />
    <Route path="/coursecat" element={<Coursecat/>} />
    {/* <Route path="/syllabus" element={<Syllabus/>} /> */}
    {/* <Route path="/career" element={<Career/>} /> */}
    <Route path="/recruiter" element={<Home/>} />
    <Route path="/aboutus" element={<Aboutus/>} />
    <Route path="/ngoenroll" element={<Ngoenroll/>} />
    <Route path="/donation" element={<Donation/>} />
    <Route path="/popup" element={<Popup/>} />
    <Route path="/sidebarvideo" element={<Sidebarvideo/>} />
    <Route path="/video" element={<Videos/>} />
    <Route path="/videos" element={<Videos/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/leaders" element={<Lead/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/banner" element={<Banner/>}/>
    <Route path="/science" element={<Science/>}/>
    <Route path="/math" element={<Math/>}/>
  
  </Routes>
   </div>
   </Router>
   
  );
}

export default App;
