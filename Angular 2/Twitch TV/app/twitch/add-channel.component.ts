import {Component, OnInit} from '@angular/core';
import {ChannelsService} from './channels.service';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
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
            <input class="form-control" type="text" placeholder="Name" [(ngModel)]="newChannel.name" (input)="onSearchChannel(input.value)" ngControl="name" #input required >
          </div>
          <button class="btn btn-primary" >Add to List</button>
          <span class="predictive-text">Channel Found: {{ data.display_name }}</span>
        </form>
      </div>
    </div>
  `,
  providers: [ChannelsService],

})

export class AddChannelComponent implements OnInit {
  private searchChannel = new Subject<string>();
  data:any = {};
  newChannel: Channel;

  constructor(private _channelsService: ChannelsService, private _router: Router, private _routeParams: RouteParams) {}

  onSearchChannel(channelName: string) {
    this.searchChannel
      .next(channelName);
  }

  ngOnInit() {
    this.newChannel = {name: '', id: ''};

    this.searchChannel
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((input:string) => this._channelsService.findChannel(input) )
      .subscribe(
        data => this.data = data.channels[0]
      );
  }

  onSubmit() {
    this._channelsService.addChannel(this.newChannel);
    this._router.navigate(['Channels']);
  }
}
