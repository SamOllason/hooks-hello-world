import React from 'react';
import './App.css';

interface SayHelloProps {
    name: string
}

const SayHello: React.FC<SayHelloProps> = ({name}) => {
  return (
    <p>Hello {name}!</p>
  );
};

export default SayHello;
