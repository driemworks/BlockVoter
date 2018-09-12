import { Component, OnInit } from '@angular/core';
import { PollModel } from '../pollModel';
import { Web3Service } from '../services/web3.service';
import { DatabaseService } from '../services/db.service';


@Component({
    selector: 'app-create-poll',
    templateUrl: './createPoll.component.html',
    styleUrls: ['./createPoll.component.css']
})

export class CreatePollComponent implements OnInit  {
    model: PollModel;
    gas: any;
    address: any;
    errors: any;

    constructor(private web3Service: Web3Service,
                private dbService: DatabaseService) { }

    ngOnInit() {
        this.model = new PollModel('', '', '');
        this.gas = 30000;
    }

    onSubmitPoll() {
        const candidates = this.model.candidates.split(',');
        this.web3Service.deployContract(this.model.name, this.model.description, candidates, this.gas,
            (instance) => {
                this.address = instance.address;
                this.dbService.savePollAddress(this.address, this.web3Service.account).subscribe(res => {
                    console.log(res);
                });
            }, (err) => {
                this.errors = err;
            }
        );
    }
}
