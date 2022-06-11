import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment7';
  name = "Marvellous Infosystem";
  public lower():any
  {
    this.name=this.name.toLowerCase();
    return this.name;
  }

  public upper():any
  {
    this.name=this.name.toUpperCase();
    return this.name;
  }
}
