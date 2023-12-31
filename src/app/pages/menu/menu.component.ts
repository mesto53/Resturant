import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedServicesService } from '../../services/shared-services.service';
import { Menu } from '../../services/Menu';
import { Observable, map } from 'rxjs';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: Observable<Menu[]>;
  constructor(private service: SharedServicesService) {
    this.menuItems = this.service.getMenu().pipe(
      map((items: DocumentData[]) => {
        // Map each item to the required Menu type
        return items.map((item) => {
          return {
            id: item['id'],
            name: item['name'],
            price: item['price'],
          } as Menu;
        });
      })
    );
  }
}
