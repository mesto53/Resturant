import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Menu } from './Menu';

@Injectable({
  providedIn: 'root',
})
export class SharedServicesService {
  constructor(private fs: Firestore) {}

  getMenu() {
    let col = collection(this.fs, 'menu');
    return collectionData(col, { idField: 'id' });
  }

  async addMenu(menu: Menu) {
    let col = collection(this.fs, 'menu');
    const updatedFields = {
      name: menu.name,
      price: menu.price,
    };
    await addDoc(col, updatedFields);
  }

  deleteMenu(id: number) {
    let docref = doc(this.fs, 'menu/' + id);
    return deleteDoc(docref);
  }

  async editMenu(menu: Menu) {
    const updatedFields = {
      name: menu.name,
      price: menu.price,
    };
    let docref = doc(this.fs, 'menu/' + menu.id);
    await updateDoc(docref, updatedFields);
  }
}
