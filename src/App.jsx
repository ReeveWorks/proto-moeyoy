import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/darkmode/darkmodeSlice'

function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  function toggleDarkmode() {
    dispatch(togglemode(!darkmode.isDarkmode));
  }

  return (
    <>
      <div>
        <img className="clickable" src={darkmode.imageSource} alt="Dark Mode" onClick={() => toggleDarkmode()} />
      </div>
      <p>Dark Mode is <b>{darkmode.isDarkmode ? "Enabled" : "Disabled"}</b></p>
    </>
  )
}

export default App
