import { Links } from "./App";

export function App() {
	const text = `日本語のロレムイプサムをご希望ですか?
	かしこまりました。日本語のロレムイプサムとして、自然な文章の流れを意識しつつ、意味のない文章を生成してみました。
	「さて、どこから話そうか。そうだな、あの日の朝、小鳥のさえずりがいつもより賑やかだったことから始めよう。窓を開けると、澄み切った空に太陽が輝いていた。深呼吸をすると、花の香りが鼻をくすぐる。ああ、なんて素晴らしい一日だろう。そんな風に思ったのも束の間、突然、玄関のチャイムが鳴り響いた。誰だろう?戸惑いながらもドアを開けると、そこには見覚えのない男が立っていた。彼は、どこか物憂げな表情で、こう言った。「私は、あなたに一つの秘密を告げに来たのです。」`;

	return (
		<>
			<div className="p-3">
				<article className="mb-5 leading-relaxed">
					<h1 className="text-3xl font-bold mt-3 mb-5">1. 最初のテスト</h1>
					<p>(以下、なんか適当なコンテンツ)</p>
					<p>{text}</p>
					<p>{text}</p>
				</article>

				<nav className="mt-5">
					<Links />
				</nav>
			</div>
		</>
	);
}

export default App;
