import {Component} from '@angular/core';

@Component({
  selector: 'add-channel',
  template: `
    <h2>Add Twitch Channel</h2>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="channel-name">Twitch Channel Name :</label>
            <input class="form-control" type="text" placeholder="Name" >
          </div>
          <button class="btn btn-primary" >Add to List</button>
        </form>
      </div>
    </div>
  `,

})
export class AddChannelComponent {

}
