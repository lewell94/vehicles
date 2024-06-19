export interface VehicleBase {
    apiUrl: string;
    id: string;
    name: string;
    media: VehicleMedia[];
    modelYear: string;
}

export interface VehicleInfo {
    description: string;
    meta: VehicleMeta;
    price?: string;
}

export type Vehicle = VehicleBase & VehicleInfo;

export interface VehicleMedia {
    name: string;
    url: string;
}

export interface VehicleMeta {
    bodystyles: VehicleBodystyle[];
    passengers: number;
    drivetrain: VehicleDrivetrain[];
    emissions: VehicleEmissions;
}

export interface VehicleEmissions {
    template: string;
    value: number;
}

export enum VehicleDrivetrain {
    'AWD',
    'RWD',
}

export enum VehicleBodystyle {
    'saloon',
    'saloon (SWB)',
    'saloon (LWB)',
    'SUV',
    'COUPÉ',
    'CONVERTABLE',
}
