
import { HousingLocation } from './../housing-location';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { FormGroup , FormControl , ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule , ReactiveFormsModule],
   templateUrl:'./details.component.html',
   styleUrl: './details.component.css'
})
export class DetailsComponent {

// injection des routes active
route: ActivatedRoute = inject(ActivatedRoute);
housingLocationId = -1;
housingService = inject(HousingService);
housingLocation :HousingLocation | undefined ;
/*form control */ 
applyForm = new FormGroup({
firstName : new FormControl(''),
lastName : new FormControl(''),
email : new FormControl(''),

})

constructor(){

  /* recuperer le id */
  const  housingLocationId = Number(this.route.snapshot.params['id']);
  /* ajouter le id dans le URL*/ 
 this.housingService.getHousingLocatioById(housingLocationId).then(housingLocation  => {
this.housingLocation = housingLocation ;

 });
}

submitApplication(){

  this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
  )
  window.alert('Form submitted successfully!');
}



}
