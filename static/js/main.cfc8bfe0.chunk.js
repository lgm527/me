(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/tt2.7af63a8c.png"},function(e,t,a){e.exports=a.p+"static/media/gitstats.a9225339.png"},function(e,t,a){e.exports=a.p+"static/media/dad.3969f69f.png"},function(e,t,a){e.exports=a.p+"static/media/headshot_lg.6e993e6d.jpeg"},,,function(e,t,a){e.exports=a.p+"static/media/headshot_m.7dc6e482.jpeg"},,,function(e,t,a){e.exports=a.p+"static/media/Laurell_McCaffrey_Resume.1960dc66.pdf"},function(e,t,a){e.exports=a.p+"static/media/fish.156d9d10.svg"},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=(a(22),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=(a(23),a(24),a(6)),h=a.n(d),b=a(7),p=a.n(b),E=a(8),g=a.n(E),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).startingState={show:!1,name:"",description:"",demo:"",github:"",img:""},a.state=a.startingState,a.goBack=function(){a.setState(a.startingState)},a.handleClick=function(e){"tt2"===e?a.setState({name:"TreeTrends2.0",description:"Users can locate trees on the NYC streets near them for stewardship opportunities and email the tree's information. Inspired by my lack of interaction with trees once moving to NYC, reconnect with nature by utilizing the NYC Open Data API 2015 Street Tree Census.",demo:"https://lgm527.github.io/tt2",github:"https://github.com/lgm527/tt2",img:h.a}):"dad"===e?a.setState({name:"Dad Jokes Please",description:"Infinite dad jokes on the ready.",demo:"https://dad-jokes-please.netlify.app/",github:"https://github.com/lgm527/dadjokespls",img:g.a}):"gitstats"===e&&a.setState({name:"Git Stats",description:"Create a baseball card with a user's GitHub Statistics.",demo:"https://git-stats-and-octocats.netlify.app/",github:"https://github.com/lgm527/git_stats_2",img:p.a}),a.setState({show:!0})},a.handleKeyPress=function(e,t){"Space"!==e.key&&"Enter"!==e.key||a.handleClick(t)},a.handleKeyPressX=function(e){"Space"!==e.key&&"Enter"!==e.key||a.goBack()},a.blurMe=function(e){e.stopPropagation(),e.target.blur()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},this.state.show?l.a.createElement("div",{className:"show"},l.a.createElement("h2",{onClick:this.goBack,onKeyPress:this.handleKeyPressX,tabIndex:0,className:"btn"},l.a.createElement("span",{id:"x",className:"btn_content",tabIndex:-1},"\u2716\ufe0e")),l.a.createElement("div",{id:"showText"},l.a.createElement("h2",null,this.state.name),l.a.createElement("p",{key:"links"},l.a.createElement("a",{href:this.state.demo,target:"_blank",rel:"noopener noreferrer",onMouseDown:this.blurMe,onClick:this.blurMe},"Demo"),l.a.createElement("span",null," "),l.a.createElement("a",{href:this.state.github,target:"_blank",rel:"noopener noreferrer",onMouseDown:this.blurMe,onClick:this.blurMe},"Code")),l.a.createElement("p",{key:"description"},l.a.createElement("i",null,this.state.description)))):l.a.createElement("div",{className:"projects"},l.a.createElement("div",{onClick:function(){e.handleClick("tt2")},onKeyPress:function(t){e.handleKeyPress(t,"tt2")},tabIndex:0,className:"btn"},l.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"tre",src:h.a,alt:"tree2"}),l.a.createElement("h3",null,"TreeTrends2.0")),l.a.createElement("div",{onClick:function(){e.handleClick("dad")},onKeyPress:function(t){e.handleKeyPress(t,"dad")},tabIndex:0,className:"btn"},l.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"dad",src:g.a,alt:"dad jokes"}),l.a.createElement("h3",null,"Dad Jokes")),l.a.createElement("div",{onClick:function(){e.handleClick("gitstats")},onKeyPress:function(t){e.handleKeyPress(t,"gitstats")},tabIndex:0,className:"btn"},l.a.createElement("img",{tabIndex:-1,className:"btn_content",id:"gitstats",src:p.a,alt:"gitstats"}),l.a.createElement("h3",null,"Git Stats"))))}}]),t}(l.a.Component),w=a(9),y=a.n(w),k=a(12),v=a.n(k);a(25);var C=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{id:"bio"},l.a.createElement("p",null,"Cloud engineer and art nerd. If I\u2019m not in front of a computer or piece of art, you can find me hiking, biking, or practicing yoga."),l.a.createElement("h3",null,"Stack"),l.a.createElement("p",null,"AWS, Terraform, Python, Docker, JavaScript, TypeScript, React, React Native, Ruby, Ruby on Rails, SQL, PostgreSQL, HTML, CSS/SASS, Git, SCRUM/Agile Methodology")),l.a.createElement("img",{id:"me",src:y.a,srcSet:"".concat(v.a," 300w, ").concat(y.a," 500w"),sizes:"(max-width: 1024px) 300px, (min-width: 1024px) 500px",alt:"me"}))},S=a(13),N=a(14),I=a.n(N),x=(a(28),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={from_name:"",from_email:"",message:"",complete:!1},a.handleChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.from_email||""===a.state.message)window.alert("* Please complete all required inputs *");else{var t={from_name:a.state.from_name,from_email:a.state.from_email,message:a.state.message};I.a.send("default_service","contact_form",t,"user_930tGXbXZ8DTaedds14NL").then((function(e){console.log("SUCCESS!",e.status,e.text),a.setState({complete:!0})}),(function(e){window.alert("Contact unsuccessful because: ",e)}))}},a.handleClick=function(){a.setState({complete:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact_container"},this.state.complete?l.a.createElement("div",null,l.a.createElement("h1",null,"Thank you for your email!"),l.a.createElement("h2",{id:"anotherOne",onClick:this.handleClick},"Send Another \u21ba")):l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit,autoComplete:"off"},l.a.createElement("input",{type:"hidden",name:"contact"}),l.a.createElement("label",null,"Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Name",name:"from_name",id:"from_name",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Email *"),l.a.createElement("br",null),l.a.createElement("input",{type:"email",placeholder:"Email",name:"from_email",id:"from_email",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Message *"),l.a.createElement("br",null),l.a.createElement("textarea",{name:"message",id:"message",placeholder:"Hello!",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Send"})))}}]),t}(l.a.Component)),_=(a(29),a(15)),A=a.n(_),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"resume"},l.a.createElement("h1",null,l.a.createElement("a",{id:"download",href:A.a,download:!0},"Download")),l.a.createElement("br",null),l.a.createElement("p",null,"Cloud engineer with experience in AWS, TypeScript, Terraform, Python, and Docker.",l.a.createElement("br",null),"Strong research, communication, and writing skills that support a high level of productivity and collaboration."),l.a.createElement("h2",null,"TECHNICAL SKILLS"),l.a.createElement("p",null,"AWS, Terraform, Python, Docker, TypeScript, React, Redux, React Native, JavaScript, Ruby, Rails, SQL, PostgreSQL, HTML, CSS/SASS, SCRUM/Agile Methodology",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"EMPLOYMENT HISTORY"),l.a.createElement("p",null,l.a.createElement("b",null,"Foresight Technologies"),", Philadelphia, Pennsylvania",l.a.createElement("br",null),"Cloud Engineer II, July 2021 - Present",l.a.createElement("br",null),"Cloud Engineer, January 2021 - July 2021",l.a.createElement("br",null),"+ Design and Implement world-class solutions while providing a great client experience utilizing tools like AWS and Docker",l.a.createElement("br",null),"+ Provide support through facilitating meetings, providing mentorship, and onboarding new engineers",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"The Muse"),", New York, New York",l.a.createElement("br",null),"Full Stack Engineer, February 2020 - March 2020 ",l.a.createElement("span",{id:"covid"},"(COVID-19)"),l.a.createElement("br",null),"+ Collaborated with product managers, designers, and engineers to implement website functionality that increased candidate application rate",l.a.createElement("br",null),"+ Coded in React, TypeScript, CSS, HTML, utilized Storybook to implement ADA compliant designs",l.a.createElement("br",null),"+ Participated in SCRUM stand-ups, grooming/planning, demo, and retro meetings",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"My Software Engineer Training Program"),", New York, New York",l.a.createElement("br",null),"Full Stack Engineer, January 2019 - January 2020",l.a.createElement("br",null),"+ Envisioned and executed full time self directed and formal coding education program",l.a.createElement("br",null),"+ January - June: Self taught JavaScript, HTML, CSS, plus 200 hour bootcamp pre-course work",l.a.createElement("br",null),"+ June - October: Full time curriculum in JavaScript, React, Redux, Ruby, Rails",l.a.createElement("br",null),"+ October - January: Projects, networking, volunteering, continuing education and seeking full time employment that resulted in multiple job offers",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"LiveAuctioneers"),", New York, New York",l.a.createElement("br",null),"Category Manager, August 2016 - December 2018",l.a.createElement("br",null),"+ Wrote catalogs with HTML and organized 20+ weekly curated auctions",l.a.createElement("br",null),"+ Managed relationships with over 50 auction houses and art dealers, handled their inventory",l.a.createElement("br",null),"+ Composed SQL queries to match buyers with items",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"No Longer Empty"),", New York, New York",l.a.createElement("br",null),"Curatorial & Engagement Intern, June 2015 - August 2015",l.a.createElement("br",null),"+ Curatorial research on artists, venues, and public programming",l.a.createElement("br",null),"+ Managed social media accounts (Facebook, Twitter)",l.a.createElement("br",null),"+ Engagement with visitors and assisting with public programs at exhibitions",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"TECHNICAL PROJECTS"),l.a.createElement("p",null,l.a.createElement("b",null,"TreeTrends")," - ",l.a.createElement("a",{href:"https://github.com/lgm527/treetrends-client",target:"_blank",rel:"noopener noreferrer"},"Github (Client)")," | ",l.a.createElement("a",{href:"https://github.com/lgm527/treetrends-API",target:"_blank",rel:"noopener noreferrer"},"Github (API)")," | ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=rEuIcwjCHzc&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},"Demo"),l.a.createElement("br",null),"Users can locate trees on the NYC streets near them for stewardship opportunities",l.a.createElement("br",null),"+ Connected with the NYC Open Data API extract data from 2015 Street Tree Census",l.a.createElement("br",null),"+ Implemented a React based front-end and vanilla CSS for styling",l.a.createElement("br",null),"+ Built a Google Maps API to render interactive google-style map",l.a.createElement("br",null),"+ Established a Ruby on Rails API backend with endpoints for users and trees",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"GitJobs")," - ",l.a.createElement("a",{href:"https://github.com/lgm527/GitJobs-client",target:"_blank",rel:"noopener noreferrer"},"Github (Client)")," | ",l.a.createElement("a",{href:"https://github.com/lgm527/GitJobs_API>Github (API)",target:"_blank",rel:"noopener noreferrer"},"Github (API)")," | ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=9lX1S3DQ_bc&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},"Demo"),l.a.createElement("br",null),"Users can locate jobs postings on Github and save them to their profile with links to apply",l.a.createElement("br",null),"+ Coded a user interface with React and Sass for styling",l.a.createElement("br",null),"+ Scraped Github Job API to pull and parse job postings data",l.a.createElement("br",null),"+ Developed a Ruby on Rails API backend for job postings and users",l.a.createElement("br",null),"+ Employed JSON Web Tokens and localStorage to store encrypted user information on client-side",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Artstagram")," - ",l.a.createElement("a",{href:"https://github.com/lgm527/artstagram",target:"_blank",rel:"noopener noreferrer"},"Github")," | ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=d22s48KLxHo&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"},"Demo"),l.a.createElement("br",null),"User can view artwork by Van Gogh, as well as like, and leave comments",l.a.createElement("br",null),"+ Constructed a Javascript rendering front-end",l.a.createElement("br",null),"+ Handled the Met Museum API to provide images of artwork by Van Gogh",l.a.createElement("br",null),"+ Operated Ruby on Rails controls the back-end, models and controllers of MVC",l.a.createElement("br",null),"+ Utilized Semantic UI to contribute to the minimalist style",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("h2",null,"CERTIFICATIONS"),l.a.createElement("p",null,l.a.createElement("b",null,"Amazon Web Services (AWS)")," 2021 - 2024",l.a.createElement("br",null),"+ Developer Associate",l.a.createElement("br",null),"+ ID: KL1HBKDBNE111CSL"),l.a.createElement("h2",null,"EDUCATION"),l.a.createElement("p",null,l.a.createElement("b",null,"Flatiron School"),", Brooklyn, New York - 2019",l.a.createElement("br",null),"+ Immersive Full Stack Web Development, Ruby on Rails and JavaScript program",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Rutgers University")," - New Brunswick, New Jersey - 2016",l.a.createElement("br",null),"+ Bachelor of Arts degrees in Art History and Psychology",l.a.createElement("br",null),"+ Art History Graduation Ceremony Speaker"),l.a.createElement("h2",null,"VOLUNTEER"),l.a.createElement("p",null,l.a.createElement("b",null,"Pods.nyc"),", New York, New York",l.a.createElement("br",null),"Full Stack Engineer, August 2020 - September 2020",l.a.createElement("br",null),"+ Created the pods profile by utilizing React and Material-UI to replicate Figma designs"),l.a.createElement("p",null,l.a.createElement("b",null,"Fraunces Tavern Museum"),", New York, New York",l.a.createElement("br",null),"Docent, December 2016 - March 2020",l.a.createElement("br",null),"+ Bring the rich history of New York City during the Revolutionary War to life leading weekly tours"),l.a.createElement("br",null),l.a.createElement("h1",null,l.a.createElement("a",{id:"download",href:"https://github.com/lgm527/resume.json/blob/master/LGMresume.json",target:"_blank",rel:"noopener noreferrer"},"View JSON")))}}]),t}(l.a.Component),P=a(16),D=a.n(P),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={show:"about"},a.handleClick=function(e){a.setState({show:e})},a.handleKeyDown=function(e,t){32!==e.keyCode&&13!==e.keyCode||a.setState({show:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=new Date;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"btn","aria-label":"about",role:"button",onClick:function(){e.handleClick("about")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"about")}},l.a.createElement("h1",{className:"btn_content",tabIndex:-1},"about"===this.state.show?l.a.createElement("u",null,"About"):"About")),l.a.createElement("div",{className:"btn","aria-label":"work",role:"button",onClick:function(){e.handleClick("work")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"work")}},l.a.createElement("h1",{className:"btn_content",tabIndex:-1},"work"===this.state.show?l.a.createElement("u",null,"Work"):"Work")),l.a.createElement("div",{className:"btn","aria-label":"contact",role:"button",onClick:function(){e.handleClick("contact")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"contact")}},l.a.createElement("h1",{className:"btn_content",tabIndex:-1},"contact"===this.state.show?l.a.createElement("u",null,"Contact"):"Contact")),l.a.createElement("div",{className:"btn","aria-label":"resume",role:"button",onClick:function(){e.handleClick("resume")},tabIndex:0,onKeyDown:function(t){e.handleKeyDown(t,"resume")}},l.a.createElement("h1",{className:"btn_content",tabIndex:-1},"resume"===this.state.show?l.a.createElement("u",null,"Resume"):"Resume"))),l.a.createElement("div",{className:"stuff"},"about"===this.state.show?l.a.createElement(C,null):null,"work"===this.state.show?l.a.createElement(f,null):null,"contact"===this.state.show?l.a.createElement(x,null):null,"resume"===this.state.show?l.a.createElement(M,null):null),l.a.createElement("footer",{className:"contact"===this.state.show?"App-footer hide":"App-footer"},l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://github.com/lgm527","aria-label":"github",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{tabIndex:-1,className:"btn_content_reversed",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),l.a.createElement("a",{href:"https://www.linkedin.com/in/lgm527/","aria-label":"linkedin",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{tabIndex:-1,className:"btn_content_reversed",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),l.a.createElement("a",{href:"https://medium.com/@lgm527","aria-label":"medium",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("svg",{tabIndex:-1,className:"btn_content_reversed",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},l.a.createElement("path",{d:"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"}))),l.a.createElement("a",{href:"https://glitch.com/@lgm527","aria-label":"glitch",tabIndex:0,className:"btn",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{tabIndex:-1,className:"btn_content_reversed",width:"24",height:"24",src:D.a,alt:"glitch fish"}))),l.a.createElement("div",{id:"allMe"},l.a.createElement("h2",{id:"title"},"Cloud Engineer"),l.a.createElement("h1",{className:"name"},"Laurell"),l.a.createElement("h1",{className:"name"},"McCaffrey"),l.a.createElement("p",{id:"copy"},"\xa9 Laurell McCaffrey ",t.getFullYear()))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.cfc8bfe0.chunk.js.map