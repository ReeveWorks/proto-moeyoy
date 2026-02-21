import {useSelector, useDispatch} from 'react-redux'
import { togglemode } from './states/slices/darkmodeSlice'

function Header() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  const dispatch = useDispatch();

  return (
    <></>
  )
}

export default Header