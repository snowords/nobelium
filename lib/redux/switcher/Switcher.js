import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMode } from './switcherSlice'

export default function Counte () {
  const mode = useSelector((state) => state.switcher.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(changeMode())}
      >
        切换模式
      </button>
      <span>{mode}</span>
    </div>
  )
}
