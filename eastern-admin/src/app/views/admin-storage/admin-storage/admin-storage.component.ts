import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { files } from './temporary-data';

interface FoodNode {
  name: string;
  type?: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-admin-storage',
  templateUrl: './admin-storage.component.html',
  styleUrls: ['./admin-storage.component.css']
})
export class AdminStorageComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = files;
   }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
