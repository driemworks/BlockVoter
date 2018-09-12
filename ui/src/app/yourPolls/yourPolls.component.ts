import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { DatabaseService } from '../services/db.service';
import { VotingContractService } from '../services/votingContract.service';

@Component({
	selector: 'app-you-polls',
	templateUrl: './yourPolls.component.html',
	styleUrls: ['./yourPolls.component.css']
})

export class YourPollsComponent implements OnInit {

	pollAddresses: any;
 
	constructor(private web3Service: Web3Service,
				private dbService: DatabaseService,
				private votingContractService: VotingContractService) { }

	ngOnInit() {
		console.log('account: ' + this.web3Service.account);
		this.dbService.getPollAddressesByChairman(this.web3Service.account).subscribe(res => {
			this.pollAddresses = JSON.parse(res.toString())['contractAddresses'];
		});
	}

	getPollData(address) {
		this.web3Service.getVoteContractByAddress(address, (contract) => {
			this.votingContractService.getMetaData(address, (name, description, candidates) => {
				console.log(name);
			});
		});
	}
}
