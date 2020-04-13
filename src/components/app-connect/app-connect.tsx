import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-connect',
  styleUrl: 'app-connect.css',
})
export class AppConnect implements ComponentInterface {

  render() {
    return (
      <Host>
      <ion-header>
        <ion-toolbar color="clear">

          <ion-buttons slot="secondary">
            <ion-menu-button></ion-menu-button>
            <ion-button href="/">
              <img class="logo-small" src="assets/migrate-bp-logo.png"></img>
            </ion-button>
          </ion-buttons>


          <ion-title></ion-title>

          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" name="help-circle-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">

        <div class="flex-vh">
          <div class="connect-form">
            <h2>Connect Sites</h2>

            <ion-grid>
              <ion-row>
                <ion-col>
                  Site 1
                  <ion-item>
                    <ion-label position="stacked">Copy from here</ion-label>
                    <ion-input placeholder="enter url for site 1"></ion-input>
                  </ion-item>
                </ion-col>
                <ion-col size="2" class="copy-icon"><ion-icon name="arrow-forward-outline"></ion-icon></ion-col>
                <ion-col>
                  Site 2
                  <ion-item>
                    <ion-label position="stacked">Copy to here</ion-label>
                    <ion-input placeholder="enter url for site 2"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
            </ion-grid>
            <div class="ion-padding"><ion-button size="small">Connect</ion-button></div>
            <div class="spacer"></div>
          </div>
        </div>
        <p class="light-text ion-text-center">* Migrate BP is not responsible for any data loss. Back up databases before using this app.</p>
        </ion-content>
      </Host>
    );
  }

}
