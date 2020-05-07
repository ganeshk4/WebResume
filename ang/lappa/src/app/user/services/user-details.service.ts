import { Injectable } from '@angular/core';
import { ApiService} from '../../core/services/api.service'
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private apiService: ApiService) { }

  public getAllUserDetails() {
    return this.apiService.get('user');
  }
}
