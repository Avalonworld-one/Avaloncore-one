import React from 'react';
import Link from 'next/link';

const AvalonFeatures: React.FC = () => {
  return (
    <div className="py-8 px-4">
    <h2 className="text-center text-4xl font-bold mb-8 shadow-md" style={{backgroundImage: 'linear-gradient(to right, white, #E2E8F0, black)', backgroundSize: '100% 200%', backgroundPosition: 'right bottom', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Decentralized high-performance infrastructure</h2>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/" passHref>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 ease-in">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p>Feature 1 description.</p>
          </div>
        </Link>

        <Link href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/" passHref>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 ease-in">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p>Feature 2 description.</p>
          </div>
        </Link>

        <Link href="https://intechwetrust.gitbook.io/avalon-unified-operating-system-white-paper-v-1.2/" passHref>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 ease-in">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p>Feature 3 description.</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {/* Add your 4-column grid content here */}
      </div>
    </div>
  );
};

export default AvalonFeatures;
