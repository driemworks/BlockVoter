import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-dialog-content-example-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css']
  })
  export class DialogComponent {
	address: string;
	constructor(public dialogRef: MatDialogRef<DialogComponent>) { };
  }
