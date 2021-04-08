// import { transcript } from "../../transcripts/t_episode_153";
import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_153() {
	let transcript = [
		{
			jap:
				"<ruby><rb>今日</rb><rp>(</rp><rt>きょう</rt><rp>)</rp></ruby>は3<ruby><rb>月</rb><rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>31<ruby><rb>日</rb><rp>(</rp><rt>にち</rt><rp>)</rp></ruby>。",
			eng: "Today is March 31st.",
			start: { min: 0, sec: 44 },
			finish: { min: 0, sec: 50 },
		},
		{
			jap:
				"<ruby><rb>明日</rb><rp>(</rp><rt>あした</rt><rp>)</rp></ruby>から、<ruby><rb>新</rb><rp>(</rp><rt>しん</rt><rp>)</rp></ruby><ruby><rb>年度</rb><rp>(</rp><rt>ねんど</rt><rp>)</rp></ruby>が<ruby><rb>始</rb><rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>まります。",
			eng: "Tomorrow, the new fiscal year will begin.",
			start: { min: 0, sec: 51 },
			finish: { min: 0, sec: 57 },
		},
		{
			jap:
				"<ruby><rb>日本</rb><rp>(</rp><rt>にっぽん</rt><rp>)</rp></ruby>では、<ruby><rb>学校</rb><rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>や<ruby><rb>会社</rb><rp>(</rp><rt>かいしゃ</rt><rp>)</rp></ruby>は4<ruby><rb>月</rb><rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>から3<ruby><rb>月</rb><rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>までという<ruby><rb>年度</rb><rp>(</rp><rt>ねんど</rt><rp>)</rp></ruby>です。",
			eng:
				"In Japan, the fiscal year is from April to March for schools and companies.",
			start: { min: 0, sec: 58 },
			finish: { min: 1, sec: 13 },
		},
		{
			jap:
				"つまり、4<ruby><rb>月</rb><rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>に<ruby><rb>学生</rb><rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby>は、<ruby><rb>新</rb><rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby><rb>学年</rb><rp>(</rp><rt>がくねん</rt><rp>)</rp></ruby>になります。",
			eng: "In other words, students start a new school year in April.",
			start: { min: 1, sec: 14 },
			finish: { min: 1, sec: 26 },
		},
		{
			jap:
				"4<ruby><rb>月</rb><rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>は、<ruby><rb>入学式</rb><rp>(</rp><rt>にゅうがくしき</rt><rp>)</rp></ruby>や<ruby><rb>入社式</rb><rp>(</rp><rt>にゅうしゃしき</rt><rp>)</rp></ruby>があります。",
			eng: "In April, there are entrance ceremonies and initiation ceremonies.",
			start: { min: 1, sec: 27 },
			finish: { min: 1, sec: 36 },
		},
		{
			jap:
				"<ruby><rb>今日</rb><rp>(</rp><rt>きょう</rt><rp>)</rp></ruby>が、<ruby><rb>今年度</rb><rp>(</rp><rt>こんねんど</rt><rp>)</rp></ruby>の<ruby><rb>最終日</rb><rp>(</rp><rt>さいしゅうび</rt><rp>)</rp></ruby>です。",
			eng: "Today is the last day of this school year.",
			start: { min: 1, sec: 39 },
			finish: { min: 1, sec: 46 },
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
				audioSrc="/media/episode_154.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/03/31/154/"
				episodeName="新年度 New Business Year"
			/>
		</Box>
	);
}
