import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32Workshop';

  items = [
    {name: 'Airpod', id: 1, rpice: 250 },
    {name: 'iPad', id: 2, rpice: 650 },
    {name: 'AirMax', id: 3, rpice: 450 }

  ]

  selectedItem: any;

  onItemReceive (item: any) {
    this.selectedItem = item;
  }

  // addItem(newItemEvent, string) [
  //   this.itemList.push(newItem);]
}
