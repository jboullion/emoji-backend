import{d as B,I as E,r as c,J as x,z as M,e as $,u as a,o as y,c as h,g as u,a as s,q as j,t as i,h as F,f as b,l as k,A as L,F as q,y as z}from"./vendor.e42f0259.js";import{T as D}from"./Title.c3de74d2.js";import{s as m,a as C}from"./index.0bf825a6.js";import{C as O}from"./ChangeAvatar.75799211.js";import{b as J,v as W,a as I}from"./validation.36d38792.js";const G={key:0,id:"profile",class:"page"},H=s("span",null,"\u{1F6D1}",-1),K=b(" logout "),Q=[H,K],R={class:"row"},X={id:"change-avatar",class:"col-md-6 mb-5 text-center"},Y={type:"button",class:"btn btn-outline-secondary fs-3 w-100 mb-3","data-bs-toggle":"modal","data-bs-target":"#avatar-modal"},Z=s("br",null,null,-1),ee=b(" Change Avatar "),se=s("span",null,"\u{1F3AB}",-1),ae=s("span",null,"\u{1F39F}\uFE0F",-1),te={class:"col-md-6 mb-5"},oe={key:0,class:"alert alert-light"},re=["onSubmit"],le={class:"alert alert-danger mb-4"},ne={class:"form-btns"},de=["disabled"],ue=s("span",null,"\u{1F4F2}",-1),fe=B({setup(ie){const U=E("authService"),N=E("userService");let V=null;const w=c(),f=c(!1),_=c(!1),g=c(""),n=c(!1),p=c([]),e=x({email:m.getters.userInfo.email,username:m.getters.userInfo.username,password:"",passwordNew:""}),o=x({username:"",email:"",password:"",passwordNew:""});async function P(d){await N.updateAvatar(d)&&(await U.refresh(),V&&V.hide())}async function S(){var t,v,r;let d=!0;if(g.value="",p.value=[],o.username="",o.email="",o.password="",e.username&&(o.username=J(e.username),o.username&&(d=!1)),e.email&&(o.email=W(e.email),o.email&&(d=!1)),o.password=I(e.password),o.password&&(d=!1),e.passwordNew&&(o.passwordNew=I(e.passwordNew),o.passwordNew&&(d=!1)),!!d)try{n.value=!0;const l={username:e.username,email:e.email,password:e.password,passwordNew:e.passwordNew?e.passwordNew:null};(await N.updateUser(l)).id&&(g.value="\u2714\uFE0F Information Updated!")}catch(l){l.response&&(((t=l.response.data)==null?void 0:t.statusCode)===400?p.value=l.response.data.message:(((v=l.response.data)==null?void 0:v.statusCode)===401||((r=l.response.data)==null?void 0:r.statusCode)===409)&&p.value.push(l.response.data.message))}finally{n.value=!1}}function A(){U.signout()}async function T(){w.value=await N.getUser()}return M(()=>{V=new bootstrap.Modal(document.getElementById("avatar-modal")),T()}),(d,t)=>{const v=$("router-link");return a(m).getters.userInfo?(y(),h("div",G,[u(D,{title:"Profile",subtitle:`Welcome ${a(m).getters.userInfo.username}!`},null,8,["subtitle"]),s("div",{class:"text-center mb-5"},[s("button",{type:"button",class:"btn btn-outline-secondary fs-3",onClick:A},Q)]),s("div",R,[s("div",X,[s("button",Y,[s("span",{class:j({"avatar-wide":a(m).getters.userInfo.avatar.length>3})},i(a(m).getters.userInfo.avatar?a(m).getters.userInfo.avatar:"\u{1F636}"),3),Z,ee]),u(v,{to:"/shop",class:"btn btn-outline-secondary fs-3 w-100 mb-3"},{default:F(()=>[se,b(" Tickets: "+i(w.value?w.value.tickets:""),1)]),_:1}),u(v,{to:"/shop",class:"btn btn-outline-secondary fs-3 w-100"},{default:F(()=>[ae,b(" Premium Tickets: "+i(w.value?w.value.premium_tickets:""),1)]),_:1})]),s("div",te,[g.value?(y(),h("div",oe,i(g.value),1)):k("",!0),s("form",{onSubmit:L(S,["prevent"]),class:"",novalidate:""},[p.value.length?(y(!0),h(q,{key:0},z(p.value,r=>(y(),h("div",le," \u26A0\uFE0F "+i(r),1))),256)):k("",!0),u(C,{wrapClass:"mb-4",label:"Username",id:"username",type:"text",modelValue:a(e).username,"onUpdate:modelValue":t[0]||(t[0]=r=>a(e).username=r),error:a(o).username,disabled:n.value},null,8,["modelValue","error","disabled"]),u(C,{wrapClass:"mb-4",label:"Email",id:"email",type:"email",modelValue:a(e).email,"onUpdate:modelValue":t[1]||(t[1]=r=>a(e).email=r),error:a(o).email,disabled:n.value},null,8,["modelValue","error","disabled"]),u(C,{wrapClass:"mb-4",label:"New Password",id:"password-new",type:_.value?"text":"password",modelValue:a(e).passwordNew,"onUpdate:modelValue":t[3]||(t[3]=r=>a(e).passwordNew=r),error:a(o).passwordNew,disabled:n.value,description:"Leave blank to only update email"},{button:F(()=>[s("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=r=>_.value=!_.value),"aria-label":"Toggle Show New Password"},[s("span",null,i(_.value?"\u{1F576}\uFE0F":"\u{1F453}"),1)])]),_:1},8,["type","modelValue","error","disabled"]),u(C,{wrapClass:"mb-4",label:"Current Password",id:"password-old",type:f.value?"text":"password",modelValue:a(e).password,"onUpdate:modelValue":t[5]||(t[5]=r=>a(e).password=r),error:a(o).password,disabled:n.value,required:""},{button:F(()=>[s("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=r=>f.value=!f.value),"aria-label":"Toggle Show Old Password"},[s("span",null,i(f.value?"\u{1F576}\uFE0F":"\u{1F453}"),1)])]),_:1},8,["type","modelValue","error","disabled"]),s("div",ne,[s("button",{type:"submit",class:"btn btn-primary w-100 mb-3 fs-5",disabled:n.value},[ue,b(" "+i(n.value?"Loading":"Update"),1)],8,de)])],40,re)])]),u(O,{onUpdateAvatar:P})])):k("",!0)}}});export{fe as default};
