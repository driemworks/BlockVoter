import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { DatabaseService } from '../services/db.service';
import { VotingContractService } from '../services/votingContract.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PollModel } from '../pollFormModel';
import { DialogComponent } from './dialog/dialog.component';

@Component({
	selector: 'app-you-polls',
	templateUrl: './yourPolls.component.html',
	styleUrls: ['./yourPolls.component.css']
})

export class YourPollsComponent implements OnInit {

	pollAddresses: any;

	panels = [];

	constructor(private web3Service: Web3Service,
				private dbService: DatabaseService,
				private votingContractService: VotingContractService,
				public dialog: MatDialog) { }

	ngOnInit() {
		console.log('account: ' + this.web3Service.account);
		this.dbService.getPollAddressesByChairman(this.web3Service.account).subscribe(res => {
			this.pollAddresses = JSON.parse(res.toString())['contractAddresses'];
			this.pollAddresses.forEach(address => {
				this.web3Service.getVoteContractByAddress(address, (contract) => {
					let _name: any;
					let _description: any;
					let _candidates: any;
					const _results = [];
					this.votingContractService.getName(contract, (name) => {
						_name = this.web3Service.ItoAscii(name);
					});
					this.votingContractService.getDescription(contract, (description) => {
						_description = this.web3Service.ItoAscii(description);
					});
					this.votingContractService.getCandidates(contract, (candidates) => {
						_candidates = this.web3Service.toAscii(candidates);
					});
					let i = 0;
					for (i = 0; i < _candidates.length; i++) {
						this.votingContractService.getResultsForCandidateAtIndex(contract, i, (results) => {
							_results.push({candidate: _candidates[i], result: results});
						});
					}

					this.panels.push({address: address, poll: new PollModel(_name, _description, _candidates), results: _results});
				});

			});
		});
	}

	openDialog(address) {
		const config = new MatDialogConfig();
		const dialogRef = this.dialog.open(DialogComponent, config);
		dialogRef.componentInstance.address = address;
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
