import PlayScreen from "../../components/PlayScreen";
import { Box } from "@chakra-ui/react";

export default function episode_157() {
	let transcript = [
		{
			jap:
				"<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby>、<ruby><rb>日本</rb><rp>(</rp><rt>にっぽん</rt><rp>)</rp></ruby>は、<ruby><rb>春</rb><rp>(</rp><rt>はる</rt><rp>)</rp></ruby>です。",
			eng: "It is now spring in Japan.",
			vocabulary: [
				{
					v_jap: "今 (いま)",
					v_eng:
						"now; the present time; just now; soon; immediately; (one) more",
				},
				{
					v_jap: "日本 (にほん、にっぽん)",
					v_eng: "Japan",
				},
				{
					v_jap: "春 (はる)",
					v_eng: "spring",
				},
			],
			start: { min: 0, sec: 46 },
			finish: { min: 0, sec: 50 },
		},
		{
			jap:
				"たくさんの<ruby><rb>桜</rb><rp>(</rp><rt>さくら</rt><rp>)</rp></ruby>が<ruby><rb>咲</rb><rp>(</rp><rt>さ</rt><rp>)</rp></ruby>いています。",
			eng: "Many cherry blossoms are in bloom.",
			vocabulary: [
				{
					v_jap: "たくさん",
					v_eng: "a lot; lots; plenty; many; a large number; much;",
				},
				{
					v_jap: "桜 (さくら)",
					v_eng: "cherry tree; cherry blossom ",
				},
				{
					v_jap: "咲く (さく)",
					v_eng: "to bloom",
				},
			],
			start: { min: 0, sec: 51 },
			finish: { min: 0, sec: 57 },
		},
		{
			jap:
				"<ruby><rb>先週</rb><rp>(</rp><rt>せんしゅう</rt><rp>)</rp></ruby>は、とてもきれいに<ruby><rb>桜</rb><rp>(</rp><rt>さくら</rt><rp>)</rp></ruby>が<ruby><rb>咲</rb><rp>(</rp><rt>さ</rt><rp>)</rp></ruby>いていました。",
			eng: "Last week, the cherry blossoms were in full bloom.",
			vocabulary: [
				{
					v_jap: "先週 (せんしゅう)",
					v_eng: "last week",
				},
				{
					v_jap: "とても",
					v_eng: "very",
				},
				{
					v_jap: "桜 (さくら)",
					v_eng: "cherry tree; cherry blossom",
				},
				{
					v_jap: "咲く (さく)",
					v_eng: "to bloom",
				},
			],
			start: { min: 1, sec: 0 },
			finish: { min: 1, sec: 8 },
		},
		{
			jap:
				"<ruby><rb>今週</rb><rp>(</rp><rt>こんしゅう</rt><rp>)</rp></ruby>は、だんだん<ruby><rb>桜</rb><rp>(</rp><rt>さくら</rt><rp>)</rp></ruby>の<ruby><rb>花</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>が、<ruby><rb>散</rb><rp>(</rp><rt>ち</rt><rp>)</rp></ruby>っています。",
			eng: "This week, the cherry blossoms are gradually falling.",
			vocabulary: [
				{
					v_jap: "今週 (こんしゅう)",
					v_eng: "this week",
				},
				{
					v_jap: "段々 (だんだん)",
					v_eng: "gradually; by degrees; steps; stairs; staircase; terrace",
				},
				{
					v_jap: "桜 (さくら)",
					v_eng: "cherry tree; cherry blossom",
				},
				{
					v_jap: "散る (ちる)",
					v_eng: "to fall",
				},
			],
			start: { min: 1, sec: 10 },
			finish: { min: 1, sec: 19 },
		},
		{
			jap:
				"<ruby><rb>桜</rb><rp>(</rp><rt>さくら</rt><rp>)</rp></ruby>が<ruby><rb>散</rb><rp>(</rp><rt>ち</rt><rp>)</rp></ruby>るとは、<ruby><rb>桜</rb><rp>(</rp><rt>さくら</rt><rp>)</rp></ruby>の<ruby><rb>花</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>が<ruby><rb>地面</rb><rp>(</rp><rt>じめん</rt><rp>)</rp></ruby>に<ruby><rb>落</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby>ちることをいいます。",
			eng:
				"When cherry blossoms fall, it means that the blossoms fall to the ground.",
			vocabulary: [
				{
					v_jap: "桜 (さくら)",
					v_eng: "cherry tree; cherry blossom",
				},
				{
					v_jap: "散る (ちる)",
					v_eng: "to fall",
				},
				{
					v_jap: "花 (はな)",
					v_eng: "flower; blossom; bloom; petal; cherry blossom;",
				},
				{
					v_jap: "地面 (じめん)",
					v_eng: "ground; earth's surface",
				},
				{
					v_jap: "落ちる (おちる)",
					v_eng: "to fall down; to drop; to fall",
				},
			],
			start: { min: 1, sec: 21 },
			finish: { min: 1, sec: 31 },
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
				audioSrc="/media/episode_157.mp3"
				transcript={transcript}
				extLink="https://sakuratips.com/2021/04/03/157/"
				episodeName="桜が散る Sakura is falling"
			/>
		</Box>
	);
}
