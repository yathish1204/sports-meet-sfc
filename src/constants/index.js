import temple from "../assets/temple.png";
import participants from "../assets/participants.png";
import torch from "../assets/events.png";
import winner from "../assets/winner.png";
import dateIcon from "../assets/Date.svg";
import locationIcon from "../assets/location.svg";
import heroImg from "../assets/Charaka.png";
import callIcon from "../assets/call.svg";
import SFC_logo from "../assets/sfc_logo.png";
import brandLogo from "../assets/brand-logo.png";
import pageNotFound from "../assets/404.png";
import carVideo from "../assets/output.mp4";

export const images = {
  dateIcon,
  locationIcon,
  heroImg,
  callIcon,
  SFC_logo,
  brandLogo,
  pageNotFound,
  carVideo,
};

export const rules = [
  "ಎಲ್ಲಾ ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ 16 ದೇವಸ್ಥಾನಗಳ (ಪದ್ಮಶಾಲಿ) ಸದಸ್ಯರು ಮಾತ್ರ ಭಾಗವಹಿಸಲು ಅವಕಾಶ",
  "ಒಂದು ದೇವಸ್ಥಾನದಿಂದ ವೈಯಕ್ತಿಕ ವಿಭಾಗದಲ್ಲಿ ಪ್ರತಿ ಸ್ಪರ್ಧೆಗೆ ಗರಿಷ್ಠ 3 ಸ್ಪರ್ಧಿ ಮತ್ತು ಒಬ್ಬ ಸ್ಪರ್ಧಿ ಯಾವುದಾದರೂ ಗರಿಷ್ಠ 3 ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು. (ಈ ನಿಯಮ 10 ವರ್ಷ ಒಳಗಿನವರಿಗೆ ಮತ್ತು 60 ವರ್ಷ ಮೇಲ್ಪಟ್ಟವರಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ) ಒಂದು ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಕನಿಷ್ಠ 5 ಸ್ಪರ್ಧಿಗಳಿಲ್ಲದಿದ್ದರೆ ಸ್ಪರ್ಧೆಯನ್ನು ಕೈಬಿಡಲಾಗುವುದು.",
  "ಮಹಾಸಭಾದ ನಿಯಮದಂತೆ ದೇವಸ್ಥಾನದವರು ರೂ.1000/-ನ್ನು ನೀಡಿ ನೊಂದಾವಣೆ ಮಾಡಬೇಕು",
  "ಕ್ರೀಡಾಕೂಟವು ಬೆಳಗ್ಗೆ 9-15ಕ್ಕೆ ಎಲ್ಲಾ ವಿಭಾಗಗಳ 800 ಮೀ. ಓಟ ಮತ್ತು ವಾಲಿಬಾಲ್, ಥ್ರೋಬಾಲ್ ಪಂದ್ಯಾಟದೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುವುದು.",
  "ವಾಲಿಬಾಲ್, ಥ್ರೋಬಾಲ್ ಮತ್ತು ಹಗ್ಗಜಗ್ಗಾಟ ತಂಡದವರು ಆಧಾರ್ ಕಾರ್ಡ್ ಪ್ರತಿ ಮತ್ತು ದೇವಸ್ಥಾನದ ಪತ್ರದೊಂದಿಗೆ ದಿನಾಂಕ 17-12-2022ರ ಒಳಗೆ ಹೆಸರನ್ನು ಕ್ರೀಡಾ ಸಂಚಾಲಕರು ಅಥವಾ ಕ್ರೀಡಾ ಕಾರ್ಯದರ್ಶಿಯವರಲ್ಲಿ ನೋಂದಾಯಿಸಬೇಕು.",
  "ವಾಲಿಬಾಲ್ ಥ್ರೋಬಾಲ್ ಪಂದ್ಯಗಳು ಕ್ರೀಡೋತ್ಸವ ದಿನದಂದು ಬೆಳಗ್ಗೆ 9-15ರಿಂದ ಮತ್ತು ಹಗ್ಗಜಗ್ಗಾಟ ಪಂದ್ಯಗಳು ಮಧ್ಯಾಹ್ನ 12-00ರಿಂದ ಆರಂಭಗೊಳ್ಳುತ್ತದೆ. 11 ವರ್ಷದಿಂದ 60 ವರ್ಷದವರೆಗಿನ ಕ್ರೀಡೆಗಳಲ್ಲಿ ವೈಯಕ್ತಿಕ ಚಾಂಪಿಯನ್‌ಶಿಪ್ ಪ್ರಶಸ್ತಿ ನೀಡಲಾಗುತ್ತದೆ.",
  "ತೀರ್ಪುಗಾರರ ಮತ್ತು ಸಂಘಟಕರ ತೀರ್ಮಾನವೇ ಅಂತಿಮ. ಯಾವುದೇ ಚರ್ಚೆಗೆ ಅವಕಾಶವಿಲ್ಲ, ಚರ್ಚೆಗಳು ಕಂಡುಬಂದಲ್ಲಿ ಆ ತಂಡವನ್ನು ಕೈ ಬಿಡಲಾಗುವುದು.",
];

export const sponsors = [
  {
    name: "Harsh Foundation",
    location: "Salikeri",
    desc: "Supporting community growth and sports.",
  },
  {
    name: "Seva Samithi",
    location: "Salikeri",
    desc: "Empowering youth through service.",
  },
  {
    name: "Sri Brahmalinga Veerabhadra Durgaparameshwari Temple",
    location: "Salikeri",
    desc: "Blessings and support for the event.",
  },
  {
    name: "Harsh Foundation",
    location: "Salikeri",
    desc: "Supporting community growth and sports.",
  },
  {
    name: "Seva Samithi",
    location: "Salikeri",
    desc: "Empowering youth through service.",
  },
  {
    name: "Sri Brahmalinga Veerabhadra Durgaparameshwari Temple",
    location: "Salikeri",
    desc: "Blessings and support for the event.",
  },
];

export const contacts = [
  { name: "A Shetigar", phone: "7865498521" },
  { name: "B Shettigar", phone: "8542347894" },
  { name: "C Shettigar", phone: "7745621542" },
  { name: "D Shettigar", phone: "3626661745" },
];

export const eventHighlights = [
  {
    count: "16",
    title: "Temples",
    image: temple,
    ifPlus: "",
  },
  {
    count: "70",
    title: "Events",
    image: torch,
    ifPlus: "+",
  },
  {
    count: "1000",
    title: "Participants",
    image: participants,
    ifPlus: "+",
  },
  {
    count: "200",
    title: "Winners",
    image: winner,
    ifPlus: "+",
  },
];
