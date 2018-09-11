import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class DatabaseService {

    // TODO - move to properties file
    host = 'http://localhost';
    port = '8080';

    constructor(private http: HttpClient) { }

    savePollAddress(pollAddress: string, chairmanAddress: string): Observable<Object> {
        const request = {
            'pollAddress': pollAddress,
            'chairmanAddress': chairmanAddress
        };

        console.log(JSON.stringify(request));

        const _headers = new HttpHeaders();
        _headers.append('Access-Control-Allow-Origin', '*');
        _headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        _headers.append('Content-Type', 'application/json');

        return this.http.post(this.url('/poll'), request, {headers: _headers}).map((result) => {
            return JSON.stringify(result);
        });
    }

    getPollAddressesByChairman(chairmanAddress: string): Observable<Object> {
        console.log(this.url('/poll?chairmanAddress=' + chairmanAddress));
        return this.http.get(this.url('/poll?chairmanAddress=' + chairmanAddress)).map(res => {
            return JSON.stringify(res);
        });
    }

    url(params) {
        return this.host + ':' + this.port + params;
    }
}
