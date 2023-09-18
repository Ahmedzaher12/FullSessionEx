import { Component, OnInit } from '@angular/core';
import { TooltipPosition, TooltipTheme } from 'src/app/models';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;
  isCustome = false;
  linkText = '';
  linkURL = '';
  constructor() {}
  checked = false;
  items = [
    {
      text: 'Daily Actives',
      iconClass: 'fas fa-check',
      disabled: true,
      checked: true,
      dotColor: 'blue-dot',
    },
    {
      text: 'Weekly Actives',
      iconClass: 'fas fa-times',
      disabled: false,
      checked: false,
      dotColor: 'red-dot',
    },
    {
      text: 'Monthly Actives',
      iconClass: 'fas fa-times',
      disabled: false,
      checked: false,
      dotColor: 'brown-dot',
    },
    // Add more items as needed
  ];
  ngOnInit(): void {}
}
