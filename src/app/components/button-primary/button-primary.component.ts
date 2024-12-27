import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input ("btn-text") btnText: string = ""
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Output("submit") onSubmit = new EventEmitter<void>();

  submit(){
    this.onSubmit.emit();
  }
}
