import{_ as p,u,q as m,v as h,o as c,c as r,a,w as g,F as _,r as f,t as v,p as w,n as b,l as x,d as y,e as S}from"./index-a091949d.js";const M="Connexion réussie!😊",U={data(){return{popupMessage:[],maxlength:50,minlength:1,tokensStore:u(),isLoggedIn:!1}},methods:{async openPopUp(t){t.preventDefault();let s=t.target;this.popupMessage=[];let o=s.querySelector("#email").value,e=s.querySelector("#password").value;if((o.length>=this.maxlength||o.length<this.minlength)&&this.popupMessage.push("- Email doit avoir 50 charactères ou moins."),(e.length>=this.maxlength||e.length<this.minlength)&&this.popupMessage.push("- Password doit avoir 50 charactères ou moins."),this.popupMessage.length==0){let i=await this.logUser(o,e);i!=null&&this.popupMessage.push(i),this.popupMessage.length==0&&(this.popupMessage.push(M),this.isLoggedIn=!0)}document.getElementById("myModal").style.display="block"},async logUser(t,s){let o=await m(t,s);if(o.statusCode==201){let e=await h(o.token);if(e.statusCode==200)this.tokensStore.addToken(o.token,e.id,e.role,e.firstName,e.lastName);else return e.message}else return o.error},closePopUp(){this.isLoggedIn&&this.$router.go(-1),document.getElementById("myModal").style.display="none"}}},d=t=>(w("data-v-b3f40ccc"),t=t(),b(),t),k=d(()=>a("h2",null,"Connexion",-1)),C=x('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-b3f40ccc><path d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-13 8.63c1.013-1.574 1.955-2.256 2.938-2.55l.234 1.448c-.663.256-1.215.806-1.965 1.971l-1.207-.869zm11-4.729c-.928 1.473-1.748 2.104-2.566 2.322l.254 1.436c.746-.176 1.521-.583 2.312-1.391v-2.367zm-3.855 2.385c-.883-.103-1.92-.365-2.938-.376l.236 1.462c.873.068 1.931.345 2.963.395l-.261-1.481z" data-v-b3f40ccc></path></svg><div data-v-b3f40ccc><label for="email" data-v-b3f40ccc>Email : </label><input id="email" type="email" minlength="1" maxlength="50" required data-v-b3f40ccc></div><div data-v-b3f40ccc><label for="password" data-v-b3f40ccc>Mot de passe : </label><input id="password" type="password" minlength="1" maxlength="50" required data-v-b3f40ccc></div><button type="submit" data-v-b3f40ccc>Se connecter</button>',4),I=[C],z={class:"popup"},B={id:"myModal",class:"modal"},E={class:"modal-content"},$=d(()=>a("path",{d:"m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-8.991 6.932 2.717-2.718c.146-.146.338-.219.53-.219.405 0 .751.325.751.75 0 .193-.073.384-.219.531l-2.718 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.531-.219l-2.728-2.728-2.728 2.728c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z","fill-rule":"nonzero"},null,-1)),P=[$],q={id:"messages"};function L(t,s,o,e,i,l){return c(),r("div",null,[k,a("form",{class:"form",onSubmit:s[0]||(s[0]=g((...n)=>l.openPopUp&&l.openPopUp(...n),["prevent"]))},I,32),a("div",z,[a("div",B,[a("div",E,[(c(),r("svg",{id:"close",onClick:s[1]||(s[1]=n=>l.closePopUp()),"stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},P)),(c(!0),r(_,null,f(i.popupMessage,n=>(c(),r("p",q,v(n),1))),256))])])])])}const N=p(U,[["render",L],["__scopeId","data-v-b3f40ccc"]]),V={components:{UserConnexion:N}};function D(t,s,o,e,i,l){const n=y("UserConnexion");return c(),S(n)}const T=p(V,[["render",D]]);export{T as default};