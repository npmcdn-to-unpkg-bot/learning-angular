import {Component, OnInit} from '@angular/core';
import {ChannelsService} from './channels.service';
import {Channel} from './channel';

@Component({
  selector: 'twitch-channels',
  template: `
    <h2>Twitch TV Channels</h2>
    <div *ngFor="let channel of channels" class="channel-list channel-online" [class.channel-offline]="channel.streamsInfo.stream == null || channel.streamsInfo.stream == undefined" >
      <img src="{{ channel.channelInfo.logo }}" class="channel-logo">
      <a href="{{ channel.channelInfo.url }}" target="_blank">
        <h4>{{ channel.channelInfo.display_name }}</h4>
      </a>
      <button class="btn btn-danger delete-channel" (click)="onDeleteChannel($event, channel)">X</button>
    </div>
  `,
  providers: [ChannelsService],

})
export class ChannelsComponent implements OnInit {
  channels: Channel[];

  constructor(private _channelsService: ChannelsService) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    this._channelsService.getChannels().then((channels: Channel[]) => this.channels = channels);
  }

  onDeleteChannel($event: Event, channel: Channel) {
    event.stopPropagation();
    this._channelsService.deleteChannel(channel);
  }

}
