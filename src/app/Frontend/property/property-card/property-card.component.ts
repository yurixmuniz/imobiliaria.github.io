import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: any

 /*  Property: any = {
    "Id":1,
    "Tipo": "Casa",
    "Preco": 120000
  }
   */
  constructor() { }

  ngOnInit(): void {
  }

}
