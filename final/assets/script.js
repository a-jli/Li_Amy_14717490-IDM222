console.log('loaded!');
//light and darkmode toggle
window.addEventListener("DOMContentLoaded", function(){

  const lightToggleButton = document.querySelector(".lighting-toggle-button");
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark"){
    document.body.classList.add("light-mode");
  }

  lightToggleButton.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");
    lightToggleButton.textContent =
    document.body.classList.contains("light-mode") ? "✹" : "⟡";
    
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
        document.querySelector(".lighting-toggle-button").style.backgroundColor = "#dbc85d";
        document.querySelector(".lighting-toggle-button").style.color = "#000000";
    } else {
        localStorage.setItem("theme", "light");
    }

  });

});

s
