import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.css']
})
export class StaticContentComponent implements OnInit {

  @Output() someEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
