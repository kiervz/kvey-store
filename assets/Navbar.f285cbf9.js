import{r as h,i,j as e,a as s,L as t,F as n}from"./index.2e41866a.js";import{a as m,b as u}from"./index.esm.e4bbd44d.js";import"./iconBase.9b0573a3.js";const p="/assets/user.000c23c4.jpg",f=()=>{const[r,c]=h.exports.useState(!1),a=i(o=>o.user.user),d=i(o=>o.cart),l=()=>{c(!r)};return e("nav",{className:"text-slate-900 bg-white py-2 px-4 fixed top-0 w-full z-30 shadow-sm",children:s("div",{className:"container mx-auto px-4 flex justify-between items-center",children:[e("p",{className:"text-sm uppercase font-bold p-2",children:e(t,{to:"/",children:"Kvey Store"})}),s("ul",{className:"flex justify-between gap-4 p-2",children:[e("li",{className:"block",children:e(t,{to:"/shop",children:"Shop"})}),e("li",{className:"hidden sm:block",children:e(t,{to:"/brand",children:"Brand"})})]}),s("ul",{className:"flex justify-between gap-4 items-center",children:[e(t,{to:"/wish-list",children:s("li",{className:"hidden sm:block text-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2 hover:text-slate-900 relative",children:[e(m,{size:24}),e("div",{className:"bg-blue-500 rounded-full absolute -top-1 -right-1 text-sm w-5 flex justify-center items-center text-white",children:e("p",{className:"mx-auto",children:"0"})})]})}),e(t,{to:"/cart",children:s("li",{className:"text-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2 hover:text-slate-900 relative",children:[e(u,{size:24}),e("div",{className:"bg-blue-500 rounded-full absolute -top-1 -right-1 text-sm w-5 flex justify-center items-center text-white",children:e("p",{className:"mx-auto",children:d.totalCartItems})})]})}),s("li",{className:"cursor-pointer relative",children:[e("img",{className:"w-8 h-8 object-cover rounded-full border-2 focus:border-slate-900 ",src:p,onClick:()=>c(!r),alt:"user icon"}),e("div",{className:`${!r&&"hidden"} bg-white py-2 rounded-lg mt-2 absolute right-0 w-48 shadow-xl border`,children:(a==null?void 0:a.token)!=""?s(n,{children:[e(t,{to:"/settings",className:"text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block",onClick:l,children:"Account Settings"}),e(t,{to:"/logout",className:"text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block",onClick:l,children:"Logout"})]}):s(n,{children:[e(t,{to:"/login",className:"text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block",onClick:l,children:"Login"}),e(t,{to:"/register",className:"text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block",onClick:l,children:"Register"})]})})]})]})]})})};export{f as Navbar,f as default};
