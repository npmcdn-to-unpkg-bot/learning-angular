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
var router_deprecated_1 = require('@angular/router-deprecated');
var AddChannelComponent = (function () {
    function AddChannelComponent(_channelsService, _router, _routeParams) {
        this._channelsService = _channelsService;
        this._router = _router;
        this._routeParams = _routeParams;
    }
    AddChannelComponent.prototype.ngOnInit = function () {
        this.newChannel = { name: '', id: '' };
    };
    AddChannelComponent.prototype.onSubmit = function () {
        this._channelsService.addChannel(this.newChannel);
        this._router.navigate(['Channels']);
    };
    AddChannelComponent = __decorate([
        core_1.Component({
            selector: 'add-channel',
            template: "\n    <h2>Add Twitch Channel</h2>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-md-offset-3\">\n        <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"channel-name\">Twitch Channel Name :</label>\n            <input class=\"form-control\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"newChannel.name\" ngControl=\"name\" required>\n          </div>\n          <button class=\"btn btn-primary\" >Add to List</button>\n        </form>\n      </div>\n    </div>\n  ",
            providers: [channels_service_1.ChannelsService],
        }), 
        __metadata('design:paramtypes', [channels_service_1.ChannelsService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], AddChannelComponent);
    return AddChannelComponent;
}());
exports.AddChannelComponent = AddChannelComponent;
//# sourceMappingURL=add-channel.component.js.map