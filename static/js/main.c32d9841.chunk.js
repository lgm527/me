(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/artstagram.63d8a1d2.png"},function(e,t,a){e.exports=a.p+"static/media/gitjobs.ee0602f9.png"},function(e,t,a){e.exports=a.p+"static/media/tretre.1f2c836c.png"},function(e,t,a){e.exports=a.p+"static/media/cfs.2d716ad6.png"},function(e,t,a){e.exports=a.p+"static/media/dad.89dbe09a.png"},function(e,t,a){e.exports=a.p+"static/media/calc.19f8df86.png"},function(e,t,a){e.exports=a.p+"static/media/tretremobile.602e51eb.png"},function(e,t,a){e.exports=a.p+"static/media/gwmobileview.d77592d3.png"},function(e,t,a){e.exports=a.p+"static/media/tt2.7af63a8c.png"},function(e,t,a){e.exports=a.p+"static/media/gitstats.a9225339.png"},function(e,t,a){e.exports=a.p+"static/media/headshot_lg.6e993e6d.jpeg"},,,function(e,t,a){e.exports=a.p+"static/media/headshot_m.7dc6e482.jpeg"},,,function(e,t,a){e.exports=a.p+"static/media/Laurell_McCaffrey_Resume.e7dd4f3b.pdf"},function(e,t,a){e.exports=a.p+"static/media/fish.376da881.svg"},function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(29),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=(a(30),a(31),a(6)),h=a.n(d),b=a(7),g=a.n(b),p=a(8),f=a.n(p),E=a(9),w=a.n(E),y=a(10),k=a.n(y),v=a(11),C=a.n(v),S=a(12),N=a.n(S),x=a(13),_=a.n(x),I=a(14),P=a.n(I),A=a(15),M=a.n(A),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).startingState={show:!1,name:"",description:"",demo:"",github:[],img:""},a.state=a.startingState,a.goBack=function(){a.setState(a.startingState)},a.handleClick=function(e){"tree"===e?a.setState({name:"TreeTrends",description:"Users can locate trees on the NYC streets near them for stewardship opportunities as well as browse data from the 2015 NYC Street Tree Census.",demo:"https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be",github:["https://github.com/lgm527/treetrends-client","https://github.com/lgm527/treetrends-API"],img:f.a}):"tt2"===e?a.setState({name:"TreeTrends2.0",description:"Users can locate trees on the NYC streets near them for stewardship opportunities and email the tree's information.",demo:"https://lgm527.github.io/tt2",github:["https://github.com/lgm527/tt2"],img:P.a}):"treemobile"===e?a.setState({name:"TreeTrends Mobile",description:"Users can locate trees on the NYC streets near them for stewardship opportunities on their mobile device and share a tree's information via text, email, or launching the maps application.",demo:"https://expo.io/@lgm527/tree_trends",github:["https://github.com/lgm527/tree_trends_onthego"],img:N.a}):"git"===e?a.setState({name:"GitJobs or Die Pryin",description:"Users can locate jobs postings on Github and save them to their profile with links to apply.",demo:"https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be",github:["https://github.com/lgm527/GitJobs-client","https://github.com/lgm527/GitJobs_API"],img:g.a}):"art"===e?a.setState({name:"Artstagram",description:"User can view artwork by Van Gogh, as well as like, and leave comments.",demo:"https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be",github:["https://github.com/lgm527/artstagram"],img:h.a}):"cfs"===e?a.setState({name:"Connect For Success",description:"Dress For Success solution to bridge the networking gap for women. Connect for Success is a connection tool used to match current DFS clients with volunteers for needs-based skills sharing, and creates a way to match women based on shared background and other parameters. Project for the LYLAS Labs Women@Work Hackathon.",demo:"https://www.youtube.com/watch?v=L2SrzwwOh-I&feature=youtu.be",github:["https://github.com/lgm527/connectforsuccess/tree/laurell"],img:w.a}):"dad"===e?a.setState({name:"Dad Jokes Please",description:"A React Native App that brings Dad Jokes straight to your phone! What more could you ask for?",demo:"https://expo.io/@lgm527/dad-jokes-please",github:["https://github.com/lgm527/dadjokesplease"],img:k.a}):"calc"===e?a.setState({name:"Spooky Calculator",description:"A calculator with a spooky twist for Halloween.",demo:"https://lgm527.github.io/calc/",github:["https://github.com/lgm527/calc"],img:C.a}):"gw"===e?a.setState({name:"George Washington Tour at Fraunces Tavern Museum",description:"Users can browse a tour focusing on George Washington and his relationship with the Nation's first capital, New York City.",demo:"https://lgm527.github.io/gw_ftm_tour/",github:["https://github.com/lgm527/gw_ftm_tour"],img:_.a}):"gitstats"===e&&a.setState({name:"Git Stats",description:"Create a baseball card with GitHub Statistics.",demo:"https://git-stats-and-octocats.netlify.app/",github:["https://github.com/lgm527/git_stats_2"],img:M.a}),a.setState({show:!0})},a.handleKeyPress=function(e,t){"Space"!==e.key&&"Enter"!==e.key||a.handleClick(t)},a.handleKeyPressX=function(e){"Space"!==e.key&&"Enter"!==e.key||a.goBack()},a.showGitHubs=function(){return a.state.github.map((function(e,t){return r.a.createElement("p",{key:t},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",onMouseDown:a.blurMe,onClick:a.blurMe},"Github ",t+1))}))},a.blurMe=function(e){e.stopPropagation(),e.target.blur()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.state.show?r.a.createElement("div",{className:"show"},r.a.createElement("h2",{onClick:this.goBack,onKeyPress:this.handleKeyPressX,tabIndex:0,className:"btn"},r.a.createElement("span",{id:"x",className:"btn_content",tabIndex:-1},"\u2716\ufe0e")),r.a.createElement("div",{id:"showText"},r.a.createElement("h2",null,this.state.name),r.a.createElement("p",{key:"description"},r.a.createElement("i",null,this.state.description)),r.a.createElement("p",{key:"demo"},r.a.createElement("a",{href:this.state.demo,target:"_blank",rel:"noopener noreferrer",onMouseDown:this.blurMe,onClick:this.blurMe},"Demo")),this.showGitHubs())):r.a.createElement("div",{className:"projects"},r.a.createElement("div",{onClick:function(){e.handleClick("tt2")},onKeyPress:function(t){e.handleKeyPress(t,"tt2")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"tre",src:P.a,alt:"tree2"})),r.a.createElement("div",{onClick:function(){e.handleClick("tree")},onKeyPress:function(t){e.handleKeyPress(t,"tree")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"tre",src:f.a,alt:"tree"})),r.a.createElement("div",{onClick:function(){e.handleClick("treemobile")},onKeyPress:function(t){e.handleKeyPress(t,"treemobile")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"treemobile",src:N.a,alt:"treetrendsmobile"})),r.a.createElement("div",{onClick:function(){e.handleClick("gitstats")},onKeyPress:function(t){e.handleKeyPress(t,"gitstats")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"gitstats",src:M.a,alt:"gitstats"})),r.a.createElement("div",{onClick:function(){e.handleClick("dad")},onKeyPress:function(t){e.handleKeyPress(t,"dad")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"dad",src:k.a,alt:"dad jokes"})),r.a.createElement("div",{onClick:function(){e.handleClick("calc")},onKeyPress:function(t){e.handleKeyPress(t,"calc")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"calc",src:C.a,alt:"calculator"})),r.a.createElement("div",{onClick:function(){e.handleClick("git")},onKeyPress:function(t){e.handleKeyPress(t,"git")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"git",src:g.a,alt:"git"})),r.a.createElement("div",{onClick:function(){e.handleClick("art")},onKeyPress:function(t){e.handleKeyPress(t,"art")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"art",src:h.a,alt:"art"})),r.a.createElement("div",{onClick:function(){e.handleClick("cfs")},onKeyPress:function(t){e.handleKeyPress(t,"cfs")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"cfs",src:w.a,alt:"cfs"})),r.a.createElement("div",{onClick:function(){e.handleClick("gw")},onKeyPress:function(t){e.handleKeyPress(t,"gw")},tabIndex:0,className:"btn"},r.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"gw",src:_.a,alt:"gw"}))))}}]),t}(r.a.Component),R=a(16),D=a.n(R),K=a(19),O=a.n(K);a(32);var T=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{id:"bio"},r.a.createElement("p",null,"Full stack software engineer and art nerd. If I\u2019m not in front of a computer or piece of art, you can find me outside hiking, biking, or practicing yoga."),r.a.createElement("h3",null,"Stack"),r.a.createElement("p",null,"JavaScript, TypeScript, React, React Native, Ruby, Ruby on Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS/SASS, Git, SCRUM/Agile Methodology")),r.a.createElement("img",{id:"me",src:D.a,srcSet:"".concat(O.a," 300w, ").concat(D.a," 500w"),sizes:"(max-width: 1024px) 300px, (min-width: 1024px) 500px",alt:"me"}))},G=a(20),L=a(21),J=a.n(L),Y=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={from_name:"",from_email:"",message:"",complete:!1},a.handleChange=function(e){a.setState(Object(G.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.from_email||""===a.state.message)window.alert("* Please complete all required inputs *");else{var t={from_name:a.state.from_name,from_email:a.state.from_email,message:a.state.message};J.a.send("default_service","contact_form",t,"user_930tGXbXZ8DTaedds14NL").then((function(e){console.log("SUCCESS!",e.status,e.text),a.setState({complete:!0})}),(function(e){window.alert("Contact unsuccessful because: ",e)}))}},a.handleClick=function(){a.setState({complete:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact_container"},this.state.complete?r.a.createElement("div",null,r.a.createElement("h1",null,"Thank you for your email!"),r.a.createElement("h2",{id:"anotherOne",onClick:this.handleClick},"Send Another \u21ba")):r.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit,autoComplete:"off"},r.a.createElement("input",{type:"hidden",name:"contact"}),r.a.createElement("label",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Name",name:"from_name",id:"from_name",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Email *"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",placeholder:"Email",name:"from_email",id:"from_email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Message *"),r.a.createElement("br",null),r.a.createElement("textarea",{name:"message",id:"message",placeholder:"Hello!",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Send"})))}}]),t}(r.a.Component)),H=(a(36),a(22)),U=a.n(H),F=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume"},r.a.createElement("h1",null,r.a.createElement("a",{id:"download",href:U.a,download:!0},"Download")),r.a.createElement("br",null),r.a.createElement("h2",null,"TECHNICAL SKILLS"),r.a.createElement("p",null,"React, Redux, React Native, JavaScript, TypeScript, Ruby, Rails, Python, SQL, PostgreSQL, AWS, Docker, HTML, CSS/SASS, SCRUM/Agile Methodology",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h2",null,"EMPLOYMENT HISTORY"),r.a.createElement("p",null,r.a.createElement("b",null,"The Muse"),", New York, New York",r.a.createElement("br",null),"Full Stack Engineer, February 2020 - March 2020 ",r.a.createElement("span",{id:"covid"},"(COVID-19)"),r.a.createElement("br",null),"+ Collaborated with product managers, designers, and engineers to implement website functionality that increased candidate application rate",r.a.createElement("br",null),"+ Coded in React, TypeScript, CSS, HTML, utilized Storybook to implement ADA compliant designs",r.a.createElement("br",null),"+ Participated in SCRUM stand-ups, grooming/planning, demo, and retro meetings",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"My Software Engineer Training Program"),", New York, New York",r.a.createElement("br",null),"Full Stack Engineer, January 2019 - January 2020",r.a.createElement("br",null),"+ Envisioned and executed full time self directed and formal coding education program",r.a.createElement("br",null),"+ January - June: Self taught JavaScript, HTML, CSS, plus 200 hour bootcamp pre-course work",r.a.createElement("br",null),"+ June - October: Full time curriculum in JavaScript, React, Redux, Ruby, Rails",r.a.createElement("br",null),"+ October - January: Projects, networking, volunteering, continuing education and seeking full time employment that resulted in multiple job offers",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"LiveAuctioneers"),", New York, New York",r.a.createElement("br",null),"Category Manager, August 2016 - December 2018",r.a.createElement("br",null),"+ Wrote catalogs with HTML and organized 20+ weekly curated auctions",r.a.createElement("br",null),"+ Managed relationships with over 50 auction houses and art dealers, handled their inventory",r.a.createElement("br",null),"+ Composed SQL queries to match buyers with items",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"No Longer Empty"),", New York, New York",r.a.createElement("br",null),"Curatorial & Engagement Intern, June 2015 - August 2015",r.a.createElement("br",null),"+ Curatorial research on artists, venues, and public programming",r.a.createElement("br",null),"+ Managed social media accounts (Facebook, Twitter)",r.a.createElement("br",null),"+ Engagement with visitors and assisting with public programs at exhibitions",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h2",null,"TECHNICAL PROJECTS"),r.a.createElement("p",null,r.a.createElement("b",null,"TreeTrends")," - ",r.a.createElement("a",{href:"https://github.com/lgm527/treetrends-client",target:"_blank",rel:"noopener noreferrer"},"Github (Client)")," | ",r.a.createElement("a",{href:"https://github.com/lgm527/treetrends-API",target:"_blank",rel:"noopener noreferrer"},"Github (API)")," | ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},"Demo"),r.a.createElement("br",null),"Users can locate trees on the NYC streets near them for stewardship opportunities",r.a.createElement("br",null),"+ Connected with the NYC Open Data API extract data from 2015 Street Tree Census",r.a.createElement("br",null),"+ Implemented a React based front-end and vanilla CSS for styling",r.a.createElement("br",null),"+ Built a Google Maps API to render interactive google-style map",r.a.createElement("br",null),"+ Established a Ruby on Rails API backend with endpoints for users and trees",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"GitJobs")," - ",r.a.createElement("a",{href:"https://github.com/lgm527/GitJobs-client",target:"_blank",rel:"noopener noreferrer"},"Github (Client)")," | ",r.a.createElement("a",{href:"https://github.com/lgm527/GitJobs_API>Github (API)",target:"_blank",rel:"noopener noreferrer"},"Github (API)")," | ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},"Demo"),r.a.createElement("br",null),"Users can locate jobs postings on Github and save them to their profile with links to apply",r.a.createElement("br",null),"+ Coded a user interface with React and Sass for styling",r.a.createElement("br",null),"+ Scraped Github Job API to pull and parse job postings data",r.a.createElement("br",null),"+ Developed a Ruby on Rails API backend for job postings and users",r.a.createElement("br",null),"+ Employed JSON Web Tokens and localStorage to store encrypted user information on client-side",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Artstagram")," - ",r.a.createElement("a",{href:"https://github.com/lgm527/artstagram",target:"_blank",rel:"noopener noreferrer"},"Github")," | ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},"Demo"),r.a.createElement("br",null),"User can view artwork by Van Gogh, as well as like, and leave comments",r.a.createElement("br",null),"+ Constructed a Javascript rendering front-end",r.a.createElement("br",null),"+ Handled the Met Museum API to provide images of artwork by Van Gogh",r.a.createElement("br",null),"+ Operated Ruby on Rails controls the back-end, models and controllers of MVC",r.a.createElement("br",null),"+ Utilized Semantic UI to contribute to the minimalist style",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h2",null,"VOLUNTEER"),r.a.createElement("p",null,r.a.createElement("b",null,"Fraunces Tavern Museum"),", New York, New York",r.a.createElement("br",null),"Docent, 2016 - Present",r.a.createElement("br",null),"+ Bring the rich history of New York City during the Revolutionary War to life leading weekly tours"),r.a.createElement("h2",null,"EDUCATION"),r.a.createElement("p",null,r.a.createElement("b",null,"Flatiron School"),", Brooklyn, New York - 2019",r.a.createElement("br",null),"+ Immersive Full Stack Web Development, Ruby on Rails and JavaScript program",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Rutgers University")," - New Brunswick, New Jersey - 2016",r.a.createElement("br",null),"+ Bachelor of Arts degrees in Art History and Psychology",r.a.createElement("br",null),"+ Art History Graduation Ceremony Speaker, 3.4 GPA"),r.a.createElement("br",null),r.a.createElement("h1",null,r.a.createElement("a",{id:"download",href:"https://github.com/lgm527/resume.json/blob/master/LGMresume.json",target:"_blank",rel:"noopener noreferrer"},"View JSON")))}}]),t}(r.a.Component),W=a(23),z=a.n(W),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={show:"about"},a.handleClick=function(e){a.setState({show:e})},a.handleKeyDown=function(e,t){32!==e.keyCode&&13!==e.keyCode||a.setState({show:t})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=new Date;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"btn",onClick:function(){e.handleClick("about")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"about")}},r.a.createElement("h1",{className:"btn_content",tabIndex:-1},"about"===this.state.show?r.a.createElement("u",null,"About"):"About")),r.a.createElement("div",{className:"btn",onClick:function(){e.handleClick("work")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"work")}},r.a.createElement("h1",{className:"btn_content",tabIndex:-1},"work"===this.state.show?r.a.createElement("u",null,"Work"):"Work")),r.a.createElement("div",{className:"btn",onClick:function(){e.handleClick("contact")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"contact")}},r.a.createElement("h1",{className:"btn_content",tabIndex:-1},"contact"===this.state.show?r.a.createElement("u",null,"Contact"):"Contact")),r.a.createElement("div",{className:"btn",onClick:function(){e.handleClick("resume")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"resume")}},r.a.createElement("h1",{className:"btn_content",tabIndex:-1},"resume"===this.state.show?r.a.createElement("u",null,"Resume"):"Resume"))),r.a.createElement("div",{className:"stuff"},"about"===this.state.show?r.a.createElement(T,null):null,"work"===this.state.show?r.a.createElement(j,null):null,"contact"===this.state.show?r.a.createElement(Y,null):null,"resume"===this.state.show?r.a.createElement(F,null):null),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://github.com/lgm527","aria-label":"github",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{tabIndex:-1,className:"btn_content_reversed",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/lgm527/","aria-label":"linkedin",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{tabIndex:-1,className:"btn_content_reversed",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),r.a.createElement("a",{href:"https://medium.com/@lgm527","aria-label":"medium",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{tabIndex:-1,className:"btn_content_reversed",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"}))),r.a.createElement("a",{href:"https://glitch.com/@lgm527","aria-label":"glitch",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{tabIndex:-1,className:"btn_content_reversed",width:"24",height:"24",src:z.a,alt:"glitch fish"}))),r.a.createElement("div",{id:"allMe"},r.a.createElement("h2",{id:"title"},"Full Stack Engineer"),r.a.createElement("h1",{className:"name"},"Laurell"),r.a.createElement("h1",{className:"name"},"McCaffrey"),r.a.createElement("p",{id:"copy"},"\xa9 Laurell McCaffrey ",t.getFullYear()))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.c32d9841.chunk.js.map