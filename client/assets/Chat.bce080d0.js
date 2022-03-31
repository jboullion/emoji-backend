import{C as N}from"./CommonTitle.ff467333.js";import{d as I,o as l,c,a as e,t as d,f as U,q as x,p as $,b as A,I as q,r as h,K as y,z as J,L as z,A as C,g as f,h as K,u as M,l as w,F as O,y as G,j as H,w as P,M as Q}from"./vendor.d86d1c24.js";import{_ as B,s as k,f as R,h as W,a as X}from"./index.4a07ec4a.js";import{C as Y}from"./ChangeAvatar.278feaab.js";const Z=o=>($("data-v-be949be4"),o=o(),A(),o),ee={class:"fs-4"},ae=Z(()=>e("div",{class:"arrow-left"},null,-1)),te=I({props:{message:{type:Object,required:!0},userID:{type:String,required:!0}},setup(o){const s=o;function v(p){switch(p.userID){case s.userID:return"local";case"join":return"join";default:return"server"}}return(p,D)=>(l(),c("div",{class:x(["chat-message",v(o.message)])},[e("span",ee,d(o.message.avatar),1),e("div",null,[ae,U(" "+d(o.message.text),1)])],2))}});var se=B(te,[["__scopeId","data-v-be949be4"]]);const F=o=>($("data-v-6aa15277"),o=o(),A(),o),oe={class:"d-flex"},ne={class:"flex-fill"},re={id:"chat"},ue={class:"d-flex align-items-center mb-3 justify-content-between"},le=["onSubmit"],ie=F(()=>e("button",{type:"submit",class:"btn btn-primary no-border-radius","aria-label":"Join Room"},[e("span",null,"\u{1F680}")],-1)),ce=F(()=>e("span",null,"\u{1F4CB}",-1)),de=[ce],ve={type:"button",id:"chat-avatar",class:"btn btn-primary fs-1 ms-3","data-bs-toggle":"modal","data-bs-target":"#avatar-modal"},me={class:"card mb-3"},_e={id:"messages",class:"card-block"},he={key:0},pe={key:0,class:"d-flex mb-3"},ge={class:"text-nowrap text-center"},fe=["onClick","disabled"],be=F(()=>e("span",null,"\u2709\uFE0F",-1)),xe=[be],Ie=I({setup(o){const s=q("socket"),v=["\u{1F604}","\u{1F643}","\u{1F60B}","\u{1F920}","\u{1F913}","\u{1F60E}","\u{1F9D0}","\u{1F608}","\u{1F479}","\u{1F921}","\u{1F47A}","\u{1F4A9}","\u{1F47E}","\u{1F916}","\u{1F47D}","\u{1F480}","\u{1F63C}","\u{1F435}","\u{1F436}","\u{1F984}","\u{1F417}","\u{1F989}"];var p=Math.floor(Math.random()*v.length);const D=k.getters.userInfo.avatar?k.getters.userInfo.avatar:v[p],g=h([]),n=h(""),u=h(n.value);function E(){u.value!==n.value&&(s.emit("changeRoom",{join:n.value,leave:u.value,avatar:t.value.avatar}),_.value=[],u.value=n.value,g.value=[])}s.on("roomJoin",async a=>{_.value.push({avatar:a.username,text:`Joined room: ${u.value}`,userID:a.userID,roomID:n.value}),await y(),R("messages"),g.value.push({userID:a.userID,username:a.username})}),s.on("roomLeave",a=>{_.value.push({avatar:a.username,text:"Left the room",userID:a.userID,roomID:n.value}),g.value=g.value.filter(r=>r.userID!=a.userID)});const t=h({avatar:D,text:"",userID:s.id,roomID:n.value}),m=255,_=h([]);s.on("broadcastMessage",async a=>{_.value.push(a),await y(),R("messages")});function S(){V(t.value)&&(t.value.userID=s.id,t.value.roomID=n.value,s.emit("sendMessage",t.value),t.value.text="")}function V(a){return a.avatar.length>0&&a.text.length>0&&a.text.length<m}J(()=>{window.onbeforeunload=function(){s.emit("changeRoom",{leave:n.value,avatar:t.value.avatar})},b=new bootstrap.Modal(document.getElementById("avatar-modal"))}),z(()=>{j()});function j(){s.emit("changeRoom",{leave:n.value,avatar:t.value.avatar})}let b=null;function T(a){const r=t.value.avatar;t.value.avatar=a,s.emit("sendMessage",{avatar:a,text:`${r} Change to ${a}`,userID:s.id,roomID:n.value}),b&&b.hide()}return(a,r)=>(l(),c("div",oe,[e("div",ne,[e("div",re,[e("div",ue,[e("form",{onSubmit:C(E,["prevent"])},[f(X,{label:"",id:"room",type:"text",modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=i=>n.value=i),placeholder:"Room ID"},{button:K(()=>[ie,e("button",{type:"button",class:"btn btn-primary copy",onClick:r[0]||(r[0]=i=>M(W)(n.value)),"aria-label":"Copy Room ID"},de)]),_:1},8,["modelValue"])],40,le),e("button",ve,d(t.value.avatar),1)]),e("div",me,[e("div",_e,[u.value?(l(),c("div",he,[e("h3",null,"Room: "+d(u.value),1)])):w("",!0),(l(!0),c(O,null,G(_.value,(i,L)=>(l(),H(se,{message:i,userID:M(s).id,key:L},null,8,["message","userID"]))),128))])]),u.value?(l(),c("div",pe,[P(e("textarea",{id:"textarea",class:x(["form-control me-3",{"is-invalid":t.value.text.length>m}]),"onUpdate:modelValue":r[2]||(r[2]=i=>t.value.text=i),placeholder:"Enter message..."},null,2),[[Q,t.value.text]]),e("div",ge,[e("button",{id:"send",class:"btn btn-primary fs-3 text-center",onClick:C(S,["prevent"]),disabled:!t.value.text.length||t.value.text.length>m},xe,8,fe),e("div",{class:x({"text-danger":t.value.text.length>m})},d(t.value.text.length)+" / "+d(m),3)])])):w("",!0)])]),f(Y,{onUpdateAvatar:T})]))}});var Fe=B(Ie,[["__scopeId","data-v-6aa15277"]]);const De={id:"chat",class:"page"},ke=I({setup(o){return(s,v)=>(l(),c("div",De,[f(N,{title:"\u{1F5E8}\uFE0F Chat",subtitle:"Be Nice!"}),f(Fe)]))}});export{ke as default};
