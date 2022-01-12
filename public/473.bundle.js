"use strict";(self.webpackChunkssr_rb_ui=self.webpackChunkssr_rb_ui||[]).push([[473],{6473:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var r=s(7294),l=s(2690),n=s(3454);function t(e){var a=e.className,s=e.children,l=["progress"];return a&&l.push(a),r.createElement("div",{className:l.join(" ")},s)}t.defaultProps={className:""};const m=t;function c(e){var a=e.value,s=e.className,l=e.animate,n=e.striped,t=e.label,m=["progress-bar"];return s&&m.push(s),l&&m.push("progress-bar-animated"),n&&m.push("progress-bar-striped"),r.createElement("div",{className:m.join(" "),role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":t,style:{width:"".concat(a,"%")}})}c.defaultProps={className:"",striped:!1,animate:!1,label:""};const o=c,b=function(){return r.createElement("div",{className:"rb-progresses container-fluid"},r.createElement("section",{className:"rb-progress-basic"},r.createElement("h1",{className:"rb-title"},"Progress"),r.createElement("div",{className:"rb-group"},r.createElement("div",{className:"rb-progress-wrapper"},r.createElement(m,null,r.createElement(o,{value:50,label:"some label"}))),r.createElement("div",{className:"rb-progress-wrapper"},r.createElement(m,null,r.createElement(o,{value:30,className:"bg-success",label:"some label"}))),r.createElement("div",{className:"rb-progress-wrapper"},r.createElement(m,null,r.createElement(o,{value:30,className:"bg-warning",label:"some label"}))),r.createElement("div",{className:"rb-progress-wrapper"},r.createElement(m,null,r.createElement(o,{value:30,className:"bg-danger",label:"some label"}),r.createElement(o,{value:30,className:"bg-warning",label:"some label"}),r.createElement(o,{value:30,className:"bg-success",label:"some label"}))),r.createElement("div",{className:"rb-progress-wrapper"},r.createElement(m,null,r.createElement(o,{value:50,striped:!0,label:"some label"}))),r.createElement("div",{className:"rb-progress-wrapper"},r.createElement(m,null,r.createElement(o,{value:75,striped:!0,animate:!0,label:"some label"})))),r.createElement("div",{className:"rb-code"},r.createElement(l.Z,{language:"javascript",style:n.Z},'\n    import Progress from \'../components/Progress\';\n    import ProgressBar from \'../components/ProgressBar\';\n    \n    <Progress>\n      <ProgressBar value={50} label="some label" />\n    </Progress>\n    \n    <Progress>\n      <ProgressBar value={30} className="bg-success" label="some label" />\n    </Progress>\n    \n    <Progress>\n      <ProgressBar value={30} className="bg-warning" label="some label" />\n    </Progress>\n    \n    <Progress>\n      <ProgressBar value={30} className="bg-danger" label="some label" />\n      <ProgressBar value={30} className="bg-warning" label="some label" />\n      <ProgressBar value={30} className="bg-success" label="some label" />\n    </Progress>\n    \n    <Progress>\n      <ProgressBar value={50} striped label="some label" />\n    </Progress>\n     \n    <Progress>\n      <ProgressBar value={75} striped animate label="some label" />\n    </Progress>\n  '))))}}}]);