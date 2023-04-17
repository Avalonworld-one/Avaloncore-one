// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import ProductSection from '../components/ProductSection';
import AvalonFeatures from '../components/AvalonFeatures';

// Inside the component's JSX



import { GetServerSideProps } from 'next';
import { fetchData } from '../services/apiService';

interface HomepageProps {
  data: any; // Replace 'any' with the appropriate data type
}

const Homepage: React.FC<HomepageProps> = ({ data }) => {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <ProductSection />
        <AvalonFeatures />
        {/* Add other sections here */}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
};

export default Homepage;
