import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_156() {
	let transcript = [
		{
			jap:
				"<ruby><rb>皆</rb><rp>(</rp><rt>みな</rt><rp>)</rp></ruby>さんは、ココアという<ruby><rb>飲</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>み<ruby><rb>物</rb><rp>(</rp><rt>もの</rt><rp>)</rp></ruby>を<ruby><rb>知</rb><rp>(</rp><rt>し</rt><rp>)</rp></ruby>っていますか?",
			eng: "Do you know what cocoa is?",
			start: { min: 0, sec: 45 },
			finish: { min: 0, sec: 53 },
		},
		{
			jap:
				"ココアが<ruby><rb>好</rb><rp>(</rp><rt>す</rt><rp>)</rp></ruby>きですか?",
			eng: "Do you like cocoa?",
			start: { min: 0, sec: 54 },
			finish: { min: 0, sec: 58 },
		},
		{
			jap:
				"<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は、<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、ほっとココアを<ruby><rb>飲</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>んでいます。",
			eng: "I’m currently drinking hot cocoa.",
			start: { min: 0, sec: 59 },
			finish: { min: 1, sec: 7 },
		},
		{
			jap:
				"<ruby><rb>夜</rb><rp>(</rp><rt>よる</rt><rp>)</rp></ruby>に<ruby><rb>飲</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>むと、<ruby><rb>落</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby>ち<ruby><rb>着</rb><rp>(</rp><rt>つ</rt><rp>)</rp></ruby>きます。",
			eng: "When I drink it at night, it calms me down.",
			start: { min: 1, sec: 9 },
			finish: { min: 1, sec: 14 },
		},
		{
			jap:
				"<ruby><rb>牛乳</rb><rp>(</rp><rt>ぎゅうにゅう</rt><rp>)</rp></ruby>を<ruby><rb>温</rb><rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>めて、ほっとココアをつくりました。",
			eng: "I heated up milk to make hot cocoa.",
			start: { min: 1, sec: 18 },
			finish: { min: 1, sec: 26 },
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
				audioSrc="/media/episode_156.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/04/02/156/"
				episodeName="ココア Cocoa"
			/>
		</Box>
	);
}
