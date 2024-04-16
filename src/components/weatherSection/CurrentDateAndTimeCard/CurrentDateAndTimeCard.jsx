import React, { useEffect, useState, } from "react";

const CurrentDateAndTimeCard = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="current-date-and-time-card">
      <h2>Peculiar, MO</h2>
      <h2>{date.toString()}</h2>
    </div>
  );
};

export default CurrentDateAndTimeCard;