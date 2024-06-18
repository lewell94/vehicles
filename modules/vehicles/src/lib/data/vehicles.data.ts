import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class VehiclesData {

    getVehicles(): Observable<any[]> {
        return this.http.get<any[]>('https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/');
    }

    getVehicleData(id: string): Observable<any> {
        return this.http.get<any[]>(`https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/${id}`);
    }

    constructor(private http: HttpClient) {}
}
