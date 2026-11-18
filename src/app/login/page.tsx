"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
export default function Login(){
  const r=useRouter(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [msg,setMsg]=useState("");
  async function signIn(e:React.FormEvent){ e.preventDefault(); const sb=getSupabase();
    if(!sb) return setMsg("Supabase is not configured. Add the keys from .env.example.");
    const {error}=await sb.auth.signInWithPassword({email,password});
    if(error) return setMsg(error.message); r.push("/dashboard"); }
  async function reset(){ const sb=getSupabase(); if(!sb||!email) return setMsg("Enter your email first.");
    const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+"/login"});
    setMsg(error?error.message:"Password reset email sent."); }
  return (<main className="px-6 py-14 max-w-md mx-auto"><h1 className="text-3xl font-bold mb-6">Log in</h1>
    <form onSubmit={signIn} className="grid gap-3">
      <label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="block w-full border border-steel/40 rounded-md p-2"/></label>
      <label>Password<input type="password" required value={password} onChange={e=>setPassword(e.target.value)} className="block w-full border border-steel/40 rounded-md p-2"/></label>
      <button className="bg-ink text-white rounded-md py-2 font-semibold">Log in</button></form>
    <button onClick={reset} className="text-sm underline mt-3">Reset password</button>
    {msg&&<p role="status" className="mt-4 text-sm">{msg}</p>}</main>);
}
