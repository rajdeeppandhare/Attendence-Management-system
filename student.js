var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

function submitFun1(e) {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var date = document.querySelector("#date").value;
  var branch = document.querySelector("#branch").value;
  var rollNo = document.querySelector("#rollNo").value;

  var studentObj = {
    name: name,
    date: date,
    branch: branch,
    rollNo: rollNo,
    status: "Present"
  };

  studentDataArr.push(studentObj);
  localStorage.setItem("studentData", JSON.stringify(studentDataArr));
  document.querySelector("#form1").reset();
  alert("Student Added Successfully");

  displayFun(studentDataArr);
}

function displayFun(studentDataArr) {
  var count = 1;
  var tbody = document.querySelector("#tbody");
  tbody.innerHTML = '';

  studentDataArr.forEach(function (item) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = count++;
    var td2 = document.createElement("td");
    td2.innerHTML = item.name;
    var td3 = document.createElement("td");
    td3.innerHTML = item.date;
    var td4 = document.createElement("td");
    td4.innerHTML = item.branch;
    var td5 = document.createElement("td");
    td5.innerHTML = item.rollNo;
    var td6 = document.createElement("td");

    var statusButton = document.createElement("button");
    statusButton.innerHTML = item.status;
    statusButton.addEventListener("click", function () {
      item.status = item.status === "Present" ? "Absent" : "Present";
      localStorage.setItem("studentData", JSON.stringify(studentDataArr));
      displayFun(studentDataArr);
    });

    td6.appendChild(statusButton);

    tr.append(td1, td2, td3, td4, td5, td6);
    tbody.appendChild(tr);
  });
}

function updateTotalDays(studentName) {
  var totalPresentDays = studentDataArr.filter(function (student) {
    return student.name === studentName && student.status === "Present";
  }).length;

  var totalAbsentDays = studentDataArr.filter(function (student) {
    return student.name === studentName && student.status === "Absent";
  }).length;

  document.querySelector("#totalPresentDays").textContent = totalPresentDays;
  document.querySelector("#totalAbsentDays").textContent = totalAbsentDays;
}

document.querySelector("#form1").addEventListener("submit", submitFun1);

document.querySelector("#filterButton").addEventListener("click", function () {
  var studentName = document.querySelector("#filterByName").value;
  updateTotalDays(studentName);
  var filteredData = studentDataArr.filter(function (student) {
    return student.name === studentName;
  });
  displayFun(filteredData);
});

displayFun(studentDataArr);
