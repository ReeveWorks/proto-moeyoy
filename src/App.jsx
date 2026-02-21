import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/slices/darkmodeSlice'

import Header from './components/header.jsx';


function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  function toggleDarkmode() {
    dispatch(togglemode(!darkmode.isDarkmode));
  }

  return (
    <>
      <Header />
      <div>
        <img className="clickable" src={darkmode.imageSource} alt="Dark Mode" onClick={() => toggleDarkmode()} />
      </div>
      <p>Dark Mode is <b>{darkmode.isDarkmode ? "Enabled" : "Disabled"}</b></p>
      <button>This is a button :D</button>
    </>
  )
}

export default App
