// window.onload(
//   (addEventListener = () => {
//     var menu_btn = document.getElementById("menu");
//     var slider_menu = document.getElementById("slider_menu");
//     var hidden_menu = document.getElementById("hidden_menu");
//     slider_menu.classList.remove("show-menu");
//     menu_btn.innerHTML = "&#9776";
//     hidden_menu.innerHTML = "ham";
//   })
// );

function show_menu() {
  var menu_btn = document.getElementById("menu");
  var slider_menu = document.getElementById("slider_menu");
  var hidden_menu = document.getElementById("hidden_menu");
  switch (hidden_menu.innerHTML) {
    case "ham":
      slider_menu.classList.add("show-menu");
      // slider_menu.classList.remove("temp");
      menu_btn.innerHTML = "&#10006";
      hidden_menu.innerHTML = "close";
      break;
    case "close":
      slider_menu.classList.remove("show-menu");
      // slider_menu.classList.add("temp");
      menu_btn.innerHTML = "&#9776";
      hidden_menu.innerHTML = "ham";
      break;
    default:
      console.log("error");
  }
}

function close_menu() {
  var menu_btn = document.getElementById("menu");
  var slider_menu = document.getElementById("slider_menu");
  var hidden_menu = document.getElementById("hidden_menu");
  slider_menu.classList.remove("show-menu");
  menu_btn.innerHTML = "&#9776";
  hidden_menu.innerHTML = "ham";
}

function set_dot(num) {
  var dot = document.getElementById(num);
  dot.style.color = "orange";
  console.log(this.scrollY);
  var ids = ["1", "2", "3", "4"];
  ids.forEach(id => {
    if (num !== id) {
      var dot_id = document.getElementById(id);
      dot_id.style.color = "#1e88e5";
    }
  })
}

// window.addEventListener("scroll", (event) => {
//   let scroll = this.scrollY;
//   console.log(Math.floor(scroll))
// });