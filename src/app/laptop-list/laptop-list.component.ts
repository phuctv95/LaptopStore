import { Component, OnInit } from '@angular/core';
import { ILaptop } from '../ilaptop';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: ILaptop[] = [
    {
      id: 1,
      name: 'Macbook Air 2018',
      price: 1000
    },
    {
      id: 2,
      name: 'Macbook Pro 2018',
      price: 1200
    },
    {
      id: 3,
      name: 'Acer E5-573',
      price: 600
    },
    {
      id: 4,
      name: 'Dell XPS 2015',
      price: 900
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
