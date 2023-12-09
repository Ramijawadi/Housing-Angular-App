import { HousingLocation } from './../housing-location';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule ],
   templateUrl:'./details.component.html',
   styleUrl: './details.component.css'
})
export class DetailsComponent {
// injection des routes active
route: ActivatedRoute = inject(ActivatedRoute);
housingLocationId= 0;

constructor(){

  this.housingLocationId = Number(this.route.snapshot.params['id'])
}

}
