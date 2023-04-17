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
            className="border border-solid border-amber-300 text-gray-200 bg-transparent hover:bg-amber-300 hover:text-gray-950 font-medium text-lg px-6 py-2 rounded transition-all duration-200 ease-in-out"
            onClick={openModal}
          >
            Watch Avalon
          </button>

          <Link 
          href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/"
            
              className="items-center justify-center shadow-lg shadow-grey-500/40 text-base font-medium rounded text-gray-950 hover:bg-zinc-950 hover:text-zinc-50  border bg-gray-50 border-slate-300 hover:border-slate-100 px-6 py-2 transition-all duration-150 ease-in-out"
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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1"
          title="Avalon Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          className="rounded"
        ></iframe>
      </Modal>
    </div>
  );
};

export default Introduction
