import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Channel} from './channel';
import {CHANNELS} from './mock-channels';

@Injectable()

export class ChannelsService {
  private channelListAPI = 'http://rest.learncode.academy/api/asku387shllqkaubhvlahr/ask37cnsgu47cnuh3sdjlkajshdf';

  constructor(private _http: Http) { }

  getChannels() {
    return this._http.get(this.channelListAPI)
      .toPromise()
      .then(response => this.getTwitchChannelInfo(response.json()))
      .catch(this.handleError);
  }

  getTwitchChannelInfo(channelNamesArray) {
    var twitchData = [];
    var twitchUrl = 'https://api.twitch.tv/kraken/channels/';
    channelNamesArray.forEach(function(channel) {

      var request = new XMLHttpRequest();
      request.open('GET', twitchUrl + channel.name, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          twitchData.push(JSON.parse(request.responseText));
        } else {
          console.log('We reached our target server, but it returned an error');
        }
      };
      request.onerror = function() {
        console.log('There was a connection error of some sort');
      };
      request.send();

    })  //End channelNamesArray.forEach
    return twitchData;
  }

  addChannel(channel: Channel) {
    this._http.post(this.channelListAPI, channel)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  deleteChannel(channel: Channel) {
    this._http.delete(this.channelListAPI + '/' + channel.id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
