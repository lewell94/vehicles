import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Vehicle } from "../models/vehicles.model";
import { HttpErrorResponse } from "@angular/common/http";

export const VehiclesActions = createActionGroup({
    source: 'Vehicles',
    events: {
        getVehicles: emptyProps(),
        getVehiclesSuccess: props<{ vehicles: Vehicle[] }>(),
        getVehiclesError: props<{ err: HttpErrorResponse }>(),
    }
});
