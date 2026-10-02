CHAPTERS.push({id:'ch4',n:'4장',title:'조상의 집',place:'조상의 집 · 콘솔 방 · 땅속 방',words:16,save:'esb-ch4',color:'#6B5A48',
 start:{zone:'entry',x:2,y:8,dir:'right'},introWho:'핸드리',
 make:()=>{
/* =====================================================================
   4장 · 조상의 집 — content. Book pin: §VII–X (the House of our Ancestors).
   §VII  Arrival with Sharskin and Ostel (Menic already dead, §VI). Low square door with rounded corners, plants cut back; double-walled
         entry; daylight through holes; rusted sliding doors; ~30 marked followers (¾ men). Sweet ration slabs (shiny peel, soft paste).
         Console Room: consoles (some cracked to honeycomb), EIGHT metal servants — seven in alcoves, one frozen mid-step.
         Hologram: blue-green world → silver dart → green world → purple-green forest with no villages. Three days' labour (cutting
         roots, shoring walls). Rule: no man–woman sex (outcast pregnancies ended in dead babies and mothers); Sharskin beat a couple
         who broke it (reported). Evening sermons in amber light; the House calls ghosts "expert systems", hives "community biome hubs",
         and speaks in the commander's voice. Day 4 initiation in the medical room: "original condition", then "diagnostic implant /
         active trace signal". Sharskin sends Handry out and stays to talk to the House.
   §VIII Sharskin keeps Handry close. Garvell (f) killed by a sling stone on a raid; Yerke's thorn wound goes black, Sharskin kills him
         (mercy). House: "return signal active". Expedition (~30), 3 days, small village between two hills: Sharskin kills its male
         Lawgiver with one blow; goods brought out, some taken, the rest burned; Handry strikes a man and burns his carved stick.
         A huntress tracks them; Sharskin beats her to death; all cheer. "Expert assistance incoming"; Sharskin claims 500+ years.
         Two days later hunters bring in MELORY (captured — not an Aro party). House: "new device: medical expert system". Sharskin:
         the ghost tracked Handry through the diagnostic thorn in his palm; he wants the Severance recipe to mark the whole world.
   §IX   Interrogation through the House ("downloading", "please wait"); Melory convulses, calls him mad. Held in the buried chambers,
         roped by the neck; Ostel guards. Handry hesitates for days, thinks of Iblis and Corto. Vernen urges Ostel to beat her; Handry
         tackles Vernen and stabs him three times (dies). Melory trips Ostel and kicks him unconscious (his fate afterwards: unstated —
         he is simply no longer shown). Melory hears the House's broken, looping systems. They hide in the Console Room ("bridge");
         the House finds her on a map; Sharskin floors Handry and grinds the staff into Melory; "update complete" → "command access
         granted"; Sharskin's printer/Severance order is refused in Melory's voice; a metal servant wakes, nodules pulsing with her
         heartbeat, crushes Sharskin's ribs (blood from the mouth). The congregation flees or hides. Melory: she suppressed the ghost's
         report; it kept telling her of Handry's pain; she left Aro to find and help him.
   §X    Melory offers a blood transfusion to un-Sever him; Handry declines. She shares command access; the House speaks in his voice.
         The ecosystem explained (wasps, fleas, lice change people so they can live here; the ghosts were meant as helpers). Brothers
         return, fed by the House (supply finite). Plan: Melory as ambassador to the villages, Orovo/Iblis first; teach and learn.
         Iblis never appears. The House's "ancestors" are NOT ancestors' souls: older, vaster, broken systems, of a piece with the ghosts.
   Invented (inv., non-decisive): 고참 형제 (veteran), 젊은 형제, 늙은 형제 (review), two named-less brothers, the echo game, which
       alcove the waking servant came from, where in the House each scene stands, the root-cutting/sack-packing details.
       Whose knife Handry used is left unsaid.
   Lore source: notes/canon.md + notes/chapters-outline.md (4장). Audit against the full book before publishing (see CLAUDE.md).
   Terms: 판관 · 의사 · 설계자 · 유령 · 단절약 · 일렉터 · 추방자 · 형제 (Sharskin's followers) · 집 (the House's voice).
   ===================================================================== */
const WORDS=['조상','금속','하늘','설교하다','금지','치료하다','혈관','묶다','칼','찌르다','권한','목소리','메아리','유령','영혼','거절하다'];
const DICT={
 '조상':{k:'아주 옛날에 살았던 우리 집안 사람들. 할아버지의 할아버지의…',e:'ancestor(s)',ex:'조상들이 이 집을 만들었어요.',hj:'祖上 · 祖 = 할아버지 · 上 = 위 · 이상(以上)의 상'},
 '금속':{k:'쇠나 은처럼 단단하고 차가운 것.',e:'metal',ex:'샤스킨의 지팡이는 금속이에요.',hj:'金屬 · 金 = 쇠, 금 · 금요일의 금'},
 '하늘':{k:'머리 위의 넓은 곳. 해, 달, 별, 구름이 있어요.',e:'sky; heaven',ex:'밤하늘에 별이 많아요.'},
 '설교하다':{k:'믿음에 대해 사람들 앞에서 가르치는 말을 해요. (설교해요)',e:'to preach, give a sermon',ex:'샤스킨은 저녁마다 설교해요.',hj:'說敎 · 說 = 말하다 · 설명(說明)의 설 · 敎 = 가르치다 · 교실의 교'},
 '금지':{k:'하면 안 된다고 정한 것.',e:'prohibition; forbidden',ex:'여기서 수영은 금지예요.',hj:'禁止 · 止 = 멈추다 · 정지(停止)의 지'},
 '치료하다':{k:'병이나 상처를 낫게 해요. (치료해요)',e:'to treat, cure, heal',ex:'의사가 상처를 치료했어요.',hj:'治療 · 療 = 병을 고치다'},
 '혈관':{k:'몸 안에서 피가 흐르는 길.',e:'blood vessel, vein',ex:'손목에 파란 혈관이 보여요.',hj:'血管 · 血 = 피 · 혈액형의 혈 · 管 = 관'},
 '묶다':{k:'끈이나 밧줄로 감아서 못 움직이게 해요. (묶어요) 당하면 → 묶이다.',e:'to tie, bind',ex:'밧줄로 상자를 묶었어요.'},
 '칼':{k:'무엇을 자르는 날카로운 도구.',e:'knife; blade',ex:'칼로 빵을 잘라요.'},
 '찌르다':{k:'뾰족한 것으로 세게 밀어 넣어요. (찔러요 · 찔렀어요) 당하면 → 찔리다.',e:'to stab, pierce',ex:'가시가 손가락을 찔렀어요.'},
 '권한':{k:'무엇을 할 수 있게 허락받은 힘.',e:'authority, access rights',ex:'이 문을 열 권한이 없어요.',hj:'權限 · 權 = 힘 · 限 = 한계(限界)의 한'},
 '목소리':{k:'사람이 말하거나 노래할 때 나오는 소리.',e:'voice',ex:'멜로리의 목소리가 들려요.'},
 '메아리':{k:'산이나 큰 방에서 소리가 부딪혀서 다시 돌아오는 것.',e:'echo',ex:'산에서 "야호!" 하면 메아리가 돌아와요.'},
 '유령':{k:'이 세계에서는: 벌집에서 와서 어떤 사람 머릿속에 사는 똑똑한 목소리. (보통 뜻: 죽은 사람의 혼)',e:'ghost',ex:'멜로리의 머릿속에는 의사 유령이 있어요.',hj:'幽靈 · 靈 = 영혼(靈魂)의 영'},
 '영혼':{k:'몸이 아닌, 사람의 마음과 생명. 죽은 뒤에도 남는다고 믿어요.',e:'soul, spirit',ex:'조상들의 영혼이 우리를 지켜 줘요.',hj:'靈魂 · 靈 = 유령(幽靈)의 령'},
 '거절하다':{k:'남이 주거나 부탁하는 것을 "아니요" 하고 받지 않아요.',e:'to refuse, decline',ex:'친구의 부탁을 거절했어요.',hj:'拒絶 · 絶 = 끊다 · 단절(斷絶)의 절!'},
 /* glosses for words that appear in lines but are not badges */
 '조상의 집':{k:'샤스킨이 이 언덕 속 집을 부르는 이름.',e:'the House of our Ancestors'},
 '형제':{k:'샤스킨을 따르는 추방자들. 서로 형제라고 불러요.',e:'brother (Sharskin’s follower)'},
 '추방자':{k:'마을에서 쫓겨난 사람.',e:'outcast, exile'},
 '본래 상태':{k:'샤스킨의 말. 단절약이 묻은 몸. 조상들처럼 벌이 없는 몸이래요.',e:'"Original Condition"'},
 '카인의 표식':{k:'샤스킨의 말. 추방자 몸의 빨간 단절 자국.',e:'"the Mark of Cain"'},
 '단절약':{k:'의사가 끓이는 검붉은 약. 바르면 그 사람은 공동체에서 끊어져요.',e:'Severance (the dye)'},
 '판관':{k:'유령을 가진 사람. 마을의 규칙을 지키고 판결해요.',e:'Lawgiver'},
 '전문가 시스템':{k:'조상들의 말. 집은 유령을 이렇게 불러요.',e:'expert system'},
 '공동체 생물 허브':{k:'조상들의 말. 집은 벌집을 이렇게 불러요.',e:'community biome hub'},
 '진단 장치':{k:'집의 말. 몸 안에 남은 아주 작은 검사 도구.',e:'diagnostic implant'},
 '추적 신호':{k:'어디 있는지 알려 주는 신호.',e:'trace signal'},
 '귀환 신호':{k:'집의 말. 돌아오는 것을 알리는 신호.',e:'return signal'},
 '의료 전문가 시스템':{k:'집의 말. 의사 유령.',e:'medical expert system'},
 '진단 가시':{k:'멜로리가 손바닥을 만졌을 때 남은 아주 작은 가시.',e:'the diagnostic thorn'},
 '프린터 기능':{k:'집의 말. 무엇을 만들어 내는 기능.',e:'printer functions'},
 '브리지':{k:'집이 콘솔 방을 부르는 이름.',e:'the bridge'},
 '콘솔':{k:'버튼과 빛나는 판이 있는 조상들의 큰 탁자.',e:'console'},
 '금속 하인':{k:'콘솔 방에 서 있는 아주 큰 금속 사람. 오랫동안 움직이지 않았어요.',e:'metal servant'},
 '돌팔매':{k:'돌을 멀리 던지는 끈 도구.',e:'sling'},
 '이블리스':{k:'오로보의 설계자. 마을 사람을 다 머릿속에 기억해요.',e:'Iblis'},
 '오로보':{k:'아주 큰 마을. 핸드리가 지나온 곳.',e:'Orovo'},
 '코맹맹이':{k:'코가 막힌 것 같은 목소리.',e:'nasal (voice)'},
 '조상의 음식':{k:'집이 주는 작은 덩어리. 껍질을 벗기면 부드럽고 달아요.',e:'ration slab ("the ancestors’ food")'},
 '입문식':{k:'새 사람이 무리에 들어올 때 하는 의식.',e:'initiation'},
};
const CONFUSE={'조상':['조사','좌석'],'금속':['금지','금방'],'하늘':['하나','바늘'],'설교하다':['설명하다','설거지하다'],'금지':['금속','근처'],
 '치료하다':['치우다','처리하다'],'혈관':['현관','혈액'],'묶다':['묻다','먹다'],'칼':['탈','갈'],'찌르다':['지르다','찔리다'],'권한':['권리','관한'],
 '목소리':['목걸이','모서리'],'메아리':['매미','머리'],'유령':['유행','요령'],'영혼':['영화','연휴'],'거절하다':['거짓말하다','걱정하다']};

/* extra review questions (the memory stone uses these too, alongside every NPC question) */
const BANK=[
 {w:'조상',ask:'설날에 우리 가족은 ___께 절을 해요.',opts:[['조상',1],['조사',0,'조사는 무엇을 자세히 알아보는 거예요. 옛날 집안 어른들은 "조상".']]},
 {w:'금속',ask:'이 숟가락은 나무가 아니라 ___이에요. 차갑고 단단해요.',opts:[['금속',1],['금지',0,'금지는 하면 안 되는 거예요. 차갑고 단단한 재료는 "금속".']]},
 {w:'하늘',ask:'오늘은 구름이 없어서 ___이 아주 파래요.',opts:[['하늘',1],['하나',0,'하나는 숫자 1이에요. 구름이 있는 위쪽은 "하늘".']]},
 {w:'하늘',ask:'하늘이 어두워요. 곧 비가 ___ 해요.',opts:[['오려고',1],['올 뻔',0,'"-(으)ㄹ 뻔하다"는 거의 일어났는데 안 일어난 일이에요. 곧 일어날 일 → "오려고 해요".']]},
 {w:'설교하다',ask:'일요일에 목사님이 교회에서 ___.',opts:[['설교해요',1],['설거지해요',0,'설거지는 그릇을 씻는 거예요. 믿음을 가르치는 말은 "설교해요".']]},
 {w:'금지',ask:'여기는 수영 ___ 구역이에요. 들어가면 안 돼요.',opts:[['금지',1],['금방',0,'금방은 "곧, 조금 전"이에요. 하면 안 되는 건 "금지".']]},
 {w:'금지',ask:'금지된 곳에 ___ 뻔했어요. 친구가 잡아 줬어요.',opts:[['들어갈',1],['들어가',0,'"-(으)ㄹ 뻔했다" 앞에는 "-(으)ㄹ"이 와요 → "들어갈 뻔했어요".'],['들어간',0,'"-(으)ㄴ"이 아니에요. → "들어갈 뻔했어요".']]},
 {w:'치료하다',ask:'의사 선생님이 제 다리를 ___ 주셨어요.',opts:[['치료해',1],['치워',0,'치우다는 물건을 정리하는 거예요. 다친 곳을 낫게 하면 → "치료해 주셨어요".']]},
 {w:'치료하다',ask:'의사가 상처를 ___ 하는데 아이가 자꾸 울어요.',opts:[['치료하려고',1],['치료할 뻔',0,'"-(으)ㄹ 뻔하다"는 거의 일어났는데 안 일어난 일이에요. 하고 싶은 일 → "치료하려고 해요".']]},
 {w:'혈관',ask:'피는 ___을 따라 온몸으로 흘러요.',opts:[['혈관',1],['현관',0,'현관은 집에 들어가는 문 앞이에요. 피가 흐르는 길은 "혈관".']]},
 {w:'묶다',ask:'머리가 길어서 끈으로 ___.',opts:[['묶었어요',1],['묻었어요',0,'묻다는 땅에 넣거나 물어보는 거예요. 끈으로 → "묶었어요".']]},
 {w:'칼',ask:'요리사가 ___로 양파를 썰어요.',opts:[['칼',1],['탈',0,'탈은 얼굴에 쓰는 가면이에요. 자르는 도구는 "칼".']]},
 {w:'칼',ask:'칼을 쓰다가 손을 ___. 정말 위험했어요.',opts:[['벨 뻔했어요',1],['베려고 했어요',0,'"-려고 하다"는 하고 싶은 거예요. 거의 다쳤는데 안 다쳤어요 → "벨 뻔했어요".']]},
 {w:'찌르다',ask:'장미 가시가 손가락을 ___.',opts:[['찔렀어요',1],['찔렸어요',0,'가시가 한 거예요 → "찔렀어요". 손가락이 당하면 → "손가락이 찔렸어요".']]},
 {w:'권한',ask:'관리자만 이 파일을 지울 ___이 있어요.',opts:[['권한',1],['관한',0,'"관한"은 "~에 대한"이에요. 할 수 있게 허락받은 힘 → "권한".']]},
 {w:'목소리',ask:'전화로 엄마 ___를 들으니까 마음이 놓여요.',opts:[['목소리',1],['목걸이',0,'목걸이는 목에 거는 장신구예요. 말하는 소리는 "목소리".']]},
 {w:'메아리',ask:'산꼭대기에서 소리쳤더니 ___가 돌아왔어요.',opts:[['메아리',1],['매미',0,'매미는 여름에 우는 곤충이에요. 돌아오는 소리는 "메아리".']]},
 {w:'유령',ask:'그 오래된 집에 ___이 나온다는 소문이 있어요.',opts:[['유령',1],['유행',0,'유행은 많은 사람이 따라 하는 거예요. 무서운 이야기에 나오는 건 "유령".']]},
 {w:'영혼',ask:'할머니는 할아버지의 ___이 우리를 지켜 준다고 믿어요.',opts:[['영혼',1],['영화',0,'영화는 극장에서 보는 거예요. 죽은 뒤에도 남는 마음은 "영혼".']]},
 {w:'거절하다',ask:'친구가 돈을 빌려 달라고 했는데 저는 ___.',opts:[['거절했어요',1],['거짓말했어요',0,'거짓말은 진실이 아닌 말이에요. "아니, 안 돼" 하면 → "거절했어요".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 shar:[
  {w:'조상',ask:'아주 옛날 사람들. 할아버지의 할아버지의… 우리 ___.',opts:[['조상',1],['조사',0,'조사는 무엇을 자세히 알아보는 거예요. 옛날 집안 사람들은 "조상".'],['좌석',0,'좌석은 앉는 자리예요. 옛날 집안 사람들은 "조상".']]},
  {w:'조상',ask:'샤스킨은 우리에게 조상의 집을 ___ 해요.',opts:[['보여 주려고',1],['보여 줄 뻔',0,'"-(으)ㄹ 뻔하다"는 거의 일어났는데 안 일어난 일이에요. 하고 싶은 일 → "보여 주려고 해요".'],['보여 줘서',0,'"-아서"는 이유예요. 하고 싶은 일 → "보여 주려고 해요".']]},
 ],
 ostel:[
  {w:'금속',ask:'이 문은 나무도 돌도 아니에요. ___이에요.',opts:[['금속',1],['금지',0,'금지는 하면 안 되는 거예요. 차갑고 단단한 문은 "금속".'],['금방',0,'금방은 "곧, 조금 전"이에요. 문의 재료는 "금속".']]},
  {w:'금속',ask:'샤스킨의 지팡이도 ___이에요. 은색으로 빛나요.',opts:[['금속',1],['근처',0,'근처는 가까운 곳이에요. 은색으로 빛나는 재료는 "금속".']]},
 ],
 yerke:[
  {w:'메아리',ask:'"어이—" 하면 "…어이…" 하고 돌아와요. ___예요.',opts:[['메아리',1],['매미',0,'매미는 여름에 우는 곤충이에요. 돌아오는 소리는 "메아리".'],['머리',0,'머리는 몸의 맨 위예요. 돌아오는 소리는 "메아리".']]},
  {w:'메아리',ask:'천장이 ___ 메아리가 크게 울려요.',opts:[['높아서',1],['높아도',0,'"-아도"는 "그래도"예요. 이유니까 → "높아서".'],['높기 전에',0,'"-기 전에"는 시간 순서예요. 이유니까 → "높아서".']]},
 ],
 holo:[
  {w:'하늘',ask:'샤스킨은 이 집이 밤___에서 왔다고 해요.',opts:[['하늘',1],['하나',0,'하나는 숫자 1이에요. 별이 있는 곳은 "하늘".'],['바늘',0,'바늘은 바느질할 때 써요. 별이 있는 곳은 "하늘".']]},
  {w:'하늘',ask:'밤___에 별이 많아요.',opts:[['하늘',1],['바닥',0,'바닥은 발 밑이에요. 별은 위에 → "밤하늘".']]},
 ],
 house:[
  {w:'목소리',ask:'집은 샤스킨과 똑같은 ___로 말해요.',opts:[['목소리',1],['목걸이',0,'목걸이는 목에 거는 장신구예요. 말하는 소리는 "목소리".'],['모서리',0,'모서리는 물건의 뾰족한 끝이에요. 말하는 소리는 "목소리".']]},
  {w:'목소리',ask:'집이 말해요. 그런데 샤스킨 목소리___ 똑같아요.',opts:[['하고',1],['한테',0,'"한테"는 누구에게 줄 때예요. 같은 것 → "목소리하고 똑같아요".']]},
 ],
 house2:[
  {w:'메아리',ask:'집의 목소리는 꼭 제 목소리의 ___ 같아요.',opts:[['메아리',1],['머리',0,'머리는 몸의 맨 위예요. 돌아오는 소리는 "메아리".']]},
 ],
 root:[
  {w:'금속',ask:'뿌리가 금속 벽을 뚫고 ___ 해요.',opts:[['들어오려고',1],['들어올 뻔',0,'"-(으)ㄹ 뻔하다"는 거의 일어났는데 안 일어난 일이에요. 지금 하고 있는 일 → "들어오려고 해요".']]},
 ],
 crack:[
  {w:'묶다',ask:'흙을 담고, 자루 입구를 끈으로 ___.',opts:[['묶었어요',1],['먹었어요',0,'먹다는 음식을 먹는 거예요. 끈으로 → "묶었어요".']]},
 ],
 vet:[
  {w:'금지',ask:'여기서 남자와 여자는 같이 자면 안 돼요. ___예요.',opts:[['금지',1],['금속',0,'금속은 쇠 같은 단단한 거예요. 하면 안 되는 건 "금지".'],['근처',0,'근처는 가까운 곳이에요. 하면 안 되는 건 "금지".']]},
  {w:'금지',ask:'규칙을 ___ 샤스킨이 때려요.',opts:[['어기면',1],['지키면',0,'규칙을 지키면 괜찮아요. 하면 안 되는 걸 하면 → "어기면".'],['어길 뻔하면',0,'"-(으)ㄹ 뻔하다"는 "어길 뻔했어요"처럼 지난 일에 써요. 조건은 → "어기면".']]},
 ],
 sermon:[
  {w:'설교하다',ask:'샤스킨은 저녁마다 형제들 앞에서 ___.',opts:[['설교해요',1],['설거지해요',0,'설거지는 그릇을 씻는 거예요. 믿음을 가르치는 말은 "설교해요".'],['실수해요',0,'실수는 잘못하는 거예요. 사람들 앞에서 가르치는 말은 "설교해요".']]},
  {w:'유령',ask:'집은 ___을 "전문가 시스템"이라고 불러요.',opts:[['유령',1],['유행',0,'유행은 많은 사람이 따라 하는 거예요. 머릿속의 목소리는 "유령".'],['요령',0,'요령은 일을 쉽게 하는 방법이에요. 머릿속의 목소리는 "유령".']]},
  {w:'설교하다',ask:'샤스킨이 ___ 동안 아무도 말하지 않아요.',opts:[['설교하는',1],['설교할 뻔한',0,'"-(으)ㄹ 뻔하다"는 거의 일어날 뻔한 일이에요. 지금 하는 중 → "설교하는 동안".']]},
 ],
 young:[
  {w:'영혼',ask:'젊은 형제는 이 집에 조상들의 ___이 산다고 믿어요.',opts:[['영혼',1],['영화',0,'영화는 극장에서 보는 거예요. 죽은 뒤에도 남는 마음은 "영혼".'],['연휴',0,'연휴는 쉬는 날이 이어지는 거예요. 죽은 뒤에도 남는 마음은 "영혼".']]},
  {w:'영혼',ask:'사람이 죽으면 ___은 어디로 갈까요?',opts:[['영혼',1],['연휴',0,'연휴는 쉬는 날이에요. 몸이 아닌 마음과 생명은 "영혼".']]},
 ],
 mel:[
  {w:'유령',ask:'샤스킨은 멜로리의 유령한테서 단절약 만드는 법을 ___ 해요.',opts:[['알아내려고',1],['알아낼 뻔',0,'"-(으)ㄹ 뻔하다"는 거의 일어났는데 안 일어난 일이에요. 하고 싶은 일 → "알아내려고 해요".'],['알아내서',0,'"-아서"는 이유나 순서예요. 하고 싶은 일 → "알아내려고 해요".']]},
 ],
 vern:[
  {w:'찌르다',ask:'저는 칼로 버넌을 세 번 ___.',opts:[['찔렀어요',1],['찔렸어요',0,'"찔리다"는 당하는 거예요. 제가 했으니까 → "찔렀어요".'],['질렀어요',0,'"지르다"는 소리를 크게 내는 거예요. 칼로 → "찔렀어요".']]},
  {w:'칼',ask:'___로 밧줄을 잘라요.',opts:[['칼',1],['탈',0,'탈은 얼굴에 쓰는 가면이에요. 자르는 도구는 "칼".'],['발',0,'발은 걸을 때 써요. 자르는 도구는 "칼".']]},
 ],
 melB:[
  {w:'묶다',ask:'멜로리 목에 밧줄이 ___ 있어요.',opts:[['묶여',1],['묶어',0,'밧줄에 당한 상태예요 → "묶여 있어요". 사람이 하면 → "묶어요".'],['묻어',0,'묻다는 땅에 넣거나 물어보는 거예요. 밧줄은 → "묶여 있어요".']]},
  {w:'묶다',ask:'샤스킨이 멜로리를 땅속 방에 ___.',opts:[['묶어 두었어요',1],['묶여 두었어요',0,'샤스킨이 한 일이에요 → "묶어 두었어요". 멜로리가 당하면 → "묶여 있어요".']]},
 ],
 clim:[
  {w:'권한',ask:'권한을 받기 전에 멜로리는 샤스킨의 지팡이에 ___.',opts:[['죽을 뻔했어요',1],['죽으려고 했어요',0,'"-려고 하다"는 하고 싶은 거예요. 거의 죽었는데 살았어요 → "죽을 뻔했어요".'],['죽었어요',0,'멜로리는 안 죽었어요. 거의 죽었는데 살았어요 → "죽을 뻔했어요".']]},
  {w:'권한',ask:'집이 멜로리에게 명령 ___을 줬어요.',opts:[['권한',1],['관한',0,'"관한"은 "~에 대한"이에요. 명령할 수 있는 힘 → "권한".'],['공간',0,'공간은 비어 있는 곳이에요. 명령할 수 있는 힘 → "권한".']]},
 ],
 offer:[
  {w:'치료하다',ask:'멜로리는 의사예요. 핸드리를 ___ 해요.',opts:[['치료하려고',1],['치료할 뻔',0,'"-(으)ㄹ 뻔하다"는 거의 일어났는데 안 일어난 일이에요. 하고 싶은 일 → "치료하려고 해요".'],['치워 주려고',0,'치우다는 물건을 정리하는 거예요. 몸을 낫게 하면 → "치료하려고 해요".']]},
  {w:'혈관',ask:'멜로리의 피를 핸드리의 ___에 넣어요.',opts:[['혈관',1],['현관',0,'현관은 집에 들어가는 문 앞이에요. 피가 흐르는 길은 "혈관".'],['혈액형',0,'혈액형은 A형, B형 같은 거예요. 피가 흐르는 길은 "혈관".']]},
  {w:'거절하다',ask:'핸드리는 멜로리의 치료를 ___.',opts:[['거절했어요',1],['거짓말했어요',0,'거짓말은 진실이 아닌 말이에요. "아니, 안 할래" → "거절했어요".'],['걱정했어요',0,'걱정은 마음이 불안한 거예요. "아니, 안 할래" → "거절했어요".']]},
 ],
 cafe:[ // the old brother: words from 성실호, 1장 and 2장, no badges
  {ask:'숲이 너무 ___ 아무것도 안 보였어.',opts:[['캄캄해서',1],['캄캄해도',0,'"-아도"는 "그래도"야. 안 보인 이유니까 → "캄캄해서".']]},
  {ask:'벌한테 ___ 팔이 퉁퉁 부었어.',opts:[['쏘여서',1],['쏴서',0,'내가 쏜 게 아니야. 벌한테 당했어 → "쏘여서".']]},
  {ask:'끓는 물에 손을 ___ 물집이 생겼어.',opts:[['데어서',1],['되어서',0,'"되다"는 무엇이 바뀌는 거야. 뜨거운 물에 다쳤으면 → "데어서".']]},
  {ask:'풀을 뽑다가 ___가 났어. 너무 가려워.',opts:[['두드러기',1],['두부',0,'두부는 먹는 거야! 가려운 건 "두드러기".']]},
  {ask:'해가 뜨는 쪽은 ___이야.',opts:[['동쪽',1],['서쪽',0,'서쪽은 해가 지는 쪽이야. 해가 뜨는 쪽 → "동쪽".']]},
  {ask:'사냥꾼들이 숲에 ___을 놓았어.',opts:[['덫',1],['돛',0,'돛은 배에 다는 큰 천이야. 짐승을 잡는 건 "덫".']]},
  {ask:'아무도 없는 숲에서 혼자 너무 ___.',opts:[['외로웠어',1],['외웠어',0,'외우다는 기억하는 거야. 혼자라서 쓸쓸하면 → "외로웠어".']]},
  {ask:'아이가 아파서 ___이 나. 이마가 뜨거워.',opts:[['열',1],['얼음',0,'얼음은 차가운 거야. 이마가 뜨거우면 → "열이 나".']]},
  {ask:'우리는 마을에서 쫓겨났어. 그래서 ___처럼 숨어 살았지.',opts:[['도둑',1],['도장',0,'도장은 이름을 찍는 거야. 숨어서 훔치는 사람은 "도둑".']]},
 ],
};

const ITEMS={'조상의 음식':'반짝이는 껍질 안에 부드럽고 단 덩어리. 집이 주는 음식이에요.','밧줄 조각':'멜로리 목을 묶었던 밧줄. 칼로 잘랐어요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);

/* ---------------- sprites ---------------- */
const OL='#1B1E2B';
const grid=(w,h)=>Array.from({length:h},()=>Array(w).fill('.'));
const rowsOf=G=>G.map(r=>r.join(''));
const put=(G,x,y,c)=>{if(G[y]&&x>=0&&x<G[0].length)G[y][x]=c};
const seg=(G,x0,y0,x1,y1,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))||1;for(let i=0;i<=n;i++)put(G,Math.round(x0+(x1-x0)*i/n),Math.round(y0+(y1-y0)*i/n),c)};
const outline=G=>{const H=G.length,W=G[0].length,add=[];for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(G[y][x]!=='.')continue;
 if([[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>{const c=G[y+dy]&&G[y+dy][x+dx];return c&&c!=='.'&&c!=='O'}))add.push([x,y])}add.forEach(([x,y])=>G[y][x]='O');return G};
const frames=(list,ms)=>({get art(){return list[Math.floor(Date.now()/ms)%list.length]}});
const flat=(rows,pal)=>({pal,down:rows,up:rows,left:rows});
const setc=(rows,y,x,c)=>{if(rows[y]&&x<rows[y].length)rows[y]=rows[y].slice(0,x)+c+rows[y].slice(x+1)};
/* humanoid generator + small edits, built lazily (the engine's generator exists only at draw time); ext(pal) may add getters */
const tuned=(L,fn,ext)=>{let A=null;const o={...L};Object.defineProperty(o,'art',{get(){if(!A){const pal=humanPal(L);if(ext)ext(pal);
 const mk=(d,s)=>{const rows=humanArt(L,d,s).slice();return fn?fn(rows,d,pal)||rows:rows};
 A={pal,down:mk('down',0),up:mk('up',0),left:mk('left',0),walk:{down:[mk('down',1),mk('down',2)],up:[mk('up',1),mk('up',2)],left:[mk('left',1),mk('left',2)]}}}return A}});return o};
const RED=p=>{p.R='#9A2424'};
const pulse=()=>(Math.sin(Date.now()/320)+1)/2>.25?'#E8F4FF':'#9FC8E8';
/* red Severance marks on a follower: list of [view,row,col] */
const marks=list=>(rows,v)=>{list.forEach(([vv,y,x])=>{if(vv===v)setc(rows,y,x,'R')});return rows};

/* Handry: Ma's straight dark hair, narrow eyes, the dark-red streak on brow, cheek and leg (as in 2장); in the House a plain robe. */
const streak=(rows,view)=>{if(view==='down'){setc(rows,4,5,'R');setc(rows,5,4,'R');setc(rows,6,4,'R');setc(rows,6,5,'R');setc(rows,14,4,'R')}
 else if(view==='left'){setc(rows,4,4,'R');setc(rows,6,4,'R');setc(rows,6,5,'R');setc(rows,14,5,'R')}return rows};
const HANDRY=tuned({hair:'#2A2220',skin:'#D9A47E',shirt:'#76695A',pants:'#5E5446',shoes:'#4A3020',coat:1},streak,RED);
const PLAYER=HANDRY;

/* Sharskin: tall, burly, bald; hands scarlet to the elbows; robe of filmy ancient fabric; silver metal staff; knife at the neck */
const SHARSKIN=tuned({hair:'#A8705A',skin:'#C48A6A',shirt:'#CFCBD8',pants:'#B5B0C2',shoes:'#5A4636',style:'bald',coat:1},(rows,v)=>{
 for(let y=8;y<16;y++)rows[y]=rows[y].replace(/S/g,'R');
 if(v==='down'){setc(rows,10,2,'R');setc(rows,10,13,'R');setc(rows,8,7,'k');for(let y=1;y<16;y++)setc(rows,y,14,y<3?'T':y%3?'t':'T');setc(rows,1,15,'O');setc(rows,1,13,'O')}
 if(v==='left'){setc(rows,8,6,'k');for(let y=1;y<16;y++)setc(rows,y,2,y<3?'T':y%3?'t':'T')}
 if(v==='up')for(let y=1;y<16;y++)setc(rows,y,1,y<3?'T':'t');return rows},p=>{p.R='#A41E1E';p.T='#E4E8EC';p.t='#A4ACB4';p.k='#6E5233'});
const SHAR_BODY_PAL=()=>({O:OL,S:'#C48A6A',H:'#A8705A',C:'#CFCBD8',c:'#ABA6B6',R:'#A41E1E',T:'#E4E8EC',B:'#7A1414',K:'#5A4636'});
/* Ostel: tall, very skinny; Severance painted in patterns on face and chest */
const OSTEL=tuned({hair:'#3A2A20',skin:'#C9966E',shirt:'#8A7A5A',pants:'#5A4E3E',shoes:'#4A3A2A'},marks([['down',4,5],['down',4,10],['down',6,4],['down',6,11],['down',7,7],['down',9,5],['down',9,8],['down',9,10],['left',4,4],['left',6,6],['left',9,6]]),RED);
/* Vernen: broad-shouldered, Marked red almost head to foot */
const VERNEN=tuned({hair:'#4A2018',skin:'#A8483C',shirt:'#5A4A3A',pants:'#4A3E32',belt:'#3A2A20',shoes:'#3A2A20'});
const YERKE=tuned({hair:'#B08A50',skin:'#D2A27A',shirt:'#6A7A4A',pants:'#4A4A3A',style:'spiky'},marks([['down',11,3],['down',6,10],['left',6,5]]),RED);
const VET=tuned({hair:'#9A968E',skin:'#B98462',shirt:'#6E5A44',pants:'#4A3E30',beard:'#9A968E'},(rows,v)=>{for(let y=8;y<16;y++)rows[y]=rows[y].replace(/S/g,'R');return rows},RED);
const YOUNG=tuned({hair:'#4A3020',skin:'#D8A882',shirt:'#5A6A7A',pants:'#3E4450'},marks([['down',6,4],['down',6,5],['left',6,4]]),RED);
const OLD=tuned({hair:'#D8D4CC',skin:'#B07A56',shirt:'#5E4A6E',pants:'#3E3448',style:'bald',coat:1},marks([['down',3,6],['down',3,7],['down',3,8],['left',3,5]]),RED);
const BRO1=tuned({hair:'#2A1E1A',skin:'#C48E66',shirt:'#7A5A44',pants:'#4A3A2E',style:'bun',lashes:1,lips:'#A0605A'},marks([['down',10,2],['down',11,3],['left',10,8]]),RED);
const BRO2=tuned({hair:'#3A3028',skin:'#A87654',shirt:'#5E6A44',pants:'#3E3A30'},marks([['down',7,6],['down',7,9],['left',7,6]]),RED);
const BRO3=tuned({hair:'#2A2420',skin:'#B98462',shirt:'#6A5A4A',pants:'#3E3A30',style:'spiky'});
const BRO4=tuned({hair:'#5A3A22',skin:'#C99470',shirt:'#5A5068',pants:'#3E3448',style:'long',lashes:1,lips:'#A0605A'});
/* Melory (as in 1장 after the Electors): LEFT side swollen, LEFT eye gone, ghostlight in the socket; bruised; roped by the neck */
const elected=(rows,d)=>{
 if(d==='down'){setc(rows,5,9,'Z');setc(rows,5,10,'G');setc(rows,4,9,'X');setc(rows,4,10,'X');setc(rows,4,11,'X');setc(rows,6,9,'X');setc(rows,6,10,'z');setc(rows,6,11,'X');setc(rows,5,11,'X');setc(rows,7,10,'z');setc(rows,3,10,'X')}
 if(d==='left'){setc(rows,5,4,'G');setc(rows,4,4,'X');setc(rows,4,5,'X');setc(rows,6,4,'X');setc(rows,6,5,'z');setc(rows,5,5,'Z')}};
const ML={hair:'#1E1A22',skin:'#C99470',shirt:'#4E3A5E',pants:'#3E3448',style:'long',lashes:1,lips:'#B5565E',coat:1};
const melPal=p=>{p.X='#D69C80';p.z='#7A4A40';p.Z='#1A1018';p.b='#7A4A5A';p.Q='#8A6A42';Object.defineProperty(p,'G',{get:pulse,enumerable:true})};
const MEL_CAPTIVE=tuned(ML,(rows,d)=>{elected(rows,d);if(d==='down'){setc(rows,6,5,'b');for(let x=5;x<=10;x++)setc(rows,8,x,'Q');setc(rows,0,8,'Q')}
 if(d==='left'){setc(rows,6,6,'b');for(let x=5;x<=9;x++)setc(rows,8,x,'Q')}return rows},melPal);
const MEL_FREE=tuned(ML,(rows,d)=>{elected(rows,d);if(d==='down')setc(rows,6,5,'b');return rows},melPal);

/* lying figures (Vernen dead, Ostel knocked out, Sharskin dead): head left, body right */
const lying=(L,blood,staff)=>{let A=null;return {get art(){if(!A){const p=humanPal(L);p.B='#7A1414';p.T='#E4E8EC';p.R='#A41E1E';
 const rows=["................","..OOO...........",".OHHHOOOOOOOOOO.",".OHSSOCCCCCCPPKO",".OSSSOCCcCCCPPKO",".OHSSOCCCCCCPPKO","..OOOOOOOOOOOOO."];
 if(staff)rows.push(".TTTTTTTTTTTTT..");if(blood){rows.push("..BBBB.BB.......")}
 const R=rows.map(r=>r.padEnd(16,'.'));A=flat(L.hands?R.map((r,i)=>i===3?r.slice(0,9)+'R'+r.slice(10):r):R,p)}return A}}};
const VERNEN_DEAD=lying({hair:'#4A2018',skin:'#A8483C',shirt:'#5A4A3A',pants:'#4A3E32',shoes:'#3A2A20'},1);
const OSTEL_DOWN=lying({hair:'#3A2A20',skin:'#C9966E',shirt:'#8A7A5A',pants:'#5A4E3E',shoes:'#4A3A2A'},0);
const SHAR_DEAD=lying({hair:'#A8705A',skin:'#C48A6A',shirt:'#CFCBD8',pants:'#B5B0C2',shoes:'#5A4636',hands:1},1,1);

/* metal servant: ~8 ft; neckless dome head with a curved mirror face; nodules and glassy eyes either side; three jagged letters on
   its left chest; moss and rust in the joints. 16×24. step 1 = frozen mid-step. awake = nodules pulse with Melory's heartbeat. */
function servantRows(step){
 const G=grid(16,24),fill=(a,c,y,k)=>{for(let x=a;x<=c;x++)put(G,x,y,k)};
 [[5,10],[4,11],[3,12],[3,12],[3,12],[3,12],[4,11]].forEach(([a,c],i)=>fill(a,c,i+1,'M'));
 for(let y=2;y<=5;y++)fill(5,10,y+1,'F');fill(6,9,7,'F');put(G,5,3,'f');put(G,6,3,'f');put(G,5,4,'f');fill(6,9,5,'v');put(G,10,6,'v');
 put(G,3,3,'N');put(G,12,3,'N');put(G,3,6,'N');put(G,12,6,'N');put(G,4,5,'E');put(G,11,5,'E');put(G,6,1,'h');put(G,7,1,'h');
 fill(4,11,8,'M');for(let y=9;y<=16;y++){fill(3,12,y,'M');put(G,3,y,'h');put(G,11,y,'m');put(G,12,y,'m')}
 put(G,9,10,'L');put(G,10,11,'L');put(G,9,11,'L');put(G,11,10,'L');put(G,11,11,'L');put(G,10,12,'L');
 put(G,5,13,'N');put(G,4,10,'g');
 for(let y=9;y<=16;y++){put(G,1,y,'M');put(G,2,y,'m');put(G,13,y,'M');put(G,14,y,'m')}
 put(G,2,12,'r');put(G,13,12,'r');put(G,1,13,'g');fill(1,2,17,'D');fill(13,14,17,'D');fill(1,2,18,'D');fill(13,14,18,'D');
 fill(3,12,17,'D');put(G,5,17,'g');put(G,10,17,'r');
 const legEnd=step?20:22;for(let y=18;y<=legEnd;y++)fill(4,6,y,'M');for(let y=18;y<=22;y++)fill(9,11,y,'M');
 put(G,5,20,'r');put(G,10,20,'g');put(G,6,20,'m');put(G,11,20,'m');fill(3,6,legEnd+1,'D');fill(9,12,23,'D');
 return rowsOf(outline(G))}
const SV_PAL=awake=>{const p={O:OL,M:'#857260',m:'#6B5A48',h:'#9A8670',D:'#4D4237',F:'#C9CED3',f:'#F2F6F8',v:'#8FA0B0',E:'#9FB8C8',L:'#2A221C',r:'#8A4A24',g:'#4F6B3A'};
 Object.defineProperty(p,'N',{get(){if(!awake)return '#3E4A4E';const k=Date.now()%1000;return k<110||(k>230&&k<330)?'#E8F4FF':'#5A7A88'},enumerable:true});return p};
const SV_STAND=servantRows(0),SV_STEP=servantRows(1);
const SERVANT_FROZEN={art:flat(SV_STEP,SV_PAL(0))};
const SERVANT_AWAKE={art:flat(SV_STAND,SV_PAL(1))};
const SV_TILE_PAL=SV_PAL(0);

/* the hologram: faint, flickering, desaturated — blue-green world → silver dart → green world → purple-green forest (no villages) */
const HOLO_PAL={B:'rgba(110,160,190,.8)',G:'rgba(120,170,130,.8)',g:'rgba(90,130,100,.75)',l:'rgba(220,240,240,.85)',S:'rgba(214,220,226,.9)',W:'rgba(255,255,255,.95)',
 P:'rgba(140,100,160,.8)',p:'rgba(100,80,120,.7)',z:'rgba(170,220,230,.16)',y:'rgba(170,220,230,.3)',O:OL,d:'#3A3430',e:'#5A5048',k:'#6FB0B0'};
function holoRows(kind,flick){
 const G=grid(16,24);
 for(let y=12;y<=20;y++){const hw=Math.round(1+(20-y)*.65);for(let x=8-hw;x<8+hw;x++)put(G,x,y,(x+y)%3?'z':'y')}
 const cx=7.5,cy=6.5;
 if(kind==='earth'||kind==='green')for(let y=1;y<=12;y++)for(let x=2;x<=13;x++){const d=(x-cx)**2+(y-cy)**2;if(d<=27){
  const n=(x*7+y*13)%5;put(G,x,y,d>21?'l':kind==='earth'?(n<2?'G':'B'):(n<2?'g':'G'))}}
 if(kind==='dart'){seg(G,3,10,11,4,'S');seg(G,3,11,10,5,'S');put(G,11,3,'W');put(G,12,3,'W');put(G,1,12,'y');put(G,2,11,'y');put(G,0,13,'z')}
 if(kind==='forest')for(let x=1;x<=14;x++){const top=5+Math.round(Math.sin(x*1.3)*1.5);for(let y=top;y<=11;y++)put(G,x,y,y===top?'l':(x+y)%4===0?'p':(x*3+y)%5<2?'G':'P')}
 if(flick)for(let y=1;y<=12;y+=2)for(let x=0;x<16;x++)if(G[y][x]!=='.')G[y][x]=(x%3?'.':'z');
 fillRow(G,21,6,9,'e');fillRow(G,22,5,10,'d');fillRow(G,23,4,11,'d');put(G,7,21,'k');put(G,8,21,'k');
 return rowsOf(G)}
function fillRow(G,y,a,c,k){for(let x=a;x<=c;x++)put(G,x,y,k)}
const HOLO=frames(['earth','earth','earth!','dart','dart','green','green','green!','forest','forest','forest!'].map(k=>flat(holoRows(k.replace('!',''),k.includes('!')),HOLO_PAL)),650);

/* the House's speaking console: a grille and slowly blinking lights */
const blinkC=(on,off,ms,ph)=>({get(){return Math.floor(Date.now()/ms+ph)%3===0?on:off},enumerable:true});
const HOUSE={art:flat([
 "....OOOOOOOO....",
 "...OddddddddO...",
 "..OdSSSSSSSSdO..",
 "..OdSsSsSsSsdO..",
 "..OdSSSSSSSSdO..",
 "..OdsSsSsSsSdO..",
 "..OdSSSSSSSSdO..",
 "..OddddddddddO..",
 ".OMMMMMMMMMMMMO.",
 ".OMaMtMaMtMaMMO.",
 ".OhhhhhhhhhhhhO.",
 ".OmmmmmmmmmmmmO.",
 "..OMMMMMMMMMMO..",
 "..OMmmmCmmmmMO..",
 "..OMMMMMMMMMMO..",
 "..OMmmmmmmCmMO..",
 "..OMMMMMMMMMMO..",
 ".OOMMMMMMMMMMOO.",
 ".ODDDDDDDDDDDDO.",
 ".OOOOOOOOOOOOOO."],Object.defineProperties({O:OL,d:'#3A322A',S:'#5A4E42',s:'#1E1A16',M:'#6B5A48',m:'#5A4B3C',h:'#857260',D:'#4D4237',C:'#C9CED3'},
 {a:blinkC('#E8A64A','#6A4A22',500,0),t:blinkC('#7FD0C8','#2E4A48',700,1)}))};
/* bent metal bed of the medical room */
const MEDBED={art:flat([
 "................",
 "................",
 "...O.........O..",
 "..OMO.......OMO.",
 "..OMOOOOOOOOOMO.",
 ".OhhhhhhhhhhhhhO",
 ".OMMMMMMMMMMMMMO",
 ".OmmmmmmOOmmmmmO",
 "..OOMOOO..OOOMO.",
 "...OMO.....OMO..",
 "..OMO.......OMO.",
 "..OO.........OO."],{O:OL,M:'#857260',m:'#6B5A48',h:'#C9CED3'})};
/* a root forcing through the wall's foot; after cutting, a stump weeping pale sap */
const ROOT_PAL={O:OL,R:'#6A5642',r:'#4A3A2E',h:'#8A7458',S:'#E8E2C8',s:'#C9CED3',d:'#3A2E24'};
const rootRows=sw=>{const G=grid(16,16);for(let i=0;i<9;i++){const y=14-i,x=13-Math.round(i*.9)+(i>5?sw:0);put(G,x,y,'R');put(G,x+1,y,'r');put(G,x-1,y,i%2?'h':'R')}
 seg(G,12,13,15,15,'r');seg(G,8,10,4,9,'R');put(G,3,9,'h');put(G,6,12,'d');put(G,14,10,'s');put(G,15,9,'s');return rowsOf(outline(G))};
const ROOT_LIVE=frames([0,1,0,-1].map(sw=>flat(rootRows(sw),ROOT_PAL)),500);
const ROOT_CUT={art:flat(rowsOf(outline((()=>{const G=grid(16,16);for(let y=11;y<=14;y++){put(G,12,y,'R');put(G,13,y,'r');put(G,11,y,'h')}put(G,12,10,'S');put(G,11,10,'S');put(G,13,10,'S');put(G,12,11,'S');seg(G,3,14,7,13,'R');return G})())),ROOT_PAL)};
const ROOT={get art(){return (f().root?ROOT_CUT:ROOT_LIVE).art}};
/* a crack spilling earth; after the work, soil sacks packed against it */
const CRACK_OPEN={art:flat([
 "................","................","................","................",
 "..O.............","..OdO...........","...OdO..........","...OddO.........",
 "....OdO.....O...","....OddOO..OdO..","...OdddddOOdddO.","..OdDdddDddddddO",
 ".OddddDddddDdddO",".OdDddddddddddDO","OddddddDdddddddO","OOOOOOOOOOOOOOOO"],{O:OL,d:'#5E4A36',D:'#3A2C20'})};
const CRACK_DONE={art:flat([
 "................","................","................","................",
 "................","....OOO...OOO...","...OsYsO.OsYsO..","..OSSSSSOSSSSSO.",
 "..OSSsSSOSSsSSO.","..OSSSSSOSSSSSO.",".OOSSSSOOOSSSSOO",".OsYsOSSSSSOsYsO","OSSSSOSSsSSOSSSO","OSSsSOSSSSSOSsSO",
 "OSSSSOSSSSSOSSSO","OOOOOOOOOOOOOOOO"],{O:OL,S:'#8A7050',s:'#6E5638',Y:'#C9B07A'})};
const CRACK={get art(){return (f().crack?CRACK_DONE:CRACK_OPEN).art}};
/* Handry's sleeping place: hide, moss and a scrap of filmy cloth */
const BUNK={art:flat([
 "................","................","................","................","................","................",
 "................","..OOOOOOOOOOOO..",".OggHHHHHHHHHHO.",".OggHhHHHHhHHcO.",".OgHHHHhHHHHccO.",".OHHHhHHHHHcccO.",
 ".OHhHHHHHhHHccO.","..OOOOOOOOOOOO..","................","................"],{O:OL,H:'#8A6A44',h:'#6E5233',g:'#4F6B3A',c:'rgba(214,210,226,.85)'})};

/* ---------------- tiles ---------------- */
const tn=(x,y)=>{const c=at(x,y);return c!=null&&Z.legend[c]?Z.legend[c].tile:null};
const WALLISH=new Set(['wall','wallW','wallR','wallG','door2','alcT','alcB','bwall','ring','rdoor','passage','exitDoor','hatchUp','vine','fin','odoor']);
const isW=(x,y)=>WALLISH.has(tn(x,y));
const clipT=(X,Y,fn)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn();g.restore()};
const oval=(cx,cy,rx,ry,c)=>{for(let dy=-ry;dy<=ry;dy++){const w=Math.round(rx*Math.sqrt(Math.max(0,1-(dy/ry)**2)));r(cx-w,cy+dy,w*2,1,typeof c==='function'?c(dy):c)}};
const BUR=()=>ZID==='buried';
/* corroded hull metal: grey-brown patina, panel seams, silver where roots tore it, moss in the corners */
function wallBase(X,Y,x,y,t){
 const h=hash(x,y),dk=BUR(),fr=!isW(x,y+1)&&at(x,y+1)!=null;
 r(X,Y,16,16,dk?'#2A231D':'#352D26');
 if(x%2===0)r(X,Y,1,fr?8:16,dk?'#241E19':'#2E2720');if(y%2===0)r(X,Y,16,1,dk?'#241E19':'#2E2720');
 if(!isW(x,y-1)&&at(x,y-1)!=null)r(X,Y,16,1,'#5E5040');
 if(h%6===0){r(X+2,Y+2,1,1,'#4D4237');r(X+13,Y+2,1,1,'#4D4237')}
 if(fr){r(X,Y+8,16,8,dk?'#55473A':'#6B5A48');r(X,Y+8,16,1,dk?'#6B5A48':'#857260');for(let i=(h%5)+1;i<16;i+=5)r(X+i,Y+9,1,6,dk?'#4A3E32':'#5A4B3C');
  r(X,Y+15,16,1,'#2E2720');if(h%3===0)r(X+(h%9)+2,Y+11+(h%3),3+(h%3),1,'#C9CED3');if(h%4===1){r(X+1,Y+13,4,2,'#4F6B3A');r(X+2,Y+12,2,1,'#5F7E44')}
  if(dk){r(X+(h%12)+1,Y+8,2,4+(h%4),'#4A3A2C');r(X+((h*7)%12)+2,Y+8,1,3,'#4A3A2C')}}
 else if(h%11===2){r(X+(h%10)+2,Y+(h%9)+3,3,1,'#6B5A48')}
 return fr}
const glyph=(X,Y,k)=>{const c='#2A221C';const s=[[0,0,0,5],[1,1,2,0],[1,3,2,5]][k%3];r(X,Y,1,6,c);r(X+1,Y+s[1],1,1,c);r(X+2,Y+s[0],1,1,c);r(X+1,Y+s[3]-2,1,1,c);r(X+2,Y+s[2]+3,1,1,c);r(X+3,Y+1+(k%4),1,3,c)};
const wall=(X,Y,x,y,t)=>{wallBase(X,Y,x,y,t)};
const wallW=(X,Y,x,y,t)=>{const fr=wallBase(X,Y,x,y,t);const h=hash(x,y);if(fr){glyph(X+2,Y+9,h);glyph(X+7,Y+9,h+1);glyph(X+12,Y+9,h+2)}else{glyph(X+3,Y+5,h);glyph(X+9,Y+4,h+2)}};
const wallR=(X,Y,x,y,t)=>{const fr=wallBase(X,Y,x,y,t);const g0=Math.round(Math.sin(t/1900+x)*1);
 r(X+3,Y,4,16,'#6A5642');r(X+4,Y,1,16,'#8A7458');r(X+6,Y,1,16,'#4A3A2E');r(X+2,Y+2,1,4,'#C9CED3');r(X+7,Y+9,1,5,'#C9CED3');
 r(X+7,Y+6,6+g0,3,'#6A5642');r(X+7,Y+6,6+g0,1,'#8A7458');r(X+12+g0,Y+7,2,1,'#4A3A2E');if(fr){r(X+1,Y+13,9,3,'#4A3A2E');r(X+2,Y+13,7,1,'#6A5642')}};
/* the hill outside: vines and moss over the hull; worn fins in a row */
const vine=(X,Y,x,y,t)=>{const h=hash(x,y),sw=Math.round(Math.sin(t/1400+x*.7+y));r(X,Y,16,16,'#34462C');
 if(h%3===0){r(X+(h%8)+2,Y+(h%6)+3,5,4,'#5A4B3C');r(X+(h%8)+2,Y+(h%6)+3,5,1,'#6B5A48');r(X+(h%8)+3,Y+(h%6)+4,2,1,'#C9CED3')}
 for(let i=0;i<4;i++){const vx=(h*(i+3)+i*4)%15;for(let j=0;j<16;j+=2)r(X+vx+((j>>2)+i)%2*sw,Y+j,1,2,i%2?'#2A3A22':'#4F6B3A')}
 [[2,3],[10,9],[6,13]].forEach(([a,c],i)=>{if((h+i)%2){r(X+a+sw,Y+c,3,2,i%2?'#5B2A6E':'#5F7E44');r(X+a+sw,Y+c,1,1,'#9A5AAE')}})};
const fin=(X,Y,x,y,t)=>{vine(X,Y,x,y,t);r(X+4,Y+3,8,12,OL);r(X+5,Y+4,6,11,'#6B5A48');r(X+6,Y+2,4,2,OL);r(X+7,Y+3,2,2,'#857260');r(X+5,Y+4,2,10,'#857260');r(X+9,Y+6,2,8,'#4D4237');r(X+5,Y+12,6,3,'#4F6B3A')};
const ground=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#3E4A30');r(X+(h%12)+1,Y+(h*7%12)+2,2,1,'#4E5E3A');r(X+(h*3%12)+2,Y+(h*5%11)+3,1,2,'#4E5E3A');
 if(h%4===0){r(X+(h%11)+3,Y+(h%9)+4,1,2,'#5B2A6E');r(X+(h%11)+4,Y+(h%9)+3,1,2,'#7E3F8F')}if(h%9===1)r(X+(h*7%12)+2,Y+(h%10)+3,1,1,'#C9E89A')};
const tree=(X,Y,x,y,t)=>{ground(X,Y,x,y,t);const sw=Math.round(Math.sin(t/1600+x));oval(X+8,Y+14,6,2,'rgba(0,0,0,.3)');r(X+7,Y+9,2,6,'#4A362A');r(X+7,Y+9,1,6,'#6A5040');
 oval(X+8+sw,Y+6,7,5,OL);oval(X+8+sw,Y+6,6,4,dy=>dy<-2?'#9A5AAE':dy<1?'#7E3F8F':'#5B2A6E');r(X+4+sw,Y+4,2,1,'#B07ACB');r(X+10+sw,Y+7,2,2,'#2F5A3A')};
/* the low square door with rounded corners; plants cut back sharply around it */
const odoor=(X,Y,x,y,t)=>{vine(X,Y,x,y,t);r(X+1,Y,14,16,'#2A3A22');r(X+1,Y,1,16,'#6A5642');r(X+14,Y,1,16,'#6A5642');for(let j=1;j<16;j+=3){r(X,Y+j,2,1,'#8A7458');r(X+14,Y+j,2,1,'#8A7458')}
 r(X+2,Y+1,12,15,'#6B5A48');r(X+3,Y+2,10,14,'#16120F');r(X+3,Y+2,1,1,'#6B5A48');r(X+12,Y+2,1,1,'#6B5A48');r(X+2,Y+1,12,1,'#857260');r(X+4,Y+12,8,4,'#3A3129');r(X+5,Y+13,6,1,'#4D4237')};
const deck=(X,Y,x,y,t)=>{const h=hash(x,y),dk=BUR();r(X,Y,16,16,dk?'#4A4036':'#5C4E40');r(X,Y,16,1,dk?'#3A3129':'#4A3E33');r(X,Y,1,16,dk?'#3A3129':'#4A3E33');r(X+1,Y+1,14,1,dk?'#52463A':'#66584A');
 if(h%7===0){r(X+2,Y+2,1,1,'#857260');r(X+13,Y+13,1,1,'#857260')}
 if(h%5===0){r(X+(h%9)+2,Y+(h%7)+5,4,2,'#4F6B3A');r(X+(h%9)+3,Y+(h%7)+4,2,1,'#5F7E44')}
 if(h%29===3)r(X+(h%9)+2,Y+(h%7)+6,3,1,'#9A8670');
 if(!dk&&h%31===7){oval(X+8,Y+8,5,3,'#7A5E3E');r(X+5,Y+7,6,1,'#8A6A44');r(X+3,Y+9,1,1,'#7A5E3E');r(X+12,Y+6,1,1,'#7A5E3E')}
 if(dk){r(X+(h%10)+1,Y+(h*3%10)+2,6,3,'#4A3A2C');r(X+(h%10)+2,Y+(h*3%10)+1,4,1,'#4A3A2C');if(h%3===0)r(X+(h*7%12)+2,Y+(h%11)+3,3,2,'#5E4A36')}
 if(!dk&&isW(x,y-1))r(X,Y,16,3,'rgba(0,0,0,.22)')};
const shaft=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);if(f().night&&!f().sharDead)return;g.fillStyle='rgba(255,232,170,.32)';g.beginPath();g.ellipse(X+8,Y+9,7,5,0,0,7);g.fill();
 g.fillStyle='rgba(255,240,200,.24)';g.fillRect(X+5,Y,6,9);g.fillStyle='rgba(255,250,230,.35)';g.fillRect(X+6,Y+7,4,3);for(let i=0;i<3;i++){const k=(Math.floor(t/140)+i*7+x*3)%16;r(X+5+((i*5+x)%6),Y+15-k,1,1,'rgba(255,245,220,.8)')}};
const airlock=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);for(let i=2;i<15;i+=3)r(X+i,Y+3,1,10,'#4A3E33');r(X+1,Y+3,14,1,'#4A3E33');r(X+1,Y+12,14,1,'#4A3E33');
 if(y===8){r(X,Y+7,16,2,'#8A6A3A');for(let i=0;i<16;i+=4)r(X+i,Y+7,2,2,'#2E2720')}};
const rdoorDraw=(X,Y)=>{r(X,Y,7,16,'#7A4A2A');r(X,Y,7,1,'#9A6A3A');r(X+6,Y,1,16,OL);r(X+1,Y+3,4,1,'#5A3418');r(X+1,Y+9,4,1,'#5A3418');r(X+2,Y+5,1,1,'#C9A86A');r(X+3,Y+12,2,2,'#4F6B3A');r(X,Y+14,7,2,'#4A2E1A')};
const idoor=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);rdoorDraw(X,Y)};
const blocks=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);const h=hash(x,y);r(X+1,Y+3,14,12,OL);r(X+2,Y+4,12,4,'#857260');r(X+2,Y+8,12,6,'#6B5A48');r(X+2,Y+4,12,1,'#9A8670');
 r(X+7,Y+8,1,6,'#4D4237');glyph(X+3,Y+9,h);if(h%2)r(X+9,Y+10,3,1,'#C9CED3')};
const nook=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);const h=hash(x,y);oval(X+8,Y+9,7,5,OL);oval(X+8,Y+9,6,4,dy=>dy<-2?'#A07C50':'#8A6A44');for(let i=3;i<14;i+=3)r(X+i,Y+8+(i%2),1,3,'#6E5233');
 oval(X+4,Y+7,3,2,'#4F6B3A');r(X+3,Y+6,3,1,'#5F7E44');g.fillStyle='rgba(214,210,226,.6)';g.fillRect(X+8+(h%2),Y+9,6,4);r(X+9,Y+9,4,1,'rgba(240,238,250,.8)')};
const passage=(X,Y,x,y,t)=>{wallBase(X,Y,x,y,t);r(X+2,Y,12,16,'#2A221C');const p=(Math.sin(t/900)+1)/2;g.fillStyle=`rgba(232,166,74,${.35+p*.15})`;g.fillRect(X+3,Y,10,16);r(X+2,Y,1,16,'#857260');r(X+13,Y,1,16,'#4D4237')};
const hatch=(X,Y,x,y,t)=>{wallBase(X,Y,x,y,t);r(X+2,Y,12,16,'#120E0B');for(let j=0;j<5;j++)r(X+3,Y+1+j*3,10,1,['#4D4237','#3A3129','#2A231D','#1E1915','#16120F'][j]);r(X+2,Y,1,16,'#857260');r(X+13,Y,1,16,'#4D4237')};
/* the memory stone (기억 돌): a mossy carved stone by the House's door; the carvings glow ghostlight while words wait for review */
const memStone=(X,Y,x,y,t)=>{ground(X,Y,x,y,t);const due=state&&dueWords().length>0,p=(Math.sin(t/380)+1)/2;
 oval(X+8,Y+14,7,2,'rgba(0,0,0,.35)');
 const prof=[3,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0];for(let j=0;j<16;j++){const k=prof[j],py=Y-2+j;r(X+2+k,py,12-2*k,1,OL);if(j>0&&j<15)r(X+3+k,py,10-2*k,1,j<3?'#8E9888':j>12?'#4E564C':'#6A7266')}
 r(X+11,Y+1,2,11,'#525A50');r(X+3,Y+1,1,11,'#8E9888');r(X+4,Y-1,5,2,'#4F6B3A');r(X+10,Y+9,3,3,'#4F6B3A');
 const c=due?`rgba(232,244,255,${.55+p*.45})`:'#454E44';
 r(X+6,Y+2,4,1,c);r(X+9,Y+2,1,4,c);r(X+6,Y+5,4,1,c);r(X+6,Y+3,1,2,c);r(X+5,Y+8,6,1,c);r(X+7,Y+10,2,2,c);
 if(due){g.fillStyle=`rgba(232,244,255,${.10+p*.08})`;g.fillRect(X+1,Y-3,14,17);for(let i=0;i<3;i++){const k=(Math.floor(t/120)+i*9)%20;r(X+5+((i*3+k)%6),Y-2-k/3,1,1,`rgba(232,244,255,${1-k/20})`)}}};
/* bridge: alcoves with servants (16×24 drawn across two tiles), consoles, cracked honeycomb, projector, medical panels */
const niche=(X,Y,top)=>{r(X,Y,16,16,'#2A231D');r(X,Y,2,16,'#6B5A48');r(X+14,Y,2,16,'#4D4237');r(X+1,Y,1,16,'#857260');if(top){r(X,Y,16,3,'#4D4237');r(X+2,Y+3,12,1,'#3A3129')}else{r(X,Y+14,16,2,'#857260');r(X,Y+15,16,1,'#4D4237')}};
const servantGone=x=>x===4&&(f().svOut||f().sharDead);
const alcT=(X,Y,x,y,t)=>{niche(X,Y,1);if(!servantGone(x))drawArt(SV_STAND,SV_TILE_PAL,X,Y+16)};
const alcB=(X,Y,x,y,t)=>{niche(X,Y,0);if(!servantGone(x))drawArt(SV_STAND,SV_TILE_PAL,X,Y);else{r(X+4,Y+12,8,2,'#3A3129');r(X+5,Y+10,2,2,'#4F6B3A')}};
const screenC=(X,Y,x,t,cracked)=>{const on=(Math.floor(t/430)+x)%7!==0;r(X+3,Y+4,10,5,'#1E2A2A');if(on){r(X+4,Y+5,6,1,'rgba(127,208,200,.45)');r(X+4,Y+7,4,1,'rgba(232,166,74,.4)')}};
const consoleT=(X,Y,x,y,t,cracked)=>{deck(X,Y,x,y,t);r(X+1,Y+2,14,12,OL);r(X+2,Y+3,12,10,'#3A332C');r(X+2,Y+3,12,1,'#5A4E42');r(X+1,Y+2,1,1,'#5C4E40');r(X+14,Y+2,1,1,'#5C4E40');
 screenC(X,Y,x,t);[[3,10],[6,10],[9,10],[12,10]].forEach(([a,c],i)=>r(X+a,Y+c,2,1,(Math.floor(t/600)+i+x)%4===0?'#E8A64A':'#5A4E42'));r(X+2,Y+13,12,2,'#2A231D');
 if(cracked){g.save();g.beginPath();g.moveTo(X+3,Y+3);g.lineTo(X+9,Y+6);g.lineTo(X+6,Y+9);g.lineTo(X+12,Y+12);g.lineTo(X+8,Y+13);g.lineTo(X+2,Y+8);g.closePath();g.clip();
  r(X,Y,16,16,'#2A2418');for(let yy=0;yy<16;yy+=3)for(let xx=(yy/3%2)*2;xx<16;xx+=4){r(X+xx,Y+yy,3,2,'#9A8A5A');r(X+xx+1,Y+yy,1,1,'#C9B07A')}g.restore();r(X+9,Y+6,1,1,OL);r(X+6,Y+9,1,1,OL)}};
const cons=(X,Y,x,y,t)=>consoleT(X,Y,x,y,t,0);
const consK=(X,Y,x,y,t)=>consoleT(X,Y,x,y,t,1);
const proj=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);oval(X+8,Y+9,7,5,OL);oval(X+8,Y+9,6,4,'#3A3430');oval(X+8,Y+9,4,2,'#5A5048');const p=(Math.sin(t/300)+1)/2;r(X+7,Y+8,2,2,`rgba(127,208,200,${.4+p*.5})`)};
const wallG=(X,Y,x,y,t)=>{const fr=wallBase(X,Y,x,y,t);if(!fr)return;r(X+2,Y+8,12,7,'#24403E');for(let j=0;j<6;j++){const o=Math.round(Math.sin(t/500+j*.9+x)*2);r(X+3+o+((j*3)%5),Y+9+j,6,1,j%2?'rgba(95,168,160,.9)':'rgba(140,210,200,.6)')}
 r(X+2,Y+8,12,1,'#5FA8A0')};
const medGlow=(X,Y,x,y)=>{if(x>=17&&x<=22&&y>=3&&y<=8){const p=(Math.sin(performance.now()/700+y)+1)/2;g.fillStyle=`rgba(95,168,160,${.06+p*.05})`;g.fillRect(X,Y,16,16)}};
const bed=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);const k=hash(x,y)%2;r(X+1,Y+4,14,1,OL);r(X+1,Y+5,14,2,'#9A8670');r(X+1,Y+5,14,1,'#C9CED3');
 for(let i=0;i<7;i++)r(X+2+i*2,Y+7+(k?Math.floor(i/3):0),1,1,'#6B5A48');r(X+1,Y+7,1,6,'#857260');r(X+14,Y+7,1,4+k*3,'#857260');r(X+8,Y+9+k,6,1,'#6B5A48');
 r(X+1,Y+12,2,1,OL);r(X+13,Y+11+k*3,2,1,OL);r(X+3,Y+13,10,1,'rgba(0,0,0,.25)')};
const door2=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);rdoorDraw(X,Y)};
const exitDoor=(X,Y,x,y,t)=>{wallBase(X,Y,x,y,t);r(X+2,Y,12,16,'#2A221C');r(X+3,Y,10,16,'#3A3129');r(X+2,Y,1,16,'#857260')};
/* buried chambers: earth everywhere, roots, soil sacks, a rope ring on the wall, rusted doors jammed half-open with dirt */
const dirt=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#4A3A2C');r(X+(h%12)+1,Y+(h*7%12)+2,2,1,'#5E4A36');r(X+(h*3%12)+2,Y+(h*5%11)+3,1,1,'#3A2C20');
 if(h%4===0){r(X+(h%11)+3,Y+(h%9)+4,2,1,'#6E6252');r(X+(h%11)+3,Y+(h%9)+3,2,1,'#8A7C68')}if(h%5===1){r(X+(h*7%12)+2,Y+(h%10)+3,3,2,'#4F6B3A')}};
const mound=(X,Y,x,y,t)=>{dirt(X,Y,x,y,t);const h=hash(x,y),up=tn(x,y-1)==='mound',dn=tn(x,y+1)==='mound';r(X,Y+(up?0:3),16,dn?16:10,'#5E4A36');if(!up){r(X,Y+3,16,1,'#6E5A44');r(X+(h%10)+2,Y+2,4,2,'#4F6B3A')}
 if(!dn){r(X,Y+13,16,3,'#3A2C20');r(X,Y+12,16,1,'#4A3A2C')}r(X+(h%12)+1,Y+(h%6)+6,3,1,'#4A3A2C');if(h%3===0){r(X+(h%8)+4,Y+5,1,7,'#6A5642');r(X+(h%8)+5,Y+6,1,5,'#4A3A2E')}};
const sacks=(X,Y,x,y,t)=>{deck(X,Y,x,y,t);[[1,6],[8,5],[4,9]].forEach(([a,c])=>{r(X+a,Y+c,7,6,OL);r(X+a+1,Y+c+1,5,4,'#8A7050');r(X+a+1,Y+c+1,5,1,'#A08660');r(X+a+3,Y+c,1,1,'#C9B07A')})};
const rootsT=(X,Y,x,y,t)=>{dirt(X,Y,x,y,t);const h=hash(x,y);for(let i=0;i<16;i++){const yy=Math.round(8-5*Math.sin(Math.PI*(i+1)/17+(h%3)*.3));r(X+i,Y+yy,1,4,'#6A5642');r(X+i,Y+yy,1,1,'#8A7458');if((i+h)%4===0)r(X+i,Y+yy+1,1,3,'#3A2E24')}
 r(X+(h%6)+2,Y+2,2,13,'#4A3A2E');r(X+(h%6)+2,Y+2,1,13,'#6A5642')};
const ring=(X,Y,x,y,t)=>{const fr=wallBase(X,Y,x,y,t);oval(X+8,Y+10,3,3,'#8F7F6A');oval(X+8,Y+10,2,2,'#3A3129');r(X+7,Y+7,2,1,'#C9CED3');
 const F=f();if(F.interro&&!F.free){r(X+7,Y+12,2,4,'#8A6A42');r(X+7,Y+12,1,4,'#A88A5A')}else if(F.free){r(X+7,Y+12,2,2,'#8A6A42');r(X+6,Y+13,1,1,'#A88A5A')}};
const rdoor=(X,Y,x,y,t)=>{wallBase(X,Y,x,y,t);r(X+1,Y,14,16,'#2A231D');rdoorDraw(X+1,Y);r(X+8,Y+6,7,10,'#4A3A2C');r(X+8,Y+6,7,1,'#5E4A36');r(X+10,Y+9,2,1,'#3A2C20')};
const hatchUp=(X,Y,x,y,t)=>{wallBase(X,Y,x,y,t);r(X+2,Y,12,16,'#2A221C');for(let j=0;j<5;j++)r(X+3,Y+14-j*3,10,1,['#4D4237','#5A4B3C','#6B5A48','#857260','#9A8670'][j]);
 g.fillStyle='rgba(255,230,170,.18)';g.fillRect(X+3,Y,10,8)};
/* light: night over the hall; amber evenings on the bridge; a small circle of light below ground */
function post(X,Y,t,x,y){
 const F=f();
 if(ZID==='entry'){if(F.night&&!F.sharDead&&x>=6)r(X,Y,16,16,'rgba(6,8,22,.58)')}
 else if(ZID==='bridge'){medGlow(X,Y,x,y);
  const eve=(F.work&&!F.sermon)||(F.ownVoice&&F.fed&&!F.done)?.3:.08;g.fillStyle=`rgba(232,166,74,${eve})`;g.fillRect(X,Y,16,16);
  if(F.night&&!F.sharDead)r(X,Y,16,16,'rgba(6,8,22,.45)')}
 else if(ZID==='buried'){const px=player.x*16+8-CAM.x,py=player.y*16+8-CAM.y,cx=X+8,cy=Y+8,d=Math.hypot(cx-px,cy-py);
  const a=Math.min(F.night&&!F.sharDead?.82:.66,Math.max(0,(d-26)/70));if(a>0){g.fillStyle=`rgba(8,6,4,${a})`;g.fillRect(X,Y,16,16)}}
}
const RAW={wall,wallW,wallR,vine,fin,ground,tree,odoor,deck,shaft,airlock,idoor,blocks,nook,passage,hatch,terminal:memStone,
 alcT,alcB,cons,consK,proj,wallG,bed,door2,exitDoor,dirt,mound,sacks,rootsT,ring,rdoor,hatchUp,bwall:wall};
const TILES={};Object.entries(RAW).forEach(([k,fn])=>{TILES[k]=(X,Y,x,y,t)=>{clipT(X,Y,()=>{fn(X,Y,x,y,t);post(X,Y,t,x,y)})}});

/* spots: every tile of a kind gets one of a few lines */
function autoSpots(map,kinds,extra){const o={};map.forEach((row,y)=>[...row].forEach((c,x)=>{const k=kinds[c];if(!k)return;const key=x+','+y;
 if(typeof k==='function')Object.defineProperty(o,key,{get:k,enumerable:true,configurable:true});else o[key]=k[(x*7+y*13)%k.length]}));
 Object.entries(extra||{}).forEach(([k,v])=>{if(typeof v==='function')Object.defineProperty(o,k,{get:v,enumerable:true,configurable:true});else o[k]=v});return o}

/* ---------------- zones ---------------- */
const ENTRY_MAP=[
"TTTTTv^vvv^vvvv^vvvv^vvv",
"T,,,,vWWWWWWwWWW>WWwWWWv",
"T,,T,vWWWW.bb......bb.Wv",
"T,,,,vWWWW..L....L....rv",
"T,,,,vWWWW............Wv",
"T,S,,vWWWW............rv",
"T,,,,vaaaW............Wv",
"T,,,,vaaaW............Wv",
",,,,,DaaaI............Wv",
"T,,,,vaaaW............Wv",
"T,,,,vaaaW............Wv",
"T,,T,vWWWW............Wv",
"T,,,,vWWWW............Wv",
"T,,,,vWWWWnn.nn....nn.Wv",
"TT,,,vWWWWWWwWWW<WWWWWWv",
"TTTTTvvvvvvvvvvvvvvvvvvv"];
const BRIDGE_MAP=[
"WWWWWWWWWWWWWWWWWWWWWWWW",
"WWaWaWaWaWaWaWaWWWWWWWWW",
"WWAWAWAWAWAWAWAWWgWWgWWW",
"W...............W......W",
"W.ccc.......ccc.W.m.m..W",
"W...............W......W",
"W..c.........c..d......W",
"W.......p.......W......W",
"W..k.........c..W..m...W",
"W...............WWWWWWWW",
"W......................W",
"W..ccc.......kcc.......W",
"W......................W",
"W......................W",
"W......................W",
"WWWWWWWWEWWWWWWWWWWWWWWW"];
const BURIED_MAP=[
"WWWWWhWWWWWWUWWWWWWWWWWW",
"WXXs....d.......XXrXXXXW",
"WXs..d....d.....XXXXXXXW",
"Wr.........d...WWWWoWWWW",
"WX.............W.......W",
"h....d.........W.......W",
"WX...ss........W.......W",
"WXX............d.......W",
"Wr....d........W.......W",
"WX.............WWWWWWWWW",
"WXX.....d..............W",
"Ws...rr.........ss...XXW",
"WX......d.............Xh",
"WXXs.......d.......XXXXW",
"WXXXXX......XXXXXXXXXXXW",
"WWWWWWWWWWWWWWWWWWWWWWWW"];
const ZONES={
 entry:{name:'조상의 집 · 아치 홀',reg:'HOUSE OF OUR ANCESTORS · ENTRY',
  legend:{'T':{tile:'tree'},',':{tile:'ground',walk:1},'v':{tile:'vine'},'^':{tile:'fin'},'S':{tile:'terminal'},'D':{tile:'odoor',walk:1},'a':{tile:'airlock',walk:1},
   'I':{tile:'idoor',walk:1},'W':{tile:'wall'},'w':{tile:'wallW'},'r':{tile:'wallR'},'.':{tile:'deck',walk:1},'L':{tile:'shaft',walk:1},'b':{tile:'blocks'},
   'n':{tile:'nook'},'>':{tile:'passage',walk:1},'<':{tile:'hatch',walk:1}},
  map:ENTRY_MAP,
  rooms:[[0,1,4,14,'조상의 집 · 언덕 앞'],[6,6,8,10,'조상의 집 · 두 겹 문'],[10,11,21,13,'조상의 집 · 잠자리']],
  warps:{'16,1':{to:'bridge',x:8,y:14,dir:'up',lock:()=>!f().ate&&'형제들이 웃으며 막아요. "먼저 먹어, 새 형제."'},
   '16,14':{to:'buried',x:12,y:1,dir:'down',lock:()=>!(f().saw&&b('목소리'))&&'아래는 캄캄해요. 흙냄새가 나요. 아직 내려갈 일이 없어요.'}},
  spots:autoSpots(ENTRY_MAP,{
   'v':['덩굴과 이끼가 언덕을 덮었어요. 그 밑은 차가운 벽이에요.','작은 나무도 자라요. 언덕이 마을보다 커요.'],
   '^':['지느러미 같은 혹이에요. 닳았어요. 줄지어 서 있어요.'],
   'T':['보라색 잎이 달린 작은 나무예요.'],
   'W':['벽이 회갈색이에요. 긁힌 곳은 은색으로 빛나요.','벽에 녹이 슬었어요. 구석에 이끼가 있어요.'],
   'w':['벽에 뾰족뾰족한 글자가 있어요. 아무도 못 읽어요.'],
   'r':['뿌리가 벽을 찢고 들어왔어요. 찢긴 곳이 은색이에요.'],
   'b':['네모난 덩어리들이에요. 금속 위에 뾰족한 글자가 있어요.'],
   'n':()=>f().night&&!f().sharDead?'형제들이 자고 있어요. 숨소리만 들려요.':'형제들의 잠자리예요. 가죽, 이끼, 얇은 천.'},{
   '9,7':'벽이 두 겹이에요. 문을 지나면 또 문이 있어요.','9,9':'안쪽 벽이에요. 녹슨 문이 반쯤 열려 있어요.',
   '5,7':'바깥 벽이에요. 덩굴 밑에 차가운 벽이 있어요.','5,9':'문 주위 덩굴이 칼로 자른 것처럼 깨끗해요.'}),
  npcs:['sharE','ostel','vet','yerke','vernenE','old','bunk','root','bro1','bro2']},
 bridge:{name:'조상의 집 · 콘솔 방',reg:'HOUSE OF OUR ANCESTORS · BRIDGE',
  legend:{'W':{tile:'wall'},'a':{tile:'alcT'},'A':{tile:'alcB'},'g':{tile:'wallG'},'.':{tile:'deck',walk:1},'c':{tile:'cons'},'k':{tile:'consK'},'p':{tile:'proj',walk:1},
   'm':{tile:'bed'},'d':{tile:'door2',walk:1},'E':{tile:'exitDoor',walk:1}},
  map:BRIDGE_MAP,
  rooms:[[17,3,22,8,'조상의 집 · 의료실']],
  warps:{'8,15':{to:'entry',x:16,y:2,dir:'down'}},
  spots:autoSpots(BRIDGE_MAP,{
   'a':['금속 하인이 벽 안에 서 있어요. 움직이지 않아요.'],
   'A':()=>'{금속 하인|금속 하인}이에요. 사람보다 훨씬 커요. 거울 같은 얼굴에 제 얼굴이 비쳐요.',
   'c':['{콘솔|콘솔}이에요. 희미한 빛이 깜박여요.','콘솔이에요. 뾰족한 글자가 떠요. 아무도 못 읽어요.'],
   'k':['콘솔이 깨졌어요. 속이 벌집처럼 생겼어요.'],
   'g':['벽판에서 물속 같은 빛이 나요.'],'m':['휘어진 금속 침대예요. 부러진 곳도 있어요.'],
   'W':['벽이 회갈색이에요. 녹슨 곳에 이끼가 있어요.']}),
  npcs:['holo','house','sharB','listen1','listen2','young','medbed','frozen','servantK','melI','melBr','sharBody']},
 buried:{name:'조상의 집 · 땅속 방',reg:'HOUSE OF OUR ANCESTORS · BURIED DECKS',
  legend:{'W':{tile:'bwall'},'h':{tile:'rdoor'},'U':{tile:'hatchUp',walk:1},'X':{tile:'mound'},'s':{tile:'sacks'},'.':{tile:'deck',walk:1},'d':{tile:'dirt',walk:1},
   'r':{tile:'rootsT'},'o':{tile:'ring'}},
  map:BURIED_MAP,
  rooms:[[16,4,22,8,'조상의 집 · 땅속 작은 방']],
  warps:{'12,0':{to:'entry',x:16,y:13,dir:'up'}},
  spots:autoSpots(BURIED_MAP,{
   'X':['흙이 방을 반쯤 삼켰어요.','흙더미 위에 이끼가 자라요.'],'s':['흙 자루예요. 형제들이 쌓았어요.'],'r':['뿌리가 흙 속으로 뻗었어요.'],
   'h':['녹슨 문이 반쯤 열렸어요. 그런데 흙이 꽉 막고 있어요.'],
   'o':()=>{const F=f();return F.interro&&!F.free?'벽에 쇠고리가 있어요. 밧줄이 멜로리 목까지 내려가요.':F.free?'쇠고리에 잘린 밧줄이 매달려 있어요.':'벽에 쇠고리가 있어요.'},
   'W':['벽에 흙이 흘러내렸어요.','차가운 벽이에요. 흙냄새가 나요.']}),
  npcs:['crack','melB','vernenB','ostelB']},
};

/* ---------------- story helpers ---------------- */
const checkWork=()=>{const F=f();if(F.root&&F.crack&&b('금지'))F.work=1};
const N=(say)=>({who:'…',say});
const H=(say)=>({who:'핸드리',say});
const S=(say)=>({who:'샤스킨',say});
const HOUSEV=(say)=>({who:'집',say});
const M=(say)=>({who:'멜로리',say});

const NPC={
 /* ======== entry: outside the door ======== */
 sharE:{name:'샤스킨',zone:'entry',x:5,y:8,dir:'left',look:SHARSKIN,badge:['조상'],
  pos:()=>f().arrived?[3,7]:[5,8],hide:()=>{const F=f();return !(!F.arrived||(F.trace&&!F.raid))},
  status:()=>{const F=f();if(!F.arrived)return b('금속')?'todo':'wait';if(F.trace&&!F.raid)return F.yerke?'todo':null;return undefined},
  after:'조상들이 이 집을 만들었다.',
  script:()=>{const F=f();
   if(!F.arrived&&!b('금속'))return [S('오스텔, 뭘 그렇게 보느냐?')];
   if(F.trace&&!F.raid){
    if(!F.yerke)return [S('핸드리, 여크한테 가 봐라. 다리가 안 좋다.')];
    return [
     N('집이 또 이상한 말을 했어요. "{귀환 신호|귀환 신호} 활성."'),
     S('핸드리, 따라와라. 형제들도 다 간다.'),
     N('서른 명쯤이 무기를 들고 떠났어요.'),
     N('사흘을 걸었어요. 언덕 두 개 사이에 작은 마을이 있었어요.'),
     N('그 마을의 {판관|판관}이 나왔어요. 남자였어요.'),
     N('샤스킨이 한 번 내리쳤어요. 판관이 쓰러졌어요. 죽었어요.'),
     N('마을 사람들이 물건을 가지고 나왔어요.'),
     N('우리는 조금 가졌어요. 나머지는 다 불태웠어요.'),
     N('저도 한 남자를 때렸어요. 그 사람의 조각한 막대기를 불에 태웠어요.'),
     N('돌아오는 길에 사냥꾼 한 명이 우리를 따라왔어요. 여자였어요.'),
     N('샤스킨이 그 여자를 때려서 죽였어요. 다들 환호했어요.'),
     H('…그때는 그게 옳다고 생각했어요.'),
     N('집에 돌아왔어요. 집이 샤스킨 목소리로 말했어요.'),
     HOUSEV('전문가 지원 접근 중.'),
     S('이 집은 오백 년이 넘었다.'),
     N('집은 그 말이 맞다고 하지 않았어요. 그래도 저는 믿었어요.'),{who:'…',say:'이틀 뒤, 사냥꾼 형제들이 누구를 끌고 콘솔 방으로 왔어요.',set:()=>{f().raid=1}}]}
   return null},
  talk:()=>[
   S('다 왔다. 여기가 조상들의 집이다.'),
   N('언덕에 낮은 문이 있어요. 네모난데 모서리가 둥글어요.'),
   N('문 주위 풀은 아주 짧게 잘려 있어요.'),
   S('{조상의 집|조상의 집}. 우리 조상들이 이 집을 만들었다.'),
   Q.shar[0],
   S('조상들은 벌도, 유령도 없이 살았다. 우리처럼.'),
   S('우리는 {본래 상태|본래 상태}로 돌아온 거다.'),
   Q.shar[1],
   {who:'샤스킨',say:'들어가자. 형제들이 기다린다.',award:['조상'],set:()=>{f().arrived=1}}]},
 ostel:{name:'오스텔',zone:'entry',x:4,y:7,dir:'right',look:OSTEL,badge:['금속'],
  pos:()=>b('금속')?[18,10]:[4,7],hide:()=>!!f().interro,
  after:'금속은 차갑고 단단해. 뿌리만 그걸 찢어.',
  script:()=>{const F=f();if(b('금속')&&F.saw&&!F.sermon)return [{who:'오스텔',say:'콘솔 방 그림 봤어? 나는 잠이 안 와.'},{who:'오스텔',say:'샤스킨 말이 다 맞는 것 같아.'}];return null},
  talk:()=>[
   {who:'오스텔',say:'핸드리, 이 문 좀 봐. 나무도 돌도 아니야.'},
   N('만지면 차갑고 단단해요. 긁힌 곳은 은색으로 빛나요.'),
   {who:'오스텔',say:'이건 {금속|금속}이야. 북쪽 산 마을에서 들었어.'},
   H('금속? 처음 들어 봐.'),
   Q.ostel[0],
   {who:'오스텔',say:'북쪽 마을에는 금속을 만드는 유령도 있대.'},
   Q.ostel[1],
   {who:'오스텔',say:'뿌리가 금속을 찢은 데만 은색이 보여.',award:['금속']}]},
 /* ======== entry: the arched hall ======== */
 vet:{name:'고참 형제',zone:'entry',x:11,y:9,dir:'left',look:VET,badge:['금지'],hide:()=>{const F=f();return F.sharDead&&!F.offer},
  status:()=>{const F=f();if(!F.ate)return F.arrived?'todo':null;if(!b('금지'))return F.saw&&b('목소리')?'todo':null;if(F.offer&&!F.fed)return 'todo';return undefined},
  after:'규칙은 규칙이야. 금지는 금지고.',
  script:()=>{const F=f();
   if(F.night&&!F.sharDead)return [N('고참 형제가 코를 골아요.')];
   if(!F.ate)return [
    N('안에 서른 명쯤 있어요. 대부분 남자예요. 모두 몸에 빨간 표식이 있어요.'),
    N('다들 마르지 않았어요. 튼튼해 보여요.'),
    {who:'고참 형제',say:'새 {형제|형제}구나. 배고프지? 이거 먹어.'},
    N('작고 납작한 덩어리예요. 겉이 반짝반짝해요.'),
    H('…이걸 어떻게 먹어요?'),
    {who:'고참 형제',say:'껍질을 벗겨. 껍질은 못 먹어.'},
    N('껍질 안은 부드럽고 달아요. 하나 더 받아서 주머니에 넣었어요.',),
    {who:'고참 형제',say:'{조상의 음식|조상의 음식}이야. 이 집이 줘. 우리도 먹을 수 있어.',give:'조상의 음식'},
    {who:'핸드리',say:'배가 안 아파요. 토하지도 않아요.',set:()=>{f().ate=1}}];
   if(!b('금지')){if(!(F.saw&&b('목소리')))return [{who:'고참 형제',say:'샤스킨이 콘솔 방에서 기다려. 가 봐.'}];
    return [
     {who:'고참 형제',say:'일하기 전에 규칙을 하나 알려 줄게.'},
     {who:'고참 형제',say:'여기서 남자와 여자는 같이 자면 안 돼. {금지|금지}야.'},
     Q.vet[0],
     H('왜요?'),
     {who:'고참 형제',say:'예전에 아기가 생긴 적이 있어. 그런데 아기가 배 속에서 죽었어.'},
     {who:'고참 형제',say:'엄마들도 죽었어. 우리 몸으로는 아기를 못 낳아.'},
     {who:'고참 형제',say:'규칙을 어긴 둘이 있었어. 샤스킨이 둘 다 때렸어.'},
     Q.vet[1],
     {who:'고참 형제',say:'자, 일하자. 뿌리는 매일 또 자라.',award:['금지'],set:()=>{checkWork()}}]}
   if(F.offer&&!F.fed)return [
    {who:'고참 형제',say:'핸드리. 도망쳤던 형제들이 하나둘 돌아왔어.'},
    N('집이 아직 조상의 음식을 줘요. 형제들이 줄지어 받아요.'),
    {who:'고참 형제',say:'그런데 음식은 끝이 있대. 영원하지 않아.'},
    {who:'핸드리',say:'알아요. 같이 방법을 찾아요.',set:()=>{f().fed=1}}];
   return null},
  talk:()=>[]},
 yerke:{name:'여크',zone:'entry',x:16,y:11,dir:'down',look:YERKE,badge:['메아리'],hide:()=>!!f().yerke,
  status:()=>{const F=f();if(!b('메아리'))return F.ate?'todo':null;if(F.trace&&!F.yerke)return 'todo';return undefined},
  after:'하하! 밤에는 메아리 때문에 코 고는 소리가 두 배야.',
  script:()=>{const F=f();if(!b('메아리'))return null;
   if(F.trace&&!F.yerke)return [
    N('그날부터 샤스킨은 저를 늘 옆에 두었어요.'),
    N('습격 나간 형제들이 돌아왔어요. 가벨은 없었어요.'),
    {who:'여크',say:'가벨은 {돌팔매|돌팔매} 돌에 맞아서 죽었어.'},
    {who:'여크',say:'나는 가시에 찔렸어. 별거 아니야. 하하.'},
    N('여크는 다리를 절어요. 상처 주위가 검붉어요.'),
    N('물을 떠다 주고 상처를 닦아 줬어요.'),
    N('며칠 뒤, 상처가 까맣게 변했어요.'),
    {who:'여크',say:'핸드리… 이제 웃기도 힘들어.'},
    S('형제여, 이제 쉬어라.'),
    {who:'…',say:'샤스킨이 직접 여크를 죽였어요. 고통을 끝내 주려고요.',set:()=>{f().yerke=1}}];
   return null},
  talk:()=>[
   {who:'여크',say:'어이, 새 형제! 나는 여크야.'},
   N('여크는 잘 웃어요. 농담도 잘해요.'),
   {who:'여크',say:'여기 천장이 높지? 크게 불러 봐.'},
   H('어—이!'),
   N('…어이… 어이… 이…'),
   Q.yerke[0],
   {who:'여크',say:'하하! 집이 대답하는 거 아니야. 그냥 {메아리|메아리}야.'},
   Q.yerke[1],
   {who:'여크',say:'밤에는 메아리 때문에 코 고는 소리가 두 배야.',award:['메아리']}]},
 vernenE:{name:'버넌',zone:'entry',x:20,y:6,dir:'left',look:VERNEN,hide:()=>!!f().interro,
  talk:()=>[N('버넌은 어깨가 넓어요. 머리부터 발끝까지 빨개요.'),{who:'버넌',say:'새 형제? 흥. 아직 마을 냄새가 나네.'},N('{코맹맹이|코맹맹이} 목소리예요. 듣기 싫어요.')]},
 old:{name:'늙은 형제',zone:'entry',x:12,y:12,dir:'down',look:OLD,hide:()=>{const F=f();return F.sharDead&&!F.offer},
  script:()=>{if(f().night&&!f().sharDead)return [N('늙은 형제가 자고 있어요.')];const q=Q.cafe[Math.random()*Q.cafe.length|0];
   return [{who:'늙은 형제',say:'젊은이, 이리 앉아. 옛날 말 문제 하나 낼게.'},{...q,who:'늙은 형제',old:1},{who:'늙은 형제',say:'잘했어. 말은 잊으면 안 돼.'}]},
  talk:()=>[]},
 bunk:{name:'내 잠자리',zone:'entry',x:18,y:13,dir:'down',look:BUNK,pos:()=>[18,13],
  status:()=>{const F=f();return F.interro&&!F.night?'todo':null},
  script:()=>{const F=f();
   if(F.interro&&!F.night)return [
    N('멜로리는 땅속 방에 묶여 있어요.'),
    N('며칠이 지났어요. 저는 아무것도 안 했어요.'),
    N('밤마다 누워서 {이블리스|이블리스}를 생각했어요.'),
    N('{오로보|오로보} 사람을 다 머릿속에 기억하던 설계자.'),
    N('그리고 코르토 할아버지. 마지막까지 세라를 찾던 의사.'),
    N('유령이 있어도, 그 사람들은 사람이었어요.'),
    {who:'…',say:'그날 밤, 저는 일어났어요.',set:()=>{f().night=1}}];
   if(F.night&&!F.sharDead)return [N('지금은 잘 수 없어요.')];
   return [N('제 잠자리예요. 가죽과 이끼, 얇은 천이 있어요.')]},
  talk:()=>[]},
 root:{name:'벽을 뚫은 뿌리',zone:'entry',x:21,y:5,dir:'down',look:ROOT,pos:()=>[21,5],
  status:()=>{const F=f();return F.saw&&b('목소리')&&!F.root?'todo':null},
  script:()=>{const F=f();if(F.root)return [N('잘린 뿌리에서 하얀 즙이 나와요. 내일이면 또 자라요.')];
   if(!(F.saw&&b('목소리')))return [N('뿌리가 벽을 뚫고 들어왔어요. 금속이 찢어졌어요.')];
   return [N('첫째 날. 뿌리가 벽을 뚫고 들어왔어요.'),Q.root[0],N('형제들하고 하루 종일 뿌리를 잘랐어요.'),{who:'…',say:'손에 물집이 생겼어요.',set:()=>{f().root=1;checkWork()}}]},
  talk:()=>[]},
 bro1:{name:'형제 (여자)',zone:'entry',x:13,y:4,dir:'down',look:BRO1,hide:()=>{const F=f();return F.sharDead&&!F.fed},
  script:()=>{const F=f();if(F.night&&!F.sharDead)return [N('형제가 벽에 기대어 자요.')];if(F.fed)return [{who:'형제 (여자)',say:'돌아왔어. 갈 데가 없어서.'},{who:'형제 (여자)',say:'샤스킨이 없으니까 조용하네.'}];return null},
  talk:()=>[{who:'형제 (여자)',say:'여자는 많지 않아. 넷에 한 명쯤.'},{who:'형제 (여자)',say:'그래도 여기서는 아무도 우리를 쫓아내지 않아.'}]},
 bro2:{name:'형제',zone:'entry',x:19,y:11,dir:'left',look:BRO2,hide:()=>{const F=f();return F.sharDead&&!F.fed},
  script:()=>{const F=f();if(F.night&&!F.sharDead)return [N('형제가 코를 골아요.')];if(F.fed)return [{who:'형제',say:'조상의 음식은 아직 달아. 다행이야.'}];return null},
  talk:()=>[{who:'형제',say:'빛이 구멍으로 들어오지? 낮에는 저기 앉아 있어.'},{who:'형제',say:'밤에는 구멍으로 별이 보여.'}]},
 /* ======== bridge ======== */
 holo:{name:'빛 그림',zone:'bridge',x:8,y:7,dir:'down',look:HOLO,pos:()=>[8,7],badge:['하늘'],
  status:()=>f().saw?undefined:'todo',
  after:'그림이 깜박이며 계속 돌아가요. 파란 공, 은색 화살, 초록 공, 숲.',
  talk:()=>[
   S('보아라. 조상들이 남긴 그림이다.'),
   N('방 가운데에 희미한 빛이 떠올라요. 깜박깜박해요.'),
   N('파랗고 초록색인 공이에요.'),
   N('은색 화살 같은 것이 날아가요. 아주 멀리.'),
   N('초록색 공. 그리고 보라색, 초록색 숲.'),
   H('숲에… 마을이 하나도 없어요.'),
   Q.holo[0],
   S('이 집은 밤{하늘|하늘}에서 왔다.'),
   Q.holo[1],
   {who:'…',say:'모두 말없이 그림을 봤어요.',award:['하늘'],set:()=>{f().saw=1}}]},
 house:{name:'집의 목소리',zone:'bridge',x:8,y:11,dir:'down',look:HOUSE,pos:()=>[8,11],badge:['목소리'],
  status:()=>{const F=f();if(!b('목소리'))return F.saw?'todo':null;if(F.offer&&!F.ownVoice)return 'todo';return undefined},
  after:'집은 명령하는 사람의 목소리로 말해요.',
  script:()=>{const F=f();
   if(!F.saw)return [N('작은 구멍이 많은 판이에요. 희미한 빛이 깜박여요.')];
   if(F.offer&&!F.ownVoice)return [
    H('집아. 확인.'),
    HOUSEV('확인. 작업 중.'),
    N('이번에는 제 목소리예요. 이상한 기분이에요.'),
    M('이건 조상들의 영혼이 아니야.'),
    M('유령하고 같은 거야. 더 오래되고, 더 크고, 고장 났어.'),
    Q.house2[0],
    H('집아, 벌은 왜 사람을 쏘아?'),
    HOUSEV('벌, 벼룩, 이가 사람 몸을 바꿉니다. 이 세계에서 살 수 있게.'),
    N('조상들이 일부러 만들었어요. 아이들이 여기서 살 수 있게요.'),
    N('유령도 원래는 주인이 아니었어요. 돕는 도구였어요.'),
    {who:'핸드리',say:'…이제 조금 알 것 같아요.',set:()=>{f().ownVoice=1}}];
   return null},
  talk:()=>[
   S('집아. 확인.'),
   HOUSEV('확인. 작업 중.'),
   H('집이 말해요! 그런데… 샤스킨 목소리예요.'),
   S('집은 명령하는 사람의 {목소리|목소리}로 말한다.'),
   Q.house[0],
   S('나는 이 집과 말하는 법을 배웠다. 조상들의 말로.'),
   Q.house[1],
   {who:'샤스킨',say:'내일부터 일해라. 집이 더 무너지지 않게.',award:['목소리']}]},
 sharB:{name:'샤스킨',zone:'bridge',x:8,y:9,dir:'down',look:SHARSKIN,badge:['설교하다','유령'],
  pos:()=>{const F=f();if(F.free)return [3,3];if(F.sermon&&!F.trace)return [22,6];if(F.raid&&!F.interro)return [6,6];if(F.interro)return [12,8];return [8,9]},
  hide:()=>{const F=f();if(F.free)return !F.sharIn||!!F.sharDead;return !F.arrived||(F.trace&&!F.raid)},
  status:()=>{const F=f();if(F.free)return null;if(F.saw&&b('목소리')&&F.work&&!F.sermon)return 'todo';if(!b('설교하다'))return null;return undefined},
  after:'형제여, 조상들의 집에서는 일하고 먹는다.',
  script:()=>{const F=f();
   if(F.free)return [S('비켜라, 핸드리.')];
   if(!F.saw)return [S('가운데 빛을 보아라.')];
   if(!b('목소리'))return [S('집에게 말하는 걸 보여 주마. 이리 와라.')];
   if(!F.work)return [S('일해라. 뿌리를 자르고, 흙으로 벽을 막아라.'),S('규칙은 고참 형제에게 들어라.')];
   if(!F.sermon)return [
    N('셋째 날 저녁이에요. 콘솔 방이 노란빛으로 물들었어요.'),
    N('형제들이 모였어요. 샤스킨이 {설교해요|설교하다}.'),
    S('형제들아. 마을 사람들은 우리를 버렸다.'),
    S('우리 몸에 {카인의 표식|카인의 표식}이 있다고 한다.'),
    S('아니다. 우리는 본래 상태로 돌아왔다. 조상들처럼.'),
    Q.sermon[0],
    S('집아, 마을의 {유령|유령}은 무엇이냐?'),
    HOUSEV('{전문가 시스템|전문가 시스템}.'),
    S('벌집은?'),
    HOUSEV('{공동체 생물 허브|공동체 생물 허브}.'),
    N('집은 샤스킨 목소리로 대답해요. 형제들이 숨을 죽여요.'),
    Q.sermon[1],
    S('들었느냐? 조상들은 유령을 다르게 불렀다.'),
    Q.sermon[2],
    {who:'…',say:'저는 그 말들을 다 믿었어요.',award:['설교하다','유령'],set:()=>{f().sermon=1}}];
   if(!F.trace)return [S('누워라. 의료실 침대에.')];
   if(F.raid&&!F.interro)return [S('보아라, 핸드리. 네 누이가 왔다.')];
   if(F.interro)return [N('샤스킨이 콘솔 앞에서 집하고 이야기해요. 저를 보지 않아요.')];
   return null},
  talk:()=>[]},
 listen1:{name:'형제',zone:'bridge',x:6,y:10,dir:'up',look:BRO3,hide:()=>{const F=f();return !(F.work&&!F.sermon)},talk:()=>[N('형제가 설교를 기다려요. 눈이 반짝여요.')]},
 listen2:{name:'형제 (여자)',zone:'bridge',x:10,y:10,dir:'up',look:BRO4,hide:()=>{const F=f();return !(F.work&&!F.sermon)},talk:()=>[N('형제가 조용히 앉아 있어요.')]},
 young:{name:'젊은 형제',zone:'bridge',x:12,y:13,dir:'left',look:YOUNG,badge:['영혼'],hide:()=>{const F=f();return F.sharDead&&!F.fed},
  status:()=>!b('영혼')?(f().sermon?'todo':null):undefined,
  after:'나는 아직도 조상들이 우리를 본다고 믿어.',
  script:()=>{const F=f();if(!F.sermon)return [{who:'젊은 형제',say:'저녁 설교 때 보자.'}];if(F.fed)return [{who:'젊은 형제',say:'조상들의 영혼이 아니었구나…'},{who:'젊은 형제',say:'그래도 이 집은 우리 집이야.'}];return null},
  talk:()=>[
   {who:'젊은 형제',say:'핸드리, 그 목소리 들었지?'},
   {who:'젊은 형제',say:'나는 조상들의 {영혼|영혼}이 이 집에 산다고 생각해.'},
   Q.young[0],
   {who:'젊은 형제',say:'죽은 조상들이 우리를 보고 있는 거야.'},
   H('…정말 그럴까?'),
   Q.young[1],
   {who:'젊은 형제',say:'그러니까 우리는 착하게 살아야 해.',award:['영혼']}]},
 medbed:{name:'의료실 침대',zone:'bridge',x:20,y:6,dir:'down',look:MEDBED,pos:()=>[20,6],
  status:()=>{const F=f();return F.sermon&&!F.trace?'todo':null},
  script:()=>{const F=f();
   if(!(F.sermon&&!F.trace))return [N('휘어진 금속 침대예요. 벽에서 물속 같은 빛이 나요.')];
   return [
    N('넷째 날 아침. 샤스킨이 저를 의료실로 데려왔어요.'),
    S('누워라. 집이 너를 볼 거다. {입문식|입문식}이다.'),
    N('차가운 금속 침대에 누웠어요. 벽이 웅웅 울려요.'),
    HOUSEV('검사 중… 본래 상태 확인.'),
    S('좋다. 너도 이제 우리 형제다.'),
    HOUSEV('경고. {진단 장치|진단 장치} 감지.'),
    HOUSEV('{추적 신호|추적 신호} 활성.'),
    H('…무슨 말이에요?'),
    S('…나가 봐라. 나는 집하고 할 말이 있다.'),
    {who:'…',say:'저는 나왔어요. 샤스킨은 오랫동안 안에 있었어요.',set:()=>{f().trace=1}}]},
  talk:()=>[]},
 frozen:{name:'멈춘 하인',zone:'bridge',x:3,y:9,dir:'down',look:SERVANT_FROZEN,pos:()=>[3,9],
  talk:()=>[N('{금속 하인|금속 하인}이에요. 한 발을 든 채로 멈춰 있어요.'),N('머리가 둥글고 목이 없어요. 얼굴은 휜 거울 같아요.'),N('가슴 왼쪽에 뾰족한 글자 세 개가 있어요.'),N('벽 안에 일곱, 여기 하나. 모두 여덟이에요.')]},
 servantK:{name:'금속 하인',zone:'bridge',x:4,y:3,dir:'left',look:SERVANT_AWAKE,pos:()=>[4,3],hide:()=>!(f().svOut||f().sharDead),
  talk:()=>[N('하인이 다시 움직이지 않아요.'),N('그런데 혹들이 아직 빛나요. 멜로리 심장처럼.')]},
 melI:{name:'멜로리',zone:'bridge',x:4,y:6,dir:'right',look:MEL_CAPTIVE,pos:()=>[4,6],hide:()=>{const F=f();return !(F.raid&&!F.interro)},
  status:()=>'todo',
  talk:()=>[
   N('얼굴 왼쪽이 부었어요. 빈 눈에서 하얀 빛이 깜박여요.'),
   H('…멜로리?'),
   N('멜로리예요. 사냥꾼 형제들한테 잡혔어요.'),
   HOUSEV('새 장치: {의료 전문가 시스템|의료 전문가 시스템}.'),
   S('역시. 이 아이의 유령이 너를 따라왔다, 핸드리.'),
   S('네 손바닥에 {진단 가시|진단 가시}가 있다. 유령은 그걸로 너를 찾았다.'),
   S('의사 유령은 {단절약|단절약} 만드는 법을 안다.'),
   S('그걸로 온 세상 사람들에게 표식을 남길 거다.'),
   Q.mel[0],
   S('집아, 이 유령에게 물어라.'),
   HOUSEV('다운로드 중… 기다려 주십시오.'),
   N('멜로리 몸이 덜덜 떨려요. 등이 활처럼 휘어요.'),
   M('으… 당신… 미쳤어.'),
   N('저는 보기만 했어요. 아무것도 안 했어요.'),
   {who:'샤스킨',say:'땅속 방에 묶어 둬라. 내일 또 한다.',set:()=>{f().interro=1}}]},
 melBr:{name:'멜로리',zone:'bridge',x:1,y:3,dir:'right',look:MEL_FREE,badge:['권한','치료하다','혈관','거절하다'],
  pos:()=>f().sharDead?[10,9]:[1,3],hide:()=>!f().free,
  status:()=>{const F=f();if(!F.sharDead||!F.offer)return 'todo';if(F.done)return undefined;return F.ownVoice&&F.fed?'todo':'wait'},
  after:'우리가 가르치고, 또 배우자.',
  script:()=>{const F=f();
   if(!F.sharDead)return [
    {who:'…',say:'우리는 콘솔 방으로 도망쳤어요.',set:()=>{const F=f();F.sharIn=0;F.svOut=0}},
    M('집은 이 방을 {브리지|브리지}라고 불러. 여기 숨자.'),
    HOUSEV('업데이트 진행 중…'),
    N('발소리가 들려요. 샤스킨이에요.'),
    S('집아! 그 여자는 어디 있느냐?'),
    N('콘솔 위에 집의 지도가 떠요. 점 하나가 깜박여요.'),
    {who:'…',say:'샤스킨이 들어왔어요. 은색 지팡이를 들고요.',set:()=>{f().sharIn=1}},
    N('샤스킨이 저를 쳤어요. 저는 바닥에 쓰러졌어요.'),
    N('샤스킨이 지팡이로 멜로리를 짓눌러요. 멜로리가 숨을 못 쉬어요.'),
    Q.clim[0],
    HOUSEV('업데이트 완료.'),
    HOUSEV('명령 {권한|권한} 승인.'),
    Q.clim[1],
    S('집아! {프린터 기능|프린터 기능}! 단절약을 만들어라!'),
    HOUSEV('거부합니다. 권한이 없습니다.'),
    N('멜로리 목소리였어요.'),
    {w:'목소리',build:['집이','멜로리 목소리로','대답했어요']},
    {who:'…',say:'벽 쪽에서 금속 소리가 났어요. 하인 하나가 걸어 나왔어요.',set:()=>{f().svOut=1}},
    N('하인의 혹에서 하얀 빛이 뛰어요. 멜로리 심장처럼요.'),
    N('하인이 샤스킨을 붙잡았어요. 갈비뼈가 부서지는 소리가 났어요.'),
    N('샤스킨 입에서 피가 흘렀어요. 샤스킨이 죽었어요.'),
    {who:'…',say:'형제들은 도망치거나 숨었어요.',award:['권한'],set:()=>{f().sharDead=1}}];
   if(!F.offer)return [
    M('핸드리… 나, 판관한테 말 안 했어. 유령의 보고를 내가 막았어.'),
    M('그런데 유령이 계속 네가 아프다고 알려 줬어.'),
    M('그래서 아로를 떠났어. 너를 찾아서 도우려고.'),
    M('오다가 사냥꾼들한테 잡혔어.'),
    N('며칠이 지났어요.'),
    M('핸드리, 이제 너를 {치료할|치료하다} 수 있어.'),
    M('내 피를 네 {혈관|혈관}에 넣는 거야. 그러면 단절이 풀릴 거야.'),
    Q.offer[0],
    Q.offer[1],
    H('…다시 마을 사람이 될 수 있다고?'),
    N('오래 생각했어요.'),
    H('고마워, 멜로리. 그래도 안 할래.'),
    H('나는 이대로 있을게.'),
    Q.offer[2],
    {w:'거절하다',build:['핸드리는','치료를','거절했어요']},
    M('…알았어. 그럼 집의 권한을 너하고 나눌게.'),
    {who:'…',say:'이제 집은 저한테도 대답해요.',award:['치료하다','혈관','거절하다'],set:()=>{f().offer=1}}];
   if(!(F.ownVoice&&F.fed))return [M(!F.ownVoice?'집하고 이야기해 봐. 이제 너도 할 수 있어.':'형제들이 돌아오고 있대. 가 봐.')];
   if(!F.done)return [
    M('이제 어떻게 할 거야, 핸드리?'),
    H('마을들에 가야 해. 우리가 아는 걸 말해 줘야 해.'),
    M('내가 마을에 가서 말할게. 처음은 어디?'),
    H('{오로보|오로보}. {이블리스|이블리스}한테 먼저 가자.'),
    M('우리가 가르치고, 또 배우자.'),
    N('밤하늘을 봐요. 저 별들 사이에도 다른 곳이 있대요.',),
    {who:'핸드리',say:'이게 제 이야기예요. 이제 당신 마을 이야기를 들려줄래요?',set:()=>{f().done=1},finale:1}];
   return null},
  talk:()=>[]},
 sharBody:{name:'샤스킨',zone:'bridge',x:3,y:3,dir:'down',look:SHAR_DEAD,pos:()=>[3,3],hide:()=>{const F=f();return !(F.sharDead&&!F.offer)},
  talk:()=>[N('샤스킨이 쓰러져 있어요. 움직이지 않아요.'),N('은색 지팡이가 옆에 떨어져 있어요.')]},
 /* ======== buried chambers ======== */
 crack:{name:'흙이 새는 틈',zone:'buried',x:2,y:4,dir:'down',look:CRACK,pos:()=>[2,4],
  status:()=>{const F=f();return F.saw&&b('목소리')&&!F.crack?'todo':null},
  script:()=>{const F=f();if(F.crack)return [N('흙 자루가 틈을 막고 있어요.')];
   return [N('둘째 날. 땅속 방이에요. 벽에 금이 갔어요.'),N('틈으로 흙이 쏟아져 들어와요.'),N('형제들하고 자루에 흙을 담았어요.'),Q.crack[0],{who:'…',say:'자루를 쌓아서 틈을 막았어요.',set:()=>{f().crack=1;checkWork()}}]},
  talk:()=>[]},
 melB:{name:'멜로리',zone:'buried',x:19,y:4,dir:'down',look:MEL_CAPTIVE,pos:()=>[19,4],badge:['묶다'],hide:()=>{const F=f();return !(F.interro&&!F.free)},
  status:()=>{const F=f();if(F.vernen&&!F.free)return 'todo';return F.night?null:'wait'},
  script:()=>{const F=f();
   if(!F.night)return [N('멜로리가 벽에 기대어 눈을 감고 있어요. 목에 밧줄이 있어요.'),N('저는 말을 걸지 못했어요.')];
   if(!F.vernen)return [N('버넌이 앞을 막고 있어요.')];
   return null},
  talk:()=>[
   M('…핸드리.'),
   H('멜로리, 가만히 있어. 밧줄을 풀게.'),
   N('밧줄이 목에 꽉 {묶여|묶다} 있어요. 매듭이 안 풀려요.'),
   Q.melB[0],
   {who:'…',say:'칼로 밧줄을 잘랐어요.',give:'밧줄 조각'},
   M('들려… 집이 말하고 있어. 내 머릿속에서.'),
   M('방이 아주 많아. 다 부서졌어. 같은 말만 계속 해.'),
   Q.melB[1],
   H('어디로 가?'),
   {who:'멜로리',say:'위로. 콘솔 방으로.',award:['묶다'],set:()=>{f().free=1}}]},
 vernenB:{name:'버넌',zone:'buried',x:18,y:5,dir:'right',badge:['칼','찌르다'],
  get look(){return f().vernen?VERNEN_DEAD:VERNEN},pos:()=>[18,5],hide:()=>{const F=f();return !F.night||!!F.sharDead},
  status:()=>{const F=f();if(F.night&&!F.vernen)return 'todo';return F.vernen?null:undefined},
  script:()=>f().vernen?[N('버넌이 움직이지 않아요.')]:null,
  talk:()=>[
   N('땅속 방에서 목소리가 들려요. 버넌이에요.'),
   {who:'버넌',say:'오스텔, 이 여자 좀 때려 봐. 조금만 약하게 만들자.'},
   {who:'오스텔',say:'…샤스킨이 그러라고 했어?'},
   {who:'버넌',say:'괜찮아. 아무도 몰라.'},
   N('멜로리 목에 밧줄이 묶여 있어요. 멜로리가 저를 봐요.'),
   N('저는 버넌한테 달려들었어요. 둘이 같이 넘어졌어요.'),
   N('{칼|칼}을 잡았어요.'),
   {who:'…',say:'칼로 버넌을 찔렀어요. 한 번, 두 번, 세 번.'},
   Q.vern[0],
   N('버넌이 움직이지 않아요. 죽었어요.'),
   N('오스텔이 저한테 달려왔어요.'),
   N('그때 멜로리가 발을 걸었어요. 오스텔이 넘어졌어요.'),
   N('멜로리가 발꿈치로 오스텔을 찼어요. 오스텔이 정신을 잃었어요.'),
   Q.vern[1],
   {who:'…',say:'멜로리 눈에서 하얀 빛이 타올랐어요. 유령이 도운 것 같아요.',award:['칼','찌르다'],set:()=>{f().vernen=1}}]},
 ostelB:{name:'오스텔',zone:'buried',x:20,y:5,dir:'left',get look(){return f().vernen?OSTEL_DOWN:OSTEL},pos:()=>[20,5],hide:()=>{const F=f();return !F.interro||!!F.sharDead},
  script:()=>f().vernen?[N('오스텔이 정신을 잃고 쓰러져 있어요.')]:null,
  talk:()=>[{who:'오스텔',say:'핸드리, 가까이 오지 마.'},{who:'오스텔',say:'그 여자는 이제 네 쌍둥이가 아니야. 유령이야.'}]},
};
const FOLLOW=null;

const INTRO=[H('메닉이 죽은 뒤에도 우리는 걸었어요.'),H('샤스킨, 오스텔, 그리고 저. 셋이었어요.'),H('길 끝에 이상한 언덕이 있었어요. 덩굴과 이끼로 덮여 있었어요.'),
 H('언덕 위에는 지느러미 같은 혹이 줄지어 있었어요.'),S('밤하늘에서 온 집이다. 이제 우리 집이다.')];
const DONE=['4장 끝! 형제 이야기가 끝났어요.','샤스킨은 죽었고, 집은 이제 멜로리와 핸드리의 목소리로 말해요.','둘은 오로보에, 이블리스에게 갈 준비를 해요.','일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f(),c=v=>v?'✓':'✗';
 if(F.done)return '4장 끝 · 일지에서 복습해요';
 if(!b('금속'))return '집 앞 · 오스텔이 문을 봐요';
 if(!F.arrived)return '집 앞 · 샤스킨';
 if(!F.ate)return '아치 홀 · 고참 형제';
 if(!b('메아리'))return '아치 홀 · 웃는 형제 여크';
 if(!F.saw)return '콘솔 방 · 가운데의 빛';
 if(!b('목소리'))return '콘솔 방 · 집의 목소리';
 if(!F.work)return `일하는 날 · 뿌리 ${c(F.root)} · 흙 ${c(F.crack)} · 규칙 ${c(b('금지'))}`;
 if(!F.sermon)return '콘솔 방 · 저녁 설교';
 if(!b('영혼'))return '콘솔 방 · 젊은 형제';
 if(!F.trace)return '의료실 · 입문식';
 if(!F.yerke)return '아치 홀 · 여크의 상처';
 if(!F.raid)return '집 앞 · 샤스킨을 따라가요';
 if(!F.interro)return '콘솔 방 · 끌려온 사람';
 if(!F.night)return '아치 홀 · 내 잠자리';
 if(!F.vernen)return '땅속 방 · 멜로리';
 if(!F.free)return '땅속 방 · 밧줄';
 if(!F.sharDead)return '콘솔 방 · 숨어요';
 if(!F.offer)return '콘솔 방 · 멜로리';
 if(!(F.ownVoice&&F.fed))return `조상의 집 · 집의 목소리 ${c(F.ownVoice)} · 형제들 ${c(F.fed)}`;
 return '콘솔 방 · 멜로리와 내일';
}
return {WORDS,DICT,CONFUSE,BANK,Q,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES,PLAYER};
}});
