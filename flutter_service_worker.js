'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cea7d7f35f0c9a32198a79821d7f5002",
".git/config": "3c81df3d4301ab9f4ecf889a2a79302c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "55b5a9f5ae46935363bf68141104ebdf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c2ffea05c50138b2237b12355d220dd",
".git/logs/refs/heads/dev": "10188a1e074f316f04ce3f205fbb37aa",
".git/logs/refs/remotes/origin/dev": "7f4b1eb4e876c790ce49d5c7e82f090b",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/4b6c168b89944d73b90c86178fbfdc8464f3fd": "766dd677174df06ccfd8b95eed6e3e90",
".git/objects/09/e4ce79fbee96a485f8ecea42a076c9ae25bc63": "83e35950799dd1c521e3776dc78ad55b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/e471cd1c65dd3ad21a18cd7d0a7bf89046752b": "b4cb435f109ed0edba3d0cfc6a56c9df",
".git/objects/0f/cc0805b287e488448dced74f64459b5f1de723": "b6738e7f68d1e3e6d9f23010885f9ad5",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/15/dbd04e1aa37f7d6abe54ddd93a4a6df4d91c1b": "74ab474bd208f0e0f4ef53d45a6d7c1a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/a0575c291ddae124a406618d254f0c2fe9d54a": "45a60be6dc925c060c9c48b1799f5393",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/256dabc1d3f84af3a1dc81079b1c2e2cd7afad": "c66621b91ea159a3d509e10909deae06",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/9f0509e31f7696551c1cdbae73210980c43f51": "109bd4c85ecfba9437da0aeaeadf6bcb",
".git/objects/35/0f8cf4e07753f5d228af6ec62710b7f699b4e2": "b31a4d350c73cde9882ef9c7922eb437",
".git/objects/3b/9e691cd9215d9e0107622164b5955b466069d8": "f894b081362c7e8c78e954546a66eca5",
".git/objects/3c/836e86b264ad456e15d097e8cee1439057e0d8": "c50f7ed41fa0365168d621e97fa17690",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/43/b9acd2a993483d7d3e5d868b72d6fe428a7951": "02498f108984e8e19e34b1c8bc6b92d3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/501ec5d12122cc260087e61789b7cf4498da7c": "d1d8a02b2803e0eabae7736c0de33d83",
".git/objects/50/2951b996e576371457d1ec84dbe14d4a8dee9d": "81e6a48c930159f84bd40ce87a3218e6",
".git/objects/56/676167d1aa6e393dbb0f770937becc3124c064": "7bd25c6b198b386d95465823118a95bc",
".git/objects/5b/3b2b1d72efd1e5bb592d927df9e420dbd86294": "d4ff643285544b40e3467412a6de2f8c",
".git/objects/5c/190aa1a68fc536386af460756153a584352f45": "94b10229ad5fd06f133a818ec88ead88",
".git/objects/64/a70496b307c09c90b07af385d9577761dcf098": "38bf0b782af123f5b49dd082f4764799",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/69/a52db711576eeca9860b6c9040b09c4eef595d": "f15b666eebcc48c8b454ec8d660064a8",
".git/objects/75/a764bec84b0dfa084ae21703879f0b33a162b2": "6e6c679e172f78d2db9881ee30f9d7e2",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/7d3b7fdf0dc32805f374c5100750e796017898": "ae4b840e45f488add60eb51caaff14e2",
".git/objects/80/2802cbd1eb5c2b28e81b15092e5d9496eede90": "ee905aa91e46aa3819166ed99866bc00",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/ceb9bab57f3d9d0118beea76db0b20199f0dea": "22579f57d21c6aed35e9a4202f8a14ed",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/3da938187bb9ee3feac85f043d8da31635e8dc": "cbf1b01d63a16a2be1c95d3ded712aac",
".git/objects/a8/5fa5f2265fac1f46a7db98059558506ef6331a": "b910c073632cf5812c9867dd26d3829c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b4/abff86c4037979d46905156f336d920eed262b": "cbd5c26e7a217f7603d9c15dad5e1857",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/ad8e4fce417053269490c281f466b12e348491": "dca04ce6a6315678c0952af357768c90",
".git/objects/c3/e18dd375f7e290df271ec5f0f1503720c01369": "07d3832bfeb66287e1589f6d4cd21146",
".git/objects/c5/61d8d59a0d054854b8c68960eec9751a72750d": "64a27c414318f40f05cf80c0fc2ad1a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/53391a9beb044606d93caadee6a9a38ff05a8f": "9d74249f8c58706b32e5c18056dcdccb",
".git/objects/e2/5030e5922a143ce2c123b37aff54b52a66aa17": "3821aa851ddf267eee665e84dbc74389",
".git/objects/e3/f1a57c12a82d13307e8e6e59eab238ba036be4": "15a69a8334b33330b3ebd310a403be35",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9248f603bc9b05944bf0b57874053cde34aa40": "f391953fc4ee3373f18b3f61b96960cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0125344e8ad00eac94beadc4bc915967edd854": "321df790ef0c19bc9ab213f7c7be513a",
".git/refs/heads/dev": "81e343807da30e60c05e8fa116d25ae1",
".git/refs/remotes/origin/dev": "81e343807da30e60c05e8fa116d25ae1",
"assets/AssetManifest.json": "14ff5f18e5d40b534e0c2413ddb7bb3f",
"assets/assets/images/food.jpg": "8a87b17e32a6c09eed9f53723dbf1f71",
"assets/assets/images/polina.jpg": "494196672ab8c08d0f7e0012578a3f26",
"assets/FontManifest.json": "89536fbd58b9ad33eb7dbba03e4ea7d4",
"assets/fonts/Caveat-Bold.ttf": "b5e9fdd33063579d243a1a4c2239b296",
"assets/fonts/Caveat-Medium.ttf": "a33c81836f5a681e2e1877b91885feb9",
"assets/fonts/Caveat-Regular.ttf": "65f9db2d54febfe7b53e56e13d163c49",
"assets/fonts/Caveat-SemiBold.ttf": "1fdd873e17965eff7da58c06aff65050",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fa74b0628554ae65aef19b8e9e406fb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "095a3440c5bb9a78ae540fe51fa3a6b3",
"/": "095a3440c5bb9a78ae540fe51fa3a6b3",
"main.dart.js": "14c83d7cf9d1e4860ed6e75741c4c419",
"manifest.json": "27db5dbb4e9e39df1e8f3456f798fee6",
"README.md": "e8176d3c91b25a90d853e83b95d06461",
"version.json": "02d118b7be704a18f6830a72de0ee55c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
