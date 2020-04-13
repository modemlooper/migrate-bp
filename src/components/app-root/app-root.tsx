import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/connect" component="app-connect" />
          <ion-route url="/members" component="app-members" />
          <ion-route url="/settings" component="app-settings" />
        </ion-router>


        <ion-split-pane id="splitpane" content-id="menu-content" disabled={true}>
            <ion-menu side="start" content-id="menu-content">
                <ion-header>
                  <ion-toolbar color="clear">
                  </ion-toolbar>
                </ion-header>

                <ion-content forceOverscroll={false}>
                  <ion-list>

                    <ion-menu-toggle autoHide={false}>
                      <ion-item href="/">
                        <ion-icon slot="start" name="home"></ion-icon>
                        <ion-label>Home</ion-label>
                      </ion-item>
                    </ion-menu-toggle>

                    <ion-menu-toggle autoHide={false}>
                      <ion-item href="/members">
                        <ion-icon slot="start" name="person"></ion-icon>
                        <ion-label>Members</ion-label>
                      </ion-item>
                    </ion-menu-toggle>


                    <ion-menu-toggle autoHide={false}>
                      <ion-item href="/settings">
                        <ion-icon slot="start" name="cog"></ion-icon>
                        <ion-label>Settings</ion-label>
                      </ion-item>
                    </ion-menu-toggle>

                  </ion-list>
                </ion-content>
            </ion-menu>

            <ion-nav animated={false} id="menu-content"/>

        </ion-split-pane>

      </ion-app>
    );
  }
}
