import { movies } from './db.js'
let list = document. querySelector (".promo__interactive-list");
let video = document. querySelector (".video");

for (let item of movies) {
    console.log(item);
    let li = document.createElement("li");
    let del = document.createElement("div");

    li.innerText = item.Title;
    li.classList.add("promo__interactive-item");
    del.classList.add("delete");

    li.append(del);
    list.append(li);

    del.onclick = () => {
   li.remove()



}
li.onclick = () => {
 video.src = item.Website
}
}
