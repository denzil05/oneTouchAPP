import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-product-launch',
  templateUrl: './product-launch.component.html',
  styleUrls: ['./product-launch.component.scss']
})
export class ProductLaunchComponent implements OnInit {
data : any;
  constructor(private sidebar : SidebarComponent) { }

  ngOnInit() {
      this.sidebar.setActive('product');
     this.data = {
            labels: ['GAR-14', 'GAR-15','GAR-16','GAR-17','GAR-18','GAR-19'],
            datasets: [
                {
                    label:  'Auto',
                    backgroundColor: '#2A97A5',
                    borderColor: '#1E88E5',
                    data: [4.3,2.5,3.5,4.5,4,3]
                },
                {
                    label: 'Fire',
                    backgroundColor: '#37A52A',
                    borderColor: '#7CB342',
                    data: [2.4,4.4,1.8,2.8,3,2.5]
                },
                {
                    label: 'Liab',
                    backgroundColor: '#30C6B6',
                    borderColor: '#703022',
                    data: [2,2,3,5,4,3]
                },
                {
                    label: 'Enterprise',
                    backgroundColor: '#F3912E',
                    borderColor: '#703022',
                    data: [2.4,4.4,1.8,2.8,4.4,4.4]
                }
            ]
        }
  }

}
