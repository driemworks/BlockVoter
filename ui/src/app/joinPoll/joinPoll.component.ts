import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';
import { VotingContractService } from '../services/votingContract.service';

@Component({
    selector: 'app-join-poll',
    templateUrl: './joinPoll.component.html',
    styleUrls: ['./joinPoll.component.css']
})

export class JoinPollComponent implements OnInit {

    contractAddress: string;
    contract: any;
    currentContractCandidates: any;
    chairman: any;
    candidate: any;
    name: any;
    description: any;
    results = [];

    constructor(private web3Service: Web3Service,
                private votingContractService: VotingContractService) { }

    ngOnInit() { }

    onJoinPoll() {
        this.contractAddress = this.contractAddress.trim();
        this.web3Service.getVoteContractByAddress(this.contractAddress, (contract) => {
            this.contract = contract;
            this.getCandidates();
            this.getChairman();
            this.getName();
            this.getDescription();
            this.getResults(this.currentContractCandidates);
        });
    }

    getName() {
        this.votingContractService.getName(this.contract, (name) => {
            this.name = this.web3Service.ItoAscii(name);
        });
    }

    getDescription() {
        this.votingContractService.getDescription(this.contract, (description) => {
            this.description = this.web3Service.ItoAscii(description);
        });
    }

    getCandidates() {
        this.votingContractService.getCandidates(this.contract, (candidates) => {
            this.currentContractCandidates = this.web3Service.toAscii(candidates);
        });
    }

    getChairman() {
        this.votingContractService.getChairman(this.contract, (chairman) => {
            this.chairman = chairman;
        });
    }

    getResults(candidates) {
        const _results = [];
        for (let i = 0; i < candidates.length; i++) {
            this.votingContractService.getResultsForCandidateAtIndex(this.contract, i, (result) => {
                _results.push([candidates[i]] + ': ' + result.toNumber());
            });
        }
        this.results = _results;
    }

    vote(candidate) {
        console.log('candidate selected: ' + candidate);
        this.votingContractService.vote(
            this.contract, this.web3Service.getAddress(), this.web3Service.IfromAscii(candidate), (voted) => {
                this.getResults(this.currentContractCandidates);
        });
    }
}
