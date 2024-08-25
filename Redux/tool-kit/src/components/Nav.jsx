import { useSelector, useDispatch } from 'react-redux'

const Nav = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      i am navbar {count}
    </div>
  )
}

export default Nav
