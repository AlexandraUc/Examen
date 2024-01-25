import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Comanda, PostComanda } from './comanda.model';
import { OnInit } from '@angular/core';
import { ComandaService } from '../comanda.service';

@Component({
  selector: 'app-comanda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comanda.component.html',
  styleUrl: './comanda.component.scss'
})
export class ComandaComponent implements OnInit{
  comenzi: Comanda[] = [];
  form!: FormGroup;

  constructor(private comandaService: ComandaService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      utilizatorId: new FormControl('')
    });
  }

  getCo(){
    this.comandaService.getComenzi().subscribe((comenzi) => (this.comenzi = comenzi));
  }

  postCo(){
    if(this.form){
      const utilizatorId = this.form.get('utilizatorId')?.value;
      
      this.comandaService.PostComanda({utilizatorId: utilizatorId}).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }
}
