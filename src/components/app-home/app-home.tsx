import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome implements ComponentInterface {

  render() {
    return [
      <ion-content class="ion-padding">

        <div class="flex-vh">
          <div class="w-100 m-auto max-560">

            <img class="logo" src="assets/migrate-bp-logo.png"></img>

            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-item lines="none">
                    <ion-label position="fixed" class="step"><div class="list-number">1</div></ion-label>
                    <p>Download, install, and activate this plugin on the 2 BuddyPress sites you want to migrate data. <br/><a href="#">Migrate BP Plugin</a></p>
                  </ion-item>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <ion-item lines="none">
                    <ion-label position="fixed" class="step"><div class="list-number">2</div></ion-label>
                    Copy the link from each site and paste into the connect form.
                  </ion-item>
                </ion-col>
              </ion-row>

              <ion-row>
                <ion-col>
                  <ion-item lines="none">
                    <ion-label position="fixed" class="step"><div class="list-number">3</div></ion-label>
                    * Start migrating data.
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>
            <div class="ion-padding flex-h"><ion-button size="small" href="/connect">Connect Sites</ion-button></div>
          </div>
        </div>
       <p class="light-text ion-text-center">* Migrate BP is not responsible for any data loss. Back up databases before using this app.</p>
      </ion-content>
    ];
  }
}
