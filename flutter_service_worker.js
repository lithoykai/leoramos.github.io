'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "4fe48dd4a9bdb36bbe784cc05cf6a31a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1d1ab3c32cc1ea50e3170899bc329ec1",
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
".git/index": "31e1985f0db3cd898d3e20a4fc430f11",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc158f519ccbbc57c35c9016b52df677",
".git/logs/refs/heads/main": "1084d31bd8bd9c0d16a9e5cfe6fc8564",
".git/logs/refs/remotes/origin/main": "80c9042d4bc0c4322a02fbf6962fa624",
".git/objects/01/16d51c4c7bd5679e62a9edafd48edf3d12ed88": "8c9ce1555a235f5bdced450c427c2fbc",
".git/objects/02/a3945e1f335b6625b4cb8deac3f0ecae8c1dda": "8cb9dd303b2ad6193a103d4241616615",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/738142a90df7980654cd21703a0eedec6e2c9a": "24170bf3b87866fccb2eb825d353f797",
".git/objects/06/2bbf2761b24a9b07ec514a0f59b81d8ae47a33": "1a13f38a853201f3128c37859747aa22",
".git/objects/06/fe41472a96e458c2311a92c74ae081c8099080": "8bc46e23f70f2d3b3cec0a04ea6ea849",
".git/objects/09/76f7c93fabc6ebea7d142ace0777b102ed78c9": "5b9433b6a897affab9e35a8686e60e5b",
".git/objects/0a/2f6b020e76d2e579884ec34b049fba6ce1d257": "c9abd4ede10ac7eb8fc0abe3fabf4c85",
".git/objects/0a/a96d0a734fe7c628661686717920f7be0d8577": "1b533e6646598530bb1f1bcfd60ca36d",
".git/objects/0b/5fb8c8fa5c71e7db8f03bab6ac6df05e474a94": "d3271f111e450fd2dc428f3700c2aac4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/f192b6e74a88018426687081e39c2e07363486": "a78af7bedf5eba6744c6ff381507bf75",
".git/objects/0e/08eac8fe136b21ac3e4bdd28c35b536097d3c8": "e523350b62c7f93bdcf3feba6d338cff",
".git/objects/0e/8d6d588595bb22268823c7fa2814b2ba1b02a2": "a655e7eaad518057ae1dc474620632d1",
".git/objects/0f/840ef9c7fca7918fb5b8fc9a4dca6bbea2797e": "0d7153671582dc12dd68df528563904a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/ebef2002f36b4d0e594018abf13c0b77b6a91b": "f7b1ee05f16986ce52071f50acda6a97",
".git/objects/1b/78ae5f52e024995562a5cf834a5384732e6e37": "237ff76561a7c8233e4a3ca37ce145f2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/0bc04b29dabf5c5e8d5afa84d2eb5cae0f4959": "f5834f45e611422cd46363e35409d7ae",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/2cb536ca04256f73e7b9c5c0d4f7002902ff29": "cd338835d71e683528aaeab743e12ea1",
".git/objects/24/7047de48b7296fec96fff70ba99cc4b63efc4e": "31cc0ae2b1c0d505ac8fbc74b499a7dc",
".git/objects/25/2752e4ed9156ad4448363bfb7435483e820ab6": "671e682cbf541d32b8099266377b1410",
".git/objects/27/5b6a8cf37e41409be6cab18d646aa647ad2d10": "288be96b68712989042e062eac735055",
".git/objects/28/7d889e6a9f5463df73c0e90870e934a6b6efd0": "d426d85cedad581883257315dc1f3890",
".git/objects/28/8defd67ec77b9b9eca1e42549b9dba77602985": "0ccd96437959cbb10f20943e35b26298",
".git/objects/29/ddbd7e7e8af08ae1a5df95ab1f1ed292acbb26": "ca4f234c22cacb89c7093c46629c4d4b",
".git/objects/2d/98438754b8d0a7cae27e0ddabdb751cdff25f6": "70af4926620d8ad951d2264bef10302e",
".git/objects/2d/b55123aa2367d4ff034f7adfc807040d3e7826": "038fec57b4e92770bb06cbfecbf2e0c5",
".git/objects/31/1ab5ea9ccd36c9f69d74d79ba9dde19eb5bf6f": "5751558e01c16148ac99774efa0314e4",
".git/objects/34/6e03d023e8f63f19e2e7de06b05905fb6a8c97": "ef9854cb3ca196a41c3daa5342b28bce",
".git/objects/35/2f382ab56b35ac291d43a3201c06e1069cc72a": "2730bce9b6064813d57f48f6793861cc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/679e0a6e511c8d67dd4abde0c48147c2a24c31": "1057b2e79e62dd4fa1591fdb24bf5d91",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/d5478ad97af97e85855a2221acb43db84e68fa": "4375fd9f79e98351c4436a64b145b007",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3b/1f1ea1b0926c3d7f53d53f8f3ec2a823aace9c": "d49c0da67f49b64d8a5dfdb8eaa86d9a",
".git/objects/3b/1fb3916e1cf5eb24f621319e02f444f20cfabf": "17d54510e1fa4776cc3b9e652c401595",
".git/objects/3c/1b7fd14d05c8f735fd7be61af85e9768492366": "ef6ecfb1dca7432c6fe83c556d9320f3",
".git/objects/3d/21ae1b9db4b749bfde38af66a7ee4b692c5404": "90782ac7019be19b4d839fc51e3e59a7",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/629890c38cb65876af186200f8082d096e7e21": "16c3ec90974b731b264b76ea427d64a6",
".git/objects/42/c8a4e95d66cb8f052b0288faa9ac6f68cd40b3": "d859e0faa06468f31adf30785411bfb5",
".git/objects/46/dcab922c1780563ae05d37d7fd7882a8fc3f3e": "72cceb480fad2044f776e870fe927146",
".git/objects/46/e1a401d0f6bb3b8ebd1b40a2ca75555581cfa7": "a07ab2265827bbbb1a0877f008c87cdc",
".git/objects/47/1eddfcb475aa9ad96416075bc8beb917273191": "a1f503042046b801543fcb93b22b7ea5",
".git/objects/47/37a3fcd0d27c6c436c98ca2dd4f65ef7afde29": "adb59e9cd4f8347b2133aced5e3aff01",
".git/objects/4a/c6c29bddc04eaaedc34e574ba9d805c3d6580f": "eac0a855529c1903cd1d0ac06386bbec",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/5c5499f9ec7f217010c7170555cc3bd935578d": "9db03d04d585682d61e8edd119c40434",
".git/objects/4e/b6bfaaeb83af0917fc341cbdc90a9d6bdc63b4": "d04414edacd6dae7140faad085c8208e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/c4a7770fae0d9fa03c121a896eda4e243c5827": "330cbfceab421b0eb190a823dc303382",
".git/objects/58/ac9a4a67d8e8e2b7c3e9903edec6fe240778b8": "6802217d558430b5dc0b4bfe18db87c6",
".git/objects/58/dbd497c935fbf1753d7176a30486fafb3fb2f8": "ea4d0c7824bd05e9cbddc904e180c7f5",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/d075117f0149ced0532c14d092e79994d68fec": "063fd1482b8960e7fef071f90cdeb7e0",
".git/objects/5e/f7ddaf78c7b63e231ca0968c87daebe2f7d54f": "aaba3fe4666be0ea7b4e362b70ca3a4e",
".git/objects/60/42d0573f65e80b6aa11ff785c3795a31d8ed13": "d884b5d8566bf37028e65bcb26b53968",
".git/objects/61/8bc41c675a04843dc08db1136ab0d73009797e": "e2dd2f46431f671eceecbc5969b80d86",
".git/objects/62/0c85e3af02de7010306e0c7b8f516ef8ddcee8": "8b1b7d1c5a437930e4579c748451cfb1",
".git/objects/62/38515797fc71f8c7544ed25f23ced498a09493": "9b07fa3262720594274a8ad0c44cea86",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/88b57fe3f2fb4557045550caf0605c412372b4": "bd754ee36ebcdd52b931b873af7d3dab",
".git/objects/67/491726db8b5768ae03395ad8f5ade3563dd9cf": "aeec0315e05c8ac71325722cbd83df7b",
".git/objects/69/a5912488f1835167d013b69f2e004e23b6b876": "c468eece8ebbfa671cb5a77c1da44042",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/7234fdba1edd75dc7d385f72edb1cfc2baf07a": "5beeb5b154f49175b9544f6cf0d6456b",
".git/objects/6c/df18d030a596e9a4c4e52ae06af17a3ff87084": "fa8c3252c1529d7f0708ef9926cfc193",
".git/objects/6d/3a380021880e5296f254fd186cc1f8b27c3155": "6d5a506f278e1ee0a7d00bb1a6bfac86",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/7654da88b5c15d336f311007c7c06f915e1836": "d1088d3c8600a7f2cd2db4351fb8e912",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/1753526f387ad53072acd5a9120a1cc0484ecf": "121a69f8139b5d84fa71ac1e9291c09d",
".git/objects/7c/a12642fab59de9948d1bcc452d56f98aa67872": "05a884da6b3f187fa3aed898f07b96d2",
".git/objects/7e/b7cd0d5a33d8b311a73477da4328fbdcf9418d": "aac94e0177e9f3526d41148d7d56c99e",
".git/objects/83/a2b18c02eeb4d2fe793de8b5c47b7a0b2fcfc3": "5ca3be3b59cfd5821e43949f650d5acd",
".git/objects/83/fbf71ea0c69258f73fe96f51520a04d1cbdb39": "3e887d675ed8ff938d32eaf5f20668b9",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/88/601372757d64d53837d9be97695dd7513c9182": "66082c10a55719543d817aa24e51cf61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/264031f2da1be6f1a389544044c7b1acc1641f": "30cba7bb9b703a5b5b15372c0c6b2029",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/950a7e4d942de9cf553e4a1f444d74f7927d0f": "44cfaf17b6a2ece1f9a99414a4a9a792",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/96/0d191a8206c3c25d7e30d92e44565775108e54": "89d2b57ebf125d6bb592d84e3113b1da",
".git/objects/96/c8d078c4bf75d9a07c232c48b5860f9891199e": "60606c30172c08baaa7f99b2b862ca44",
".git/objects/99/cc4f7fa4ef253860860aeff097af771ffebfe2": "930c0e8b30adbda5d4774dcedcdc6dad",
".git/objects/9a/2365ff42c910d2163489cd8692d3b5e9a472d6": "b4e11e857b353957838b7dbbb310a9d3",
".git/objects/9b/18192a5cccf62e4e35eb7f5c647a786d01662e": "89852a76fd2bfae11697df5d8775ad03",
".git/objects/9c/a989f6a14fc8511a849a31de165f15a3c92f2f": "cb90e8dc8bf2309dcdec65af0f87793c",
".git/objects/9e/cc34d9a0fad71fcb438a83367ec362aa98ba15": "0ea8da87ff0e5144429f72e1e03e94c5",
".git/objects/a1/102eb450d4c3c2e7ce0556add6e0c0f197430a": "a70d527f6d9f0d162c50e0fc1a0ea840",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/689fdb766839afa5f1e2aeefcf92d17686c714": "cd1a8afc4323da298a60fc5e25275a00",
".git/objects/a6/e8f65006c6d82fa948d77c01d67246b6ee79c3": "4f74f55f914db15f20cb0200fc8e47b9",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/7f25da0f31f7e8c2b7e843db38859ce14c04b9": "604bbe7e847d64b0c66af8f6d848d21d",
".git/objects/ad/e05beafec4be6edaa51517bab2fd838ab39049": "72016d06eb08a728685db109854e6596",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/175fda535257d899e537c20a7f1fa35d1c4d78": "ad0e568ead7ac86c0d731331c3c6ac67",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/5a4a6a517af3eff73d08551f5fe656e3cb7b3d": "24a094cba017eadf0d970b6fe0b7ea07",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/7197d9b6dc35b0582394319180f5c4f88b39f5": "03f1ac6a0d9f1fcaf68617654d00202d",
".git/objects/bb/7bdc9dd2df907f7f70dd3399025c358712b36a": "083b3b046b28a6c7115ce6f6b38f3a4a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/5037b8268f4573371d9997e58bce6761ad9201": "f246b7315d5ed11c5ad851452e038ead",
".git/objects/c0/1cebd5ed4ca6b0e31d3e737acedc5d4fe036d8": "58f73c33a3b2c98a1470358e51ad6954",
".git/objects/c0/972264b4769b620ed98cbbcb04652fd9d8164e": "8e99cf8fb4ff429aec3d1bfff624c3b7",
".git/objects/c1/ae31d4113fda71c91402190cc7646940dba2fb": "90401c1e9ab5dc40edcf6756af0848be",
".git/objects/c4/5e78f7d2ec0d6316a56619bbe291ce56059ffa": "856125fd3e220dff0e9af00cc248aaf5",
".git/objects/c6/8f8ef02885b7875093d5ddb05d1a26f1da20c1": "67eb506b1e253c6910c3a6184d0ca3bf",
".git/objects/cd/24ef0942b958b1847f0255cddc5a7b80b2626f": "e7ed3311d6d7404871df58215eff4b38",
".git/objects/d1/afa353e6b397ec7b616974277c9740ef4d7f5f": "fab1ab53827eb1f4325b2d761559b999",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/77505186728514c62455555fb88ecbffd34f62": "f815e60521cadccee3b96eb8980e2bc4",
".git/objects/d5/be2aa678913b118a9af8eadcdad2a3827b5074": "dab4fd712002e6e8f39167ba33296f2f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/03c14949677170ad84fbabb98262ede07cf2fe": "d0d7c282e970693dce07b2ffe310e96c",
".git/objects/dd/680cc8a104a823bf8d5b808ee066adab656a63": "9b9c8c139a8be68195640008796162ca",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/e2/a0a95d22947a1b828d25d8236efb9989e46e11": "1e7ffbac3d39a18d6d677daf8abf2f22",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/e4/a47ffec8d3a9c312bf892503c2020670dd38d7": "9bd789d37a3aacd1c289316d8d6e2819",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/a43ef80a0efe53881d4724d3d43afb3a9b2ebc": "b8e6c340a4390454731ad2b0c0dcd032",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e9ac6c4fe2c52d092dd74b0930823e3a71ea0d": "8fa178ca80eaa8785b7f5e7e5299e38f",
".git/objects/f0/c938e0c415e77ad241c000ec56ab98c4abd463": "d271e7cb17f10594acd8d17bdf8ccca5",
".git/objects/f3/6b3bc861a81564f5c60cc408f2efc054ef6fdd": "b9b9ea4a9659bccd758d1ae2659fe178",
".git/objects/f4/32f61162932a6b1deec1bcfffc2a9f3e40b331": "5d99ea41169d179f0fd9a87f0287f313",
".git/objects/f6/d8dd00a04eba3380a93d29b62138c85a2c2e10": "9fe5aca4db53daa9a718bf7e5c26455e",
".git/objects/f8/0042fa3b076083eee2e7441e7da4ee7aab441c": "bbc352155154a470f3c4e0595ae37be1",
".git/objects/fb/b122a2162a0772697c1754e11ab5c7b5ed2042": "2f56483c92288b06b5a118e111dcb2f4",
".git/objects/fc/2a974786397867aeba4a39ecd5a1207241fac2": "a9059d6d8206f4740720caa84af461e4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/d1f0e377d74bc7d1e37ab144a4e45ba83ae717": "ff6556b58ba9089d12d75c7b6c7d0d4d",
".git/ORIG_HEAD": "475ccfc059eda057e5d0cca0682ac4af",
".git/refs/heads/main": "56dad4feb5c56a41fd6caf8738caaab5",
".git/refs/remotes/origin/main": "56dad4feb5c56a41fd6caf8738caaab5",
"assets/AssetManifest.json": "2cf1bf5e48569135db18fedc13c45e84",
"assets/AssetManifest.smcbin": "bc851ca89112371654884bab7595ce88",
"assets/assets/fonts/Lato-Bold.ttf": "2d15decc87393ec398f00dc3d7a2163d",
"assets/assets/fonts/Lato-Regular.ttf": "c5eb54404c9dbda925f7142d6343c913",
"assets/assets/fonts/Montserrat-Black.ttf": "976649f5b0b109bfc06c008372d90094",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-Regular.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/img/email.png": "9c40ca3dd32dd3716eb4508003c8e010",
"assets/assets/img/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/img/linkedlin.png": "8276863e6eecd4efe15941cf300dc968",
"assets/FontManifest.json": "09871ac079b5446aa72caaa3983d144d",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/MaterialIcons-Regular.otf.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/NOTICES": "12ab7292ac3a39c702f895b6c7795765",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "0d1971e11a8183c2f8043b5e686d4cc4",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "adf6e872ecef974ac963dfbee4f041dc",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "9265c6c0cdc6b28cff3e81701d8fd707",
"canvaskit/skwasm.wasm": "db1354e7167ab2d144fbf7cb788bb43d",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/logo.jpg": "67dc5865af6fbe3e060b9ddc23ea262e",
"index.html": "ae4f126d8ad7d165a9924185a749b34d",
"/": "ae4f126d8ad7d165a9924185a749b34d",
"main.dart.js": "2130ec68f46eaf71687d6fc8cf5e80b7",
"manifest.json": "2f81c1ae663a0a4a18d1b1a45619a62b",
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
