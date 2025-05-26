import "./Header.css";
import headshot from "../../assets/Headshot.jpg";
import headshot_shy from "../../assets/Headshot_Shy.png";
import headshot_talk from "../../assets/Headshot_Talk.png";
import { useState } from "react";
import HeaderIconsTypes from "../../enums/HeaderIconsTypes";
function Headers() {
  const [headshotImg, setHeadshotImg] = useState(headshot);
  const [selectedIcon, setSelectedIcon] = useState<HeaderIconsTypes | null>(
    null
  );

  let boxMessage = "";
  if (selectedIcon === HeaderIconsTypes.EMAIL) {
    boxMessage = "Click to copy my email!";
  } else if (selectedIcon === HeaderIconsTypes.GITHUB) {
    boxMessage = "Click to checkout my github!";
  } else if (selectedIcon === HeaderIconsTypes.LINKEDIN) {
    boxMessage = "Check out my linkedin!";
  } else if (selectedIcon === HeaderIconsTypes.EMAIL_CONFIRMATION) {
    boxMessage = "Email is copied!";
  } else {
    boxMessage = "Click to download my resume!";
  }

  const iconOnMouseEnter = (type: HeaderIconsTypes) => {
    setSelectedIcon(type);
    setHeadshotImg(headshot_talk);
  };
  const iconOnMouseLeave = () => {
    setSelectedIcon(null);
    setHeadshotImg(headshot);
  };

  return (
    <header>
      {/* <div id="box" className={selectedIcon === null ? "disabled" : ""}> */}
      <div id="box" >
        <div>{boxMessage}</div>
      </div>
      <img
        src={headshotImg}
        onMouseEnter={() => setHeadshotImg(headshot_shy)}
        onMouseLeave={() => setHeadshotImg(headshot)}
      />
      <h1>Moinuddin Shaikh</h1>
      <h3>Full stack developer</h3>

      <nav>
        <ul>
          <li
            onMouseEnter={() => {
              iconOnMouseEnter(HeaderIconsTypes.EMAIL);
            }}
            onMouseLeave={() => {
              iconOnMouseLeave();
            }}
          >
            <button
              onClick={() => {
                navigator.clipboard.writeText("moinuddinshaikh173@gmail.com");
                setSelectedIcon(HeaderIconsTypes.EMAIL_CONFIRMATION);
              }}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                height: "clamp(1rem, 4vw, 1.5rem)",
              }}
            >
              <svg
                style={{ transform: "scaleX(1.1)" }}
                className="contact-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </button>
          </li>
          <li
            onMouseEnter={() => {
              iconOnMouseEnter(HeaderIconsTypes.LINKEDIN);
            }}
            onMouseLeave={() => {
              iconOnMouseLeave();
            }}
          >
            <a
              href="https://www.linkedin.com/in/shaikh-moinuddin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="contact-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/moinuddin95"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                iconOnMouseEnter(HeaderIconsTypes.GITHUB);
              }}
              onMouseLeave={() => {
                iconOnMouseLeave();
              }}
            >
              <svg
                className="contact-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </li>
        </ul>
        <button
          onMouseEnter={() => {
            iconOnMouseEnter(HeaderIconsTypes.RESUME);
          }}
          onMouseLeave={() => {
            iconOnMouseLeave();
          }}
        >
          <a href="/Resume.pdf" download className="download-btn">
            <span>
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </span>
          </a>
        </button>
      </nav>
    </header>
  );
}

export default Headers;
