import { hashPassword, generateToken } from '@/lib/auth';
import { getDB } from '@/lib/db';
export const runtime='edge';
export async function POST(req,ctx){
 const db=getDB(ctx.env);
 const {email,password}=await req.json();
 const h=await hashPassword(password);
 const u=await db.prepare("SELECT * FROM users WHERE email=? AND password_hash=?").bind(email,h).first();
 if(!u) return new Response(JSON.stringify({error:'invalid'}),{status:400});
 const token=generateToken({id:u.id,email:u.email,role:u.role});
 return new Response(JSON.stringify({success:true}),{
  headers:{'Set-Cookie':`session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict;`}
 });
}