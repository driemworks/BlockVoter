import { Injectable, NgZone } from '@angular/core';
// import { contract } from 'truffle-contract';

const Web3 = require('web3');
const contract = require('truffle-contract');
const deployer = require('truffle-deployer');

declare var window: any;
declare var require: any;

const voteContractArtifact = require('../../../truffle/build/contracts/VotingContract.json');
declare var require: any;
declare var window: any;

@Injectable()
export class Web3Service {
  // the Vote abi
    VotingContract = contract(voteContractArtifact);
    provider: any;
    account: any;
    accounts: any;
    web3: any;
    // for testing purposes only! => this MUST be removed later
    // contractAddress: any;

    deployedContract: any;

    constructor(private _ngZone: NgZone) {}

    public checkAndInstantiateWeb3 = () => {
        if (typeof window.web3 !== 'undefined') {
            console.warn('Using injected web3');
            this.web3 = new Web3(window.web3.currentProvider);
        } else {
            // when running in browser, use incognito mode or log out of metamask
            console.warn('No web 3 detected, falling back to Ganache');
            this.provider = new Web3.providers.HttpProvider('http://localhost:7545');
            this.web3 = new Web3(this.provider);
        }
      }

      public onReady = (callback) => {
        this.VotingContract.setProvider(this.web3.currentProvider);
        // get initial account balance so it can be displayed
        this.web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            alert('You are not connected to an Ethereum client.');
            return;
          }

          this.accounts = accs;
          // setting default account
          this.account = this.accounts[5];

          this._ngZone.run(() => {
            callback();
          });
        });
      }

      public deployContract = (name, description, candidates, _gas, successCallback, errorCallback) => {
        console.log('deploying the contract');
        const _name = this.IfromAscii(name);
        const _description = this.IfromAscii(description);
        const _candidates = this.fromAscii(candidates);

        this.VotingContract.new(_name, _description, _candidates,
           {from: this.account, gas: _gas}).then((instance) => {
            successCallback(instance);
        }).catch((err) => {
            errorCallback(err);
        });
      }

      public getVoteContractByAddress = (address, callback) => {
        // this should probably be asynchronous
        const retrievedContract = this.web3.eth.contract(voteContractArtifact.abi).at(address);
        callback(retrievedContract);
      }

      public updateAccount = (account) => {
        this.account = account;
      }

      public fromAscii = (strings) => {
        const fromAscii = [];
        strings.forEach(element => {
          fromAscii.push(this.web3.fromAscii(element));
        });
        return fromAscii;
      }

      public IfromAscii = (string) => {
        return this.web3.fromAscii(string);
      }


      public toAscii = (bytes32) => {
        const toAscii = [];
        bytes32.forEach(element => {
          // replaces all non-ascii characters into empty spaces
          toAscii.push(this.ItoAscii(element));
        });
        return toAscii;
      }

      public ItoAscii = (bytes32) => {
        return this.web3.toAscii(bytes32).replace(/\0.*$/g, '');
      }

      // TODO - TEMP!!!
      public getAddress = () => {
        return this.account;
      }
}
