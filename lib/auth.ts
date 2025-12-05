export async function hashPassword(p:string){
 const enc=new TextEncoder().encode(p);
 const hash=await crypto.subtle.digest('SHA-256',enc);
 return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
export function generateToken(payload:any){
 return btoa(JSON.stringify(payload));
}
export function parseToken(t:string){
 try{return JSON.parse(atob(t));}catch{return null;}
}