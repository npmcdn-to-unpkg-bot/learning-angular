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
      .then(response => response.json())
      .catch(this.handleError);
  }

  addChannel(channel: Channel) {
    Promise.resolve(CHANNELS).then((channels: Channel[]) => channels.push(channel) );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
