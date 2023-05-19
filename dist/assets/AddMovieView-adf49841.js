import{_ as f,u as y,A as b,o as l,c as n,a as t,F as m,r as g,t as _,w as M,l as x,p as S,n as A,B as k,d as w,e as q}from"./index-a091949d.js";const B={props:{actors:{type:Array,default:()=>[]}},data(){return{popupMessage:[],maxlength:50,minlength:1,tokensStore:y()}},computed:{allActors(){return this.actors}},methods:{closePopUp(){document.getElementById("myModal").style.display="none"},async onSubmit(o){let e=o.target,r=e.querySelector("#title").value,c=e.querySelector("#image").value,i=e.querySelector("#prodYear").value,s=e.querySelector("#duration").value,a=e.querySelector("#audience").value,u=e.querySelector("#desc").value,v=e.querySelectorAll(".actor_checkbox"),h=[];for(let d=0;d<v.length;d++)v[d].checked&&h.push(v[d].value);if(this.popupMessage=[],(r.length>=this.maxlength||r.length<this.minlength)&&this.popupMessage.push("- Le titre doit avoir 50 charactères ou moins et ne doit pas être vide."),c.lenght>this.minlength&&this.popupMessage.push("- L'URL de l'image ne doit pas être vide."),(i.length!=4||i>new Date().getFullYear())&&this.popupMessage.push("- L'année doit être dans le passé et doit avoir 4 charactères."),s.length<=0&&this.popupMessage.push("- La durée ne doit pas être vide."),(u.length>=this.maxlength||u.length<this.minlength)&&this.popupMessage.push("- La description doit avoir 50 charactères ou moins et ne doit pas être vide."),this.popupMessage.length==0){let d=await b(this.tokensStore.latestToken,r,i,u,s,h,a,c);d.statusCode!=200?this.popupMessage.push(d.error):this.popupMessage.push(d.message)}document.getElementById("myModal").style.display="block"}}},p=o=>(S("data-v-05c970d2"),o=o(),A(),o),I=p(()=>t("h1",null,"Ajouter un bon film",-1)),z=x('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-05c970d2><path d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-13 8.63c1.013-1.574 1.955-2.256 2.938-2.55l.234 1.448c-.663.256-1.215.806-1.965 1.971l-1.207-.869zm11-4.729c-.928 1.473-1.748 2.104-2.566 2.322l.254 1.436c.746-.176 1.521-.583 2.312-1.391v-2.367zm-3.855 2.385c-.883-.103-1.92-.365-2.938-.376l.236 1.462c.873.068 1.931.345 2.963.395l-.261-1.481z" data-v-05c970d2></path></svg><div data-v-05c970d2><label for="title" data-v-05c970d2>Titre du film : </label><input id="title" name="title" type="text" required data-v-05c970d2></div><div data-v-05c970d2><label for="image" data-v-05c970d2>Image : </label><input id="image" name="image" type="text" placeholder="Image URL" required data-v-05c970d2></div><div data-v-05c970d2><label for="prodYear" data-v-05c970d2>Année de production : </label><input id="prodYear" name="prodYear" type="text" required data-v-05c970d2></div><div data-v-05c970d2><label for="duration" data-v-05c970d2>Durée en minutes : </label><input id="duration" name="duration" type="number" required data-v-05c970d2></div><div data-v-05c970d2><label data-v-05c970d2>Auditoire : </label><select id="audience" data-v-05c970d2><option data-v-05c970d2>PG-13</option><option data-v-05c970d2>R</option><option data-v-05c970d2>NC-17</option><option data-v-05c970d2>G</option><option data-v-05c970d2>PG</option></select></div><label data-v-05c970d2>Acteurs : </label>',7),L={class:"actors"},Y=["value"],$=p(()=>t("div",null,[t("label",{for:"desc"},"Description du film : "),t("textarea",{id:"desc",name:"desc",type:"text",placeholder:"Il était une fois..."})],-1)),C=p(()=>t("button",{type:"submit"},"Ajouter",-1)),D={class:"popup"},P={id:"myModal",class:"modal"},U={class:"modal-content"},j=p(()=>t("path",{d:"m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z","fill-rule":"nonzero"},null,-1)),E=[j],F={id:"messages"};function G(o,e,r,c,i,s){return l(),n("div",null,[I,t("form",{class:"form",onSubmit:e[0]||(e[0]=M((...a)=>s.onSubmit&&s.onSubmit(...a),["prevent"]))},[z,t("div",L,[(l(!0),n(m,null,g(s.allActors,a=>(l(),n("div",null,[t("input",{class:"actor_checkbox",value:a.id,type:"checkbox"},null,8,Y),t("p",null,_(a.last_name),1)]))),256))]),$,C],32),t("div",D,[t("div",P,[t("div",U,[(l(),n("svg",{id:"close",onClick:e[1]||(e[1]=a=>s.closePopUp()),"stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},E)),(l(!0),n(m,null,g(i.popupMessage,a=>(l(),n("p",F,_(a),1))),256))])])])])}const N=f(B,[["render",G],["__scopeId","data-v-05c970d2"]]),R={components:{AddMovie:N},data(){return{actors:[]}},created(){k().then(o=>this.actors=o)}};function T(o,e,r,c,i,s){const a=w("AddMovie");return l(),q(a,{actors:i.actors},null,8,["actors"])}const H=f(R,[["render",T]]);export{H as default};