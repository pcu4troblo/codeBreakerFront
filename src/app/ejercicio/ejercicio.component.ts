import { Component, OnInit } from '@angular/core';
import { CodeBreakerService } from './../services/code-breaker.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {
  
  data: any;

  constructor(private codeBreakerService: CodeBreakerService) { }

  ngOnInit() {
    
  }
  public empezar(number: Number){

    this.codeBreakerService.setNumber(number).subscribe(
      res => this.data = res
  );
  }

  public consultar(number: Number){

    this.codeBreakerService.guess(number).subscribe(
      res => this.data = res
  );
  }
  
}

