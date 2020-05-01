(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(19),o=a.n(i),r=(a(28),a(2)),s=a(3),l=a(5),m=a(4),d=a(9),p=(a(29),a(11)),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).addStyling=function(){return e.props.tab.id===e.props.activeTab?{color:"rgb(143, 143, 143)"}:{color:"#EA5E76"}},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(p.b,{to:"/".concat(this.props.tab.title),className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},this.props.tab.title)}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return c.a.createElement(u,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})}))}}]),a}(n.Component),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"content",style:{marginTop:"1vw"}},c.a.createElement("div",{class:"content-body home-content-body"},c.a.createElement("div",{class:"content-body-text"},c.a.createElement("div",{class:"content-title",style:{color:"#ea5e76",lineHeight:".8em"}},"Hello!"),c.a.createElement("div",{class:"namedrop",style:{fontSize:"64px",fontWeight:"bold",lineHeight:"1.5em"}},"I'm Spencer."),"I'm a UCSB second year studying Computer Science. I'm interested in roles such as UI/UX Engineering, Web Development, Software Development, or anywhere that I can be involved in creating a product! "),c.a.createElement("div",{class:"content-body-image"},c.a.createElement("img",{style:{paddingLeft:"1vw"},src:"images/cutoutblur.jpg"}))))}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"content",style:{marginTop:"1vw"}},c.a.createElement("div",{class:"about-content-body"},c.a.createElement("div",{id:"aboutImg",class:"content-body-image about-image"},c.a.createElement("img",{src:"images/lobster2.png"})),c.a.createElement("div",{class:"content-body-text about-text"},c.a.createElement("div",{class:"content-title",style:{color:"#ea5e76"}},"About Me"),"Hi there, I'm Spencer! I'm a second year UC Santa Barbara Computer Science student from the Bay Area. I'm interested in Human-Computer Interaction, particulary developing media, interfaces, and graphics that serve to change a user's perception and intuition through design cues. I'm currently searching for internships for Summer 2020! If you or someone you know is interested, check out this fancy sheet of paper: ",c.a.createElement("a",{style:{fontStyle:"italic"},target:"_blank",href:"https://drive.google.com/file/d/1cBK1KNmMv8Ypru8Uj5dLXweS0iUCLxeY/view?usp=sharing"},"r\xe9sum\xe9"),c.a.createElement("br",null),c.a.createElement("br",null),"In my free time, I like to read fashion blogs, play soccer (big Manchester City fan), drink boba, and sing!")))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"content"},c.a.createElement("div",{class:"content-body"},c.a.createElement("div",{class:"content-body-text"},c.a.createElement("div",{class:"content-title"},c.a.createElement("a",{href:"https://spotifynd-friends.herokuapp.com/"},"Spotifynd Friends")),"Spotifynd Friends is a web app that utilizes the Spotify Web API to analyze and generate compatibility ratings between user's playlists using track audio features. Using this web app, users can find others who have similar music tastes! ",c.a.createElement("a",{href:"Documentation.pdf",target:"_blank"},"Documentation"),c.a.createElement("br",null)),c.a.createElement("div",{class:"content-body-image"},c.a.createElement("a",{href:"https://spotifynd-friends.herokuapp.com/"},c.a.createElement("img",{src:"images/project.jpg"})))))}}]),a}(n.Component),E=a(13),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleScroll=n.props.functions.handleScroll.bind(Object(E.a)(n)),n.toTop=n.props.functions.toTop.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"topBtn"},c.a.createElement("img",{src:"images/uparrow.png",onClick:this.toTop})),c.a.createElement("div",{class:"content"},c.a.createElement("div",{class:"gallery-container"},c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/IMG_5504.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/IMG_5504.jpg")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/barca/sagrada.JPG",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/barca/sagrada.JPG")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/barca/market.JPG",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/barca/market.JPG")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/barca/casamila.JPG",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/barca/casamila.JPG")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/lakedad.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/lakedad.jpg")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/barca/boats.JPG",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/barca/boats.JPG")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/barca/cityscape.JPG",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/barca/cityscape.JPG")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/barca/stain.JPG",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/barca/stain.JPG")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/lake.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/lake.jpg")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/IMG_5604.jpg",alt:"",id:"box",onClick:this.props.functions.openLightbox.bind(this,"images/IMG_5604.jpg")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/IMG_6211.jpg",alt:"",id:"boxPortrait",onClick:this.props.functions.openLightbox.bind(this,"images/IMG_6211.jpg")})),c.a.createElement("div",{class:"photo"},c.a.createElement("img",{src:"images/street.JPG",alt:"",id:"boxPortrait",onClick:this.props.functions.openLightbox.bind(this,"images/street.JPG")})))),c.a.createElement("div",{id:"lightbox"},c.a.createElement("img",{src:"",id:"enlargedImg"})))}}]),a}(n.Component),y=a(22);function j(e){var t=c.a.useState(!1),a=Object(y.a)(t,2),n=a[0],i=a[1],o=c.a.useRef();return c.a.useEffect((function(){var e=new IntersectionObserver((function(t){t[0].isIntersecting&&(i(!0),e.unobserve(o.current))}));return e.observe(o.current),function(){return e.unobserve(o.current)}}),[]),c.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:o},e.children)}var k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"content"},c.a.createElement("div",{class:"content-body"},c.a.createElement("div",{class:"covers-text content-body-text"},c.a.createElement("div",{class:"content-title",style:{textAlign:"center"}},"Covers"),"Nothing by Bruno Major"),c.a.createElement("div",{class:"covers-video content-body-image"},c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fyyVU6P9A1Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement("div",{class:"covers-text content-body-text"},c.a.createElement("div",{class:"content-title",style:{textAlign:"center"}},"Graphics"),"Photoshop Work",c.a.createElement("br",null),c.a.createElement("br",null))),c.a.createElement("div",{class:"content-body-grid4"},c.a.createElement(j,null,c.a.createElement("div",{class:"content-body-image"},c.a.createElement("img",{src:"images/IMG_4588.jpeg"}))),c.a.createElement(j,null,c.a.createElement("div",{class:"content-body-image"},c.a.createElement("img",{src:"images/photoshopmagic1.png"}))),c.a.createElement(j,null,c.a.createElement("div",{class:"content-body-image"},c.a.createElement("img",{src:"images/IMG_5952.JPG"}))),c.a.createElement(j,null,c.a.createElement("div",{class:"content-body-image"},c.a.createElement("img",{src:"images/photoshopmagic2.jpg"})))))}}]),a}(n.Component),x=(n.Component,function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={activeTab:1},e.changeTab=function(t){e.setState({activeTab:t})},e.handleScroll=function(){document.documentElement.scrollTop/document.documentElement.scrollHeight>.25||document.body.scrollTop/document.body.scrollHeight>.25?document.getElementById("topBtn").style.display="block":document.getElementById("topBtn").style.display="none"},e.toTop=function(){document.documentElement.scrollTop=0,document.body.scrollTop=0},e.openLightbox=function(e){var t=document.getElementById("enlargedImg");t.src=e,t.parentElement.style.display="block",document.getElementById("lightbox").style.display="block",window.addEventListener("click",(function e(t){"IMG"!=t.target.tagName&&(document.getElementById("lightbox").style.display="none",this.removeEventListener("click",e))}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t={openLightbox:this.openLightbox,toTop:this.toTop,handleScroll:this.handleScroll};return c.a.createElement("div",null,c.a.createElement("head",null,c.a.createElement("title",null,"Spencer Zou"),c.a.createElement("link",{rel:"stylesheet",href:"https://use.typekit.net/rlz2ltd.css"})),c.a.createElement("div",{className:"body"},c.a.createElement("div",{class:"header"},c.a.createElement("h1",{class:"site-title left-nav"},c.a.createElement("a",{href:"/home"},"Spencer Zou")),c.a.createElement("div",{class:"right-nav"},c.a.createElement(b,{tabs:[{id:1,title:"home"},{id:2,title:"about"},{id:3,title:"works"},{id:4,title:"photos"},{id:5,title:"fun"}],activeTab:this.state.activeTab,changeTab:this.changeTab}))),c.a.createElement("div",{className:"main-body"},c.a.createElement(d.a,{exact:!0,path:"/",render:function(a){return c.a.createElement(h,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),c.a.createElement(d.a,{path:"/home",render:function(a){return c.a.createElement(h,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),c.a.createElement(d.a,{path:"/about",render:function(a){return c.a.createElement(g,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),c.a.createElement(d.a,{path:"/works",render:function(a){return c.a.createElement(v,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),c.a.createElement(d.a,{path:"/photos",render:function(a){return c.a.createElement(f,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}),c.a.createElement(d.a,{path:"/fun",render:function(a){return c.a.createElement(k,Object.assign({},a,{activeTab:e.state.activeTab,functions:t}))}}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p.a,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.2e888f50.chunk.js.map