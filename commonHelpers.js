import{i,S as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function c(t){const s="https://pixabay.com/api/",a=new URLSearchParams({key:"44020863-07a417a47184dc9fb21f180f5",q:t,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${s}?${a}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function u(t){return`<li class="gallery-item">
               <div class="gallery-image-container">
                   <a class="gallery-link" href=${t.largeImageURL}>
                     <img
                       class="gallery-image"
                       src=${t.webformatURL} 
                       alt=${t.tags} />
                   </a>
               </div>
               <div class="property-container">
                 <div class="property">
                   Likes
                   <span class="value">${t.likes}</span>
                 </div>
	             <div class ="property">
                   Views
                   <span class="value">${t.views}</span>
                 </div>
	             <div class ="property">
                   Comments
                   <span class="value">${t.comments}</span>
                 </div>
	             <div class ="property">
                   Downloads
                   <span class="value">${t.downloads}</span>
                 </div>
               </div>    
          </li>`}function m(t){return t.length===0&&i.show({position:"topRight",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB"}),t.map(u).join("")}const p=document.querySelector(".images-form");document.querySelector(".images-container");const d=document.querySelector(".images-form-input"),f=document.querySelector(".gallery");p.addEventListener("submit",y);function y(t){if(t.preventDefault(),d.value.trim()===""){alert("Please enter a search query");return}const s=t.target.elements.query.value.trim();c(s).then(a=>{const o=m(a.hits);f.innerHTML=o}).catch(a=>{console.log(a)})}new l(".gallery-image-container a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
