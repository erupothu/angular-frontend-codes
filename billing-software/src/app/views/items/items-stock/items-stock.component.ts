import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-stock',
  templateUrl: './items-stock.component.html',
  styleUrls: ['./items-stock.component.css']
})
export class ItemsStockComponent implements OnInit {

  allItems = [];

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.allItems = this.itemService.itemsList;
  }

}
