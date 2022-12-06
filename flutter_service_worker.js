'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/NOTICES": "70649b0a0bd69ced041eb449b8f1524d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/images/active-point.png": "acdc835fc91173bbf4e07389332c657a",
"assets/AssetManifest.json": "122339adfb49a587a077cbaddebd649e",
"assets/shaders/ink_sparkle.frag": "83c076d55fdbf5e6f73f29c79926992c",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_1_2048.webp": "60aacd0c71205d967bad16ddbbe3b9f5",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_3_1024.webp": "b7decf97b3714665506a433fbb7a2511",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_2_256.webp": "030cdc5e3b042c4a71b9a811757d2132",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_1_1024.webp": "f1ad4bf8b36bf3cb3a79b0a5b3176cf8",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_3_2048.webp": "1f8894a87fd18bb1751fe91eddf56609",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_2_1024.webp": "022334335a12a8319bc1592aadb75326",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_2_256.webp": "78690d9499b9c9a59d5cd3e9dca88412",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_1_2048.webp": "8537c3190991a16289482c59e7ebe212",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_0_256.webp": "212b5a0407916625d9e0f38e7b093412",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_1_2048.webp": "517aed9cc964fbfd7aa7709750dca1b3",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_1_1024.webp": "892cdba786450c601b9864e99b20abed",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_0_512.webp": "e45590ec6182754daf90a224f1756f0f",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_3_2048.webp": "1f8894a87fd18bb1751fe91eddf56609",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_2_256.webp": "fb64201e0aabddfefbabafbc5ef01799",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_0_1024.webp": "50bfcbeeb21ee8e20f5454f08d322750",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_0_512.webp": "5f721e493665addd4d9b90dbbb278a80",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_0_2048.webp": "9398768002a674d2aa2391848da67754",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_3_2048.webp": "b9e1cd89307e3068924156268faf3ece",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_0_512.webp": "cac3154630d6b2511fe77dc6504db4c7",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_1_2048.webp": "2857456a26b150201880fb606a47bab0",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_2_1024.webp": "7c7fec117391d9006ac48f406e27940d",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_2_256.webp": "e61c68e49e60dc31488282ff3f08bc92",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_0_2048.webp": "6cbdd1aa7258da3ad4b98351d87abf77",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_3_2048.webp": "a186015396d300908f95611526a83f89",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_0_1024.webp": "36d77b6fd767429c2dfbd11ac2993974",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_3_1024.webp": "5456f8f5d4a79350c4bf7cb2d9b76209",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_2_512.webp": "4f1a1f80641b9d93e8ac9d54fd4b5c5b",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_2_2048.webp": "4e6e4cb224e707cb52fd75a9ee04bca3",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_1_2048.webp": "ce34c89632164a80d08bf27af7710b49",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_1_2048.webp": "784481376d2594249f082ea512d3323f",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_3_512.webp": "9e3ced3b64c0d79906655be697f53782",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_3_512.webp": "9e3ced3b64c0d79906655be697f53782",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_1_256.webp": "e2dde6e02f729cfa484ec382acd14e61",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_1_512.webp": "458072915f73570a0cdc0540ab181a95",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_0_512.webp": "4f1a1f80641b9d93e8ac9d54fd4b5c5b",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_0_2048.webp": "ede00d4489a45dd590328609f83e074b",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_2_1024.webp": "5456f8f5d4a79350c4bf7cb2d9b76209",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_2_512.webp": "b98e8c6256c2cec61428309025bd9e01",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_3_512.webp": "8311568069bbf39d1d802e111b4f3fe5",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_1_256.webp": "c840923ad37e12ef6215607043f8917b",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_1_256.webp": "e2dde6e02f729cfa484ec382acd14e61",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_2_256.webp": "e8d661eedcb899b612b05c40880dfe9c",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_3_1024.webp": "d743c3b7ab926ad7b13005ca74a7f60f",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_1_256.webp": "d2fba98577a168c231b5afe9d95bd6da",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_2_2048.webp": "8f95640697d3cbd2d6ce7867cdfab865",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_2_256.webp": "fb64201e0aabddfefbabafbc5ef01799",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_0_512.webp": "e930cdc26a5e1f5bc4de10eea1b1333e",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_3_1024.webp": "ba51861cf5d3194ed806212ca62a685b",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_2_512.webp": "153980e814b3f1bd15b51d2d7f09c357",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_3_2048.webp": "421110c206bacdc4327e241b4dabb2fc",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_3_2048.webp": "201f39fc48a0571dd3041a4e6afc5407",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_0_256.webp": "6c3f8fd125423a308f33e7668528952a",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_1_1024.webp": "7eeb15c6dd864a1273e833b67cc77d6d",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_0_1024.webp": "3899d3779c3e0cccdb53fe788c752f0d",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_0_256.webp": "89b8dd7d24b10cad77a7f5ce626a5b5d",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_1_256.webp": "38d8233aa63d66e4eb2db84397d0674f",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_1_2048.webp": "427dde1b2a3014ed86b6fc51de178f3b",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_2_2048.webp": "cbb898d8aade990c9e87ba4debfb436d",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_3_256.webp": "b5ece8b3fffc4bbad18f340ddc4a35a7",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_3_512.webp": "91fa863dae22ad1931842778b4d9f2da",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_1_1024.webp": "282983611b80dd1678547eb22e91c720",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_2_256.webp": "5f729e250af86f28da8879348970f8a2",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_3_512.webp": "9e9f1f0e719fbc91dc2eaa98314f55ab",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_2_1024.webp": "ff7e32fa5284ef2378b7c697b6e5590c",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_3_256.webp": "22ad8a2cc5d5348312de490f6a12c7fe",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_0_1024.webp": "943ca541b77c41bcfd538653c11f12ca",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_2_2048.webp": "42207ccf825993ffa93988fa1c409e16",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_1_2048.webp": "be025908d671d731438c7bdbe6935410",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_1_2048.webp": "70dd233f77d764c7bd04d706122019a0",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_1_256.webp": "212b5a0407916625d9e0f38e7b093412",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_2_1024.webp": "2786c297ea476cbba25e5e53bfee784b",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_3_1024.webp": "42ca73c2383e7ee6d519ac20ac0194a6",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_3_256.webp": "e2dde6e02f729cfa484ec382acd14e61",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_3_256.webp": "a2c2911709ef6a02d8a152f6db431f91",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_2_2048.webp": "dc6490f7b7d479bc4cd6457877b0a196",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_2_512.webp": "ecf9fd548825eca74edb374e851e56ab",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_0_256.webp": "e8d661eedcb899b612b05c40880dfe9c",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_2_1024.webp": "5456f8f5d4a79350c4bf7cb2d9b76209",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_3_256.webp": "629ff2262c03e8cc3160ed7294af4146",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_1_256.webp": "234462f0d0ed5f28d23207fe3ff91ed9",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_3_2048.webp": "0576c35b0d8741ef2dcafc441672546a",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_0_2048.webp": "517aed9cc964fbfd7aa7709750dca1b3",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_1_256.webp": "ace3b36cff85b19fb120fdb53dd80838",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_1_1024.webp": "33ebf8e132592e3e03cad99d09b7ff55",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_2_512.webp": "4986900b7e87126960b69de21980af55",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_1_1024.webp": "e5a98d42f07b2c3cc762e3906e509b7b",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_3_1024.webp": "bfb908936688c6920513a9ee1d358391",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_0_2048.webp": "699fef6acc46b1c721acfd2bf10ed6f1",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_1_1024.webp": "a20e1c93e09d9e50c5f74edf68079fac",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_3_512.webp": "ea5141c0356a0ca80e530dce857b7d23",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_1_1024.webp": "3899d3779c3e0cccdb53fe788c752f0d",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_3_256.webp": "fcf129f9d6290ef3805ba8dbe5d4b412",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_0_2048.webp": "699fef6acc46b1c721acfd2bf10ed6f1",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_0_512.webp": "8bfe0dfe4c899d69a360bf1f65bba17a",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_3_256.webp": "fb64201e0aabddfefbabafbc5ef01799",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_1_256.webp": "321a24b32baa716a674aa8d4ec8c9af2",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_3_256.webp": "fb64201e0aabddfefbabafbc5ef01799",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_3_1024.webp": "5456f8f5d4a79350c4bf7cb2d9b76209",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_2_512.webp": "0c617f27a7a03ec7f7e75838c1c958cb",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_2_2048.webp": "a186015396d300908f95611526a83f89",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_1_512.webp": "9a9adbbaa6e8ebc7e37a6690205c4456",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_3_256.webp": "b77a0bee631b3cef8f6fe5b1247bc530",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_1_256.webp": "a679bedbda28676579ca50129a688262",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_1_512.webp": "6343e27c67a8163795b133e07460e52f",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_1_512.webp": "9e9f1f0e719fbc91dc2eaa98314f55ab",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_0_512.webp": "ea5141c0356a0ca80e530dce857b7d23",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_0_1024.webp": "2493a3d406fa5a01766efc37fd444d13",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_2_512.webp": "9e3ced3b64c0d79906655be697f53782",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_0_256.webp": "b1143866e057f50339f3659a3e2fd172",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_1_256.webp": "daa3f783c3a9fa7fb75057f8d9097f2d",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_0_2048.webp": "8106c873d886e90aa629aa0943b0b787",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_0_1024.webp": "26f9eb0a83dd03d7437357a4c2248eef",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_3_512.webp": "bcb4eb9faf66019f5a073bc82ba282e5",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_0_2048.webp": "1b78d1fc0b3489dc9190e8707d48b105",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_3_512.webp": "bc8d1e1d4db195fbc3eb8f2238dbbbe4",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_0_256.webp": "b30683ce54d1d753c0e13018254943ef",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_3_1024.webp": "d743c3b7ab926ad7b13005ca74a7f60f",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_1_512.webp": "497e3aa151505a459406ee82a2537800",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_0_512.webp": "4f1a1f80641b9d93e8ac9d54fd4b5c5b",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_0_256.webp": "e8d661eedcb899b612b05c40880dfe9c",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_2_1024.webp": "86865f54ac562956f29a8256c4a5dbb2",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_2_1024.webp": "45fffdd3e94815e5eb0de30d13020581",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_0_2048.webp": "4005cc55f4680437c311061aa8a0c3e4",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_0_1024.webp": "3899d3779c3e0cccdb53fe788c752f0d",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_0_256.webp": "3f5000538f568fd775cf95f2ece0cae5",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_2_1024.webp": "92a6239711910ddeb53799bd0ee2b526",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_2_2048.webp": "8a10e0d13760da8695501ab32925a068",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_3_512.webp": "9e9f1f0e719fbc91dc2eaa98314f55ab",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_3_512.webp": "34d268b09f4e3791d9fe60a0349c456e",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_2_2048.webp": "8904419106bcd3c94fd92b35026fc228",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_2_512.webp": "372406bd77b214d6757425948af28d4a",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_1_2048.webp": "1f8894a87fd18bb1751fe91eddf56609",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_0_512.webp": "3626c5ce7fbc32c5dcbfc72d6f184d44",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_1_2048.webp": "82d8ea3a98984cb008b341246c0b4fa9",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_3_1024.webp": "c50fc8e1e4a15699fd6e5dcff9047024",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_3_1024.webp": "df6ce345944973b854e1fa4436f999e0",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_1_1024.webp": "d743c3b7ab926ad7b13005ca74a7f60f",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_2_2048.webp": "a186015396d300908f95611526a83f89",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_3_256.webp": "0618ac6d3a07aeead85246b19d1cb465",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_2_512.webp": "121ac7a1d1b8e47e42fe131442ffa61f",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_0_2048.webp": "517aed9cc964fbfd7aa7709750dca1b3",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_2_2048.webp": "699fef6acc46b1c721acfd2bf10ed6f1",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_3_1024.webp": "92d5af7dab5f45654168dbeb0cb21dd1",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_0_1024.webp": "314be9eaf503f8852a9132b5e5c83f9a",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_2_256.webp": "73a3d3f821391209915f5baefd0cd545",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_0_512.webp": "7101ffe08caf6060c589d1b78f4c8f8c",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_0_256.webp": "dcaf359f2abfe0ae15ab71a11f7aab5e",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_0_256.webp": "eebd8e01dfdc65f80077b6a023ccaf16",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_0_2048.webp": "1d01d681bf415c04088a54b3d0dbf7f4",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_1_2048.webp": "1f8894a87fd18bb1751fe91eddf56609",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_3_256.webp": "eebd8e01dfdc65f80077b6a023ccaf16",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_2_1024.webp": "943ca541b77c41bcfd538653c11f12ca",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_3_2048.webp": "6aba5a41d4d71641b046b8b7dacf3f2b",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_2_256.webp": "4ba0b1a655cbc3fd8dfef12fef597d93",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_1_512.webp": "9e9f1f0e719fbc91dc2eaa98314f55ab",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_2_512.webp": "3f509966bed031671a43157ed402c57b",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_3_2048.webp": "a186015396d300908f95611526a83f89",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_1_1024.webp": "65a1be3336fce1e8d5b3fd8dcf140bc9",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_3_2048.webp": "e7b62bedf1b680173169d3b9075ef455",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_1_512.webp": "88427114b11abcb77585aceb23ed20a7",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_3_512.webp": "ad19b00613101fb5b8a2e93c0d1eff02",
"assets/tiles/4a8df85626aab56bc3761b3468eda992_4957344763706963021_1_512.webp": "cd55be8896b81f981234e8f2c5963c91",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_3_512.webp": "e016882b6241a6097937ffedfc9f651a",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_0_1024.webp": "56dda17af274641bae768eb0cf4ba35b",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_1_512.webp": "94c9c0d0e4532cb9fe7d7ca94ad09d04",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_1_512.webp": "3626c5ce7fbc32c5dcbfc72d6f184d44",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_0_512.webp": "3626c5ce7fbc32c5dcbfc72d6f184d44",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_2_512.webp": "65de99a224ae078befb503059a14b2a6",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_0_1024.webp": "943ca541b77c41bcfd538653c11f12ca",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_3_1024.webp": "af1237ba9b7aab7a4c4eedd08ea0a8fb",
"assets/tiles/b81e48c049406d1f0b690e0d89bcb219_4971424153465858852_3_256.webp": "e2dde6e02f729cfa484ec382acd14e61",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_2_256.webp": "d00d917be0184f704e0571f509f1c216",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_2_512.webp": "9e3ced3b64c0d79906655be697f53782",
"assets/tiles/7349aec11ad174fa6627efa309dc0f2f_637060848780817954_2_1024.webp": "ecec4e0d98ca48cdae3af18d6be16041",
"assets/tiles/ec01c15d9292f163e4e27cba4f9e6539_9212926219978415677_2_1024.webp": "5e72037664d58a2ecccd874686356689",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_1_512.webp": "fdd04a2fc78cbc39cd9199e70d608056",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_0_1024.webp": "b7decf97b3714665506a433fbb7a2511",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_3_2048.webp": "1b78d1fc0b3489dc9190e8707d48b105",
"assets/tiles/59305ea0f07e522abb773a3ea6aca7f7_5483461357356348128_1_512.webp": "75020bf614bd65bdb3cf0a234f664ec7",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_0_512.webp": "5a276df70b0f1741b1ea97e1f4e860ae",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_0_256.webp": "212b5a0407916625d9e0f38e7b093412",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_1_256.webp": "8a7bd5d9841664c5455bde21e70bc4d3",
"assets/tiles/b9a1465c2bf581f5ff51bf27fdc53f4f_178680297786250288_1_1024.webp": "60917991965ce044e88ef186239c8040",
"assets/tiles/e7e07b6ee8002ebf84a0c90ce5a2d11a_6474304874717444837_1_1024.webp": "d743c3b7ab926ad7b13005ca74a7f60f",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_2_256.webp": "238894bf422e1ff63b1af79dd0acc0a8",
"assets/tiles/a733f5730bc89b2a8713c79217316a48_9138588374623790954_2_256.webp": "e65e6a5e2e61788d1048bb09f56f98ef",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_0_2048.webp": "666e56cfdf2178b3d2453f9aefc3b3df",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_0_256.webp": "9d558f76316d83e6210f106e2fa8f413",
"assets/tiles/4dccdca89bc40c396ee3adb3d2a54535_678692064171919141_0_1024.webp": "13768f69397e60a054bfa6db95a727fb",
"assets/tiles/ae348de45969306ac5fd30261a4d215a_1831881192516607234_2_2048.webp": "bfc7ee9bfa468b5686991991f7fdda20",
"assets/tiles/9a7be9cca6eb748270c058e3deef4314_1630901094808151515_2_2048.webp": "4738c2e431bd492f34a8d52235ceacc5",
"assets/tiles/4a780782734ba5aaf3e8f81a7ed9586c_290273923733944333_3_2048.webp": "5bcb781b871bc100ae16300629fe2fd7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"index.html": "5a526f010d17e01dc6e0aee48ed87699",
"/": "5a526f010d17e01dc6e0aee48ed87699",
"version.json": "2f4bbe3836c4b8c3cd754d9e99cf63ca",
"manifest.json": "abe53e1a8b5dc8f9b600e183108cecb3",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "e995f96a189d6e5af772d3ebe09fd012"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
