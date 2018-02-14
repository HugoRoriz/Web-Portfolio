import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../data.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService, private dataService: DataService) { }

  ngOnInit() { }

  changeToAbout() {
    $('#about').addClass('isSelected');

    $('#skills').removeClass('isSelected');
    $('#exp').removeClass('isSelected');
    $('#petProjects').removeClass('isSelected');
    $('#blog').removeClass('isSelected');
  }

  changeToSkills() {
    $('#skills').addClass('isSelected');

    $('#about').removeClass('isSelected');
    $('#exp').removeClass('isSelected');
    $('#petProjects').removeClass('isSelected');
    $('#blog').removeClass('isSelected');
  }

  changeToExperience() {
    $('#exp').addClass('isSelected');

    $('#skills').removeClass('isSelected');
    $('#about').removeClass('isSelected');
    $('#petProjects').removeClass('isSelected');
    $('#blog').removeClass('isSelected');
  }

  changeToPetProjects() {
    $('#petProjects').addClass('isSelected');

    $('#skills').removeClass('isSelected');
    $('#exp').removeClass('isSelected');
    $('#about').removeClass('isSelected');
    $('#blog').removeClass('isSelected');
  }

  changeToBlog() {
    $('#blog').addClass('isSelected');

    $('#skills').removeClass('isSelected');
    $('#exp').removeClass('isSelected');
    $('#petProjects').removeClass('isSelected');
    $('#about').removeClass('isSelected');
  }
}
