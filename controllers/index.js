document.getElementById("loai").addEventListener("change", () => {
  let luaChonThanhVien = document.getElementById("loai").value;
  if (luaChonThanhVien == "Student") {
    document.querySelector("#thuocTinhPerson #Student").style.display = "block";
    document.querySelector("#thuocTinhPerson #Employee").style.display = "none";
    document.querySelector("#thuocTinhPerson #Customer").style.display = "none";
  }
  if (luaChonThanhVien == "Employee") {
    document.querySelector("#thuocTinhPerson #Student").style.display = "none";
    document.querySelector("#thuocTinhPerson #Employee").style.display =
      "block";
    document.querySelector("#thuocTinhPerson #Customer").style.display = "none";
  }
  if (luaChonThanhVien == "Customer") {
    document.querySelector("#thuocTinhPerson #Student").style.display = "none";
    document.querySelector("#thuocTinhPerson #Employee").style.display = "none";
    document.querySelector("#thuocTinhPerson #Customer").style.display =
      "block";
  }
  if (luaChonThanhVien == "") {
    document.querySelector("#thuocTinhPerson #Student").style.display = "none";
    document.querySelector("#thuocTinhPerson #Employee").style.display = "none";
    document.querySelector("#thuocTinhPerson #Customer").style.display = "none";
  }
});

import * as ketQua from "../models/Person.js";
// let student = new ketQua.default.Customer();
// console.log(student);
import List from "../models/ListPerson.js";
let list = new List();
// console.log(list);
list.getLocal();

document.getElementById("themThanhVien").addEventListener("click", () => {
  // lấy dữ liệu người dùng
  let arrInput = document.querySelectorAll(
    "#hocVienForm input, #hocVienForm select"
  );
  // console.log(arrInput);
  let person;
  let luaChonThanhVien = document.getElementById("loai").value;
  if (luaChonThanhVien == "Student") {
    // console.log("VAO SV");
    person = new ketQua.default.Student();
    // console.log(person);
  }
  if (luaChonThanhVien == "Employee") {
    console.log("VAO EMPLOYYYYY");
    person = new ketQua.default.Employee();
  }
  if (luaChonThanhVien == "Customer") {
    person = new ketQua.default.Customer();
  }
  for (let item of arrInput) {
    let { id, value } = item;
    // console.log(id, value);
    person[id] = value;
  }
  // console.log(person);
  list.themThanhVien(person);
  console.log(list.ListPerson);
  list.renderList();
  list.saveLocal();
  document.getElementById("btnClose").click();
  list.resetValue();
});

window.deletePerson = (personId) => {
  list.deletePerson(personId);
};
window.layThongTinPeron = (personId) => {
  list.layThongTinPeron(personId);
};

document.getElementById("btnCapNhat").onclick = () => {
  let arrInput = document.querySelectorAll(
    "#hocVienForm input, #hocVienForm select"
  );
  // console.log(arrInput);
  let person;
  let luaChonThanhVien = document.getElementById("loai").value;
  if (luaChonThanhVien == "Student") {
    // console.log("VAO SV");
    person = new ketQua.default.Student();
    // console.log(person);
  }
  if (luaChonThanhVien == "Employee") {
    console.log("VAO EMPLOYYYYY");
    person = new ketQua.default.Employee();
  }
  if (luaChonThanhVien == "Customer") {
    person = new ketQua.default.Customer();
  }
  for (let item of arrInput) {
    let { id, value } = item;
    // console.log(id, value);
    person[id] = value;
  }
  list.chinhSuaPerson(person);
};
document.getElementById("selLoai").addEventListener("change", () => {
  list.showTungLoaiPerson();
});
