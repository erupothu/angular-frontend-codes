import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemsService } from '../../items.service';

export interface DialogData {
  name: string;
  mrp: number;
  price: number;
  discount: number;
  barcode: number;
  stock: number;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent implements OnInit {

  // newItem = {name: null, price: null, discount: null, barcode: null, stock: null };

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private itemService: ItemsService) { }


  ngOnInit(): void {
  }

  SaveItem(newItem) {
    let idx = this.itemService.itemsList.findIndex(item => item.barcode === newItem.barcode);
    if (idx < 0) {
      this.itemService.itemsList.push(newItem);
    }
    this.dialogRef.close();
  }

}
