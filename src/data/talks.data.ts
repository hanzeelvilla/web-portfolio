import type { Talk } from "../types";
import placeholderBanner from "../assets/images/talks/2025-01-placeholder-talk/banner.webp";
import {
  arduinoLogo,
  cLogo,
  cppLogo,
  iotLogo,
  javascriptLogo,
  rustLogo,
} from "./techLogos.data";

export const talksData: Talk[] = [
  {
    title: "IAOT con Arduino",
    event: "Web Dev Talks",
    location: "Colima, Mexico",
    date: "2026-01-28",
    attendees: 100,
    summary:
      "An introduction to integrating Artificial Intelligence with the Internet of Things (AIoT) using Arduino. Aimed at developers and hardware enthusiasts, attendees learned how to connect sensors and run smart models on microcontrollers.",
    banner: placeholderBanner,
    topics: [arduinoLogo, cLogo, cppLogo, iotLogo],
    language: "Spanish",
    format: "In person",
    postUrl:
      "https://www.instagram.com/p/DT_PBVAgULJ/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    title: "Primeros pasos en Rust",
    event: "Playas On Tech",
    location: "Manzanillo, Mexico",
    date: "2026-11-12",
    attendees: 100,
    summary:
      "An introductory session exploring the fundamentals of the Rust programming language. Designed for developers curious about systems programming, covering memory safety, ownership concepts, and building initial projects.",
    banner: placeholderBanner,
    topics: [rustLogo],
    language: "Spanish",
    format: "In person",
    postUrl:
      "https://www.instagram.com/p/DfnL-JMibl2/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    title: "Todo hay que orientarlo a IoT",
    event: "JSConf MX",
    location: "Guadalajara, Mexico",
    date: "2025-10-30",
    attendees: 300,
    summary:
      "A talk exploring the potential of connecting everyday solutions and web technologies to the Internet of Things. Geared toward JavaScript and software developers, demonstrating how to bridge the digital and physical worlds.",
    banner: placeholderBanner,
    topics: [javascriptLogo, iotLogo],
    language: "Spanish",
    format: "In person",
    postUrl:
      "https://www.instagram.com/p/DNgd9HJPARw/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    recordingUrl: "https://www.youtube.com/watch?v=6zMbLGe3lys&t=1675s",
  },
];
