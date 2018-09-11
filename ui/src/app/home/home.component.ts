import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    onYourPolls() {
        this.router.navigateByUrl('/your-polls');
    }

    onCreatePoll()  {
        this.router.navigateByUrl('/create-poll');
    }

    onJoinPoll() {
        this.router.navigateByUrl('/join-poll');
    }
}
