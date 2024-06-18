import { TestBed } from '@angular/core/testing';
import { VehiclesData } from './vehicles.data'
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('VehiclesData', () => {
    let service: VehiclesData;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                VehiclesData,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });

        service = TestBed.inject(VehiclesData);
        http = TestBed.inject(HttpTestingController);
    });

    it('should get the vehicles', async () => {
        const vehicles = [{ id: 1, name: 'One' }, { id: 2, name: 'Two' }];
        
        const vehicles$ = service.getVehicles();
        const res = firstValueFrom(vehicles$);
        const req = http.expectOne('https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/');

        expect(req.request.method).toBe('GET');

        req.flush(vehicles);

        expect(await res).toEqual(vehicles);

        http.verify();
    });

    it('should get the vehicle data', async () => {
        const vehicleData = { price: 20000, description: 'A great car' };
        
        const vehicleData$ = service.getVehicleData('GR8');
        const res = firstValueFrom(vehicleData$);
        const req = http.expectOne('https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/GR8');

        expect(req.request.method).toBe('GET');

        req.flush(vehicleData);

        expect(await res).toEqual(vehicleData);

        http.verify();
    });
});
