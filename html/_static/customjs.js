let html ='<iframe class="strong-shadow" width="710" height="380" src="https://datastudio.google.com/embed/reporting/bb70e8fa-9b56-4b2d-8377-40e57ab1d703/page/67PxC" frameborder="0" style="border:0" allowfullscreen></iframe>';
let html2 = '<iframe class="strong-shadow" width="710" height="380" src="https://datastudio.google.com/embed/reporting/d4abae97-5b45-4148-b754-e8eab14ce437/page/67PxC" frameborder="0" style="border:0" allowfullscreen></iframe>';

let x = document.querySelector("#lightFrame")

bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');

if (bgColor == 'rgb(255, 255, 255)'){
    x.innerHTML=html
}
else if (bgColor == 'rgb(33, 33, 33)'){
    x.innerHTML=html2
}
else {
    x.innerHTML='<p>null</p>'
}

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// // Adding onClick event listener
// resetButton.addEventListener("click", () => {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
//   counterContainer.innerHTML = visitCount;
// });
