import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public data: any[] = [
    {
      icon: 'sentiment_satisfied_alt ',
      text: '@FULLSESSION.IO . SINCE 1231323213',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_outline',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/REPLAYER/Session/INSIGHT',
      sessionDuration: 'Live',
      location: 'Ramallah',
      device: 'DESKTOP - OS X',
    },
    {
      icon: 'sentiment_dissatisfied',
      text: '@FULLSESSION.IO . SINCE 1233123123',
      email: 'seo@fullsession.io',
      playIcon: 'play_arrow',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 10,
      sessionPath: '/INSIGHTS',
      sessionDuration: '39:03',
      location: 'Nablus',
      device: 'DESKTOP - OS X',
    },
    {
      icon: 'sentiment_satisfied ',
      text: '@FULLSESSION.IO . SINCE 123',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_filled',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 21,
      sessionPath: '/FUNNELS',
      sessionDuration: '39:03',
      location: 'Tubas',
      device: 'DESKTOP - WINDOWS',
    },
    {
      icon: 'tag_faces',
      text: '@FULLSESSION.IO . SINCE 123',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_filled',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/LOGIN',
      sessionDuration: '39:03',
      location: 'Salisbury',
      device: 'DESKTOP - OS X',
    },
    {
      icon: 'tag_faces',
      text: '@FULLSESSION.IO . SINCE 112223',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_filled',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/INSIGHTS',
      sessionDuration: '39:03',
      location: 'Unknown',
      device: 'DESKTOP - WINDOWS',
    },
    {
      icon: 'sentiment_satisfied_alt ',
      text: '@FULLSESSION.IO . SINCE 123123213',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_outline',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/REPLAYER/Session/INSIGHT',
      sessionDuration: '39:03',
      location: 'Ramallah',
      device: 'DESKTOP - OS X',
    },
    {
      icon: 'tag_faces',
      text: '@FULLSESSION.IO . SINCE 123123123',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_outline',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/REPLAYER/Session/INSIGHT',
      sessionDuration: '39:03',
      location: 'Ramallah',
      device: 'DESKTOP - OS X',
    },
    {
      icon: 'tag_faces',
      text: '@FULLSESSION.IO . SINCE 1221321323',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_outline',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/REPLAYER/Session/INSIGHT',
      sessionDuration: '39:03',
      location: 'Ramallah',
      device: 'DESKTOP - OS X',
    },
    {
      icon: 'sentiment_satisfied ',
      text: '@FULLSESSION.IO . SINCE 123122221',
      email: 'seo@fullsession.io',
      playIcon: 'play_circle_outline',
      status: 'Online',
      sessionNumber: '322',
      numberOfEvents: 1,
      sessionPath: '/REPLAYER/Session/INSIGHT',
      sessionDuration: '39:03',
      location: 'Ramallah',
      device: 'DESKTOP - OS X',
    },
  ];

  public pageSize = 5;
  public pageIndex = 0;
  public toolTipPosition = 'below';

  public getPaginatedData(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    return this.data.slice(startIndex, startIndex + this.pageSize);
  }

  public setPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
