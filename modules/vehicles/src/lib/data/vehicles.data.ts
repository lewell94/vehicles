import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VehicleBase, VehicleInfo } from "../models/vehicles.model";

@Injectable()
export class VehiclesData {

    getVehicles() {
        return this.http.get<VehicleBase[]>('https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/');
    }

    getVehicleData(id: string) {
        return this.http.get<VehicleInfo>(`https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/${id}`);
    }

    constructor(private http: HttpClient) {}
}
