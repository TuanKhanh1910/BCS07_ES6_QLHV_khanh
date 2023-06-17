import * as ketQua from "../models/Person.js";

export default class List {
  constructor() {
    this.ListPerson = [];
  }
  themThanhVien(person) {
    this.ListPerson.push(person);
  }

  renderList() {
    console.log(this.ListPerson);

    let content = this.ListPerson.map((item, index) => {
      // let person = new ketQua.Person();
      let person = {};
      // let luaChonThanhVien = document.getElementById("loai").value;
      let luaChonThanhVien = item.loai;
      if (luaChonThanhVien == "Student") {
        document.querySelectorAll("#tbodyHocVien #LuongGV").innerHTML = "X";
        person = new ketQua.default.Student();
      }
      if (luaChonThanhVien == "Employee") {
        document.querySelectorAll("#tbodyHocVien #diemTBHV").innerHTML = "X";
        person = new ketQua.default.Employee();
      }
      if (luaChonThanhVien == "Customer") {
        document.querySelectorAll("#tbodyHocVien #diemTBHV").innerHTML = "X";
        document.querySelectorAll("#tbodyHocVien #LuongGV").innerHTML = "X";
      }

      Object.assign(person, item);
      console.log(item);
      console.log(person);
      let {
        personId,
        tenThanhVien,
        email,
        adress,
        loai,
        tinhDiemTrungBinh,
        tinhLuongGiangVien,
        tenCongTy,
        TriGiaHoaDon,
        danhGia,
      } = person;

      return `
      <tr>
                    <td>${personId}</td>
                    <td>${tenThanhVien}</td>
                    <td>${email}</td>
                    <td>${adress}</td>
                    <td>${loai}</td>
                    <td id="diemTBHV">${
                      luaChonThanhVien == "Student"
                        ? Math.floor(tinhDiemTrungBinh())
                        : "X"
                    }</td>
                    <td id="LuongGV">${
                      luaChonThanhVien == "Employee"
                        ? tinhLuongGiangVien()
                        : "X"
                    }</td>
                    <td>${luaChonThanhVien == "Customer" ? tenCongTy : "X"}</td>
                    <td>${
                      luaChonThanhVien == "Customer" ? TriGiaHoaDon : "X"
                    }</td>
                    <td>${luaChonThanhVien == "Customer" ? danhGia : "X"}</td>
                    <td>
                      <button class="btn btn-danger" onclick="deletePerson('${personId}')">Xóa</button>
                      <button class="btn btn-warning" onclick="layThongTinPeron('${personId}')">Sửa</button>
                    </td>
        </tr>
      `;
    });
    document.getElementById("tbodyHocVien").innerHTML = content.join("");
  }
  resetValue() {
    let arrInput = document.querySelectorAll(
      "#hocVienForm input, #hocVienForm select"
    );
    for (let item of arrInput) {
      // let { id, value } = item;
      // console.log(id, value);
      item.value = "";
      document.querySelector("#thuocTinhPerson #Student").style.display =
        "none";
      document.querySelector("#thuocTinhPerson #Employee").style.display =
        "none";
      document.querySelector("#thuocTinhPerson #Customer").style.display =
        "none";
    }
  }
  saveLocal() {
    localStorage.setItem("ListPerson", JSON.stringify(this.ListPerson));
  }
  getLocal() {
    let perosnLocal = JSON.parse(localStorage.getItem("ListPerson"));
    if (perosnLocal) {
      this.ListPerson = [...perosnLocal];
      console.log(this.ListPerson);
      this.renderList();
    }
  }
  deletePerson(personId) {
    let index = this.ListPerson.findIndex((item) => item.personId == personId);
    if (index != -1) {
      this.ListPerson.splice(index, 1);
      this.renderList();
      this.saveLocal();
    }
  }
  layThongTinPeron(personId) {
    document.getElementById("themThanhVien").style.display = "none";
    document.getElementById("btnCapNhat").style.display = "block";
    let person = this.ListPerson.find((item) => item.personId == personId);
    console.log(person);
    let loaiPerson = person.loai;
    console.log;
    if (loaiPerson == "Student") {
      document.querySelector("#thuocTinhPerson #Student").style.display =
        "block";
      document.querySelector("#thuocTinhPerson #Employee").style.display =
        "none";
      document.querySelector("#thuocTinhPerson #Customer").style.display =
        "none";
    }
    if (loaiPerson == "Employee") {
      document.querySelector("#thuocTinhPerson #Student").style.display =
        "none";
      document.querySelector("#thuocTinhPerson #Employee").style.display =
        "block";
      document.querySelector("#thuocTinhPerson #Customer").style.display =
        "none";
    }
    if (loaiPerson == "Customer") {
      document.querySelector("#thuocTinhPerson #Student").style.display =
        "none";
      document.querySelector("#thuocTinhPerson #Employee").style.display =
        "none";
      document.querySelector("#thuocTinhPerson #Customer").style.display =
        "block";
    }
    if (person) {
      document.getElementById("btnThem").click();
      let arrInput = document.querySelectorAll(
        "#hocVienForm input, #hocVienForm select"
      );
      for (let item of arrInput) {
        let { id } = item;
        item.value = person[id];
      }
    }
  }
  chinhSuaPerson(person) {
    let index = this.ListPerson.findIndex(
      (item) => item.personId == person.personId
    );
    if (index != -1) {
      this.ListPerson[index] = person;
      this.renderList();
      this.saveLocal();
      document.getElementById("btnClose").click();
    }
  }
  showTungLoaiPerson() {
    let loaiPerson = document.getElementById("selLoai").value;

    if (loaiPerson == "all") {
      console.log("all");
    }
    if (loaiPerson == "Student") {
      console.log("student nè");
    }
    if (loaiPerson == "Employee") {
      console.log("Employee nè");
    }
    if (loaiPerson == "Customer") {
      console.log("Customer nè");
    }
  }
}
