import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_175() {
	let transcript = [
		{
			jap:
				"<ruby><rb>皆</rb><rp>(</rp><rt>みな</rt><rp>)</rp></ruby>さんは、<ruby><rb>読書</rb><rp>(</rp><rt>どくしょ</rt><rp>)</rp></ruby>が<ruby><rb>好</rb><rp>(</rp><rt>す</rt><rp>)</rp></ruby>きですか?",
			eng: "Do you like to read?",
			start: { min: 0, sec: 45 },
			finish: { min: 0, sec: 51 },
		},
		{
			jap:
				"<ruby><rb>本</rb><rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>をよく<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>みますか?",
			eng: "Do you read a lot?",
			start: { min: 0, sec: 52 },
			finish: { min: 0, sec: 57 },
		},
		{
			jap:
				"<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は、<ruby><rb>時間</rb><rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>があるときは、なるべく<ruby><rb>読書</rb><rp>(</rp><rt>どくしょ</rt><rp>)</rp></ruby>をするようにしています。",
			eng: "When I have time, I try to read as much as I can.",
			start: { min: 0, sec: 58 },
			finish: { min: 1, sec: 10 },
		},
		{
			jap:
				"<ruby><rb>本</rb><rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>を<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>むと、<ruby><rb>新</rb><rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しいことを<ruby><rb>学</rb><rp>(</rp><rt>まな</rt><rp>)</rp></ruby>ぶことができます。",
			eng: "When I read, I can learn new things.",
			start: { min: 1, sec: 11 },
			finish: { min: 1, sec: 21 },
		},
		{
			jap:
				"しかし、<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は、これまで<ruby><rb>読書</rb><rp>(</rp><rt>どくしょ</rt><rp>)</rp></ruby>を<ruby><rb>全</rb><rp>(</rp><rt>まった</rt><rp>)</rp></ruby>くしていませんでした。",
			eng: "However, I have not been reading at all.",
			start: { min: 1, sec: 23 },
			finish: { min: 1, sec: 36 },
		},
		{
			jap:
				"<ruby><rb>小</rb><rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さい<ruby><rb>頃</rb><rp>(</rp><rt>ころ</rt><rp>)</rp></ruby>から<ruby><rb>本</rb><rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>を<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>むことがあまり<ruby><rb>好</rb><rp>(</rp><rt>す</rt><rp>)</rp></ruby>きではありませんでした。",
			eng: "I didn’t like to read much since I was a child.",
			start: { min: 1, sec: 39 },
			finish: { min: 1, sec: 50 },
		},
		{
			jap:
				"でも、<ruby><rb>半年</rb><rp>(</rp><rt>はんとし</rt><rp>)</rp></ruby>くらい<ruby><rb>前</rb><rp>(</rp><rt>まえ</rt><rp>)</rp></ruby>から、<ruby><rb>読書</rb><rp>(</rp><rt>どくしょ</rt><rp>)</rp></ruby>の<ruby><rb>素晴</rb><rp>(</rp><rt>すば</rt><rp>)</rp></ruby>らしさに<ruby><rb>気</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>が<ruby><rb>付</rb><rp>(</rp><rt>つ</rt><rp>)</rp></ruby>きました。",
			eng: "But about half a year ago, I realized how wonderful reading is.",
			start: { min: 1, sec: 52 },
			finish: { min: 2, sec: 6 },
		},
		{
			jap:
				"<ruby><rb>正直</rb><rp>(</rp><rt>しょうじき</rt><rp>)</rp></ruby>、<ruby><rb>気</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>がつくのがとても<ruby><rb>遅</rb><rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>かったと、<ruby><rb>後悔</rb><rp>(</rp><rt>こうかい</rt><rp>)</rp></ruby>しています。",
			eng: "To be honest, I regret that I realized it so late.",
			start: { min: 2, sec: 8 },
			finish: { min: 2, sec: 18 },
		},
		{
			jap: "",
			eng: "",
			start: { min: 0, sec: 0 },
			finish: { min: 0, sec: 0 },
		},
	];

	return (
		<Box>
			<PlayScreen
				audioSrc="/media/episode_175.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/04/21/176/"
				episodeName="読書 Reading Books"
			/>
		</Box>
	);
}
