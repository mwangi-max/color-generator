import React,{useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

const App = () => {
 const[color,setColor] = useState('');
 const [list,setList] = useState(new Values('#f15025').all(10));
 const [error,setError] = useState(false);

 const formSubmit = (e) =>{
  e.preventDefault();
  setError(false)

  try {
   const colors = new Values(color).all(10);
   setList(colors);
   
  } catch (error) {
   setError(true);
   console.log(error)
   
  }
  
 }
  return (
   <>

   
    <section>

     <h2>Color Generator</h2>

       <form onSubmit={formSubmit}>
        <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} className={`${error ? 'danger' : 'success'}`} placeholder='Your Hex Values Here'/>
        <button type='submit'>GENERATE</button>
       </form>
      
    </section>

    <section>
     <div className='container'>
           {
            list.map((color,index) =>{
             return <SingleColor key={index} {...color} hexColor={color.hex} index={index}/>
            })
           }
     </div>
     
    </section>
   
   
   </>
  )
}

export default App
