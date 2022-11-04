const card = document.querySelector(".card");
const input = document.querySelector("input");
const btns = document.querySelectorAll("button");
import { fetchData } from "./api/FetchData.js";
import { image_gender } from "./utils/calculations.js";
import { TrueorFalse } from "./utils/calculations.js";
import { banner } from "./utils/calculations.js";

function disp(dataFetched) {
  let html = "";
  dataFetched.forEach((el) => {
    html +=
      `<div class = "character">` +
      banner(el) +
      `<h1> ${TrueorFalse(el.name)}</h1>` +
      `<br>` +
      `<div class = "bl">` +
      image_gender(el) +
      `<br>` +
      `<div class= "con">` +
      `<b>Alternate Name: </b>` +
      TrueorFalse(el.alternate_names) +
      `<br>` +
      `<b>Species: </b>` +
      TrueorFalse(el.species) +
      `<br>` +
      `<b> Gender: </b>` +
      TrueorFalse(el.gender) +
      `<br>` +
      "<b> House: </b> " +
      TrueorFalse(el.house) +
      `<br>` +
      "<b> Date Of Birth: </b> " +
      TrueorFalse(el.dateOfBirth) +
      `<br>` +
      "<b> Year Of Birth: </b> " +
      TrueorFalse(el.yearOfBirth) +
      `<br>` +
      "<b> Wizard: </b> " +
      TrueorFalse(el.wizard) +
      `<br>` +
      "<b> Ancestry: </b>" +
      TrueorFalse(el.ancestry) +
      `<br>` +
      " <b> Eye colour: </b>" +
      `<i style="color: ${el.eyeColour};" class="fa-solid fa-eye "></i>` +
      `<br>` +
      "<b>Patronus: </b>" +
      TrueorFalse(el.patronus) +
      "<br>" +
      "<b>Hogwarts Student: </b>" +
      TrueorFalse(el.hogwartsStudent) +
      `<br>` +
      "<b>Hogwarts Staff: </b>" +
      TrueorFalse(el.hogwartsStaff) +
      `<br>` +
      "<b>Actor: </b>" +
      `<p>${el.actor} </p>` +
      `<br>` +
      "<b>Alternate actors: </b>" +
      TrueorFalse(el.alternate_actors) +
      `<br>` +
      "<b>Alive: </b>" +
      TrueorFalse(el.alive) +
      `</div>` +
      `</div>` +
      `</div>`;
  });
  card.innerHTML = html;
}

const Fetched = await fetchData();
let dataFetched = await Fetched;

(async () => {
  dataFetched = await Fetched;
  disp(dataFetched);
})();

input.addEventListener("keydown", (e) => {
  let search = e.target.value;
  dataFetched = Fetched.filter((e) =>
    e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  disp(dataFetched);
});

btns.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText == "All") {
      disp(Fetched);
    } else {
      dataFetched = Fetched.filter((e) => e.house.includes(element.innerText));
      disp(dataFetched);
      disp(dataFetched);
    }
  });
});