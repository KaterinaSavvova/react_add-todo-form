(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=a(1),c=a(2),l=a(3),u=a(5),d=a(4),m=a(6),p=(a(14),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b={title:"",selectedOption:0,showErrors:!1},g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=b,e.handleSelect=function(t){var a=+t.target.value;e.setState({selectedOption:a})},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.selectedOption,o=e.props.addTodo;n!==b.title&&r!==b.selectedOption?(o(n,r),e.setState(b)):e.setState({showErrors:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.showErrors,n=t.title,o=t.selectedOption;return r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{className:"input",type:"text",value:n,onChange:this.handleTitleChange,placeholder:" please enter the title of todo"})),a&&""===n&&r.a.createElement("span",{className:"error"},"Please enter the title"),r.a.createElement("select",{value:o,onChange:this.handleSelect},e.length>0&&r.a.createElement("option",{value:"0",hidden:!0},"Choose a user"),e.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),a&&!(o>0)&&r.a.createElement("span",{className:"error"},"Please choose a user"),r.a.createElement("button",{className:"button",type:"submit"},"Add"))}}]),a}(r.a.PureComponent),y=function(e){var t=e.name;return r.a.createElement("p",{className:"users"},t)},f=function(e){var t=e.title,a=e.completed,n=e.user;return r.a.createElement("div",{className:"todo"},r.a.createElement("p",{className:a?"completed":"in-progress"},t),r.a.createElement(y,{name:n}))},v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:Object(i.a)(e.props.todos),users:Object(i.a)(e.props.users)},e.addTodo=function(t,a){var n=e.state.todos.length,r=e.props.users;e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[{id:n+1,title:t,completed:!1,user:r.find((function(e){return e.id===a}))}])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.users;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"todoList"},t.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,completed:e.completed,user:e.user.name})}))),r.a.createElement(g,{addTodo:this.addTodo,users:a}))}}]),a}(r.a.Component),S=p.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:Object(i.a)(S)},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{todos:S,users:h}))}}]),a}(r.a.PureComponent);s.a.render(r.a.createElement(w,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5e80a5b8.chunk.js.map