import{d as B,I as V,r as p,J as U,z as T,e as $,u as t,o as N,c as E,g as u,a,q as j,t as i,h as g,f as w,l as C,A as M,j as q}from"./vendor.d86d1c24.js";import{C as z}from"./CommonTitle.ae908bbc.js";import{s as d,a as y,b as D}from"./index.a680c4da.js";import{C as L}from"./ChangeAvatar.5c2438a6.js";import{b as O,v as J,a as x}from"./validation.36d38792.js";import{_ as W}from"./ErrorAlert.5ef4c2b2.js";const G={key:0,id:"profile",class:"page"},H=a("span",null,"\u{1F6D1}",-1),K=w(" logout "),Q=[H,K],R={class:"row"},X={id:"change-avatar",class:"col-md-6 mb-5 text-center"},Y={type:"button",class:"btn btn-outline-secondary fs-3 w-100 mb-3","data-bs-toggle":"modal","data-bs-target":"#avatar-modal"},Z=a("br",null,null,-1),ee=w(" Change Avatar "),ae=a("span",null,"\u{1F3AB}",-1),se=a("span",null,"\u{1F39F}\uFE0F",-1),te={class:"col-md-6 mb-5"},oe={key:0,class:"alert alert-light"},re=["onSubmit"],le={class:"form-btns"},ne=["disabled"],ue=a("span",null,"\u{1F4F2}",-1),be=B({setup(ie){const k=V("authService"),h=V("userService");let F=null;const c=p(),v=p(!1),b=p(!1),f=p(""),l=p(!1),_=p([]),e=U({email:d.getters.userInfo.email,username:d.getters.userInfo.username,password:"",passwordNew:""}),o=U({username:"",email:"",password:"",passwordNew:""});async function I(n){await h.updateAvatar(n)&&(await k.refresh(),F&&F.hide())}async function P(){let n=!0;if(f.value="",_.value=[],o.username="",o.email="",o.password="",e.username&&(o.username=O(e.username),o.username&&(n=!1)),e.email&&(o.email=J(e.email),o.email&&(n=!1)),o.password=x(e.password),o.password&&(n=!1),e.passwordNew&&(o.passwordNew=x(e.passwordNew),o.passwordNew&&(n=!1)),!!n)try{l.value=!0;const s={username:e.username,email:e.email,password:e.password,passwordNew:e.passwordNew?e.passwordNew:null};(await h.updateUser(s)).id&&(f.value="\u2714\uFE0F Information Updated!")}catch(s){const m=D(s);m&&_.value.push(m)}finally{l.value=!1}}function S(){k.signout()}async function A(){c.value=await h.getUser()}return T(()=>{F=new bootstrap.Modal(document.getElementById("avatar-modal")),A()}),(n,s)=>{const m=$("router-link");return t(d).getters.userInfo?(N(),E("div",G,[u(z,{title:"Profile",subtitle:`Welcome ${t(d).getters.userInfo.username}!`},null,8,["subtitle"]),a("div",{class:"text-center mb-5"},[a("button",{type:"button",class:"btn btn-outline-secondary fs-3",onClick:S},Q)]),a("div",R,[a("div",X,[a("button",Y,[a("span",{class:j({"avatar-wide":t(d).getters.userInfo.avatar.length>3})},i(t(d).getters.userInfo.avatar?t(d).getters.userInfo.avatar:"\u{1F636}"),3),Z,ee]),u(m,{to:"/shop",class:"btn btn-outline-secondary fs-3 w-100 mb-3"},{default:g(()=>[ae,w(" Tickets: "+i(c.value?c.value.tickets:""),1)]),_:1}),u(m,{to:"/shop",class:"btn btn-outline-secondary fs-3 w-100"},{default:g(()=>[se,w(" Premium Tickets: "+i(c.value?c.value.premium_tickets:""),1)]),_:1})]),a("div",te,[f.value?(N(),E("div",oe,i(f.value),1)):C("",!0),a("form",{onSubmit:M(P,["prevent"]),class:"",novalidate:""},[_.value.length?(N(),q(W,{key:0,errors:_.value},null,8,["errors"])):C("",!0),u(y,{wrapClass:"mb-4",label:"Username",id:"username",type:"text",modelValue:t(e).username,"onUpdate:modelValue":s[0]||(s[0]=r=>t(e).username=r),error:t(o).username,disabled:l.value},null,8,["modelValue","error","disabled"]),u(y,{wrapClass:"mb-4",label:"Email",id:"email",type:"email",modelValue:t(e).email,"onUpdate:modelValue":s[1]||(s[1]=r=>t(e).email=r),error:t(o).email,disabled:l.value},null,8,["modelValue","error","disabled"]),u(y,{wrapClass:"mb-4",label:"New Password",id:"password-new",type:b.value?"text":"password",modelValue:t(e).passwordNew,"onUpdate:modelValue":s[3]||(s[3]=r=>t(e).passwordNew=r),error:t(o).passwordNew,disabled:l.value,description:"Leave blank to only update email"},{button:g(()=>[a("button",{type:"button",class:"btn btn-primary",onClick:s[2]||(s[2]=r=>b.value=!b.value),"aria-label":"Toggle Show New Password"},[a("span",null,i(b.value?"\u{1F576}\uFE0F":"\u{1F453}"),1)])]),_:1},8,["type","modelValue","error","disabled"]),u(y,{wrapClass:"mb-4",label:"Current Password",id:"password-old",type:v.value?"text":"password",modelValue:t(e).password,"onUpdate:modelValue":s[5]||(s[5]=r=>t(e).password=r),error:t(o).password,disabled:l.value,required:""},{button:g(()=>[a("button",{type:"button",class:"btn btn-primary",onClick:s[4]||(s[4]=r=>v.value=!v.value),"aria-label":"Toggle Show Old Password"},[a("span",null,i(v.value?"\u{1F576}\uFE0F":"\u{1F453}"),1)])]),_:1},8,["type","modelValue","error","disabled"]),a("div",le,[a("button",{type:"submit",class:"btn btn-primary w-100 mb-3 fs-5",disabled:l.value},[ue,w(" "+i(l.value?"Loading":"Update"),1)],8,ne)])],40,re)])]),u(L,{onUpdateAvatar:I})])):C("",!0)}}});export{be as default};