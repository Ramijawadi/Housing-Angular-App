import { HousingService } from './../services/housing.service';
import { Component , inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
 
})
export class HomeComponent {
housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);
filteredLocationList : HousingLocation[]=[] ;


constructor() {

this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
this.housingLocationList = housingLocationList;
this.filteredLocationList = housingLocationList;

});

}


filteredResults(text:string){

  if(!text) this.filteredLocationList = this.housingLocationList;

  this.filteredLocationList = this.housingLocationList
  .filter(housingLocationList =>housingLocationList?.city.toLowerCase().includes(text.toLowerCase()));
}
}
