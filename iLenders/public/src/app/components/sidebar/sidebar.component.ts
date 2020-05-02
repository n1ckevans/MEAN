import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Browse',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' }, 
    { path: '/lend-history', title: 'Lend History',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Order History',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Lend',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Sell',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Details',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
