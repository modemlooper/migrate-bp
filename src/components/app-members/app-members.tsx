import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { Data } from "../../services/data";

@Component({
  tag: 'app-members',
  styleUrl: 'app-members.css',
})
export class AppMembers implements ComponentInterface {

  @State() data: any = [];

  async componentDidLoad() {
    await Data.getMembers();
    console.log( Data.data );
    this.data = Data.data;
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
          <h2>Members</h2>

          {this.data.length <= 0 ? (
            <div class="flex-vh">
            <ion-spinner/>
            </div>
          ) : ''}

          <ion-list>

          { this.data.map( (item)=> (

            <ion-item>
              <ion-avatar slot="start">
                <img src={item.avatar_urls.thumb}/>
              </ion-avatar>
              <ion-label>
                <h2 innerHTML={item.name}></h2>
                <h3>@{item.user_login}</h3>
              </ion-label>
              <ion-button target="_blank" href={item.link} >Profile</ion-button>
            </ion-item>

          )) }

          </ion-list>

        </ion-content>
      </Host>
    );
  }

}
