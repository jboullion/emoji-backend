import{_ as l}from"./index.4a07ec4a.js";import{d as c,e as d,o as s,j as _,h as u,a as t,t as o,c as r,g as n,F as p,y as h,u as g}from"./vendor.d86d1c24.js";import{C as y}from"./CommonTitle.ff467333.js";const f=[{name:"Chat",emoji:"\u{1F5E8}\uFE0F",description:"Connect with your friends!",link:"/games/chat",maxPlayers:5},{name:"Memory",emoji:"\u{1F9E0}",description:"How many emoji can you remember?",link:"/games/memory",maxPlayers:5}];const x={class:"game-image"},v={class:"card-body"},k={class:"card-title"},C={class:"card-text flex-fill"},j=c({props:{game:{type:Object,required:!0}},setup(e){return(m,i)=>{const a=d("router-link");return s(),_(a,{to:e.game.link,class:"card text-center h-100"},{default:u(()=>[t("span",x,o(e.game.emoji),1),t("div",v,[t("h4",k,o(e.game.name),1),t("p",C,o(e.game.description),1)])]),_:1},8,["to"])}}});var F=l(j,[["__scopeId","data-v-635e9a93"]]);const b={id:"home",class:"page"},w={class:"row justify-content-center"},$=c({setup(e){return(m,i)=>(s(),r("div",b,[n(y),t("div",w,[(s(!0),r(p,null,h(g(f),a=>(s(),r("div",{class:"col-xl-3 col-lg-4 col-md-6 mb-4",key:a.name},[n(F,{game:a},null,8,["game"])]))),128))])]))}});export{$ as default};