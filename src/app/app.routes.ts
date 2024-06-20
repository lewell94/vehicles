import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@storyteq/vehicles').then(m => m.vehiclesFeatureRoutes)
    },
    {
        path: 'error',
        loadComponent: () => import('@storyteq/error').then(c => c.ErrorPageComponent)
    }
];
