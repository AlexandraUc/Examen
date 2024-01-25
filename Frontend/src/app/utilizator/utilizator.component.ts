import { Component } from '@angular/core';
import { Utilizator } from './utilizator.model';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { UtilizatorService } from '../utilizator.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-utilizator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './utilizator.component.html',
  styleUrl: './utilizator.component.scss'
})
export class UtilizatorComponent implements OnInit {
  utilizatori: Utilizator[] = [];
  form!: FormGroup;

  constructor(private utilizatorService: UtilizatorService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  getUt(){
    this.utilizatorService.getUtilizatori().subscribe((utilizatori) => (this.utilizatori = utilizatori));
  }

  postUt(){
    if(this.form){
      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;

      this.utilizatorService.postUtilizator({username: username, password: password}).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }
}
