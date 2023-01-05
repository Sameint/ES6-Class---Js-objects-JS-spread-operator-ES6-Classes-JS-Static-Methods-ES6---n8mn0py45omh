
class API{
  #secure;
  constructor(url,method='GET){
    this.utl=url;
    this.method=method;
    this.#secure=url.startsWith('https');;
  }
  isSecure(){
    return this.url.startsWith('https');
  }
updateURL(newUrl){
  this.url=newUrl;
}
  }
module.exports = { API }
