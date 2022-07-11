import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewBillDialogComponent } from './add-new-bill-dialog/add-new-bill-dialog.component';
import { BillsService } from '../bills.service';

@Component({
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  animal: string;
  allItems: any;

  selectedItems: any;
  total = 0;
  yousaved = 0;
  CurrentDate = new Date();
  customerName = 'Vinny';

  constructor(public dialog: MatDialog, private billService: BillsService) { }

  ngOnInit(): void {
    this.selectedItems = this.billService.billItems;
  }

  addItem() {
    const dialogRef = this.dialog.open(AddNewBillDialogComponent, {
      width: '250px',
      data: this.allItems,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
      this.selectedItems = this.billService.billItems;
      this.total = this.billService.total;
      this.yousaved = this.billService.yousaved;
    });
  }

  printPage() {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
         <html>
          <body onload="window.print();window.close()">${printContents}</body>
         </html>
         `);
    popupWin.document.close();

    this.billService.bills.push(this.billService.billItems);
    this.billService.billItems = [];
    this.selectedItems = this.billService.billItems;
    
    // window.print();
  }

}