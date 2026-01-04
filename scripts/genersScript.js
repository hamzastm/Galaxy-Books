import {geners} from "../data/geners.js";

let grid = document.querySelector(`.geners-grid`);

let selectedGener = JSON.parse(localStorage.getItem("gener"));

geners.forEach((gener) => {
  grid.innerHTML += `
        <div class="gener">
            <img class="gener-img" src="${gener.imgSrc}" alt="test">
            <span class="gener-name">${gener.name}</span>
        </div>
  `;
});
  