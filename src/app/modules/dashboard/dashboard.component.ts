import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/Service/Reservation.service';
import { SallesService } from '../salle/Service/salles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allReservations: any[]; 
  nombreSalles: number = 0; 
  latestReservations: any[];

  constructor(
    private reservationService: ReservationService,
    private salleService: SallesService 
  ) {
    this.allReservations = [];
    this.latestReservations = [];
  }
  

  ngOnInit(): void {
    this.getReservations();
    this.getSalles(); 
  }
  
// Extraire les  reservations
  getReservations(): void {
    this.reservationService.getReservations().subscribe({
      next: (data: any[]) => {
        this.allReservations = data;
                // Extraire les  dernier 10 reservations
                this.latestReservations = this.allReservations.slice(-10);

      },
      error: (error: any) => console.log(error)
    });

    console.log(this.allReservations) }

    // Extraire les  salles
  getSalles(): void {
    this.salleService.getSalles().subscribe({
      next: (data: any[]) => {
        const slles = data;
        this.nombreSalles = slles.length;
       
      },
      error: (error: any) => console.log(error)
    });
  }


  
  
}
