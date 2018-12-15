import AV from '../libs/av-weapp-min';

export const LINK = 'Link';

class Link extends AV.Object {
  constructor(url) {
    super();

    this.url = url;
  }

  get url() {
    return this.get('url');
  }
  set url(value) {
    this.set('url', value);
  }

  get from() {
    return this.get('from');
  }
  set from(value) {
    this.set('from', value);
  }
}

AV.Object.register(Link, LINK);

export default Link;
