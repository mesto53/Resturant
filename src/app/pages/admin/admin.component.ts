import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SharedServicesService } from '../../services/shared-services.service';
import { Menu } from '../../services/Menu';
import { DocumentData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  public menuItems: Observable<Menu[]>;
  public editingItemId: number | null = null;
  public isnew: boolean = false;
  public editing: boolean = false;
  public newMenuItem: Menu = new Menu(0, '', null);
  constructor(private service: SharedServicesService) {
    this.menuItems = this.service.getMenu().pipe(
      map((items: DocumentData[]) => {
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

  deleteMenuItem(id: number) {
    this.service.deleteMenu(id);
  }

  editMenuItem(id: number) {
    if (this.editingItemId === id) {
      this.editingItemId = null;
    } else if (this.editingItemId == null) {
      this.editingItemId = id;
    }
  }
  async saveAdd() {
    let price = this.newMenuItem.price;
    if (
      this.newMenuItem.name != '' &&
      this.newMenuItem.name != null &&
      this.newMenuItem.price != null &&
      this.newMenuItem.price != 0
    )
      try {
        await this.service.addMenu(this.newMenuItem);
        this.isnew = false;
        this.editingItemId = null;
        this.newMenuItem = new Menu(0, '', null);
      } catch (ex) {
        console.log(ex);
      }
  }
  add() {
    this.isnew = true;
  }
  cancel() {
    this.isnew = false;
  }
  async savEdit(Menu: Menu) {
    if (
      Menu.name !== '' &&
      Menu.name !== null &&
      Menu.price !== null &&
      Menu.price !== 0
    ) {
      try {
        await this.service.editMenu(Menu);
      } catch (ex) {
        console.log(ex);
      }
      if (this.editingItemId != null) {
        this.editMenuItem(Menu.id);
      }
    } else {
      return;
    }
  }
}
