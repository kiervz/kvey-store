import{u as l,r as i,b as u}from"./index.f58e1107.js";import{a as p}from"./AxiosClient.d2a9e21e.js";import{u as d}from"./useDispatch.39f40752.js";const b=()=>{const t=new URLSearchParams(window.location.search).get("code"),r=d(),e=l(),c=async()=>{var a,o;try{const{data:s}=await p.post(`/api/v1/auth/callback/google?code=${t}`);r(u.setUser(s.response)),s!=null&&Boolean(s.response.user.roles.includes(1))?e("/dashboard"):s!=null&&Boolean(s.response.user.roles.includes(2))&&e("/home")}catch(s){const n=(o=(a=s.response)==null?void 0:a.data)==null?void 0:o.message;console.log(n)}};return i.exports.useEffect(()=>{c()},[]),null};export{b as AuthGoogleCallback,b as default};