import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Vehicle } from "../models/vehicles.model";

export const VehiclesActions = createActionGroup({
    source: 'Vehicles',
    events: {
        getVehicles: emptyProps(),
        getVehiclesSuccess: props<{ vehicles: Vehicle[] }>(),
        getVehiclesError: props<any>(),
    }
});
