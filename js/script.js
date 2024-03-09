import { movies } from "./db.js";
let list = document.querySelector(".promo__interactive-list");
let video = document.querySelector(".video");
let p = document.querySelector(".desc-p");

for (let item of movies) {
  let li = document.createElement("li");
  let del = document.createElement("div");
  let li3 = document.createElement("li");

  li.innerText = item.Title;
  li.classList.add("promo__interactive-item");
  del.classList.add("delete");

  li.append(del);
  list.append(li);


  let forma = document.querySelector(".add");
  forma.onsubmit = (event) => {
    event.preventDefault();
    let fd = new FormData(forma);
    fd.forEach((value, key) => {
        
        li3.innerHTML = value
        li3.classList.add("promo__interactive-item");
        del.classList.add("delete");
        list.append(li3);
        li3.append(del);
    });
  };
  



 
  del.onclick = () => {
    li.remove();
    
    li3.remove()

  };
  li.onclick = () => {
    video.src = item.Website;
    p.innerHTML = "";
    p.style.padding = "";
  };
  li.ondblclick = () => {
    p.style.padding = "50px 30px";
    p.innerHTML = item.Desc;

    video.src = "";
  };
}

function reloadGenres() {
  let ul = document.querySelector(".promo__menu-list ul");

  for (let item of movies) {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.innerHTML = item.Genre;

    a.classList.add("promo__menu-item");

    li.append(a);
    ul.append(li);

    a.onclick = () => {
      if (a.innerHTML === item.Genre) {
        console.log(item.Title);
        list.innerHTML = "";
        let li2 = document.createElement("li");
        let del2 = document.createElement("div");

        li2.innerText = item.Title;
        li2.classList.add("promo__interactive-item");
        del2.classList.add("delete");

        li2.append(del2);
        list.append(li2);

        li2.onclick = () => {
          video.src = item.Website;
          p.innerHTML = "";
          p.style.padding = "";
        };
        li2.ondblclick = () => {
          p.style.padding = "50px 30px";
          p.innerHTML = item.Desc;

          video.src = "";
        };
      }

      let allLinks = document.querySelectorAll(".promo__menu-item");
      allLinks.forEach((link) => {
        link.classList.remove("promo__menu-item_active");
      });

      a.classList.add("promo__menu-item_active");
    };
  }
}

reloadGenres();
