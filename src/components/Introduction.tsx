// components/Introduction.tsx
// Main component of the landing page
import React, { useState } from "react";
import Image from "next/image";
import MockupImage from "../assets/phonemockup.svg";
import Modal from "react-modal";
import Link from "next/link";

Modal.setAppElement("#__next");

const Introduction: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 pb-10">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white whitespace-normal drop-shadow-2xl"
            style={{
              backgroundImage:
                "linear-gradient(#fff, hsla(0, 0%, 100%, .75))",
              backgroundSize: "100% 200%",
              backgroundPosition: "right bottom",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AvalonCore: Bridging Tech Divide Empower Business Expansion.
          </h1>
          <p className="mt-6 text-lg text-neutral-500 text-center max-w-3xl mx-auto whitespace-normal">
            Embrace the future with Avalon, redefining the metaverse through
            decentralization. Let&apos;s innovate, connect, and flourish in the
            new digital society together.
          </p>

          <div className="mt-20 sm:mt-10 flex justify-center gap-4 text-sm">
            <a
              className="bg-amber-400 cursor-pointer text-center flex items-center sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50 text-black font-normal border border-transparent h-12 px-4 space-x-3 rounded-lg dark:bg-yellow-500 dark:highlight-white/20 hover:bg-amber-300 whitespace-nowrap"
              onClick={openModal}
            >
              Watch Avalon
            </a>

            <a
              className="flex items-center justify-center cursor-pointer font-normal px-6 h-12 space-x-3 bg-transparent border border-gray-900 hover:text-zinc-900
              hover:bg-slate-100 focus:outline-none rounded-lg text-zinc-500
              dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
                target="_blank"
              >
                Whitepaper     
              </a>
        
          </div>

          <div className="flex flex-col items-center w-full mt-20 sm:mt-32 md:mt-40">
            <Image
              src={MockupImage}
              alt="Phone mockup"
              width={447}
              height={636}
              quality={75}
            />
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },

              content: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                background: "transparent",
                maxWidth: "80%",
                maxHeight: "80%",
                overflow: "hidden",
                padding: 0,
                margin: "auto",
              },
            }}
          >
            <button
              onClick={closeModal}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background =
                  "rgba(255, 255, 255, 0.5)";
              }}
              style={{
                position: "absolute",
                top: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "transparent",
                border: "2px solid white",
                borderRadius: "50%",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "white",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
            >
              &times;
            </button>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4Gdhh9UsAG0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Introduction;
