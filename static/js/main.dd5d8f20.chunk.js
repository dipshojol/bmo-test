(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{21:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),s=a(6),l=a(20),o=a(9),u=(a(31),a(32),a(15)),i=(a(33),a(34),function(e){var t=e.onChange,a=e.value,n=e.label,c=e.name,s=e.type,l=void 0===s?"text":s;return r.a.createElement("div",{className:"input-conatiner"},n?r.a.createElement("label",null,n):null,r.a.createElement("input",{name:c,className:"input",type:l,onChange:t,value:a}))}),m=(a(35),function(e){var t=e.onClick,a=e.value,n=(e.label,e.da),c=e.type,s=void 0===c?"submit":c;return r.a.createElement("div",{className:"button-conatiner"},r.a.createElement("button",{disabled:n,className:"button",type:s,onClick:t},a))}),p=(a(36),function(e){var t=e.name,a=e.address,n=e.city,c=e.state,s=e.area,l=e.postal_code,o=e.country,u=e.phone,i=e.price,m=e.image_url;return r.a.createElement("div",{className:"restaurant-conatiner"},r.a.createElement("img",{className:"restaurant-img",src:m,alt:t}),r.a.createElement("div",{className:"details"},r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Name: "),t),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Address: "),a),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"City: "),n),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"State: "),c),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Area: "),s),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Postal code: "),l),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Country: "),o),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Phone: "),u),r.a.createElement("div",null,r.a.createElement("span",{class:"txt-strong"},"Price: "),i)))});a(37);var d=function(){var e=Object(c.b)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),s=a[0],l=a[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),v=d[0],E=d[1],b=Object(c.c)((function(e){return e.restaurants})).filter((function(e){return!!(e.name.toUpperCase().includes(v.toUpperCase())||e.area.toUpperCase().includes(v.toUpperCase())||e.address.toUpperCase().includes(v.toUpperCase()))}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"controlPanel"},r.a.createElement("div",{className:"controlPanel-input"},r.a.createElement(i,{value:s,onChange:function(e){l(e.target.value)},label:"Search Town"})),r.a.createElement("div",{className:"controlPanel-input-button"},r.a.createElement(m,{da:!s,onClick:function(t){e({type:"FETCH_RESTAURANT_LIST",payload:s})},value:"Search"},"Search"))),r.a.createElement("div",{className:"restaurants"},r.a.createElement("div",{className:"controlPanel-input"},r.a.createElement(i,{value:v,onChange:function(e){E(e.target.value)},label:"Filter by Name/Area/Address"})),r.a.createElement("div",{className:"restaurants-list"},b&&b.length?b.map((function(e,t){return r.a.createElement(p,Object.assign({key:t},e))})):r.a.createElement("div",null,"No Restaurants found. Please update filter"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(16),E={restaurants:[]},b=a(8),f=a.n(b),h=a(11),g=f.a.mark(y),N=f.a.mark(x);function y(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h.a,e.next=3,Object(h.c)("FETCH_RESTAURANT_LIST",x);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}}),g)}function x(e){var t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://opentable.herokuapp.com/api/restaurants?city=".concat(e.payload)).then((function(e){return e.json()}));case 2:return t=n.sent,a=t.restaurants,n.next=6,Object(h.b)({type:"UPDATE_RESTAURANT_LIST",payload:a});case 6:case"end":return n.stop()}}),N)}var C=Object(l.a)(),T=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_RESTAURANT_LIST":return Object(v.a)(Object(v.a)({},e),{},{restaurants:t.payload});default:return e}}),Object(s.a)(C));C.run(y),Object(o.render)(r.a.createElement(c.a,{store:T},r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.dd5d8f20.chunk.js.map