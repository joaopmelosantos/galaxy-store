import { Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() id: number = 0
  @Input() name: string = ""
  @Input() price: number = 0
  @Input() category: string = ""
  @Input() imageURL: string = ""

  constructor() { }
  
  ngOnInit(): void {
  }

}
