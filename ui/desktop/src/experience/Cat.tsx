import { useEffect, useState } from 'react';

const FRAMES = [
  ` /\\_/\\
( o.o )
 > ^ <`,
  ` /\\_/\\
( -.- )
 > ^ <`,
];

export default function Cat() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame(1);
      setTimeout(() => setFrame(0), 180);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <pre
      title="meow"
      className="absolute top-3 right-4 text-green-300 leading-tight select-none cursor-pointer"
      onClick={() => setFrame((f) => 1 - f)}
    >
      {FRAMES[frame]}
    </pre>
  );
}
