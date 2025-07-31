import { useEffect, useState } from "react";

const Topbar = () => {
  const messages = [
    "Free shipping on all orders!",
    "50% off on selected items!",
    "New arrivals dropping soon!",
    "Join our membership for exclusive deals!"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar">
      <span className="fade-text">{messages[index]}</span>
    </div>
  );
};

export default Topbar;
