import { of } from "rxjs";
import { VehiclesData } from "../data/vehicles.data";
import { getVehicles } from './vehicles.effects';
import { VehiclesActions } from "./vehicles.actions";
import { Vehicle } from "../models/vehicles.model";

describe('VehiclesEffects', () => {

    it('should dispatch a success action when the data is returned', (done) => {
        const vehicleDataMock = {
            getVehicles: () => of([{ id: '1', name: 'One' }]),
            getVehicleData: () => of({ price: '10000', description: 'Number one car' }),
        } as unknown as VehiclesData;
        const actionsMock$ = of(VehiclesActions.getVehicles);

        getVehicles(actionsMock$, vehicleDataMock).subscribe(action => {
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
});
