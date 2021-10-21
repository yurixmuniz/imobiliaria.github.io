import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Nome": "Yuri",
      "Tipo": "Casa",
      "Preco": 340000
    },
    {
      "Id": 2,
      "Nome": "Gustavo",
      "Tipo": "Predio",
      "Preco": 440000
    },
    {
      "Id": 3,
      "Nome": "Ivan",
      "Tipo": "Condominio",
      "Preco": 520000
    },
    {
      "Id":4,
      "Nome":"Márcia",
      "Tipo":"Kitnet",
      "Preco": 80000
    },
    {
      "Id":5,
      "Nome":"Maria",
      "Tipo":"Casa",
      "Preco": 340000
    },
    {
      "Id":6,
      "Nome":"João",
      "Tipo":"Apartamento",
      "Preco":280000
    },
    {
      "Id":7,
      "Nome":"José",
      "Tipo":"Duplex",
      "Preco": 1670000
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
