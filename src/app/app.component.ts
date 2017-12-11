import { Component } from '@angular/core';

@Component({
  selector: 'qb-root',
  template: `
    <div class="d-flex flex-column" style="height:100vh;">
      <qb-nav></qb-nav>
      <div class="h-100 scroll-y">
        <div class="container bg-white h-min-100 pb-lg-5">
          <div class="mx-auto" style="max-width:40rem;">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent { }
