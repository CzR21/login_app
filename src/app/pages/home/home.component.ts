import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  listUsers: any[] = []

  constructor(private homeService: HomeService){ }

  ngOnInit(): void {
      this.getUsers()
  }

  getUsers(){
    this.homeService.buscarUsuarios().subscribe({
      next: (response) => {
        this.listUsers = response.dados;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  deleteUser(idUser: any){
    this.homeService.remover(idUser).subscribe({
      next: (response) => this.getUsers(),
      error: (error) => {
        console.log(error)
      }
    });
  }
}
