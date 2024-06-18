import { createFeature, createReducer, on } from "@ngrx/store";
import { VehiclesActions,  } from "./vehicles.actions";

export interface VehiclesState {
    vehicles: any;
};

export const initialState: VehiclesState = {
    vehicles: null,
};

export const vehiclesFeature = createFeature({
    name: 'vehicles',
    reducer: createReducer(
        initialState,
        on(VehiclesActions.getVehiclesSuccess, (state, { vehicles }) => ({ ...state, vehicles })),
    ),
});
