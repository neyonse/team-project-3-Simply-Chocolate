(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();(()=>{const n=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 1200px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n=document.querySelector(".js-buy-now"),t=document.querySelector(".js-open-menu-buy"),s=document.querySelector(".js-close-menu-buy"),o=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 320px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n=document.querySelector(".js-review"),t=document.querySelector(".js-open-menu-review"),s=document.querySelector(".js-close-menu-review"),o=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 320px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n=document.querySelector(".js-subscribe"),t=document.querySelector(".js-open-menu-subscribe"),s=document.querySelector(".js-close-menu-subscribe"),o=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 320px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n=document.querySelector(".js-thank"),t=document.querySelector(".js-open-modal-thank"),s=document.querySelector(".js-close-modal-thank"),o=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open")};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 320px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const n=document.querySelector(".js-feedback"),t=document.querySelector(".js-open-feedback"),s=document.querySelector(".js-close-feedback"),o=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),n.classList.toggle("is-open")};t.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".swiper",{breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1200:{slidesPerView:3,slidesPerGroup:3,spaceBetween:28}},direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});new Swiper(".swiper-products",{breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:18},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:18},1200:{slidesPerView:3,slidesPerGroup:3,spaceBetween:18}},direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".buy-now-slider-container",{breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16}},direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const c=document.querySelector(".how-btm");c.addEventListener("click",l);function l(){var n=document.querySelector(".video-container"),t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/8MEd5muwtX4?autoplay=1"),t.setAttribute("allowfullscreen",""),n.innerHTML="",n.appendChild(t)}