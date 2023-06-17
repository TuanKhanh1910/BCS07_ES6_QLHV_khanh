class Person {
  constructor() {
    this.personId = "";
    this.tenThanhVien = "";
    this.email = "";
    this.adress = "";
    this.loai = "";
  }
}

class Student extends Person {
  constructor() {
    super();
    this.diemToan = 0;
    this.diemLy = 0;
    this.diemHoa = 0;
  }
  tinhDiemTrungBinh = () => {
    return (this.diemToan * 1 + this.diemLy * 1 + this.diemHoa * 1) / 3;
  };
}

class Employee extends Person {
  constructor() {
    super();
    this.soNgayLamViec = "";
    this.LuongTheoNgay = "";
  }
  tinhLuongGiangVien = () => {
    return this.soNgayLamViec * 1 * (this.LuongTheoNgay * 1);
  };
}

class Customer extends Person {
  constructor() {
    super();
    this.tenCongTy = "";
    this.TriGiaHoaDon = "";
    this.danhGia = "";
  }
}
const result = { Person, Student, Employee, Customer };
export default result;
