(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/artstagram.63d8a1d2.png"},function(e,t,a){e.exports=a.p+"static/media/gitjobs.ee0602f9.png"},function(e,t,a){e.exports=a.p+"static/media/tretre.1f2c836c.png"},function(e,t,a){e.exports=a.p+"static/media/cfs.2d716ad6.png"},,,function(e,t,a){e.exports=a.p+"static/media/me.1d3a898a.jpeg"},,,function(e,t,a){e.exports=a.p+"static/media/McCaffrey_Resume.36b87580.pdf"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),o=(a(21),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),h=(a(22),a(23),a(6)),d=a.n(h),b=a(7),E=a.n(b),p=a(8),g=a.n(p),f=a(9),w=a.n(f),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).startingState={show:!1,name:"",description:"",demo:"",github:[],img:""},a.state=a.startingState,a.goBack=function(){a.setState(a.startingState)},a.handleClick=function(e){"tree"===e?a.setState({name:"TreeTrends",description:"Users can locate trees on the NYC streets near them for stewardship opportunities as well as browse data from the 2015 NYC Street Tree Census.",demo:"https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be",github:["https://github.com/lgm527/treetrends-client","https://github.com/lgm527/treetrends-API"],img:g.a}):"git"===e?a.setState({name:"GitJobs or Die Pryin",description:"Users can locate jobs postings on Github and save them to their profile with links to apply.",demo:"https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be",github:["https://github.com/lgm527/GitJobs-client","https://github.com/lgm527/GitJobs_API"],img:E.a}):"art"===e?a.setState({name:"Artstagram",description:"User can view artwork by Van Gogh, as well as like, and leave comments.",demo:"https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be",github:["https://github.com/lgm527/artstagram"],img:d.a}):"cfs"===e&&a.setState({name:"Connect For Success",description:"Dress For Success solution to bridge the networking gap for women. Connect for Success is a connection tool used to match current DFS clients with volunteers for needs-based skills sharing, and creates a way to match women based on shared background and other parameters. Project for the LYLAS Labs Women@Work Hackathon.",demo:"https://www.youtube.com/watch?v=L2SrzwwOh-I&feature=youtu.be",github:["https://github.com/lgm527/connectforsuccess/tree/laurell"],img:w.a}),a.setState({show:!0})},a.showGitHubs=function(){return a.state.github.map((function(e,t){return l.a.createElement("p",{key:t},l.a.createElement("a",{href:e},"Github ",t+1))}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},this.state.show?l.a.createElement("div",{className:"show"},l.a.createElement("h2",null,l.a.createElement("span",{id:"x",onClick:this.goBack},"\u2716\ufe0e")),l.a.createElement("div",{id:"showText"},l.a.createElement("h2",null,this.state.name),l.a.createElement("p",{key:"description"},l.a.createElement("i",null,this.state.description)),l.a.createElement("p",{key:"demo"},l.a.createElement("a",{href:this.state.demo},"Demo")),this.showGitHubs())):l.a.createElement("div",{className:"projects"},l.a.createElement("div",null,l.a.createElement("img",{id:"tre",src:g.a,alt:"tree",onClick:function(){e.handleClick("tree")}})),l.a.createElement("div",null,l.a.createElement("img",{src:E.a,alt:"git",onClick:function(){e.handleClick("git")}})),l.a.createElement("div",null,l.a.createElement("img",{src:d.a,alt:"art",onClick:function(){e.handleClick("art")}})),l.a.createElement("div",null,l.a.createElement("img",{src:w.a,alt:"cfs",onClick:function(){e.handleClick("cfs")}}))))}}]),t}(l.a.Component),y=a(12),k=a.n(y);a(24);var C=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{id:"bio"},l.a.createElement("p",null,"Full stack software developer with a strong enthusiasm for art and connectivity. I discovered web development through working at an auction software company. I bring strong skills in research and writing that help foster team productivity and collaboration. If I\u2019m not in front of a computer or piece of art, you can find me hiking or biking somewhere with more trees than people."),l.a.createElement("h3",null,"Tech Stack"),"JavaScript, Ruby, Ruby on Rails, React, CSS3, HTML5, Git, SQL, PostgreSQL"),l.a.createElement("img",{id:"me",src:k.a,alt:"me"}))},S=a(13),A=a(14),I=a.n(A),N=(a(27),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={from_name:"",from_email:"",message:"",complete:!1},a.handleChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={from_name:a.state.from_name,from_email:a.state.from_email,message:a.state.message};I.a.send("default_service","contact_form",t,"user_930tGXbXZ8DTaedds14NL").then((function(e){console.log("SUCCESS!",e.status,e.text),a.setState({complete:!0})}),(function(e){window.alert("Contact unsuccessful because: ",e)}))},a.handleClick=function(){a.setState({complete:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact_container"},this.state.complete?l.a.createElement("div",null,l.a.createElement("h1",null,"Thank you for your email!"),l.a.createElement("h2",{id:"anotherOne",onClick:this.handleClick},"Send Another \u21ba")):l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit,autoComplete:"off"},l.a.createElement("input",{type:"hidden",name:"contact"}),l.a.createElement("label",null,"Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Name",name:"from_name",id:"from_name",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{type:"email",placeholder:"Email",name:"from_email",id:"from_email",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Message"),l.a.createElement("br",null),l.a.createElement("textarea",{name:"message",id:"message",placeholder:"Hello, I'd like to contact you about...",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Send"})))}}]),t}(l.a.Component)),O=(a(28),a(15)),j=a.n(O),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"resume"},l.a.createElement("h1",null,l.a.createElement("a",{id:"download",href:j.a,download:!0},"Download")),l.a.createElement("h2",null,"TECHNICAL PROJECTS"),l.a.createElement("p",null,l.a.createElement("b",null,"TreeTrends")," - ",l.a.createElement("a",{href:"https://github.com/lgm527/treetrends-client"},"Github (Client)")," | ",l.a.createElement("a",{href:"https://github.com/lgm527/treetrends-API"},"Github (API)")," | ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be"},"Demo"),l.a.createElement("br",null),"Users can locate trees on the NYC streets near them for stewardship opportunities",l.a.createElement("br",null),"+ Connected with the NYC Open Data API extract data from 2015 Street Tree Census",l.a.createElement("br",null),"+ Implemented a React based front-end and vanilla CSS for styling",l.a.createElement("br",null),"+ Built a Google Maps API to render interactive google-style map",l.a.createElement("br",null),"+ Established a Ruby on Rails API backend with endpoints for users and trees",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"GitJobs")," - ",l.a.createElement("a",{href:"https://github.com/lgm527/GitJobs-client"},"Github (Client)")," | ",l.a.createElement("a",{href:"https://github.com/lgm527/GitJobs_API>Github (API)"},"Github (API)")," | ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be"},"Demo"),l.a.createElement("br",null),"Users can locate jobs postings on Github and save them to their profile with links to apply",l.a.createElement("br",null),"+ Coded a user interface with React and Sass for styling",l.a.createElement("br",null),"+ Scraped Github Job API to pull and parse job postings data",l.a.createElement("br",null),"+ Developed a Ruby on Rails API backend for job postings and users",l.a.createElement("br",null),"+ Employed JSON Web Tokens and localStorage to store encrypted user information on client-side",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Artstagram")," - ",l.a.createElement("a",{href:"https://github.com/lgm527/artstagram"},"Github")," | ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be"},"Demo"),l.a.createElement("br",null),"User can view artwork by Van Gogh, as well as like, and leave comments",l.a.createElement("br",null),"+ Constructed a Javascript rendering front-end",l.a.createElement("br",null),"+ Handled the Met Museum API to provide images of artwork by Van Gogh",l.a.createElement("br",null),"+ Operated Ruby on Rails controls the back-end, models and controllers of MVC",l.a.createElement("br",null),"+ Utilized Semantic UI to contribute to the minimalist style",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"TECHNICAL SKILLS"),l.a.createElement("p",null,"JavaScript, React, Redux, Ruby, Rails, SQL, PostgreSQL, HTML, CSS, SASS,",l.a.createElement("br",null),"Flatiron School Immersive Software Engineering Program",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"EMPLOYMENT HISTORY"),l.a.createElement("p",null,l.a.createElement("b",null,"LiveAuctioneers"),", New York, New York",l.a.createElement("br",null),"Category Manager, 2016 - 2018",l.a.createElement("br",null),"+ Organized 12-20 weekly curated auctions, wrote catalogs for each",l.a.createElement("br",null),"+ Managed relationships with over 50 auction houses and art dealers, handled their inventory",l.a.createElement("br",null),"+ Operated bidder concierge service by matching buyers to items they seek",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"No Longer Empty"),", New York, New York",l.a.createElement("br",null),"Curatorial & Engagement Intern, 2015 - 2015",l.a.createElement("br",null),"+ Curatorial research on artists, venues, and public programming",l.a.createElement("br",null),"+ Managed social media accounts (Facebook, Twitter)",l.a.createElement("br",null),"+ Engagement with visitors and assisting with public programs at exhibitions",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"The Center for Contemporary Art"),", Bedminster, New Jersey",l.a.createElement("br",null),"Curatorial Intern, 2014 - 2015",l.a.createElement("br",null),"+ Curated contemporary realist exhibition with artist Mel Leipzig",l.a.createElement("br",null),"+ Facilitated silent auction",l.a.createElement("br",null),"+ Art handling, exhibition Installation and deinstallation",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"EDUCATION"),l.a.createElement("p",null,l.a.createElement("b",null,"Flatiron School")," - 2019",l.a.createElement("br",null),"+ Immersive Full Stack Web Development, Ruby on Rails and JavaScript program",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Rutgers University")," - New Brunswick, New Jersey - 2016",l.a.createElement("br",null),"+ Bachelor of Arts degree in Art History, Bachelor of Arts degree in Psychology",l.a.createElement("br",null),"+ Art History Graduation Ceremony Speaker, 3.4 GPA"))}}]),t}(l.a.Component),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={show:"about",underline:"about"},a.handleClick=function(e){a.setState({show:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{onClick:function(){e.handleClick("about")}},l.a.createElement("h1",null,"about"===this.state.show?l.a.createElement("u",null,"About"):"About")),l.a.createElement("div",{onClick:function(){e.handleClick("work")}},l.a.createElement("h1",null,"work"===this.state.show?l.a.createElement("u",null,"Work"):"Work")),l.a.createElement("div",{onClick:function(){e.handleClick("contact")}},l.a.createElement("h1",null,"contact"===this.state.show?l.a.createElement("u",null,"Contact"):"Contact")),l.a.createElement("div",{onClick:function(){e.handleClick("resume")}},l.a.createElement("h1",null,"resume"===this.state.show?l.a.createElement("u",null,"Resume"):"Resume"))),l.a.createElement("div",{className:"stuff"},"about"===this.state.show?l.a.createElement(C,null):null,"work"===this.state.show?l.a.createElement(v,null):null,"contact"===this.state.show?l.a.createElement(N,null):null,"resume"===this.state.show?l.a.createElement(G,null):null),l.a.createElement("footer",{className:"App-footer"},l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://github.com/lgm527"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/lgm527/"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),l.a.createElement("a",{href:"https://medium.com/@lgm527"},l.a.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},l.a.createElement("path",{d:"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"})))),l.a.createElement("div",{id:"allMe"},l.a.createElement("h2",{id:"title"},"Full Stack Developer"),l.a.createElement("h1",{className:"name"},"Laurell"),l.a.createElement("h1",{className:"name"},"McCaffrey"),l.a.createElement("p",{id:"copy"},"\xa9 Laurell McCaffrey 2019"))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.629c257b.chunk.js.map