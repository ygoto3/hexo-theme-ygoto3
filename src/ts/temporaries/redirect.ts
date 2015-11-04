// redirect temporarily

interface IPMap {
  [key: string]: string;
}

const pMap: IPMap = {
  "8": "try-grunt-angular-templates",
  "38": "angularjs-12-has-no-routeprovider",
  "55": "2012-jquery-early-2013-backbone-late-2013-angularjs",
  "91": "roles-of-angularjs-controller-service-directive-filter",
  "107": "smashing-conference-whistler-and-atomic-design",
  "145": "try-gilgamesh"
};

function getParameter(name: string): string {
  name = name
    .replace(/[\[]/, "\\[")
    .replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(location.search);

  if (!results) {
    return "";
  } else {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

function getUrlByParameter(param: string): string {
  let post = pMap[param];
  if (!post) { return ""; }

  return `/posts/${post}/`;
}

function redirect(url: string): void {
  if (!url) { return; }
  location.href = url;
}

redirect(
  getUrlByParameter(
    getParameter("p")
  )
);

