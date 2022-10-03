import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Room } from '../model/room.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  rooms!: Room[];
  fromDate!:string;
  toDate!:string;

  constructor(private contractService: ContractService) { 
    this.contractService.getRooms(this.fromDate, this.toDate).subscribe(result => this.rooms = result);
  }

  ngOnInit(): void {
  }



}
