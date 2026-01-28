'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "f1ede82307a53e715e8703f515577bc6",
"assets/AssetManifest.bin": "235e74cf8a88c1fef0b1e9198345d414",
"assets/AssetManifest.bin.json": "05b035ca3c80dde742b4b99f0b1b36a0",
"assets/AssetManifest.json": "a82a40b4f028e5f24fb0bec54b60c472",
"assets/assets/images/anticipate.png": "0e0b869fb274ef007d9f6777f98d5000",
"assets/assets/images/back1.jpg": "99dd26e8578f6783dd58ea656ce50dda",
"assets/assets/images/blockchain%2520logo.png": "a7e5a258608d415df1ae545ccf61a609",
"assets/assets/images/blockchain.jpg": "ce552caa0bd5bf924330974313674a8f",
"assets/assets/images/blockchain_logo.png": "84efd3d3d2619e5cec4ab60b07613e4d",
"assets/assets/images/bnb.png": "34e2e7df9f76d3c8ceb2afc6061a2584",
"assets/assets/images/botpic.jpg": "a8872360fc2191e7475ae3e68979402e",
"assets/assets/images/botpic1.jpg": "9b18559dbb82e517d59afb67d86642f6",
"assets/assets/images/boy.png": "24f22516ec47facdc2dc114f8c3de7db",
"assets/assets/images/btc.png": "81717b993d63bf70336f9b70d3c03eaa",
"assets/assets/images/business1.png": "22ea22630b125eae1040c01acf7304cc",
"assets/assets/images/business2.png": "372cb3c1f0754dde5a51571401f27a79",
"assets/assets/images/business3.png": "52d1e6dad6e12f64c82e7faff1e36c61",
"assets/assets/images/business4.png": "b5ba59d6e7a36db45910fd1473fa73cf",
"assets/assets/images/business5.png": "bd981f75dd647c82843e27432264cb9f",
"assets/assets/images/c1.jpg": "b56a6009a86f1cac8d1ea441d4ed92f6",
"assets/assets/images/c2.jpg": "d72c2741daca50efe15f5039f8969653",
"assets/assets/images/c3.jpg": "d68305fe8869b8ab7717530533fe6ac7",
"assets/assets/images/c4.png": "60b168974a6535725b0e351da39b0026",
"assets/assets/images/c5.jpeg": "f894e5c5f6d838e1741c3f738ada1779",
"assets/assets/images/c6.jpg": "d1b4d8a5604b23d0edfd2d58f46b9d34",
"assets/assets/images/comedy1.png": "a26f840303cc5e446846163f96d78257",
"assets/assets/images/comedy2.png": "1ed6e04791784aac3c2797acf3d9b8b2",
"assets/assets/images/comedy3.png": "03c5345c19447ece6ee23379b94c90ea",
"assets/assets/images/comedy4.png": "255e7f55fe029d9a0385ccb741a4a617",
"assets/assets/images/contest.png": "6f490e060bd73d7b4ffae449b29a40f0",
"assets/assets/images/cowriex.png": "5c3e769cfd991e88de3b57f2ec07ad0e",
"assets/assets/images/cowry.jpeg": "0e78dc74b10bcdc350ec12ea7781ff35",
"assets/assets/images/cross-mark.png": "8a8cdb1e739b085b96dbd9f02370b4a7",
"assets/assets/images/cwx.png": "5c3e769cfd991e88de3b57f2ec07ad0e",
"assets/assets/images/d1.jpg": "5c1816886a4e2edbe29cb5944f1addb7",
"assets/assets/images/dar11.jpg": "a87f4f98ce9513c37f4edca772ca17b6",
"assets/assets/images/dark1.jpg": "f5da1438223b4e6e0bd63d542cfa3d47",
"assets/assets/images/dark11.jpg": "d9ec473f631d8064defe14391128e945",
"assets/assets/images/dark12.png": "24b1424f8517272674d3f4b5d38e2554",
"assets/assets/images/dark13.png": "a427d9faa0b3149c779c94aceba4184d",
"assets/assets/images/dark2.png": "0fc5679fc83478cd25a219f5b9322ce5",
"assets/assets/images/dark3.jpg": "c037b45fc5151da5be869c19e03e9845",
"assets/assets/images/dark4.jpg": "832ab49d3e54a750c3b51ae9142715c2",
"assets/assets/images/dark5.png": "6da2240439f1bb76b4afef7582309724",
"assets/assets/images/dark6.jpg": "eac10a798ffe52afcbb57a9501383ce5",
"assets/assets/images/dark8.jpg": "07ad3d2337e1c4056a54d452d0202319",
"assets/assets/images/dark9.png": "150bb2d58dac538435c59f5c4fd4b97e",
"assets/assets/images/discord.jpg": "b5d4ce10a744861ffd3314d20d116976",
"assets/assets/images/dollar.png": "1ef66d540f93eeebec765929361ea456",
"assets/assets/images/earn1.png": "fedf669bd2f2e65403a804b97147533d",
"assets/assets/images/earn2.jpg": "02e4ea9defee301dd6eef1165c9f82e5",
"assets/assets/images/earn3.png": "a7d5294a3604100996e84d3136e1eb9c",
"assets/assets/images/earn4.png": "f0c021c936954103aaacd081d855382e",
"assets/assets/images/education.png": "2cfc1ca4857a7e465d676185e8a8124f",
"assets/assets/images/education1.png": "77ce55b8ee077db6fff743f4572aff98",
"assets/assets/images/education2.png": "6c4d611427ba39e279097580bf657d20",
"assets/assets/images/education3.png": "d3d1ac5e64e544b7a88414f3708e464e",
"assets/assets/images/emoji1.png": "2b88c0977f7edd9472e36004e507c1e8",
"assets/assets/images/emoji2.png": "f2c0b5044e960eeee8125f66330b3f1f",
"assets/assets/images/emoji3.png": "e74a103ed8029489022d1bc9b4873e36",
"assets/assets/images/emoji4.png": "18b2318874f86b488e096eec1124d469",
"assets/assets/images/entertainment.png": "cf1d46fdb827e8db02f31bbe55051bc6",
"assets/assets/images/entertainment1.png": "db14b774e531b526d542ab86417875c8",
"assets/assets/images/entertainment2.png": "ecb3fee426012ebfe1e8c3b09bcf8634",
"assets/assets/images/entertainment3.png": "fb11c7bdbeb2191a0dd169005e7cc4ce",
"assets/assets/images/entertainment4.png": "11a77ac762f3651f09f4cfb41f8d1dc0",
"assets/assets/images/eth.png": "bf59ffbdf73d4634ec9f38f6327625aa",
"assets/assets/images/facebook.png": "f44420e456c7e3289b32781579b0df54",
"assets/assets/images/facebook1.jpeg": "55ee12d07dcdb35c7d69ed5ad9c7322b",
"assets/assets/images/facebook2.png": "8feddc7a711d2f30d4509428c67e84ce",
"assets/assets/images/facebook3.jpg": "ad31ef3c4031e7c7b008c2d5978b0c22",
"assets/assets/images/female1.png": "fbaee23333bb92cc95f78553ba22941c",
"assets/assets/images/female10.png": "d7ebaeb0384270b0802bb3c9e694fbd8",
"assets/assets/images/female2.png": "256087e7914542e783ddab9d637dc3e6",
"assets/assets/images/female3.png": "26df81d19421cf183f8040e852c519d6",
"assets/assets/images/female4.png": "8f7075ee0929425f2563fdf8bfcd16de",
"assets/assets/images/female5.png": "00154b61f9d3ce257179b70f4076336c",
"assets/assets/images/female6.png": "6d267f4e2a669f7862c39ac9fad04081",
"assets/assets/images/female7.png": "d8d76f980d68a22917be9a5981e88f51",
"assets/assets/images/female8.png": "8388e0030f333cdf50a3816c2ae76c70",
"assets/assets/images/female9.png": "34ea2b9a85cda265e8f912e1fc7bc5eb",
"assets/assets/images/gossip1.png": "66c67486f9721f60222eb1a0b22a7a03",
"assets/assets/images/gossip2.png": "bbfe7744c2a4bf1f051cb60ad89b5a83",
"assets/assets/images/gossip3.png": "4b5dccda8e87d75b01c50c168439dfe2",
"assets/assets/images/gossip4.png": "ac3f3807f686fd5e692d3ce4a880d0df",
"assets/assets/images/impression.png": "f29c3d90675fa1a5d0f69e14277440e8",
"assets/assets/images/Instagram.jpeg": "b8852623ca00a6839c76c38de251960f",
"assets/assets/images/instagram.png": "868d5d7356b75693c5975172de9bf9bc",
"assets/assets/images/instagram1.jpeg": "2ce863431d747dd190f4d1b2978c117a",
"assets/assets/images/instagram2.jpeg": "16b1557f4c94bc28e2b5b6d1524a5aae",
"assets/assets/images/instagram3.png": "30579bba16e003feecfff00e8f51a662",
"assets/assets/images/light1.png": "7ae68f1ba46bac9ef961a61500f2116b",
"assets/assets/images/light2.png": "d6d14196de601624618384dde50eebd0",
"assets/assets/images/light3.png": "5d6d01bee57d7b439274b7c3619d6a74",
"assets/assets/images/light4.png": "ee9a64892acaa585d78db46aaa1a617a",
"assets/assets/images/light5.png": "210c7a14a75b9ce805eebb8b2534d3ff",
"assets/assets/images/light6.png": "a069669e130354a5815ce19993aa1b3e",
"assets/assets/images/light8.png": "a452d56b80d3d8dc183727eb655f6963",
"assets/assets/images/light9.png": "899c4eefc05418441709ee0d6020ca43",
"assets/assets/images/male1.png": "fca26afabd416c5afa415f83817fd70a",
"assets/assets/images/male10.png": "378f28ee456f29292e2dacec2826b6ac",
"assets/assets/images/male11.png": "721fe6149f4f4169abcbb1699f4a7c67",
"assets/assets/images/male12.png": "1834e03e8922db26b568c4ac69ce5007",
"assets/assets/images/male13.png": "87035238e2b9577519c743dccd695c5d",
"assets/assets/images/male14.png": "0815b5aaec948f20b281a2a64703d691",
"assets/assets/images/male15.png": "5aa9a667b2b890bf82bd6798888d3773",
"assets/assets/images/male16.png": "fc96aba4616ccc8fe35eb785f59799bb",
"assets/assets/images/male2.png": "b20af5c14da10df1e870bc6016fa17ba",
"assets/assets/images/male3.png": "a893aeefb451670bb1a10174dd62a0b7",
"assets/assets/images/male4.png": "b2aebd93bddf9aa6d0b75d65cd66cb58",
"assets/assets/images/male5.png": "baaafcbfbfdc0bda4cca38ecee622a7d",
"assets/assets/images/male6.png": "a087d38f1065eafdb07af23b4a2472c3",
"assets/assets/images/male7.png": "d354b5bf4408376a7f33b0ea520a7c57",
"assets/assets/images/male8.png": "49390abc6b111e490207a692a354e647",
"assets/assets/images/male9.png": "4b84a6fcfe96bb580f3ff871fab414ca",
"assets/assets/images/marketing.png": "d6cc058afdb60ffbb247a4252ff425de",
"assets/assets/images/music1.png": "201a8dc12ac3094aa67f08ddd9434db4",
"assets/assets/images/music2.png": "5e976bca7404588f53b3fdc840c4da87",
"assets/assets/images/music3.png": "8268b30dfd831072e65195124e800e26",
"assets/assets/images/music4.png": "54f6a28b5c6cb0c31522b2045944290a",
"assets/assets/images/music5.png": "7fcecffe64c3bb7d62603dd9e8d61b06",
"assets/assets/images/music6.png": "3f96b2e1bb14a06a70a63c93d1c5074a",
"assets/assets/images/naira.jpg": "dcc18d4c116ce5dc9354c936f15be14e",
"assets/assets/images/naira.png": "7fbfac2572826541603b055c78d0207a",
"assets/assets/images/news.png": "e1cbdef82ca7aee7c3ad24db30f0e70e",
"assets/assets/images/news1.jpg": "5d327a3e58e5b32f192781425ae9a15a",
"assets/assets/images/news1.png": "5e16993fb7f96934424d4f619fd34ee2",
"assets/assets/images/news2.png": "5642f3afa591957cb7c9d88216cff042",
"assets/assets/images/news3.png": "5d2aed8f56f1dc967dffe6f8ec5f70f3",
"assets/assets/images/news4.PNG": "14844bb800a800e44704433c30cf16d6",
"assets/assets/images/news5.png": "2bcbfd9cf4c6ecf070f8cc891fe75f5c",
"assets/assets/images/productmarket.jpg": "dcdb21fea3977b87fab85269bcb41f1a",
"assets/assets/images/productmarket1.png": "a8ff04bed9d76b105dcc4da48880afba",
"assets/assets/images/progress_logo.png": "f8720f522844e939994384bcd76a79c3",
"assets/assets/images/pxp%2520logo.jpg": "e5545800b2d7828cb8925e30f435bf63",
"assets/assets/images/realestate.jpg": "da7cc5fc30e4e246ad29c8f2c07d46a3",
"assets/assets/images/realestate1.jpg": "1311621558e8f74a681c75f12f25e36d",
"assets/assets/images/realestate2.jpg": "f0d929191a97490202b3a1205d297847",
"assets/assets/images/realestate3.jpg": "7aeecf9ca83a271841d7b07adf15258f",
"assets/assets/images/realestate4.png": "dde0a56b887471641e03c6e3f82e864b",
"assets/assets/images/realestate5.png": "6763a9f139ee7311d150c04e0926f2c2",
"assets/assets/images/s1.jpg": "80f48535cb4f916a9f6e22666e030135",
"assets/assets/images/s1.png": "9be44d693d3791301aba97d91e8a46d0",
"assets/assets/images/s10.png": "57f8814cc062a33e291d770f93b6521e",
"assets/assets/images/s11.png": "d1c56ec99c35749dd834382c98ed3865",
"assets/assets/images/s12.jpeg": "bb177452ef8073ac898d24873b6b0951",
"assets/assets/images/s13.jpg": "0e63b8b9c32acc774036f3bbfc0f2be7",
"assets/assets/images/s14.png": "64be95c1312c20b75502d43f62fecfc3",
"assets/assets/images/s15.jpeg": "042471e8db596c64beb34fc46e15bc9e",
"assets/assets/images/s16.jpeg": "86d3f57cda5d9cdd064a59143598eb3a",
"assets/assets/images/s18.png": "fc3349bdb349c9e85e943424e590a2f7",
"assets/assets/images/s19.jpg": "20f865f474af2ddde1a8e501137e79d6",
"assets/assets/images/s2.jpg": "0c4214835342799fac862dc39059aed3",
"assets/assets/images/s20.jpeg": "dbd337a85e7ea146ab82e1c3b0d38758",
"assets/assets/images/s21.png": "a9a517a709fa4f6843121461003acaf2",
"assets/assets/images/s22.jpg": "fdcff574f4b2260f5557ea76a03cc0c1",
"assets/assets/images/s3.jpg": "3a36badcf4057a9f5390de154fb1f8ff",
"assets/assets/images/s4.jpeg": "9413d77fdf78645962cb39d14cbf42e6",
"assets/assets/images/s5.jpg": "11a3d79683cc8333fcb4cad8a04a3ded",
"assets/assets/images/s6.png": "6b692ba7096ec89b9468cf80e6a65d6b",
"assets/assets/images/s8.jpg": "e2bdf8d137c03d8173cea3bbf3af99fe",
"assets/assets/images/s9.jpg": "ecc2863274410fb429f4600f67b5dabd",
"assets/assets/images/servicemarket.jpg": "34e7daa71e63c10219ff47ce0875abea",
"assets/assets/images/ServiceMarket2.jpg": "cc3ca4b3b56d95f5721a18512c5cfce9",
"assets/assets/images/shop.png": "d9782aa77c9af2efca4a385ed2a73a8d",
"assets/assets/images/shop1.jpeg": "59689a94f08cb7902937e1f8aacb49d2",
"assets/assets/images/shop10.jpg": "95afb35c63eab88108ba29825589a596",
"assets/assets/images/shop11.jpg": "5afc37dcdea931d554a2e73b4bf24a69",
"assets/assets/images/shop12.png": "d270acea7d017282394771fbe0300fdf",
"assets/assets/images/shop13.jpg": "a3f8dcdc5474a3325c35b19ef431cbb6",
"assets/assets/images/shop14.jpg": "12253d343da10bf407cffe27f7e3687d",
"assets/assets/images/shop15.jpg": "11085dd276748e964d463dcd95b70d0f",
"assets/assets/images/shop2.jpeg": "1314cea55a593b0feefe1c277e279bae",
"assets/assets/images/shop3.jpeg": "ce239882817bce37b92b4c9a3a3b28da",
"assets/assets/images/shop4.png": "68124cd7c350939439cd791fd0ee420e",
"assets/assets/images/shop5.jpg": "3d516812fb3f0b05bcead76599e2eba7",
"assets/assets/images/shop6.png": "76b9043b14205823ce3db3caeb63c172",
"assets/assets/images/shop8.png": "df8d60c49027845126a6547fa8abe2fb",
"assets/assets/images/shop9.jpeg": "20d2f07c5b48168a478744b88976a7c8",
"assets/assets/images/sol.png": "9ded180a02b91cf4e908564049639193",
"assets/assets/images/spiritual1.png": "aa8eea8ae7014a1b8d23b5a022150009",
"assets/assets/images/spiritual2.png": "14c3d92f2a79097a006ef00e72beff0f",
"assets/assets/images/spiritual3.png": "52c7b30add1ce249ff22ff815a8ae084",
"assets/assets/images/spiritual4.png": "f74cb1d2dbbd06f92d6a0fd25c5cfa02",
"assets/assets/images/success.png": "41d23e9b321a39530461716b511d2149",
"assets/assets/images/telegram.jpeg": "4cedea93ac4049ecb0e0845c12a2ae66",
"assets/assets/images/Telegram.png": "a9c8d9725f1842340c682d890524db8e",
"assets/assets/images/Textido%2520Logo.jpeg": "c896bef38a7d648d13bb137641a773ca",
"assets/assets/images/The%2520Splendid.png": "9fac12bac75a58381d92dcbb9c657eca",
"assets/assets/images/tiktok1.jpeg": "e2df74bd1777b1537b1dee9c8017f5bd",
"assets/assets/images/tiktok2.png": "6a8f1dcbccd7231a24d5cdccc432c7ea",
"assets/assets/images/tiktok3.jpg": "a9ec2bcbd82a57a79e1ea4ff991aab88",
"assets/assets/images/tiktok4.jpg": "45533b306e4252dfd4532948c85cde84",
"assets/assets/images/tiktok5.png": "bf16cb20ddd783eb5cedd421453af63a",
"assets/assets/images/twitter.jpeg": "415e0a1f274950535043f863557133cf",
"assets/assets/images/usdt.png": "d103f4cf7b143bd9f362790b04fa8d98",
"assets/assets/images/usdt_bsc.png": "709cecefcc285f4369d38e85c8c6225c",
"assets/assets/images/verified.png": "a42a6982f0655acfcc3a575c4c4c7fd0",
"assets/assets/images/voting.jpg": "b82aedba853688c0bf09a4ef8de4843d",
"assets/assets/images/whatsapp.png": "1810e5627bc72016036e4aaa47c16192",
"assets/assets/images/white1.jpg": "212f894d4bbfa40decac75de0cd8b349",
"assets/assets/images/white2.jpg": "bd1f82fcb8d1ed29b3edfe487777b284",
"assets/assets/images/white3.jpg": "2e93efce604c491a470f19985f9b4105",
"assets/assets/images/white4.jpg": "bad9953b44fa248b9614ca0ac6f6c3b4",
"assets/assets/images/white5.jpg": "3a53cb1acb5621a1d1e5e46f32e6b27f",
"assets/assets/images/white6.jpg": "9fe7eada4fd69e5145379a393ed6ed9e",
"assets/assets/images/white8.jpg": "a1270c419f516e42730d85526bdb87c9",
"assets/assets/images/whiteb1.jpg": "e555841564f03e0cd80a5f63ae2af5e2",
"assets/assets/images/whiteb2.jpg": "abef5d82b8e8f48cfd41e550b5271bf4",
"assets/assets/images/whiteb3.png": "cdfa776ba989f022a4ef548ddc4920ad",
"assets/assets/images/whiteb4.jpeg": "528b3093aa78f9cab88b6d36c81eeefe",
"assets/assets/images/whiteb5.jpg": "2d33c642bcda179a4e149f37eef1eb53",
"assets/assets/images/whiteb6.jpg": "7851cd062ed4d42240d190ceef4924f3",
"assets/assets/images/whiteb8.png": "0b703c724dea63f9333f66a53ff08698",
"assets/assets/images/wip.jpg": "4775fff03e10e557597d7e7e3ccae426",
"assets/assets/images/wip.png": "c458d0191ca2ffe26a1084d2c702ba6b",
"assets/assets/images/youtube1.jpg": "e9b5046237c7bd591f9c2c401a22bfa5",
"assets/assets/images/youtube2.png": "723f61a779b0d32e85423c4609477c07",
"assets/assets/images/youtube3.png": "6887de2ac3315fbe17c7de22716761e8",
"assets/assets/svg/marketing.svg": "f9eb2ab33e53c1b0660d62dd0fb21f21",
"assets/FontManifest.json": "ce54901791f5b88da68202615eab3eb0",
"assets/fonts/MaterialIcons-Regular.otf": "dd22347df26c7d103a07853428af0293",
"assets/NOTICES": "10cbf3cd34fa03a1b50b038ffb3e5bcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/flutter_icons_plus/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons_plus/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons_plus/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons_plus/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons_plus/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons_plus/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons_plus/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons_plus/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons_plus/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons_plus/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons_plus/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons_plus/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons_plus/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons_plus/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons_plus/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons_plus/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/icons_flutter/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/icons_flutter/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/icons_flutter/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/icons_flutter/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/icons_flutter/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/icons_flutter/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/icons_flutter/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/icons_flutter/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/icons_flutter/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/icons_flutter/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/icons_flutter/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/icons_flutter/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/icons_flutter/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/icons_flutter/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/icons_flutter/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/icons_flutter/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/icons_flutter/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/icons_flutter/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/icons_flutter/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/icons_flutter/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/icons_flutter/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/icons_flutter/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/icons_flutter/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/icons_flutter/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/icons_flutter/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/icons_flutter/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/icons_flutter/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/icons_flutter/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/icons_flutter/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "b65e462ad78dd80588cb8b63d3604788",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5bc9b30d31665db2595687ba48e58653",
"icons/Icon-192.png": "5cfecff8ed524634d252b0316e7dc536",
"icons/Icon-512.png": "c4fa0dd2d53f4ed61be7f24d32d2541c",
"icons/Icon-maskable-192.png": "5cfecff8ed524634d252b0316e7dc536",
"icons/Icon-maskable-512.png": "c4fa0dd2d53f4ed61be7f24d32d2541c",
"index.html": "098cf57f8a322ec80b74ab1666fef0ee",
"/": "098cf57f8a322ec80b74ab1666fef0ee",
"main.dart.js": "bd31539693dd139ce5de95891847224c",
"manifest.json": "41ce7c9c1506b6a8318c7a45a3482a64",
"paystack_interop.js": "7cbb4e5d9502b8c2a48b1b206f0e563c",
"tawk_chat.html": "71318bd2b0802154f4fa356112305beb",
"version.json": "41dbd7922267a713e3411b3548e81473"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
