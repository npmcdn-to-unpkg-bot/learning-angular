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
    var twitchChannelUrl = 'https://api.twitch.tv/kraken/channels/';
    var twitchStreamUrl = 'https://api.twitch.tv/kraken/streams/';
    channelNamesArray.forEach(function(channel) {
        //Channel Requests
      var channelRequest = new XMLHttpRequest();
      channelRequest.open('GET', twitchChannelUrl + channel.name, true);
      channelRequest.onload = function() {
        if (channelRequest.status >= 200 && channelRequest.status < 400) {
          var channelInfo = JSON.parse(channelRequest.responseText);
          var streamsInfo;
            //Streams Requests
          var streamsRequest = new XMLHttpRequest();
          streamsRequest.open('GET', twitchStreamUrl + channel.name, true);
          streamsRequest.onload = function() {
            if (streamsRequest.status >= 200 && streamsRequest.status < 400) {
              streamsInfo = JSON.parse(streamsRequest.responseText);
                //Push to Array
              twitchData.push({'name': channel.name, 'id': channel.id, 'streamsInfo': streamsInfo, 'channelInfo': channelInfo});
            } else {
              console.log('We reached our target server, but it returned an error');
            }
          };
          streamsRequest.onerror = function() {
            console.log('There was a connection error of some sort');
          };
          streamsRequest.send();
            //End Streams Request

        } else {
          console.log('We reached our target server, but it returned an error');
        }
      };
      channelRequest.onerror = function() {
        console.log('There was a connection error of some sort');
      };
      channelRequest.send();
        //End Channel Request

    })  //End channelNamesArray.forEach
    return twitchData;
  }

  findChannel(input: string) {
    var findChannelUrl = 'https://api.twitch.tv/kraken/search/channels?limit=1&q=';
    return this._http.get(findChannelUrl + input)
      .toPromise()
      .then(response => response.json() )
      .catch(this.handleError);
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
