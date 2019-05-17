import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-claims-view',
  templateUrl: './claims-view.component.html',
  styleUrls: ['./claims-view.component.scss']
})
export class ClaimsViewComponent implements OnInit {
data: any;
  constructor(private sidebar : SidebarComponent) { }

  ngOnInit() {
      this.sidebar.setActive('claimV');
     this.data = {
            labels: ['Total Policy claims Raised', 'Claim Amount due', 'Total claim settled'],
            datasets: [
                {
                    label: 'Monthly Billing',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [43000,24000,20000]
                },
                {
                    label: 'Quarterly Billing',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [25000,44000,20000]
                },
                {
                    label: 'Yearly billing',
                    backgroundColor: '#703022',
                    borderColor: '#703022',
                    data: [35000,18000,30000]
                }
            ]
        }
    }
}
