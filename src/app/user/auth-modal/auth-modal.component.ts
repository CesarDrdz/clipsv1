import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(public modal: ModalService) { }

  // use life cycle hooks to check if the component is destroyed.
  ngOnInit(): void {
    this.modal.register('auth')
  }

  // memory leak should be fixed always consider how data is created. 
  ngOnDestroy() {
      this.modal.unregister('auth')
  }

}
