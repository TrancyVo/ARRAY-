// ARRAY (MẢNG)
/* Kiểu dữ liệu: array (mảng)
- Mảng là một biến lưu trữ nhiều giá trị cùng lúc
- Các PTỬ trong mảng có thể cùng hoặc khác KDL nhau
- Để truy cập PTỬ trong mảng -> dùng CHỈ SỐ MẢNG */

/* 1) TẠO MẢNG: 
let tenMang = [ptử ,ptử ,ptử ,...] 
let tenMang = new Array (ptử, ptử, ptử,...)
let tenMang = [] -> Mảng rỗng */
//VD:
let arr1 = [1, 2, 3];
let arr2 = new Array("Táo", "Cam", "Xoài", "Lê");
let arr3 = [];
console.log(arr1); //KQ: (3) [1, 2, 3]
console.log(arr2); //KQ: (4) ['Táo', 'Cam', 'Xoài', 'Lê']
console.log(arr3); //KQ: []
console.log(typeof arr1); //KQ: Object

/* 2) ĐỘ DÀI MẢNG:
let tenBien = tenMang.length 
console.log (tenBien)
(Tạo 1 biến -> lưu trữ độ dài mảng) */

/* 3) TRUY CẬP PTỬ TRONG MẢNG BẰNG VỊ TRÍ INDEX:
let tenBien = tenMang[vị trí index của ptử]
console.log(tenBien)
(vị trí index trong mảng: 1st item - 0 | 2nd item - 1 | 3rd item - 2 ....) */

/* 4) EDIT GIÁ TRỊ CỦA PTỬ TRONG MẢNG:
tenMang[vị trí index của ptử] = "giá trị mới"
console.log(tenMang) */

/* 5) ĐỘ DÀI MẢNG - VỊ TRÍ INDEX PTỬ CUỐI CÙNG
độ dài mảng = vị trí index ptử cuối + 1
vị trí index ptử cuối cùng = độ dài mảng - 1 */

//PHƯƠNG THỨC THAO TÁC VỚI MẢNG ARRAY (P1)
/* 6) PT UNSHIFT: Thêm 1 hoặc nhiều ptử mới vào ĐẦU MẢNG và trả về CHIỀU DÀI MỚI của mảng
tenMang.unshift("Giá trị ptử mới")
console.log(tenMang)
 */

/* 7) PT SHIFT: Lấy ra PTỬ ĐẦU MẢNG và lưu trữ
let tenBien = tenMang.shift()
console.log(tenMang)
console.log(tenBien)
(Tạo 1 biến -> lưu trữ ptử đầu được lấy ra từ mảng)
*/

/* 8) PT PUSH: Thêm 1 hoặc nhiều ptử mới vào CUỐI MẢNG và trả về CHIỀU DÀI MỚI của mảng
tenMang.push("Giá trị ptử mới")
console.log(tenMang)
 */

/* 9) PT POP: Lấy ra PTỬ CUỐI MẢNG và lưu trữ
let tenBien = tenMang.pop()
console.log(tenMang)
console.log(tenBien)
(Tạo 1 biến -> lưu trữ ptử cuối được lấy ra từ mảng)
*/

// DEMO: Tạo mảng lưu trữ tên sv nữ là Linh, Quyên, Lan, Hằng, Hạ
//1)Tạo mảng:
let arrSinhVienNu = ["Linh", "Quyên", "Lan", "Hằng", "Hạ"];
console.log(arrSinhVienNu); // (5) ['Linh', 'Quyên', 'Lan', 'Hằng', 'Hạ']
//2)Độ dài mảng:
let arrSinhVienNuLength = arrSinhVienNu.length;
console.log(arrSinhVienNuLength); // 5
//3)Truy cập PTỬ trong mảng qua vị trí index (ptử đầu tiên: 0 -> ptử cuối)
let sinhVienLinh = arrSinhVienNu[0];
console.log(sinhVienLinh); // Linh
let sinhVienLan = arrSinhVienNu[2];
console.log(sinhVienLan); // Lan
//4) Thay thế ptử
arrSinhVienNu[1] = "Thư";
console.log(arrSinhVienNu); // (5) ['Linh', 'Thư', 'Lan', 'Hằng', 'Hạ']
//5) Độ dài mảng & Vị trí Index cuối cùng
console.log(arrSinhVienNuLength); // 5
console.log(arrSinhVienNu[4]); // HẠ (Hạ là ptử cuối cùng trong mảng - vị trí index của Hạ: 5 - 1 = 4)
//6) PT UNSHIFT: thêm ptử mới vào đầu mảng
arrSinhVienNu.unshift("Nhi");
console.log(arrSinhVienNu); // (6) ['Nhi', 'Linh', 'Thư', 'Lan', 'Hằng', 'Hạ']
//7) PT SHIFT: Lấy ra PTỬ ĐẦU MẢNG và lưu trữ
let removeSinhVienDau = arrSinhVienNu.shift();
console.log(arrSinhVienNu); // (5) ['Linh', 'Thư', 'Lan', 'Hằng', 'Hạ']
console.log(removeSinhVienDau); // Nhi
//8) PT PUSH: thêm ptử mới vào cuối mảng
arrSinhVienNu.push("Huệ");
console.log(arrSinhVienNu); // (6) ['Linh', 'Thư', 'Lan', 'Hằng', 'Hạ', 'Huệ']
//9) PT POP: Lấy ra PTỬ CUỐI và lưu trữ
let removeSinhVienCuoi = arrSinhVienNu.pop();
console.log(arrSinhVienNu); // (5) ['Linh', 'Thư', 'Lan', 'Hằng', 'Hạ']
console.log(removeSinhVienCuoi); // Huệ

//DÙNG VÒNG LẶP ĐỂ DUYỆT MẢNG
/* BT: Nhà hàng C có các món (Sủi cảo, Bún mọc, Bún giò heo, Xá xíu) với giá tương ứng (40000, 55000, 32000, 48000)
thực hiện tính tổng giá các món ăn */
let arrGiaMonAn = [40000, 55000, 32000, 48000, 100000];
let tongTien4Mon = 0;
// let tongTien4Mon = arrGiaMonAn[0] + arrGiaMonAn[1] + arrGiaMonAn[2] + arrGiaMonAn[3]
// nếu bienBuocNhay = 0 thì điều kiện VL : bienBuocNhay < tenMang.length | bienBuocNhay <= tenMang.length - 1
for (let index = 0; index <= arrGiaMonAn.length - 1; index++) {
  console.log(index);
  console.log(arrGiaMonAn[index]);
  tongTien4Mon += arrGiaMonAn[index];
}
console.log(tongTien4Mon);

//KỸ THUẬN REST PARAMETERS TRONG FUNCTION
/* Cấu trúc:  function tenHam (...tenRestParameters) {}
Chuyển tham số của hàm dưới dạng Mảng ARRAY 
Dùng rest parametes khi hàm Function có số lượng tham số có thể thay đổi tăng giảm */

/* Tạo 1 hàm để tính điểm trung bình cho nhiều TH 
TH1: Khoá 2023 - DTB 5môn: Toán, Lý, Hoá,  
TH2: Khoá 2024 - DTB 3môn: Toán, Lý, Hoá */
//CÁCH 1:
/*Trước khi biết rest parametes, khi gọi hàm nhưng truyền thiếu đối số tương ứng với tham số của hàm, 
thì phải đặt điều kiện:
TH1: DTB 5môn: Toán, Lý, Hoá, Anh, Văn 
=> if (diemAnh && diemVan) : diemAnh = true & diemVan = true => điểm Anh và điểm Văn có truyền đối số (Áp dụng cho 5 môn đều có truyền đối số để tính điểm tb -> case 1)
TH2: DTB 3môn: Toán, Lý, Hoá 
=> else : diemAnh = false & diemVan = false => điểm Anh và điểm Văn ko có truyền đối số (Áp dụng cho chỉ có 3 môn Toán Lý Hoá có truyền đối số để tính điểm tb -> case 2) */
function tinhDiemTrungBinh(diemToan, diemLy, diemHoa, diemAnh, diemVan) {
  if (diemAnh && diemVan) {
    return (diemToan + diemLy + diemHoa + diemAnh + diemVan) / 5;
  } else {
    return (diemToan + diemLy + diemHoa) / 3;
  }
}
// CÁCH 2: Rest Parameter -> tenRestParameters = tenMang
function tinhDiemTrungBinh2(...diemMon) {
  console.log(diemMon); // (5) [8, 7, 6, 9, 6] | (3) [7, 8, 9]
  let diemTong = 0;
  for (let index = 0; index < diemMon.length; index++) {
    diemTong += diemMon[index];
  }
  return diemTong / diemMon.length;
}
//SV THƯ: 8, 7, 6, 9, 6
tinhDiemTrungBinh2(8, 7, 6, 9, 6);
//SV ĐĂNG: 7, 8, 9
tinhDiemTrungBinh2(7, 8, 9);

/* HIỂN THỊ MẢNG LÊN GIAO DIỆN NGƯỜI DÙNG
let tenMang = [ptử, ptử, ptử]
document.getElementById("tenID").innerHTML = tenMang */

//LƯU Ý: TẠO MẢNG NGOÀI SỰ KIỆN ONCLICK - NẾU TẠO TRONG SỰ KIỆN ONCLICK, KHI BUILD CHỨC NĂNG, KO BAO GIỜ MẢNG CÓ SỐ LƯỢNG PTỬ LỚN HƠN 2

// BT: THÊM TÊN SINH VIÊN VÀO ĐẦU HOẶC CUỐI MẢNG
let arrTenSinhVien = [];
document.getElementById("dauMang").onclick = function () {
  let tenSinhVien = document.getElementById("nhapTen").value;
  arrTenSinhVien.unshift(` ${tenSinhVien}`);
  document.querySelector(".ketQua").innerHTML = arrTenSinhVien;
};
document.getElementById("cuoiMang").onclick = function () {
  let tenSinhVien = document.getElementById("nhapTen").value;
  arrTenSinhVien.push(` ${tenSinhVien}`);
  document.querySelector(".ketQua").innerHTML = arrTenSinhVien;
};

//PHƯƠNG THỨC THAO TÁC VỚI MẢNG ARRAY (P2)
/* 10) PT INDEXOF: 
Tìm kiếm ptử đầu tiên trong Mảng thoả ĐK (THEO CHIỀU: PTỬ ĐẦU -> PTỬ CUỐI | TRÁI -> PHẢI)
- Nếu tìm thấy ptử: PT .indexOf trả về KQ [Vị trí index của ptử trong mảng] GƯNG NGAY SAU KHI TÌM THẤY ĐỐI TƯỢNG ĐẦU TIÊN THOÃ ĐIỀU KIỆN
- Nếu ko tìm thấy (ko có ptử đó trong mảng): PT .indexOf trả về KQ là -1
let tenBien = tenMang.indexOf("giá trị ptử cần tìm kiếm", vị trí index muốn bắt đầu)
console.log(tenBien) 
(Tạo 1 biến -> lưu trữ kết quả tìm kiếm của PT .indexOf)
*/

/* 11) PT LASTINDEXOF: 
Tìm kiếm ptử đầu tiên trong Mảng thoả ĐK (THEO CHIỀU: PTỬ CUỐI -> PTỬ ĐẦU | PHẢI -> TRÁI)
- Nếu tìm thấy ptử: PT .indexOf trả về KQ [Vị trí index của ptử trong mảng] và NGƯNG NGAY SAU KHI TÌM THẤY ĐỐI TƯỢNG ĐẦU TIÊN THOÃ ĐIỀU KIỆN
- Nếu ko tìm thấy (ko có ptử đó trong mảng): PT .indexOf trả về KQ là -1
let tenBien = tenMang.lastIndexOf("giá trị ptử cần tìm kiếm", vị trí index muốn bắt đầu)
console.log(tenBien) 
(Tạo 1 biến -> lưu trữ kết quả tìm kiếm của PT .lastIndexOf)
*/

// DEMO:
let arrMonAn = [
  "Bún chả",
  "Mì cay",
  "Bánh bao hồng kông",
  "Mì cay",
  "Tôm hùm sốt bơ",
];
//tìm vị trí index ptử "Mì Cay" đầu mảng:
let viTriMiCayDauMang = arrMonAn.indexOf("Mì cay");
console.log(viTriMiCayDauMang); // 1
let viTriMiCayDauMang2 = arrMonAn.indexOf("Mì cay", 2);
console.log(viTriMiCayDauMang2); // 3
//tìm vị trí index ptử "Mì Cay" cuối mảng:
let viTriMiCayCuoiMang = arrMonAn.lastIndexOf("Mì cay");
console.log(viTriMiCayCuoiMang); // 3
//tìm vị trí index ptử "Bánh bao hồng kông":
let viTriBanhBaoHongKong = arrMonAn.indexOf("Bánh bao hồng kông");
console.log(viTriBanhBaoHongKong); // 2

/* BT: DÙNG VL DUYỆT MẢNG THAY CHO INDEXOF VÀ LASTINDEXOF
PET Spa có: Bánh bao, Shopee, Quýt, Na, Cà lem -> Tìm vị trí index của Shopee trong mảng
Sau đó Spa có thêm: Bánh bao, Money, Xá xíu  -> Tìm kiếm vị trí Bánh bao cuối cùng trong mảng
*/

let arrThuCung = [
  "Bánh bao",
  "Shopee",
  "Quýt",
  "Na",
  "Cà lem",
  "Bánh bao",
  "Money",
  "Xá xíu",
];
document.getElementById("shopee").onclick = function () {
  let viTriShopee = -1;
  for (let index = 0; index < arrThuCung.length; index++) {
    if (arrThuCung[index] == "Shopee") {
      viTriShopee = index;
      break;
    }
  }
  alert(`Vị trí của Shopee: ${viTriShopee}`);
};

document.getElementById("lastBanhBao").onclick = function () {
  let viTriBanhBaoCuoiCung = -1;
  for (let index = arrThuCung.length - 1; index >= 0; index--) {
    console.log(index);
    if (arrThuCung[index] == "Bánh bao") {
      viTriBanhBaoCuoiCung = index;
      break;
    }
  }
  alert(`Vị trí của Bánh Bao cuối cùng: ${viTriBanhBaoCuoiCung}`);
};

//PHƯƠNG THỨC THAO TÁC VỚI MẢNG ARRAY (P2)

/* 1) PT REVERSE: Giúp đảo ngược thứ tự các phần tử trong mảng
let teBien = tenMang.reverse();
console.log (tenBien) 
 */

let arrXeHoi = ["BMW", "Toyota", "Ferrari", "Mercedes"];
let arrNewXeHoi = arrXeHoi.reverse();
console.log(arrNewXeHoi);

/* 2) PT SORT: Giúp sắp xếp mảng
Sort thep chữ cái (a->z): tenMang.sort()
Sort theo chữ cái (z->a): tenMang.sort().reverse()
=> cosole.log (tenMang);
Sort theo chữ số (nhỏ -> lớn): tenMangSo.sort((a,b) => a - b) | tenMangSo.sort(function(a,b) {return a -b}) 
Sort theo chữ số (lớn -> nhỏ): tenMangSo.sort((a,b) => b - a) | tenMangSo.sort(function(a,b) {return b - a})
=> console.log (tenMangSo)
 */
// VD1: MẢNG CHỮ
let arrTenMonAn = ["Mì", "Bún", "Bánh Cuốn", "Màn thầu", "Canh", "Xôi"];
arrTenMonAn.sort();
console.log(arrTenMonAn);
arrTenMonAn.sort().reverse();
console.log(arrTenMonAn);
// VD2: MẢNG SỐ
let arrSoNgauNhien = [9, 0, 15, 1, 32, 3];
//SORT THEO SỐ (Số nhỏ -> số lớn)
//Nếu: mảng số chỉ gọi tới PT .sort() thì những số có 2 chữ số -> 2 ký số được tách ra và ký số đầu tiên sẽ được dùng để so sánh và quyết định vị trí ptử
arrSoNgauNhien.sort();
console.log(arrSoNgauNhien); // (6) [0, 1, 15, 3, 32, 9]
// Nhưng nếu: .sort(function (a,b) {return a - b}) -> STT được sx bình thường
arrSoNgauNhien.sort((a, b) => a - b);
console.log(arrSoNgauNhien); // (6) [0, 1, 3, 9, 15, 32]
arrSoNgauNhien.sort((a, b) => b - a);
console.log(arrSoNgauNhien); // (6) [32, 15, 9, 3, 1, 0]

/* 3) PT SPLIT:
