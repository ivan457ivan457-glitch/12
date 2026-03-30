
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center p-4 min-w-[80px] md:min-w-[120px]">
      <span className="text-4xl md:text-6xl font-extralight serif text-stone-800">{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] md:text-xs tracking-widest uppercase text-stone-400 mt-2">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-2 md:gap-8">
      <TimeUnit value={timeLeft.days} label="Дней" />
      <div className="text-stone-200 text-3xl font-thin">:</div>
      <TimeUnit value={timeLeft.hours} label="Часов" />
      <div className="text-stone-200 text-3xl font-thin">:</div>
      <TimeUnit value={timeLeft.minutes} label="Минут" />
      <div className="text-stone-200 text-3xl font-thin">:</div>
      <TimeUnit value={timeLeft.seconds} label="Секунд" />
    </div>
  );
};

export default Countdown;
