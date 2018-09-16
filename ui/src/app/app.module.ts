import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePollComponent } from './createPoll/createPoll.component';
import { Web3Service } from './services/web3.service';
import { JoinPollComponent } from './joinPoll/joinPoll.component';
import { VotingContractService } from './services/votingContract.service';
import { DatabaseService } from './services/db.service';
import { YourPollsComponent } from './yourPolls/yourPolls.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { DialogComponent } from './yourPolls/dialog/dialog.component';

const routes: Routes = [
    { path: 'create-poll', component: CreatePollComponent },
    { path: 'join-poll', component: JoinPollComponent },
    { path: 'your-polls', component: YourPollsComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    JoinPollComponent,
    YourPollsComponent,
    AboutComponent,
    DialogComponent,
    JoinPollComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        routes, {enableTracing: true}
    ),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    Web3Service,
    VotingContractService,
    DatabaseService
  ],
  entryComponents: [
    YourPollsComponent,
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
