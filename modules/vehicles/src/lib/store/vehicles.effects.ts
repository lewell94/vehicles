import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VehiclesActions } from "./vehicles.actions";
import { catchError, combineLatest, map, mergeMap, of, switchMap } from "rxjs";
import { VehiclesData } from "../data/vehicles.data";
import { Vehicle } from "../models/vehicles.model";
import { ErrorService } from '@storyteq/error';
import { Router } from "@angular/router";

export const getVehicles = createEffect((
    actions$ = inject(Actions),
    vehiclesData = inject(VehiclesData),
    errorService = inject(ErrorService),
    router = inject(Router),
) => {
    return actions$.pipe(
        ofType(VehiclesActions.getVehicles),
        switchMap(() => {
            return vehiclesData.getVehicles().pipe(
                mergeMap(vehicles => {
                    return combineLatest(vehicles.map(vehicle => vehiclesData.getVehicleData(vehicle.id).pipe(
                        map(vehicleData => ({ ...vehicle, ...vehicleData })),
                        catchError(err => {
                            console.log('ERROR')
                            errorService.logHttpError(err);
                            return of(null)
                        }),
                    )));
                }),
                map(vehicles => vehicles.filter(vehicle => !!vehicle) as Vehicle[]),
                map(vehicles => VehiclesActions.getVehiclesSuccess({ vehicles })),
                catchError(err => {
                    errorService.logHttpError(err);

                    /**
                     * This is a simlpification
                     * In a large production app, different errors would lead to different places e.g. 401 - login page, 404 - not found page etc
                     * Additionally, managing these kinds of redirects would not be done here but would be better done elsewhere e.g. an error effect, or some shared error service
                     * An interceptor could also potentially be used to manage errors across the application
                     */
                    router.navigate(['/error']);

                    return of(VehiclesActions.getVehiclesError({ err }));
                }),
            );
        }),
    )}, { functional: true }
);
