import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VehiclesActions } from "./vehicles.actions";
import { combineLatest, map, mergeMap, switchMap } from "rxjs";
import { VehiclesData } from "../data/vehicles.data";

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
                        map(vehicleData => ({ ...vehicle, ...vehicleData }))
                    )));
                }),
                map(vehicles => VehiclesActions.getVehiclesSuccess({ vehicles })),
            );
        }),
    )}, { functional: true }
);
