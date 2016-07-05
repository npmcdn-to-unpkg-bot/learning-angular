"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ChannelsService = (function () {
    function ChannelsService(_http) {
        this._http = _http;
        this.channelListAPI = 'http://rest.learncode.academy/api/asku387shllqkaubhvlahr/ask37cnsgu47cnuh3sdjlkajshdf';
    }
    ChannelsService.prototype.getChannels = function () {
        var _this = this;
        return this._http.get(this.channelListAPI)
            .toPromise()
            .then(function (response) { return _this.getTwitchChannelInfo(response.json()); })
            .catch(this.handleError);
    };
    ChannelsService.prototype.getTwitchChannelInfo = function (channelNamesArray) {
        var twitchData = [];
        var twitchUrl = 'https://api.twitch.tv/kraken/channels/';
        channelNamesArray.forEach(function (channel) {
            var request = new XMLHttpRequest();
            request.open('GET', twitchUrl + channel.name, true);
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    twitchData.push(JSON.parse(request.responseText));
                }
                else {
                    console.log('We reached our target server, but it returned an error');
                }
            };
            request.onerror = function () {
                console.log('There was a connection error of some sort');
            };
            request.send();
        }); //End channelNamesArray.forEach
        return twitchData;
    };
    ChannelsService.prototype.addChannel = function (channel) {
        this._http.post(this.channelListAPI, channel)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ChannelsService.prototype.deleteChannel = function (channel) {
        this._http.delete(this.channelListAPI + '/' + channel.id)
            .toPromise()
            .catch(this.handleError);
    };
    ChannelsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ChannelsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChannelsService);
    return ChannelsService;
}());
exports.ChannelsService = ChannelsService;
//# sourceMappingURL=channels.service.js.map