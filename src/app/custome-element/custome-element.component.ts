import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custome-element',
  templateUrl: './custome-element.component.html',
  styleUrls: ['./custome-element.component.css']
})
export class CustomeElementComponent implements OnInit {
  @Input()
  message: string;

  @Output()
  clickHelloWorld = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onButtonClicked() {
    const clickEvent = {
      message: 'Hello Button'
    };

    this.clickHelloWorld.emit(clickEvent);
  }
}
