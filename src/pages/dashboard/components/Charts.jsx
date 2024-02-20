import { Card } from '@/components/ui/card';
import React from 'react'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {

    const randomData = Array.from({ length: 20 }, (_, index) => ({
      name: `${index + 1} ${index + 1 >= 12 ? "pm" : "am"}`,
      uv: Math.floor(Math.random() * 20) ,
      pv: Math.floor(Math.random() * 50) ,
      amt: Math.floor(Math.random() * 30) ,
    }));
  return (
    <div className="w-full py-5">
      <h4 className="text-base font-medium mb-3">Taller Chart, with Secondary Axis</h4>
      <Card className="p-2 shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart width="100%" height={400} data={randomData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#c3bcbc" />
            <Bar dataKey="pv" barSize={40} fill="#76bdad" />
            <Line type="monotone" dataKey="uv" stroke="#8a6fd4" />
          </ComposedChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

export default Charts