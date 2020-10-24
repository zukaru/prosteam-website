import { Component, OnInit, Inject, Renderer2, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navTrigger = false;
  bodyRef: HTMLElement;

  @ViewChild('navEl', {static: true}) menu: HTMLElement;


  constructor(
    @Inject(DOCUMENT) public document: Document,
    public render: Renderer2,
    public router: Router) { }

  ngOnInit() {
    this.bodyRef = document.body;
  }

  onTriggerNav() {
    if (!this.navTrigger) {
      this.navTrigger = true;
      disableBodyScroll(this.menu);
    } else {
      this.navTrigger = false;
      enableBodyScroll(this.menu);

    }
  }

  onNav(path: string) {
    this.onTriggerNav();
    this.router.navigate([path]);
  }


}
