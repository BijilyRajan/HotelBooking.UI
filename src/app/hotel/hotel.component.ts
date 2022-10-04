import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Hotel } from '../model/hotel.model';
import { SnackBarService } from '../snackbar.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HoteldetailsComponent } from '../hoteldetails/hoteldetails.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  searchContent:string = '';
  hotels!: Hotel[];

  constructor(private contractService: ContractService, private snackBar: SnackBarService, 
    public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }

  searchHotel(){
    this.searchContent = this.searchContent.trim();
    if (this.searchContent.length>0)
    {
      this.contractService.getHotels(this.searchContent).subscribe(result => this.hotels = result);
    }
    else
    {
      this.snackBar.warning("Please input search city!");
    }

  }

  openDialog(selectedRow:number): void {
    alert(selectedRow);
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }
    
    let dialogRef = this.dialog.open(HoteldetailsComponent, {
      panelClass: ['dialog-responsive'],
      maxHeight: '85vh',
      data: selectedRow,
    });

    // const dialogRef = this.dialog.open(HoteldetailsComponent, {
    //   width: '40%',
    //   data: selectedRow

    // });


}
}
