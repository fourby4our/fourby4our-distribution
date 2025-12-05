'use client';
import { useState } from 'react';
export default function Login(){
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 async function submit(){
  await fetch('/api/auth/login',{method:'POST',body:JSON.stringify({email,password})});
  window.location.href='/dashboard';
 }
 return <div>Login
 <input onChange={e=>setEmail(e.target.value)} placeholder="email"/>
 <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="password"/>
 <button onClick={submit}>Login</button>
 </div>;
}