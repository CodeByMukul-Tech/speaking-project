import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Likes from './Hooks_with_v19/old/UseState_Hooks.jsx'
import './like_button.css';

import PostStory from './Hooks_with_v19/old/Useeffect.jsx'
// import P from './Hooks_with_v19/old/Useeffect.jsx'
// import Use from './Hooks_with_v19/old/Useeffect.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     {/* <Likes/> */}
     <PostStory/>
  </StrictMode>,
)
