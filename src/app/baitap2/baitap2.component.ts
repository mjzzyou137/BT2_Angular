import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.scss']
})
export class Baitap2Component implements OnInit {
  p:number = 1;
  SanPham: any = [
    {
      MaSP: '1',
      TenSP: 'SonyXZ',
      Gia: '1000',
    },
    {
      MaSP: '2',
      TenSP: 'SonyXZ2',
      Gia: '1000',
    },
    {
      MaSP: '3',
      TenSP: 'HTC U Ultra',
      Gia: '1000',
    },
    {
      MaSP: '4',
      TenSP: 'HTC U12 Plus',
      Gia: '1000',
    },
    {
      MaSP: '5',
      TenSP: 'iPhone XS Max',
      Gia: '1000',
    },
    {
      MaSP: '6',
      TenSP: 'iPhone XR',
      Gia: '1000',
    },
    {
      MaSP: '7',
      TenSP: 'Xiaomi Mi Note 3',
      Gia: '9900',
    },
    {
      MaSP: '8',
      TenSP: 'Xiaomi Mi 8',
      Gia: '1000',
    },
    {
      MaSP: '9',
      TenSP: 'Galaxy Note 9',
      Gia: '1000',
    },
    {
      MaSP: '10',
      TenSP: 'Galaxy S9 Plus',
      Gia: '1000',
    },
    {
      MaSP: '11',
      TenSP: 'NokiaX9',
      Gia: '1000',
    },
  ]
  constructor() { }

  ngOnInit() {
    this.LocalStorage()
  }
  ThemSanPham(masp, tensp, gia) {
    let SanPhamThem = {
      MaSP: masp,
      TenSP: tensp,
      Gia: gia,
    }
    this.SanPham.push(SanPhamThem)
    localStorage.setItem("sanpham",JSON.stringify(this.SanPham))
  }
  LocalStorage(){
    if(localStorage.getItem("sanpham") !== null){
      this.SanPham = JSON.parse(localStorage.getItem("sanpham"));
    }
  }
  XoaSanPham(masp){
    let viTri = this.SanPham.findIndex(function(item){
      return masp === item.MaSP;
    })
    this.SanPham.splice(viTri,1);
  }

}
