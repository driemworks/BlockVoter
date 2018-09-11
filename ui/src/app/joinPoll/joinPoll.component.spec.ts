import { TestBed, inject } from '@angular/core/testing';

import { JoinPollComponent } from './joinPoll.component';

describe('a joinPoll component', () => {
	let component: JoinPollComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				JoinPollComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([JoinPollComponent], (JoinPollComponent) => {
		component = JoinPollComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});