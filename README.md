# LYRIC MOTION - 歌詞動画作成アプリ

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/lyrics-video-creator)

歌詞動画作成アプリは、音声ファイルと歌詞テキストを入力として、タイムスタンプ付きの歌詞動画を生成するWebアプリケーションです。ユーザーは歌詞の表示スタイル、アニメーション、背景などをカスタマイズし、最終的に動画ファイルとしてエクスポートできます。

## ✨ 主な機能

### 🎵 音声ファイル管理
- MP3, WAVなどの音声ファイルアップロード
- リアルタイム再生コントロール
- シークバーとタイム表示

### 📝 歌詞管理
- 複数行の歌詞テキスト入力
- 各行に対するタイムコード設定
- 自動タイムコード推定機能

### 🎨 歌詞スタイルカスタマイズ
- **フォント選択**: Noto Sans JP, Space Mono, Bebas Neue
- **文字色**: 単色またはグラデーション設定
- **文字サイズ**: 柔軟なサイズ調整
- **アニメーション**: 20種類以上の入退場効果
  - フェードイン/アウト、スケール、回転
  - スライド、ボウンス、スピン
  - タイピング、グリッチ、シェイクなど
- **文字ごとのアニメーション**: 個別文字の動き制御

### 🖼️ 背景管理
- **背景タイプ**: 単色、画像、動画
- **背景アニメーション**: ズーム、パン、波形、キネティック
- **レイヤーシステム**: 複数背景の重ね合わせ

### 🎯 ビジュアライザー
- **リアルタイム波形表示**: Web Audio API使用
- **パーティクル効果**: ドット、バー、グラデーション
- **音声同期**: 周波数データに基づく動的表示

### 🎬 動画エクスポート
- **フォーマット**: WebM (VP8/VP9)
- **解像度**: 16:9, 9:16, 1:1
- **品質**: 高品質動画生成
- **プログレス表示**: エクスポート進捗確認

### 📺 YouTube連携
- **OAuth認証**: Googleアカウント連携
- **自動アップロード**: 生成動画の直接アップロード
- **サムネイル設定**: カスタムサムネイル画像
- **メタデータ**: タイトル、説明、タグ設定

## 🚀 技術スタック

### フロントエンド
- **HTML5 Canvas**: 高品質動画レンダリング
- **Web Audio API**: リアルタイム音声処理
- **MediaRecorder API**: 動画キャプチャ
- **CSS3 Animation**: スムーズなUIアニメーション
- **Vanilla JavaScript**: 依存関係なしの軽量実装

### バックエンド
- **Vercel Serverless Functions**: 高速API処理
- **Groq Whisper API**: AI音声文字起こし
- **YouTube Data API v3**: 動画アップロード

### ライブラリ
- **formidable**: ファイルアップロード処理

## 📋 システム要件

### ブラウザ対応
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

### API要件
- GROQ_API_KEY (Groq APIアクセス)
- YouTube API credentials (アップロード機能用)

## 🛠️ インストールとセットアップ

### 1. リポジトリクローン
```bash
git clone https://github.com/your-repo/lyrics-video-creator.git
cd lyrics-video-creator
```

### 2. 依存関係インストール
```bash
npm install
```

### 3. 環境変数設定
`.env.local`ファイルを作成し、以下の変数を設定：

```env
# Groq API
GROQ_API_KEY=your_groq_api_key_here

# YouTube API (オプション)
YOUTUBE_CLIENT_ID=your_youtube_client_id
YOUTUBE_CLIENT_SECRET=your_youtube_client_secret
```

### 4. 開発サーバー起動
```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてください。

### 5. 本番デプロイ
```bash
npm run deploy
```

## 📖 使用方法

### 基本的な使い方

1. **音声ファイルアップロード**
   - ドラッグ&ドロップまたはクリックで音声ファイルを選択
   - サポート形式: MP3, WAV, M4Aなど

2. **歌詞入力**
   - テキストエリアに歌詞を入力（1行ずつ）
   - 自動でタイムコード設定UIが表示されます

3. **タイムコード設定**
   - 音声を再生しながら各行のタイミングを設定
   - 「SET」ボタンをクリックして現在の再生位置を記録

4. **スタイルカスタマイズ**
   - フォント、色、アニメーションを選択
   - 背景画像/動画を追加
   - ビジュアライザーを有効化

5. **プレビュー**
   - リアルタイムで変更を確認
   - 音声と同期して歌詞が表示されます

6. **エクスポート**
   - WebM形式で動画を生成
   - 解像度と品質を選択
   - プログレスバーが進捗を表示

7. **YouTubeアップロード（オプション）**
   - Googleアカウントで認証
   - タイトルと説明を設定
   - サムネイル画像をアップロード

### 高度な機能

#### アニメーション設定
- **入場アニメーション**: fadeUp, scaleIn, slideLeftなど20種類
- **退場アニメーション**: fadeOut, scaleOut, slideRightなど
- **ループアニメーション**: float, pulse, neonなど
- **文字アニメーション**: charFall, charSlide, charBounceなど

#### 背景レイヤー
- 複数レイヤーの重ね合わせ
- 各レイヤーに個別のアニメーション設定
- ドラッグ&ドロップでの順序変更

#### ビジュアライザー設定
- **タイプ**: bars, dots, gradient
- **感度**: 音声入力に対する反応度調整
- **色**: ビジュアライザーの色設定

## 🎯 API仕様

### 文字起こしAPI
```
POST /api/transcribe
Content-Type: multipart/form-data

FormData:
- audio: 音声ファイル (Blob)
- model: "whisper-large-v3"
- response_format: "verbose_json"
```

**レスポンス**:
```json
{
  "text": "文字起こしテキスト",
  "segments": [
    {
      "text": "各セグメントのテキスト",
      "start": 0.0,
      "end": 3.5
    }
  ]
}
```

## 🔧 開発者向け情報

### プロジェクト構造
```
lyrics-video-creator/
├── index.html          # メインアプリケーション
├── package.json        # 依存関係とスクリプト
├── api/
│   └── transcribe.js   # 文字起こしAPI
├── CLAUDE.md          # 要件定義書
├── ARCHITECTURE.md    # アーキテクチャー設計
└── README.md          # このファイル
```

### 主要なJavaScript関数

#### 音声処理
- `handleAudioUpload()`: ファイルアップロード処理
- `togglePlay()`: 再生/一時停止
- `initAudioCtx()`: Web Audio API初期化

#### 歌詞管理
- `parseLyrics()`: 歌詞テキスト解析
- `setTc(index)`: タイムコード設定
- `jumpTo(index)`: 指定行へのジャンプ

#### 動画生成
- `startExport()`: エクスポート開始
- `renderFrame()`: 各フレームのレンダリング
- `exportFrame()`: Canvas内容のキャプチャ

#### UI管理
- `showToast(message)`: 通知表示
- `updateCurLine()`: 現在の歌詞行更新

### カスタマイズ

#### 新しいアニメーションの追加
`index.html`のCSSセクションに新しい@keyframesを追加：

```css
@keyframes myAnimation {
  from { opacity: 0; transform: translateX(-100px); }
  to { opacity: 1; transform: translateX(0); }
}
```

JavaScriptでアニメーションクラスを追加：
```javascript
.e-myAnimation .ldisp {
  animation: myAnimation var(--anim-dur) ease both;
}
```

#### 新しいフォントの追加
Google Fontsからインポートし、CSS変数に追加：
```css
@import url('https://fonts.googleapis.com/css2?family=NewFont:wght@400;700&display=swap');
```

## 🤝 貢献

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 ライセンス

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 謝辞

- [Groq](https://groq.com/) - Whisper API提供
- [Google](https://developers.google.com/youtube) - YouTube Data API
- [Vercel](https://vercel.com/) - ホスティングプラットフォーム

## 📞 サポート

バグ報告や機能リクエストは[Issues](https://github.com/your-repo/lyrics-video-creator/issues)までお願いします。

---

**LYRIC MOTION** - あなたの音楽を魅力的な動画に変えましょう！ 🎵✨