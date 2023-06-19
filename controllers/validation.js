function regexEmail(id, idThongBao) {
  let checkEmail = document.getElementById(id).value;
  if (checkEmail == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let mauRegexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let mailHopLe = mauRegexEmail.test(checkEmail);
    if (mailHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập email hợp lệ";
      return false;
    }
  }
}

function regexName(id, idThongBao) {
  let checkName = document.getElementById(id).value;
  if (checkName == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let chiLayChu = /^[\p{L} ]+$/u;
    let nameHopLe = chiLayChu.test(checkName);
    if (nameHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập tên chỉ chứa ký tự chữ";
      return false;
    }
  }
}

function regexId(id, idThongBao) {
  let checkName = document.getElementById(id).value;
  if (checkName == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    document.getElementById(idThongBao).innerHTML = "";
    // document.getElementById(idThongBao).style.display = "block";
    return true;
  }
  //   if (checkName == value) {
  //     document.getElementById(idThongBao).innerHTML = "";
  //     // document.getElementById(idThongBao).style.display = "block";
  //     return true;
  //   }
}

function regexdiem(id, idThongBao) {
  let checkSDT = document.getElementById(id).value;
  if (checkSDT == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let chiLaySo = /[0-9]/g;
    let soDiem = chiLaySo.test(checkSDT);
    if (soDiem) {
      if (checkSDT >= 0 && checkSDT <= 10) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
      } else {
        document.getElementById(idThongBao).innerHTML =
          "Vui lòng nhập số điểm  hợp lệ";
        return false;
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập điểm chỉ chứa ký tự số";
      return false;
    }
  }
}
function regexLoai(id, idThongBao) {
  let checkLoai = document.getElementById(id).value;
  if (checkLoai == "") {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng chọn loại thành viên";
    return false;
  } else {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  }
}
function regexLuong(id, idThongBao) {
  let checkLuong = document.getElementById(id).value;
  if (checkLuong == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let chiLaySo = /[0-9]/g;
    let soLuong = chiLaySo.test(checkLuong);
    if (soLuong) {
      if (checkNumber >= 0) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
      } else {
        document.getElementById(idThongBao).innerHTML =
          "Vui lòng nhập số lương hợp lệ";
        return false;
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập điểm chỉ chứa ký tự số";
      return false;
    }
  }
}
function regexDay(id, idThongBao) {
  let checkNumber = document.getElementById(id).value;
  if (checkNumber == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let chiLaySo = /[0-9]/g;
    let soNgay = chiLaySo.test(checkNumber);
    if (soNgay) {
      if (checkNumber >= 0 && checkNumber <= 31) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
      } else {
        document.getElementById(idThongBao).innerHTML =
          "Vui lòng nhập số ngày  hợp lệ";
        return false;
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập điểm chỉ chứa ký tự số";
      return false;
    }
  }
}

function regexTenCongTy(id, idThongBao) {
  let checkName = document.getElementById(id).value;
  if (checkName == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let chiLayChu = /^[\p{L} ]+$/u;
    let nameHopLe = chiLayChu.test(checkName);
    if (nameHopLe) {
      document.getElementById(idThongBao).innerHTML = "";
      return true;
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập tên công ty chỉ chứa ký tự chữ";
      return false;
    }
  }
}

function regexGiaTriHoaDon(id, idThongBao) {
  let checkValue = document.getElementById(id).value;
  if (checkValue == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đầy đủ";
    return false;
  } else {
    let chiLaySo = /[0-9]/g;
    let phoneHopLe = chiLaySo.test(checkValue);
    if (phoneHopLe) {
      if (checkValue >= 0) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
      } else {
        document.getElementById(idThongBao).innerHTML =
          "Vui lòng nhập số hóa đơn hợp lệ";
        return false;
      }
    } else {
      document.getElementById(idThongBao).innerHTML =
        "Vui lòng nhập hóa đơn chỉ chứa ký tự số";
      return false;
    }
  }
}

function regexDanhGia(id, idThongBao) {
  let checkDanhGia = document.getElementById(id).value;
  if (checkDanhGia == "") {
    document.getElementById(idThongBao).innerHTML = "Vui lòng chọn đánh giá";
    return false;
  } else {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  }
}
