import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-pet-projects',
  templateUrl: './pet-projects.component.html',
  styleUrls: ['./pet-projects.component.scss']
})

export class PetProjectsComponent implements OnInit {

  constructor(private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() {
    $('#petProjects').addClass('isSelected');

    $(document).ready(function() {
      $(this).scrollTop(0);
    });
  }
}
