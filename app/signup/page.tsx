'use client';
import { useState } from 'react';
export default function Signup(){
 const [form,setForm]=useState({email:'',password:'',name:'',role:'artist'});
 async function submit(){
  await fetch('/api/auth/signup',{method:'POST',body:JSON.stringify(form)});
  window.location.href='/login';
 }
 return <div>Signup
 <input placeholder="name" onChange={e=>setForm({...form,name:e.target.value})}/>
 <input placeholder="email" onChange={e=>setForm({...form,email:e.target.value})}/>
 <input type="password" placeholder="password" onChange={e=>setForm({...form,password:e.target.value})}/>
 <select onChange={e=>setForm({...form,role:e.target.value})}>
   <option value="artist">Artist</option>
   <option value="label">Label</option>
 </select>
 <button onClick={submit}>Signup</button>
 </div>;
}