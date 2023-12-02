// mảng 
var mang=[];
document.getElementById('themmang').onclick=function(e){
  e.preventDefault();
 
  soNguyen=Number(document.getElementById('soNguyen').value);
  mang.push(soNguyen);
  document.getElementById('soNguyen').value="";
  document.getElementById('chuoi').innerHTML=`Chuỗi của bạn nhập vừa nhập là:[${mang}]`;
  
}
// mảng thực
var mangThuc=[];
document.getElementById('themMangThuc').onclick=function(e){
  e.preventDefault();
 
  soNguyen=Number(document.getElementById('mangThuc').value);
  mangThuc.push(soNguyen);
  document.getElementById('mangThuc').value="";
  document.getElementById('chuoiThuc').innerHTML=`Chuỗi của bạn nhập vừa nhập là:[${mangThuc}]`;
  
}
// Bai 1 :Tính tổng các số dương
// input: Đầu tiên sẽ nhập từ số và khi bấm thêm thì sẽ thêm vào phần cuối mảng
// xử lí: duyệt qua từng mảng và phải lớn hơn 0 là số dương
// output: xuất ra tổng 
document.getElementById('tong').onclick=function(e){
  e.preventDefault();
  tong=tinhTong(mang);
  document.getElementById('kq1').innerHTML=`Tổng số dương:${tong}`;
}
// Ham tính tổng các số dương
function tinhTong(mang){
  var tong=0;


  mang.forEach((value)=>{
    if(value>0){
      tong+=value;
    }
  })
  return tong;
}
//Bai 2
// logic: duyện qua từng phần tử và tạo 1 biến để lưu tạm dem=0 và nếu số mảng nhập lo8n1 hơn 0 thì đếm tăng 1
document.getElementById('dem').onclick=function(e){
  e.preventDefault();
  var demSoNguyenDuong=soNguyenDuong(mang);
  document.getElementById('kq2').innerHTML=`Đếm các số dương trong mảng:${demSoNguyenDuong}`;
}
function soNguyenDuong(mang){
  var dem=0;
  mang.forEach((value,index)=>{
   if(value>0){
    dem+=1;
   }
  
  })
  return dem;
 }
//Bai 3:Tìm số nhỏ nhất
//logic: duyệt qua từng mảng và gắn giá trị đầu tiên là mảng đầu nếu mảng đầu tiên lớn hơn mảng i và mảng đầu bẳng với mảng[i] vd min=3 mà mang[i]=5 thì min>mang[i] và đổi chỗ value
document.getElementById('nhonhat').onclick=function(e){
  e.preventDefault();
  var timSoNhoNhat=soNhoNhat(mang);
  document.getElementById('kq3').innerHTML=`Số nhỏ nhất trong mảng:${timSoNhoNhat}`;
}
// 
function soNhoNhat(mang){
  let min=mang[0];

  for(var i=0;i<mang.length;i++){
    if(min>mang[i]){
      min=mang[i];
     
    }
  }
 return min;
}
// Bai 4 số nguyên dương nhỏ nhất
// logic nó cũng như bài 2 và 3
document.getElementById('soDuongNhoNhat').onclick=function(e){
  e.preventDefault();
  var timSoDuongNhoNhat=soDuongNhoNhat(mang);
  document.getElementById('kq4').innerHTML=`Số nhỏ nhất trong mảng:${timSoDuongNhoNhat}`;
}
// 
function soDuongNhoNhat(mang){
  min=mang[0];
  for(var i=0;i<mang.length;i++){
    if(mang[i]>0){
      if(min>mang[i]){
        min=mang[i];
      }
    }
  }
  return min;
}
//Bai 5
// logic: duyệt5 qua từng mảng và tạo 1 biến =0 nếu tửng phần tử chia 2 bằng 0 thì biến đó bằng mảng chia cho 2 ngược lại xuất không có số chẵn
document.getElementById('chancuoi').onclick=function(e){
  e.preventDefault();
  
  var soChanCuoiCung=soChanCuoi(mang);
 document.getElementById('kq5').innerHTML=`Số chẵn cuối trong mảng:${soChanCuoiCung}`;

}
function soChanCuoi(mang){
  var soChanCuoiCung=0;
  for(var i=0;i<mang.length;i++){
   if(mang[i]%2==0){
     soChanCuoiCung=mang[i];
   }else{
      soChanCuoiCung='Không có số chẵn'
   }
  
  }
  return soChanCuoiCung;
}
//Bài 6 đổi chỗ
// logic: duyệt qua từng phần tử và lấy ra 2 ô input gán giá trị nếu phần tử bằng vs giá trị 1 mình sẽ khởi tạo 1 biến lưu tạm thời và bằng vs giá trị value thì vị trí mảng bằng vị trí mảng hai cuối cùng mình sẽ đổi chỗ value vs vị trí mang vị trí thứ 2
document.getElementById('doivitri').onclick=function(e)
{
  e.preventDefault();
 var viTriMot=Number(document.getElementById('viTriMot').value);
 var viTriHai=Number(document.getElementById('viTriHai').value);
  mang.forEach(function(value,index){
    if(index===viTriMot){
      const doiCho=value;
      mang[index]=mang[viTriHai];
      mang[viTriHai]=doiCho;
    }
  })
  document.getElementById('kq6').innerHTML=`${mang}`
}
// bai 7:sắp xếp tăng dần
//logic: mình sẽ sài dùng hàm sort và return trả về max-min 
document.getElementById('sapxep').onclick=function(e){
  e.preventDefault();
  
  sapxep=mang.sort(function(max,min){
    return max-min;
  })
  document.getElementById('kq7').innerHTML=`Sắp xếp tăng dần:${sapxep}`;



}
//bài 8: số nguyên tố đầu tiên
// logic: đầu tiên mình sẽ tạo 1 function về kt số nguyên tố và truyền vào tham số nếu tham số đó nhỏ hơn một sẽ trả về sai và mình sẽ duyệt qua từng vòng lặp nếu tham số chia hết cho từng mảng trả về sai và cuối cùng sẽ trả về trủ
// và mình sẽ duyệt qua từng phần tử mảng nhập vào và kiểm tra số nguyên tố tham số truyền vào nếu là đúng thì sẽ xuất ra cái đầu tiên và dùng break dừng lại
document.getElementById('nguyentodautien').onclick=function(e){
  e.preventDefault();
console.log('asds');

for(var i=0;i<=mang.length;i++){
  if(ktSoNguyenTo(mang[i])==true){
    document.getElementById('kq8').innerHTML=`So Nguyen to dau tien la: ${mang[i]}`
    break;
  }else{
    document.getElementById('kq8').innerHTML=`Không có số nguyên tố`;
  }
  
}
 

  
}


function ktSoNguyenTo(so){
  if(so<=1){
    return -1;
    
  }
  for(let i=2;i<=Math.sqrt(so);i++){
    if(so%i===0){
      return -1;
    }
  }
  return 1;
  }

// bai 9 : kiểm tra dếm số nguyên integer
// logic : mình duyệt qua từng phần tử và tạo 1 biến dem=0 kiếm tra xem từng phần tử đó phải là integer có thì dem tăng lên 1
document.getElementById('songuyen').onclick=function(e){
  e.preventDefault();
  console.log('asd');
   var dem=0;
  mangThuc.forEach((value)=>{
  if(Number.isInteger(value)){
   dem+=1;
  }

 }
 
 )

document.getElementById('kq9').innerHTML=`Có ${dem} số Nguyên`;

}
// bai 10: kt số âm, dương
// logic : mình tạo 2 biến soAm vs soDuong lưu trữ âm vs dương và mình sẽ duyệt từng vòng lặp nếu từng phần tử bé hơn 0 thì biến âm+=1 và ngược lại số dương 
// và mình sẽ tạo 1 biến function: truyền 2 tham số nếu âm nhiều hơn dương thì xuất ra thông báo số âm nhiều hơn số dương và trường hợp dương nhiều hơn âm cũng vậy và cả trường hợp bằng nhau
document.getElementById('sosanh').onclick=function(e){
  e.preventDefault();
  var soAm=0;
var soDuong=0;

mang.forEach(function (value) {
  if(value<0){
    soAm+=1;

  }else if(value>0){
    soDuong+=1;
   
  }
});
 var soSanh=soSanhSo(soAm,soDuong);
  document.getElementById('kq10').innerHTML=`${soSanh},Số âm ${soAm},Số Dương ${soDuong}`;

}

function soSanhSo(soAm,soDuong){
  $thongBao='';
  if(soAm>soDuong){
    $thongBao='số âm nhiều hơn số dương';
  }else if(soAm<soDuong){
    $thongBao='số dương nhiều hơn số âm';
  }else{
    $thongBao='số âm bằng số dương';
  }
  return $thongBao;
  }