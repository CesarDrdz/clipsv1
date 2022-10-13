import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // properties must be initialized or you'll get an err.
  @Input() control: FormControl = new FormControl()
  @Input() type = 'text'
  @Input() placeholder = ''

  constructor() { }

  ngOnInit(): void {
  }

}
