(()=>{var e={896:()=>{const e=document.querySelector(".header__dark-mode"),t=document.querySelector("body"),o=localStorage.getItem("mode")?localStorage.getItem("mode"):null;o&&t.classList.add("dark-mode"),e.addEventListener("click",(()=>{t.classList.toggle("dark-mode"),o?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}(()=>{"use strict";const e=e=>{e?document.querySelector(".loader").classList.remove("hidden"):document.querySelector(".loader ").classList.add("hidden")},t=async t=>{e(!0);const o=await fetch(t);if(!o.ok)throw e(!1),new Error("Something went wrong!!!");const n=await o.json();return e(!1),n},n=document.querySelector(".cards"),a=e=>{e.forEach((e=>{const t=e.name.common,o=e.population,a=e.region,c=e.capital?e.capital[0]:"No Capital",r=e.flags.svg,s=document.createElement("li");s.classList.add("cards__item"),s.innerHTML=`\n            <a href="./about.html?country=/name/${t}">\n            <img src=${r} alt="germany-flag" width="267" height="160">\n            <div class="cards__item-inner">\n                <h3 class="cards__title">${t}</h3>\n                <p class="population">Population: <span>${o}</span></p>\n                <p class="region">Region: <span>${a}</span></p>\n                <p class="capital">Capital: <span>${c}</span></p>\n            </div>\n            </a>\n        `,n.appendChild(s)}))};document.querySelector(".country-info"),o(896);const c=document.querySelector(".search"),r=document.querySelector(".cards");c.search.addEventListener("input",(()=>{const e=c.search.value.toLowerCase(),t=document.querySelectorAll(".cards__item");document.querySelectorAll(".cards__title").forEach(((o,n)=>{o.textContent.toLowerCase().includes(e)?t[n].style.display="block":t[n].style.display="none"}))}));const s=document.querySelectorAll(".search__select-list li"),l=document.querySelector(".search__select span");s.forEach((e=>{e.addEventListener("click",(()=>{let o;r.textContent="",l.textContent=e.textContent,o="All"==e.textContent?"https://restcountries.com/v3.1/all":`https://restcountries.com/v3.1/region/${e.textContent}`,t(o).then((e=>{a(e)})).catch((e=>{alert(e.message)}))}))})),t("https://restcountries.com/v3.1/all").then((e=>{a(e)})).catch((e=>{console.log(e.message)}))})()})();