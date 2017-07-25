const BIRTH_STORE=function(){let t,e,n,i=!1,a={};return n=function(){let t=new Date,e=function(t){return t%4||t%100==0&&t%400?0:1};return t.myGetDay=function(){let t=this.getDay();return 0===t?6:t-1},{curDay:t.getDate(),curDate:t.myGetDay(),curMonth:t.getMonth()+1,curYear:t.getFullYear(),daysInMonth:function(t,n){return 2===t?28+e(n):31-(t-1)%7%2}}}(),e=function(t){try{let e=window[t],n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}}("localStorage"),a.shouldBeSaved=function(){return i},a.dontSaveDataToLocalStorageAgain=function(){i=!1},a.getBirthList=function(){return t},a.listLength=function(){return t.length},a.getRandomCode=function(t){let e="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=n.length;for(let a=0;a<t;a+=1)e+=n.charAt(Math.floor(Math.random()*i));return e},a.addData=function(e){t.push(e),i=!0},a.find=function(e,n,a){let r,l=t.length;if(Array.isArray(e))e.forEach(function(e){t.forEach(function(t,i){t.ID===e&&n&&"function"==typeof n&&(a&&"object"==typeof a?n.call(a,i):n(i))})});else if("string"==typeof e)for(let i=0;i<l;i+=1)if(t[i].ID===e)return n&&"function"==typeof n&&(a&&"object"==typeof a?n.call(a,i):n(i)),i;i&&(r=t.filter(function(t,e){return t}),this.replaceData(r))},a.editData=function(e,n,a,r){if(void 0===r)return function(r){t[r].name=e,t[r].birthDay=n,t[r].note=a,i=!0};t[r].name=e,t[r].birthDay=n,t[r].note=a,i=!0},a.rmData=function(e){delete t[e],i=!0},a.rmAllData=function(){t=[],i=!0},a.saveDataToLocalStorage=function(){localStorage.birthdayList=JSON.stringify(t)},a.replaceData=function(e){t=e},a.rangeOfWeek=function(t,e){let i=[],a=t||n.curDay,r=e>-1?e:n.curDate,l=n.curMonth,c=n.curYear,s=n.daysInMonth,o=l-1==0?s(12,c-1):s(l-1,c),d=s(l,c),R=(l+1===13?s(1,c+1):s(l+1,c),a-r+(a-r<1?o:0)),u=a+7-r-1-(a+7-r-1>d?d:0);if(R>u){let t=a>15?d:o;i.push([],[]);for(let e=R;e<=t;e++)i[0].push(e);for(let t=1;t<=u;t++)i[1].push(t)}else for(let t=R;t<=u;t++)i.push(t);return i},a.filterBirthInMonth=function(t,e){return t.filter(function(t,n){return t.birthDay[1]===e}).sort(function(t,e){return t.birthDay[0]-e.birthDay[0]})},a.filterBirthInWeek=function(e){let i=n.curDay,a=n.curMonth,r=(n.curYear,this.filterBirthInMonth(t,a-1==0?12:a-1)),l=this.filterBirthInMonth(t,a),c=this.filterBirthInMonth(t,a+1===13?1:a+1);if(Array.isArray(e[0])){let t,n;return i>15?(t=l.filter(function(t,n){return-1!==e[0].indexOf(t.birthDay[0])}).sort(function(t,e){return t.birthDay[0]-e.birthDay[0]}),n=c.filter(function(t,n){return-1!==e[1].indexOf(t.birthDay[0])}).sort(function(t,e){return t.birthDay[0]-e.birthDay[0]})):(t=r.filter(function(t,n){return-1!==e[0].indexOf(t.birthDay[0])}).sort(function(t,e){return t.birthDay[0]-e.birthDay[0]}),n=l.filter(function(t,n){return-1!==e[1].indexOf(t.birthDay[0])}).sort(function(t,e){return t.birthDay[0]-e.birthDay[0]})),t.concat(n)}return l.filter(function(t,n){return-1!==e.indexOf(t.birthDay[0])}).sort(function(t,e){return t.birthDay[0]-e.birthDay[0]})},{isStorageAvailable:e,getTime:n,getBirthList:a.getBirthList,listLength:a.listLength,getRandomID:a.getRandomCode,addData:a.addData,find:a.find,editData:a.editData,rmData:a.rmData,rmAllData:a.rmAllData,shouldBeSaved:a.shouldBeSaved,dontSaveDataAgain:a.dontSaveDataAgain,saveDataToLocalStorage:a.saveDataToLocalStorage,replaceData:a.replaceData,rangeOfWeek:a.rangeOfWeek,filterBirthInMonth:a.filterBirthInMonth,filterBirthInWeek:a.filterBirthInWeek}}();if(BIRTH_STORE.isStorageAvailable){const t=void 0!==localStorage.birthdayList?JSON.parse(localStorage.birthdayList):[];BIRTH_STORE.replaceData(t)}else alert("Trình duyệt hiện tại của bạn không hỗ trợ lưu trữ dữ liệu ngoại tuyến.\nChúng tôi sẽ không thể lưu lại dữ liệu bạn nhập hiện tại.");document.addEventListener("DOMContentLoaded",function(){function t(t){document.body.removeChild(t.target)}function e(){switch(B.length){case 0:d.classList.remove("lighterTrash"),h.classList.add("fa-plus"),h.classList.remove("fa-pencil");break;case 1:d.classList.add("lighterTrash"),h.classList.remove("fa-plus"),h.classList.add("fa-pencil");break;case 2:h.classList.add("fa-plus"),h.classList.remove("fa-pencil")}}const n=document.getElementsByClassName("overlay")[0],i=document.getElementsByClassName("birthBar")[0],a=i.children[0],r=(document.getElementById("delAllBtn"),document.getElementById("rstrDataBtn")),l=document.getElementById("inptFileBtn"),c=document.getElementById("bckpDataBtn"),s=document.getElementsByClassName("navItem"),o=s[0],d=s[1],R=s[2],u=s[3],h=u.children[0],E=document.getElementsByClassName("sortBtnGroup")[0],T=E.children,S=T[0],D=T[1],f=T[2],H=document.getElementsByClassName("backupBtnGroup")[0],L=document.getElementsByClassName("birthList")[0],I=L.children;let B=[];BIRTH_STORE.HANDLERS={createDOMIn:function(t,e,n,i){const a=document.createElement(t);return e&&n&&(a[e]=n),i&&i.appendChild(a),a},addItem:function(t){let e,n,i,a,r,l;e=BIRTH_STORE.HANDLERS.createDOMIn("li",null,null,L),(n=BIRTH_STORE.HANDLERS.createDOMIn("input","type","checkbox",e)).id=t.ID,BIRTH_STORE.HANDLERS.createDOMIn("label","for",t.ID,e),(i=BIRTH_STORE.HANDLERS.createDOMIn("span","textContent",t.ID,e)).style.display="none",BIRTH_STORE.HANDLERS.createDOMIn("h3","textContent",t.name,e),BIRTH_STORE.HANDLERS.createDOMIn("p","textContent",t.note||".",e),a=BIRTH_STORE.HANDLERS.createDOMIn("div","textContent","Day",e),r=BIRTH_STORE.HANDLERS.createDOMIn("div","textContent","Month",e),l=BIRTH_STORE.HANDLERS.createDOMIn("div","textContent","Year",e),a.className=r.className=l.className="birthBlock",BIRTH_STORE.HANDLERS.createDOMIn("br",null,null,a),BIRTH_STORE.HANDLERS.createDOMIn("br",null,null,r),BIRTH_STORE.HANDLERS.createDOMIn("br",null,null,l),BIRTH_STORE.HANDLERS.createDOMIn("span","textContent",t.birthDay[0],a),BIRTH_STORE.HANDLERS.createDOMIn("span","textContent",t.birthDay[1],r),BIRTH_STORE.HANDLERS.createDOMIn("span","textContent",t.birthDay[2],l)},displayItems:function(t){t.forEach(function(t,e){BIRTH_STORE.HANDLERS.addItem(t)},this)},rstrData:"FileReader"in window?function(){BIRTH_STORE.HANDLERS.isEditing?alert("Hãy lưu lại item bạn đang chỉnh sửa."):l.click()}:function(){alert("Rất tiếc, trình duyệt của bạn không hỗ trợ HTML5 FileReader. Vì vậy, chúng tôi không thể khôi phục dữ liệu của bạn.")},inptFile:function(t){let e=t.target.files[0];if(e){let t=new FileReader;t.addEventListener("load",function(t){let e=t.target.result,n=JSON.parse(e);BIRTH_STORE.replaceData(n),BIRTH_STORE.saveDataToLocalStorage()}),t.readAsText(e,"UTF-8")}BIRTH_STORE.HANDLERS.refreshDisplay()},bckpData:function(){if("Blob"in window){let e=prompt("Hãy đặt tên tập tin dùng để sao lưu dữ liệu","birthdays_backupFile.txt");if(e){let n=JSON.stringify(BIRTH_STORE.getBirthList()).replace(/\n/g,"\r\n"),i=new Blob([n],{type:"text/plain"});if("msSaveOrOpenBlob"in navigator)navigator.msSaveOrOpenBlob(i,e);else{let n=document.createElement("a");n.download=e,n.innerHTML="Download File","webkitURL"in window?n.href=window.webkitURL.createObjectURL(i):(n.href=window.URL.createObjectURL(i),n.addEventListener("click",t),n.style.display="none",document.body.appendChild(n)),n.click()}}}else alert("Rất tiếc, trình duyệt của bạn không hỗ trợ HTML5 Blob. Chúng tôi không thể sao lưu dữ liệu của bạn thành 1 tập tin.")},delAll:function(){BIRTH_STORE.listLength?confirm("Bạn có chắc chắn muốn xoá hết dữ liệu không?")&&(L.innerHTML="",BIRTH_STORE.rmAllData(),B=[],e()):alert("Không có dữ liệu để xoá")},dispCurWeek:function(){if(BIRTH_STORE.HANDLERS.isEditing)alert("Hãy lưu lại item bạn đang chỉnh sửa.");else{let t;L.innerHTML="",t=BIRTH_STORE.filterBirthInWeek(BIRTH_STORE.rangeOfWeek()),BIRTH_STORE.HANDLERS.displayItems(t),L.classList.add("hideAllCheckboxInList"),B=[],e(),i.classList.contains("hiddingBar")||u.click(),BIRTH_STORE.HANDLERS.changeState(0)}},dispCurMonth:function(){if(BIRTH_STORE.HANDLERS.isEditing)alert("Hãy lưu lại item bạn đang chỉnh sửa.");else{let t;L.innerHTML="",t=BIRTH_STORE.filterBirthInMonth(BIRTH_STORE.getBirthList(),BIRTH_STORE.getTime.curMonth),BIRTH_STORE.HANDLERS.displayItems(t),L.classList.add("hideAllCheckboxInList"),B=[],e(),i.classList.contains("hiddingBar")||u.click(),BIRTH_STORE.HANDLERS.changeState(1)}},dispAll:function(){BIRTH_STORE.HANDLERS.isEditing?alert("Hãy lưu lại item bạn đang chỉnh sửa."):(L.innerHTML="",BIRTH_STORE.HANDLERS.displayItems(BIRTH_STORE.getBirthList()),L.classList.add("hideAllCheckboxInList"),B=[],e(),i.classList.contains("hiddingBar")||u.click(),BIRTH_STORE.HANDLERS.changeState(2))},clsTab:function(t){return t=t||window.event,BIRTH_STORE.shouldBeSaved()&&(console.log("Dữ liệu đã có sự thay đổi, đang lưu dữ liệu..."),BIRTH_STORE.saveDataToLocalStorage(),BIRTH_STORE.dontSaveDataToLocalStorageAgain()),t&&(t.returnValue="Sure?"),"Sure?"},delCheckedItems:function(){0!==B.length&&confirm("Are you sure?")&&(BIRTH_STORE.HANDLERS.isEditing&&(BIRTH_STORE.HANDLERS.isEditing=!1,a.reset()),B.forEach(function(t){BIRTH_STORE.HANDLERS.findDOM(t).remove()}),BIRTH_STORE.find(B,BIRTH_STORE.rmData),B=[],e(),i.classList.contains("hiddingBar")||u.click())},rmItem:function(t){B.forEach(function(t){BIRTH_STORE.HANDLERS.findDOM(t).remove()}),t.remove()},addOrEdit:function(t){h.classList.contains("fa-pencil")?BIRTH_STORE.HANDLERS.editItem():(i.classList.toggle("hiddingBar"),h.classList.toggle("rotate-plus"),n.classList.toggle("hide"),i.classList.contains("hiddingBar")||a.children[0].focus())},editItem:function(){if(BIRTH_STORE.HANDLERS.isEditing)alert("Hãy lưu lại item bạn đang chỉnh sửa trước khi chỉnh sửa item khác.");else{let t=BIRTH_STORE.HANDLERS.findDOM(B[0]),e=t.children,r=e[2].textContent,l=e[3].textContent,c=e[4].textContent,s=e[5].children[1].textContent,o=e[6].children[1].textContent,d=e[7].children[1].textContent,R=s+"/"+o+"/"+d,u=a.children[0],E=a.children[1],T=a.children[2],S=a.children[3],D=a.children[4];i.classList.contains("hiddingBar")&&(i.classList.remove("hiddingBar"),h.classList.add("rotate-plus"),n.classList.remove("hide")),u.value=l,E.value=R,T.value=c,S.value=r,D.textContent="Save",a.children[0].focus(),BIRTH_STORE.HANDLERS.curItem=t,BIRTH_STORE.HANDLERS.isEditing=!0}},saveItem:function(){let t=BIRTH_STORE.HANDLERS.curItem.children,e=t[2].textContent,r=t[3],l=t[4],c=t[5].children[1],s=t[6].children[1],o=t[7].children[1],d=a.children[0].value,R=a.children[1].value.split("/").map(function(t,e){return~~t}),u=a.children[2].value,E=a.children[3],T=BIRTH_STORE.editData(d,R,u);BIRTH_STORE.find(e,T),r.textContent=d,l.textContent=u,c.textContent=R[0],s.textContent=R[1],o.textContent=R[2],E.textContent="Submit",a.reset(),i.classList.add("hiddingBar"),h.classList.remove("rotate-plus"),n.classList.add("hide"),BIRTH_STORE.HANDLERS.isEditing=!1},sbmtForm:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1;let e=a.children[0],n=a.children[1],i=a.children[2],r=a.children[3],l=a.children[4];if("Submit"===l.textContent)if(r.value=BIRTH_STORE.getRandomID(4),""===e.value)alert("Hãy nhập tên người bạn muốn lưu giữ ngày sinh nhật!");else{let t=n.value.split("/").map(function(t,e){return~~t}),l={ID:r.value,name:e.value,birthDay:t,note:i.value};BIRTH_STORE.HANDLERS.addItem(l),BIRTH_STORE.addData(l),a.reset(),a.children[0].focus(),BIRTH_STORE.saveDataToLocalStorage()}else"Save"===l.textContent&&BIRTH_STORE.HANDLERS.saveItem()},longPressOnItem:function(t){let e=t.target,n=(e.children[0],e.children[2]);0===B.length&&(L.classList.remove("hideAllCheckboxInList"),"LI"===e.tagName&&(e.children[0].checked=!0,B.push(n.textContent)))},clckItem:function(t){let n=t.target,i=n.children[0],a=n.children[2];L.classList.contains("hideAllCheckboxInList")||"LI"!==n.tagName||(i.click(),i.checked?-1===B.indexOf(a.textContent)&&B.push(a.textContent):B.indexOf(a.textContent)>-1&&B.splice(B.indexOf(a.textContent),1),e())},findDOM:function(t){let e=I.length;for(let n=0;n<e;n+=1)if(t===I[n].children[2].textContent)return I[n]},changeState:function(t){let e=BIRTH_STORE.HANDLERS.dispState;T[e].classList.remove("presentState"),T[t].classList.add("presentState"),BIRTH_STORE.HANDLERS.dispState=t},refreshDisplay:function(){T[BIRTH_STORE.HANDLERS.dispState].click()},idx:0,curItem:null,isEditing:!1,dispState:0},a.addEventListener("submit",BIRTH_STORE.HANDLERS.sbmtForm.bind(BIRTH_STORE.HANDLERS),!1),r.addEventListener("click",BIRTH_STORE.HANDLERS.rstrData,!1),l.addEventListener("change",BIRTH_STORE.HANDLERS.inptFile,!1),c.addEventListener("click",BIRTH_STORE.HANDLERS.bckpData,!1),window.addEventListener("beforeunload",BIRTH_STORE.HANDLERS.clsTab,!1),u.addEventListener("click",BIRTH_STORE.HANDLERS.addOrEdit.bind(BIRTH_STORE.HANDLERS),!1),S.addEventListener("click",BIRTH_STORE.HANDLERS.dispCurWeek.bind(BIRTH_STORE.HANDLERS),!1),D.addEventListener("click",BIRTH_STORE.HANDLERS.dispCurMonth.bind(BIRTH_STORE.HANDLERS),!1),f.addEventListener("click",BIRTH_STORE.HANDLERS.dispAll.bind(BIRTH_STORE.HANDLERS),!1),L.addEventListener("click",BIRTH_STORE.HANDLERS.clckItem.bind(BIRTH_STORE.HANDLERS),!1),n.addEventListener("click",function(){u.click()}),o.addEventListener("click",function(){H.classList.add("translatedDown100"),E.classList.toggle("translatedDown200")}),R.addEventListener("click",function(){E.classList.add("translatedDown200"),H.classList.toggle("translatedDown100")}),d.addEventListener("click",BIRTH_STORE.HANDLERS.delCheckedItems,!1),function(){function t(t){a=setTimeout(function(){BIRTH_STORE.HANDLERS.longPressOnItem(t)},1e3)}function e(){clearTimeout(a)}function n(){r=setTimeout(BIRTH_STORE.HANDLERS.delAll,1e3)}function i(){clearTimeout(r)}var a,r;L.addEventListener("mousedown",t,!1),L.addEventListener("mouseup",e,!1),L.addEventListener("touchstart",t,!1),L.addEventListener("touchend",e,!1),d.addEventListener("mousedown",n,!1),d.addEventListener("mouseup",i,!1),d.addEventListener("touchstart",n,!1),d.addEventListener("touchend",i,!1)}(),S.click()});