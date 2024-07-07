import {API_ENDPOINTS, ApiMethod} from '../../../core/shared/utils/const';
import {ApiHandlerService} from '../../../core/shared/utils/api-handler.service';
import {Injectable} from '@angular/core';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  constructor(private http: ApiHandlerService) {
  }

  getSalles() {
    return this.http.requestCall(API_ENDPOINTS.salles, ApiMethod.GET, '');
  }


  createSalle(data: any) {
    return this.http.requestCall(API_ENDPOINTS.createSalle, ApiMethod.POST, '', data)
  }

}
