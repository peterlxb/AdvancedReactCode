class Utils {
  getHashRoute() {
    let hashDetail = window.location.hash.split("?");
    let hashName = hashDetail[0].split("#")[1];
    let params = hashDetail[1] ? hashDetail[1].split("&") : [];
    let query = {};
    params.map(item => {
      let temp = item.split("=");
      query[temp[0]] = temp[1];
    });

    return { path: hashName, query: query };
  }

  getHistoryRoute() {}
}

/**
 * declare route: { path: '/xx', filename:'xxx', initFunc(){}}
 * **/

class SPARouter {
  constructor() {}

  init() {}

  initRouters() {}

  initEvent() {}

  loadComponent() {}

  refresh() {}

  routeUpdate() {}

  beforeEach() {}

  afterEach() {}
}
