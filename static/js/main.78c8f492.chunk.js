(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),s=a(7),i=a(9),m=a(1);a(22);function u(){return l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:p}),l.a.createElement(m.a,{path:"/film/:id",component:o}),l.a.createElement(m.a,{path:"/starship/:id",component:E}))}function p(){const e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(()=>{fetch("https://swapi.dev/api/films/").then(e=>e.json()).then(e=>c(e.results))},[]),l.a.createElement("div",null,l.a.createElement("ul",null,a.map((e,t)=>l.a.createElement("li",{key:t},l.a.createElement(s.b,{to:{pathname:"/film/".concat(t),state:e}},e.title)))))}function o(){let e=Object(m.f)().url.split("/")[2];const t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(()=>{fetch("https://swapi.dev/api/films/".concat(e,"/")).then(e=>e.json()).then(e=>r(e))},[]),l.a.createElement(l.a.Fragment,null,c?l.a.createElement("div",null,l.a.createElement("h3",null,c.title),l.a.createElement("div",null,c.opening_crawl),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"Starships")),l.a.createElement("ul",null,c.starships.map((e,t)=>l.a.createElement("li",{key:t},l.a.createElement(s.b,{to:"/starship/".concat(e.split("/")[5])},"/starship/",e.split("/")[5])))))):"")}function E(){let e=Object(m.f)().url.split("/")[2];const t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(()=>{fetch("https://swapi.dev/api/starships/".concat(e,"/")).then(e=>e.json()).then(e=>r(e))},[]),l.a.createElement(l.a.Fragment,null,c?(e=>{const t=e?e.films:[];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,e.name),l.a.createElement("div",null,"Films:",l.a.createElement("ul",null,t.map((e,t)=>l.a.createElement("li",{key:t},l.a.createElement(s.b,{to:"/film/".concat(e.split("/")[5])},"/films/".concat(e.split("/")[5])))))))})(c):"")}r.a.render(l.a.createElement(s.a,null,l.a.createElement(u,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.78c8f492.chunk.js.map