
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './model/room.model';
import { catchError, retry } from 'rxjs/operators';
import { Hotel } from './model/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class ContractService  {
  constructor(private http: HttpClient) {
  }

  getRooms(fromDate:string, toDate:string): Observable<Room[]> {
    var requestUrl: string = `https://localhost:7147/Booking` + '/GetRooms?fromDate=' + fromDate+'&toDate='+toDate;
    console.log(requestUrl);
    return this.http.get<Room[]>(requestUrl);
  }

  getHotels(searchContent:string): Observable<Hotel[]> {
    var requestUrl: string = `https://localhost:7147/api/Hotel` + '/GetHotelsByCity?City=' + searchContent;
    console.log(requestUrl);
    return this.http.get<Hotel[]>(requestUrl);
  }

}