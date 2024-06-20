import { of } from "rxjs";
import { VehiclesData } from "../data/vehicles.data";
import { getVehicles } from './vehicles.effects';
import { VehiclesActions } from "./vehicles.actions";
import { Vehicle } from "../models/vehicles.model";
import { Router } from "@angular/router";
import { ErrorService } from "@storyteq/error";

describe('VehiclesEffects', () => {

    it('should dispatch a success action when the data is returned', (done) => {
        const vehicleDataMock = {
            getVehicles: () => of([{ id: '1', name: 'One' }]),
            getVehicleData: () => of({ price: '10000', description: 'Number one car' }),
        } as unknown as VehiclesData;
        const actionsMock$ = of(VehiclesActions.getVehicles);
        const errorServiceMock = {} as ErrorService;
        const routerMock = {} as Router;

        getVehicles(actionsMock$, vehicleDataMock, errorServiceMock, routerMock).subscribe(action => {
            expect(action).toEqual(VehiclesActions.getVehiclesSuccess({
                vehicles: [{
                    id: '1',
                    name: 'One',
                    price: '10000',
                    description: 'Number one car',
                } as Vehicle]
            }));
            done();
        });
    });

    // todo - test error cases
});
