import { Component, OnInit, HostListener, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from './services/web3.service';

const Web3 = require('web3');
const contract = require('truffle-contract');

const voteContractArtifact = require('../../truffle/build/contracts/VotingContract.json');
declare var require: any;
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  accounts: any;
  account: string;
  isConnectedToClient = false;

  constructor(private router: Router,
              private web3Service: Web3Service) {
  }

  /*
  * As soon as the window is loaded, try to get accounts from metamask or ganache (if cannot connect to metamask)
  */
  @HostListener('window:load')
  windowLoaded() {
    this.web3Service.checkAndInstantiateWeb3();
    this.web3Service.onReady(() => {
      this.isConnectedToClient = true;
      this.account = this.web3Service.account;
      this.accounts = this.web3Service.accounts;
    });

  }

  ngOnInit() {
    this.router.navigateByUrl('/home');
  }

  updateAccount() {
    this.web3Service.updateAccount(this.account);
  }

}
