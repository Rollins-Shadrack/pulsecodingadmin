import React from 'react'
import { cn } from '@/lib/utils';

const FeaturedCard = ({label, icon, number, desc}) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border p-5 shadow">
      <section className="flex justify-between gap-2">
        <p className="text-sm">{label}</p>
        <div>{React.createElement(icon, { size: "20" })}</div>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{number}</h2>
        <p className="text-xs text-gray-500">{desc}</p>
      </section>
    </div>
  );
}

export default FeaturedCard
