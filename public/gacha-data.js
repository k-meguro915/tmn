// ガチャのデータ（/root_box/{id} の詳細ページで使用）
// status: "now" = 開催中 / "end" = 販売終了
// prizes の rank: "a" = A賞（ゴールド） / "last" = ラストワン賞 / それ以外は白
window.GACHA_DATA = {
  1: {
    title: "星降る夜のコレクション 第1弾",
    status: "now",
    price: 500,
    stock: 128,
    total: 300,
    period: "2026.09.01 – 2026.10.31",
    image: "/public/img/img03.jpg",
    lead: "A賞からE賞、そして1点限りのラストワン賞まで。当たった賞品はまとめて発送できます。",
    prizes: [
      { label: "A賞", rank: "a", name: "アクリルスタンド 3種セット", image: "/public/img/prize01.jpg", stock: 12, total: 30,
        desc: "ライブ衣装の3人をデザインしたアクリルスタンドのセットです。" },
      { label: "B賞", name: "Golden Figure", image: "/public/img/prize02.jpg", stock: 45, total: 80,
        desc: "ゴールド塗装のフィギュアです。" },
      { label: "C賞", name: "A Message Just For You（３人からアナタだけへのメッセージ）", image: "/public/img/prize03.jpg", stock: 128, total: 300,
        desc: "3人からのメッセージをお届けします。" },
      { label: "D賞", name: "「Carry On The Memories」未公開Short Movie（全20種）", image: "/public/img/prize04.jpg", stock: 62, total: 150,
        desc: "未公開のショートムービーです。全20種のうち1種がランダムで当たります。" },
      { label: "E賞", name: "未公開画像待ち受けカレンダー（全20種）", image: "/public/img/prize05.jpg", stock: 210, total: 500,
        desc: "未公開画像を使ったスマートフォン用の待ち受けカレンダーです。全20種のうち1種がランダムで当たります。" },
      { label: "LAST ONE", rank: "last", name: "Retrocausality Ticket（過去のLIVEチケット風画像・全28種）", image: "/public/img/prize06.jpg", stock: 1, total: 1,
        desc: "最後の1回を引いた方に贈られるラストワン賞です。" }
    ]
  },
  2: { title: "ミッドナイトライブ記念ガチャ", status: "now", price: 800, stock: 45, total: 200, image: "/public/img/img03.jpg", prizes: [] },
  3: { title: "サマーフェス アクリルスタンドくじ", status: "now", price: 600, stock: 210, total: 500, image: "/public/img/img03.jpg", prizes: [] },
  4: { title: "はじめてのガチャ お試しBOX", status: "now", price: 300, stock: 88, total: 100, image: "/public/img/img03.jpg", prizes: [] },
  5: { title: "春の新衣装お披露目ガチャ", status: "end", price: 500, stock: 0, total: 0, image: "/public/img/img02.jpg", prizes: [] },
  6: { title: "1周年アニバーサリーくじ", status: "end", price: 1000, stock: 0, total: 0, image: "/public/img/img03.jpg", prizes: [] }
};
