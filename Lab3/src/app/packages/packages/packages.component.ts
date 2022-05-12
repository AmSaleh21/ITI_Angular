import {Component, OnInit} from '@angular/core';
import {Product} from "../../_models/product";
import {ShowImageDialogComponent} from "../show-image-dialog/show-image-dialog.component"
import {MatDialog} from "@angular/material/dialog";

const DUMMY_PRODUCT: Product = {
  id: 0,
  name: '',
  imagePath: 'https://picsum.photos/200/300',
  code: '',
  available: new Date(),
  price: 0,
  rating: 0
};

@Component({
  selector: 'lab3-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})

export class PackagesComponent implements OnInit {

  filter: string = "";
  isEditing: boolean = false;

  products: Product[] = [
    new Product(1, 'https://picsum.photos/200/300', 'pr1', 'gr-01', new Date(), 30, 4),
    new Product(2, 'https://picsum.photos/200/300', 'pr2', 'gr-02', new Date(), 100, 2)
  ];

  public dummyProduct: Product = DUMMY_PRODUCT;

  constructor(public dialog:MatDialog) {
  }

  add(id: any, name: any, img: any, code: any, date: any, price: any, rate: any): void {
    let isNew: boolean = true;
    for (let product of this.products) {
      if (id == product.id) {
        isNew = false;
        break;
      }
    }
    if (isNew)
      this.products.push(new Product(id, img, name, code, date, price, rate));
    else
      alert('id already exists');
  }

  delete(id: number) {
    if (confirm(`are you sure you want to delete product #${id}`)) {
      let index = this.products.findIndex((product) => {
        return product.id === id
      });
      this.products.splice(index, 1);
    }
  }

  save(id: any, name: any, img: any, code: any, date: any, price: any, rate: any): void {
    let index = this.products.findIndex(product=>product.id===id)
    this.products[index].name = name;
    this.products[index].imagePath = img;
    this.products[index].code = code;
    this.products[index].available = date;
    this.products[index].price = price;
    this.products[index].rating = rate;
    this.isEditing = false;
  }

  edit(id: any) {
    let index = this.products.findIndex(product=>product.id===id)
    this.dummyProduct.id = this.products[index].id;
    this.dummyProduct.name = this.products[index].name;
    this.dummyProduct.imagePath = this.products[index].imagePath;
    this.dummyProduct.code = this.products[index].code;
    this.dummyProduct.available = this.products[index].available;
    this.dummyProduct.price = this.products[index].price;
    this.dummyProduct.rating = this.products[index].rating;
  }

  showImage(image: any) {
    let dialogRef = this.dialog.open(ShowImageDialogComponent, {
      height: '350px',
      width: '250px',
      data: image
    });
  }

  ngOnInit(): void {
  }

}
