import{_ as s}from"./index.4d96d4fc.js";import{d as r,e as n,o as c,j as m,h as i,a,t}from"./vendor.d86d1c24.js";const f=[{name:"Chat",emoji:"\u{1F5E8}\uFE0F",description:"Connect with your friends!",link:"/games/chat",maxPlayers:5},{name:"Memory",emoji:"\u{1F9E0}",description:"How many emoji can you remember?",link:"/games/memory",maxPlayers:5}];const d={class:"game-image"},_={class:"card-body"},l={class:"card-title"},u={class:"card-text flex-fill"},p=r({props:{game:{type:Object,required:!0}},setup(e){return(h,y)=>{const o=n("router-link");return c(),m(o,{to:e.game.link,class:"card text-center h-100"},{default:i(()=>[a("span",d,t(e.game.emoji),1),a("div",_,[a("h4",l,t(e.game.name),1),a("p",u,t(e.game.description),1)])]),_:1},8,["to"])}}});var k=s(p,[["__scopeId","data-v-635e9a93"]]);export{f as G,k as a};