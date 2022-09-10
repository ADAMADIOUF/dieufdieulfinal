import React,{useState,useEffect} from 'react'

const Modal = () => {
 const [show, setShow] = useState("show modal")
 useEffect(() => {
   setInterval(() => {
     setShow(true)
   }, 5000)
 }, [])
  return (
    <div>{show}</div>
  )
}

export default Modal