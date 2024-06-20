import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ErrorService {

    logHttpError(err: HttpErrorResponse) {
        console.log(err);
        // connect to some loggin service e.g. datadog
    }
}