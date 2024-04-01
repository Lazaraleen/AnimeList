import React from "react";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import './modal.css';

function Modal({movie, status, toggleModal}) {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };
  
    useEffect(() => {
      if (status) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [status]);

    return (
        <div className={`movieModal ${status ? 'active' : undefined}`} ref={modalRef}>
            <div className="centered">
                <a href="#" className="modalClose" onClick={toggleModal}>
                    <ion-icon name="close-outline"></ion-icon>
                </a>
                <ReactPlayer
                    url={movie.video}
                    title={`${movie.title}`}
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    controls
                    width={1280}
                    height={720}
                />
            </div>
        </div>
    )
}

export default Modal;