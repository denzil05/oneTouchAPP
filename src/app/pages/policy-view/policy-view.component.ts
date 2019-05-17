import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-policy-view',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.scss']
})
export class PolicyViewComponent implements OnInit {
data : any;
  constructor(private sidebar : SidebarComponent) { }

  ngOnInit() {
      this.sidebar.setActive('policy');
         this.data = {
            labels: ['last month', 'last quarter', 'last 6 months','last year'],
            datasets: [
                {
                    label:  'Billing cycle - monthly',
                    backgroundColor: '#2A97A5',
                    borderColor: '#1E88E5',
                    data: [1.5,2.5,3.5,4.5]
                },
                {
                    label: 'Billing cycle - quarterly',
                    backgroundColor: '#37A52A',
                    borderColor: '#7CB342',
                    data: [1.75,2.75,3.75,4.75]
                },
                {
                    label: 'Billing cycle - 6 months',
                    backgroundColor: '#E7DB23',
                    borderColor: '#703022',
                    data: [2,3,3,5]
                },
                {
                    label: 'Billing cycle - yearly',
                    backgroundColor: '#4A28D7',
                    borderColor: '#703022',
                    data: [3,4,5,6]
                }
            ]
        }
  }

}
