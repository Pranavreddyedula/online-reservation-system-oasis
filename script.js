// LOGIN
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "admin" && p === "admin") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Login Credentials");
  }
}

// AUTO TRAIN NAME
function setTrainName() {
  let trainNo = document.getElementById("trainNo").value;
  let trainName = document.getElementById("trainName");

  if (trainNo === "12345") trainName.value = "Express Train";
  else if (trainNo === "67890") trainName.value = "Superfast Train";
  else trainName.value = "";
}

// RESERVATION
function reserve() {
  let pnr = "PNR" + Math.floor(Math.random() * 100000);

  let data = {
    pnr: pnr,
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    trainNo: document.getElementById("trainNo").value,
    trainName: document.getElementById("trainName").value,
    classType: document.getElementById("classType").value,
    date: document.getElementById("journeyDate").value,
    from: document.getElementById("fromPlace").value,
    to: document.getElementById("toPlace").value
  };

  localStorage.setItem(pnr, JSON.stringify(data));
  alert("Reservation Successful!\nYour PNR: " + pnr);
}

// SEARCH & CANCEL
function searchPNR() {
  let pnr = document.getElementById("pnr").value;
  let result = document.getElementById("result");
  let data = localStorage.getItem(pnr);

  if (!data) {
    result.innerHTML = "<p>No record found</p>";
    return;
  }

  let d = JSON.parse(data);

  result.innerHTML = `
    <p><b>Name:</b> ${d.name}</p>
    <p><b>Train:</b> ${d.trainName}</p>
    <p><b>From:</b> ${d.from} → ${d.to}</p>
    <button onclick="cancel('${pnr}')">OK (Cancel Ticket)</button>
  `;
}

function cancel(pnr) {
  localStorage.removeItem(pnr);
  alert("Ticket Cancelled Successfully");
  document.getElementById("result").innerHTML = "";
}
