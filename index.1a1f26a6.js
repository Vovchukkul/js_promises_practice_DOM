var e=document.querySelector("body"),n=document.createElement("div");n.setAttribute("data-qa","notification"),e.appendChild(n);var t=function(e){n.textContent=e,n.className="success"},o=new Promise(function(e,n){setTimeout(function(){n(Error("First promise was rejected"))},3e3),document.addEventListener("click",function(){e("First promise was resolved")})}),i=new Promise(function(e,n){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})}),c=Promise.all([new Promise(function(e,n){document.addEventListener("click",function(){e(!0)})}),new Promise(function(e,n){document.addEventListener("contextmenu",function(n){n.preventDefault(),e(!0)})})]);o.then(t).catch(function(e){n.textContent=e,n.className="warning"}),i.then(t),c.then(function(){t("Third promise was resolved")});
//# sourceMappingURL=index.1a1f26a6.js.map