import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VehiclesActions } from "./vehicles.actions";
import { catchError, combineLatest, map, mergeMap, of, switchMap } from "rxjs";
import { VehiclesData } from "../data/vehicles.data";
import { Vehicle } from "../models/vehicles.model";

export const getVehicles = createEffect((
    actions$ = inject(Actions),
    vehiclesData = inject(VehiclesData)
) => {
    return actions$.pipe(
        ofType(VehiclesActions.getVehicles),
        switchMap(() => {
            return vehiclesData.getVehicles().pipe(
                mergeMap(vehicles => {
                    return combineLatest(vehicles.map(vehicle => vehiclesData.getVehicleData(vehicle.id).pipe(
                        map(vehicleData => ({ ...vehicle, ...vehicleData })),
                        catchError(() => of(null)),
                    )));
                }),
                map(vehicles => vehicles.filter(vehicle => !!vehicle) as Vehicle[]),
                map(vehicles => VehiclesActions.getVehiclesSuccess({ vehicles })),
            );
        }),
    )}, { functional: true }
);
