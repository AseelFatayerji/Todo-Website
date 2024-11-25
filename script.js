let count = 0;
let imp = 0;
let date = 0;

window.onload = function () {
  if (sessionStorage.getItem("user").length == 0) {
    count = 0;
    return;
  }
  document.getElementById("list").innerHTML = sessionStorage.getItem("user");
};
function removeitem(event) {
  let id = event.target.parentElement.id + "main";
  let item = document.getElementById(id);
  item.remove();
  count--;
  sessionStorage.setItem("user", document.getElementById("list").innerHTML);
  sessionStorage.setItem("count", count);
}
function removeitem2(event) {
  let id = event.target.parentElement.parentElement.id;
  item.remove();
  count--;
  sessionStorage.setItem("user", document.getElementById("list").innerHTML);
  sessionStorage.setItem("count", count);
}

function checkinfo() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if (user == "Admin" && pass == "ADMIN") {
    window.location.href = window.location.href + "board.html";
    console.log("done");
  } else {
    let pop = document.getElementById("popup");
    pop.className = "show";
  }
}
function closepop() {
  let pop = document.getElementById("popup");
  pop.className = "hide";
}
function additem() {
  let node = document.createElement("li");
  let item = document.getElementById("item").value;
  let trash = document.createElement("i");
  let check = document.createElement("i");
  let bullet = document.createElement("i");

  bullet.className = "fa-solid fa-solid fa-circle-dot item";

  node.className = "text";

  trash.innerHTML =
    '<i class="fa-solid fa-trash-can trash" onclick="removeitem2(event)"> </i>';
  check.innerHTML =
    '<i class="fa-solid fa-circle-check check" onclick="removeitem(event)"> </i>';
  node.id = count + "main";
  check.id = count + "";
  count++;

  node.appendChild(bullet);
  node.appendChild(document.createTextNode(item));
  node.appendChild(trash);
  node.appendChild(check);

  if (date == 1) {
    let dates = document.createElement("INPUT");
    dates.setAttribute("type", "date");
    dates.setAttribute("value", "02-28-2024");
    node.insertBefore(dates, node.lastChild);
  }
  if (imp == 1) {
    let alert = document.createElement("i");
    alert.className = "fa-solid fa-circle-exclamation item";
    node.className = "important";
    node.replaceChild(alert, node.firstChild);
  }
  node.appendChild(check);
  document.getElementById("list").appendChild(node);
  sessionStorage.setItem("user", document.getElementById("list").innerHTML);
  sessionStorage.setItem("count", count);
}
function markImp() {
  imp = 1;
  document.getElementById("IMP").className =
    "fa-solid fa-circle-exclamation base-icon alert-text";
}
function setDate() {
  date = 1;
  document.getElementById("DATE").className =
    "fa-solid fa-calendar-days base-icon accent-text";
}
