import { Component } from '@angular/core';

@Component({
    selector: 'app-bar',
    styles: [`
.app-bar {
  height: 65px;
  padding: 5px 30px;
  background-color: #00BCD4;
}
.logo {
  color: white;
  font-size: 30px;
  font-weight: 300;
  cursor: pointer;
}
.link {
  color: white;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
}
    `],
    templateUrl: 'app/templates/app-bar.html'

})
export class AppBar {}
