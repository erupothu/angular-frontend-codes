import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ItemsService } from '../items.service';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  allItems = [];
  newItem = {name: null, price: null, discount: null, barcode: null, stock: null };

  constructor(public dialog: MatDialog, private itemService: ItemsService) { }

  ngOnInit(): void {
    this.allItems = this.itemService.itemsList;
  }

  addItems(item) {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.allItems = this.itemService.itemsList;
    });
  }

}