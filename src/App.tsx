import React, { useState, useRef } from 'react';
import SayHello from './SayHello';
import './App.css';

interface AppProps {
  initialName: string
}

const App: React.FC<AppProps> = ({initialName}) => {

  // Using an interface for props means TSC can use
  // type inference to manage the type of the 'name'
  // variable in component state.
  const [name, setName] = useState(initialName);

  // it's common to initialise refs with null
  const inputEl = useRef(null);

  const onChange = () => {
    if(inputEl) {
        // Force TS to ignore this as it can be null,
        // but we are handling this
        // @ts-ignore
      setName(inputEl.current.value)
    }
  };

  return (
    <div className="App">
        <input ref={inputEl} type="text" onChange={onChange}/>
        <SayHello name={name}/>
    </div>
  );
};

export default App;
