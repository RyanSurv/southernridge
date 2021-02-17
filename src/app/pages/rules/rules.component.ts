import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  rules: string[] = [
    'ANYONE THAT HAS NOT FILLED OUT A WAIVER IS TRESPASSING AND COULD BE ARRESTED.',
    'EVERYONE entering the park MUST sign a release form and will be issued an arm band to be worn at all times, if you break it please bring broken band back to the office for a replacement. ANYONE caught without an arm band will be escorted to the front to purchase an arm band and fill out a release form.',
    'ALL Minor children must be signed in by a parent or legal guardian.',
    'Riders will keep to a 5MPH speed in camp grounds and parking areas at all times, NO spinning tires, donuts, sliding around corners tolerated in camp grounds and parking areas',
    'No fighting or you will be BANNED.',
    'Stay out of the green fields on Southern Ridge ATV Park Property.',
    'All riders should follow the manufacture’s safe operating procedures for your atv/utv and ensure you have the proper safety equipment needed to safely operate your atv/utv.',
    'Everyone rides at their own risk, know your limitations and capabilities and do not exceed them.',
    'Southern Ridge ATV Park is not liable or responsible for and personal damage, loss, theft, injury or death.',
    'NO FIREARMS ALLOWED IN PARK AT ANYTIME.',
    'No glass containers allowed in the park.',
    'Do not cross any gates, fencing, or marked off areas.',
    'Trail officials are in charge of the park and trails.',
    'Trail officials are here to help you in any way.',
    'Keep noise down in camp grounds after 11:00PM, no loud music, bikes must be at idle speed. Please be considerate to fellow campers.',
    'Obey and follow all signs posted in the park and around the property, they are there for YOUR SAFETY.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
