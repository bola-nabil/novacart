import { useState, useEffect } from "react";

const Timer = ({endTime, color="red-700"}) => {
    const endDate = new Date(`${endTime}`).getTime();

    const calculateTimeLeft = () => {
        const difference = endDate - new Date().getTime();

        if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),
            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),
            seconds: Math.floor(
                (difference / 1000) % 60
            ),
        };
    };

    const [time, setTime] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
        setTime(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        return time.toString().padStart(2, "0");
    };


    return (
        <div className="flex items-center gap-2">
            <div className={`text-white font-bold bg-${color} rounded-md px-5 py-2 text-2xl`}>
                {formatTime(time.days)}
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className={`text-white font-bold bg-${color} rounded-md px-5 py-2 text-2xl`}>
                {formatTime(time.hours)}
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className={`text-white font-bold bg-${color} rounded-md px-5 py-2 text-2xl`}>
                {formatTime(time.minutes)}
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className={`text-white font-bold bg-${color} rounded-md px-5 py-2 text-2xl`}>
                {formatTime(time.seconds)}
            </div>
        </div>
    );
}

export default Timer;