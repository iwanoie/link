// ローディングアニメーション
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1500,//時間指定(1000＝1秒)
	strokeWidth: 0.5,//進捗ゲージの太さ
	color: '#fff',//進捗ゲージのカラー
	trailWidth: 0.5,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-50px 0 0 0',//バーより上に配置
			transform: 'translate(-50%,-50%)',
			'font-size': '1.2rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});

// 足跡アニメーション
$(window).on('load', function() {
	// 足跡第一弾
	stepsAnime($('#stepsTrigger-1'));
	setTimeout(function() {
		// 足跡第二弾
		stepsAnime($('#stepsTrigger-2'));
		setTimeout(function() {
			if (window.matchMedia('(max-width: 767px)').matches) {
				// mobileの場合
				// 犬表示
				$('.img-8').addClass('fadeIn');
				// ライト点灯
				$('.light-anime').addClass('fadeIn light-on');
				// 背景色変更
				$('.obj-2').addClass('color-change');
			}
			// 足跡第三弾
			stepsAnime($('#stepsTrigger-3'));
			setTimeout(function() {
				// 足跡第四弾
				stepsAnime($('#stepsTrigger-4'));
				setTimeout(function() {
					if (window.matchMedia('(max-width: 1279px)').matches) {
						// tabletの場合
						// 犬表示
						$('.img-8').addClass('fadeIn');
						// ライト点灯
						$('.light-anime').addClass('fadeIn light-on');
						// 背景色変更
						$('.obj-2').addClass('color-change');
					}
					// 足跡第五弾
					stepsAnime($('#stepsTrigger-5'));
					setTimeout(function() {
						// 犬表示
						$('.img-8').addClass('fadeIn');
						// ライト点灯
						$('.light-anime').addClass('fadeIn light-on');
						// 背景色変更
						$('.obj-2').addClass('color-change');
					},1000);
				},1500);
			},1500);
		},1500);
	},1500);
});

function stepsAnime(obj) {
	obj.addClass('steps');
}