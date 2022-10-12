import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import './Chart.css'


const Chart = () => {
    const data_raw = useLoaderData();
    const data = data_raw['data'];
    console.log(data)
    return (
        <div className='chart'>
            <h2>Total questions/topic at a glance</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="total"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#47B5FF"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;