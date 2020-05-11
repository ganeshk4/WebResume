import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiPath = 'http://' + environment.path + ':' + environment.port + '/api/';
  constructor(private http: HttpClient) { }

  get(url) {
    return new Observable(obs => {
      this.http.get(this.apiPath + url).subscribe((res: any) => {
        obs.next(res.data);
        obs.complete();
      }, (err) => {
        obs.next(err);
        obs.complete();
      });

    });
  }
}
