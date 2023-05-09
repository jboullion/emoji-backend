import{d as V,r as m,H as k,I as S,J as v,e as E,o as b,c as F,g as i,a as r,j as B,l as L,u as l,h as p,t as w,f as _,A as I,p as P,b as N}from"./vendor.d86d1c24.js";import{v as T,a as j}from"./validation.36d38792.js";import{_ as A,g as $,a as g,b as q}from"./index.a680c4da.js";import{C as U}from"./CommonTitle.ae908bbc.js";import{_ as D}from"./ErrorAlert.5ef4c2b2.js";const y=n=>(P("data-v-63e72a29"),n=n(),N(),n),H={id:"login",class:"page"},J=["onSubmit"],M={class:"form-btns"},O=["disabled"],Q=y(()=>r("span",null,"\u{1F3B2}",-1)),R=y(()=>r("span",null,"\u{1F4CB}",-1)),z=_(" Create Account"),G=_(" \u2754 Forgot Password "),K=V({setup(n){const d=m(!1);k();const h=S("authService"),t=m(!1),u=m([]),a=v({email:$("email"),password:""}),s=v({email:"",password:""});function x(){let o=!0;u.value=[],s.email="",s.password="",s.email=T(a.email),s.email&&(o=!1),s.password=j(a.password),s.password&&(o=!1),o&&C()}async function C(){try{t.value=!0;const o={email:a.email,password:a.password};(await h.signin(o)).accessToken}catch(o){const e=q(o);e&&u.value.push(e)}finally{t.value=!1}}return(o,e)=>{const f=E("router-link");return b(),F("div",H,[i(U,{title:"Login"}),r("form",{onSubmit:I(x,["prevent"]),class:"",novalidate:"",autocomplete:"off"},[u.value.length?(b(),B(D,{key:0,errors:u.value},null,8,["errors"])):L("",!0),i(g,{wrapClass:"mb-3",label:"Email",id:"emoji-email",type:"email",modelValue:l(a).email,"onUpdate:modelValue":e[0]||(e[0]=c=>l(a).email=c),disabled:t.value,required:"",error:l(s).email},null,8,["modelValue","disabled","error"]),i(g,{wrapClass:"mb-4",label:"Password",id:"password",type:d.value?"text":"password",modelValue:l(a).password,"onUpdate:modelValue":e[2]||(e[2]=c=>l(a).password=c),disabled:t.value,required:"",error:l(s).password},{button:p(()=>[r("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=c=>d.value=!d.value),"aria-label":"Toggle Show Old Password"},[r("span",null,w(d.value?"\u{1F576}\uFE0F":"\u{1F453}"),1)])]),_:1},8,["type","modelValue","disabled","error"]),r("div",M,[r("button",{type:"submit",class:"btn btn-primary w-100 mb-3 fs-5",disabled:t.value},[Q,_(" "+w(t.value?"Loading...":"Login"),1)],8,O),i(f,{to:"/register",class:"btn btn-outline-secondary w-100 mb-3 fs-5"},{default:p(()=>[R,z]),_:1}),i(f,{to:"/forgot-password",class:"w-100 mb-3 text-center d-block text-dark text-decoration-none",disabled:t.value},{default:p(()=>[G]),_:1},8,["disabled"])])],40,J)])}}});var ae=A(K,[["__scopeId","data-v-63e72a29"]]);export{ae as default};
