import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import User from "./User";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <User name="John" expertise="Développeur Front-End" />
        <User name="Mark" expertise="Développeur Back-End" />
        <User name="Sarah" expertise="Développeur DevOps" />
    </>
);