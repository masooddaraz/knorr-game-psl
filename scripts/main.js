"use strict";window.g_aJG=class{constructor(c,a){this.g_aqU=c,this.g_aJH=a,this.g_aJI=!1,this.g_aJJ=()=>this.g_KM()}g_aJK(){}g_aJL(e,a,b,c){this.g_aqU.g_aJM(this.g_aJH,e,a,b,c)}g_aJN(e,a,b,c){return this.g_aqU.g_aJO(this.g_aJH,e,a,b,c)}g_aJP(d,a,b){this.g_aqU.g_aJQ()?this.g_aJL(d,a,b):this.g_aqU.g_aJR()._OnMessageFromDOM({type:"event",component:this.g_aJH,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aJS(c,a){this.g_aqU.g_aJT(this.g_aJH,c,a)}g_aJU(d){for(const[a,b]of d)this.g_aJS(a,b)}g_aJV(){return this.g_aqU}g_aJW(){return this.g_aJH}g_adZ(){this.g_aJI||(this.g_aqU.g_aJX(this.g_aJJ),this.g_aJI=!0)}g_adK(){this.g_aJI&&(this.g_aqU.g_aJY(this.g_aJJ),this.g_aJI=!1)}g_KM(){}},window.g_mM=class{constructor(c,a){this.g_lv=c,this.g_mN=a,this.g_mP=-1,this.g_mQ=-Infinity,this.g_mR=()=>this.g_mS(),this.g_mT=!1,this.g_mU=!1}g_mW(b){this.g_mU=!!b}g_m_(){if(-1===this.g_mP){const d=Date.now(),a=d-this.g_mQ,b=this.g_mN;a>=b&&this.g_mU?(this.g_mQ=d,this.g_m$()):this.g_mP=self.setTimeout(this.g_mR,Math.max(b-a,4))}}g_m$(){this.g_mT=!0,this.g_lv(),this.g_mT=!1}g_lz(){this.g_mT||(this.g_na(),this.g_mQ=Date.now())}g_mS(){this.g_mP=-1,this.g_mQ=Date.now(),this.g_m$()}g_na(){-1!==this.g_mP&&(self.clearTimeout(this.g_mP),this.g_mP=-1)}g_ek(){this.g_na(),this.g_lv=null,this.g_mR=null}},"use strict",window.g_aJZ=class extends g_aJG{constructor(c,a){super(c,a),this.g_aJ_=new Map,this.g_aJ$=!0,this.g_aJS("create",b=>this.g_aKa(b)),this.g_aJS("destroy",b=>this.g_aKb(b)),this.g_aJS("set-visible",b=>this.g_aKc(b)),this.g_aJS("update-position",b=>this.g_aKd(b)),this.g_aJS("update-state",b=>this.g_aKe(b)),this.g_aJS("focus",b=>this.g_aKf(b)),this.g_aJS("set-css-style",b=>this.g_aKg(b))}g_aKh(b){this.g_aJ$=!!b}g_aKi(c,e){this.g_aJS(c,b=>{const a=b.elementId,c=this.g_aJ_.get(a);return e(c,b)})}g_aKa(d){const a=d.elementId,b=this.g_aex(a,d);this.g_aJ_.set(a,b),d.isVisible||(b.style.display="none"),this.g_aJ$&&document.body.appendChild(b)}g_aex(){throw new Error("required override")}g_aKj(){}g_aKb(d){const a=d.elementId,b=this.g_aJ_.get(a);this.g_aKj(b),this.g_aJ$&&b.parentElement.removeChild(b),this.g_aJ_.delete(a)}g_aKk(d,a,b){b||(b={}),b.elementId=a,this.g_aJL(d,b)}g_aKl(d,a,b){b||(b={}),b.elementId=a,this.g_aJP(d,b)}g_aKc(c){if(this.g_aJ$){const a=this.g_aJ_.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aKd(d){if(this.g_aJ$){const a=this.g_aJ_.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aKe(c){const a=this.g_aJ_.get(c.elementId);this.g_aKm(a,c)}g_aKm(){throw new Error("required override")}g_aKf(c){const a=this.g_aJ_.get(c.elementId);c.focus?a.focus():a.blur()}g_aKg(c){const a=this.g_aJ_.get(c.elementId);a.style[c.prop]=c.val}g_aKn(b){return this.g_aJ_.get(b)}},"use strict";{function p(e){if(e.g_aKo){const a=document.createElement("script");a.async=!1,a.textContent=e.g_C,document.head.appendChild(a)}else return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aKp=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aKq=class c{constructor(c){this.g_aKr=c.g_aKs,this.g_aKt=null,this.g_aoP="",this.g_aKu=c.g_aKv,this.g_aKw={},this.g_aKx=null,this.g_aKy=null,this.g_aKz=[],this.g_aKA=null,this.g_amQ=null,this.g_aqO=null,this.g_anx=-1,this.g_aKB=()=>this.g_aKC(),this.g_aKD=[],this.g_aoU=c.g_aKE,b(this.g_aoU)&&this.g_aKr&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aKr=!1),this.g_aKF=!1,this.g_aKG=null,this.g_aKH=null,("html5"===this.g_aoU||"playable-ad"===this.g_aoU)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aJT("runtime","cordova-fetch-local-file",b=>this.g_aKI(b)),this.g_aJT("runtime","create-job-worker",b=>this.g_aKJ(b)),"cordova"===this.g_aoU?document.addEventListener("deviceready",()=>this.g_acN(c)):this.g_acN(c)}g_ek(){this.g_arL(),this.g_aKt&&(this.g_aKt.onmessage=null,this.g_aKt=null),this.g_aKx&&(this.g_aKx.terminate(),this.g_aKx=null),this.g_aKy&&(this.g_aKy.g_ek(),this.g_aKy=null),this.g_amQ&&(this.g_amQ.parentElement.removeChild(this.g_amQ),this.g_amQ=null)}g_aKK(){return this.g_amQ}g_fe(){return this.g_aoP}g_aJQ(){return this.g_aKr}g_asy(){return this.g_aoU}g_arl(){return a&&"cordova"===this.g_aoU}g_asz(){return a&&b(this.g_aoU)}async g_acN(d){if("playable-ad"===this.g_aoU){this.g_aKG=self.c3_base64files,this.g_aKH={},await this.g_aKL();for(let a=0,b=d.g_aKM.length;a<b;++a){const b=d.g_aKM[a].toLowerCase();this.g_aKH.hasOwnProperty(b)?d.g_aKM[a]={g_aKo:!0,g_C:this.g_aKH[b]}:this.g_aKG.hasOwnProperty(b)&&(d.g_aKM[a]=URL.createObjectURL(this.g_aKG[b]))}}if(d.g_aKN)this.g_aoP=d.g_aKN;else{const c=location.origin;this.g_aoP=("null"===c?"file:///":c)+location.pathname;const a=this.g_aoP.lastIndexOf("/");-1!==a&&(this.g_aoP=this.g_aoP.substr(0,a+1))}if(d.g_aKO)for(const[a,b]of Object.entries(d.g_aKO))this.g_aKw[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aKt=a.port1,this.g_aKt.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aKP(b)),this.g_aqO=new self.g_aKQ(this),await this.g_aqO.g_ajY(),this.g_aKR(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aKS(),this.g_aKr?await this.g_aKT(d,a.port2):await this.g_aKU(d,a.port2)}g_aKV(b){return this.g_aKw.hasOwnProperty(b)?this.g_aKw[b]:b.endsWith("/workermain.js")&&this.g_aKw.hasOwnProperty("workermain.js")?this.g_aKw["workermain.js"]:"playable-ad"===this.g_aoU&&this.g_aKG.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aKG[b.toLowerCase()]):b}async g_aKW(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_arl()){const a=await this.g_BK(this.g_aKu+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aKR(){if(this.g_asz()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aKX(b){return{baseUrl:this.g_aoP,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_aoa(),projectData:b.g_aKY,previewImageBlobs:window.cr_previewImageBlobs||this.g_aKG,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aKE,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aKZ,jobScheduler:this.g_aqO.g_aK_(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aKu+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aKu+"opus.wasm.wasm",isiOSCordova:this.g_arl(),isiOSWebView:this.g_asz(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aKT(e,a){const b=this.g_aKV(e.g_aK$);this.g_aKx=await this.g_aKW(b,this.g_aoP,{name:"Runtime"}),this.g_amQ=document.createElement("canvas"),this.g_amQ.style.display="none";const c=this.g_amQ.transferControlToOffscreen();document.body.appendChild(this.g_amQ),window.c3canvas=this.g_amQ,this.g_aKx.postMessage(Object.assign(this.g_aKX(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aLa||[],engineScripts:e.g_aKM,projectScripts:window.g_aLb,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_aqO.g_aLc()]),this.g_aKz=g.map(b=>new b(this)),this.g_aLd(),self.c3_callFunction=(c,a)=>this.g_aKA.g_Vd(c,a),"preview"===this.g_aoU&&(self.goToLastErrorScript=()=>this.g_aJM("runtime","go-to-last-error-script"))}async g_aKU(a,b){this.g_amQ=document.createElement("canvas"),this.g_amQ.style.display="none",document.body.appendChild(this.g_amQ),window.c3canvas=this.g_amQ,this.g_aKz=g.map(b=>new b(this)),this.g_aLd();const c=a.g_aKM.map(b=>"string"==typeof b?new URL(b,this.g_aoP).toString():b);if(Array.isArray(a.g_aLa)&&c.unshift(...a.g_aLa),await Promise.all(c.map(a=>p(a))),a.g_aLe&&0<a.g_aLe.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aLe.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aLf(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aLf(b),100)}}if("preview"===this.g_aoU&&"object"!=typeof self.g_aO.g_aJF)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aKX(a),{isInWorker:!1,messagePort:b,canvas:this.g_amQ,runOnStartupFunctions:k});this.g_aKy=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aKy,d)}g_aLf(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aKJ(){const b=await this.g_aqO.g_aLg();return{outputPort:b,transferables:[b]}}g_aJR(){if(this.g_aKr)throw new Error("not available in worker mode");return this.g_aKy}g_aJM(f,a,b,c,d){this.g_aKt.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aKF?void 0:d)}g_aJO(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aKt.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aKF?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aLh(c);else if("result"===a)this.g_aLi(c);else if("runtime-ready"===a)this.g_aLj();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aLh(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aLk(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aLk(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aLk(c,!1,d.toString())}):this.g_aLk(c,!0,f))}g_aLk(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aKt.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aLi(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aJT(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aLl(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aLd(){for(const b of this.g_aKz)if("runtime"===b.g_aJW())return void(this.g_aKA=b);throw new Error("cannot find runtime DOM handler")}g_aKP(b){this.g_aJM("debugger","message",b)}g_aLj(){for(const b of this.g_aKz)b.g_aJK()}static g_aoa(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aLm(){return await this.g_aJO("runtime","get-remote-preview-status-info")}g_aJX(b){this.g_aKD.push(b),this.g_arK()}g_aJY(c){const a=this.g_aKD.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aKD.splice(a,1),this.g_aKD.length||this.g_arL()}g_arK(){-1===this.g_anx&&this.g_aKD.length&&(this.g_anx=requestAnimationFrame(this.g_aKB))}g_arL(){-1!==this.g_anx&&(cancelAnimationFrame(this.g_anx),this.g_anx=-1)}g_aKC(){this.g_anx=-1;for(const b of this.g_aKD)b();this.g_arK()}g_aLn(b){this.g_aKA.g_aLn(b)}g_aLo(b){this.g_aKA.g_aLo(b)}g_aLp(){this.g_aKA.g_aLp()}g_aLq(b){this.g_aKA.g_aLq(b)}g_Cf(b){return!!d[b]}async g_afT(c){const a=await this.g_aJO("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fW(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fX(b){return!this.g_fW(b)}async g_aKI(c){const a=c.filename;switch(c.as){case"text":return await this.g_BL(a);case"buffer":return await this.g_BK(a);default:throw new Error("unsupported type");}}g_aLr(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aLs(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aLt(e){const a=this.g_aLr();return new Promise((b,c)=>a.checkPermission(this.g_aLs(a,e),c=>b(!!c.hasPermission),c))}g_aBt(e){const a=this.g_aLr();return new Promise((b,c)=>a.requestPermission(this.g_aLs(a,e),c=>b(!!c.hasPermission),c))}async g_aLu(c){if("cordova"!==this.g_asy())return!0;if(this.g_arl())return!0;for(const d of c){const b=await this.g_aLt(d);if(b)continue;const a=await this.g_aBt(d);if(!1===a)return!1}return!0}async g_aLv(...b){if(!1===(await this.g_aLu(b)))throw new Error("Permission not granted")}g_aLw(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BL(b){const a=await this.g_aLw(b);return await q(a)}g_aLx(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aLy(b.filename,b.g_aLz,b.g_aLA)}}g_BK(d){return new Promise((g,b)=>{e.push({filename:d,g_aLz:b=>{f--,this.g_aLx(),g(b)},g_aLA:c=>{f--,this.g_aLx(),b(c)}}),this.g_aLx()})}async g_aLy(c,a,b){try{const b=await this.g_aLw(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aKL(){const d=[];for(const[a,b]of Object.entries(this.g_aKG))d.push(this.g_aLB(a,b));await Promise.all(d)}async g_aLB(d,a){if("object"==typeof a)this.g_aKG[d]=new Blob([a.str],{type:a.type}),this.g_aKH[d]=a.str;else{let b=await this.g_aLC(a);b||(b=this.g_aLD(a)),this.g_aKG[d]=b}}async g_aLC(c){try{const a=await fetch(c);return await a.blob()}catch(b){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",b),null}}g_aLD(c){const a=this.g_aLE(c);return this.g_aLF(a.data,a.g_gn)}g_aLE(j){const a=j.indexOf(",");if(0>a)throw new URIError("expected comma in data: uri");const b=j.substring(5,a),c=j.substring(a+1),d=b.split(";"),e=d[0]||"",f=d[1],g=d[2];let h;return h="base64"===f||"base64"===g?atob(c):decodeURIComponent(c),{g_gn:e,data:h}}g_aLF(i,a){let b,j,k=i.length,e=k>>2,f=new Uint8Array(k),g=new Uint32Array(f.buffer,0,e);for(b=0,j=0;b<e;++b)g[b]=i.charCodeAt(j++)|i.charCodeAt(j++)<<8|i.charCodeAt(j++)<<16|i.charCodeAt(j++)<<24;for(let b=3&k;b--;)f[j]=i.charCodeAt(j),++j;return new Blob([f],{type:a})}g_aKS(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aKF=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aJG{constructor(d){super(d,"runtime"),this.g_aLG=!0,this.g_aLH=-1,this.g_aLI="any",this.g_aLJ=!1,this.g_aLK=!1,this.g_aLL=null,this.g_aLM=null,this.g_aLN=null,d.g_aJT("canvas","update-size",b=>this.g_aLO(b)),d.g_aJT("runtime","invoke-download",b=>this.g_aLP(b)),d.g_aJT("runtime","raster-svg-image",b=>this.g_aLQ(b)),d.g_aJT("runtime","get-svg-image-size",b=>this.g_aLR(b)),d.g_aJT("runtime","set-target-orientation",b=>this.g_aLS(b)),d.g_aJT("runtime","register-sw",()=>this.g_aLT()),d.g_aJT("runtime","post-to-debugger",b=>this.g_aLU(b)),d.g_aJT("runtime","go-to-script",b=>this.g_aLU(b)),d.g_aJT("runtime","before-start-ticking",()=>this.g_aLV()),d.g_aJT("runtime","debug-highlight",b=>this.g_aLW(b)),d.g_aJT("runtime","enable-device-orientation",()=>this.g_aLX()),d.g_aJT("runtime","enable-device-motion",()=>this.g_aLY()),d.g_aJT("runtime","add-stylesheet",b=>this.g_aLZ(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()});const a=d.g_aKK();window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),a.addEventListener("selectstart",f),a.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1}),"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aL_=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_anO()),d.g_asz()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aL$=new Set,this.g_aMa=new WeakSet,this.g_aMb=!1}g_aLV(){return"cordova"===this.g_aqU.g_asy()?(document.addEventListener("pause",()=>this.g_aqQ(!0)),document.addEventListener("resume",()=>this.g_aqQ(!1))):document.addEventListener("visibilitychange",()=>this.g_aqQ(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aJK(){window.addEventListener("focus",()=>this.g_aMc("window-focus")),window.addEventListener("blur",()=>{this.g_aMc("window-blur",{parentHasFocus:b()}),this.g_aL_=0}),window.addEventListener("fullscreenchange",()=>this.g_anP()),window.addEventListener("webkitfullscreenchange",()=>this.g_anP()),window.addEventListener("mozfullscreenchange",()=>this.g_anP()),window.addEventListener("fullscreenerror",b=>this.g_anQ(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_anQ(b)),window.addEventListener("mozfullscreenerror",b=>this.g_anQ(b)),window.addEventListener("keydown",b=>this.g_aMd("keydown",b)),window.addEventListener("keyup",b=>this.g_aMd("keyup",b)),window.addEventListener("dblclick",b=>this.g_aMe("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aMf("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aMg("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aMg("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aMg("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aMh("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aMh("pointermove",b)),window.addEventListener("touchend",b=>this.g_aMh("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aMh("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aMi("pointerdown",b)),this.g_aqU.g_aJQ()&&"undefined"!=typeof window.onpointerrawupdate?(this.g_aLM=new g_mM(()=>this.g_aMj(),5),this.g_aLM.g_mW(!0),window.addEventListener("pointerrawupdate",b=>this.g_aMk(b))):window.addEventListener("pointermove",b=>this.g_aMi("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aMi("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aMi("pointercancel",b)));const c=()=>this.g_aLp();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aMc(c,a){this.g_aJL(c,a||null,k)}g_aMl(){return Math.max(window.innerWidth,1)}g_aMm(){return Math.max(window.innerHeight,1)}g_anO(){const c=this.g_aMl(),a=this.g_aMm();this.g_aMc("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_aqU.g_asz()&&(-1!==this.g_aLH&&clearTimeout(this.g_aLH),this.g_aMn(c,a,0))}g_aMo(d,a,b){-1!==this.g_aLH&&clearTimeout(this.g_aLH),this.g_aLH=setTimeout(()=>this.g_aMn(d,a,b),48)}g_aMn(f,a,b){const c=this.g_aMl(),d=this.g_aMm();this.g_aLH=-1,c!=f||d!=a?this.g_aMc("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aMo(c,d,b+1)}g_aLS(b){this.g_aLI=b.targetOrientation}g_aMp(){const c=this.g_aLI;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_anP(){const b=g_aKq.g_aoa();b&&"any"!==this.g_aLI&&this.g_aMp(),this.g_aJL("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aMl(),innerHeight:this.g_aMm()})}g_anQ(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aJL("fullscreenerror",{isFullscreen:g_aKq.g_aoa(),innerWidth:this.g_aMl(),innerHeight:this.g_aMm()})}g_aqQ(b){b?this.g_aqU.g_arL():this.g_aqU.g_arK(),this.g_aJL("visibilitychange",{hidden:b})}g_aMd(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aJP(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aMf(c,a){this.g_aJL(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aMe(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aJP(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aMg(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aL_;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aJP(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aL_=e.buttons,this.g_aMe(e.type,e,j)}}g_aMi(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aLM&&"pointermove"!==d&&this.g_aLM.g_lz();let b=0;if("mouse"===a.pointerType&&(b=this.g_aL_),this.g_aJP(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aMe(b,a,j),this.g_aL_=a.buttons}}g_aMk(b){this.g_aLN=b,this.g_aLM.g_m_()}g_aMj(){this.g_aMi("pointermove",this.g_aLN),this.g_aLN=null}g_aMh(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aJP(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aLX(){this.g_aLJ||(this.g_aLJ=!0,window.addEventListener("deviceorientation",b=>this.g_aBO(b)))}g_aLY(){this.g_aLK||(this.g_aLK=!0,window.addEventListener("devicemotion",b=>this.g_aBP(b)))}g_aBO(b){this.g_aJL("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_aBP(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aJL("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aLO(d){const a=this.g_aJV(),b=a.g_aKK();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aKR(),this.g_aLG&&(b.style.display="",this.g_aLG=!1)}g_aLP(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aLQ(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aLR(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aLZ(b){await t(b.url)}g_aLp(){const c=[...this.g_aL$];if(this.g_aL$.clear(),!this.g_aMb)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aMa.has(d)||this.g_aL$.add(d)})}}g_aLn(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aMa.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aL$.add(c)}a&&a.catch(()=>{this.g_aMa.has(c)||this.g_aL$.add(c)})}g_aLo(b){this.g_aL$.delete(b),this.g_aMa.add(b)}g_aLq(b){this.g_aMb=!!b}g_aLW(d){const a=d.show;if(!a)return void(this.g_aLL&&(this.g_aLL.style.display="none"));this.g_aLL||(this.g_aLL=document.createElement("div"),this.g_aLL.id="inspectOutline",document.body.appendChild(this.g_aLL));const b=this.g_aLL;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aLT(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aLU(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Vd(c,a){return this.g_aJN("js-invoke-function",{name:c,params:a})}};g_aKq.g_aLl(n)}{const c=document.currentScript.src;self.g_aKQ=class{constructor(a){this.g_aMq=a,this.g_aoP=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_atf=Math.min(navigator.hardwareConcurrency||2,16),this.g_aMr=null,this.g_aMs=[],this.g_atd=null,this.g_aMt=null}async g_ajY(){if(this.g_aMu)throw new Error("already initialised");this.g_aMu=!0;const c=this.g_aMq.g_aKV("dispatchworker.js");this.g_aMr=await this.g_aMq.g_aKW(c,this.g_aoP,{name:"DispatchWorker"});const a=new MessageChannel;this.g_atd=a.port1,this.g_aMr.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aMt=await this.g_aLg()}async g_aLg(){const f=this.g_aMs.length,a=this.g_aMq.g_aKV("jobworker.js"),b=await this.g_aMq.g_aKW(a,this.g_aoP,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aMr.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aMs.push(b),d.port1}g_aK_(){return{inputPort:this.g_atd,outputPort:this.g_aMt,maxNumWorkers:this.g_atf}}g_aLc(){return[this.g_atd,this.g_aMt]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aKq({g_aKs:!1,g_aK$:"workermain.js",g_aKM:["scripts/c3runtime.js"],g_aKv:"scripts/",g_aLa:[],g_aKE:"html5"})}{const b=class extends g_aJG{constructor(b){super(b,"touch"),this.g_aJS("request-permission",b=>this.g_aMx(b))}async g_aMx(d){const a=d.type;let b=!0;0===a?b=await this.g_aMy():1===a&&(b=await this.g_aMz()),this.g_aJL("permission-result",{type:a,result:b})}async g_aMy(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aMz(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aKq.g_aLl(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aJZ{constructor(b){super(b,"text-input"),this.g_aKi("scroll-to-bottom",b=>this.g_aMO(b))}g_aex(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aKl("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aKl("dblclick",b)}),d.addEventListener("input",()=>this.g_aKk("change",b,{text:d.value})),d.id=c.id,this.g_aKm(d,c),d}g_aKm(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_aMO(b){b.scrollTop=b.scrollHeight}};g_aKq.g_aLl(b)}{const b=class extends g_aJG{constructor(b){super(b,"browser"),this.g_aoU="",this.g_aJS("get-initial-state",b=>this.g_aMA(b)),this.g_aJS("ready-for-sw-messages",()=>this.g_aMB()),this.g_aJS("alert",b=>this.g_aMC(b)),this.g_aJS("close",()=>this.g_aMD()),this.g_aJS("set-focus",b=>this.g_aKf(b)),this.g_aJS("vibrate",b=>this.g_aME(b)),this.g_aJS("lock-orientation",b=>this.g_aMF(b)),this.g_aJS("unlock-orientation",()=>this.g_aMG()),this.g_aJS("navigate",b=>this.g_aMH(b)),this.g_aJS("request-fullscreen",b=>this.g_aMI(b)),this.g_aJS("exit-fullscreen",()=>this.g_aMJ()),window.addEventListener("online",()=>this.g_aDl(!0)),window.addEventListener("offline",()=>this.g_aDl(!1)),document.addEventListener("backbutton",()=>this.g_aMK()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aML(b))}g_aMA(b){return this.g_aoU=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aMB(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aJL("sw-message",b.data))}g_aDl(b){this.g_aJL("online-state",{isOnline:b})}g_aMK(){this.g_aJL("backbutton")}g_aML(b){b.handled=!0,this.g_aJL("backbutton")}g_aMM(){return"nwjs"===this.g_aoU?nw.Window.get():null}g_aMC(b){alert(b.message)}g_aMD(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aKf(c){const d=c.isFocus;if("nwjs"===this.g_aoU){const b=this.g_aMM();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aME(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aMF(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aMG(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aMH(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aMN();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_aDk&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aMI(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aMJ(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aKq.g_aLl(b)}