(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3038:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(5210)}])},5210:function(e,t,r){"use strict";r.r(t);var n=r(5666),a=r.n(n),o=r(5893),l=r(7294);function s(e,t,r,n,a,o,l){try{var s=e[o](l),i=s.value}catch(c){return void r(c)}s.done?t(i):Promise.resolve(i).then(n,a)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return u(this,r)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,r,n,l=b(c);function c(e){var t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).datePickerScrolling=function(e){var r=setInterval((function(){t.state.datePickerContainer.current.scrollLeft=t.state.datePickerContainer.current.scrollLeft+(e?20:-20)}),20);t.setState({refMouseDownInterval:r})},t.state={messageCount:0,datePickerContainer:null,refMouseDownInterval:0,datePicked:0,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,countryCodeOptions:[],availableDates:[]},t.handleSubmit=(r=a().mark((function e(t){var r,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r=t.target,e.next=5,fetch("http://localhost:1234/calendar",{method:"POST",body:JSON.stringify({date:r.date.value,name:r.name.value,countryCode:r.countryCode.value,telephone:r.telephone.value,message:r.message.value})});case 5:return n=e.sent,e.next=8,n.json();case 8:o=e.sent,console.log(o),alert("Is this your full name: ".concat(o.data)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:return e.prev=16,e.finish(16);case 18:case"end":return e.stop()}}),e,null,[[1,13,16,18]])})),function(){var e=this,t=arguments;return new Promise((function(n,a){var o=r.apply(e,t);function l(e){s(o,n,a,l,i,"next",e)}function i(e){s(o,n,a,l,i,"throw",e)}l(void 0)}))}),t.stopScrolling=function(){clearInterval(t.state.refMouseDownInterval)};var n=!0,i=!1,u=void 0;try{for(var d,p=Object.entries({BD:"+880",BE:"+32",BF:"+226",BG:"+359",BA:"+387",BB:"+1-246",WF:"+681",BL:"+590",BM:"+1-441",BN:"+673",BO:"+591",BH:"+973",BI:"+257",BJ:"+229",BT:"+975",JM:"+1-876",BW:"+267",WS:"+685",BQ:"+599",BR:"+55",BS:"+1-242",JE:"+44-1534",BY:"+375",BZ:"+501",RU:"+7",RW:"+250",RS:"+381",TL:"+670",RE:"+262",TM:"+993",TJ:"+992",RO:"+40",TK:"+690",GW:"+245",GU:"+1-671",GT:"+502",GR:"+30",GQ:"+240",GP:"+590",JP:"+81",GY:"+592",GG:"+44-1481",GF:"+594",GE:"+995",GD:"+1-473",GB:"+44",GA:"+241",SV:"+503",GN:"+224",GM:"+220",GL:"+299",GI:"+350",GH:"+233",OM:"+968",TN:"+216",JO:"+962",HR:"+385",HT:"+509",HU:"+36",HK:"+852",HN:"+504",HM:"+ ",VE:"+58",PR:"+1-787 and 1-939",PS:"+970",PW:"+680",PT:"+351",SJ:"+47",PY:"+595",IQ:"+964",PA:"+507",PF:"+689",PG:"+675",PE:"+51",PK:"+92",PH:"+63",PN:"+870",PL:"+48",PM:"+508",ZM:"+260",EH:"+212",EE:"+372",EG:"+20",ZA:"+27",EC:"+593",IT:"+39",VN:"+84",SB:"+677",ET:"+251",SO:"+252",ZW:"+263",SA:"+966",ES:"+34",ER:"+291",ME:"+382",MD:"+373",MG:"+261",MF:"+590",MA:"+212",MC:"+377",UZ:"+998",MM:"+95",ML:"+223",MO:"+853",MN:"+976",MH:"+692",MK:"+389",MU:"+230",MT:"+356",MW:"+265",MV:"+960",MQ:"+596",MP:"+1-670",MS:"+1-664",MR:"+222",IM:"+44-1624",UG:"+256",TZ:"+255",MY:"+60",MX:"+52",IL:"+972",FR:"+33",IO:"+246",SH:"+290",FI:"+358",FJ:"+679",FK:"+500",FM:"+691",FO:"+298",NI:"+505",NL:"+31",NO:"+47",NA:"+264",VU:"+678",NC:"+687",NE:"+227",NF:"+672",NG:"+234",NZ:"+64",NP:"+977",NR:"+674",NU:"+683",CK:"+682",CI:"+225",CH:"+41",CO:"+57",CN:"+86",CM:"+237",CL:"+56",CC:"+61",CA:"+1",CG:"+242",CF:"+236",CD:"+243",CZ:"+420",CY:"+357",CX:"+61",CR:"+506",CW:"+599",CV:"+238",CU:"+53",SZ:"+268",SY:"+963",SX:"+599",KG:"+996",KE:"+254",SS:"+211",SR:"+597",KI:"+686",KH:"+855",KN:"+1-869",KM:"+269",ST:"+239",SK:"+421",KR:"+82",SI:"+386",KP:"+850",KW:"+965",SN:"+221",SM:"+378",SL:"+232",SC:"+248",KZ:"+7",KY:"+1-345",SG:"+65",SE:"+46",SD:"+249",DO:"+1-809 and 1-829",DM:"+1-767",DJ:"+253",DK:"+45",VG:"+1-284",DE:"+49",YE:"+967",DZ:"+213",US:"+1",UY:"+598",YT:"+262",UM:"+1",LB:"+961",LC:"+1-758",LA:"+856",TV:"+688",TW:"+886",TT:"+1-868",TR:"+90",LK:"+94",LI:"+423",LV:"+371",TO:"+676",LT:"+370",LU:"+352",LR:"+231",LS:"+266",TH:"+66",TG:"+228",TD:"+235",TC:"+1-649",LY:"+218",VA:"+379",VC:"+1-784",AE:"+971",AD:"+376",AG:"+1-268",AF:"+93",AI:"+1-264",VI:"+1-340",IS:"+354",IR:"+98",AM:"+374",AL:"+355",AO:"+244",AS:"+1-684",AR:"+54",AU:"+61",AT:"+43",AW:"+297",IN:"+91",AX:"+358-18",AZ:"+994",IE:"+353",ID:"+62",UA:"+380",QA:"+974",MZ:"+258"})[Symbol.iterator]();!(n=(d=p.next()).done);n=!0){var b=f(d.value,2),h=b[0],m=b[1];t.state.countryCodeOptions.push((0,o.jsxs)("option",{value:"".concat(h,"_").concat(m),children:[h," ",m]},h))}}catch(N){i=!0,u=N}finally{try{n||null==p.return||p.return()}finally{if(i)throw u}}var y=["January","February","March","April","May","June","July","August","September","October","November","December"],x=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=new Date;g.setHours(14,0,0,0);var v=g.getTimezoneOffset();g.setMinutes(v);for(var w=0;w<20;w++){g.setDate(g.getDate()+1);var S={day:x[g.getDay()],date:g.getDate(),hour:14,month:y[g.getMonth()],year:g.getFullYear(),available:1,unix:g.getTime()};t.state.availableDates.push(S)}return t}return t=c,(r=[{key:"render",value:function(){var e=this,t=this.state,r=t.messageCount,n=t.availableDates,a=t.countryCodeOptions,l=t.datePicked,s=t.timezone,i=t.datePickerContainer;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"my-10 mx-auto w-10/12 pb-10 border-b border-black text-center text-6xl font-semibold",children:"Contact"}),(0,o.jsxs)("form",{className:"w-full max-w-3xl mx-auto px-5",onSubmit:this.handleSubmit,children:[(0,o.jsx)("span",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Pick a date"}),(0,o.jsxs)("div",{className:"relative border-x-2 border-gray-200 rounded py-2 mb-3",children:[(0,o.jsxs)("div",{className:"h-full w-full absolute flex justify-end items-center bg-opacity-50 pointer-events-none z-50",children:[(0,o.jsx)("button",{type:"button",onMouseDown:function(){return e.datePickerScrolling(!1)},onTouchStart:function(){return e.datePickerScrolling(!1)},onMouseLeave:this.stopScrolling,onMouseUp:this.stopScrolling,onTouchEnd:this.stopScrolling,className:"h-8 w-14 mr-3 shadow-2xl bg-gray-700 active:border-transparent hover:border-transparent border-black border text-gray-300 hover:text-white font-black rounded pointer-events-auto bg-opacity-50 hover:bg-opacity-100",children:"\u2190"}),(0,o.jsx)("button",{type:"button",onMouseDown:function(){return e.datePickerScrolling(!0)},onTouchStart:function(){return e.datePickerScrolling(!0)},onMouseLeave:this.stopScrolling,onMouseUp:this.stopScrolling,onTouchEnd:this.stopScrolling,className:"h-8 w-14 mr-3 bg-gray-700 active:border-transparent hover:border-transparent border-black border text-gray-300 hover:text-white font-black pointer-events-auto rounded bg-opacity-50 hover:bg-opacity-100",children:"\u2192"})]}),(0,o.jsx)("div",{className:"w-full flex overflow-hidden select-none relative pr-28 pl-3 py-5",ref:i,children:n.map((function(t,r){var n=e;return(0,o.jsxs)("label",{className:"".concat(l===t.unix?"date-selected":"date-unselected"," border-2 mr-3 cursor-pointer transition-all duration-300 ease-in-out py-10 px-5 appearance-none w-full rounded leading-tight focus:outline-none "),htmlFor:"date-".concat(r),children:[(0,o.jsxs)("div",{className:"text-center",children:[t.hour," ",(0,o.jsx)("br",{}),t.day," ",t.date," ",t.month," ",t.year]}),(0,o.jsx)("div",{children:s}),(0,o.jsx)("input",{id:"date-".concat(r),type:"radio",disabled:!t.available,onChange:function(e){return n.setState({datePicked:parseInt(e.target.value)})},name:"date",className:"opacity-0 absolute",required:!0,value:t.unix})]},"date-".concat(r))}))})]}),(0,o.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,o.jsxs)("div",{className:"w-full px-3 mb-6 md:mb-0",children:[(0,o.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"name",children:"Your Name"}),(0,o.jsx)("input",{required:!0,className:"transition-all duration-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"name",name:"name",type:"text",placeholder:"...or whatever you want me to call you",maxLength:25})]})}),(0,o.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,o.jsxs)("div",{className:"w-full px-3",children:[(0,o.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"telephone",children:"Telephone"}),(0,o.jsxs)("div",{className:"w-full flex",children:[(0,o.jsxs)("select",{name:"countryCode",required:!0,defaultValue:"",className:"transition-all duration-300 appearance-none w-3/12 py-3 px-4 mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded-tl rounded-bl outline-none focus:bg-white focus:border-gray-500",children:[(0,o.jsx)("option",{value:"",disabled:!0,children:"Country code"}),a.map((function(e){return e}))]}),(0,o.jsx)("input",{required:!0,className:"w-9/12 transition-all duration-300 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded-tr rounded-br py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"telephone",name:"telephone",type:"text",placeholder:"I won't harass you",maxLength:10})]})]})}),(0,o.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,o.jsxs)("div",{className:"w-full px-3 mb-6 md:mb-0",children:[(0,o.jsxs)("label",{className:" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-between",htmlFor:"message",children:["Message ",(0,o.jsxs)("span",{className:"text-xs font-thin",children:[r," / 500"]})]}),(0,o.jsx)("textarea",{onChange:function(t){return e.setState({messageCount:t.target.value.length})},className:"transition-all duration-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"message",name:"message",placeholder:"It's optional, so make it simple for me please.",maxLength:500,rows:5})]})}),(0,o.jsx)("div",{className:"flex flex-wrap -mx-3 mb-6",children:(0,o.jsx)("div",{className:"w-full px-3 mb-6 md:mb-0",children:(0,o.jsx)("button",{type:"submit",className:"mx-auto hover:text-gray-800 text-gray-100 transition-all duration-300 bg-black hover:bg-gray-200 font-semibold py-2 px-4 border border-black rounded",children:"Book a call"})})})]})]})}}])&&i(t.prototype,r),n&&i(t,n),c}(l.Component);t.default=h}},function(e){e.O(0,[774,888,179],(function(){return t=3038,e(e.s=t);var t}));var t=e.O();_N_E=t}]);