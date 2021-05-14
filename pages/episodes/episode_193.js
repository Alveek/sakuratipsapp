import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_192() {
	let transcript = [
		{
			jap: "みなさんは、<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>が<ruby><rb>話</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>せる<ruby><rb>日本人</rb></ruby>を<ruby><rb>知</rb><rp>(</rp><rt>し</rt><rp>)</rp></ruby>っていますか?",
			eng: "Do you know any Japanese people who can speak English?",
			start: { min: 0, sec: 38 },
			finish: { min: 0, sec: 45 },
		},
		{
			jap: "<ruby><rb>残念</rb><rp>(</rp><rt>ざんねん</rt><rp>)</rp></ruby>ながら、<ruby><rb>日本</rb></ruby>では、<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>を<ruby><rb>話</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>せる<ruby><rb>人</rb><rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>が<ruby><rb>少</rb><rp>(</rp><rt>すく</rt><rp>)</rp></ruby>ないです。",
			eng: "Unfortunately, there are not many people in Japan who can speak English.",
			start: { min: 0, sec: 48 },
			finish: { min: 0, sec: 58 },
		},
		{
			jap: "しかし、<ruby><rb>日本人</rb></ruby>は<ruby><rb>小学校</rb><rp>(</rp><rt>しょうがっこう</rt><rp>)</rp></ruby>から<ruby><rb>中学校</rb><rp>(</rp><rt>ちゅうがっこう</rt><rp>)</rp></ruby>、そして<ruby><rb>高校</rb><rp>(</rp><rt>こうこう</rt><rp>)</rp></ruby>・<ruby><rb>大学</rb><rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>で、<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>の<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしています。",
			eng: "However, Japanese people study English in elementary school, junior high school, high school and university.",
			start: { min: 1, sec: 0 },
			finish: { min: 1, sec: 19 },
		},
		{
			jap: "<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>が<ruby><rb>小</rb><rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さい<ruby><rb>頃</rb><rp>(</rp><rt>ころ</rt><rp>)</rp></ruby>は、<ruby><rb>小学</rb><rp>(</rp><rt>しょうがく</rt><rp>)</rp></ruby>5<ruby><rb>年</rb><rp>(</rp><rt>ねん</rt><rp>)</rp></ruby>くらいから、<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>の<ruby><rb>授業</rb><rp>(</rp><rt>じゅぎょう</rt><rp>)</rp></ruby>が<ruby><rb>始</rb><rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>まりました。",
			eng: "When I was kid, English classes started in about the fifth grade.",
			start: { min: 1, sec: 22 },
			finish: { min: 1, sec: 34 },
		},
		{
			jap: "でもたぶん<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby>は、<ruby><rb>小学</rb><rp>(</rp><rt>しょうがく</rt><rp>)</rp></ruby>1<ruby><rb>年生</rb><rp>(</rp><rt>ねんせい</rt><rp>)</rp></ruby>から<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>を<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>していると<ruby><rb>思</rb><rp>(</rp><rt>おも</rt><rp>)</rp></ruby>います。",
			eng: "But nowadays, I think they study English from the first grade.",
			start: { min: 1, sec: 36 },
			finish: { min: 1, sec: 49 },
		},
		{
			jap: "なので、<ruby><rb>日本人</rb></ruby>は12<ruby><rb>年間</rb><rp>(</rp><rt>ねんかん</rt><rp>)</rp></ruby>、<ruby><rb>大学</rb><rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>に<ruby><rb>行</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>くと16<ruby><rb>年間</rb><rp>(</rp><rt>ねんかん</rt><rp>)</rp></ruby><ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>を<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>します。",
			eng: "So, Japanese people study English for 12 years, or 16 years if they go to university.",
			start: { min: 1, sec: 51 },
			finish: { min: 2, sec: 10 },
		},
		{
			jap: "しかし、<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>が<ruby><rb>話</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>せる<ruby><rb>人</rb><rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>は<ruby><rb>少</rb><rp>(</rp><rt>すく</rt><rp>)</rp></ruby>ないです。",
			eng: "However, there are few people who can speak English.",
			start: { min: 2, sec: 12 },
			finish: { min: 2, sec: 20 },
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
				audioSrc="/media/episode_193.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/05/09/193/"
				episodeName="日本人の英語力 English Level Of Japanese People"
			/>
		</Box>
	);
}
