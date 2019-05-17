import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-claim-type',
  templateUrl: './claim-type.component.html',
  styleUrls: ['./claim-type.component.scss']
})
export class ClaimTypeComponent implements OnInit {
data: any;
  constructor(private sidebar : SidebarComponent) { }

  ngOnInit() {
      this.sidebar.setActive('claimT');
     this.data = {
            labels: ['Auto claim','Fire claim','Liability claim','Enterprise claim'],
            datasets: [
                {
                    data: [8.2, 3.2, 1.4,1.2],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
  }

}
