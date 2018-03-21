// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ContentProvider: {
    YouTube: {apiKey: 'AIzaSyDv38BhSNeqGtx1y8Oi_hNUG6_KTTC8W8s'},
    Bing: {apiKey: 'd53b7f611fd14b2a98156fca53cf2f1f'},
    Twitter: {
      consumerKey: 'GAndHIHTczfYnu6AljUz3aNIZ',
      consumerSecret: '4bDj5bFPCUDAtsqljzo1gTW0LQ3uW26qWsxip4x0qFqDQ8hIiU'
    }
  }
};
