import React from "react";

const Reviews = () => {
  const reviewsData = [
    {
      name: "Maxwell Peterson",
      position: "GameFi Enthusiast & Investor",
      review:
        '"The Scholar Contract Application has truly transformed how I invest in GameFi. The automation of income distribution through smart contracts is a breakthrough. It has simplified my interactions within the GameFi ecosystem, allowing me to focus more on strategy rather than logistics."',
    },
    {
      name: "Li Wei",
      position: "Digital Asset Investor",
      review:
        '"As a digital asset investor, transparency is crucial for me. The Scholar Contract Application provides that transparency using blockchain technology, which I find extremely impressive. It has greatly simplified my asset management within the rapidly growing Metaverse market."',
    },
    {
      name: "Zhang Ming",
      position: "Metaverse Brand Strategist",
      review:
        '"The Scholar Contract Application has been a game-changer for brand strategy within the Metaverse. The level of automation and ease it provides in managing digital assets is unparalleled. It is a valuable tool for anyone looking to make a mark in the Metaverse space."',
    },
  ];

  return (
    <div className="mx-auto md:px-8 bg-black text-white">
 <p className="text-center mt-12 text-lg max-w-3xl mx-auto mb-12 items-center font-light text-neutral-500">
    Unmatched  {""}
    <code className="font-mono font-medium text-white">reliability</code>, {""}
    <code className="font-mono font-medium text-white">adaptability</code>, and  {""}
    <code className="font-mono font-medium text-white">user</code> {""}
    <code className="font-mono font-medium text-white">experience</code>.<br />
    Scholar Contract is relied upon by some of the most influential names in the industry.
</p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviewsData.map(({ name, position, review }, index) => (
          <div
            key={index}
            className="space-y-4 p-6 bg-zinc-950 border border-zinc-900 rounded-md"
          >
            <p className="font-bold">{name}</p>
            <p className="italic">{position}</p>
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
