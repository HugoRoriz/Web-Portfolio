import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private translate: TranslateService, private dataService: DataService) {}

  ngOnInit() {}

}
