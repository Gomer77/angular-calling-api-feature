import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {

  constructor(private router: Router){}
  
  add(){
    let url = this.router.url
    if(url === '/book'){
      this.router.navigate(['/book/form']);
    }else if(url === '/blog'){
      this.router.navigate(['/blog/form']);
    }else{
      this.router.navigate(['/profile/form']);
    }
  }
  
  deleteAll(){
    
  }
  
}
