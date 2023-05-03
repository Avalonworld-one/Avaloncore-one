// src/pages/index.tsx
import React from 'react';
import Introduction from '../components/Introduction';
import ProductSection from '../components/ProductSection';
import AvalonFeatures from '../components/AvalonFeatures';

const Homepage: React.FC = () => {
  return (
    <div>
      <main>
        <Introduction />
        <ProductSection />
        <AvalonFeatures />
        {/* Add other sections here */}
      </main>
    </div>
  );
};

export default Homepage;
