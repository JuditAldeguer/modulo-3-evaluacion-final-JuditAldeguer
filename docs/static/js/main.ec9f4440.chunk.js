(this["webpackJsonpmi-primera-web"]=this["webpackJsonpmi-primera-web"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(14),s=c.n(n),r=c(9),i=c(4),l=c(2),j={callToApi:function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results}))},callToApiEpisodes:function(e){return fetch("".concat(e)).then((function(e){return e.json()})).then((function(e){return e.name}))}},o=(c(21),c.p,c.p,c(22),c.p+"static/media/Rick_and_Morty_-_logo.de13d484.png"),d=c(0),h=function(e){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("img",{className:"header--img z_index",src:o,alt:"Rick and Morty"})})},u=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],b={getCurrentDate:function(){var e=new Date,t=e.getDate(),c=e.getMonth(),a=u[c],n=e.getFullYear();return"".concat(t," ").concat(a,". ").concat(n)},getCurrentTime:function(){var e=new Date,t=e.getHours(),c=e.getMinutes(),a=e.getSeconds();return 1===new String(a).length&&(a="0"+a),1===new String(c).length&&(c="0"+c),1===new String(t).length&&(t="0"+t),t+" : "+c+" : "+a}},O=b,x=(c(24),function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),j=l[0],o=l[1];return Object(a.useEffect)((function(){!function(){var e=(new Date).getSeconds();o(e)}(),s(O.getCurrentTime())}),[j]),Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsxs)("section",{children:["Made with \u2764\ufe0f by \xa9"," ",Object(d.jsx)("a",{className:"footer--link",href:"https://github.com/JuditAldeguer",rel:"noreferrer",target:"_blank",children:"Judit Aldeguer"})," ","using"," ",Object(d.jsx)("a",{className:"footer--link",href:"https://es.reactjs.org/",rel:"noreferrer",target:"_blank",children:"React"})]}),Object(d.jsxs)("section",{className:"section_clock",children:["".concat(O.getCurrentDate()," "),Object(d.jsx)("form",{className:"form_footer",children:Object(d.jsx)("input",{type:"text",name:"clock",className:"clock",size:"7",disabled:!0,value:n})})]})]})}),m=(c(25),c(26),c(27),function(e){return Object(d.jsx)("button",{className:"button_back",title:"atr\xe1s",onClick:function(e){e.preventDefault(),window.history.back()},children:"Go Back"})}),f=function(e){return Object(d.jsx)("div",{className:"modal",children:Object(d.jsx)("div",{className:"modal__dialog",children:Object(d.jsxs)("div",{className:"modal__content",children:[Object(d.jsxs)("header",{className:"modal__header",children:[Object(d.jsx)(m,{className:"button_back"}),Object(d.jsx)("h2",{className:"modal__header--title",children:e.title})]}),Object(d.jsx)("section",{className:"modal__section",children:e.children})]})})})},p=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){void 0!==e.character&&j.callToApiEpisodes(e.character.episode[0]).then((function(e){s(e)}))}),[e.character]),void 0===e.character?Object(d.jsx)(f,{title:"Character not found",children:Object(d.jsx)("p",{className:"not_found_detail",children:"Please check if the address is correct"})}):Object(d.jsx)(f,{title:e.character.name,children:Object(d.jsxs)("article",{className:"detail",children:[Object(d.jsx)("img",{className:"detail--img",src:e.character.image,alt:"personaje"}),Object(d.jsxs)("ul",{className:"detail--list",children:[Object(d.jsx)("li",{children:"Dead"===e.character.status?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Status: "}),Object(d.jsx)("i",{className:"fas fa-skull-crossbones"}),";"," ".concat(e.character.status)]})}):"Alive"===e.character.status?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Status: "}),Object(d.jsx)("i",{className:"fas fa-heartbeat"}),";"," ".concat(e.character.status)]})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Status: "}),Object(d.jsx)("i",{className:"fas fa-question-circle"})," ".concat(e.character.status)]})})}),Object(d.jsx)("li",{children:"Human"===e.character.species?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Species: "}),Object(d.jsx)("i",{className:"fas fa-user-alt"})," ".concat(e.character.species)]})}):"Alien"===e.character.species?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Species: "}),Object(d.jsx)("i",{className:"fab fa-reddit-alien"})," ".concat(e.character.species)]})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Species: "}),Object(d.jsx)("i",{className:"fas fa-user-alt-slash"})," ".concat(e.character.species)]})})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Gender: "}),e.character.gender]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Location: "}),e.character.location.name]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Origin: "}),e.character.species]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Firts seen in: "})," ",n]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Episodes: "}),e.character.episode.length]})})]})]})})},g=(c(28),function(e){return Object(d.jsxs)("label",{className:"label z_index",htmlFor:e.id,children:[e.labelText,Object(d.jsx)("input",{className:"input",id:e.id,type:e.inputType,name:e.inputName,placeholder:e.inputPlaceholder,value:e.searchWord,onChange:function(t){e.handleChange(e.inputName,t.target.value)}})]})});g.defaultProps={inputType:"text",placeholder:"Escribe aqui...",labelText:"Escribe aqui: "};var v=g,N=(c(29),function(e){return Object(d.jsxs)("select",{name:e.inputName,id:e.id,className:"select_input z_index",htmlFor:e.id,defaultValue:e.searchOption,onChange:function(t){e.handleChange(e.inputName,t.target.value)},children:[Object(d.jsx)("option",{value:e.value1,children:e.optionText1}),Object(d.jsxs)("option",{value:e.value2,children:[" ",e.optionText2]}),Object(d.jsxs)("option",{value:e.value3,children:[" ",e.optionText3]}),Object(d.jsxs)("option",{value:e.value4,children:[" ",e.optionText4]})]})}),S=(c(30),function(e){return Object(d.jsxs)("form",{className:"form",action:"/",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("h1",{className:"form--h1 z_index",children:"Filter and quickly locate your favorite characters"}),Object(d.jsx)(v,{labelText:"Search name: ",id:"search-word",inputName:"search-word",value:e.searchWord,handleChange:e.handleSearch}),Object(d.jsx)(v,{labelText:"Search species: ",id:"search-species",inputName:"search-species",value:e.searchSpecies,handleChange:e.handleSearch}),Object(d.jsx)(N,{id:"get-gender",inputName:"get-gender",searchOption:e.searchGender,value1:"all",optionText1:"Chose a GENDER",value2:"Male",optionText2:"Male",value3:"Female",optionText3:"Female",value4:"unknown",optionText4:"Unknown",handleChange:e.handleSearch}),Object(d.jsx)(N,{id:"get-status",inputName:"get-status",searchOption:e.searchStatus,value1:"all",optionText1:"Chose a STATUS",value2:"Alive",optionText2:"Alive",value3:"Dead",optionText3:"Dead",value4:"unknown",optionText4:"Unknown",handleChange:e.handleSearch})]})}),_=(c(31),c(32),function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(r.b,{to:"./character/".concat(e.character.id),title:"Detail",activeClassName:"selected-link",children:Object(d.jsxs)("article",{className:"card z_index",children:[Object(d.jsx)("img",{className:"z_index",src:e.character.image,alt:"character"}),Object(d.jsx)("h2",{className:"z_index",children:Object(d.jsx)("strong",{children:e.character.name})}),Object(d.jsx)("p",{className:"z_index",children:e.character.species})]})})})}),w=function(e){return Object(d.jsx)("ul",{className:"list",children:e.data.map((function(t){return Object(d.jsx)("li",{className:"z_index",children:Object(d.jsx)(_,{character:t,characterId:e.characterId})},t.id)}))})},k=(c(41),function(){return Object(d.jsx)("div",{className:"not_found_page",children:Object(d.jsx)(f,{title:"ERROR: The page you are looking for does not exist",children:Object(d.jsxs)("p",{children:["Check if the site address",Object(d.jsx)("span",{className:"cursiva",children:" (url)"})," is correct."]})})})}),T=(c(42),function(e){return e.loading?Object(d.jsxs)("div",{className:"lds-spinner",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]}):null});var C=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(c),r=Object(i.a)(s,2),o=r[0],u=r[1],b=Object(a.useState)(""),O=Object(i.a)(b,2),m=O[0],f=O[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),N=v[0],_=v[1],C=Object(a.useState)(""),L=Object(i.a)(C,2),F=L[0],y=L[1],E=Object(a.useState)(""),D=Object(i.a)(E,2),A=D[0],z=D[1],I=Object(a.useState)(!1),q=Object(i.a)(I,2),M=q[0],R=q[1],G=Object(a.useState)(!1),J=Object(i.a)(G,2),P=J[0],U=J[1];Object(a.useEffect)((function(){U(!0),j.callToApi().then((function(e){n(e),U(!1),f(" "),_(""),y(""),z(""),R(!1)}))}),[]),Object(a.useEffect)((function(){V()}),[m,N,F,A,M]);var W=Object(l.f)("/character/:characterId"),B=null!==W?parseInt(W.params.characterId):"",H=c.find((function(e){return e.id===B})),V=function(){var e=c.filter((function(e){return e.name.toLocaleLowerCase().includes(m.toLocaleLowerCase())})).filter((function(e){return e.species.toLocaleLowerCase().includes(N.toLocaleLowerCase())})).filter((function(e){return e.gender.includes(F)})).filter((function(e){return e.status.toLocaleLowerCase().includes(A.toLocaleLowerCase())})).filter((function(e){return!0===M?e.location.name.toLocaleLowerCase()===e.origin.name.toLocaleLowerCase():e}));if(Y(e),0===e.length){u([{name:"There are no characters that match the requested filters.",image:"https://www.villas4u.com/assets/img/image-not-found.svg",species:"Not Found"}])}else u(e)},Y=function(e){e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))};return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"stars"}),Object(d.jsx)("div",{className:"twinkling"}),Object(d.jsxs)("div",{className:"clouds",children:[Object(d.jsx)(h,{}),Object(d.jsxs)("main",{id:"main",children:[Object(d.jsx)(T,{loading:P}),Object(d.jsx)(S,{value:m,handleSearch:function(e,t){"search-word"===e&&f(t),"search-species"===e&&_(t),"get-gender"===e&&y("all"===t?"":t),"get-status"===e&&z("all"===t?"":t),"search-equal"===e&&R(t)},searchGender:F,searchStatus:A,searchEqual:M}),Object(d.jsx)(w,{data:o,searchWord:m,characterId:B}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",exact:!0}),Object(d.jsx)(l.a,{path:"/character/:characterId",children:Object(d.jsx)(p,{character:H,characterId:B})}),Object(d.jsx)(l.a,{children:Object(d.jsx)(k,{})})]})]}),Object(d.jsx)(x,{})]})]})};s.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ec9f4440.chunk.js.map