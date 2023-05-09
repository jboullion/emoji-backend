import{C as j}from"./CommonTitle.207c5bbe.js";import{d as b,o,c,a as e,t as n,f as y,I as g,r as l,j as x,l as I,F as S,p as C,b as w,z as F,g as v,y as E}from"./vendor.d86d1c24.js";import{_ as M,b as $}from"./index.4d96d4fc.js";import{_ as k}from"./ErrorAlert.7b4db770.js";const N={class:"card shop-item"},V={class:"shop-image"},A={class:"card-body"},T={class:"mb-4"},q={class:"card-title"},L={class:"card-text"},O=e("span",null,"\u{1F3AB}",-1),z=b({props:{item:{type:Object,required:!0}},emits:["buyItem"],setup(t,{emit:r}){return(d,a)=>(o(),c("div",N,[e("span",V,n(t.item.emoji),1),e("div",A,[e("div",T,[e("h5",q,n(t.item.name),1),e("p",L,n(t.item.description),1)]),e("button",{type:"button",class:"btn btn-primary col-12",onClick:a[0]||(a[0]=s=>r("buyItem",t.item))},[O,y(" "+n(t.item.tickets),1)])])]))}});const f=t=>(C("data-v-b442bf2c"),t=t(),w(),t),D={id:"shop-modal",class:"modal fade",tabindex:"-1"},H={class:"modal-dialog"},G={class:"modal-content"},J={class:"modal-header"},K=f(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"}," \u2716\uFE0F ",-1)),P={class:"modal-body d-flex flex-column justify-content-between text-center"},Q={class:"mb-4 text-center"},R={class:"mb-5"},U={key:0,class:"spinner loading"},W=y("\u231B "),X=f(()=>e("span",{class:"visually-hidden"},"Loading...",-1)),Y=[W,X],Z=f(()=>e("span",null,"\u{1F3AB}",-1)),ee=b({props:{item:{type:Object,required:!0}},emits:["close"],setup(t,{emit:r}){const d=t,a=g("shopService"),s=l(!1),i=l([]);async function _(){try{await a.buyItem(d.item.id)&&r("close")}catch(u){const m=$(u);m&&i.value.push(m)}finally{s.value=!1}}return(u,m)=>(o(),c("div",D,[e("div",H,[e("div",G,[e("div",J,[e("h5",null,n(t.item.name),1),K]),e("div",P,[e("h3",Q,n(t.item.emoji),1),e("p",R,n(t.item.description),1),i.value.length?(o(),x(k,{key:0,errors:i.value},null,8,["errors"])):I("",!0),e("button",{class:"btn btn-primary fs-4 mb-3",onClick:_},[s.value?(o(),c("span",U,Y)):(o(),c(S,{key:1},[Z,y(" "+n(t.item.tickets),1)],64))])])])])]))}});var te=M(ee,[["__scopeId","data-v-b442bf2c"]]);const se={id:"shop",class:"page"},oe={class:"row text-center"},ae={class:"col-lg-3 col-md-4 col-sm-6 mb-4"},re=b({setup(t){const r=g("shopService"),d=l(!1),a=l([]);let s=null;const i=l({id:0,emoji:"",name:"",description:"",tickets:0}),_=l([]);function u(h){i.value=h,s&&s.show()}function m(){s&&s.hide()}return F(async()=>{s=new bootstrap.Modal(document.getElementById("shop-modal"));try{d.value=!0,_.value=await r.getItems()}catch(h){const p=$(h);p&&a.value.push(p)}finally{d.value=!1}}),(h,p)=>(o(),c("div",se,[v(j,{title:"Shop",subtitle:"Spend Tickets! Have Fun!"}),a.value.length?(o(),x(k,{key:0,errors:a.value},null,8,["errors"])):I("",!0),e("div",oe,[(o(!0),c(S,null,E(_.value,B=>(o(),c("div",ae,[v(z,{item:B,onBuyItem:u},null,8,["item"])]))),256))]),v(te,{item:i.value,onClose:m},null,8,["item"])]))}});export{re as default};
