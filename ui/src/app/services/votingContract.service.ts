import { Injectable } from '@angular/core';

@Injectable()
export class VotingContractService {

    constructor() { }

    public getCandidates = (contract, callback) => {
        const candidates = contract.getCandidates();
        callback(candidates);
    }

    public getName = (contract, callback) => {
        const name = contract.getName();
        callback(name);
    }

    public getDescription = (contract, callback) => {
        const description = contract.getDescription();
        callback(description);
    }

    public getMetaData = (contract, callback) => {
        const candidates = contract.getCandidates();
        const name = contract.getName();
        const description = contract.getDescription();
        callback(name, description, candidates);
    }

    public getChairman = (contract, callback) => {
        const address = contract.getChairmanAddress();
        callback(address);
    }

    public vote = (contract, fromAddress, candidate, callback) => {
        const voted = contract.vote(candidate, {from: fromAddress, gas: 3000000});
        callback(voted);
    }

    public getResultsForCandidateAtIndex = (contract, index, callback) => {
        const results = contract.getResultsForCandidate(index, {gas: 3000000});
        callback(results);
    }

}
