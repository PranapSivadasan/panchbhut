import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pb-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  navigationLinks: NavLinks[] = [
    { label: 'Home', base: 'landing', fragment: 'home', active: true },
    { label: 'Story', base: 'landing', fragment: 'story', active: false },
    { label: 'Team', base: 'landing', fragment: 'team', active: false },
    { label: 'FAQ', base: 'landing', fragment: 'faq', active: false }
  ];
  scrolled: boolean;

  @HostListener('window:scroll', [])
  scrollListener(): void {
    window.scrollY > 20 ? this.scrolled = true : this.scrolled = false;
  }

  constructor(
    private router: Router
  ) {
    this.scrolled = false;
  }

  ngOnInit(): void {
    let onLoadNav = this.navigationLinks.filter(
      (nav: NavLinks) => {
        return (nav.base === (window.location.pathname).substring(1) && nav.fragment === (window.location.hash).substring(1));
      }
    );
    this.setActive(onLoadNav[0]);
  }

  goto(navLink: NavLinks): void {
    this.setActive(navLink);
    this.router.onSameUrlNavigation = 'reload';
    if (navLink.fragment !== null) {
      this.router.navigate([navLink.base], { fragment: navLink.fragment });
    } else {
      this.router.navigate([navLink.base]);
    }
  }

  setActive(navLink: NavLinks): void {
    if (navLink !== null && navLink !== undefined) {
      this.navigationLinks.forEach(
        (nav: NavLinks) => {
          nav.active = false;
          if (nav.label === navLink.label) {
            nav.active = true;
          }
        }
      );
    }
  }

}

interface NavLinks {
  label: string;
  base: string;
  fragment: string;
  active: boolean;
}