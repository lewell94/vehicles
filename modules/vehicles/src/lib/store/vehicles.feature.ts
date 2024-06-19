import { createFeature, createReducer, on } from "@ngrx/store";
import { VehiclesActions,  } from "./vehicles.actions";
import { Vehicle } from "../models/vehicles.model";

export interface VehiclesState {
    vehicles: Vehicle[] | null;
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
