import React from 'react'
import StatsCards from './components/StatsCards'

import Barchart from './components/Barchart';

const index = () => {
  return (
    <div className="">
      <StatsCards />
      <div className="my-4 mt-10">
        <Barchart/>
      </div>
    </div>
  );
}

export default index