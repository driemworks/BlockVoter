import { TestBed, inject } from '@angular/core/testing';

import { YourPollsComponent } from './yourPolls.component';

describe('a yourPolls component', () => {
	let component: YourPollsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				YourPollsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([YourPollsComponent], (_YourPollsComponent) => {
		component = _YourPollsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});
