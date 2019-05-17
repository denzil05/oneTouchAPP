import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-broker-view',
  templateUrl: './broker-view.component.html',
  styleUrls: ['./broker-view.component.scss']
})
export class BrokerViewComponent implements OnInit {
data : any;
  constructor(private sidebar : SidebarComponent) { }

  ngOnInit() {
      this.sidebar.setActive('broker');
     this.data = {
            labels: ['Policies created last 1 year', 'Premium gathered last 1 year', 'Claims created last 1 year','Claims settled last 1 year'],
            datasets: [
                {
                    label:  'Broker A',
                    backgroundColor: '#2A97A5',
                    borderColor: '#1E88E5',
                    data: [1.5,2.5,3.5,4.5]
                },
                {
                    label: 'Broker B',
                    backgroundColor: '#37A52A',
                    borderColor: '#7CB342',
                    data: [1.75,4.4,1.8,2.8]
                },
                {
                    label: 'Broker C',
                    backgroundColor: '#E7DB23',
                    borderColor: '#703022',
                    data: [0.25,2,3,5]
                },
                {
                    label: 'Broker D',
                    backgroundColor: '#4A28D7',
                    borderColor: '#703022',
                    data: [1.5,2.25,1.75,1.5]
                },
                 {
                    label:  'Broker E',
                    backgroundColor: '#F32E7F',
                    borderColor: '#1E88E5',
                    data: [1.75,8,5,4]
                },
                 {
                    label:  'Broker F',
                    backgroundColor: '#4FF32E',
                    borderColor: '#1E88E5',
                    data: [0.25,2,2.45,3]
                },
                 {
                    label:  'Broker G',
                    backgroundColor: '#F3912E',
                    borderColor: '#1E88E5',
                    data: [2.25,5,2,3]
                },
                 {
                    label:  'Broker H',
                    backgroundColor: '#30C6B6',
                    borderColor: '#1E88E5',
                    data: [1.15,9,1,1]
                },
            ]
        }
  }

}
