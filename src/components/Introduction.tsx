import React, { useState } from 'react';
import Image from 'next/image';
import MockupImage from '../assets/phonemockup.svg';
import Modal from 'react-modal';
import Link from 'next/link';

Modal.setAppElement('#__next');

const Introduction: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div>
      <h2 className="text-white text-6xl tracking-wide font-black mt-16 text-center">
        Avalon: Enhance connectivity and foster limitless expansion.
        </h2>
        <div>
        <p className="text-gray-600 sm:text-lg text-semibold tracking-wider mb-8 max-w-1xl text-center">
          Avalon, the first Metaverse Operating System, revolutionizes digital interaction by enabling creativity, collaboration, and investment. Explore limitless possibilities in a world where imagination knows no boundaries.
        </p>

 
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src={MockupImage}
          alt="Phone mockup"
          width={447}
          height={636}
          quality={75}
        />
      </div>
      </div>

      <div className="flex flex-row gap-4 items-center">
          <button
            className="border border-solid border-amber-300 text-gray-200 bg-transparent hover:bg-amber-300 hover:text-gray-980 font-medium text-lg px-6 py-2 rounded transition-all duration-200 ease-in-out"
            onClick={openModal}
          >
            Watch Avalon
          </button>

          <Link 
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
            
              className="items-center justify-center shadow-lg shadow-grey-800/40 text-base font-medium rounded text-gray-980 hover:bg-zinc-980 hover:text-zinc-80  border bg-gray-80 border-slate-300 hover:border-slate-80 px-6 py-2 transition-all duration-180 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
          </Link>
        </div>  

     

        <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   
    
    },

    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      background: 'transparent',
      maxWidth: '80%',
      maxHeight: '80%',
      overflow: 'hidden',
      padding: 0,
      margin: 'auto',
    },
  }}
>
  <button
    onClick={closeModal}
    onMouseEnter={(e) => {
      (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.5)';
    }}
    onMouseLeave={(e) => {
      (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.5)';
    }}
    style={{
      position: 'absolute',
      top: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'transparent',
      border: '2px solid white',
      borderRadius: '50%',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    
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
  );
};

export default Introduction
