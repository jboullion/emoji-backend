import{d as V,r as m,H as k,I as S,J as g,e as E,o as p,c as _,g as n,a as r,F as L,y as B,l as I,u as i,h as f,t as v,f as b,A as P,p as A,b as N}from"./vendor.d86d1c24.js";import{v as T,a as j}from"./validation.36d38792.js";import{_ as q,g as U,a as y}from"./index.4a07ec4a.js";import{C as $}from"./CommonTitle.ff467333.js";import{g as D}from"./axios.377f07d7.js";const h=d=>(A("data-v-28b62ca8"),d=d(),N(),d),H={id:"login",class:"page"},J=["onSubmit"],M={class:"alert alert-danger mb-4"},O={class:"form-btns"},Q=["disabled"],R=h(()=>r("span",null,"\u{1F3B2}",-1)),z=h(()=>r("span",null,"\u{1F4CB}",-1)),G=b(" Create Account"),K=b(" \u2754 Forgot Password "),W=V({setup(d){const u=m(!1);k();const x=S("authService"),t=m(!1),c=m([]),a=g({email:U("email"),password:""}),s=g({email:"",password:""});function C(){let o=!0;c.value=[],s.email="",s.password="",s.email=T(a.email),s.email&&(o=!1),s.password=j(a.password),s.password&&(o=!1),o&&F()}async function F(){try{t.value=!0;const o={email:a.email,password:a.password};(await x.signin(o)).accessToken}catch(o){const e=D(o);e&&c.value.push(e)}finally{t.value=!1}}return(o,e)=>{const w=E("router-link");return p(),_("div",H,[n($,{title:"Login"}),r("form",{onSubmit:P(C,["prevent"]),class:"",novalidate:"",autocomplete:"off"},[c.value.length?(p(!0),_(L,{key:0},B(c.value,l=>(p(),_("div",M," \u26A0\uFE0F "+v(l),1))),256)):I("",!0),n(y,{wrapClass:"mb-3",label:"Email",id:"emoji-email",type:"email",modelValue:i(a).email,"onUpdate:modelValue":e[0]||(e[0]=l=>i(a).email=l),disabled:t.value,required:"",error:i(s).email},null,8,["modelValue","disabled","error"]),n(y,{wrapClass:"mb-4",label:"Password",id:"password",type:u.value?"text":"password",modelValue:i(a).password,"onUpdate:modelValue":e[2]||(e[2]=l=>i(a).password=l),disabled:t.value,required:"",error:i(s).password},{button:f(()=>[r("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=l=>u.value=!u.value),"aria-label":"Toggle Show Old Password"},[r("span",null,v(u.value?"\u{1F576}\uFE0F":"\u{1F453}"),1)])]),_:1},8,["type","modelValue","disabled","error"]),r("div",O,[r("button",{type:"submit",class:"btn btn-primary w-100 mb-3 fs-5",disabled:t.value},[R,b(" "+v(t.value?"Loading...":"Login"),1)],8,Q),n(w,{to:"/register",class:"btn btn-outline-secondary w-100 mb-3 fs-5"},{default:f(()=>[z,G]),_:1}),n(w,{to:"/forgot-password",class:"w-100 mb-3 text-center d-block text-dark text-decoration-none",disabled:t.value},{default:f(()=>[K]),_:1},8,["disabled"])])],40,J)])}}});var se=q(W,[["__scopeId","data-v-28b62ca8"]]);export{se as default};
