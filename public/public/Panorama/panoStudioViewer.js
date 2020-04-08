/*!	panoStudioViewer.js is based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	which is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var panoStudioViewer=function(){var H="undefined",u="object",W="Shockwave Flash",aa="ShockwaveFlash.ShockwaveFlash",t="application/x-shockwave-flash",V="SWFObjectExprInst",A="onreadystatechange",S=window,k=document,w=navigator,X=false,Y=[i],q=[],R=[],M=[],m,U,I,F,N=false,a=false,p,K,n=true,r=null,o=null,Q=function(){var ae=typeof k.getElementById!=H&&typeof k.getElementsByTagName!=H&&typeof k.createElement!=H,al=w.userAgent.toLowerCase(),ac=w.platform.toLowerCase(),ai=ac?/win/.test(ac):/win/.test(al),ag=ac?/mac/.test(ac):/mac/.test(al),aj=/webkit/.test(al)?parseFloat(al.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ab=!+"\v1",ak=[0,0,0],af=null;if(typeof w.plugins!=H&&typeof w.plugins[W]==u){af=w.plugins[W].description;if(af&&!(typeof w.mimeTypes!=H&&w.mimeTypes[t]&&!w.mimeTypes[t].enabledPlugin)){X=true;ab=false;af=af.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ak[0]=parseInt(af.replace(/^(.*)\..*$/,"$1"),10);ak[1]=parseInt(af.replace(/^.*\.(.*)\s.*$/,"$1"),10);ak[2]=/[a-zA-Z]/.test(af)?parseInt(af.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof S.ActiveXObject!=H){try{var ah=new ActiveXObject(aa);if(ah){af=ah.GetVariable("$version");if(af){ab=true;af=af.split(" ")[1].split(",");ak=[parseInt(af[0],10),parseInt(af[1],10),parseInt(af[2],10)]}}}catch(ad){}}}return{w3:ae,pv:ak,wk:aj,ie:ab,win:ai,mac:ag}}(),l=function(){if(!Q.w3){return}if((typeof k.readyState!=H&&k.readyState=="complete")||(typeof k.readyState==H&&(k.getElementsByTagName("body")[0]||k.body))){g()}if(!N){if(typeof k.addEventListener!=H){k.addEventListener("DOMContentLoaded",g,false)}if(Q.ie&&Q.win){k.attachEvent(A,function(){if(k.readyState=="complete"){k.detachEvent(A,arguments.callee);g()}});if(S==top){(function(){if(N){return}try{k.documentElement.doScroll("left")}catch(ab){setTimeout(arguments.callee,0);return}g()})()}}if(Q.wk){(function(){if(N){return}if(!/loaded|complete/.test(k.readyState)){setTimeout(arguments.callee,0);return}g()})()}v(g)}}();function g(){if(N){return}try{var ad=k.getElementsByTagName("body")[0].appendChild(G("span"));ad.parentNode.removeChild(ad)}catch(ae){return}N=true;var ab=Y.length;for(var ac=0;ac<ab;ac++){Y[ac]()}}function O(ab){if(N){ab()}else{Y[Y.length]=ab}}function v(ac){if(typeof S.addEventListener!=H){S.addEventListener("load",ac,false)}else{if(typeof k.addEventListener!=H){k.addEventListener("load",ac,false)}else{if(typeof S.attachEvent!=H){j(S,"onload",ac)}else{if(typeof S.onload=="function"){var ab=S.onload;S.onload=function(){ab();ac()}}else{S.onload=ac}}}}}function i(){if(X){Z()}else{L()}}function Z(){var ab=k.getElementsByTagName("body")[0];var ae=G(u);ae.setAttribute("type",t);ae.setAttribute("quality","high");var ad=ab.appendChild(ae);if(ad){var ac=0;(function(){if(typeof ad.GetVariable!=H){var af=ad.GetVariable("$version");if(af){af=af.split(" ")[1].split(",");Q.pv=[parseInt(af[0],10),parseInt(af[1],10),parseInt(af[2],10)]}}else{if(ac<10){ac++;setTimeout(arguments.callee,10);return}}ab.removeChild(ae);ad=null;L()})()}else{L()}}function L(){var ak=q.length;if(ak>0){for(var aj=0;aj<ak;aj++){var ac=q[aj].id;var af=q[aj].callbackFn;var ae={success:false,id:ac};if(Q.pv[0]>0){var ai=c(ac);if(ai){if(J(q[aj].swfVersion)&&!(Q.wk&&Q.wk<312)){z(ac,true);if(af){ae.success=true;ae.ref=C(ac);af(ae)}}else{if(q[aj].expressInstall&&E()){var am={};am.data=q[aj].expressInstall;am.width=ai.getAttribute("width")||"0";am.height=ai.getAttribute("height")||"0";if(ai.getAttribute("class")){am.styleclass=ai.getAttribute("class")}if(ai.getAttribute("align")){am.align=ai.getAttribute("align")}var al={};var ab=ai.getElementsByTagName("param");var ag=ab.length;for(var ah=0;ah<ag;ah++){if(ab[ah].getAttribute("name").toLowerCase()!="movie"){al[ab[ah].getAttribute("name")]=ab[ah].getAttribute("value")}}T(am,al,ac,af)}else{s(ai);if(af){af(ae)}}}}}else{z(ac,true);if(af){var ad=C(ac);if(ad&&typeof ad.SetVariable!=H){ae.success=true;ae.ref=ad}af(ae)}}}}}function C(ae){var ab=null;var ac=c(ae);if(ac&&ac.nodeName=="OBJECT"){if(typeof ac.SetVariable!=H){ab=ac}else{var ad=ac.getElementsByTagName(u)[0];if(ad){ab=ad}}}return ab}function E(){return !a&&J("6.0.65")&&(Q.win||Q.mac)&&!(Q.wk&&Q.wk<312)}function T(ae,af,ab,ad){a=true;I=ad||null;F={success:false,id:ab};var ai=c(ab);if(ai){if(ai.nodeName=="OBJECT"){m=h(ai);U=null}else{m=ai;U=ab}ae.id=V;if(typeof ae.width==H||(!/%$/.test(ae.width)&&parseInt(ae.width,10)<310)){ae.width="310"}if(typeof ae.height==H||(!/%$/.test(ae.height)&&parseInt(ae.height,10)<137)){ae.height="137"}k.title=k.title.slice(0,47)+" - Flash Player Installation";var ah=Q.ie&&Q.win?"ActiveX":"PlugIn",ag="MMredirectURL="+S.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ah+"&MMdoctitle="+k.title;if(typeof af.flashvars!=H){af.flashvars+="&"+ag}else{af.flashvars=ag}if(Q.ie&&Q.win&&ai.readyState!=4){var ac=G("div");ab+="SWFObjectNew";ac.setAttribute("id",ab);ai.parentNode.insertBefore(ac,ai);ai.style.display="none";(function(){if(ai.readyState==4){ai.parentNode.removeChild(ai)}else{setTimeout(arguments.callee,10)}})()}x(ae,af,ab)}}function s(ac){if(Q.ie&&Q.win&&ac.readyState!=4){var ab=G("div");ac.parentNode.insertBefore(ab,ac);ab.parentNode.replaceChild(h(ac),ab);ac.style.display="none";(function(){if(ac.readyState==4){ac.parentNode.removeChild(ac)}else{setTimeout(arguments.callee,10)}})()}else{ac.parentNode.replaceChild(h(ac),ac)}}function h(ag){var af=G("div");if(Q.win&&Q.ie){af.innerHTML=ag.innerHTML}else{var ad=ag.getElementsByTagName(u)[0];if(ad){var ah=ad.childNodes;if(ah){var ab=ah.length;for(var ae=0;ae<ab;ae++){if(!(ah[ae].nodeType==1&&ah[ae].nodeName=="PARAM")&&!(ah[ae].nodeType==8)){af.appendChild(ah[ae].cloneNode(true))}}}}}return af}function x(am,ak,ac){var ab,ae=c(ac);if(Q.wk&&Q.wk<312){return ab}if(ae){if(typeof am.id==H){am.id=ac}if(Q.ie&&Q.win){var al="";for(var ai in am){if(am[ai]!=Object.prototype[ai]){if(ai.toLowerCase()=="data"){ak.movie=am[ai]}else{if(ai.toLowerCase()=="styleclass"){al+=' class="'+am[ai]+'"'}else{if(ai.toLowerCase()!="classid"){al+=" "+ai+'="'+am[ai]+'"'}}}}}var aj="";for(var ah in ak){if(ak[ah]!=Object.prototype[ah]){aj+='<param name="'+ah+'" value="'+ak[ah]+'" />'}}ae.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+al+">"+aj+"</object>";R[R.length]=am.id;ab=c(am.id)}else{var ad=G(u);ad.setAttribute("type",t);for(var ag in am){if(am[ag]!=Object.prototype[ag]){if(ag.toLowerCase()=="styleclass"){ad.setAttribute("class",am[ag])}else{if(ag.toLowerCase()!="classid"){ad.setAttribute(ag,am[ag])}}}}for(var af in ak){if(ak[af]!=Object.prototype[af]&&af.toLowerCase()!="movie"){f(ad,af,ak[af])}}ae.parentNode.replaceChild(ad,ae);ab=ad}}return ab}function f(ad,ab,ac){var ae=G("param");ae.setAttribute("name",ab);ae.setAttribute("value",ac);ad.appendChild(ae)}function B(ac){var ab=c(ac);if(ab&&ab.nodeName=="OBJECT"){if(Q.ie&&Q.win){ab.style.display="none";(function(){if(ab.readyState==4){b(ac)}else{setTimeout(arguments.callee,10)}})()}else{ab.parentNode.removeChild(ab)}}}function b(ad){var ac=c(ad);if(ac){for(var ab in ac){if(typeof ac[ab]=="function"){ac[ab]=null}}ac.parentNode.removeChild(ac)}}function c(ad){var ab=null;try{ab=k.getElementById(ad)}catch(ac){}return ab}function G(ab){return k.createElement(ab)}function j(ad,ab,ac){ad.attachEvent(ab,ac);M[M.length]=[ad,ab,ac]}function J(ad){var ac=Q.pv,ab=ad.split(".");ab[0]=parseInt(ab[0],10);ab[1]=parseInt(ab[1],10)||0;ab[2]=parseInt(ab[2],10)||0;return(ac[0]>ab[0]||(ac[0]==ab[0]&&ac[1]>ab[1])||(ac[0]==ab[0]&&ac[1]==ab[1]&&ac[2]>=ab[2]))?true:false}function y(ag,ac,ah,af){if(Q.ie&&Q.mac){return}var ae=k.getElementsByTagName("head")[0];if(!ae){return}var ab=(ah&&typeof ah=="string")?ah:"screen";if(af){p=null;K=null}if(!p||K!=ab){var ad=G("style");ad.setAttribute("type","text/css");ad.setAttribute("media",ab);p=ae.appendChild(ad);if(Q.ie&&Q.win&&typeof k.styleSheets!=H&&k.styleSheets.length>0){p=k.styleSheets[k.styleSheets.length-1]}K=ab}if(Q.ie&&Q.win){if(p&&typeof p.addRule==u){p.addRule(ag,ac)}}else{if(p&&typeof k.createTextNode!=H){p.appendChild(k.createTextNode(ag+" {"+ac+"}"))}}}function z(ad,ab){if(!n){return}var ac=ab?"visible":"hidden";if(N&&c(ad)){c(ad).style.visibility=ac}else{y("#"+ad,"visibility:"+ac)}}function P(ac){var ad=/[\\\"<>\.;]/;var ab=ad.exec(ac)!=null;return ab&&typeof encodeURIComponent!=H?encodeURIComponent(ac):ac}var e=function(){if(Q.ie&&Q.win){window.attachEvent("onunload",function(){var ag=M.length;for(var af=0;af<ag;af++){M[af][0].detachEvent(M[af][1],M[af][2])}var ad=R.length;for(var ae=0;ae<ad;ae++){B(R[ae])}for(var ac in Q){Q[ac]=null}Q=null;for(var ab in swfobject){swfobject[ab]=null}swfobject=null})}}();function D(ac,ad,ab){var ae=document.createElement("script");ae.setAttribute("type","text/javascript");ae.setAttribute("src",ac);ad.appendChild(ae)}function d(ao,ak,an,ab,ad,ag,ah,ac,ae){var ap=document.createElement("style");ap.type="text/css";var am=document.createTextNode("html { height: 100%; }\nbody { height: 100%; overflow: hidden; margin: 0px; }");if(ap.styleSheet){ap.styleSheet.cssText=am.nodeValue}else{ap.appendChild(am)}document.getElementsByTagName("head")[0].appendChild(ap);var aj=document.createElement("meta");aj.name="viewport";aj.content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0";document.getElementsByTagName("head")[0].appendChild(aj);var ai=document.createElement("meta");ai.name="apple-mobile-web-app-capable";ai.content="yes";document.getElementsByTagName("head")[0].appendChild(ai);var af=document.getElementById(ao);af.id="panoStudioViewerDIV";af.setAttribute("data-panosrc",ab);af.setAttribute("data-panodiv",ao);var al=document.createElement("div");al.id=ao;al.setAttribute("style","display: none;");af.appendChild(al);O(function(){if(ae){D("panoStudioViewerIE.js",af,ab)}else{if(ah){D("panoStudioViewerWebkit.js",af,ab)}else{if(ac){D("panoStudioViewerFirefox.js",af,ab)}}}})}return{registerObject:function(af,ab,ae,ad){if(Q.w3&&af&&ab){var ac={};ac.id=af;ac.swfVersion=ab;ac.expressInstall=ae;ac.callbackFn=ad;q[q.length]=ac;z(af,false)}else{if(ad){ad({success:false,id:af})}}},getObjectById:function(ab){if(Q.w3){return C(ab)}},embed:function(am,ae,ab,ad,ak,af,aq,ag){var ao=w.userAgent.toLowerCase();var aj=(ao.indexOf("safari")!=-1)&&(ao.indexOf("applewebkit")!=-1);if(aj&&ao.indexOf("android")!=-1){aj=((parseInt(ao.split("android")[1]))>=4);if(ao.indexOf("opr/")!=-1){aj=(parseInt(ao.split("opr/")[1].split(".")[0])>=14)}}if(aj&&ao.indexOf("chrome/")!=-1){aj=(parseFloat(ao.substring(ao.indexOf("chrome/")+7))>=20)}var ac=(ao.indexOf("gecko")!=-1)&&(ao.indexOf("firefox")!=-1)&&(parseFloat(ao.substring(ao.indexOf("firefox")+8))>=18);var al=(ao.indexOf("msie")!=-1)?(parseInt(ao.split("msie")[1])>9?true:false):false;var ar="9.0.28";if(r){r()}if((aj||ac||al)&&ak=="true"&&(!J(ar)||(af=="true"))){d(am,ae,ab,ad,ak,af,aj,ac,al)}else{if(ab=="100%"){var at=document.createElement("style");at.type="text/css";var ah=document.createTextNode("html { height: 100%; }\nbody { height: 100%; overflow: hidden; margin: 0px; }");if(at.styleSheet){at.styleSheet.cssText=ah.nodeValue}else{at.appendChild(ah)}document.getElementsByTagName("head")[0].appendChild(at);var ai=document.createElement("meta");ai.name="viewport";ai.content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densitydpi=device-dpi";document.getElementsByTagName("head")[0].appendChild(ai)}var ap={allowScriptAccess:"always",allowNetworking:"all",allowFullScreen:"true",bgcolor:"#000000",wmode:"gpu"};for(var an in aq){ap[an]=aq[an]}this.embedSWF("/spatial/public/Panorama/panoStudioViewer.swf",am,ae,ab,ar,"",{pano:ad,elemID:am},ap,{style:"margin: auto; padding:0;"},function(av){if(av.success==false){var au=document.getElementById(am);au.id="panoStudioViewerDIV";if(ag!=undefined&&ag!=""){au.innerHTML=ag}else{au.innerHTML='<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>'}}})}},panoInit:function(){panoInit_()},embedSWF:function(af,al,ai,ak,ac,ae,ad,ah,aj,ag){var ab={success:false,id:al};if(Q.w3&&!(Q.wk&&Q.wk<312)&&af&&al&&ai&&ak&&ac){z(al,false);O(function(){ai+="";ak+="";var an={};if(aj&&typeof aj===u){for(var ap in aj){an[ap]=aj[ap]}}an.data=af;an.width=ai;an.height=ak;var aq={};if(ah&&typeof ah===u){for(var ao in ah){aq[ao]=ah[ao]}}if(ad&&typeof ad===u){for(var am in ad){if(typeof aq.flashvars!=H){aq.flashvars+="&"+am+"="+ad[am]}else{aq.flashvars=am+"="+ad[am]}}}if(J(ac)){var ar=x(an,aq,al);if(an.id==al){z(al,true)}ab.success=true;ab.ref=ar}else{if(ae&&E()){an.data=ae;T(an,aq,al,ag);return}else{z(al,true)}}if(ag){ag(ab)}})}else{if(ag){ag(ab)}}},switchOffAutoHideShow:function(){n=false},ua:Q,getFlashPlayerVersion:function(){return{major:Q.pv[0],minor:Q.pv[1],release:Q.pv[2]}},hasFlashPlayerVersion:J,createSWF:function(ad,ac,ab){if(Q.w3){return x(ad,ac,ab)}else{return undefined}},showExpressInstall:function(ad,ae,ab,ac){if(Q.w3&&E()){T(ad,ae,ab,ac)}},removeSWF:function(ab){if(Q.w3){B(ab)}},createCSS:function(ae,ad,ac,ab){if(Q.w3){y(ae,ad,ac,ab)}},addDomLoadEvent:O,addLoadEvent:v,getQueryParamValue:function(ae){var ad=k.location.search||k.location.hash;if(ad){if(/\?/.test(ad)){ad=ad.split("?")[1]}if(ae==null){return P(ad)}var ac=ad.split("&");for(var ab=0;ab<ac.length;ab++){if(ac[ab].substring(0,ac[ab].indexOf("="))==ae){return P(ac[ab].substring((ac[ab].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var ab=c(V);if(ab&&m){ab.parentNode.replaceChild(m,ab);if(U){z(U,true);if(Q.ie&&Q.win){m.style.display="block"}}if(I){I(F)}}a=false}}}}();