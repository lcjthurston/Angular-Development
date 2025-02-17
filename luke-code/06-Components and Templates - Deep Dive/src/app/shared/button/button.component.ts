import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // can also use button.button
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    
}
