import { Injectable } from '@angular/core';

// add type safety
interface IModal {
  // the id propety will help our service idenify the modal visible will serve the same purpose as visible propety 
  id: string;
  visible: boolean;
}

// 
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  unregister(id: string) {
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

// the ? is called optional chaining !! covert to bool therefore a false value will remain false and same with true.
  isModalOpen(id: string) : boolean {
    return !!this.modals.find(element => element.id ===id)?.visible
   }

  toggleModal(id: string) {
    const modal = this.modals.find(element => element.id ===id)

    if(modal) {
      modal.visible = !modal.visible
    }
    // this.visible = !this.visible
  }
}
