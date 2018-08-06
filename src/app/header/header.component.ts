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

  constructor(private translate: TranslateService, private dataService: DataService) {}

  ngOnInit() {
    const sections = $('.section')
    , nav = $('.navigation')
    , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      const cur_pos = $(this).scrollTop();

      sections.each(function() {
        const top = $(this).offset().top - nav_height,
              bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('is-selected');
          sections.removeClass('is-selected');

          $(this).addClass('is-selected');
          nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('is-selected');
        }
      });
    });
  }

  highlightAbout() {
    $('#aboutLink').addClass('is-selected');

    $('#timelineLink').removeClass('is-selected');
    $('#projectsLink').removeClass('is-selected');
    $('#contactsLink').removeClass('is-selected');
    $('#resumeLink').removeClass('is-selected');
  }

  highlightTimeline() {
    $('#timelineLink').addClass('is-selected');

    $('#aboutLink').removeClass('is-selected');
    $('#projectsLink').removeClass('is-selected');
    $('#contactsLink').removeClass('is-selected');
    $('#resumeLink').removeClass('is-selected');
  }

  highlightProjects() {
    $('#projectsLink').addClass('is-selected');

    $('#timelineLink').removeClass('is-selected');
    $('#aboutLink').removeClass('is-selected');
    $('#contactsLink').removeClass('is-selected');
    $('#resumeLink').removeClass('is-selected');
  }

  highlightContacts() {
    $('#contactsLink').addClass('is-selected');

    $('#timelineLink').removeClass('is-selected');
    $('#projectsLink').removeClass('is-selected');
    $('#aboutLink').removeClass('is-selected');
    $('#resumeLink').removeClass('is-selected');
  }

  highlightResume() {
    $('#resumeLink').addClass('is-selected');

    $('#timelineLink').removeClass('is-selected');
    $('#projectsLink').removeClass('is-selected');
    $('#contactsLink').removeClass('is-selected');
    $('#aboutLink').removeClass('is-selected');
  }
}
