'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b594362e0046d7b5b26fa20c9049f4ce",
".git/config": "b3279f18c5a5f96616bc6751db88b7af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "a1908a725e52515ca419cd5586cc19d3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b5e7b743067873cd9b94a9c4d38b9ec",
".git/logs/refs/heads/main": "c609e7dde7d6b583ba3f13dea6bb34de",
".git/logs/refs/remotes/origin/main": "af2574a76d30e9024839b72de810bb07",
".git/objects/01/16d51c4c7bd5679e62a9edafd48edf3d12ed88": "8c9ce1555a235f5bdced450c427c2fbc",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/738142a90df7980654cd21703a0eedec6e2c9a": "24170bf3b87866fccb2eb825d353f797",
".git/objects/08/1c3d37448fb5340e15d53632f0d22a0fe9b692": "249cf7ac39424de5d6f4adfc117fe302",
".git/objects/0b/5fb8c8fa5c71e7db8f03bab6ac6df05e474a94": "d3271f111e450fd2dc428f3700c2aac4",
".git/objects/0d/bc43e682f9fe70f8b3f3baaf0d746aee22f83c": "6dfe818c5b362178508c076b34638931",
".git/objects/0d/f192b6e74a88018426687081e39c2e07363486": "a78af7bedf5eba6744c6ff381507bf75",
".git/objects/0e/289f0f18457a9e575ebd4a9545be5e232f4904": "f100cbcd0d8fbcee45318b3ba80909c4",
".git/objects/0f/840ef9c7fca7918fb5b8fc9a4dca6bbea2797e": "0d7153671582dc12dd68df528563904a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/fd97e73326af1fcb95123b444c1aad892a6c86": "59af7ddd2aa465a26360c6dec2ef9de4",
".git/objects/1b/78ae5f52e024995562a5cf834a5384732e6e37": "237ff76561a7c8233e4a3ca37ce145f2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/fe5dd1f8c9a36a635c25ea04890f1dba236c51": "685af8d0eb91f04af4c15db172953ff6",
".git/objects/23/391847c8141f5cd96cc47221dbe6205aef8a6f": "92e27040842b3a3c651940cc1a3fa922",
".git/objects/24/7047de48b7296fec96fff70ba99cc4b63efc4e": "31cc0ae2b1c0d505ac8fbc74b499a7dc",
".git/objects/2c/99d571576ac799c73e76bfedce25d952a4d66f": "a086b5272d38c115ec40f3758da4eeb5",
".git/objects/2d/b55123aa2367d4ff034f7adfc807040d3e7826": "038fec57b4e92770bb06cbfecbf2e0c5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/41/e1b8b4b58bf1ada07146791e630f9d5e0bbccf": "672e3ecb1e4ea98a30ba2fc560addd3a",
".git/objects/4e/b6bfaaeb83af0917fc341cbdc90a9d6bdc63b4": "d04414edacd6dae7140faad085c8208e",
".git/objects/4f/81e111ec4a70d41b0fe6256f180789cbbeb702": "aa12e56cea22d7af0885c3a5c5fac719",
".git/objects/51/2d81438d7388349e9d3106b8082cbb27bd806c": "4dc8ec46947a9f140bcf62a4bba5d321",
".git/objects/52/11873a3586944489af7e71e7e81499cf3f00dd": "e95efa5b0900f13ccc7a06cf0b301b62",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/dbd497c935fbf1753d7176a30486fafb3fb2f8": "ea4d0c7824bd05e9cbddc904e180c7f5",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/38b92d3983c7f89fd62fd5a390144b499fb89b": "5236eea93b900ddb68da22dd17f0c65d",
".git/objects/5d/c142ea13e8a3f831127d7bf1534f662ef772fa": "6b8d35858bd3ec1fd16294fbd899445c",
".git/objects/62/0c85e3af02de7010306e0c7b8f516ef8ddcee8": "8b1b7d1c5a437930e4579c748451cfb1",
".git/objects/62/38515797fc71f8c7544ed25f23ced498a09493": "9b07fa3262720594274a8ad0c44cea86",
".git/objects/67/491726db8b5768ae03395ad8f5ade3563dd9cf": "aeec0315e05c8ac71325722cbd83df7b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/74/79f8b9b1c0f7fbdc76173f626a84261b7ba925": "76f8186d680ddd21b48f8e6fd714a8d1",
".git/objects/79/9d7c1cbbd3bf6049107240c6d3396c27d31f0e": "646c18b1120de4545b52d345cb4742b3",
".git/objects/7a/03495459b20527422232f88678542f7082af3b": "56785499716e215d4ae8e893c6c7d0d9",
".git/objects/7b/e782519621c5e375ee57a427d824d9cccf7f16": "db355e0593a4109fa466c5882b01e370",
".git/objects/80/202073917bcbb8ec7cb9743227c032108f9722": "a9d028a18280d87e88daf844f7251452",
".git/objects/83/a2b18c02eeb4d2fe793de8b5c47b7a0b2fcfc3": "5ca3be3b59cfd5821e43949f650d5acd",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/88/601372757d64d53837d9be97695dd7513c9182": "66082c10a55719543d817aa24e51cf61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fc1d905de787fa10d672a2b23106047eb7ec38": "3ec29cd465b26cb96e087c8bb1f24d02",
".git/objects/8a/264031f2da1be6f1a389544044c7b1acc1641f": "30cba7bb9b703a5b5b15372c0c6b2029",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/950a7e4d942de9cf553e4a1f444d74f7927d0f": "44cfaf17b6a2ece1f9a99414a4a9a792",
".git/objects/8c/43726908c38292489026e6130fbc1aa2b1b397": "aecf3f27f2857f3d5b3b3eeb728f6ddc",
".git/objects/8d/33bf9aaf0da2d4649992b004ff08ef3e127466": "53af4abc2878e3b2d8dbf03f0051ed86",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/e8f1891a9a73c41d4ca86b445ef45e5bff64b9": "d820b758edf8d5aa3b2a6ca69259f1d5",
".git/objects/97/31bef6ef4ec49f506e2958a220515e4b200fba": "7436e2167512eddd0df2e2a6d3e454f6",
".git/objects/9d/52c6e7d5efaa3f5f551e228f99158725b72e9c": "04a0cecfaacbb12b2d8f3c419a799b40",
".git/objects/a1/102eb450d4c3c2e7ce0556add6e0c0f197430a": "a70d527f6d9f0d162c50e0fc1a0ea840",
".git/objects/ad/e05beafec4be6edaa51517bab2fd838ab39049": "72016d06eb08a728685db109854e6596",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/5037b8268f4573371d9997e58bce6761ad9201": "f246b7315d5ed11c5ad851452e038ead",
".git/objects/c0/1cebd5ed4ca6b0e31d3e737acedc5d4fe036d8": "58f73c33a3b2c98a1470358e51ad6954",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c6/6db8289e552cd41d3edebc8850a28e01c41099": "7757ff0aa6bf49fa7ac8bdb979269047",
".git/objects/c8/9fab2470004e9bfe41cb30e0f72ed867dd2a13": "cde1c19bd4414fd5a0d84db89bf24123",
".git/objects/cd/24ef0942b958b1847f0255cddc5a7b80b2626f": "e7ed3311d6d7404871df58215eff4b38",
".git/objects/d1/8378f33cf790bf2ff6d0ef426862dc4b6bc328": "6ff14106aeb26e0db9d6eaff399441c4",
".git/objects/d1/afa353e6b397ec7b616974277c9740ef4d7f5f": "fab1ab53827eb1f4325b2d761559b999",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/77505186728514c62455555fb88ecbffd34f62": "f815e60521cadccee3b96eb8980e2bc4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/cfabc20920579295c3c37412b08fe1b080aaac": "92b0bf9ce145c9ad8a09b96e13dffc59",
".git/objects/dd/680cc8a104a823bf8d5b808ee066adab656a63": "9b9c8c139a8be68195640008796162ca",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/e2/a0a95d22947a1b828d25d8236efb9989e46e11": "1e7ffbac3d39a18d6d677daf8abf2f22",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/6c1a5ca8cf2c9a6e8e209f1a7ce9e554acb05f": "58f28f0d31f1699d79c293f223903831",
".git/objects/f0/13925d9cf1a7e17d75b71d7d759e7896ef6163": "212c8b0c1e5c4fff53712262e11e4274",
".git/objects/f6/d8dd00a04eba3380a93d29b62138c85a2c2e10": "9fe5aca4db53daa9a718bf7e5c26455e",
".git/objects/f8/9f6f2900a473bc7cc423ff8863168b1b109640": "0140d8cde5cceb230ce33728755e3162",
".git/objects/fc/2a974786397867aeba4a39ecd5a1207241fac2": "a9059d6d8206f4740720caa84af461e4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "0a8401a5151a63e3fbdf3b821cd1fe0d",
".git/refs/remotes/origin/main": "0a8401a5151a63e3fbdf3b821cd1fe0d",
"assets/AssetManifest.bin": "754f31f9952764140078692485d0c4ed",
"assets/AssetManifest.json": "2cf1bf5e48569135db18fedc13c45e84",
"assets/assets/fonts/Lato-Bold.ttf": "2d15decc87393ec398f00dc3d7a2163d",
"assets/assets/fonts/Lato-Regular.ttf": "c5eb54404c9dbda925f7142d6343c913",
"assets/assets/fonts/Montserrat-Black.ttf": "976649f5b0b109bfc06c008372d90094",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-Regular.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/img/email.png": "9c40ca3dd32dd3716eb4508003c8e010",
"assets/assets/img/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/img/linkedlin.png": "8276863e6eecd4efe15941cf300dc968",
"assets/FontManifest.json": "09871ac079b5446aa72caaa3983d144d",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/MaterialIcons-Regular.otf.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/NOTICES": "baa3ee06816caa83ee75492fc8c9cdc8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/canvaskit.wasm": "82f0619ed9f3dade4610d04bcf22f696",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "4b332a9dae8c2e5fcd8b74c7073ee325",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "ba3ff3212219c7e2fde8363ccecc58e4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6a5ff2cba50a36ccc5f108da550ecea4",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "2ef0f78f6996de312355f3b19879b7b2",
"icons/Icon-512.png": "fd036e575ab3ed1f4a0766336efac908",
"icons/Icon-maskable-192.png": "2ef0f78f6996de312355f3b19879b7b2",
"icons/Icon-maskable-512.png": "fd036e575ab3ed1f4a0766336efac908",
"img/logo.jpg": "67dc5865af6fbe3e060b9ddc23ea262e",
"index.html": "ba61029d4cf425f9cbe7b61bccce877f",
"/": "ba61029d4cf425f9cbe7b61bccce877f",
"main.dart.js": "b3470fc2d71044ac3cc8e77698e33b35",
"manifest.json": "928884bff6957b9e8a3be418158acae9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
