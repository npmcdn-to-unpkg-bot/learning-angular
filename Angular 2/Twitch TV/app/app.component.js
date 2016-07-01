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
var router_deprecated_1 = require('@angular/router-deprecated');
var channels_component_1 = require('./twitch/channels.component');
var add_channel_component_1 = require('./twitch/add-channel.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Twitch TV';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h1>{{ title }}</h1>\n      <nav>\n        <p>\n          <a [routerLink]=\"['Channels']\">Channels</a>\n          <a [routerLink]=\"['AddChannel']\">Add Channel</a>\n        </p>\n      </nav>\n      <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
        }),
        router_deprecated_1.RouteConfig([
            { path: '/channels', name: 'Channels', component: channels_component_1.ChannelsComponent, useAsDefault: true },
            { path: '/addchannel', name: 'AddChannel', component: add_channel_component_1.AddChannelComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map