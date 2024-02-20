import { Card } from '@/components/ui/card';
import React from 'react'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {

    const randomData = Array.from({ length: 18 }, (_, index) => ({
      name: `${index + 1} ${index + 1 >= 12 ? "pm" : "am"}`,
      pv: Math.floor(Math.random() * 50) ,
      amt: Math.floor(Math.random() * 30) ,
    }));
  return (
    <Card className="p-2 shadow-lg">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart width="100%" height={400} data={randomData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#c3bcbc" />
          <Bar dataKey="pv" barSize={40} fill="#76bdad" />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Charts