import React from 'react';
import Modal from 'react-modal';

interface LinkButtonProps {
  title: string;
  url: string;
  id?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, url, id }) => {
  const linkUrl = id ? `https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/${id}` : url;

  if (title === 'Watch Avalon') {
    return (
      <button
        // ...other button properties
        onClick={() => (url)}
      >
        {title}
      </button>
    );
  } else {
    return (
      <a
        href={linkUrl}
        // ...other anchor tag properties
      >
        {title}
      </a>
    );
  }
};

export default LinkButton;
