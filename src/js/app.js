import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

        var new_div = document.createElement('div');
        new_div.setAttribute('class','image');
        new_div.setAttribute('className','image');

        var new_image = document.createElement('img');
        new_image.setAttribute('src','./images/js.jpg');
        new_image.setAttribute('class','img');
        new_div.appendChild(new_image);
       
        document.querySelector('.main').appendChild(new_div);

        // document.querySelector('.image').
        var get_div = document.querySelector('.image');
        get_div.addEventListener('click',(event1) => {
          event1.preventDefault();
          get_div.style.transform = "scale(2)";
        });
});
