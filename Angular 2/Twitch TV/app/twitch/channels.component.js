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
var channels_service_1 = require('./channels.service');
var ChannelsComponent = (function () {
    function ChannelsComponent(_channelsService) {
        this._channelsService = _channelsService;
    }
    ChannelsComponent.prototype.ngOnInit = function () {
        this.getChannels();
    };
    ChannelsComponent.prototype.getChannels = function () {
        var _this = this;
        this._channelsService.getChannels().then(function (channels) { return _this.channels = channels; });
    };
    ChannelsComponent.prototype.onDeleteChannel = function ($event, channel) {
        event.stopPropagation();
        this._channelsService.deleteChannel(channel);
    };
    ChannelsComponent = __decorate([
        core_1.Component({
            selector: 'twitch-channels',
            template: "\n    <h2>Twitch TV Channels</h2>\n    <div *ngFor=\"let channel of channels\" class=\"channel-list\" >\n      {{ channel.display_name }}\n      <button class=\"btn btn-danger delete-channel\" (click)=\"onDeleteChannel($event, channel)\">X</button>\n    </div>\n  ",
            providers: [channels_service_1.ChannelsService],
        }), 
        __metadata('design:paramtypes', [channels_service_1.ChannelsService])
    ], ChannelsComponent);
    return ChannelsComponent;
}());
exports.ChannelsComponent = ChannelsComponent;
//# sourceMappingURL=channels.component.js.map