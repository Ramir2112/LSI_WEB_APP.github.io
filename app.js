let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let buttons = [btn1, btn2, btn3, btn4, btn5, btn6];

let selectedItems = [];

buttons.forEach((button) => {
  button.addEventListener("click", function() {
    if (button.textContent === "Add") {
      button.textContent = "Delete";
      button.style.background = "red";
      button.style.color = "white";
      selectedItems.push(button.id.replace("btn", ""));
    } else {
      button.textContent = "Add";
      button.style.background = "rgb(248, 168, 24)";
      button.style.color = "#fff";
      selectedItems = selectedItems.filter((item) => item !== button.id.replace("btn", ""));
    }

    if (selectedItems.length > 0) {
      tg.MainButton.setText(`Вы выбрали товары: ${selectedItems.join(", ")}`);
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  });
});

//btn1.addEventListener("click", function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 1!");
//		item = "1";
//		tg.MainButton.show();
//	}
//});
//
//btn2.addEventListener("click", function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 2!");
//		item = "2";
//		tg.MainButton.show();
//	}
//});
//
//btn3.addEventListener("click", function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 3!");
//		item = "3";
//		tg.MainButton.show();
//	}
//});
//
//btn4.addEventListener("click", function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 4!");
//		item = "4";
//		tg.MainButton.show();
//	}
//});
//
//btn5.addEventListener("click", function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 5!");
//		item = "5";
//		tg.MainButton.show();
//	}
//});
//
//btn6.addEventListener("click", function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали товар 6!");
//		item = "6";
//		tg.MainButton.show();
//	}
//});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(JSON.stringify(selectedItems));
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








