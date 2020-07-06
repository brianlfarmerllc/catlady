(this.webpackJsonpcatlady=this.webpackJsonpcatlady||[]).push([[0],{52:function(e,a,t){e.exports=t.p+"static/media/cat.8e5986a7.png"},53:function(e,a,t){e.exports=t.p+"static/media/dog.8dcf68ed.png"},55:function(e,a,t){e.exports=t(98)},60:function(e,a,t){},78:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(60),t(12)),m=t(8),s=t(13),u=t(19),i=t.n(u),p=function(e){return i.a.post("/api/user",e)},d=function(e){return i.a.post("/api/user/login",e)},E=function(){return i.a.get("/api/user/logout")},f=function(){return i.a.get("api/user/currentuser")},g=function(){return i.a.get("/api/user/pets")},b=function(e){return i.a.get("/api/user/pets/"+e)},h=function(e){return i.a.post("/api/user/pets",e)},y=function(e){return i.a.post("/api/user/petfood",e)},v=function(){return i.a.get("/api/user/petfood")},N=function(e){return i.a.get("/api/user/petfood/"+e)},x=t(26),O=t(39),j=(t(78),function(e){var a=e.setUserData,t=Object(m.f)(),n=(Object(m.g)().state||{from:{pathname:"/login"}}).from;return r.a.createElement("div",null,r.a.createElement(O.a,{style:{backgroundColor:"#B5838D"}},r.a.createElement(O.a.Brand,{as:s.b,className:"aladin",to:"/"},r.a.createElement("span",{style:{color:"#FFCDB2"}},"catlady")),r.a.createElement(x.a,{className:"ml-auto"},r.a.createElement(x.a.Link,{as:s.b,to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"My Pets"),r.a.createElement(x.a.Link,{as:s.b,to:"/petfoods",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Food List"),r.a.createElement(x.a.Link,{as:s.b,to:"/signup",className:"/signup"===window.location.pathname?"nav-link active":"nav-link"},"Sign Up"),r.a.createElement(x.a.Link,{onClick:function(){E().then((function(e){a({username:"",id:""}),t.replace(n)}))},className:"ml-auto"},"Logout"))))});t(85);var C=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))},w=t(20),P=t(11),F=t(14),k=t(6),T=t(7),S=t(5),L=t(9);function D(e){var a=e.form,t=e.setForm,l=Object(m.f)(),c=(Object(m.g)().state||{from:{pathname:"/"}}).from,s=Object(n.useState)({username:"",id:""}),u=Object(o.a)(s,2),i=u[0],p=u[1];function d(e){var n=e.target,r=n.name,l=n.value;t(Object(P.a)(Object(P.a)({},a),{},Object(w.a)({},r,l)))}return Object(n.useEffect)((function(){f().then((function(e){return p(e.data)}))}),[]),r.a.createElement(L.a,{className:"row justify-content-center pt-5"},r.a.createElement(T.a,{className:"col-md-6 col-md-offset-3"},r.a.createElement(k.a,{className:"card p-4",id:"card",style:{borderRadius:"2em",boxShadow:"0px 0px 4px 4px #ccc"}},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,{controlId:"petName"},r.a.createElement(S.a.Label,null,"Pet Name: "),r.a.createElement(S.a.Control,{name:"petName",type:"text",onChange:d})),r.a.createElement(S.a.Group,{controlId:"petType"},r.a.createElement(S.a.Label,null,"Pet Type: "),r.a.createElement(S.a.Control,{name:"petType",as:"select",onChange:d},r.a.createElement("option",null," "),r.a.createElement("option",null,"Cat"),r.a.createElement("option",null,"Dog"))),r.a.createElement(S.a.Group,{controlId:"currentWeight"},r.a.createElement(S.a.Label,null,"Current Weight: "),r.a.createElement(S.a.Control,{name:"currentWeight",type:"number",min:1,onChange:d}),r.a.createElement(S.a.Text,{className:"text-muted"},"Please enter in lb")),r.a.createElement(S.a.Group,{controlId:"IdealWeight"},r.a.createElement(S.a.Label,null,"Ideal Weight: "),r.a.createElement(S.a.Control,{name:"idealWeight",type:"number",min:1,onChange:d}),r.a.createElement(S.a.Text,{className:"text-muted"},"Please enter in lb")),r.a.createElement(S.a.Group,{controlId:"mealsPerDay"},r.a.createElement(S.a.Label,null,"Meals per day: "),r.a.createElement(S.a.Control,{name:"mealsPerDay",type:"number",min:1,onChange:d}),r.a.createElement(S.a.Text,{className:"text-muted"},"How many times a day do you feed this pet?")),r.a.createElement(F.a,{disabled:!(a.petType&&a.petName&&a.currentWeight&&a.idealWeight),type:"button",onClick:function(e){e.preventDefault(),a.petName&&a.petType&&a.currentWeight&&a.idealWeight&&h({petName:a.petName,petType:a.petType,currentWeight:a.currentWeight,idealWeight:a.idealWeight,mealsPerDay:a.mealsPerDay,userId:i.id}).then((function(e){l.replace(c)})).catch((function(e){return console.log(e)}))}}," Submit")))))}var B=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};t(86);var I=function(e){return r.a.createElement(B,{className:"pb-3"},r.a.createElement(L.a,{className:"row justify-content-center pb-5"},r.a.createElement(T.a,{className:"col-md-12 col-md-offset-3"},r.a.createElement(k.a,{className:"card px-4",id:"card",style:{borderRadius:"2em",boxShadow:"0px 0px 4px 4px #ccc"}},r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{style:{textAlign:"center",height:0}},e.formname),r.a.createElement(S.a,{className:"login"},r.a.createElement(S.a.Group,{className:"form-group"},r.a.createElement(S.a.Label,{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement(S.a.Control,{onChange:e.handleChange,name:"username",type:"email",className:"form-control",placeholder:"Email (required)",value:e.uValue})),r.a.createElement(S.a.Group,{className:"form-group"},r.a.createElement(S.a.Label,{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement(S.a.Control,{onChange:e.handleChange,name:"password",type:"password",className:"form-control",placeholder:"Password",value:e.pValue})),r.a.createElement(F.a,{disabled:!(e.formUser&&e.formPass),onClick:e.handleFormSubmit,type:"submit",className:"btn btn-primary"},e.buttonText),r.a.createElement(S.a.Group,{className:"pt-2"},e.children)))))))};t(87);var W=function(){var e={username:"",password:""},a=Object(n.useState)(e),t=Object(o.a)(a,2),l=t[0],c=t[1],s=Object(m.f)(),u=(Object(m.g)().state||{from:{pathname:"/login"}}).from;return r.a.createElement("div",{className:"container"},r.a.createElement(I,{formname:"Sign Up Form",handleChange:function(e){var a=e.target,t=a.name,n=a.value;c(Object(P.a)(Object(P.a)({},l),{},Object(w.a)({},t,n)))},handleFormSubmit:function(a){a.preventDefault(),l.username&&l.password&&p({username:l.username,password:l.password}).then(c(e)).then((function(e){return s.replace(u)})).catch((function(e){c(Object(P.a)(Object(P.a)({},l),{},{err:e.response.status}))}))},buttonText:"Sign Up",formUser:l.username,formPass:l.password,uValue:l.username||"",pValue:l.password||""},r.a.createElement("p",null,"Or Login ",r.a.createElement("a",{href:"/"},"Here")),422===l.err?r.a.createElement("div",{className:"alert-danger"},"Error: Username already exists"):null,500===l.err?r.a.createElement("div",{className:"alert-danger"},"Error: Sorry we are currently experiencing issues"):null))},U=t(31),A=(t(88),t(27));var G=function(e){var a={username:"",password:""},t=Object(n.useState)(a),l=Object(o.a)(t,2),c=l[0],s=l[1],u=Object(m.f)(),i=(Object(m.g)().state||{from:{pathname:"/"}}).from;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{style:{backgroundColor:"#FFB4A2"},fluid:!0},r.a.createElement("h1",{style:{textAlign:"center",color:"#6D6875",fontFamily:"Lato"}},"Manage The Diets Of All Your Pets")),r.a.createElement(U.a,null,r.a.createElement(I,{formname:"Login Form",handleChange:function(e){var a=e.target,t=a.name,n=a.value;s(Object(P.a)(Object(P.a)({},c),{},Object(w.a)({},t,n)))},handleFormSubmit:function(t){t.preventDefault(),c.username&&c.password&&d({username:c.username,password:c.password}).then((function(t){e.setUserData(t.data),s(a)})).then((function(e){return u.replace(i)})).catch((function(e){s(Object(P.a)(Object(P.a)({},c),{},{err:e.response.status}))}))},buttonText:"Login",formUser:c.username,formPass:c.password,uValue:c.username||"",pValue:c.password||""},r.a.createElement("p",null,"Or Sign Up ",r.a.createElement("a",{href:"/signup"},"Here")),401===c.err?r.a.createElement("div",{className:"alert-danger"},"Error: Username or password is incorrect"):null,500===c.err?r.a.createElement("div",{className:"alert-danger"},"Error: Sorry we are currently experiencing issues"):null)))},R=(t(89),function(e){return r.a.createElement("div",null,r.a.createElement(A.a,{style:{backgroundColor:"#E5989B",textAlign:"center"}},r.a.createElement("h1",{className:"display-3"},"My Pets"),r.a.createElement("p",{className:"lead"},"Choose one of your Pets by clicking one below to check out or modify their diet.")))}),z=(t(90),function(e){var a=Object(m.f)(),t=(Object(m.g)().state||{from:{pathname:"/finalcalculation"}}).from;return r.a.createElement("div",null,r.a.createElement(k.a,{id:e.id,style:{backgroundColor:"#FFB4A2",border:"3px solid #E5989B",borderRadius:"10px",filter:"grayscale(50%)"}},r.a.createElement(k.a.Img,{src:e.imgsrc,className:"petImg",alt:"Card image cap",style:{maxHeight:"300px",maxWidth:"200px"}}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e.name),r.a.createElement(k.a.Subtitle,null,e.type)),r.a.createElement(F.a,{name:e.id,onClick:function(n){var r=n.target.name;b(r).then((function(n){e.setCurrentPet(n.data),a.replace(t)}))}},"Select Pet")))}),M=(t(91),function(e){var a=Object(m.f)(),t=(Object(m.g)().state||{from:{pathname:"/newPet"}}).from;return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(L.a,{className:"justify-content-center text-center"},r.a.createElement(T.a,null,r.a.createElement(k.a,{style:{backgroundColor:"#E5989B",width:"21em",margin:"0 auto",marginTop:"3em"},body:!0},r.a.createElement(k.a.Title,null,"Start caring for a new friend!"),r.a.createElement(F.a,{className:"AddBtn",block:!0,variant:"primary",onClick:function(){return a.replace(t)}},"Add Pet "))))))}),V=(t(92),function(e){e.route,e.title;var a=Object(m.f)(),t=(Object(m.g)().state||{from:{pathname:"/petfood"}}).from;return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(L.a,{className:"justify-content-center text-center"},r.a.createElement(T.a,null,r.a.createElement(k.a,{style:{backgroundColor:"#E5989B",width:"21em",margin:"0 auto",marginTop:"3em"},body:!0},r.a.createElement(k.a.Title,null,"Add a new food!"),r.a.createElement(F.a,{className:"AddBtn",block:!0,variant:"primary",onClick:function(){return a.replace(t)}},"Add Food "))))))}),H=(t(93),t(52)),_=t.n(H),J=t(53),Y=t.n(J);var q=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){g().then((function(e){c(e.data)}))}),[]);var m=r.a.createElement("div",null," No Pets Found");return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(B,null,r.a.createElement(L.a,{className:"justify-content-around"},0!==l.length?l.map((function(a){return r.a.createElement(T.a,{key:a._id,xs:"auto",style:{paddingBottom:15}},r.a.createElement(z,{name:a.petName,type:a.petType,imgsrc:"Cat"===a.petType?_.a:Y.a,id:a._id,currentPet:e.currentPet,setCurrentPet:e.setCurrentPet}))})):m),r.a.createElement("hr",{style:{width:"80%"}}),r.a.createElement(L.a,{className:"justify-content-around"},r.a.createElement(T.a,{md:6},r.a.createElement(M,null)),r.a.createElement(T.a,{md:6},r.a.createElement(V,null)))))};function $(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({className:"form-control mt-2"},e)))}var K=function(e){var a=e.form,t=e.setForm,n=Object(m.f)(),l=(Object(m.g)().state||{from:{pathname:"/"}}).from;function c(e){var n=e.target,r=n.name,l=n.value;t(Object(P.a)(Object(P.a)({},a),{},Object(w.a)({},r,l)))}return r.a.createElement(B,null,r.a.createElement(L.a,{className:"row justify-content-center pt-5"},r.a.createElement(T.a,{className:"col-md-6 col-md-offset-3"},r.a.createElement(k.a,{className:"card p-4",id:"card",style:{borderRadius:"2em",boxShadow:"0px 0px 4px 4px #ccc"}},r.a.createElement(k.a.Body,null,r.a.createElement("h2",null,"Enter a Pet Food"),r.a.createElement(S.a,{className:"login"},r.a.createElement(S.a.Group,{className:"form-group"},r.a.createElement(S.a.Label,null,"Pet Food Name: "),r.a.createElement($,{onChange:c,name:"name",type:"text"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Pet Food Type: "),r.a.createElement(S.a.Control,{name:"petType",as:"select",onChange:c},r.a.createElement("option",null," "),r.a.createElement("option",null,"Cat"),r.a.createElement("option",null,"Dog")),r.a.createElement(S.a.Label,{className:"mt-3"},"Cal Per Package: "),r.a.createElement($,{onChange:c,name:"calPer",type:"text"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Oz Per Package: "),r.a.createElement($,{onChange:c,name:"ozPer",type:"text"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Ingredient Rating: "),r.a.createElement($,{onChange:c,name:"ing",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Nutrition Rating: "),r.a.createElement($,{onChange:c,name:"nut",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Ingredients: "),r.a.createElement($,{onChange:c,name:"ingredients",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Protein: "),r.a.createElement($,{onChange:c,name:"protein",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Fat: "),r.a.createElement($,{onChange:c,name:"fat",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Carbs: "),r.a.createElement($,{onChange:c,name:"carbs",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Ash: "),r.a.createElement($,{onChange:c,name:"ash",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Fiber: "),r.a.createElement($,{onChange:c,name:"fiber",type:"text",placeholder:"(Optional)"}),r.a.createElement(S.a.Label,{className:"mt-3"},"Moisture: "),r.a.createElement($,{onChange:c,name:"moisture",type:"text",placeholder:"(Optional)"})),r.a.createElement(F.a,{disabled:!(a.name&&a.calPer&&a.ozPer&&a.petType),onClick:function(e){e.preventDefault(),a.name&&a.calPer&&a.ozPer&&a.petType&&y({name:a.name,petType:a.petType,caloriesPerPackage:a.calPer,ozPerPackage:a.ozPer,ingredientsRating:a.ing,nutritionRating:a.nut,ingredients:a.ingredients,protein:a.protein,fat:a.fat,carbs:a.carbs,ash:a.ash,fiber:a.fiber,moisture:a.moisture}).then((function(e){return n.replace(l)})).catch((function(e){return console.log(e)}))},type:"submit",className:"btn btn-primary"},"Submit")))))))},Q=(t(94),t(54));var X=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],c=r.a.createElement("h3",null," Choose A Pet Food Type From The Dropdown");return r.a.createElement(U.a,null,r.a.createElement(L.a,null,r.a.createElement(T.a,null,r.a.createElement("h2",null,"Pet Food List and Nutrition Info"))),r.a.createElement(L.a,{className:"justify-content-center mt-3"},r.a.createElement(T.a,{lg:3},r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Control,{as:"select",onChange:function(e){var a=e.target.value;v().then((function(e){var t=e.data.filter((function(e){return e.petType===a}));l(t)}))}},r.a.createElement("option",{value:"0"},"Search By Food Type"),r.a.createElement("option",{value:"Dog"},"Dog"),r.a.createElement("option",{value:"Cat"},"Cat")),r.a.createElement("br",null)))),r.a.createElement(L.a,null,r.a.createElement(T.a,null,0!==t.length?r.a.createElement(Q.a,{striped:!0,id:"petFoods",style:{border:"solid",borderColor:"#B5838D"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Food Name"),r.a.createElement("th",null,"Food Type"),r.a.createElement("th",null,"Ingredients"),r.a.createElement("th",null,"Protein"),r.a.createElement("th",null,"Fat"),r.a.createElement("th",null,"Carbs")),t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.petType," Food"),r.a.createElement("td",null,e.ingredients),r.a.createElement("td",null,e.protein),r.a.createElement("td",null,e.fat),r.a.createElement("td",null,e.carbs))})))):c)))};t(95);var Z=function(){return r.a.createElement("footer",{className:"footer aladin",style:{color:"#FFCDB2"}},"catlady")},ee=(t(96),t(97),function(e){var a=e.currentPet,t=Object(n.useState)({results:[]}),l=Object(o.a)(t,2),c=l[0],m=l[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),i=u[0],p=u[1],d=a.petName,E=a.mealsPerDay,f=a.petType,g=a.currentWeight,b=i.name,h=i.ozPerPackage,y=i.caloriesPerPackage,x=0,O=0,j=0,C=0,w=0,F=0,k=y/h;function T(){w=j/y*30,F=C/y*30}"Cat"===f?(O=(j=20*g)/k,x=(C=35*g)/k,T()):(O=(j=25*g)/k,x=(C=30*g)/k,T()),Object(n.useEffect)((function(){v().then((function(e){m(Object(P.a)(Object(P.a)({},c),{},{results:e.data}))}))}),[]);var L=r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Select a Food to See Feeding Recomendation"));return r.a.createElement("div",{className:"row justify-content-center pt-5"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("div",{className:"card p-4",id:"card",style:{borderRadius:"2em",boxShadow:"0px 0px 4px 4px #ccc"}},r.a.createElement("h1",null,d),r.a.createElement("p",null,"Your ",f," will need between ",j," and ",C," calories per day."),0===i.length?L:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Using ",b," they will need between ",parseFloat(O).toFixed(2)," and ",parseFloat(x).toFixed(2)," oz per day to maintain their current weight."),r.a.createElement("p",null,"That is between ",parseFloat(O/E).toFixed(2)," and ",parseFloat(x/E).toFixed(2)," oz per meal."),r.a.createElement("p",null,"In a 30 day period you will need between ",Math.ceil(w)," and ",Math.ceil(F)," packages of ",b,".")),r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Control,{as:"select",onChange:function(e){var a=e.target.value;N(a).then((function(e){p(e.data)})).catch((function(e){return console.log(e)}))}},r.a.createElement("option",{value:"0"},"Choose..."),c.results.length>0?c.results.filter((function(e){return e.petType.indexOf(a.petType)>=0})).map((function(e,a){return r.a.createElement("option",{key:a,value:e._id},e.name)})):"No Foods Found"),r.a.createElement("br",null)))))}),ae=function(e){Object(m.f)();var a=Object(n.useState)({}),t=Object(o.a)(a,2),l=t[0],c=t[1],u=Object(n.useState)({username:"",id:""}),i=Object(o.a)(u,2),p=i[0],d=i[1],E=Object(n.useState)({}),f=Object(o.a)(E,2),g=f[0],b=f[1];return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(j,{setUserData:d}),r.a.createElement(C,null,r.a.createElement(m.b,{exact:!0,path:"/login",render:function(e){return""!==p.username?r.a.createElement(m.a,{to:"/"}):r.a.createElement(G,{setUserData:d})}}),r.a.createElement(m.b,{exact:!0,path:"/signup",render:function(e){return""!==p.username?r.a.createElement(m.a,{to:"/"}):r.a.createElement(W,{setUserData:d})}}),r.a.createElement(m.b,{exact:!0,path:"/",render:function(e){return""===p.username?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(q,{userData:p,setCurrentPet:b})}}),r.a.createElement(m.b,{exact:!0,path:"/newPet",render:function(e){return""===p.username?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(D,{form:l,setForm:c})}}),r.a.createElement(m.b,{exact:!0,path:"/petfood",render:function(e){return""===p.username?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(K,{form:l,setForm:c})}}),r.a.createElement(m.b,{exact:!0,path:"/petfoods",render:function(e){return""===p.username?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(X,null)}}),r.a.createElement(m.b,{exact:!0,path:"/finalcalculation",render:function(e){return""===p.username?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(ee,{currentPet:g})}})),r.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.e539ae24.chunk.js.map