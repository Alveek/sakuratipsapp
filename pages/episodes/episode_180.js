import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_180() {
	let transcript = [
		{
			jap:
				"<ruby><rb>皆</rb><rp>(</rp><rt>みな</rt><rp>)</rp></ruby>さんは<ruby><rb>毎日</rb><rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby><ruby><rb>電車</rb><rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby><ruby><rb>乗</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>りますか?",
			eng: "Do you take the train everyday?",
			start: { min: 0, sec: 45.7 },
			finish: { min: 0, sec: 54 },
		},
		{
			jap:
				"<ruby><rb>会社</rb><rp>(</rp><rt>かいしゃ</rt><rp>)</rp></ruby>や<ruby><rb>学校</rb><rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>に<ruby><rb>行</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>く<ruby><rb>時</rb><rp>(</rp><rt>とき</rt><rp>)</rp></ruby>、<ruby><rb>電車</rb><rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby>を<ruby><rb>使</rb><rp>(</rp><rt>つか</rt><rp>)</rp></ruby>いますか?",
			eng: "Do you use the train to go to work or school?",
			start: { min: 0, sec: 55 },
			finish: { min: 1, sec: 3 },
		},
		{
			jap:
				"<ruby><rb>私</rb><rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby><rb>以前</rb><rp>(</rp><rt>いぜん</rt><rp>)</rp></ruby>、<ruby><rb>毎日</rb><rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby><ruby><rb>電車</rb><rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby>に<ruby><rb>乗</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>っていました。",
			eng: "I used to take the train every day.",
			start: { min: 1, sec: 5 },
			finish: { min: 1, sec: 14 },
		},
		{
			jap:
				"<ruby><rb>会社</rb><rp>(</rp><rt>かいしゃ</rt><rp>)</rp></ruby>から<ruby><rb>少</rb><rp>(</rp><rt>すこ</rt><rp>)</rp></ruby>し<ruby><rb>離</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れた<ruby><rb>場所</rb><rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>に<ruby><rb>住</rb><rp>(</rp><rt>す</rt><rp>)</rp></ruby>んでいたので、<ruby><rb>片道</rb><rp>(</rp><rt>かたみち</rt><rp>)</rp></ruby>1<ruby><rb>時間</rb><rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>かけて<ruby><rb>通勤</rb><rp>(</rp><rt>つうきん</rt><rp>)</rp></ruby>していました。",
			eng:
				"Since I lived a little far from my office, it took me an hour to commute each way.",
			start: { min: 1, sec: 16 },
			finish: { min: 1, sec: 33 },
		},
		{
			jap:
				"なので、1<ruby><rb>日</rb><rp>(</rp><rt>にち</rt><rp>)</rp></ruby>2<ruby><rb>時間</rb><rp>(</rp><rt>じかん</rt><rp>)</rp></ruby><ruby><rb>電車</rb><rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby>に<ruby><rb>乗</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>っていました。",
			eng: "So, I was on the train for two hours a day.",
			start: { min: 1, sec: 34 },
			finish: { min: 1, sec: 43 },
		},
		{
			jap:
				"<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby><ruby><rb>考</rb><rp>(</rp><rt>かんが</rt><rp>)</rp></ruby>えると、とても<ruby><rb>無駄</rb><rp>(</rp><rt>むだ</rt><rp>)</rp></ruby>な<ruby><rb>時間</rb><rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>だったと<ruby><rb>思</rb><rp>(</rp><rt>おも</rt><rp>)</rp></ruby>います。",
			eng: "When I think about it now, I think it was a waste of time.",
			start: { min: 1, sec: 45 },
			finish: { min: 1, sec: 54 },
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
				audioSrc="/media/episode_180.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/04/26/180/"
				episodeName="電車 Train"
			/>
		</Box>
	);
}
