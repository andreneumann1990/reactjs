(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{1120:function(e,s,r){Promise.resolve().then(r.bind(r,8247))},8247:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return j}});var t=r(7437),l=r(9381),n=r(2265),a=r(4245),i=r(3909),d=r(8244),c=r(1326),o=r(5033),x=r(2944),p=r(9597);function m(e){let{setFieldValue:s}=e,[r,l]=(0,n.useState)(null);return(0,t.jsx)("div",{...(0,p.s)(o.Qf),onKeyDown:function(e){if("Enter"===e.key){e.preventDefault(),e.stopPropagation(),(0,x.qD)(r,"input");return}if("Escape"===e.key){e.preventDefault(),e.stopPropagation(),null==r||r.focus();return}},ref:l,children:(0,t.jsx)(d.Z,{...(0,p.$c)("main-country1"),autoHighlight:!0,className:"m-1 px-2 py-1 rounded-md",id:"country1",onChange:(e,r)=>s(null!=r?r:""),options:["England","France","Germany","Musterland"].map(e=>e),renderInput:e=>(0,t.jsx)(i.Z,{...e,label:"Country",InputProps:{...e.InputProps}}),sx:{maxWidth:300}})})}function u(e){let{setFieldValue:s}=e,[r,l]=(0,n.useState)(null);return(0,t.jsx)("div",{...(0,p.s)(o.Qf),onKeyDown:function(e){if("Enter"===e.key){e.preventDefault(),e.stopPropagation(),(0,x.qD)(r,"input");return}if("Escape"===e.key){e.preventDefault(),e.stopPropagation(),null==r||r.focus();return}},ref:l,children:(0,t.jsx)(d.Z,{...(0,p.$c)("main-country2"),autoHighlight:!0,className:"m-1 px-2 py-1 rounded-md",getOptionLabel:e=>e.label,id:"country2",onChange:(e,r)=>{var t;return s(null!==(t=null==r?void 0:r.label)&&void 0!==t?t:"")},options:o.hW,renderInput:e=>(0,t.jsx)(i.Z,{...e,label:"Choose a country",inputProps:{...e.inputProps,autoComplete:"new-password"}}),renderOption:(e,s,r)=>(0,n.createElement)(c.Z,{component:"li",sx:{"& > img":{mr:2,flexShrink:0}},...e,key:"".concat(r.index,"a"),children:[(0,t.jsx)("img",{loading:"lazy",width:"20",srcSet:"https://flagcdn.com/w40/".concat(s.code.toLowerCase(),".png 2x"),src:"https://flagcdn.com/w20/".concat(s.code.toLowerCase(),".png"),alt:""},"".concat(r.index,"b")),s.label," (",s.code,") +",s.phone]}),sx:{maxWidth:300}})})}var h=r(7138),b=r(6548),j=function(){let e=(0,n.useRef)(null),[s,r]=(0,n.useState)(null),i=(0,l.TA)({initialValues:{button:"",checkbox:"false",color:"#000000",date:"",datetimeLocal:"",email:"",file:"",hidden:"super secret hidden field",image:"",month:"",number:"",password:"",radio:"a",range:"50",reset:"",search:"",submit:"",tel:"",text:"",time:"",url:"",week:""},validationSchema:a.Ry({text:a.Z_().matches(/^\D*$/g,"No numbers!"),password:a.Z_().min(6,"Too short.").max(6,"Too long.").matches(/^123456$/g,"Too secure.").required("Required."),url:a.Z_().url("Invalid url.")}),onSubmit:async e=>{alert(JSON.stringify(e,null,2))}}),d=(0,l.TA)({initialValues:{country1:"",country2:""},onSubmit:async e=>{alert(JSON.stringify(e,null,2))}});function c(e){if(null==e)return;let s=e.childNodes,r=0;s.forEach(e=>{e instanceof HTMLElement&&(e.offsetHeight<=r||(r=e.offsetHeight))}),s.forEach(e=>{e instanceof HTMLElement&&(e.style.minHeight="".concat(r,"px"))})}function x(e){let s=e.target;null!=s&&""!==s.name&&i.setFieldValue(s.name,"clicked")}return(0,p.iM)(s,o.nW),(0,t.jsxs)("div",{...(0,p.$c)(o.Qf),ref:r,children:[(0,t.jsx)("h1",{className:"my-3 text-3xl font-bold",children:"Form Examples"}),(0,t.jsx)("h2",{className:"my-1 text-xl font-bold",children:"All Input Types:"}),(0,t.jsx)("form",{ref:s=>{e.current=s},onSubmit:i.handleSubmit,children:(0,t.jsxs)("div",{ref:c,className:"grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-x-[1px] items-center overflow-x-hidden",children:[(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Button:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{className:"bg-primary border m-1 px-2 py-1 rounded-md text-pretty",name:"button",onClick:x,type:"button",value:"use cases? use normal button instead?"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Checkbox:",(0,t.jsx)("input",{...i.getFieldProps("checkbox"),className:"ml-2 m-1 px-2 py-1 rounded-md",type:"checkbox"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Color:",(0,t.jsx)("input",{...i.getFieldProps("color"),className:"ml-2 m-1 px-2 py-1 rounded-md",type:"color"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Date:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("date"),className:"m-1 px-2 py-1 rounded-md",type:"date"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Datetime-Local:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("datetimeLocal"),className:"m-1 px-2 py-1 rounded-md",type:"datetime-local"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Email:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("email"),autoComplete:"email",className:"w-64 sm:w-72 m-1 px-2 py-1 rounded-md",placeholder:"max.mustermann@mustermail.de",type:"email"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["File:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("file"),accept:".txt,.cs,application/msword",className:"m-1 px-2 py-1 rounded-md",type:"file"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("p",{children:["Hidden:",(0,t.jsx)("input",{...i.getFieldProps("hidden"),className:"ml-2 m-1 px-2 py-1 rounded-md",type:"hidden","data-no-tab-index-override":!0,tabIndex:-1})]})}),(0,t.jsxs)("div",{className:"flex px-5 border-x-[1px] items-center",children:[(0,t.jsxs)("label",{className:"flex items-center",children:["Image:",(0,t.jsx)("input",{className:"ml-2 m-1 px-2 py-1 rounded-md",name:"image",onClick:x,src:"./icons/logo192.png",type:"image",width:40})]}),!i.touched.image||Object.keys(i.errors).length<1?null:(0,t.jsx)("span",{className:"ml-4 px-2 py-1 text-red-500",children:"The form contains invalid fields."})]}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Month:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("month"),className:"m-1 px-2 py-1 rounded-md",type:"month"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Number:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("number"),className:"m-1 px-2 py-1 rounded-md",type:"number"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{className:"before:content-['*'] after:content-['*'] after:ml-1 after:text-red-500",children:"Password:"}),i.touched.password?i.errors.password?(0,t.jsx)("span",{className:"ml-4 px-2 py-1 text-red-500",children:i.errors.password}):(0,t.jsx)("span",{className:"ml-4 px-2 py-1 text-green-500",children:"That's the right password!"}):null,(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("password"),autoComplete:"current-password",className:"m-1 px-2 py-1 rounded-md",id:"password",placeholder:"123456",type:"password"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Radio:",(0,t.jsx)("br",{}),(0,t.jsxs)("label",{className:"inline-flex px-2",children:[(0,t.jsx)("input",{checked:"a"===i.values.radio,name:"radio",onChange:i.handleChange,type:"radio",value:"a"}),"\xa0a"]}),(0,t.jsxs)("label",{className:"inline-flex px-2",children:[(0,t.jsx)("input",{checked:"b"===i.values.radio,name:"radio",onChange:i.handleChange,type:"radio",value:"b"}),"\xa0b"]}),(0,t.jsxs)("label",{className:"inline-flex px-2",children:[(0,t.jsx)("input",{checked:"c"===i.values.radio,name:"radio",onChange:i.handleChange,type:"radio",value:"c"}),"\xa0c"]})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Range:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("range"),className:"m-1 px-2 py-1 rounded-md",type:"range"})]})}),(0,t.jsx)("div",{className:"grid justify-between px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Reset:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{className:"bg-primary border m-1 px-2 py-1 rounded-md text-pretty",name:"reset",onClick:function(e){i.resetForm(),x(e)},type:"reset",value:"use cases? use normal button instead?"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Search:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("search"),className:"m-1 px-2 py-1 rounded-md",type:"search"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Submit:",!i.touched.submit||Object.keys(i.errors).length<1?(0,t.jsx)("span",{className:"h-7"}):(0,t.jsx)("span",{className:"ml-4 px-2 py-1 text-red-500",children:"The form contains invalid fields."}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{className:"bg-primary border m-1 px-2 py-1 rounded-md text-pretty",name:"submit",onClick:x,type:"submit",value:"use cases? use normal button instead?"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Tel:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("tel"),autoComplete:"tel",className:"m-1 px-2 py-1 rounded-md",type:"tel"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Text:",i.touched.text&&i.errors.text?(0,t.jsx)("span",{className:"ml-4 px-2 py-1 text-red-500",children:i.errors.text}):null,(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("text"),autoComplete:"username",className:"m-1 px-2 py-1 rounded-md",placeholder:"text only",type:"text"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Time:",(0,t.jsx)("input",{...i.getFieldProps("time"),className:"ml-2 m-1 px-2 py-1 rounded-md",type:"time"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["URL:",i.touched.url&&i.errors.url?(0,t.jsx)("span",{className:"ml-4 px-2 py-1 text-red-500",children:i.errors.url}):null,(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("url"),className:"m-1 px-2 py-1 rounded-md",placeholder:"https://www.google.de",type:"url"})]})}),(0,t.jsx)("div",{className:"grid px-5 border-x-[1px] items-center",children:(0,t.jsxs)("label",{children:["Week:",(0,t.jsx)("br",{}),(0,t.jsx)("input",{...i.getFieldProps("week"),className:"m-1 px-2 py-1 rounded-md",type:"week"})]})}),(0,t.jsx)("div",{className:"hidden xl:block px-5 xl:border-x-[1px] items-center"}),(0,t.jsx)("div",{className:"hidden xl:block px-5 xl:border-x-[1px] items-center"})]})}),(0,t.jsx)("br",{}),(0,t.jsx)("h2",{className:"my-1 text-xl font-bold",children:"MUI has predefined UI elements:"}),(0,t.jsxs)("form",{className:"m-4",onSubmit:d.handleSubmit,children:[(0,t.jsxs)("div",{ref:c,className:"grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center",children:[(0,t.jsx)("div",{className:"grid px-5 items-center",children:(0,t.jsxs)("div",{children:["First try:",(0,t.jsx)(m,{setFieldValue:e=>d.setFieldValue("country1",e)})]})}),(0,t.jsx)("div",{className:"grid px-5 items-center",children:(0,t.jsxs)("div",{children:["Copied from:\xa0",(0,t.jsx)(h.default,{className:"text-blue-300",href:"https://mui.com/material-ui/react-autocomplete/",children:"https://mui.com/material-ui/react-autocomplete/"}),(0,t.jsx)(u,{setFieldValue:e=>d.setFieldValue("country2",e)})]})})]}),(0,t.jsx)("br",{}),(0,t.jsx)(b.Z,{type:"submit",variant:"outlined",children:"Submit"})]})]})}}},function(e){e.O(0,[745,138,29,743,244,597,971,23,744],function(){return e(e.s=1120)}),_N_E=e.O()}]);