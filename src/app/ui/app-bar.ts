import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../services';

@Component({
    selector: 'app-bar',
    directives: [ ...ROUTER_DIRECTIVES ],
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
    template: require('./templates/app-bar.html')

})
export class AppBar {
    constructor(private authService: AuthService){}
    signout(){
        this.authService.signout();
    }
}
