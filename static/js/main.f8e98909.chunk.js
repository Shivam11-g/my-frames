(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,a,t){e.exports=t(56)},32:function(e,a,t){},50:function(e,a,t){e.exports=t.p+"static/media/s.c72ee525.jpg"},56:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(24),c=t.n(r),m=(t(32),t(6)),o=t(1),i=t(10),s=t(25),u=t.n(s);var d=function(){var e,a=Object(l.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1];return n.a.createElement("div",{className:"container mt-3"},n.a.createElement("h3",{className:"my-4"},"Admin Page"),n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),c("Loading...");var t={brand:a.target.brand.value,image:e,frameType:a.target.frameType.value,frameShape:a.target.frameShape.value,bought:a.target.bought.value,wishlisted:a.target.wishlisted.value,rating:parseFloat(a.target.rating.value),gender:a.target.gender.value,color:a.target.color.value,width:a.target.width.value,newPrice:a.target.newPrice.value,oldPrice:a.target.oldPrice.value};return u.a.post("https://my-frames.herokuapp.com/frame?",t).then((function(e){c("Successful"),alert("Submited")})).catch((function(e){return console.log(e)}))}},n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"brand"},"Brand"),n.a.createElement("input",{type:"text",className:"form-control",name:"brand"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"img"},"Image"),n.a.createElement("input",{type:"file",className:"form-control btn-secondary",name:"img",onChange:function(a){return function(a){var t=a.target.files,l=new FileReader;l.readAsDataURL(t[0]),l.onload=function(a){e=a.target.result}}(a)}}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"frameType"},"Frame Type"),n.a.createElement("input",{type:"text",className:"form-control",name:"frameType"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"frameShape"},"Frame Shape"),n.a.createElement("input",{type:"text",className:"form-control",name:"frameShape"}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"wishlisted"},"Wishlisted"),n.a.createElement("input",{type:"number",className:"form-control",name:"wishlisted"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"bought"},"No. of Purchases"),n.a.createElement("input",{type:"number",className:"form-control",name:"bought"}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"gender"},"For Gender"),n.a.createElement("input",{type:"text",className:"form-control",name:"gender"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"color"},"Color"),n.a.createElement("input",{type:"text",className:"form-control",name:"color"}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"rating"},"Star Rating (enter float value between 0 and 5)"),n.a.createElement("input",{type:"number",step:"0.1",min:"0",max:"5",className:"form-control",name:"rating"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"width"},"Width in 'mm'"),n.a.createElement("input",{type:"number",className:"form-control",name:"width"}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"newPrice"},"New Price"),n.a.createElement("input",{type:"number",className:"form-control",name:"newPrice"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"oldPrice"},"Old Price"),n.a.createElement("input",{type:"number",className:"form-control",name:"oldPrice"}))),n.a.createElement("button",{type:"submit",className:"btn btn-primary px-4"}," ","Submit"," "),n.a.createElement("p",null,r)))};t(50);var p=function(e){return n.a.createElement("div",{id:"frame-card",className:"card m-1 my-3 py-2",style:{width:"22rem"}},n.a.createElement("span",{style:{left:280,position:"relative"}},e.wishlisted," ",n.a.createElement("svg",{width:"1.4em",height:"1.4em",viewBox:"0 0 16 16",className:"bi bi-heart",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}))),n.a.createElement("img",{src:e.image,className:"card-img-top img-responsive",alt:"img"}),n.a.createElement("div",{className:"card-body",style:{marginBottom:"-40px"}},n.a.createElement("p",{style:{fontSize:11}},n.a.createElement("span",{style:{fontWeight:"bold"}},e.brand)," ",n.a.createElement("span",{style:{float:"right"}},"Color: ",e.color)),n.a.createElement("p",{style:{fontSize:12}},"\n"),n.a.createElement("span",{style:{borderRadius:10,backgroundColor:"dodgerblue",color:"white",padding:2,paddingRight:2,fontSize:12}},e.rating," ",n.a.createElement("svg",{width:".8em",height:".8em",viewBox:"0 0 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))),n.a.createElement("span",{className:"text-muted",style:{fontSize:12}},"|",e.bought," bought")," ",n.a.createElement("span",{style:{fontSize:12,float:"right"}},"Frame Type: ",e.frameType),n.a.createElement("p",{style:{fontSize:12}},"\n"),n.a.createElement("span",{style:{fontSize:12}},"Rs ",e.newPrice," "),n.a.createElement("del",{style:{fontSize:12},className:"text-muted"},e.oldPrice),n.a.createElement("span",{style:{fontSize:12,float:"right"}},"Frame Shape: ",e.frameShape),n.a.createElement("p",null)))};var h=function(){var e=Object(l.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),s=Object(m.a)(c,2),u=s[0],h=s[1],f=Object(l.useState)(""),b=Object(m.a)(f,2),E=b[0],g=b[1],v=Object(l.useState)(""),N=Object(m.a)(v,2),y=N[0],k=N[1],w=Object(l.useState)(""),S=Object(m.a)(w,2),x=S[0],C=S[1],F=Object(l.useState)(""),O=Object(m.a)(F,2),j=O[0],P=O[1],R=Object(l.useState)(""),T=Object(m.a)(R,2),z=T[0],L=T[1],B=Object(l.useState)(""),W=Object(m.a)(B,2),A=W[0],H=W[1],M=Object(l.useState)(""),D=Object(m.a)(M,2),q=D[0],I=D[1],J=Object(l.useState)(""),G=Object(m.a)(J,2),U=G[0],$=G[1];return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement("center",null,n.a.createElement(i.b,{to:"/list"},"List"),"  ",n.a.createElement(i.b,{className:"ml-5 ",to:"/admin"},"Admin")),n.a.createElement(o.a,{path:"/list",component:function(e){var a=e.location.search;console.log(e.location.search);var l=function(e){e.preventDefault(),g("loading...");var t="https://my-frames.herokuapp.com/frame?"+u+a+y+x+j+U+z+A+q;console.log(t),k(""),C(""),P(""),h(""),$(""),H(""),I(""),L(""),fetch(t).then((function(e){return e.json()})).then((function(e){g(""),r(e)}))};return n.a.createElement("div",null,n.a.createElement("form",{id:"search",onSubmit:l},n.a.createElement("div",{className:"dropdown  m-1 "},n.a.createElement("button",{className:"btn btn-secondary dropdown-toggle px-4",type:"button","data-toggle":"dropdown"},"Sort",n.a.createElement("span",{className:"caret"})),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return h("&price=1")}},"Price: Low to High")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return h("&price=-1")}},"Price: High to Low")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return h("&addedOn=true")}},"New Arrival")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return h("&bought=true")}},"Bestseller")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(e){return h("&saving=true")}},"Biggest Saving")))),n.a.createElement("span",{style:{float:"right",position:"relative",top:"-30px",right:"120px",fontWeight:"bold"}},"Filter"),n.a.createElement("div",{className:"mx-3",style:{float:"right"}},"Frame Type",n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",onClick:function(e){return k("&frameType=Full Rim")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"Full Rim")),n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",onClick:function(e){return C("&frameType=Half Rim")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"Half Rim")),n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",onClick:function(e){return P("&frameType=Rimless")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Rimless"))),n.a.createElement("div",{style:{float:"right"}},"Frame Shape",n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",onClick:function(e){return $("&frameShape=square")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox4"},"Square")),n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox5",onClick:function(e){return L("&frameShape=rectangle")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox5"},"Rectangle")),n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox6",onClick:function(e){return H("&frameShape=round")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox6"},"Rounded")),n.a.createElement("div",{className:"form-check "},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox7",onClick:function(e){return I("&frameShape=cat eye")}}),n.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox7"},"Cat eye"))),n.a.createElement("center",null,n.a.createElement("button",{onSubmit:l,type:"Submit",className:"btn btn-primary my-3 px-5 py-2"}," Show")," ",E)),n.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},t.map((function(e,a){return console.log(e),n.a.createElement(p,{available:e.available,image:e.image,brand:e.brand,frameShape:e.frameShape,frameType:e.frameType,bought:e.bought,wishlisted:e.wishlisted,rating:e.rating,addedOn:e.addedOn,gender:e.gender,color:e.color,width:e.width,saving:e._saving,newPrice:e.newPrice,oldPrice:e.oldPrice,key:a})}))))}}),n.a.createElement(o.a,{path:"/admin",component:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f8e98909.chunk.js.map