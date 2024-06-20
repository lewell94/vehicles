import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { VehiclesState } from '../../store/vehicles.feature';
import { Observable } from 'rxjs';
import { vehiclesFeature } from '../../store/vehicles.feature';
import { VehiclesActions } from '../../store/vehicles.actions';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { Vehicle } from '../../models/vehicles.model';

@Component({
  selector: 'lib-vehicles-page',
  standalone: true,
  imports: [CommonModule, VehicleCardComponent],
  templateUrl: './vehicle-page.component.html',
  styleUrl: './vehicle-page.component.scss',
})
export class VehiclePageComponent {

    vehicles$: Observable<Vehicle[] | null>;

    constructor(private store: Store<VehiclesState>) {
        this.vehicles$ = this.store.select(vehiclesFeature.selectVehicles);

        this.store.dispatch(VehiclesActions.getVehicles());
    }
}
