export class DataProvider {
    data: any = [];
    api_key: string =
      "$2y$10$VvphRMZ3Pa64x1o41J9nNureTKadSha9ANQM9I29aRQAZ/0iCHVUK";
    url: string = "http://ygmcommunity.wpengine.com/wp-json/buddypress/v1/";
    headers: any;
  
    constructor() {}
  
    async load(url, endpoint, params) {
      const str =
        "?" +
        Object.keys(params)
          .map(function(prop) {
            return [prop, params[prop]].map(encodeURIComponent).join("=");
          })
          .join("&");
  
      let json = {};
  
      let time = new Date().getTime();
  
      try {
        const rsp = await fetch(
          url + endpoint + str + "&api-key=" + this.api_key + "&cache=" + time,
          { cache: "no-cache" }
        );
        json = await rsp.json();
      } catch (err) {
        window.console.log(err);
        return [];
      }
  
      return json;
    }
  
    async getMembers() {

      try {
        const data = await this.load(this.url, "members", {
          page: 1,
        });
        this.data = [...this.data, data][0];
        return data;
      } catch (err) {
        window.console.log(err);
        return [];
      }
    }
  
  }
  
  export const Data = new DataProvider();
  