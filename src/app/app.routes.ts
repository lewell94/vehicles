import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@storyteq/vehicles').then(m => m.vehiclesFeatureRoutes)
    }
];
