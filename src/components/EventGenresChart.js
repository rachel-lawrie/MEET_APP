// src/components/EventGenresChart.js

import { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return { name: genre, value: filteredEvents.length };
    });
    return data;
  };

  //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  //   const RADIAN = Math.PI / 180;
  //   const renderCustomizedLabel = ({
  //     cx,
  //     cy,
  //     midAngle,
  //     innerRadius,
  //     outerRadius,
  //     percent,
  //     index,
  //   }) => {
  //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //     return (
  //       <text
  //         x={x}
  //         y={y}
  //         fill="white"
  //         textAnchor={x > cx ? "start" : "end"}
  //         dominantBaseline="central"
  //       >
  //         {`${(percent * 100).toFixed(0)}%`}
  //       </text>
  //     );
  //   };

  return (
    <ResponsiveContainer className="event-chart" width="99%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          //   cx="50%"
          //   cy="50%"
          labelLine={false}
          //   label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
