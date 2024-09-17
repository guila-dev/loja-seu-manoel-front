import { Component, inject } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { ButtonComponent } from '../../../../../atoms/button/button.component';
import { FormsModule } from '@angular/forms';
import { NewGameUseCase } from '../../../../../../../core/usecases/new-game.usecase';
import { Router } from '@angular/router';
import { Dimensions } from '../../../../../../../core/entities/dimensions.entity';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule],
  templateUrl: './game-form.component.html',
})
export class GameFormComponent {
  newGameService = inject(NewGameUseCase)
  router = inject(Router)
  name = ''
  price = 0
  coverImage = ''
  description = ''
  dimensions: Dimensions = {
    height: 0,
    length: 0,
    width: 0
  }
  send(){
    const { name, price, coverImage, description, dimensions }  = this
    if(this.isInvalid()){
      alert('Alguns campos não foram preenchidos')
      return;
    }
    if(this.invalidDimensions()){
      alert('Dimensões estão invalidas')
      return;
    }
    this.newGameService.execute({
      name,
      price,
      dimensions,
      description,
      coverImage
    })

    this.router.navigate(['home'])
  }

  isInvalid(): boolean{
    const { name, price, coverImage, description, dimensions }  = this

    if( name == '' 
      || price <= 0
      || coverImage == ''
      || description == '') return true;
    return false
  }

  invalidDimensions(){
    const { dimensions }  = this
    console.log(dimensions);
    if(dimensions.height > 0 || dimensions.length > 0 || dimensions.width > 0) return false;
    return true;
  }
}
