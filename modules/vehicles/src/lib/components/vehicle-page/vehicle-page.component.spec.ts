import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclePageComponent } from './vehicle-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { vehiclesFeature } from '../../store/vehicles.feature';
import { By } from '@angular/platform-browser';
import { VehicleBodystyle, VehicleDrivetrain } from '../../models/vehicles.model';

const vehicle = (id: string) => ({
    apiUrl: 'api/test',
    description: 'Test Car',
    id,
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
    price: '40000',
});

describe('VehiclePageComponent', () => {
    let component: VehiclePageComponent;
    let fixture: ComponentFixture<VehiclePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VehiclePageComponent],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: vehiclesFeature.selectVehicles,
                            value: [
                                vehicle('1'),
                                vehicle('2'),
                                vehicle('3'),
                            ],
                        }
                    ]
                })
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(VehiclePageComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display a vehicle card for each vehicle in the store', () => {
        const cards = fixture.debugElement.queryAll(By.css('lib-vehicle-card'));

        expect(cards.length).toEqual(3);
    });
});
