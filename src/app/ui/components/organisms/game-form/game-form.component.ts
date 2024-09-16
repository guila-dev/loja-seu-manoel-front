import { Component } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.css'
})
export class GameFormComponent {
  title = 'Inicial'
  price = ''
  imageUrl = ''
  dimensions = ''

  send(){
    const { title, price, imageUrl }  = this
    console.log(
      title, price, imageUrl
    )
  }
}
