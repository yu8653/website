import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-assistant',
  templateUrl: './legal-assistant.component.html',
  styleUrls: ['./legal-assistant.component.css']
})
export class LegalAssistantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  /*
  logout(){
    localStorage.removeItem('login');
    this.router.navigate(['/home']);
  }
  */
}
