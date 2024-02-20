import React from 'react'
import StatsCards from './components/StatsCards'
import Charts from './components/Charts';

const index = () => {
  return (
    <div className="">
      <StatsCards />
      <div className="my-4">
        <Charts />
      </div>
    </div>
  );
}

export default index