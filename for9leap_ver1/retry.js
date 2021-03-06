//リトライボタン
var retryButton;

//リトライボタンのラベル
var retryButtonLabel;


//みんなに呼んでもらうメソッド
/**
 * ボタンの色を設定
 *
 * buttonColor: ボタンの色
 * textColor: ラベルの文字色
 */
function setUIRetry(buttonColor, textColor) {

  //ボタン色
  if ((buttonColor != undefined) && (retryButton != undefined)) {
    retryButton.backgroundColor = buttonColor;
  }

  //ラベル色
  if ((textColor != undefined) && (retryButtonLabel != undefined)) {
    retryButtonLabel.color = textColor;
  }
}


//みんなに呼んでもらうメソッド
/**
 * [Retry]ボタン を画面に表示
 *
 * scene: 現在表示しているscene
 * buttonColor: ボタンの色
 * textColor: ラベルの文字色
 */
function showUIRetry(scene, buttonColor, textColor) {

  if (buttonColor === void 0 /* undefined */) {
    buttonColor = "white";
  }

  if (textColor === void 0 /* undefined */) {
    textColor = "black";
  }

  //処理
  showRetry(scene, "Retry", textColor, "16pt 'PixelMplus10'", buttonColor, 100, 25);


  //内部関数(実処理部分)
  function showRetry(scene, text, textColor, font, buttonColor, width, height) {

    var group = new Group();
    scene.addChild(group);

    //ボタン(背景)
    var button = new Sprite(width, height);
    button.backgroundColor = buttonColor;
    button.x = (scene.width - button.width) * 0.5;
    button.y = (scene.height * 0.9) - button.height * 0.5;
    group.addChild(button);

    //ラベル
    var label = new Label();
    label.color = textColor;
    label.font = font;
    label.textAlign = "center";

    label.width = button.width;
    label.height = button.height;
    label.x = button.x;
    label.y = button.y;
    label.touchEnabled = false;

    label.text = text;

    group.addChild(label);


    //タップした時の処理
    // button.addEventListener(Event.TOUCH_START, function(e){
    //   //ポーズにすると...色も変えられない
    // });

    button.addEventListener(Event.TOUCH_END, function(e){

      //スコアリセット
      score = 0;

      //ページ遷移して、ゲーム再開
      nextScene();
      core.resume();
    });


    //変数に格納
    retryButton = button;
    retryButtonLabel = label;
  }
}
