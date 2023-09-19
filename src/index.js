import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

/*  mouseover
    keydown
    wheel
    load
    focus
    resize
    scroll
    select
    dblclick
    drag/drop
*/

// Kodlar buraya gelecek!

//SUBMIT BUTTON

const submitForm = document.createElement("form");

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.name = "isim";
inputElement.placeholder = "Güzergah Seç!";

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Yolculuğa Başla!";

submitForm.appendChild(inputElement);
submitForm.appendChild(submitButton);

submitForm.style.backgroundColor = "orange";
submitForm.style.display = "flex";
submitForm.style.flexDirection = "column";
submitForm.style.justifyContent = "center";
submitForm.style.width = "50%";
submitForm.style.alignItems = "center";
submitForm.style.margin = "auto";

inputElement.style.textAlign = "center";

const introForm = document.querySelector(".intro h2");
introForm.append(submitForm);

//MOUSEOVER

const headers = document.querySelectorAll("h2");

headers.forEach((element) => {
  element.addEventListener("mouseover", function (event) {
    event.target.style.color = "orange";
    setTimeout(() => {
      event.target.style.color = "lime";
    }, 1000);
    setTimeout(() => {
      event.target.style.color = "";
    }, 2000);
  });
});

//WHEEL

const mainImg = document.querySelector(".intro img");

mainImg.addEventListener("wheel", function (event) {
  event.preventDefault();
  if (event.deltaY > 0) {
    event.target.style.filter = "brightness(0.5)";
  } else if (event.deltaY < 0) {
    event.target.style.filter = "grayscale(1)";
  }
});

//FOCUS

inputElement.addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "pink";
});

inputElement.addEventListener("blur", (event) => {
  event.target.style.backgroundColor = "";
});

//LOAD

window.addEventListener("load", (e) => {
  alert("Yüklendi");
});

//KEYDOWN
