import { movies } from "./db.js";

function reload(arr, place, genre) {
  place.innerHTML = "";
  for (let item of arr) {
    let idx = arr.sort().indexOf(item) + 1;
    let list = document.createElement("li");
    let deleteDiv = document.createElement("div");
    list.classList.add("promo__interactive-item");
    deleteDiv.classList.add("delete");
let forma1 = document.querySelector(".add");
forma1.onsubmit = (event) => {
  event.preventDefault();
  let fd = new FormData(forma1);
  fd.forEach((value, key) => {
    let list = document.createElement("li");
    let deleteDiv = document.createElement("div");
    list.innerHTML = value;
    list.classList.add("promo__interactive-item");
    deleteDiv.classList.add("delete");
    // Добавляем новые элементы в список
    let boxListtt = document.querySelector('.promo__interactive-list');
    list.appendChild(deleteDiv);
    boxListtt.appendChild(list);

    
    deleteDiv.onclick = () => {
      arr.splice(idx - 1, 1);
      reload(arr, place, genre);
    };
  });
};

    if (genre === 'All' ) {
      place.append(list);
    } 
     if (genre === item.Genre) {
      place.append(list);
    }

    let lists = document.querySelectorAll(".promo__interactive-item");

    let listIdx = 0;

    lists.forEach((list, idx) => {
      listIdx = idx;
    });

    list.append(listIdx + 1 + ". " + item.Title);

    list.append(deleteDiv);

    list.onclick = () => {
      console.log("asdd");

      newIframe.style.display = "none";
      let bg = document.querySelector(".promo__bg");
      let janre = document.querySelector(".promo__genre");
      let title = document.querySelector(".promo__title");
      let imdb = document.querySelector(".imdb");
      let kinopoisk = document.querySelector(".kinopoisk");
      let descr = document.querySelector(".promo__descr");
      bg.style.background = `url(${item.Poster}) no-repeat center / cover`;
      bg.style.height = '460px'
      bg.style.display = "block";
      janre.innerHTML = item.Genre;
      title.innerHTML = item.Title;
      descr.innerHTML = item.Plot;
      imdb.innerHTML = "IMDb: " + item.imdbRating;
      kinopoisk.innerHTML = "Кинопоиск: " + item.Metascore;
    };

 

    deleteDiv.onclick = () => {
      arr.splice(idx - 1, 1);
      reload(arr, place, genre);
    };

    let iframeContainer = document.getElementById("iframeContainer");
    let newIframe = document.querySelector(".iframe");
    newIframe.style.display = "none";
    list.ondblclick = () => {
      //   newIframe.innerHTML = "";

      newIframe.style.display = "block";
      bg.style.display = "none";
      newIframe.width = "100%";
      newIframe.height = "430";
      newIframe.allowFullscreen = true;
      newIframe.src = item.Website;
    };
  }
}

let addChilds = document.querySelectorAll(".promo__adv div, img");
let janre = document.querySelector(".promo__genre");

let bg = document.querySelector(".promo__bg");

bg.style.background = `url("./img/bg.jpg") no-repeat center / cover`;

let listBox = document.querySelector(".promo__interactive-list");

let genres = movies.map((item) => item.Genre);

let ulGenres = document.querySelector(".ul-genres");

function GenresUpdate(arr, place) {
  for (let item of arr) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.classList.add("promo__menu-item");
    a.href = "#";

    place.append(li);
    li.append(a);
    a.append(item);
  }

  let AGenres = document.querySelectorAll(".promo__menu-item");

  let prev = 0;
  AGenres.forEach((item, idx) => {
    AGenres[prev].classList.add("promo__menu-item_active");
    item.onclick = () => {
      AGenres[prev].classList.remove("promo__menu-item_active");
      item.classList.add("promo__menu-item_active");
      reload(movies, listBox, item.innerText);
      prev = idx;
    };
  });
}

GenresUpdate(genres, ulGenres);

reload(movies, listBox, "All");
