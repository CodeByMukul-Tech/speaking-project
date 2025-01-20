import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Authenticator from './Component/Component_1.jsx';
import App from './App.jsx';
import "./Component/login_Card.css";
import { LoginCard } from './Component/component_3.jsx';
import Stopwatch from './Timer.jsx';
// import
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Authenticator>
             <Stopwatch /> 
            <LoginCard />
        </Authenticator>
    </StrictMode>
);
