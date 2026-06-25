import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { IHousingLocation } from '../housing-location';

@Component({
    selector: 'app-home',
    imports: [HousingLocation],
    template: `
        <section>
            <form>
                <input type="text" placeholder="Filter by city" />
                <button class="primary" type="button">Search</button>
            </form>
        </section>
        <section class="results">
            @for (housingLocation of housingLocationList; track $index) {
                <app-housing-location [housingLocation]="housingLocation" />
            }
        </section>
    `,
    styleUrls: ['./home.css'],
})
export class Home {
    housingLocationList: IHousingLocation[] = [
        {
            id: 1,
            name: 'Test name',
            city: 'Test city',
            state: 'Test state',
            photo: '/assets/house-1.png',
            availableUnits: 4,
            wifi: true,
            laundry: true,
        },
        {
            id: 2,
            name: 'Test name',
            city: 'Test city',
            state: 'Test state',
            photo: '/assets/house-2.jpg',
            availableUnits: 3,
            wifi: true,
            laundry: true,
        },
    ];
}
