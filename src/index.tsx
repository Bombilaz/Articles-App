import React from "react";
import { createRoot } from 'react-dom/client';

const getTestString = (): string => {return 'привет'}


const root = createRoot(document.getElementById('root-div'));
root.render(<h1>Hello, {getTestString()}</h1>);
