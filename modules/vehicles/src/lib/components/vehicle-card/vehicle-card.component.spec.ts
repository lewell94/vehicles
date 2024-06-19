import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleCardComponent } from './vehicle-card.component';
import { Vehicle, VehicleBodystyle, VehicleDrivetrain } from '../../models/vehicles.model';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

const vehicle: Vehicle = {
    apiUrl: 'api/test',
    description: 'Test Car',
    id: 'test',
    media: [
        { name: 'img', url: '/img/test.jpg' },
        { name: 'img-small', url: '/img/test-small.jpg' }
    ],
    meta: {
        bodystyles: [VehicleBodystyle.saloon],
        drivetrain: [VehicleDrivetrain.AWD],
        emissions: { template: 'Gas', value: 1000 },
        passengers: 4
    },
    modelYear: '2024',
    name: 'Test Name',
    price: '£40000',
};

@Component({
    selector: 'lib-test-component',
    template: '<lib-vehicle-card [vehicle]="vehicle" [isLast]="isLast"></lib-vehicle-card>',
    standalone: true,
    imports: [VehicleCardComponent],
})
class TestComponent {
    vehicle = vehicle;
    isLast = false;
}

describe('VehicleCardComponent', () => {
    let testComponent: TestComponent;
    let component: VehicleCardComponent;
    let fixture: ComponentFixture<VehicleCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = fixture.debugElement.query(By.css('lib-vehicle-card')).componentInstance;

        testComponent.vehicle = vehicle;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the small image by default', () => {
        const img = fixture.debugElement.query(By.css('.vehicle__image img'));

        expect(img.nativeElement.src).toContain('/img/test-small.jpg');
    });

    it('should display the vehicle name', () => {
        const name = fixture.debugElement.query(By.css('.vehicle__name'));

        expect(name.nativeElement.innerHTML).toEqual('Test Name');
    });

    it('should display the vehicle price', () => {
        const price = fixture.debugElement.query(By.css('.vehicle__price'));

        expect(price.nativeElement.innerHTML).toEqual('From £40000');
    });

    it('should not display the price if it is missing from the vehicle', () => {
        testComponent.vehicle = {
            apiUrl: 'api/test',
            description: 'Test Car',
            id: 'test',
            media: [
                { name: 'img', url: '/img/test.jpg' },
                { name: 'img-small', url: '/img/test-small.jpg' }
            ],
            meta: {
                bodystyles: [VehicleBodystyle.saloon],
                drivetrain: [VehicleDrivetrain.AWD],
                emissions: { template: 'Gas', value: 1000 },
                passengers: 4
            },
            modelYear: '2024',
            name: 'Test Name',
        };
        fixture.detectChanges();

        const price = fixture.debugElement.query(By.css('.vehicle__price'));

        expect(price).toBeFalsy();
    });

    it('should display the vehicle description', () => {
        const desc = fixture.debugElement.query(By.css('.vehicle__description'));

        expect(desc.nativeElement.innerHTML).toEqual('Test Car');
    });

    it('should not append the --last class to the body if isLast is false', () => {
        const body = fixture.debugElement.query(By.css('.vehicle__body--last'));

        expect(body).toBeFalsy();
    });

    it('should append the --last class to the body if isLast is true', () => {
        testComponent.isLast = true;
        fixture.detectChanges();

        const body = fixture.debugElement.query(By.css('.vehicle__body--last'));

        expect(body).toBeTruthy();
    });
});
