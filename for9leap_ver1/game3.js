// ゲーム3
function game3() {
  console.log("Game3");

  var scene = new Scene();
  core.replaceScene(scene);

  //game
  game3Main(scene);

  //score
  showUIScore(scene);
  scoreLabel.color = "black";
}


//ゲーム部分
function game3Main(scene) {

  scene.backgroundColor = "yellow";


  //タヌキをタップ ... ゲームクリア
  var tanu = new Sprite(32, 32);
  tanu.image = core.assets["images/hat_tanu.png"];
  tanu.x = scene.width * 0.25;
  tanu.y = scene.height * 0.5;
  scene.addChild(tanu);

  tanu.addEventListener(Event.TOUCH_START, function(e) {
    //TODO: 演出

    //最後に
    gameClear();
  })


  //梅ちゃんをタップ ... ゲームオーバー
  var ume = new Sprite(32, 32);
  ume.image = core.assets["images/hat_ume.png"];
  ume.x = scene.width * 0.75;
  ume.y = scene.height * 0.5;
  scene.addChild(ume);

  ume.addEventListener(Event.TOUCH_START, function(e){
    //ゲームオーバー
    gameOver(scene, true);
  })
}
