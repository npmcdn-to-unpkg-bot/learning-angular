import {Component, OnInit} from '@angular/core';
import {ChannelsService} from './channels.service';
import {Channel} from './channel';
import {CHANNELS} from './mock-channels'

@Component({
  selector: 'add-channel',
  template: `
    <h2>Add Twitch Channel</h2>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="channel-name">Twitch Channel Name :</label>
            <input class="form-control" type="text" placeholder="Name" [(ngModel)]="newChannel.name" ngControl="name" required>
          </div>
          <button class="btn btn-primary" >Add to List</button>
        </form>
      </div>
    </div>
  `,
  providers: [ChannelsService],

})

export class AddChannelComponent implements OnInit {

  newChannel: Channel;

  constructor(private _channelsService: ChannelsService) {}

  ngOnInit() {
    this.newChannel = {name: '', id: Date.now().toString()};
  }

  onSubmit() {
    this._channelsService.addChannel(this.newChannel);
  }
}
