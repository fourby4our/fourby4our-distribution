import { getDB } from '../../../../lib/db';
import { hashPassword } from '../../../../lib/auth';
import { v4 as uuid } from 'uuid';
export const runtime='edge';
export async function POST(req,ctx){
 const db=getDB(ctx.env);
 const {email,password,name,role}=await req.json();
 const h=await hashPassword(password);
 try{
  await db.prepare("INSERT INTO users (id,email,password_hash,name,role) VALUES (?,?,?,?,?)")
    .bind(uuid(),email,h,name,role||'artist').run();
  return new Response(JSON.stringify({success:true}));
 }catch(e){
  return new Response(JSON.stringify({error:'exists'}),{status:400});
 }
}
