import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { vehiclesFeature } from './store/vehicles.feature';
import { provideEffects } from '@ngrx/effects';
import * as VehiclesEffects from './store/vehicles.effects';
import { VehiclesData } from './data/vehicles.data';
import { provideHttpClient } from '@angular/common/http';

export const vehiclesFeatureRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./vehicles/vehicles.component').then(c => c.VehiclesComponent),
        providers: [
            provideHttpClient(),
            VehiclesData,
            provideState(vehiclesFeature),
            provideEffects(VehiclesEffects)
        ],
    },
];
