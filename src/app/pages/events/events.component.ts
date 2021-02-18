import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events = [
    {
      img: 'assets/images/events_all.jpg',
      title: 'All 2021 Events',
      date: '',
      description:
        'Here is a quick look at all of the events we will be running in 2021. More details in posts below.',
    },
    {
      img: 'assets/images/mar5.jpg',
      title: 'Swap Meet',
      date: 'March 5th 2021',
      description:
        "Cabin fever swap meet! March 5th-7th 2021, come sell 'em at the ridge!",
    },
    {
      img: 'assets/images/apr2.jpg',
      title: 'Easter Egg Hunt',
      date: 'April 2nd 2021',
      description:
        'Easter Egg Hunt at Southern Ridge! April 2nd-4th 2021, family fun all weekend long!',
    },
    {
      img: 'assets/images/apr17.jpg',
      title: 'XBR Bounty Hole',
      date: 'April 17th 2021',
      description:
        "XBR bounty Hole at Southern Ridge! April 17th 2021, don't miss out!",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
