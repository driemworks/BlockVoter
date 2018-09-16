import { TestBed, inject } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('a dialog component', () => {
	let component: DialogComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DialogComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DialogComponent], (DialogComponent) => {
		component = DialogComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});