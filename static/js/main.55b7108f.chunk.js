(this.webpackJsonpapplemusic=this.webpackJsonpapplemusic||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(10),a(1)),s=a(2),u=(a(11),a(12),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,e.text))}),i=function(e){var t=e.album,a=t.releaseDate.substring(0,10);return r.a.createElement("div",{className:"Album"},r.a.createElement("h2",null,t.collectionName),r.a.createElement("div",null,t.artistName),r.a.createElement("div",null,r.a.createElement("img",{alt:t.collectionName,width:"100",src:t.artworkUrl100})),r.a.createElement("div",null,"Tracks: ",t.trackCount),r.a.createElement("div",null,"Released: ",a))},m=(a(13),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("form",{className:"search"},r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)},type:"text"}),r.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(c),l("")},type:"submit",value:"SEARCH"}))}),E={loading:!0,albums:[],errorMessage:null},p=function(e,t){switch(t.type){case"SEARCH_ALBUM_REQUEST":return Object(s.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_ALBUM_SUCCESS":return Object(s.a)({},e,{loading:!1,albums:t.results});case"SEARCH_ALBUM_FAILURE":return Object(s.a)({},e,{loading:!1,errorMessage:t.error});default:return e}};var h=function(){var e=Object(n.useReducer)(p,E),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://itunes.apple.com/search?term=Kanye&entity=album&attribute=artistTerm").then((function(e){return e.json()})).then((function(e){c({type:"SEARCH_ALBUM_SUCCESS",results:e.results})}))}),[]);var l=a.albums,s=a.errorMessage,h=a.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(u,{text:"iTUNES ALBUM SEARCH"}),r.a.createElement(m,{search:function(e){c({type:"SEARCH_MOVIES_REQUEST"}),console.log(e),fetch("https://itunes.apple.com/search?term=".concat(e,"&entity=album&attribute=artistTerm")).then((function(e){return e.json()})).then((function(e){e.resultCount>0?c({type:"SEARCH_ALBUM_SUCCESS",results:e.results}):c({type:"SEARCH_ALBUM_SUCCESS",error:e.Error})}))}}),r.a.createElement("div",{className:"albums"},h&&!s?r.a.createElement("span",null,"loading..."):s?r.a.createElement("div",{className:"errorMessage"},s):l.map((function(e,t){return r.a.createElement(i,{key:"".concat(t,"-").concat(e.collectionId),album:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.55b7108f.chunk.js.map