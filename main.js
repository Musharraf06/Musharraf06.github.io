function jumpTo(dest) {
  switch (dest) {
    case "about":
      window.scrollTo(0, 769);
      break;
    case "portfolio":
      window.scrollTo(0, 1459);
      break;
    case "skills":
      window.scrollTo(0, 2142);
      break;
    case "education":
      window.scrollTo(0, 3968);
      break;
    case "contact":
      window.scrollTo(0, 4655);
      break;
    default:
      console.log("default section");
      break;
  }
}

const details = (source) => {
  switch (source) {
    case "discuss":
      var hidden = document.querySelector(".discuss-hidden");
      var hidden2 = document.querySelector(".discuss-hidden2");
      hidden.classList.add('hide');
      hidden2.classList.remove('hide');
      break;
    case "popquiz":
      var hidden = document.querySelector(".popquiz-hidden");
      var hidden2 = document.querySelector(".popquiz-hidden2");
      hidden.classList.add('hide');
      hidden2.classList.remove('hide');
      break;
    default:
      console.log("default");
      break;
  }
}

const show = (source) => {
  switch (source) {
    case "discuss":
      var hidden = document.querySelector(".discuss-hidden");
      var hidden2 = document.querySelector(".discuss-hidden2");
      hidden.classList.remove('hide');
      hidden2.classList.add('hide');
      break;
    case "popquiz":
      var hidden = document.querySelector(".popquiz-hidden");
      var hidden2 = document.querySelector(".popquiz-hidden2");
      hidden.classList.remove('hide');
      hidden2.classList.add('hide');
      break;
    default:
      console.log("default");
      break;
  }
}

var project1_index = 0;
var project2_index = 0;
var project1 = [
  "url('./assets/project1/img1.png')",
  "url('./assets/project1/img2.png')",
  "url('./assets/project1/img3.png')",
  "url('./assets/project1/img4.png')",
  "url('./assets/project1/img5.png')",
  "url('./assets/project1/img6.png')",
];
var project2 = [
  // "url('./assets/github.jpg')",
  // "url('./assets/vector.jpg')",
  // "url('./assets/npm.png')",
  // "url('./assets/favicon.ico')",
];

const changesrc = (source, direction) => {
  var img = document.getElementById(source);
  switch (source) {
    case "project1_img":
      if (direction == "left" && project1_index > 0 && project1.length >= 0) {
        project1_index -= 1;
        img.style.backgroundImage = project1[project1_index];
      }
      if (direction == "right" && project1_index <= project1.length - 1) {
        project1_index += 1;
        img.style.backgroundImage = project1[project1_index];
      }
      break;
    case "project2_img":
      if (direction === "left" && project2_index >= 0 && project2.length >= 0) {
        project2_index -= 1;
        img.style.backgroundImage = project2[project2_index];
      }
      if (direction === "right" && project2_index <= project2.length - 1) {
        project2_index += 1;
        img.style.backgroundImage = project2[project2_index];
      }
      break;
    default:
      console.log("default case");
      break;
  }
}

// window.addEventListener("scroll", (event) => {
//   var scroll = this.scrollY;
//   console.log(Math.floor(scroll))
// });