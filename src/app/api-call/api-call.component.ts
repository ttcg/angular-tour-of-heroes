import { Component, OnInit } from '@angular/core';
import { DuendeService } from '../duende.service';
import { DuendeClamin as DuendeClaim } from '../duende-claim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-call',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-call.component.html',
  styleUrl: './api-call.component.css'
})
export class ApiCallComponent implements OnInit {
  duendeClaims: DuendeClaim[] = [];

  constructor(private duendeService: DuendeService) {
  }

  ngOnInit(): void {
    this.callTestEndpoint();
  }

  callTestEndpoint(): void {
    this.duendeService.callTestEndpoint()
      .subscribe(values => this.duendeClaims = values);
  }
}
