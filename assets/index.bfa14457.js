import{o as a,c as t,a as e,w as l,F as s,r as n,b as o,d as i,e as r,t as c,f as p,u as d,m,g as u,h as b,i as g}from"./vendor.9b82155b.js";const h={},v={class:"navbar navbar-expand-lg navbar-dark bg-dark py-4 "},y={class:"container"},_=e("a",{class:"navbar-brand",href:"https://ronnynestaresrnc.github.io/epetres/"},[e("img",{src:"/epetres/assets/copa-america-logo.3559a884.png",alt:"",width:"300",height:"100"})],-1),w=e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},k={class:"navbar-nav me-auto mb-2 mb-lg-0"},S={class:"nav-item"},x=o("home"),T={class:"nav-item"},C=o("consultas"),j={class:"nav-item"},D=o("player"),z={class:"nav-item"},M=o("team");h.render=function(o,i,r,c,p,d){const m=n("router-link"),u=n("router-view");return a(),t(s,null,[e("nav",v,[e("div",y,[_,w,e("div",f,[e("ul",k,[e("li",S,[e(m,{class:"nav-link active",to:"/epetres/"},{default:l((()=>[x])),_:1})]),e("li",T,[e(m,{class:"nav-link",to:"/consult"},{default:l((()=>[C])),_:1})]),e("li",j,[e(m,{to:"/player",class:"nav-link"},{default:l((()=>[D])),_:1})]),e("li",z,[e(m,{to:"/team",class:"nav-link "},{default:l((()=>[M])),_:1})])])])])]),e(u)],64)};const A={class:"card d-flex flex-row"},E={class:"num__card"},F={class:"text-muted",style:{"font-size":"5rem"}},H={class:"date__card card-text"},N={class:"card-title text-warning"},P={class:""},q={class:"card-body"},B={props:{num_player:Number,photo_player:String,name_player:String,position_player:String},setup:l=>(s,n)=>(a(),t("div",A,[e("div",E,[e("h1",F,c(l.num_player),1)]),e("div",H,[e("h3",N,c(l.position_player),1),e("h5",P,c(l.name_player),1)]),e("div",q,[e("img",{src:"https://epetres.000webhostapp.com/images/"+l.photo_player,class:"imgg ",alt:l.photo_player,width:"200"},null,8,["src","alt"])])]))};const G={class:"container mt-5"},I={class:"row row-cols-1 row-cols-md-3 g-4"},J={setup(l){const{players:n}=function(){const a=i();return r((async()=>{const t=await fetch("https://epetres.000webhostapp.com/"),e=await t.json();a.value=e})),{players:a}}();return(l,o)=>(a(),t("div",G,[e("div",I,[(a(!0),t(s,null,p(d(n),(l=>(a(),t("div",{class:"col",key:l.id},[e(B,l,null,16)])))),128))])]))}};const K={components:{MyCard:B},setup(){const a=i([]),t=i([]);r((async()=>{const t=await fetch("https://epetres.000webhostapp.com/team.php"),e=await t.json();a.value=e}));return{obtener:e=>{console.log(a.value[e].id_team),r((async()=>{const l=await fetch("https://epetres.000webhostapp.com/?consultar="+a.value[e].id_team),s=await l.json();t.value=s,console.log(t.value)}))},teams:a,players:t}}},L={class:"container mt-5"},O={class:"row"},Q={class:"col-md-3"},R=e("h3",{class:"p-2"},"TEAM:",-1),U={class:"list-group"},V={class:"col-md-9"},W=e("h5",null,null,-1),X=e("ul",{class:"nav nav-tabs mb-3 mt-5",id:"pills-tab",role:"tablist"},[e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link active",id:"pills-list-tab","data-bs-toggle":"pill","data-bs-target":"#pills-list",type:"button",role:"tab","aria-controls":"pills-list","aria-selected":"true"},[e("i",{class:"bi bi-view-list",style:{"font-size":"1.8rem",color:"cornflowerblue"}})])]),e("li",{class:"nav-item",role:"presentation"},[e("button",{class:"nav-link",id:"pills-grid-tab","data-bs-toggle":"pill","data-bs-target":"#pills-grid",type:"button",role:"tab","aria-controls":"pills-grid","aria-selected":"false"},[e("i",{class:"bi bi-grid",style:{"font-size":"1.8rem",color:"cornflowerblue"}})])])],-1),Y={class:"tab-content",id:"pills-tabContent"},Z={class:"tab-pane fade show active",id:"pills-list",role:"tabpanel","aria-labelledby":"pills-list-tab"},$=o(" d "),aa={class:"table"},ta=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"nombre"),e("th",{scope:"col"},"peso"),e("th",{scope:"col"},"año de nacimiento"),e("th",{scope:"col"},"altura"),e("th",{scope:"col"},"escudo")])],-1),ea={class:"tab-pane fade",id:"pills-grid",role:"tabpanel","aria-labelledby":"pills-grid-tab"},la={class:"container-fluid mt-5"},sa={class:"row row-cols-1 row-cols-md-2 g-4"};K.render=function(l,i,r,d,m,u){const b=n("MyCard");return a(),t("div",L,[e("div",O,[e("div",Q,[R,e("ul",U,[(a(!0),t(s,null,p(d.teams,((s,n)=>(a(),t("li",{class:"list-group-item ",id:"list-"+s.name_team,key:s.id_team,onClick:a=>d.obtener(n,l.id)},[o(c(s.name_team)+" ",1),e("img",{src:"https://epetres.000webhostapp.com/images/"+s.image_team,width:"",height:"40",style:{},alt:s.image_team},null,8,["src","alt"])],8,["id","onClick"])))),128))])]),e("div",V,[W,X,e("div",Y,[e("div",Z,[$,e("table",aa,[ta,e("tbody",null,[(a(!0),t(s,null,p(d.players,(l=>(a(),t("tr",{key:l.id},[e("th",null,c(l.name_player),1),e("td",null,c(l.height_player),1),e("td",null,c(l.position_player),1),e("td",null,c(l.num_player),1),e("td",null,c(l.weight_player),1)])))),128))])])]),e("div",ea,[e("div",la,[e("div",sa,[(a(!0),t(s,null,p(d.players,(l=>(a(),t("div",{class:"col",key:l.id},[e(b,l,null,16)])))),128))])])])])])])])};const na={};na.render=function(e,l,s,n,o,i){return a(),t("h1",null,"mihome")};const oa={scope:"row"},ia={props:{id_team:String,name_team:String,desp_team:String,photo_offc_team:String,image_team:String},setup:l=>(s,n)=>(a(),t("tr",null,[e("th",oa,c(l.id_team),1),e("td",null,c(l.name_team),1),e("td",null,c(l.desp_team),1),e("td",null,c(l.image_team),1),e("td",null,c(l.photo_offc_team),1)]))};const ra={class:"container mt-5"},ca={class:"table"},pa=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"Team"),e("th",{scope:"col"},"Descripcion"),e("th",{scope:"col"},"shield team"),e("th",{scope:"col"},"image teamssss")])],-1),da=[{path:"/epetres/",name:"Home",component:na},{path:"/player",name:"Player",component:J},{path:"/consult",name:"Consult",component:K},{path:"/team",name:"Team",component:{setup(l){const{teams:n}=function(){const a=i([]);return r((async()=>{const t=await fetch("https://epetres.000webhostapp.com/team.php"),e=await t.json();a.value=e,console.log("dime la verdad",a.value)})),{teams:a}}();return(l,o)=>(a(),t("div",ra,[e("table",ca,[pa,e("tbody",null,[(a(!0),t(s,null,p(d(n),(e=>(a(),t(ia,m({key:e.id},e),null,16)))),128))])])]))}}}],ma=u({history:b(),routes:da});g(h).use(ma).mount("#app");
