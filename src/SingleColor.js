import React,{useState,useEffect} from 'react';

const SingleColor = ({rgb,weight,hexColor,index}) => {
 const [alert,setAlert] = useState(false);
 const background = rgb.join(',');
 const hexValue = `#${hexColor}`;

 useEffect(()=>{
   const hide = setTimeout(()=>{
          setAlert(false);
   },3000);
   return ()=>clearTimeout(hide)

 },[alert])
 const clicked = ()=>{
  setAlert(true);
  navigator.clipboard.writeText(hexValue);

 }
  return (
    <article className = {`color ${index > 10 && 'light'}`}  style={{backgroundColor:`rgb(${background})`}} onClick={clicked}>
    <p>{weight}%</p>
    <p>{hexValue}</p>
    <p> {alert && <p>Copied</p>}</p>
    </article>
  )
}

export default SingleColor
