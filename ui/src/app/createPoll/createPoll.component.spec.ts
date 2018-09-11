import { TestBed, inject } from '@angular/core/testing';

import { CreatePollComponent } from './createPoll.component';

describe('a createPoll component', () => {
	let component: CreatePollComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CreatePollComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CreatePollComponent], (CreatePollComponent) => {
		component = CreatePollComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});