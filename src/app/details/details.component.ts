
import { HousingLocation } from './../housing-location';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';

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
housingService = inject(HousingService);
housingLocation :HousingLocation | undefined ;

constructor(){

  const  housingLocationId = Number(this.route.snapshot.params['id']);

  this.housingLocation = this.housingService.getHousingLocatioById(housingLocationId);
}

}
