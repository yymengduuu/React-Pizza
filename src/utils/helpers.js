import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function CountdownTimer() {
  const priorityFee = useSelector((state) => state.order.priorityFee);

  const deliveryDuration = priorityFee > 0 ? 20 : 30;

  const estimatedDeliveryTimeRef = useRef(
    new Date().getTime() + deliveryDuration * 60 * 1000,
  );

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(estimatedDeliveryTimeRef.current),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(estimatedDeliveryTimeRef.current));
    }, 1000);
    //  1000ms = 1s

    return () => clearInterval(timer);
  }, []);

  // const timerId = setInterval(() => {
  //   console.log('每隔 1 秒打印一次');
  // }, 1000); （1000ms)
  // clearInterval(timerId); (停止上面的 setInterval)

  function calculateTimeLeft(targetTime) {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      minutes: minutes > 0 ? minutes : 0,
      seconds: seconds > 0 ? seconds : 0,
      isDelivered: difference <= 0,
    };
  }

  if (timeLeft.isDelivered) {
    return (
      <p className="rounded-lg bg-orange-400 px-2 py-4">
        Your order has been delivered ✅
      </p>
    );
  }

  const estimatedTimeFormatted = new Date(
    estimatedDeliveryTimeRef.current,
  ).toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="mb-6 flex flex-wrap justify-between rounded-lg bg-stone-300 px-2 py-4">
      <p className="flex flex-row gap-2">
        Only {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')} minutes left 😃
        {/* str.padStart(targetLength, padString) */}
      </p>
      <p>(Estimated delivery: {estimatedTimeFormatted})</p>
    </div>
  );
}
