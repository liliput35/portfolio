import bitebookimg from '../assets/images/bitebook1.png';
import fluxtrackimg from '../assets/images/fluxtrack.png';
import gravelightimg from '../assets/images/gravelight1.png';
import hiddenappimg from '../assets/images/hiddenapp.png';
import babimg from '../assets/images/bab.png';
import togglimg from '../assets/images/toggl1.png';
import recent4 from '../assets/images/recent6.png';
import recent1 from '../assets/images/recent1.png';
import recent2 from '../assets/images/recent2.png';
import recent3 from '../assets/images/recent3.png';

import calibmock from '../assets/images/calib-mock 1.png';
import raftmock from '../assets/images/raft-mock.png'

import bitebookdash from '../assets/projects/bitebook/bitebookdash.png';
import bitebookbookings from '../assets/projects/bitebook/bitebookbookings.png';
import bitebookdeets from '../assets/projects/bitebook/bitebookdeets.png';
import bitebooklog from '../assets/projects/bitebook/bitebooklog.png';
import bitebookmgmt from '../assets/projects/bitebook/bitebookmgmt.png';
import bitebookmob from '../assets/projects/bitebook/bitebookmob.png';
import bitebookmsgs from '../assets/projects/bitebook/bitebookmsgs.png';

import fluxmob from '../assets/projects/fluxtrack/fluxmob.png';
import fluxtrackdash from '../assets/projects/fluxtrack/fluxtrackdash.png';
import fluxtrackform from '../assets/projects/fluxtrack/fluxtrackform.png';
import fluxtracklists from '../assets/projects/fluxtrack/fluxtracklists.png';
import fluxtracklog from '../assets/projects/fluxtrack/fluxtracklog.png'; 

import babmenu from '../assets/projects/bab/babmenu.png';
import babbears from '../assets/projects/bab/babbears.png';
import babmusic from '../assets/projects/bab/babmusic.png';

import gravelight1 from '../assets/projects/gravelight/gravelight1.png';
import gravelight2 from '../assets/projects/gravelight/gravelight2.png';
import gravelight3 from '../assets/projects/gravelight/gravelight3.png';
import gravelight4 from '../assets/projects/gravelight/gravelight4.png';

import dostcalendar from '../assets/projects/dost/dostcalendar.png';
import dostdash from '../assets/projects/dost/dostdash.png';
import dostforms from '../assets/projects/dost/dostforms.png';
import dostlogin from '../assets/projects/dost/dostlogin.png';
import dostreqdetails from '../assets/projects/dost/dostreqdetails.png';
import dostreqs from '../assets/projects/dost/dostreqs.png';

import raftproj from '../assets/projects/raft/RAFTproj.png';

export const projects = [
  {
    slug: "dost",

    title: "DOST Calibration Services Scheduling",

    subtitle: "Service Scheduling Web Application", 

    cover: calibmock,

    hero: [
      dostdash, 
      dostcalendar, 
      dostreqs, 
      dostreqdetails, 
      dostforms, 
      dostlogin
      
    ],

    client: "DOST-NIR Metrology Dept.",

    role: "Full Stack Developer",

    duration: "May-July 2026",

    team: "Adrien Delos Silos, Lindsay Evangelio, Margaret Samson",

    repository: "Private",

    github: "#",
    
    about: "The DOST Calibration Services Scheduling System is a web-based appointment management platform developed for the Department of Science and Technology – Negros Island Region to replace manual scheduling through Google Forms and spreadsheets. It streamlines calibration requests by automatically organizing appointments based on calibration type, available schedules, and service capacity while providing administrators with a centralized dashboard for request management. The system also supports client management, scheduling, notifications, and document generation to improve operational efficiency and reduce scheduling conflicts.",

    tech: ["React", "Firebase", "Google Apps Script", "Tailwind"],

    features: [
      {
        id: 1,
        featureName: "Automatic Scheduling",
        featureDesc: "Uses a scheduling algorithm that recommends and assigns available calibration dates based on calibration type, slot capacity, preparation requirements, and scheduling constraints, minimizing manual planning and booking conflicts."
      },
      {
        id: 2,
        featureName: "Scalable Request Management",
        featureDesc: "Designed to efficiently manage over a thousand calibration requests and client records through Firestore-powered querying, pagination, server-side filtering, and optimized data retrieval for responsive administration."
      },
      {
        id: 3,
        featureName: "Email & PDF Notifications",
        featureDesc: "Automatically generates professional PDF confirmation documents and sends appointment notifications through Gmail, allowing clients to receive official schedules and calibration details electronically."
      },
      {
        id: 4,
        featureName: "Administrative Dashboard",
        featureDesc: "Provides administrators with centralized tools for reviewing requests, confirming schedules, rescheduling appointments, managing calendar availability, tracking request statuses, and monitoring daily calibration operations."
      },
    ],
  },
  {
    slug: "raft",

    title: "RAFT",

    subtitle: "Sugarcane Farm Management Application", 

    cover: raftmock,

    hero: [
      raftproj
    ],

    client: "Sugar Industry Foundation Inc.",

    role: "Full Stack Mobile Developer",

    duration: "May-June 2026",

    team: "Adrien Delos Silos, Lindsay Evangelio, Margaret Samson",

    repository: "Private",

    github: "#",
    
    about: "RAFT (Regen Agri Farm Tool) is an offline-first Android mobile application developed by the Department of Science and Technology – Negros Island Region & Western Visayas in partnership with the Sugar Industry Foundation, Inc. (SIFI). The application assists Agrarian Reform Beneficiary Organizations (ARBOs) and sugarcane farm managers in managing fertilizer computations, farm activities, and production records without requiring an internet connection. It automates agricultural computations using RAFT-based fertilizer recommendations while generating farm calendars, production costs, and projected net proceeds.",

    tech: ["Flutter", "SQLite", "Android"],

    features: [
      {
        id: 1,
        featureName: "RAFT Fertilizer Calculator",
        featureDesc:
          "Calculates fertilizer requirements using the RAFT methodology based on user-provided NPK soil analysis values, automatically determining fertilizer quantities, application schedules, and recommendations for both new plant and ratoon crop cycles."
      },
      {
        id: 2,
        featureName: "Farm Activity Calendar",
        featureDesc:
          "Automatically generates a chronological farm calendar containing required and optional farming activities with scheduled dates, progress tracking, and local reminder notifications to help users stay on schedule."
      },
      {
        id: 3,
        featureName: "Cost & Profit Analysis",
        featureDesc:
          "Computes the total cost of production from fertilizer applications and farm operations while estimating projected net proceeds, giving farmers a clearer picture of farm profitability before harvest."
      },
      {
        id: 4,
        featureName: "Offline Farm Records",
        featureDesc:
          "Stores farmer profiles, farm records, fertilizer computations, calendars, and financial data locally using SQLite, with built-in backup and restore functionality for reliable offline access and data recovery."
      },
    ],

  },
  {
    slug: "bitebook",

    title: "BiteBook",

    subtitle: "Catering Management Web Application", 

    cover: bitebookimg,

    hero: [
      bitebookmgmt, 
      bitebookdash, 
      bitebookbookings, 
      bitebookmsgs, 
      bitebookdeets,
      bitebooklog, 
      
    ],

    client: "Academic Project",

    role: "Full Stack Developer",

    duration: "March-May 2026",

    team: "Mia Chua, Erika Jaud, Jared Elizan, Salvador Gomez",

    repository: "Public",

    github: "https://github.com/liliput35/bitebook",
    
    about: "BiteBook is a full-stack catering management and booking web application developed to modernize the catering reservation process for both customers and administrators. It enables customers to create bookings through either customizable menu selections or fixed-price catering bundles while allowing administrators to efficiently manage menus, bundles, bookings, and customer inquiries. The system incorporates real-world business rules such as bundle pricing based on guest count, image management, and role-based access control.",

    tech: ["Laravel", "MySQL", "Tailwind"],

    features: [
      {
        id: 1, 
        featureName: "Custom & Bundle Booking", 
        featureDesc: "Customers can either build their own menu by selecting individual dishes or choose a predefined catering bundle with customizable dish selections."
      }, 
      {
        id: 2, 
        featureName: "Bundle Customization", 
        featureDesc: "Bundle packages enforce category-based dish requirements while maintaining fixed per-head pricing, giving customers flexibility without affecting bundle costs."
      }, 
      {
        id: 3, 
        featureName: "Booking Management", 
        featureDesc: "Administrators can view, edit, confirm, and manage catering reservations through a centralized dashboard while preserving booking history and pricing integrity."
      }, 
      {
        id: 4, 
        featureName: "Inquiry Messaging System", 
        featureDesc: "Customers and administrators can communicate through threaded inquiries attached to bookings, making it easier to discuss requests, updates, and special instructions."
      }, 
    ],

  },

  {
    slug: "fluxtrack",

    title: "FluxTrack",

    subtitle: "Incident Reporting Web Application", 

    cover: fluxtrackimg,

    hero: [
      fluxtrackdash, 
      fluxmob, 
      fluxtracklists, 
      fluxtrackform
    ],

    client: "Academic Project",

    role: "Full Stack Developer",

    duration: "October-November 2025",

    team: "Mia Chua, Erika Jaud, Salvador Gomez, MJ Torres, Gian Javelosa",

    repository: "Public",

    github: "https://github.com/liliput35/FluxTrack",
    
    about: "FluxTrack is a web-based incident reporting and tracking system designed to streamline the submission, monitoring, and management of organizational incidents. The application enables users to report incidents through a centralized platform while providing administrators with tools to review, update, and resolve reports efficiently. It improves communication, accountability, and record management by replacing manual reporting processes with a digital workflow.",

    tech: ["PHP", "MySQL", "CSS", "JavaScript"],

    features: [
      {
        id: 1, 
        featureName: "Incident Reporting", 
        featureDesc: "Users can submit detailed incident reports through a structured form, ensuring consistent and organized documentation."
      }, 
      {
        id: 2, 
        featureName: "Incident Tracking", 
        featureDesc: "Each report can be monitored throughout its lifecycle, allowing users and administrators to track its current status and progress."
      }, 
      {
        id: 3, 
        featureName: "Administrative Dashboard", 
        featureDesc: "Administrators can review, update, and manage reported incidents from a centralized interface for faster response and resolution.."
      }, 
    ],

  },

  {
    slug: "gravelight",

    title: "Gravelight",

    subtitle: "3D Narrative Adventure Game", 

    cover: gravelightimg,

    hero: [
      gravelight1,
      gravelight2,
      gravelight3,
      gravelight4
    ],

    client: "Academic Project",

    role: "Game Developer",

    duration: "October-November 2025",

    team: "Mia Chua, Erika Jaud, Salvador Gomez",

    repository: "Public",

    github: "https://github.com/liliput35/gravelight",
    
    about: "Gravelight: Between Worlds is a 3D top-down action-adventure game developed in Unity as a final project for Game Programming 2. Players explore interconnected worlds, battle enemies, and solve environmental challenges while progressing through an immersive fantasy setting. The project focused on implementing gameplay mechanics, AI behavior, player controls, combat systems, and level design using object-oriented programming principles.",

    tech: ["Unity", "C#"],

    features: [
      {
        id: 1, 
        featureName: "Dual-World Exploration", 
        featureDesc: "Players navigate interconnected environments that encourage exploration and progression through different areas of the game."
      }, 
      {
        id: 2, 
        featureName: "Combat System", 
        featureDesc: "Features real-time combat mechanics with player attacks, enemy interactions, and health management to create engaging gameplay."
      }, 
      {
        id: 3, 
        featureName: "Interactive Level Design", 
        featureDesc: "Levels incorporate environmental obstacles, interactive elements, and progression mechanics to guide players through the game world."
      }, 
    ],

  },

  {
    slug: "hidden-apparitions",

    title: "Hidden Apparitions",

    subtitle: "Augmented Reality Based Mobile Game", 

    cover: hiddenappimg,

    hero: [
      hiddenappimg,
    ],

    client: "Academic Project",

    role: "Game Developer",

    duration: "March-May 2026",

    team: "Mia Chua, Erika Jaud, Salvador Gomez",

    repository: "Public",

    github: "https://github.com/liliput35/hidden-apparitions",
    
    about: "Hidden Apparitions is an augmented reality (AR) ghost-hunting game developed in Unity using Vuforia as a final project for Game Technology. Players use image recognition to discover haunted locations, spawn virtual ghosts into the real world, and capture them through interactive AR gameplay. The project focused on integrating marker-based image recognition, AR object placement, event-driven gameplay, and mobile interaction to create an immersive mixed-reality experience.",

    tech: ["Unity", "C#", "ARCore"],

    features: [
      {
        id: 1, 
        featureName: "Image Recognition", 
        featureDesc: "Utilizes Vuforia's marker-based image recognition to detect real-world images and trigger AR gameplay experiences."
      }, 
      {
        id: 2, 
        featureName: "Ghost Hunting Gameplay", 
        featureDesc: "Players locate, encounter, and capture virtual ghosts that appear in the physical environment through augmented reality."
      }, 
      {
        id: 3, 
        featureName: "Interactive Mobile Experience", 
        featureDesc: "Designed for Android devices, the game combines camera input, real-time rendering, and user interaction to deliver an immersive AR adventure."
      }, 
    ],

  },

  {
    slug: "bust-a-beat",

    title: "Bust-a-Beat",

    subtitle: "2D Rhythm Based Platformer", 

    cover: babimg,

    hero: [
      babmenu,
      babbears,
      babmusic,
    ],

    client: "Academic Project",

    role: "Game Developer",

    duration: "April-May 2025",

    team: "Mia Chua, Erika Jaud, Alfred Alcala",

    repository: "Public",

    github: "https://github.com/liliput35/bust-a-beat",
    
    about: "Bust-a-Beat is a 2D rhythm-based platformer developed in Unity 6 as a final project for Game Programming 1. The game combines traditional platforming mechanics with rhythm-based gameplay, requiring players to synchronize their movements and actions with the music to overcome obstacles and complete levels. The project focused on implementing responsive player controls, beat synchronization, collision mechanics, and level progression while emphasizing timing and player feedback.",

    tech: ["Unity", "C#"],

    features: [
      {
        id: 1, 
        featureName: "Rhythm-Based Gameplay", 
        featureDesc: "Player movement and gameplay mechanics are synchronized with the music, encouraging precise timing and coordination."
      }, 
      {
        id: 2, 
        featureName: "2D Platforming Mechanics", 
        featureDesc: "Features responsive jumping, movement, and obstacle navigation designed to create smooth and engaging platforming experiences."
      }, 
      {
        id: 3, 
        featureName: "Beat Synchronization", 
        featureDesc: "Gameplay events and challenges are aligned with the soundtrack to create a cohesive rhythm game experience."
      }, 
    ],
  },

  {
    slug: "toggl",

    title: "Toggl",

    subtitle: "Task Tracking Application", 

    cover: togglimg,

    hero: [
      recent3,
    ],

    client: "Academic Project",

    role: "Java Developer",

    duration: "January 2025",

    team: "Alfred Alcala",

    repository: "Public",

    github: "https://github.com/liliput35/Toggl",
    
    about: "Toggl is a Java Swing-based desktop task management application developed as a final project for Object-Oriented Programming. The application enables users to create accounts, securely manage personal task lists, and organize tasks with attributes such as priority, status, and due dates. It features persistent CSV-based storage, account authentication, and a graphical user interface following the Model-View-Controller (MVC) architecture.",

    tech: ["Java"],

    features: [
      {
        id: 1, 
        featureName: "Task Management", 
        featureDesc: "Supports creating, editing, deleting, and organizing tasks with customizable priority levels, statuses, and due dates."
      }, 
      {
        id: 2, 
        featureName: "Task Filtering", 
        featureDesc: "Allows users to sort and view tasks based on priority, status, or due date for better organization and productivity."
      }, 
      {
        id: 3, 
        featureName: "Java Swing GUI", 
        featureDesc: "Built with a responsive Java Swing interface using the MVC design pattern to provide an intuitive desktop task management experience."
      }, 
    ],

  },
];