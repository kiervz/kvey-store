const n=(e,r="\u20B1",t=2)=>r+""+parseFloat(e.toString()).toFixed(t).replace(/\d(?=(\d{3})+\.)/g,"$&,"),s=(e,r)=>e.length>r?e.substring(0,r)+"...":e,a=e=>{const r=new Set;return e.filter(t=>r.has(t.id)?!1:(r.add(t.id),!0))};export{n as c,a as r,s as t};
