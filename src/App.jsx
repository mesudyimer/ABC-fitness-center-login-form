
import React from 'react'
import './style.css'
import { useState } from 'react'
const App = () => {
  const[username, setusername]=useState('')
  const[useremail,setuseremail]=useState('')
  const[userphone,setuserphone]=useState('')
  const[userage,setuserage]=useState('')
  const[sex,setsex]=useState('');
  const[usermember,setusermember]=useState('');
  const[usergoal,setusergoal]=useState('');
  const[userint,setuserint]=useState([])
const usergender=['male','female']
  const member=['monthly','3 month','anually']
  const ugoal=['Muscle Gain','weight Lost', "General Fitness",'Athletic Performance']
  const uInterest=['Weight lifting','Yoga','Cardio','Nutrition coatching']
 function handleintrest(e){
  const{checked,value}=e.target;
  setuserint(checked?[...userint,value]:userint.filter(uin=>uin!==value))
 }
  return (
    <div className='main'>
      <h1>ABC Fitness center</h1>
      <p>Please complete all field given bellow:</p>

      <form action="" method='post'>
        <label htmlFor="">
          Name:
          <input type="text" name='username' value={username} onChange={e=>setusername(e.target.value)}/>
        </label>
        <label htmlFor="">
          Email:
          <input type="email" name='' value={useremail}  onChange={e=>setuseremail(e.target.value)}/>
        </label>
        <label htmlFor="">
          Phone:
          <input type="tel" name='userphone' value={userphone} onChange={e=>setuserphone(e.target.value)} />
        </label>
        <label htmlFor="">
          Age:
          <input type="number" name='userage' value={userage} onChange={e=>setuserage(e.target.value)} min={5} max={80}/>
        </label>
        <label htmlFor="">
          Gender:
          <select value={sex} onChange={e=>setsex(e.target.value)}>
            {usergender.map(s=>(
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          
          </select>
            </label>
          <label htmlFor="">
             Membership Plan:
             {member.map(m=>
             <label key={m}>
             <input type="radio" 
             name='membership'
             value={m}
              onChange={e=>setusermember(e.target.value)} 
              checked={usermember===m}/>
              {m}
            </label>
             )}
          </label>
         <label htmlFor="">
          Goal:
          <select value={usergoal} onChange={e=>setusergoal(e.target.value)}>
            <option value="" selected disabled>Select Goal</option>
            {ugoal.map(gg=>(
            <option key={gg} value={gg}>
              {gg}
            </option>  
            ))}
          </select>
         </label>
         
        <label htmlFor="">
          Select Your intrest:
          {uInterest.map(intres=>(
            <label key={intres}>
              <input type="checkbox" 
              value={intres}
              onChange={handleintrest}
              checked={userint.includes(intres)}/>
              {intres}
            </label>
          ))}
        </label>
       <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default App