"use client";
import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import { SELF_SIGNUP } from "@/lib/permissions";
const labels:Record<string,string>={learner:"Learner",teacher:"Teacher",tvet_trainer:"TVET Trainer"};
export default function Register(){
  const [f,setF]=useState({name:"",email:"",password:"",country:"Kenya",role:"learner"}); const [msg,setMsg]=useState("");
  async function submit(e:React.FormEvent){ e.preventDefault(); const sb=getSupabase();
    if(!sb) return setMsg("Supabase is not configured. Add the keys from .env.example.");
    if(f.password.length<8) return setMsg("Use a password of at least 8 characters.");
    const {error}=await sb.auth.signUp({email:f.email,password:f.password,options:{data:{full_name:f.name,role:f.role,country:f.country}}});
    setMsg(error?error.message:"Account created. Check your email to verify, then log in."); }
  const set=(k:string)=>(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>setF({...f,[k]:e.target.value});
  const box="block w-full border border-steel/40 rounded-md p-2";
  return (<main className="px-6 py-14 max-w-md mx-auto"><h1 className="text-3xl font-bold mb-6">Create your account</h1>
    <form onSubmit={submit} className="grid gap-3">
      <label>Full name<input required value={f.name} onChange={set("name")} className={box}/></label>
      <label>Email<input type="email" required value={f.email} onChange={set("email")} className={box}/></label>
      <label>Password<input type="password" required value={f.password} onChange={set("password")} className={box}/></label>
      <label>Country<input required value={f.country} onChange={set("country")} className={box}/></label>
      <label>I am a<select value={f.role} onChange={set("role")} className={box}>{SELF_SIGNUP.map(r=><option key={r} value={r}>{labels[r]}</option>)}</select></label>
      <button className="bg-ember text-ink rounded-md py-2 font-semibold">Create account</button></form>
    {msg&&<p role="status" className="mt-4 text-sm">{msg}</p>}</main>);
}
