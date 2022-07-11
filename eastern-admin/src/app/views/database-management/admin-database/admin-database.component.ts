import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FlipComponent } from 'ngx-flip';
import { AdminDatabaseService } from './admin-database.service';

@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.component.html',
  styleUrls: ['./admin-database.component.css']
})
export class AdminDatabaseComponent implements OnInit {

  // @ViewChild('front', { static: false })) front1: ElementRef;
  // @ViewChild('back', { static: false })) back1: ElementRef;
  // @ViewChild(FlipComponent, { static: false }) flipComponent: FlipComponent;
  // @Input() flip?: any;
  // @Input() back?: string; 

  databases: any = [
    {name: 'testdb'},
    {name: 'harishdb'},
    {name: 'mysqldb'}
  ];
  tables: any = [
    {name: 'user'},
    {name: 'harish_table'},
    {name: 'employee'}
  ];
  
  tableflip = false;
  dbFlip = false;
  tableName: string;
  flip = false;
  tableMadat = ['Yes', 'No'];
  tableTypes = ['VARCHAR', 'INTEGER', 'LONG', 'DATE', 'TIMESTAMP'];
  tableLength = Array.from({length: 250}, (value, key) => key)
  columns = [
    {tableName: '', columnName: '', changeColumnName: '', mandatory: '', columnType: '', length: '', extra: ''}
  ];
  constructor(private adminDatabaseService: AdminDatabaseService) { }

  ngOnInit(): void {
    this.flip = !this.flip;
    this.tableflip = !this.tableflip;
    this.dbFlip = !this.dbFlip;
  }

  rotate() {
    this.flip = !this.flip;
  }

  addColumn() {
    // const obj = {colName: 'name1', mandatory: 'yes1', type: 'vachar1', length: '1001'};
    const obj = {tableName: '', columnName: '', changeColumnName: '', mandatory: '', columnType: '', length: '', extra: ''}
    this.columns.push(obj);
  }

  remvoeColumn(index) {
    this.columns.splice(index,1);
  }

  saveData() {
    const InsertIntoTableRequest = {
      tableName: this.tableName,
      columns: this.columns
    }
    this.adminDatabaseService.saveTableData(this.columns).subscribe(data => {
      this.tableflip = !this.tableflip
    });
    
  }

}
