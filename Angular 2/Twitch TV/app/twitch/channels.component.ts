import {Component, OnInit} from '@angular/core';
import {ChannelsService} from './channels.service';
import {Channel} from './channel';

@Component({
  selector: 'twitch-channels',
  template: `
    <h2>Twitch TV Channels</h2>
    <div *ngFor="let channel of channels" class="channel-list">
      {{ channel.name }}
    </div>
  `,
  providers: [ChannelsService],

})
export class ChannelsComponent implements OnInit {
  channels: Channel;

  constructor(private _channelsService: ChannelsService) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    this._channelsService.getChannels().then((channels: Channel[]) => this.channels = channels);
  }
}
