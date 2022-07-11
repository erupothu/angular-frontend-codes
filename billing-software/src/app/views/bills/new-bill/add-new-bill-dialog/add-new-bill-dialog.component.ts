import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BillsService } from '../../bills.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ItemsService } from 'src/app/views/items/items.service';

export interface DialogData {
   items: any;
  selected: any;
}

@Component({
  selector: 'app-add-new-bill',
  templateUrl: './add-new-bill-dialog.component.html',
  styleUrls: ['./add-new-bill-dialog.component.css']
})
export class AddNewBillDialogComponent implements OnInit {

  pickItemsFlag = false;
  quantity = 0;
  
  control = new FormControl();
  selectedItems = [];
  itemsList: any;
  filteredStreets: Observable<string[]>;
  myItem: any;

  constructor(public dialogRef: MatDialogRef<AddNewBillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private billService: BillsService, private itemService: ItemsService) { }

  ngOnInit(): void {
    this.itemsList = this.itemService.itemsList;
    this.filteredStreets = this.control.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pickItems() {
    this.pickItemsFlag = true;
  }

  addItem(item: never) {
    this.billService.billItems.push(item);
    this.dialogRef.close();
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.itemsList.filter(item => this._normalizeValue(item.name).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  onEnter(item: never) {
    this.myItem  = item;
    // this.dialogRef.close();
  }
  onSubmit() {
    this.myItem.quantity = this.quantity;
    this.myItem.price = this.myItem.mrp - (this.myItem.mrp * 2/100);
    this.myItem.finalPrice = this.quantity * this.myItem.price;
    this.billService.total = this.billService.total + this.myItem.finalPrice;
    this.billService.yousaved = this.billService.yousaved + (this.quantity * this.myItem.mrp - this.myItem.finalPrice);
    this.billService.billItems.push(this.myItem);
    this.dialogRef.close();
  }

}
