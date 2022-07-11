import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BillsService } from '../../bills.service';
import { ItemsService } from 'src/app/views/items/items.service';

@Component({
  selector: 'app-bill-print-dialog',
  templateUrl: './bill-print-dialog.component.html',
  styleUrls: ['./bill-print-dialog.component.css']
})
export class BillPrintDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<BillPrintDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private billService: BillsService,
    private itemService: ItemsService) { }

  ngOnInit(): void {
  }

}
