"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={description:"Everything you need to know to contribute to Bunkr.",tags:["dev"]},a="Contributing to Bunkr",u={unversionedId:"contributing/index",id:"contributing/index",title:"Contributing to Bunkr",description:"Everything you need to know to contribute to Bunkr.",source:"@site/docs/contributing/index.md",sourceDirName:"contributing",slug:"/contributing/",permalink:"/docs/contributing/",draft:!1,tags:[{label:"dev",permalink:"/docs/tags/dev"}],version:"current",frontMatter:{description:"Everything you need to know to contribute to Bunkr.",tags:["dev"]},sidebar:"docSidebar",previous:{title:"Getting Started",permalink:"/docs/getting_started/"},next:{title:"Setup",permalink:"/docs/contributing/setup"}},s={},l=[{value:"Types of contributions we&#39;re looking for",id:"types-of-contributions-were-looking-for",level:2},{value:"Ground rules &amp; expectations",id:"ground-rules--expectations",level:2},{value:"How to contribute",id:"how-to-contribute",level:2},{value:"Style guide",id:"style-guide",level:2},{value:"Setting up your environment",id:"setting-up-your-environment",level:2},{value:"Community",id:"community",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-bunkr"},"Contributing to Bunkr"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This documentation is a work in progress.")),(0,o.kt)("p",null,"Thanks for checking out the Bunkr App! We're excited to hear and learn from you.",(0,o.kt)("br",null),"\nWe've put together the following guidelines to help you figure out where you can best be helpful."),(0,o.kt)("h2",{id:"types-of-contributions-were-looking-for"},"Types of contributions we're looking for"),(0,o.kt)("p",null,"There are many ways you can directly contribute to Bunkr (in descending order of need):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bunkr-dev/app/issues"},"Report bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"development#fix-a-bug"},"Fix bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"development#add-an-integration"},"Add Integrations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"development#add-a-feature"},"Add a feature")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"development#improve-the-documentation"},"Improve the documentation"))),(0,o.kt)("p",null,"Interested in contributing to Bunkr? Read on!"),(0,o.kt)("h2",{id:"ground-rules--expectations"},"Ground rules & expectations"),(0,o.kt)("p",null,"Before we get started, here are a few things we expect from you (and that you should expect from others):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.'),(0,o.kt)("li",{parentName:"ul"},"Open Source Guides are released with a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bunkr-dev/app/blob/main/CODE_OF_CONDUCT.md"},"Contributor Code of Conduct"),". By participating in this project, you agree to abide by its terms."),(0,o.kt)("li",{parentName:"ul"},"Please ensure that your contribution passes all tests if you open a pull request. If there are test failures, you will need to address them before we can merge your contribution.")),(0,o.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,o.kt)("p",null,"Start by searching through the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bunkr-dev/app/pulls"},"pull requests")," to see whether someone else has raised a similar idea or question."),(0,o.kt)("p",null,"If you don't see your idea listed, and you think it fits into the goals of this project, open a pull request."),(0,o.kt)("p",null,"If you're not sure whether your idea fits into the goals of this project, you can open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bunkr-dev/app/discussions"},"discussion"),"."),(0,o.kt)("h2",{id:"style-guide"},"Style guide"),(0,o.kt)("p",null,"If you're contributing code please make sure it conforms to the ",(0,o.kt)("a",{parentName:"p",href:"/"},"style guide"),".",(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"setting-up-your-environment"},"Setting up your environment"),(0,o.kt)("p",null,"To get started, fork the Bunkr repository and clone it locally.",(0,o.kt)("br",null),"\nFor information on how to setup your environment, see the ",(0,o.kt)("a",{parentName:"p",href:"setup"},"setup guide"),"."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"Discussions about Bunkr take place in its GitHub repository's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bunkr-dev/app/issues"},"Issues"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bunkr-dev/app/pulls"},"Pull Requests")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bunkr-dev/app/discussions"},"Discussions"),".",(0,o.kt)("br",null),"\nAnybody is welcome to join these conversations."),(0,o.kt)("p",null,"Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation."))}d.isMDXComponent=!0}}]);