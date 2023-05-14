console.log("Samsung Z flip 4 in mah pocket!!!")

// bài 1

/* input:
 tạo ra 5 input vs nd:
    + điểm chuẩn của hội đồng
    + khu vực
    + đối tượng dự thi
    + điểm 3 môn
*/

function dauHayRot () {
    // lấy dữ liệu
    
    // 1. lấy điểm chuẩn
    var n = document.getElementById("diemChuan").value * 1;

    console.log(n);
    
    // 2. lấy điểm 3 môn
    var mon1 = document.getElementById("diem1").value * 1;
    var mon2 = document.getElementById("diem2").value * 1;
    var mon3 = document.getElementById("diem3").value * 1;

    console.log(mon1);
    console.log(mon2);
    console.log(mon3);

    // xử lý

    // tạo biến tổng 3 môn
    var tong3Mon = mon1 + mon2 + mon3;
    
    console.log(tong3Mon);

    // đặt điều kiện cho điểm 3 môn
    if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
        alert("Thật đáng tiết! Bạn đã rớt vì đã bị điểm liệt!")
    }

    // sd switch case đặt th cho khu vực
    var chonKhuVuc = document.getElementById("khuVuc").value;

    var diemKhuVuc = 0;

    switch (chonKhuVuc) {
        case "x": {
            diemKhuVuc = tong3Mon;
        }
        break;
        case "a": {
            diemKhuVuc = tong3Mon + 2;
            
        }
        break;
        case "b": {
            diemKhuVuc = tong3Mon + 1;
        }
        break;
        case "c": {
            diemKhuVuc = tong3Mon + 0.5;
        }
        break;
    }

    console.log (diemKhuVuc);

    // sd 1 switch case nữa để đặt trường hợp cho đối tượng
    var chonDoiTuong = document.getElementById("doiTuong").value;

    var diemDoituong = 0;

    switch (chonDoiTuong) {
        case "0": {
            diemDoituong = diemKhuVuc;
        }
        break;
        case "1": {
            diemDoituong = diemKhuVuc + 2.5;
            
        }
        break;
        case "2": {
            diemDoituong = diemKhuVuc + 1.5;
        }
        break;
        case "3": {
            diemDoituong = diemKhuVuc + 1;
        }
        break;
    }

    console.log (diemDoituong);

    var thongBao = "";

    if (diemDoituong >= n) {
        thongBao = "Chúc mừng! Bạn đã đậu với tổng điểm: " + diemDoituong;
    }else {
        thongBao = "Thật đáng tiếc! Bạn đã rớt với số điểm: " + diemDoituong + "." + " Hãy cố gắng hơn ở lần sau nhé!";
    }

    console.log (thongBao);

    // output kq cho người xem
    document.querySelector(".bg-info").innerHTML = thongBao;
}

// bài 2
function tienDien () {
    var hoTen = document.getElementById("ten").value;

    var kw = document.getElementById("soKw").value * 1;

    console.log(hoTen);
    console.log(kw);

    var tongTien = 0;

    if (kw >= 1) {
        if (kw <= 50) {
            tongTien = kw * 500;
        }
        else if (kw > 50 && kw <= 100) {
            tongTien = (50 * 500) + ((kw-50) * 650);
        }
        else if (kw > 100 && kw <= 200) {
            tongTien = (50 * 500) + (50 * 650) + ((kw-100) * 850);
        }
        else if (kw > 200 && kw <= 350) {
            tongTien = (50 * 500) + (50 * 650) + (100 * 850) + ((kw-200) * 1100);
        }
        else if (kw > 350) {
            tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((kw-350) * 1300);
        }
    }

    console.log (tongTien);

    document.querySelector(".bg-success").innerHTML = "Khách hàng " + hoTen + " với số tiền điện phải đóng là " + new Intl.NumberFormat().format(tongTien) + " VND.";
}

// bài 3
function thueThuNhap () {
    var hoVaTen = document.getElementById("tenHo").value;
    var tongNam = document.getElementById("tongThuNhapNam").value * 1;
    var soNg = document.getElementById("soNgPhuThuoc").value * 1;

    console.log(hoVaTen);
    console.log(tongNam);
    console.log(soNg);


    tongThue = (tongNam * 1e+6) - 4e+6 - soNg * 16e+5;
    
    var tienSauThue = 0;

    console.log(tongThue);

    if (tongThue >= 1) {
        if (tongThue <= 60e+6) {
            tienSauThue = tongThue * 0.05;
        } 
        else if (tongThue > 60e+6 && tongThue <= 120e+6) {
            tienSauThue = tongThue * 0.1;
        }
        else if (tongThue > 120e+6 && tongThue <= 210e+6) {
            tienSauThue = tongThue * 0.15;
        }
        else if (tongThue > 210e+6 && tongThue <= 384e+6) {
            tienSauThue = tongThue * 0.2;
        }
        else if (tongThue > 384e+6 && tongThue <= 624e+6) {
            tienSauThue = tongThue * 0.25;
        }
        else if (tongThue > 624e+6 && tongThue <= 960e+6) {
            tienSauThue = tongThue * 0.3;
        }
        else if (tongThue > 960e+6) {
            tienSauThue = tongThue * 0.35;
        }
    }

    console.log(tienSauThue);

    document.querySelector(".bg-danger").innerHTML = "Tiền thuế thu nhập cá nhân của " + hoVaTen + " là " + new Intl.NumberFormat().format(tienSauThue) + " VND.";
}

// bài 4
function tienCap () {
    var x = document.getElementById("loaiKhachHang").value;

    var newInput = document.getElementById("add");

    switch (x) {
        case "a": {
            // 
         }
        break;
        case "b": {
            var m = document.createElement("input");
            m.setAttribute("type","text");
            m.setAttribute("class","form-control mt-2");
            m.setAttribute("id","soKetNoi");
            m.setAttribute("placeholder","Số kết nối: ");
            newInput.appendChild(m);
        }
        break;
    }
}

function tienCapNhaDan () {
    

    var maKH = document.getElementById("maKhachHang").value * 1;

    var soKenh = document.getElementById("soKenhCaoCap").value * 1;

    console.log(maKH);
    console.log(soKenh);

    var totalNhaDan = 4.5 + 20.5 + (soKenh * 7.5);

    document.querySelector(".bg-warning").innerHTML = "Khách hàng có mã " + maKH + " có phí cáp phải trả là " + "$" + totalNhaDan;
}

function tienCapDoanhNghiep() {
    var maKH2 = document.getElementById("maKhachHang").value * 1;

    var soKenh2 = document.getElementById("soKenhCaoCap").value * 1;

    var ketnoi2 = document.getElementById("soKetNoi").value * 1;

    console.log(maKH2);
    console.log(soKenh2);
    console.log(ketnoi2);

    totalDoanhNghiep = 0;

    if (ketnoi2 >= 1) {
        if (ketnoi2 <= 10) {
            totalDoanhNghiep = 15 + (soKenh2 * 50) + 75;
        }
        else if (ketnoi2 > 10) {
            totalDoanhNghiep = 15 + (soKenh2 * 50) + ((ketnoi2-10)*5) + 75;
        }
    }

    console.log(totalDoanhNghiep);

    document.querySelector(".bg-warning").innerHTML = "Khách hàng có mã " + maKH2 + " có phí cáp phải trả là " + "$" + totalDoanhNghiep;
}