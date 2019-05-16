import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
billing : boolean = true;
claimV : boolean = false;
claimT : boolean = false;
policy : boolean = false;
broker : boolean = false;
product : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setActive(menu){
    if (menu === 'billing'){
      this.billing = true;
      this.claimV = false;
      this.claimT  = false;
      this.policy = false;
      this.broker  = false;
      this.product  = false;  
    }
    else if(menu === 'claimV'){
      this.billing = false;
      this.claimV = true;
      this.claimT  = false;
      this.policy = false;
      this.broker  = false;
      this.product  = false;  
    }
     else if(menu == 'claimT'){
      this.billing = false;
      this.claimV = false;
      this.claimT  = true;
      this.policy = false;
      this.broker  = false;
      this.product  = false;  
    }
     else if(menu == 'policy'){
      this.billing = false;
      this.claimV = false;
      this.claimT  = false;
      this.policy = true;
      this.broker  = false;
      this.product  = false;  
    }
     else if(menu == 'broker'){
      this.billing = false;
      this.claimV = false;
      this.claimT  = false;
      this.policy = false;
      this.broker  = true;
      this.product  = false;  
    }
     else if(menu == 'product'){
      this.billing = false;
      this.claimV = false;
      this.claimT  = false;
      this.policy = false;
      this.broker  = false;
      this.product  = true;  
    }
  }

}
