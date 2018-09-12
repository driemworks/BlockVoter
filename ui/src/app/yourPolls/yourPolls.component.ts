import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { DatabaseService } from '../services/db.service';
import { VotingContractService } from '../services/votingContract.service';
import { MatExpansionPanel } from '@angular/material';
import { PollModel } from '../pollModel';

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
				private votingContractService: VotingContractService) { }

	ngOnInit() {
		console.log('account: ' + this.web3Service.account);
		this.dbService.getPollAddressesByChairman(this.web3Service.account).subscribe(res => {
			this.pollAddresses = JSON.parse(res.toString())['contractAddresses'];
			this.pollAddresses.forEach(address => {
				this.web3Service.getVoteContractByAddress(address, (contract) => {
					let _name: any;
					let _description: any;
					let _candidates: any;
					this.votingContractService.getName(contract, (name) => {
						_name = this.web3Service.ItoAscii(name);
					});
					this.votingContractService.getDescription(contract, (description) => {
						_description = this.web3Service.ItoAscii(description);
					});
					this.votingContractService.getCandidates(contract, (candidates) => {
						_candidates = this.web3Service.toAscii(candidates);
					});
					this.panels.push({address: address, content: new PollModel(_name, _description, _candidates)});
				});

			});
		});
	}
}
