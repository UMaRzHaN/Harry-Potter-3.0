export function image_gender(el) {
    if (el.gender === `male` && el.image === "") {
      return `<img style="height: 180px" src="img/man.png" >`;
    } else if (el.gender === `female` && el.image === "") {
      return `<img style="height: 180px" src="img/woman.png">`;
    } else {
      return `<img src = "${el.image}">`;
    }
  }
  export function TrueorFalse(json) {
    if (json === true) {
      return `<i class="fa-solid fa-check"></i>`;
    } else if (json == false ||json == null) {
      return `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    } else return json;
  }
  export function banner(el) {
    switch (el.house) {
      case "Gryffindor":
        return (
          `<div style = "background-image: url(../img/banners/griffindor.png)" class = "banner">` +
          `</div>`
        );
      case "Slytherin":
        return (
          `<div style = "background-image: url(../img/banners/hufflepuf.png)" class = "banner">` +
          `</div>`
        );
      case "Hufflepuff":
        return (
          `<div style = "background-image: url(../img/banners/Ravenclaw.png)" class = "banner">` +
          `</div>`
        );
      case "Ravenclaw":
        return (
          `<div style = "background-image: url(../img/banners/Slytherin.png)" class = "banner">` +
          `</div>`
        );
      default:
        return `<div style = "display: none" class = "banner">` + `</div>`;
    }
  }
  