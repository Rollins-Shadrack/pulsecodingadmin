import FeaturedCard from "@/components/FeaturedCard";
import { statsCards } from "@/constants/dashboard";
import React from "react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-5">
      {statsCards.map((card, idx) => (
        <FeaturedCard key={idx} label={card.label} icon={card.icon} desc={card.desc} number={card.number} />
      ))}
    </div>
  );
};

export default StatsCards;
