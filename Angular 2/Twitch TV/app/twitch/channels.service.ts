import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Channel} from './channel';
import {CHANNELS} from './mock-channels';

@Injectable()

export class ChannelsService {
  channelListAPI = 'http://rest.learncode.academy/api/asku387shllqkaubhvlahr/ask37cnsgu47cnuh3sdjlkajshdf';

  constructor(private _http: Http) { }

  getChannels() {
    return Promise.resolve(CHANNELS);
  }

}
