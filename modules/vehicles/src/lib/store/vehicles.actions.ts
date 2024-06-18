import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const VehiclesActions = createActionGroup({
    source: 'Vehicles',
    events: {
        getVehicles: emptyProps(),
        getVehiclesSuccess: props<{ vehicles: any[] }>(),
        getVehiclesError: props<any>(),
    }
});
