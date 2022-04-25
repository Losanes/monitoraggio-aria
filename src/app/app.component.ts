import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  endPoint:string = "https://dati.comune.milano.it/dataset/cc3c732a-99e1-432d-948d-12caad4c336d/resource/91451e4a-e73f-4db9-9c2b-22a6a0753ebd/download/qaria_reportariagiorno.json";
  data:string = "";
  descrizione:string = "";

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.endPoint).subscribe(
      res => {
        this.data = res[0].data;
        this.descrizione = res[0].descrizione;
      }
    );
  }
}
