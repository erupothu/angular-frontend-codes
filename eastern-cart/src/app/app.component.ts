import { Component } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eastern-cart';

  items: Array<string> = ['headphone', 'powerbanks', 'ear phones', 'tvs'];
  searchedItems: any;

  constructor(private filterPipe: FilterPipe) { }

  filterData(selectedProduct: string) {
    this.searchedItems = this.filterPipe.transform(this.items, selectedProduct);
  } 
}
