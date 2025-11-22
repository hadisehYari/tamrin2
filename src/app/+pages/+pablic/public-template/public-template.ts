import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-template',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './public-template.html',
  styleUrl: './public-template.scss',
})
export class PublicTemplate {

}
