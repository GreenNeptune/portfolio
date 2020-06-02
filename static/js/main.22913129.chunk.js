(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=(a(45),a(46),a(47),a(39)),o=a(11),s=a(13),m=a(38);var u=function(e){var t=e.links;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("li",{key:t,className:"link-box"},l.a.createElement(o.Link,{activeClass:"active",to:e.to,spy:!0,smooth:!0,duration:800},e.text))})))};var E=function(){return l.a.createElement("div",{className:"links d-sm-flex justify-content-lg-between align-items mt3 "},l.a.createElement(u,{links:[{to:"about",text:"About"},{to:"skills",text:"Skills"},{to:"projects",text:"Projects"},{to:"contact",text:"Contact"}]}))},p=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){r(e.current.clientHeight)}),[]),Object(n.useEffect)((function(){return o.Events.scrollEvent.register("begin",(function(){console.log("begin",arguments)})),o.Events.scrollEvent.register("end",(function(){console.log("end",arguments)})),function(){o.Events.scrollEvent.remove("begin"),o.Events.scrollEvent.remove("end")}})),l.a.createElement("div",null,l.a.createElement("div",{style:{height:"".concat(c,"px"),width:"100%"}}),l.a.createElement(s.a,{ref:e,id:"navbar",className:"fixed",expand:"md"},l.a.createElement(s.a.Brand,{href:"#home"},"Dvir Rabbani"),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(m.a,{className:"ml-auto"},l.a.createElement(E,null)))))};a(32).fadeInUp;var v=function(e){return l.a.createElement("section",{id:"about",name:"about",className:"text-center"},l.a.createElement("div",{className:"about_content"},l.a.createElement("h1",null,"Dvir Rabbani "),l.a.createElement("h1",null,"Full Stack Developer")))},d=a(19),h=a(33),f=a(26);var b=function(e){return l.a.createElement("section",{name:"contact",id:"contact",className:"text-center"},l.a.createElement("div",{className:"social_links"},l.a.createElement("div",{className:"social_link"},l.a.createElement(d.a,{size:"3x",icon:h.a}),l.a.createElement("img",{src:"../../../",alt:""}),l.a.createElement("p",null,"Gmail"),l.a.createElement("a",{href:"mailto:rabbanidvir@gmail.com"},"rabbanidvir@gmail.com")),l.a.createElement("div",{className:"social_link"},l.a.createElement(d.a,{size:"3x",icon:f.b}),l.a.createElement("p",null,"LinkedIn"),l.a.createElement("a",{href:"https://www.linkedin.com/in/dvir-rabbani/"},"linkedin.com/in/dvir-rabbani/")),l.a.createElement("div",{className:"social_link"},l.a.createElement(d.a,{size:"3x",icon:f.a}),l.a.createElement("p",null,"Github"),l.a.createElement("a",{href:"https://github.com/GreenNeptune"},"github.com/GreenNeptune"))))};var g=function(e){return l.a.createElement("div",null)},N=(a(140),a(34)),k=a.n(N),S=a(35),j=a.n(S),_=a(36),x=a.n(_),w=a(37),y=a.n(w);var G=function(e){return l.a.createElement("section",{id:"projects",name:"projects"},l.a.createElement("h1",null,"projects"),l.a.createElement("div",{className:"gallery"},l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project__overlay"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://github.com/GreenNeptune/Minecraft"},"Minecraft 2D")),l.a.createElement("p",null,"HTML, JS, CSS "),l.a.createElement("p",null," Bootstrap ")),l.a.createElement("img",{src:k.a,alt:""})),l.a.createElement("div",{className:"project"},l.a.createElement("img",{src:y.a,alt:""}),l.a.createElement("div",{className:"project__overlay"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://GreenNeptune.github.io/Online-Shope-BaliProduct"},"Online Shop")),l.a.createElement("p",null,"HTML, JS, CSS\\SCSS "),l.a.createElement("p",null," React, Redux "))),l.a.createElement("div",{className:"project"},l.a.createElement("img",{src:j.a,alt:""}),l.a.createElement("div",{className:"project__overlay"},l.a.createElement("h3",null,l.a.createElement("a",{href:"https://github.com/GreenNeptune/tvsearch"},"TV Shows Search")),l.a.createElement("p",null,"python, Bottle framework, JS "),l.a.createElement("p",null," HTML & CSS "))),l.a.createElement("div",{className:"project"},l.a.createElement("img",{src:x.a,alt:""}),l.a.createElement("div",{className:"project__overlay"},l.a.createElement("h3",null," ",l.a.createElement("a",{href:"http://GreenNeptune.github.io/chuck_norris_jokes"},"Chuck Norris Jokes")," "),l.a.createElement("p",null," HTML, CSS, JS, Bootstrap"),l.a.createElement("p",null,"React, working with API's ")))))};var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(v,null),l.a.createElement(G,null),l.a.createElement(b,null),l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){e.exports=a.p+"static/media/minecraft_project_logo.6fc11e40.PNG"},35:function(e,t,a){e.exports=a.p+"static/media/TV_Shows_search.08241da4.PNG"},36:function(e,t,a){e.exports=a.p+"static/media/chuck_norris_jokes.ef22aa5e.PNG"},37:function(e,t,a){e.exports=a.p+"static/media/Bali_Product.a42271f7.PNG"},40:function(e,t,a){e.exports=a(141)},45:function(e,t,a){},47:function(e,t,a){}},[[40,1,2]]]);
//# sourceMappingURL=main.22913129.chunk.js.map