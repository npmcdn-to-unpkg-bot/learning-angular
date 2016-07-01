import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ChannelsComponent} from './twitch/channels.component';
import {AddChannelComponent} from './twitch/add-channel.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <nav>
        <p>
          <a [routerLink]="['Channels']">Channels</a>
          <a [routerLink]="['AddChannel']">Add Channel</a>
        </p>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],

})

@RouteConfig([
  {path: '/channels',name: 'Channels', component: ChannelsComponent, useAsDefault: true},
  {path: '/addchannel', name: 'AddChannel', component: AddChannelComponent},
])

export class AppComponent {
  title = 'Twitch TV';
}
