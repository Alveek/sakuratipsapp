import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_192() {
	let transcript = [
		{
			jap:
				"<ruby><rb>皆</rb><rp>(</rp><rt>みな</rt><rp>)</rp></ruby>さんは<ruby><rb>毎日</rb><rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby><ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしていますか?",
			eng: "Do you study everyday?",
			start: { min: 0, sec: 43 },
			finish: { min: 0, sec: 50 },
		},
		{
			jap:
				"<ruby><rb>何</rb><rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かを<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>していますか?",
			eng: "Are you studying something?",
			start: { min: 0, sec: 51 },
			finish: { min: 0, sec: 57 },
		},
		{
			jap:
				"<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby><rb>毎日</rb><rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby><ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>しています。",
			eng: "I study every day.",
			start: { min: 0, sec: 58 },
			finish: { min: 1, sec: 5 },
		},
		{
			jap:
				"<ruby><rb>読書</rb><rp>(</rp><rt>どくしょ</rt><rp>)</rp></ruby>をしたりYouTubeで<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>したりしています。",
			eng: "I read books and study on YouTube.",
			start: { min: 1, sec: 7 },
			finish: { min: 1, sec: 17 },
		},
		{
			jap:
				"<ruby><rb>学生</rb><rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby>はみんな<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしていますが、<ruby><rb>大人</rb><rp>(</rp><rt>おとな</rt><rp>)</rp></ruby>になると<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしない<ruby><rb>人</rb><rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>がたくさんいます。",
			eng: "All students study, but there are many adults who do not study.",
			start: { min: 1, sec: 19 },
			finish: { min: 1, sec: 34 },
		},
		{
			jap:
				"<ruby><rb>日本人</rb><rp>(</rp><rt>にっぽんじん</rt><rp>)</rp></ruby>の<ruby><rb>大人</rb><rp>(</rp><rt>おとな</rt><rp>)</rp></ruby>の<ruby><rb>平均</rb><rp>(</rp><rt>へいきん</rt><rp>)</rp></ruby><ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby><ruby><rb>時間</rb><rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>は6<ruby><rb>分</rb></ruby>です。",
			eng: "The average study time for Japanese adults is 6 minutes.",
			start: { min: 1, sec: 36 },
			finish: { min: 1, sec: 48 },
		},
		{
			jap:
				"6<ruby><rb>分</rb></ruby>ってすごく<ruby><rb>短</rb><rp>(</rp><rt>みじか</rt><rp>)</rp></ruby>いですね。",
			eng: "Six minutes is very short, isn’t it?",
			start: { min: 1, sec: 49 },
			finish: { min: 1, sec: 54 },
		},
		{
			jap:
				"これは<ruby><rb>平均</rb><rp>(</rp><rt>へいきん</rt><rp>)</rp></ruby><ruby><rb>時間</rb><rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>なので、<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしている<ruby><rb>人</rb><rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>もいれば<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>を<ruby><rb>全</rb><rp>(</rp><rt>まった</rt><rp>)</rp></ruby>くしていない<ruby><rb>人</rb><rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>もいるという<ruby><rb>意味</rb><rp>(</rp><rt>いみ</rt><rp>)</rp></ruby>です。",
			eng:
				"This is the average time, which means that some people study and some people do not study at all.",
			start: { min: 1, sec: 55 },
			finish: { min: 2, sec: 15 },
		},
		{
			jap:
				"<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は20<ruby><rb>代</rb><rp>(</rp><rt>だい</rt><rp>)</rp></ruby><ruby><rb>前半</rb><rp>(</rp><rt>ぜんはん</rt><rp>)</rp></ruby>の<ruby><rb>頃</rb><rp>(</rp><rt>ころ</rt><rp>)</rp></ruby>は<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>の<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>を<ruby><rb>頑張</rb><rp>(</rp><rt>がんば</rt><rp>)</rp></ruby>っていました。",
			eng: "When I was in my early twenties, I was studying English very hard.",
			start: { min: 2, sec: 17 },
			finish: { min: 2, sec: 30 },
		},
		{
			jap:
				"<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby>は<ruby><rb>英語</rb><rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>の<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>ではなく、<ruby><rb>自分</rb><rp>(</rp><rt>じぶん</rt><rp>)</rp></ruby>の<ruby><rb>興味</rb><rp>(</rp><rt>きょうみ</rt><rp>)</rp></ruby>があることの<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしています。",
			eng:
				"Now I am not studying English, but studying things that interest me.",
			start: { min: 2, sec: 32 },
			finish: { min: 2, sec: 46 },
		},
		{
			jap:
				"<ruby><rb>新</rb><rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しいことを<ruby><rb>知</rb><rp>(</rp><rt>し</rt><rp>)</rp></ruby>るととても<ruby><rb>楽</rb><rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しいです。",
			eng: "It is very fun to learn new things.",
			start: { min: 2, sec: 50 },
			finish: { min: 2, sec: 57 },
		},
		{
			jap:
				"<ruby><rb>何</rb><rp>(</rp><rt>なん</rt><rp>)</rp></ruby><ruby><rb>歳</rb><rp>(</rp><rt>さい</rt><rp>)</rp></ruby>になっても、おじいちゃんおばあちゃんになっても<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>することは<ruby><rb>大切</rb><rp>(</rp><rt>たいせつ</rt><rp>)</rp></ruby>だと<ruby><rb>思</rb><rp>(</rp><rt>おも</rt><rp>)</rp></ruby>います。",
			eng:
				"I think it is important to study, no matter how old you are or how old you become.",
			start: { min: 2, sec: 58 },
			finish: { min: 3, sec: 12 },
		},
		{
			jap:
				"みなさんは<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、<ruby><rb>何</rb><rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かの<ruby><rb>勉強</rb><rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>をしていますか?",
			eng: "Are you studying something now?",
			start: { min: 3, sec: 13 },
			finish: { min: 3, sec: 21 },
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
				audioSrc="/media/episode_192.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/05/08/192/"
				episodeName="勉強 Study"
			/>
		</Box>
	);
}
