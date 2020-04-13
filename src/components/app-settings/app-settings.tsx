import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-settings',
  styleUrl: 'app-settings.css',
})
export class AppSettings implements ComponentInterface {


  toggle() {
    alert('this toggle');
  }

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
          <h2>Settings</h2>
          <ion-list>
            <ion-item>
              <ion-label>Delete Sites</ion-label>
              <ion-button size="small" color="danger" onClick={()=> this.toggle()}>Delete</ion-button>
            </ion-item>
          </ion-list>
        </ion-content>
      </Host>
    );
  }

}
