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









//   let frame1 = '<iframe class="strong-shadow" width="710" height="380" src="https://datastudio.google.com/embed/reporting/d4abae97-5b45-4148-b754-e8eab14ce437/page/67PxC" frameborder="0" style="border:0" allowfullscreen></iframe>';
//   let frame2 = '<iframe class="strong-shadow" width="710" height="380" src="https://datastudio.google.com/embed/reporting/bb70e8fa-9b56-4b2d-8377-40e57ab1d703/page/67PxC" frameborder="0" style="border:0" allowfullscreen></iframe>';
//   if ("theme" == "dark") {
//     document.getElementById('frame').innerHTML= frame1;
//   } else {
//     document.getElementById('frame').innerHTML= frame2;
//   }
