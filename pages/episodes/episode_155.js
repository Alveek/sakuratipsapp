import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_153() {
	let transcript = [
		{
			jap:
				"<ruby><rb>今日</rb><rp>(</rp><rt>きょう</rt><rp>)</rp></ruby>は、4<ruby><rb>月</rb><rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>1<ruby><rb>日</rb><rp>(</rp><rt>たち</rt><rp>)</rp></ruby>、エイプリルフールの<ruby><rb>日</rb><rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>です。",
			eng: "Today is April 1st, April Fool’s Day.",
			start: { min: 0, sec: 48 },
			finish: { min: 0, sec: 56 },
		},
		{
			jap:
				"<ruby><rb>皆</rb><rp>(</rp><rt>みな</rt><rp>)</rp></ruby>さんは、<ruby><rb>何</rb><rp>(</rp><rt>なに</rt><rp>)</rp></ruby>か、<ruby><rb>嘘</rb><rp>(</rp><rt>うそ</rt><rp>)</rp></ruby>をつきますか?",
			eng: "Are you going to tell a lie?",
			start: { min: 0, sec: 58 },
			finish: { min: 1, sec: 4 },
		},
		{
			jap:
				"<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は、エイプリルフールの<ruby><rb>日</rb><rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>も、いつもと<ruby><rb>変</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>わらず<ruby><rb>過</rb><rp>(</rp><rt>す</rt><rp>)</rp></ruby>ごします。",
			eng:
				"For me, April Fool’s Day is no different than any other day of the year.",
			start: { min: 1, sec: 6 },
			finish: { min: 1, sec: 16 },
		},
		{
			jap:
				"<ruby><rb>数</rb><rp>(</rp><rt>すう</rt><rp>)</rp></ruby><ruby><rb>年</rb><rp>(</rp><rt>ねん</rt><rp>)</rp></ruby><ruby><rb>前</rb><rp>(</rp><rt>まえ</rt><rp>)</rp></ruby>に、<ruby><rb>友人</rb><rp>(</rp><rt>ゆうじん</rt><rp>)</rp></ruby>に<ruby><rb>嘘</rb><rp>(</rp><rt>うそ</rt><rp>)</rp></ruby>をついたことがあります。",
			eng: "A few years ago, I told a lie to my friend.",
			start: { min: 1, sec: 18 },
			finish: { min: 1, sec: 29 },
		},
		{
			jap:
				"エイプリルフールの<ruby><rb>嘘</rb><rp>(</rp><rt>うそ</rt><rp>)</rp></ruby>ですね。",
			eng: "It was an April Fool’s Day lie.",
			start: { min: 1, sec: 29 },
			finish: { min: 1, sec: 33 },
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
				audioSrc="/media/episode_155.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/04/01/155/"
				episodeName="エイプリルフール April Fool"
			/>
		</Box>
	);
}
