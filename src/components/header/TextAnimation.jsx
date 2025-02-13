import React, { useState, useEffect } from 'react';
import './header.css';
const texts = ["Web Developer", "Mobile App Dev"];

const TextAnimation = () => {
  const [index, setIndex] = useState(0); // Track the current word in the texts array
  const [charIndex, setCharIndex] = useState(0); // Tracks the character position in the current word
  const [isDeleting, setIsDeleting] = useState(false); // Determines if text is being deleted
  const [text, setText] = useState(''); // Holds the text being displayed
  const [speed, setSpeed] = useState(150); // Controls the typing/deleting speed

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < texts[index].length) {
          setText((prev) => prev + texts[index].charAt(charIndex));
          setCharIndex(charIndex + 1);
          setSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex(charIndex - 1);
          setSpeed(50);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, speed]);

  return (
    <h5 className="text-light">{text}</h5>
  );
};

export default TextAnimation;
