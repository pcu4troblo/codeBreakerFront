import { Component, OnInit } from '@angular/core';
import { CodeBreakerService } from './../services/code-breaker.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {
  
  res: any = {};
  secret : number;
  guesser : number;

  constructor(private codeBreakerService: CodeBreakerService) { }

  ngOnInit() {
    
  }

  iniciar(){
    this.codeBreakerService.setNumber(this.secret).subscribe(
      res => this.res = res
    );
    console.log(this.res.message);
  }

intentar(){
      this.codeBreakerService.guess(this.guesser).subscribe( res => {
        this.res = res;
      });
      console.log(this.res.result);
}
  
}

