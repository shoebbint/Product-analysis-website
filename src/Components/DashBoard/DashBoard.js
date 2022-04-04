
import React, { useEffect, useState, PureComponent } from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, XAxis, YAxis, Tooltip } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className='d-flex container border border-info border-3'>
            <div>
                <h2>Month wise sell</h2>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />

                    <XAxis dataKey="month"></XAxis>
                    <YAxis  ></YAxis>
                    <Tooltip />
                    <CartesianGrid />

                </LineChart>
            </div>
            <div>
                <h2 className=''>Per month Revenue</h2>
                <PieChart width={700} height={300}>
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>

            </div>
        </div>
    );
};

export default DashBoard;