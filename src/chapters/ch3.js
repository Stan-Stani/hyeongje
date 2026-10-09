CHAPTERS.push({id:'ch3',n:'3장',title:'오로보',place:'오로보 · 하분 나무 · 죽은 마을들의 길',words:16,save:'esb-ch3',color:'#B5652E',
 start:{zone:'orovo',x:2,y:14,dir:'right'},introWho:'핸드리',
 make:()=>{
/* =====================================================================
   3장 · 오로보 — content.
   Book pin: §V–VI (Orovo, the Harboon war, the road of dead villages; ends arriving at the "hill", end §VI).
   §V  Handry (16, a drifting thief) reaches Orovo (~5× Cro): crammed maze, houses between houses, NEW stacked houses with
       ramps, fields and irrigation channels, never sleeps (querns, livestock). The smell of food draws him to the fenced outcast
       compound (one gap facing the fields, a fire, a big cauldron of treated palewood). Orovo's DOCTOR (m, woolly hair, skull
       wholly swollen, lopsided, craggy; one of three doctors) brews food outcasts can eat. Sharskin keeps order and makes him
       eat. Architect IBLIS (tall, forehead knuckled with ghost-whorls, BOTH eyes — the left roams — lopsided smile, part of the
       mouth sealed; loud, abrupt, tireless) trades meals for work: clear a tree for Orovo's (unnamed) daughter village.
       Sharskin explains budding. Eight days of war on the Harboons in that tree: stick houses broken, eggs smashed, many
       outcasts die; outcasts are used because animals hate their smell and Harboon thorns barely affect them. Handry
       overhears Iblis bargaining with her ghost. He asks her to keep feeding the outcasts: refused (she kept her word on the
       meals while the work lasted). Final festival night: Sharskin recruits Handry, Ostel (tall, skinny, from Pavo,
       Severance painted in patterns on face and chest) and Menic (short, broad, strong, recently Severed, lazy) with
       "Mark of Cain" / "Original Condition".
   §VI The road. Menic shirks three times (the fire, the Sevner, refusing to gather); Sharskin kills him with the staff
       (skull, then through the eye); Handry and Ostel only watch. Ostel proposes eating the body; Sharskin forbids eating
       "our own" and calls himself priest. Dead villages: a burned tree with axe scars, slightly-wrong houses, human bones incl.
       a holed ghost-bearer skull; a warty boil-tree with many hives and big barbed wasps, stripped carcasses; one overgrown
       village, avoided. Ancestor ruins (struts that are neither wood nor stone, rotted membrane roof, a tree with a failed
       hive). A too-regular vine-covered hill with worn fins: Sharskin says it came from the night sky. Handry has never heard
       the word "metal" (Ostel knows it from the north, §VII) — so nobody names metal here; Sharskin never says "ship".
   Sharskin: bald, big, steady gaze, hands scarlet to the elbows, filmy ancient robe, silver staff, a fire-lighting "bright
   square". NOT a ghost-bearer. "500 years" is never stated here (it is Sharskin's later claim, §VIII).
   Invented (inv., non-decisive): the starving outcast's lines (book: "one of the other outcasts"), the outcasts in the stew
   line, the Orovo hunter at the tree, the Orovo villager and the riddle-playing child at the fence (review), the fallen outcast
   under the tree, the evening timing of arrival, Menic's brow smear (where he was Marked is unstated), Iblis's hair.
   Per audit-ch3: the bargain (Iblis swaps Harko/San/Morrey for Lumas/Leda, moves Ghortomar/Hekki to gathering; the ghost
   only gives numeric prognoses), Handry's plea right after it at the tree, the Sevner scene and Menic's death follow §V–VI. Korean term for budding: 분봉 (bees swarming to a new hive).
   Lore source: notes/canon.md + notes/chapters-outline.md (3장). Audit against the full book before publishing.
   Terms: 판관 Lawgiver · 의사 Doctor · 설계자 Architect · 유령 ghost · 단절약 Severance · 추방자 outcast · 벌집 hive.
   ===================================================================== */
const WORDS=['냄새를 맡다','국','줄을 서다','노동','인구','붐비다','이사하다','둥지','알','던지다','가시','독','불을 피우다','게으르다','폐허','버려지다'];
const DICT={
 '냄새를 맡다':{k:'코로 냄새를 느껴요. (맡아요, 맡았어요)',e:'to smell (something), sniff',ex:'음식 냄새를 맡고 여기까지 왔어요.'},
 '국':{k:'물에 고기나 채소를 넣고 끓인 음식. 숟가락으로 먹어요.',e:'soup, stew',ex:'추방자들이 국을 한 그릇씩 받아요.'},
 '줄을 서다':{k:'사람들이 차례대로 한 사람씩 뒤에 서요. (줄을 서요, 섰어요)',e:'to line up, queue',ex:'국을 받으려고 줄을 섰어요.'},
 '노동':{k:'몸을 써서 하는 힘든 일.',e:'labour, (manual) work',ex:'노동하는 대신에 밥을 받아요.',hj:'勞動 · 動 = 움직이다 · 운동(運動)의 동'},
 '인구':{k:'한 곳에 사는 사람의 수.',e:'population',ex:'오로보는 인구가 너무 많아요.',hj:'人口 · 口 = 입 · 입구(入口)의 구'},
 '붐비다':{k:'사람이 너무 많아서 복잡해요. (붐벼요, 붐볐어요)',e:'to be crowded',ex:'오로보 골목은 밤에도 붐벼요.'},
 '이사하다':{k:'사는 집이나 마을을 다른 곳으로 옮겨요.',e:'to move (house)',ex:'오로보 사람 몇 명이 새 마을로 이사하게 돼요.',hj:'移徙 · 移 = 옮기다'},
 '둥지':{k:'새나 짐승이 알을 낳고 사는 집.',e:'nest',ex:'하분 둥지가 나뭇가지 위에 있어요.'},
 '알':{k:'새, 벌레, 짐승이 낳는 둥근 것. 안에서 새끼가 나와요.',e:'egg',ex:'둥지 안에 알이 다섯 개 있어요.'},
 '던지다':{k:'손에 든 것을 멀리 보내요. (던져요, 던졌어요)',e:'to throw',ex:'하분한테 돌을 던졌어요.'},
 '가시':{k:'식물이나 짐승에 있는 뾰족하고 날카로운 것.',e:'thorn, spine',ex:'팔에 가시가 박혔어요.'},
 '독':{k:'먹거나 몸에 들어가면 아프거나 죽게 하는 것.',e:'poison, venom',ex:'하분 가시에는 독이 있어요.',hj:'毒 · 소독(消毒)의 독'},
 '불을 피우다':{k:'나무에 불을 붙여서 불이 타게 해요. (불을 피워요, 피웠어요)',e:'to make / light a fire',ex:'메닉, 불 좀 피워.'},
 '게으르다':{k:'일하기 싫어하고 잘 안 움직여요. (게을러요, 게을렀어요)',e:'to be lazy',ex:'메닉은 너무 게을러요.'},
 '폐허':{k:'무너지고 버려진 마을이나 건물이 남은 곳.',e:'ruins',ex:'그 마을은 폐허가 됐어요.',hj:'廢墟 · 廢 = 버리다 · 폐지(廢紙)의 폐'},
 '버려지다':{k:'누가 버려서 아무도 안 돌봐요. (버려져요, 버려졌어요)',e:'to be abandoned',ex:'버려진 마을에 뼈만 남았어요.'},
 /* glosses for words that appear in lines but are not badges */
 '오로보':{k:'아주 큰 마을. 크로보다 다섯 배쯤 커요.',e:'Orovo'},
 '도랑':{k:'밭에 물을 대려고 판 좁은 물길.',e:'irrigation channel, ditch'},
 '추방자':{k:'마을에서 쫓겨난 사람.',e:'outcast, exile'},
 '단절약':{k:'의사가 끓이는 검붉은 약. 바르면 그 사람은 공동체에서 끊어져요.',e:'Severance (the dye)'},
 '유령':{k:'벌집에 살다가 어떤 사람 머릿속에 들어가는 똑똑한 목소리.',e:'ghost (an advisor that lives in a bearer’s head)'},
 '설계자':{k:'유령을 가진 사람. 집, 밭, 마을의 앞날을 계획해요.',e:'Architect'},
 '판관':{k:'유령을 가진 사람. 마을의 규칙을 지키고 판결해요.',e:'Lawgiver'},
 '국자':{k:'국을 뜨는 긴 숟가락.',e:'ladle'},
 '맷돌':{k:'곡식을 가는 둥근 돌 두 개. 손잡이를 돌려요.',e:'quern, hand-mill'},
 '하분':{k:'나무에 사는 짐승. 사람보다 작아요. 독 가시를 뱉어요.',e:'Harboon'},
 '분봉':{k:'벌집이 너무 커지면 벌 일부가 새 집으로 떠나는 것.',e:'swarming; here: "budding" a daughter village',hj:'分蜂 · 分 = 나누다 · 蜂 = 벌'},
 '가시덤불':{k:'가시가 많은 덩굴과 덤불.',e:'briars, thorny brambles'},
 '파보':{k:'오스텔이 떠나온 마을.',e:'Pavo'},
 '카인의 표식':{k:'샤스킨이 단절약 자국을 부르는 말.',e:'"the Mark of Cain" (Sharskin’s name for Severance)'},
 '본래 상태':{k:'샤스킨의 말. 벌도 유령도 없던, 조상들의 처음 몸.',e:'"Original Condition" (Sharskin’s term)'},
 '조상의 집':{k:'샤스킨이 말하는 곳. 조상들이 만든 집.',e:'the House of our Ancestors'},
 '사제':{k:'사람들을 가르치고 이끄는 사람. 샤스킨이 자기를 부르는 말.',e:'priest'},
 '형제':{k:'형과 동생. 샤스킨은 추방자들을 형제라고 불러요.',e:'brothers (Sharskin’s word for his outcasts)'},
 '세브너':{k:'집만큼 큰 짐승. 다리가 여섯 개, 코끝에 집게가 있어요.',e:'Sevner'},
 '반짝이는 네모':{k:'샤스킨이 가진 작은 네모. 불을 붙일 수 있어요.',e:'the "bright square" (Sharskin’s fire-lighter)'},
};
const CONFUSE={'냄새를 맡다':['냄새가 나다','맛을 보다'],'국':['굴','꿈'],'줄을 서다':['줄을 쓰다','줄이다'],'노동':['노래','운동'],'인구':['입구','친구'],
 '붐비다':['비비다','비다'],'이사하다':['인사하다','이상하다'],'둥지':['동지','둥글다'],'알':['안','앞'],'던지다':['떨어지다','만지다'],'가시':['가지','과자'],
 '독':['돌','돈'],'불을 피우다':['불을 끄다','풀을 뽑다'],'게으르다':['귀엽다','가볍다'],'폐허':['폐지','허리'],'버려지다':['벌어지다','부러지다']};

/* extra review questions (the memory stone uses these too, alongside every NPC question) */
const BANK=[
 {w:'냄새를 맡다',ask:'빵집 앞에서 고소한 냄새를 ___.',opts:[['맡았어요',1],['맞았어요',0,'맞다는 비나 주사를 맞는 거예요. 코로 느끼면 → "맡았어요".']]},
 {w:'국',ask:'감기에 걸려서 엄마가 뜨거운 ___을 끓여 줬어요.',opts:[['국',1],['굴',0,'굴은 땅을 파서 만든 구멍이에요. 숟가락으로 먹는 건 "국".']]},
 {w:'줄을 서다',ask:'버스를 타려고 사람들이 길게 ___ 있어요.',opts:[['줄을 서',1],['줄을 써',0,'쓰다는 글을 쓰는 거예요. 차례대로 서면 → "줄을 서 있어요".']]},
 {w:'노동',ask:'하루 종일 밭에서 힘든 ___을 했어요.',opts:[['노동',1],['노래',0,'노래는 부르는 거예요. 몸으로 하는 힘든 일은 "노동".']]},
 {w:'인구',ask:'서울은 ___가 아주 많은 도시예요.',opts:[['인구',1],['입구',0,'입구는 들어가는 곳이에요. 사는 사람의 수는 "인구".']]},
 {w:'붐비다',ask:'주말에는 시장이 사람들로 ___.',opts:[['붐벼요',1],['비어요',0,'비다는 아무도 없는 거예요. 사람이 많으면 → "붐벼요".']]},
 {w:'이사하다',ask:'다음 달에 새 집으로 ___.',opts:[['이사해요',1],['인사해요',0,'인사하다는 "안녕하세요" 하는 거예요. 집을 옮기면 → "이사해요".']]},
 {w:'이사하다',ask:'아빠 회사 때문에 부산으로 ___.',opts:[['이사하게 됐어요',1],['이사하게 했어요',0,'"-게 하다"는 남을 시키는 거예요. 상황 때문에 그렇게 됐으면 → "이사하게 됐어요".']]},
 {w:'둥지',ask:'나무 위 ___에서 아기 새가 울어요.',opts:[['둥지',1],['동지',0,'동지는 밤이 제일 긴 날이에요. 새가 사는 곳은 "둥지".']]},
 {w:'알',ask:'거북이는 모래 속에 ___을 낳아요.',opts:[['알',1],['안',0,'안은 속이에요. 거북이가 낳는 건 "알".']]},
 {w:'던지다',ask:'공을 친구한테 ___.',opts:[['던졌어요',1],['떨어졌어요',0,'떨어지다는 혼자 아래로 가는 거예요. 손으로 멀리 보내면 → "던졌어요".']]},
 {w:'가시',ask:'생선 ___가 목에 걸렸어요.',opts:[['가시',1],['가지',0,'가지는 나무에서 갈라져 나온 부분이에요. 뾰족한 건 "가시".']]},
 {w:'독',ask:'이 버섯에는 ___이 있어요. 먹으면 안 돼요.',opts:[['독',1],['돌',0,'돌은 땅에 있는 딱딱한 거예요. 먹으면 아픈 건 "독".']]},
 {w:'불을 피우다',ask:'캠핑장에서 나무를 모아서 ___.',opts:[['불을 피웠어요',1],['불을 껐어요',0,'끄면 불이 없어져요. 불이 타게 하면 → "불을 피웠어요".']]},
 {w:'게으르다',ask:'동생은 너무 ___ 방 청소를 안 해요.',opts:[['게을러서',1],['게을러도',0,'"-어도"는 "그래도"라는 뜻이에요. 이유니까 → "게을러서".']]},
 {w:'폐허',ask:'큰 지진 뒤에 마을이 ___가 됐어요.',opts:[['폐허',1],['폐지',0,'폐지는 버린 종이예요. 무너진 마을은 "폐허".']]},
 {w:'버려지다',ask:'길에 ___ 고양이를 집에 데려왔어요.',opts:[['버려진',1],['부러진',0,'부러지다는 뼈나 막대기가 꺾이는 거예요. 아무도 안 돌보면 → "버려진".']]},
 {w:'노동',ask:'돈을 받는 ___ 밥을 받고 일했어요.',opts:[['대신에',1],['때문에',0,'"때문에"는 이유예요. 돈 말고 밥이면 → "받는 대신에".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 pot:[
  {who:'핸드리',w:'냄새를 맡다',ask:'솥에 코를 대고 국 냄새를 ___.',opts:[['맡았어요',1],['맞았어요',0,'맞다는 비나 매를 맞는 거예요. 코로 느끼면 → "맡았어요".'],['만났어요',0,'만나다는 사람을 보는 거예요. 코로 → "맡았어요".']]},
  {who:'핸드리',w:'냄새를 맡다',ask:'냄새를 따라오다가 여기까지 오___.',opts:[['게 됐어요',1],['고 싶어요',0,'"-고 싶다"는 바라는 거예요. 벌써 와 버렸어요 → "오게 됐어요".'],['게 했어요',0,'"-게 하다"는 남을 시키는 거예요. 저절로 그렇게 됐으면 → "오게 됐어요".']]},
 ],
 doctor:[
  {who:'…',w:'국',ask:'의사가 그릇에 뜨거운 ___을 담아 줘요.',opts:[['국',1],['굴',0,'굴은 땅을 파서 만든 구멍이에요. 숟가락으로 먹는 건 "국".'],['꿈',0,'꿈은 잘 때 보는 거예요. 먹는 건 "국".']]},
  {who:'…',w:'국',ask:'추운 날에는 뜨거운 ___ 한 그릇이 최고예요.',opts:[['국',1],['곡',0,'"곡"은 노래 한 곡, 두 곡이에요. 먹는 건 "국".']]},
 ],
 shar:[
  {who:'…',w:'줄을 서다',ask:'국을 받으려고 다들 ___.',opts:[['줄을 서요',1],['줄을 써요',0,'쓰다는 글을 쓰는 거예요. 차례대로 서면 → "줄을 서요".'],['줄여요',0,'줄이다는 작게 만드는 거예요. 차례대로 서면 → "줄을 서요".']]},
  {who:'핸드리',w:'줄을 서다',ask:'그날, 저는 정말 오랜만에 배부르게 먹___.',opts:[['게 됐어요',1],['을까 봐요',0,'"-을까 봐"는 걱정이에요. 결과로 그렇게 된 일 → "먹게 됐어요".'],['게 했어요',0,'"-게 하다"는 남을 시키는 거예요. → "먹게 됐어요".']]},
 ],
 out:[
  {who:'…',w:'붐비다',ask:'사람이 너무 많아서 골목이 ___.',opts:[['붐벼요',1],['비벼요',0,'비비다는 손을 문지르는 거예요. 사람이 많으면 → "붐벼요".'],['비어요',0,'비다는 아무도 없는 거예요. 반대예요! → "붐벼요".']]},
  {who:'…',w:'붐비다',ask:'땅이 없어서 옆으로 집을 짓___ 위로 지어요.',opts:[['는 대신에',1],['기 때문에',0,'"-기 때문에"는 이유예요. 옆이 아니라 위로 → "짓는 대신에".'],['기 전에',0,'"-기 전에"는 시간 순서예요. 옆이 아니라 위로 → "짓는 대신에".']]},
 ],
 ib:[
  {who:'…',w:'인구',ask:'한 마을에 사는 사람의 수는 ___예요.',opts:[['인구',1],['입구',0,'입구는 들어가는 곳이에요. 사람의 수 → "인구".'],['친구',0,'친구는 같이 노는 사람이에요. 사람의 수 → "인구".']]},
  {w:'노동',ask:'너희가 일하___ 내가 매일 국을 준다.',opts:[['는 대신에',1],['지 않으면',0,'일 안 하면 국을 줘요? 반대예요! 일하고 국을 받으면 → "일하는 대신에".']]},
  {who:'…',w:'노동',ask:'막대기와 돌로 짐승을 쫓는 힘든 일 → ___.',opts:[['노동',1],['노래',0,'노래는 부르는 거예요. 힘든 몸 일은 "노동".'],['운동',0,'운동은 건강하려고 하는 거예요. 먹으려고 하는 힘든 일은 "노동".']]},
 ],
 fire:[
  {w:'이사하다',ask:'오로보 사람 몇 명이 새 나무로 ___ 거야.',opts:[['이사할',1],['인사할',0,'인사하다는 "안녕" 하는 거예요. 사는 곳을 옮기면 → "이사할".'],['이상할',0,'이상하다는 보통과 다른 거예요. 사는 곳을 옮기면 → "이사할".']]},
  {who:'…',w:'이사하다',ask:'마을이 너무 커지면 일부는 다른 곳으로 이사하게 ___.',opts:[['돼요',1],['해요',0,'"-게 하다"는 남을 시키는 거예요. 저절로 그렇게 되면 → "이사하게 돼요".']]},
 ],
 hunt:[
  {who:'…',w:'독',ask:'먹으면 죽을 수도 있는 것은 ___이에요.',opts:[['독',1],['돌',0,'돌은 땅에 있는 딱딱한 거예요. 몸을 아프게 하는 건 "독".'],['돈',0,'돈으로는 물건을 사요. 몸을 아프게 하는 건 "독".']]},
  {w:'독',ask:'우리가 올라가___ 너희가 올라가.',opts:[['는 대신에',1],['기 때문에',0,'이유가 아니에요. 우리 말고 너희 → "올라가는 대신에".'],['는데',0,'"-는데"는 배경을 말해요. 우리 말고 너희 → "올라가는 대신에".']]},
 ],
 sharT:[
  {w:'던지다',ask:'하분이 오면 돌을 ___.',opts:[['던져',1],['떨어져',0,'떨어지다는 혼자 아래로 가는 거예요. 손으로 멀리 보내면 → "던져".'],['만져',0,'만지다는 손을 대는 거예요. 멀리 보내면 → "던져".']]},
  {w:'던지다',ask:'돌이 없으면 막대기라도 ___ 돼.',opts:[['던지면',1],['던지려고',0,'"-려고"는 계획이에요. 조건이니까 → "던지면 돼".']]},
 ],
 harb:[
  {who:'…',w:'가시',ask:'하분이 뱉은 ___에 독이 있어요.',opts:[['가시',1],['가지',0,'가지는 나무에서 갈라져 나온 부분이에요. 뾰족한 건 "가시".'],['과자',0,'과자는 먹는 간식이에요! 뾰족한 건 "가시".']]},
  {who:'핸드리',w:'가시',ask:'단절약 때문에 저는 가시의 독을 별로 안 느끼___.',opts:[['게 됐어요',1],['게 했어요',0,'"-게 하다"는 남을 시키는 거예요. 몸이 저절로 바뀌었으니까 → "느끼게 됐어요".'],['고 싶어요',0,'바라는 게 아니에요. 벌써 그렇게 됐어요 → "느끼게 됐어요".']]},
 ],
 nest:[
  {who:'…',w:'둥지',ask:'하분들은 나뭇가지 위에 막대기로 ___를 지어요.',opts:[['둥지',1],['동지',0,'동지는 밤이 제일 긴 날이에요. 하분이 사는 곳은 "둥지".'],['상자',0,'상자는 물건을 넣는 거예요. 하분이 지은 집은 "둥지".']]},
  {who:'…',w:'알',ask:'하분은 둥지에 ___을 낳아요.',opts:[['알',1],['안',0,'안은 속이에요. 하분이 낳는 건 "알".'],['앞',0,'앞은 뒤의 반대예요. 하분이 낳는 건 "알".']]},
 ],
 ibt:[
  {who:'…',w:'이사하다',ask:'이블리스는 누가 새 마을로 ___ 정해요.',opts:[['이사할지',1],['인사할지',0,'인사하다는 "안녕하세요" 하는 거예요. 사는 곳을 옮기면 → "이사할지".']]},
 ],
 ibr:[
  {who:'핸드리',w:'노동',ask:'이블리스는 우리가 노동하는 ___ 국을 줘요.',opts:[['대신에',1],['때문에',0,'"때문에"는 이유예요. 일하고 국을 받았으면 → "노동하는 대신에".'],['전에',0,'"전에"는 "노동하기 전에"처럼 써요. 일하고 국을 받았으면 → "노동하는 대신에".']]},
 ],
 men:[
  {who:'핸드리',w:'게으르다',ask:'일은 안 하고 매일 누워만 있어요. 정말 ___.',opts:[['게을러요',1],['귀여워요',0,'귀엽다는 아기나 강아지를 볼 때 해요. 일을 안 하면 → "게을러요".'],['가벼워요',0,'가볍다는 무게가 안 나가는 거예요. 일을 안 하면 → "게을러요".']]},
  {who:'핸드리',w:'게으르다',ask:'메닉은 나무를 모으___ 잠만 자요.',opts:[['는 대신에',1],['기 때문에',0,'"-기 때문에"는 이유예요. 일 말고 잠 → "모으는 대신에".'],['기 전에',0,'"-기 전에"는 시간 순서예요. 일 말고 잠 → "모으는 대신에".']]},
 ],
 sr:[
  {who:'…',w:'불을 피우다',ask:'추워요. 나무를 모아서 ___.',opts:[['불을 피워요',1],['불을 꺼요',0,'끄면 불이 없어져요. 불이 타게 하면 → "불을 피워요".'],['풀을 뽑아요',0,'풀을 뽑는 건 밭일이에요. 불이 타게 하면 → "불을 피워요".']]},
  {who:'핸드리',w:'불을 피우다',ask:'샤스킨 덕분에 우리는 따뜻한 불 옆에서 자___.',opts:[['게 됐어요',1],['게 했어요',0,'"-게 하다"는 남을 시키는 거예요. 우리한테 그렇게 된 일 → "자게 됐어요".']]},
 ],
 bones:[
  {who:'…',w:'폐허',ask:'집들이 무너지고, 마을은 ___가 됐어요.',opts:[['폐허',1],['폐지',0,'폐지는 버린 종이예요. 무너진 마을은 "폐허".'],['허리',0,'허리는 몸의 가운데예요. 무너진 마을은 "폐허".']]},
  {who:'…',w:'폐허',ask:'결국 이 마을에는 아무도 안 살___.',opts:[['게 됐어요',1],['게 했어요',0,'"-게 하다"는 누가 시키는 거예요. 결과로 그렇게 된 거니까 → "살게 됐어요".']]},
 ],
 str:[
  {who:'…',w:'버려지다',ask:'아무도 안 사는 ___ 곳이에요.',opts:[['버려진',1],['벌어진',0,'벌어지다는 틈이 생기는 거예요. 아무도 안 돌보면 → "버려진".'],['부러진',0,'부러지다는 막대기가 꺾이는 거예요. 아무도 안 돌보면 → "버려진".']]},
  {who:'…',w:'버려지다',ask:'조상들이 떠나서 이곳은 버려지___.',opts:[['게 됐어요',1],['게 했어요',0,'"-게 하다"는 누가 시키는 거예요. 그렇게 된 거니까 → "버려지게 됐어요".']]},
 ],
 cafe:[ // the Orovo child's riddles: old words from 성실호, 1장 and 2장, no badges
  {ask:'뜨거운 국에 손가락을 ___.',opts:[['데었어요',1],['되었어요',0,'"되다"는 무엇이 바뀌는 거예요. 뜨거워서 다쳤으면 → "데었어요".']]},
  {ask:'벌한테 ___ 팔이 부었어요.',opts:[['쏘여서',1],['쏴서',0,'내가 쏜 게 아니에요. 벌한테 당했으면 → "쏘여서".']]},
  {ask:'너무 추워서 손이 ___ 것 같아요.',opts:[['얼',1],['열',0,'열은 몸이 뜨거운 거예요. 추우면 → "얼 것 같아요".']]},
  {ask:'밤에 몰래 빵을 ___ 사람은 도둑이에요.',opts:[['훔친',1],['흘린',0,'흘리다는 물이나 눈물이 떨어지는 거예요. 몰래 가져가면 → "훔친".']]},
  {ask:'친구들이 다 떠나서 너무 ___.',opts:[['외로워요',1],['외워요',0,'외우다는 단어를 기억하는 거예요. 혼자라서 쓸쓸하면 → "외로워요".']]},
  {ask:'다리에 큰 ___가 있어요. 피가 나요.',opts:[['상처',1],['상태',0,'상태는 지금 어떤지예요. 다쳐서 생긴 곳은 "상처".']]},
  {ask:'친구가 인사를 안 받아요. 저를 ___.',opts:[['무시해요',1],['무사해요',0,'무사하다는 다친 데 없이 괜찮은 거예요. 못 본 것처럼 하면 → "무시해요".']]},
  {ask:'해는 아침에 ___에서 떠요.',opts:[['동쪽',1],['서쪽',0,'서쪽은 해가 지는 쪽이에요. 아침 해는 "동쪽".']]},
  {ask:'눈 위에 짐승이 지나간 ___이 있어요.',opts:[['흔적',1],['흉터',0,'흉터는 상처가 나은 뒤에 피부에 남는 거예요. 지나간 뒤에 남은 건 "흔적".']]},
  {ask:'맷돌이 ___ 나서 못 돌려요.',opts:[['고장',1],['공장',0,'공장은 물건을 만드는 곳이에요. 망가져서 안 움직이면 → "고장 나다".']]},
 ],
};

/* in-character review (engine: linesFor, reviewPick, sayLine): people use a word you've learned again, in their own voice.
   Who can ask (engine): anyone whose talk doesn't move the story, once they've taught their own words. Here that is the stew
   yard until you leave Orovo (the doctor, the three in the line, the starving outcast, Ostel, Menic; Sharskin only until
   Iblis's speech), the villager, the hunter during the war, and Ostel on the road. Sharskin at the tree (while you climb to
   the nest), Sharskin on the road (the morning, and the dead villages until both words) and Menic on the road (asleep) say
   their usual line as an `after`, then a line. † Iblis and Sharskin at the fire only ever talk through story steps or teach,
   so their lines never play as the story runs now (kept for a later idle moment).
   Ostel's, Menic's and the villager's yard lines start the morning after the fire talk, so a first talk still introduces them;
   the old man in the line stays silent until the festival night; on the road Ostel's bush hint comes first.
   Invented (inv., non-decisive): the yard filling with new faces (book §V: more outcasts kept turning up); a thief in the
   yard; the man who missed a day's stew; the hive's wasps leaving the yard's outcasts alone too (book: fleas leave Sethr §I,
   wasps go round Handry §II, animals shun outcasts §V); Menic itching since he was Severed (book §II: rashes from touching
   anything), and wanting someone to queue for him; the villager wondering if her house will move, and hearing her
   neighbours through the walls; the hunters having nowhere to set traps near Orovo (the woods hunted empty is canon); the old
   outcast's two lines; Ostel's warning about flowers he doesn't know; cold hands at the second camp (book §VI: Menic warms
   his hands at Ostel's fire); Ostel uneasy about breaking eggs. */
const WAR=()=>!!f().warDone,BUD=()=>!!f().budding,ROAD=()=>!(rp()===1&&!hasItem('숲 음식'));
const REVIEW=[
 /* 오로보 의사 · the stew yard, the first evening to the festival night (his after line comes first) */
 {w:'냄새를 맡다',by:'doctor',ask:'다들 이 냄새를 ___ 와. 너도 그랬지?',opts:[['맡고',1],['맞고',0,'맞다는 비나 매를 맞는 거야. 코로 느끼면 "맡고".'],['만나고',0,'만나다는 사람을 보는 거야. 코로 느끼면 "맡고".']]},
 {w:'국',by:'doctor',when:()=>!WAR(),ask:'걱정 마. 내일도 ___을 끓일 거야.',opts:[['국',1],['굴',0,'굴은 땅을 판 구멍이야. 숟가락으로 먹는 건 "국".'],['꿈',0,'꿈은 잘 때 꾸는 거야. 숟가락으로 먹는 건 "국".']]},
 {w:'국',by:'doctor',when:WAR,ask:'오늘이 마지막 ___이야. 천천히 먹어.',opts:[['국',1],['굴',0,'굴은 땅을 판 구멍이야. 숟가락으로 먹는 건 "국".'],['꿈',0,'꿈은 잘 때 꾸는 거야. 숟가락으로 먹는 건 "국".']]},
 {w:'노동',by:'doctor',ask:'이 국은 너희 ___의 값이야. 공짜가 아니야.',opts:[['노동',1],['노래',0,'노래로는 국을 못 받아. 몸으로 하는 힘든 일은 "노동".'],['운동',0,'운동은 건강하려고 하는 거야. 먹으려고 하는 힘든 일은 "노동".']]},
 {w:'인구',by:'doctor',ask:'오로보는 ___가 너무 많아. 의사가 셋이어도 바빠.',opts:[['인구',1],['입구',0,'입구는 들어가는 곳이야. 사는 사람의 수는 "인구".'],['친구',0,'친구는 같이 노는 사람이야. 사는 사람의 수는 "인구".']]},
 {w:'가마솥',by:'doctor',ask:'이 하얀 ___에서 너희 국이 끓어.',opts:[['가마솥',1],['가면',0,'가면은 얼굴에 쓰는 거야. 국 끓이는 큰 솥은 "가마솥".'],['가방',0,'가방에는 물건을 넣지. 국 끓이는 큰 솥은 "가마솥".']]},
 {w:'끓이다',by:'doctor',ask:'너희 국은 내가 따로 ___. 너희 몸에 맞게.',opts:[['끓여',1],['끓어',0,'"끓어"는 물이 혼자 끓는 거야. 내가 하면 "끓여".'],['꿇어',0,'꿇다는 무릎을 꿇는 거야. 국은 "끓여".']]},
 {w:'타다',by:'doctor',ask:'솥 바닥이 ___ 않게 계속 저어야 해.',opts:[['타지',1],['데지',0,'데다는 사람 살이 뜨거운 데 다치는 거야. 솥 바닥은 "타지".'],['따지',0,'따다는 열매를 손으로 떼는 거야. 까맣게 되는 건 "타지".']]},
 /* the stew line (inv.) · 추방자 grumbles, from the first evening to the festival night */
 {w:'줄을 서다',by:'lineA',ask:'끼어들지 마. 맨 뒤에 가서 ___.',opts:[['줄을 서',1],['줄을 써',0,'쓰긴 뭘 써. 맨 뒤에 서는 거야, "줄을 서".'],['줄여',0,'줄이긴 뭘 줄여. 맨 뒤에 서는 거야, "줄을 서".']]},
 {w:'굶다',by:'lineA',ask:'어제 국을 놓쳐서 하루 종일 ___.',opts:[['굶었어',1],['끓었어',0,'끓다는 물이 뜨거워지는 거야. 하나도 못 먹었으면 "굶었어".'],['긁었어',0,'긁다는 가려운 데를 손톱으로 하는 거야. 못 먹었으면 "굶었어".']]},
 {w:'도둑',by:'lineA',ask:'그릇 꽉 쥐고 있어. 여기도 ___이 있어.',opts:[['도둑',1],['도장',0,'도장은 이름을 찍는 거야. 남의 걸 가져가는 사람은 "도둑".'],['동생',0,'동생은 가족이지. 남의 걸 가져가는 사람은 "도둑".']]},
 {w:'가시',by:'lineA',when:WAR,ask:'팔에 ___가 잔뜩 박혔어. 안 아파도 귀찮아.',opts:[['가시',1],['가지',0,'가지는 나무에서 갈라진 부분이야. 팔에 박힌 건 "가시".'],['과자',0,'과자? 먹는 거? 팔에 박힌 건 "가시".']]},
 {w:'도망치다',by:'lineA',when:WAR,ask:'하분들은 숲으로 ___. 이제 국은 끝이야.',opts:[['도망쳤어',1],['도와줬어',0,'하분이 누굴 도와. 무서워서 달아났으면 "도망쳤어".'],['놀러 갔어',0,'놀러 간 게 아니야. 무서워서 달아났으면 "도망쳤어".']]},
 /* 젊은 추방자 knows the yard's rules */
 {w:'국',by:'lineB',ask:'하루에 한 번뿐이야. ___ 한 방울도 흘리지 마.',opts:[['국',1],['굴',0,'굴은 땅을 판 구멍이야. 숟가락으로 먹는 건 "국".'],['꿈',0,'꿈은 잘 때 꾸는 거야. 숟가락으로 먹는 건 "국".']]},
 {w:'노동',by:'lineB',ask:'설계자는 ___ 안 하는 사람한테는 국 안 줘.',opts:[['노동',1],['노래',0,'노래하면 국 줘? 아니야. 몸으로 하는 힘든 일, "노동".'],['운동',0,'운동이 아니라 일이야. 몸으로 하는 힘든 일, "노동".']]},
 {w:'해가 뜨다',by:'lineB',when:()=>b('노동')&&!BUD(),ask:'내일 ___ 숲으로 간대. 일찍 자.',opts:[['해가 뜨면',1],['해가 지면',0,'해가 지면 밤이잖아. 아침에 가니까 "해가 뜨면".'],['해가 타면',0,'해는 안 타. 아침에 하늘에 나오면 "해가 뜨면".']]},
 {w:'쏘다',by:'lineB',ask:'여기 벌들도 우리는 안 ___. 신기하지?',opts:[['쏴',1],['싸',0,'싸다는 짐을 싸는 거야. 벌은 침으로 "쏴".'],['써',0,'쓰다는 글을 쓰는 거야. 벌은 침으로 "쏴".']]},
 /* 늙은 추방자 says nothing until the festival night */
 {w:'무시하다',by:'lineC',when:WAR,pre:['…'],ask:'마을 사람들은 우리를 ___. 없는 것처럼.',opts:[['무시해',1],['무사해',0,'…무사하다는 다친 데가 없는 거야. 없는 것처럼 보면 "무시해".'],['부러워해',0,'…부러워하는 게 아니야. 없는 것처럼 보면 "무시해".']]},
 {w:'상처',by:'lineC',when:WAR,pre:['…'],ask:'여기 ___ 없는 사람은 없어. 다들.',opts:[['상처',1],['상태',0,'…상태는 지금 어떤지야. 다쳐서 생긴 건 "상처".'],['상대',0,'…상대는 같이 싸우는 사람이야. 다쳐서 생긴 건 "상처".']]},
 /* 샤스킨 keeps the stew line on the first evening (he goes to the fire once 이블리스 has spoken) */
 {w:'줄을 서다',by:'sharskin',ask:'내일도 ___. 새치기하면 내가 막아.',opts:[['줄을 서',1],['줄을 써',0,'쓰는 게 아니야. 차례대로 서는 거야, "줄을 서".'],['줄여',0,'줄이는 게 아니야. 차례대로 서는 거야, "줄을 서".']]},
 {w:'국',by:'sharskin',ask:'___ 한 그릇이면 내일까지 버틸 수 있어.',opts:[['국',1],['굴',0,'굴은 땅을 판 구멍이야. 그릇에 담는 건 "국".'],['꿈',0,'꿈으로는 못 버텨. 그릇에 담는 건 "국".']]},
 {w:'숨다',by:'sharskin',ask:'여기선 ___ 필요 없어. 일만 하면 아무도 안 쫓아.',opts:[['숨을',1],['숨 쉴',0,'숨은 쉬어야지. 몸을 감추는 건 "숨을".'],['쉴',0,'쉬는 건 괜찮아. 몸을 감추는 건 "숨을".']]},
 {w:'배고프다',by:'sharskin',ask:'___ 밀지 마. 다 먹을 수 있어.',opts:[['배고파도',1],['배불러도',0,'배부르면 밀 일도 없지. 먹고 싶어도 그래도, "배고파도".'],['배워도',0,'배우다는 공부하는 거야. 먹고 싶어도 그래도, "배고파도".']]},
 /* 굶주린 추방자 · the yard, the first evening to the festival night (his after line comes first) */
 {w:'붐비다',by:'outcast',when:()=>!WAR(),ask:'요즘은 이 마당도 ___. 새 얼굴이 많아.',opts:[['붐벼',1],['비어',0,'비다는 아무도 없는 거야. 반대야! 사람이 많으면 "붐벼".'],['비벼',0,'비비다는 손을 문지르는 거야. 사람이 많으면 "붐벼".']]},
 {w:'인구',by:'outcast',ask:'___가 이렇게 많으니까 새 마을이 필요하지.',opts:[['인구',1],['입구',0,'입구는 들어가는 데야. 사는 사람 수는 "인구".'],['친구',0,'친구가 많은 건 좋은 거지. 사는 사람 수는 "인구".']]},
 {w:'숲',by:'outcast',ask:'오로보 ___은 텅 비었어. 사냥꾼들이 다 잡았대.',opts:[['숲',1],['숯',0,'숯은 나무를 태운 검은 거야. 나무가 많은 곳은 "숲".'],['술',0,'술은 어른들이 마시는 거야. 나무가 많은 곳은 "숲".']]},
 {w:'훔치다',by:'outcast',when:()=>!WAR(),ask:'여기선 안 ___도 돼. 국이 나오니까.',opts:[['훔쳐',1],['흘려',0,'흘리다는 물이 떨어지는 거야. 몰래 가져가는 건 "훔쳐".'],['흔들어',0,'흔들다는 이리저리 움직이는 거야. 몰래 가져가는 건 "훔쳐".']]},
 {w:'화상',by:'outcast',ask:'얼굴 그 자국은 ___ 같네. 많이 아팠지?',opts:[['화상',1],['화장',0,'화장은 얼굴을 예쁘게 하는 거야. 데어서 생긴 건 "화상".'],['화살',0,'화살은 활로 쏘는 거야. 데어서 생긴 건 "화상".']]},
 {w:'둥지',by:'outcast',when:WAR,ask:'하분 ___ 부수는 일은 끝났어. 이제 어디로 가지?',opts:[['둥지',1],['동지',0,'동지는 밤이 제일 긴 날이야. 하분 집은 "둥지".'],['상자',0,'상자는 물건 넣는 거야. 하분이 지은 집은 "둥지".']]},
 {w:'독',by:'outcast',when:WAR,ask:'가시에 ___이 있어도 우린 괜찮았어. 떨어지는 게 무서웠지.',opts:[['독',1],['돌',0,'돌은 딱딱한 거야. 몸을 아프게 하는 건 "독".'],['돈',0,'가시에 돈이 있으면 좋게? 몸을 아프게 하는 건 "독".']]},
 {w:'공동체',by:'outcast',when:WAR,ask:'내일이면 또 혼자야. 우릴 받아 줄 ___는 없어.',opts:[['공동체',1],['공기',0,'공기는 숨 쉬는 거야. 같이 사는 사람들은 "공동체".'],['공부',0,'공부는 책으로 배우는 거야. 같이 사는 사람들은 "공동체".']]},
 /* 오스텔 in the yard, from the morning after the fire talk */
 {w:'외롭다',by:'ostel',when:BUD,ask:'사람은 이렇게 많은데… 왜 더 ___?',opts:[['외로울까',1],['외울까',0,'외우다는 기억하는 거야. 혼자라서 쓸쓸하면 "외로울까".'],['새로울까',0,'새롭다는 처음 보는 거야. 혼자라서 쓸쓸하면 "외로울까".']]},
 {w:'이사하다',by:'ostel',when:BUD,ask:'새 나무로 ___ 사람들은 좋겠다. 집이 생기잖아.',opts:[['이사하는',1],['인사하는',0,'인사는 "안녕" 하는 거야. 사는 곳을 옮기면 "이사하는".'],['이상한',0,'이상하다는 보통이랑 다른 거야. 사는 곳을 옮기면 "이사하는".']]},
 {w:'알',by:'ostel',when:WAR,ask:'___을 깰 때… 기분이 이상했어. 너는?',opts:[['알',1],['안',0,'안은 속이야. 하분이 낳은 건 "알".'],['앞',0,'앞은 뒤의 반대야. 하분이 낳은 건 "알".']]},
 /* 메닉 in the yard, from the morning after the fire talk */
 {w:'줄을 서다',by:'menic',when:BUD,ask:'___ 귀찮아. 누가 내 국 좀 받아 줘.',opts:[['줄을 서기',1],['줄을 쓰기',0,'쓰긴 뭘 써. 차례대로 서는 거, "줄을 서기".'],['줄이기',0,'줄이긴 뭘 줄여. 차례대로 서는 거, "줄을 서기".']]},
 {w:'노동',by:'menic',when:BUD,ask:'설계자가 시키는 ___은 싫어. 국만 먹고 싶어.',opts:[['노동',1],['노래',0,'노래는 좋아. 싫은 건 힘든 일, "노동".'],['운동',0,'운동도 싫지만… 지금은 힘든 일, "노동".']]},
 {w:'해가 뜨다',by:'menic',when:BUD,ask:'___ 전에는 깨우지 마.',opts:[['해가 뜨기',1],['해가 뜬',0,'"전에" 앞에는 "-기"가 와. "해가 뜨기" 전에.'],['해가 타기',0,'해는 안 타. 아침에 나오는 건 "해가 뜨기".']]},
 {w:'가렵다',by:'menic',when:BUD,ask:'쫓겨난 뒤로 몸이 자꾸 ___. 등 좀 긁어 줘.',opts:[['가려워',1],['가벼워',0,'가볍다는 무게 얘기야. 긁고 싶으면 "가려워".'],['그리워',0,'그립다는 보고 싶은 거야. 긁고 싶으면 "가려워".']]},
 {w:'어둠',by:'menic',when:WAR,ask:'___ 속에서도 맷돌 소리가 나. 못 자겠어.',opts:[['어둠',1],['얼음',0,'얼음은 차가운 물이야. 빛이 없는 건 "어둠".'],['어른',0,'어른은 다 큰 사람이야. 빛이 없는 건 "어둠".']]},
 /* 오로보 사람 (inv.) mutters to herself as she passes (she never sees you), from the morning after the fire talk on */
 {w:'붐비다',by:'villager',when:BUD,ask:'아이고, 오늘도 골목이 ___. 지나갈 수가 없네.',opts:[['붐비네',1],['비네',0,'비긴 뭐가 비어. 사람이 많아서 못 지나가면 "붐비네".'],['비비네',0,'비비다는 손을 문지르는 거지. 사람이 많으면 "붐비네".']]},
 {w:'이사하다',by:'villager',when:BUD,ask:'우리 집도 새 나무로 ___ 될까?',opts:[['이사하게',1],['인사하게',0,'인사는 "안녕" 하는 거지. 사는 곳을 옮기면 "이사하게".'],['이상하게',0,'이상하다는 보통이랑 다른 거지. 사는 곳을 옮기면 "이사하게".']]},
 {w:'이웃',by:'villager',when:BUD,ask:'___ 집이 너무 가까워. 말소리가 다 들려.',opts:[['이웃',1],['이불',0,'이불은 덮는 거지. 옆집 사람은 "이웃".'],['이유',0,'이유는 "왜"의 대답이지. 옆집 사람은 "이웃".']]},
 /* † 이블리스 and 샤스킨 at the fire always talk through their scripts */
 {w:'노동',by:'이블리스',ask:'일해라. ___한 만큼 먹인다.',opts:[['노동',1],['노래',0,'노래로는 안 먹인다. 몸으로 하는 힘든 일, "노동".'],['운동',0,'운동이 아니다. 먹으려고 하는 힘든 일, "노동".']]},
 {w:'인구',by:'sharskinFire',when:WAR,ask:'___가 많은 마을은 나뉘어야 해. 벌집처럼.',opts:[['인구',1],['입구',0,'입구는 들어가는 곳이야. 사는 사람 수는 "인구".'],['친구',0,'친구가 넘치면 좋게? 사는 사람 수는 "인구".']]},
 {w:'이사하다',by:'sharskinFire',when:WAR,ask:'새 마을로 ___ 사람은 설계자가 골라. 우리는 아니야.',opts:[['이사할',1],['인사할',0,'인사는 "안녕" 하는 거야. 사는 곳을 옮기면 "이사할".'],['이상할',0,'이상하다는 보통이랑 다른 거야. 사는 곳을 옮기면 "이사할".']]},
 /* 오로보 사냥꾼 at the edge of the clearing, during the war (his after line comes first) */
 {w:'독',by:'hunter',when:()=>!WAR(),ask:'___ 가시는 너희가 맞아. 우리는 여기서 지켜.',opts:[['독',1],['돌',0,'돌 가시는 없어. 몸을 아프게 하는 건 "독".'],['돈',0,'돈 가시? 그런 건 없어. 몸을 아프게 하는 건 "독".']]},
 {w:'가시',by:'hunter',when:()=>!WAR(),ask:'하분 ___에 맞았는데 정말 안 아파?',opts:[['가시',1],['가지',0,'가지는 나무에서 갈라진 부분이야. 하분이 뱉는 건 "가시".'],['과자',0,'과자는 먹는 거지. 하분이 뱉는 건 "가시".']]},
 {w:'둥지',by:'hunter',when:()=>!WAR(),ask:'위에 ___가 아직 있어. 하나도 남기지 마.',opts:[['둥지',1],['동지',0,'동지는 밤이 제일 긴 날이야. 하분이 사는 집은 "둥지".'],['상자',0,'상자는 물건 넣는 거야. 하분이 지은 집은 "둥지".']]},
 {w:'알',by:'hunter',when:()=>!WAR(),ask:'___을 남기면 하분이 또 생겨. 다 부숴.',opts:[['알',1],['안',0,'안은 속이야. 하분이 낳는 건 "알".'],['앞',0,'앞은 뒤의 반대야. 하분이 낳는 건 "알".']]},
 {w:'던지다',by:'hunter',when:()=>!WAR(),ask:'돌은 멀리서 ___. 하분 발톱 조심해.',opts:[['던져',1],['떨어져',0,'떨어지다는 혼자 아래로 가는 거야. 손으로 멀리 보내면 "던져".'],['만져',0,'만지면 발톱에 다쳐. 멀리 보내면 "던져".']]},
 {w:'이사하다',by:'hunter',when:()=>!WAR(),ask:'일이 끝나면 오로보 사람들이 여기로 ___.',opts:[['이사해',1],['인사해',0,'인사는 "안녕" 하는 거야. 사는 곳을 옮기면 "이사해".'],['이상해',0,'이상하다는 보통이랑 다른 거야. 사는 곳을 옮기면 "이사해".']]},
 {w:'냄새를 맡다',by:'hunter',when:()=>!WAR(),ask:'짐승들은 너희 냄새만 ___도 싫어해.',opts:[['맡아',1],['맞아',0,'맞다는 비나 매를 맞는 거야. 코로 느끼면 "맡아".'],['만나',0,'만나다는 사람을 보는 거야. 코로 느끼면 "맡아".']]},
 {w:'사냥꾼',by:'hunter',when:()=>!WAR(),ask:'나는 ___이지만, 저 나무엔 안 올라가.',opts:[['사냥꾼',1],['사냥개',0,'사냥개는 사냥을 돕는 개야. 나는 사람이야, "사냥꾼".'],['사냥감',0,'사냥감은 잡히는 짐승이야. 나는 잡는 사람, "사냥꾼".']]},
 {w:'덫',by:'hunter',when:()=>!WAR(),ask:'오로보 근처엔 ___ 놓을 데도 없어. 숲이 텅 비었거든.',opts:[['덫',1],['돛',0,'돛은 배에 다는 천이야. 짐승 잡는 건 "덫".'],['떡',0,'떡은 먹는 거지. 짐승 잡는 건 "덫".']]},
 /* 샤스킨 at the tree while you climb to the nest (his after line comes first; from the nest on, his script) */
 {w:'던지다',by:'sharskinTree',ask:'높이 ___. 둥지를 노려.',opts:[['던져',1],['떨어져',0,'떨어지는 게 아니야. 손으로 멀리 보내, "던져".'],['만져',0,'만지지 말고 멀리 보내. "던져".']]},
 /* 오스텔 on the road: rp 0 the first day, 1 the first camp (his bush hint first), 2 the morning, 3 the second camp,
    4 after Menic, done at the door */
 {w:'붐비다',by:'ostelR',when:()=>ROAD()&&rp()<3,ask:'오로보는 너무 ___. 여기는 조용해서 좋아.',opts:[['붐볐어',1],['비었어',0,'비다는 아무도 없는 거야. 사람이 많았으면 "붐볐어".'],['비볐어',0,'비비다는 손을 문지르는 거야. 사람이 많았으면 "붐볐어".']]},
 {w:'꽃잎',by:'ostelR',when:()=>ROAD()&&rp()<=1,ask:'모르는 꽃은 먹지 마. ___에 독이 있을 수 있어.',opts:[['꽃잎',1],['꽃집',0,'꽃집은 꽃 파는 데야. 꽃의 얇은 부분은 "꽃잎".'],['꽃병',0,'꽃병은 꽃을 꽂는 병이야. 꽃의 얇은 부분은 "꽃잎".']]},
 {w:'게으르다',by:'ostelR',when:()=>ROAD()&&!f().menicDead,ask:'메닉은 너무 ___. 샤스킨이 계속 봐.',opts:[['게을러',1],['귀여워',0,'귀엽긴! 일을 안 하면 "게을러".'],['가벼워',0,'가볍다는 무게 얘기야. 일을 안 하면 "게을러".']]},
 {w:'불을 피우다',by:'ostelR',when:()=>rp()===2,ask:'샤스킨은 네모 하나로 ___. 봤어?',opts:[['불을 피웠어',1],['불을 껐어',0,'끄면 불이 없어지잖아. 불이 타게 했으면 "불을 피웠어".'],['풀을 뽑았어',0,'풀 뽑은 게 아니야. 불이 타게 했으면 "불을 피웠어".']]},
 {w:'동쪽',by:'ostelR',when:()=>rp()===2,ask:'___ 하늘이 밝아. 벌써 아침이야.',opts:[['동쪽',1],['서쪽',0,'서쪽은 해가 지는 쪽이야. 아침에 밝은 건 "동쪽".'],['동네',0,'동네는 사람 사는 데야. 방향은 "동쪽".']]},
 {w:'불을 피우다',by:'ostelR',when:()=>rp()===3,ask:'오늘은 내가 ___. 따뜻하지?',opts:[['불을 피웠어',1],['불을 껐어',0,'껐으면 추웠겠지. 불이 타게 했으면 "불을 피웠어".'],['풀을 뽑았어',0,'풀 뽑은 게 아니야. 불이 타게 했으면 "불을 피웠어".']]},
 {w:'얼다',by:'ostelR',when:()=>rp()===3,ask:'불 가까이 와. 손이 ___ 것 같아.',opts:[['얼',1],['열',0,'열은 몸이 뜨거운 거야. 추우면 "얼" 것 같아.'],['울',0,'울다는 눈물 나는 거야. 추우면 "얼" 것 같아.']]},
 {w:'흔적',by:'ostelR',when:()=>rp()===3,ask:'세브너가 지나간 ___이 아직 있어. 엄청 커.',opts:[['흔적',1],['흉터',0,'흉터는 상처가 나은 자국이야. 지나간 뒤에 남은 건 "흔적".'],['약속',0,'약속은 미리 정하는 거야. 지나간 뒤에 남은 건 "흔적".']]},
 {w:'냄새를 맡다',by:'ostelR',when:()=>rp()>=3,ask:'세브너는 우리 냄새를 ___ 화를 냈어.',opts:[['맡고',1],['맞고',0,'맞다는 비나 매를 맞는 거야. 코로 느끼면 "맡고".'],['만나고',0,'만나다는 사람을 보는 거야. 코로 느끼면 "맡고".']]},
 {w:'던지다',by:'ostelR',when:()=>rp()>=3,ask:'우리가 세브너 눈에 돌을 ___. 봤지?',opts:[['던졌어',1],['떨어졌어',0,'떨어지다는 혼자 아래로 가는 거야. 손으로 보냈으면 "던졌어".'],['만졌어',0,'세브너 눈을 만져? 무서워! 손으로 보냈으면 "던졌어".']]},
 {w:'게으르다',by:'ostelR',when:()=>!!f().menicDead,ask:'샤스킨 앞에서는 절대 ___ 안 돼.',opts:[['게으르면',1],['귀여우면',0,'귀여운 게 문제가 아니야. 일을 안 하면, "게으르면".'],['가벼우면',0,'무게 얘기가 아니야. 일을 안 하면, "게으르면".']]},
 {w:'폐허',by:'ostelR',ask:'오는 길에 ___가 너무 많았어. 무서워.',opts:[['폐허',1],['폐지',0,'폐지는 버린 종이야. 무너진 마을은 "폐허".'],['허리',0,'허리는 몸 가운데야. 무너진 마을은 "폐허".']]},
 {w:'버려지다',by:'ostelR',ask:'___ 곳은 싫어. 빨리 가자.',opts:[['버려진',1],['벌어진',0,'벌어지다는 틈이 생기는 거야. 아무도 안 사는 곳은 "버려진".'],['부러진',0,'부러지다는 막대기가 꺾이는 거야. 아무도 안 사는 곳은 "버려진".']]},
 {w:'캄캄하다',by:'ostelR',when:()=>!!f().done,ask:'문 안이 ___. 정말 들어가?',opts:[['캄캄해',1],['깨끗해',0,'깨끗한지는 몰라. 빛이 하나도 없으면 "캄캄해".'],['귀여워',0,'문이 귀여워? 하하. 빛이 하나도 없으면 "캄캄해".']]},
 /* 샤스킨 on the road the morning (rp 2) and at the dead villages until both road words (his after line first; the 버려지다 line
    only if you see the struts before the bones); 메닉 asleep at the first camp and the morning (after his snore, he wakes) */
 {w:'불을 피우다',by:'sharskinR',ask:'이 네모만 있으면 언제든 ___ 수 있어.',opts:[['불을 피울',1],['불을 끌',0,'끄는 건 쉬워. 불이 타게 하는 건 "불을 피울".'],['풀을 뽑을',0,'풀이 아니야. 불이 타게 하는 건 "불을 피울".']]},
 {w:'폐허',by:'sharskinR',when:()=>!f().done,ask:'___를 잘 봐. 마을도 죽는다.',opts:[['폐허',1],['폐지',0,'폐지는 버린 종이야. 무너진 마을은 "폐허".'],['허리',0,'허리는 몸 가운데야. 무너진 마을은 "폐허".']]},
 {w:'버려지다',by:'sharskinR',when:()=>!f().done,ask:'그 마을들은 오래전에 ___. 사람이 하나도 없어.',opts:[['버려졌어',1],['벌어졌어',0,'벌어지다는 틈이 생기는 거야. 아무도 안 살게 됐으면 "버려졌어".'],['부러졌어',0,'부러지다는 막대기가 꺾이는 거야. 아무도 안 살게 됐으면 "버려졌어".']]},
 {w:'게으르다',by:'menicR',when:()=>!f().menicDead,pre:['…왜 깨워. 졸려.'],ask:'나는 원래 좀 ___. 그래도 착해.',opts:[['게을러',1],['귀여워',0,'귀엽긴 하지. 근데 일을 안 하니까 "게을러".'],['가벼워',0,'나 무거워. 일을 안 하니까 "게을러".']]},
];
/* class time (engine: classTime) where the story skips time: the days of the war (after the nest), the first day on the
   road, the first night's fire. Invented (inv.): Ostel and the young outcast among the yard's outcasts at the tree (the book:
   the outcasts fought), Ostel uneasy about the eggs, Sharskin saying in the morning there'll be a fire again tonight (the
   book §VI: that evening he has Ostel build it, so it is not assigned here). */
const CLASS={
 '나무 위':{say:'날마다 나무에 올라갔어요. 위에서 하분들이 날카롭게 울었어요.',lines:[
  {w:'던지다',who:'샤스킨',ask:'머리를 노려. 세게 ___.',opts:[['던져',1],['떨어져',0,'떨어지는 게 아니야. 손으로 멀리 보내, "던져".'],['만져',0,'만지면 발톱에 다쳐. 멀리 보내, "던져".']]},
  {w:'가시',who:'샤스킨',ask:'___는 뽑고 계속 올라가.',opts:[['가시',1],['가지',0,'가지는 나무에서 갈라진 부분이야. 팔에 박힌 건 "가시".'],['과자',0,'과자는 먹는 거야. 팔에 박힌 건 "가시".']]},
  {w:'독',who:'오로보 사냥꾼',ask:'우리였으면 가시 ___ 때문에 벌써 쓰러졌어.',opts:[['독',1],['돌',0,'돌 때문이 아니야. 가시가 무서운 건 "독" 때문이야.'],['돈',0,'돈 때문에 쓰러져? 가시가 무서운 건 "독" 때문이야.']]},
  {w:'노동',who:'젊은 추방자',ask:'하분 쫓는 ___은 힘들어. 그래도 먹을 수 있어.',opts:[['노동',1],['노래',0,'노래는 즐겁지. 몸으로 하는 힘든 일은 "노동".'],['운동',0,'운동은 건강하려고 하는 거야. 먹으려고 하는 힘든 일은 "노동".']]}]},
 '둥지':{say:'가지마다 막대기 둥지가 있었어요. 하나씩 부쉈어요.',lines:[
  {w:'둥지',who:'샤스킨',ask:'하분 ___는 하나도 남기지 마.',opts:[['둥지',1],['동지',0,'동지는 밤이 제일 긴 날이야. 하분 집은 "둥지".'],['상자',0,'상자는 물건 넣는 거야. 하분이 지은 집은 "둥지".']]},
  {w:'알',who:'오스텔',ask:'___이 아직 따뜻해… 꼭 깨야 해?',opts:[['알',1],['안',0,'안은 속이야. 하분이 낳은 건 "알".'],['앞',0,'앞은 뒤의 반대야. 하분이 낳은 건 "알".']]},
  {w:'이사하다',who:'샤스킨',ask:'이 나무가 비어야 오로보 사람들이 ___ 수 있어.',opts:[['이사할',1],['인사할',0,'인사는 "안녕" 하는 거야. 사는 곳을 옮기면 "이사할".'],['이상할',0,'이상하다는 보통이랑 다른 거야. 사는 곳을 옮기면 "이사할".']]},
  {w:'인구',who:'오로보 사냥꾼',ask:'오로보는 ___가 너무 많아. 이 나무가 꼭 필요해.',opts:[['인구',1],['입구',0,'입구는 들어가는 곳이야. 사는 사람 수는 "인구".'],['친구',0,'친구는 같이 노는 사람이야. 사는 사람 수는 "인구".']]}]},
 '길':{say:'샤스킨이 앞에서 걸었어요. 은빛 지팡이가 반짝였어요.',lines:[
  {w:'인구',who:'샤스킨',ask:'사람이 너무 많아. 오로보는 ___가 넘쳐.',opts:[['인구',1],['입구',0,'입구는 들어가는 곳이야. 사는 사람 수는 "인구".'],['친구',0,'친구는 같이 노는 사람이야. 사는 사람 수는 "인구".']]},
  {w:'이사하다',who:'샤스킨',ask:'오로보 사람들은 새 나무로 ___. 우리는 우리 집으로 가.',opts:[['이사해',1],['인사해',0,'인사는 "안녕" 하는 거야. 사는 곳을 옮기면 "이사해".'],['이상해',0,'이상하다는 보통이랑 다른 거야. 사는 곳을 옮기면 "이사해".']]},
  {w:'노동',who:'메닉',ask:'나무 치우는 ___은 이제 끝이지? …그렇지?',opts:[['노동',1],['노래',0,'노래는 끝나도 돼. 힘든 일, "노동" 말이야.'],['운동',0,'운동 안 해. 힘든 일, "노동" 말이야.']]},
  {w:'줄을 서다',who:'오스텔',ask:'이제 국 받으려고 ___ 일도 없겠다.',opts:[['줄을 설',1],['줄을 쓸',0,'쓰는 게 아니야. 차례대로 서는 거, "줄을 설".'],['줄일',0,'줄이는 게 아니야. 차례대로 서는 거, "줄을 설".']]}]},
 '아침':{say:'불이 밤새 탔어요. 이제 작아졌어요.',lines:[
  {w:'불을 피우다',who:'샤스킨',ask:'오늘 밤에도 ___ 거야. 밤에는 추우니까.',opts:[['불을 피울',1],['불을 끌',0,'추운데 끄면 안 되지. 불이 타게 하는 건 "불을 피울".'],['풀을 뽑을',0,'풀이 아니야. 불이 타게 하는 건 "불을 피울".']]},
  {w:'게으르다',who:'오스텔',ask:'불도 안 피우고… 메닉은 정말 ___.',opts:[['게을러',1],['귀여워',0,'귀엽긴! 일을 안 하면 "게을러".'],['가벼워',0,'무게 얘기가 아니야. 일을 안 하면 "게을러".']]}]},
};

const ITEMS={'국 한 그릇':'오로보 의사가 끓인 국. 추방자도 먹을 수 있어요.','돌':'손바닥만 한 돌. 하분한테 던질 거예요.',
 '숲 음식':'오스텔하고 같이 모은 뿌리와 열매.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);

/* ---------------- sprite helpers (same as 1–2장) ---------------- */
const OL='#1B1E2B';
const frames=(list,ms)=>({get art(){return list[Math.floor(Date.now()/ms)%list.length]}});
const flat=(rows,pal)=>({pal,down:rows,up:rows,left:rows});
const tuned=(L,fn,extra)=>{let A=null;const o={...L};Object.defineProperty(o,'art',{get(){if(!A){const pal=Object.assign(humanPal(L),extra||{});
 const mk=(d,s)=>fn(humanArt(L,d,s).slice(),d,pal);A={pal,down:mk('down',0),up:mk('up',0),left:mk('left',0),walk:{down:[mk('down',1),mk('down',2)],up:[mk('up',1),mk('up',2)],left:[mk('left',1),mk('left',2)]}}}return A}});return o};
const setc=(rows,y,x,c)=>{if(rows[y]&&x<rows[y].length)rows[y]=rows[y].slice(0,x)+c+rows[y].slice(x+1)};
const head=(H)=>(rows,view)=>{H[view].forEach((r0,i)=>{rows[i]=r0});return rows};

/* Handry (as in 2장): Ma's straight dark hair, narrow eyes, dark-red Severance streak on brow, cheek and leg; stolen Cro clothes. */
const streak=(rows,view)=>{if(view==='down'){setc(rows,4,10,'R');setc(rows,5,11,'R');setc(rows,6,11,'R');setc(rows,6,10,'R');setc(rows,14,11,'R')}
 else if(view==='left'){setc(rows,4,4,'R');setc(rows,6,4,'R');setc(rows,6,5,'R');setc(rows,14,5,'R')}return rows};
const RED={R:'#9A2424'};
const PLAYER=tuned({hair:'#2A2220',skin:'#D9A47E',shirt:'#A8662E',pants:'#4E4234',shoes:'#4A3020',belt:'#6E4A2A'},streak,RED);

/* Sharskin: tall, burly, bald; hands scarlet to the elbows; filmy ancient robe with flapping sleeves; silver staff. No ghostlight. */
const SHARSKIN=tuned({hair:'#B98A6A',skin:'#D2A07A',shirt:'#BFC6C2',pants:'#BFC6C2',shoes:'#4A3A2E',style:'bald',coat:1},(rows,view)=>{
 if(view==='left'){setc(rows,9,8,'R');setc(rows,10,8,'R');setc(rows,11,8,'R')}else for(const [y,x] of [[10,3],[10,12],[11,3],[11,12]])setc(rows,y,x,'R');
 if(view==='down'){setc(rows,9,2,'X');setc(rows,9,13,'X');setc(rows,12,6,'X')}else setc(rows,12,view==='left'?6:9,'X');
 rows=rows.slice(0,10).concat([rows[9]],rows.slice(10));
 const sx=view==='left'?12:14;for(let y=1;y<rows.length;y++)setc(rows,y,sx,y===1?'q':y%5===0?'k':'Q');return rows},
 {R:'#B3201C',X:'#EEF4F2',Q:'#AEB6BC',q:'#F2F6F8',k:'#7E868C'});

/* Iblis: tall; high forehead knuckled with ghost-whorls; BOTH eyes, the left one looking elsewhere; lopsided mouth. */
const IB_HEAD={
 down:['.....OOOOOO.....','....OHSWSWSO....','...OHSWSWSWSO...','...OHWSWSSWHO...','...OHSSSSSSHO...','...OSSESSSESO...','...OSSSSSSSSO...','....OSSSLLSO....'],
 up:  ['.....OOOOOO.....','....OHHHHHHO....','...OHHhHHhHHO...','...OHHHHHHHHO...','...OHhHHHHhHO...','...OHHHHHHHHO...','...OHHHHHHHHO...','....OSSSSSSO....'],
 left:['.....OOOOOO.....','....OSWSWHHO....','...OSWSWSHHHO...','...OWSWSSHHHO...','...OSSSSSHHHO...','..OSESSSSHHHO...','...OSSSSSHHHO...','....OLSSSSO.....']};
const ibFn=(rows,view)=>{head(IB_HEAD)(rows,view);return rows.slice(0,10).concat([rows[9]],rows.slice(10))};
const IB_LOOK={hair:'#3A2C28',skin:'#C89870',shirt:'#8E5A3A',pants:'#5A3A2E',shoes:'#3A2A22',coat:1,lips:'#9E6050'};
const IBLIS=tuned(IB_LOOK,ibFn,{W:'#DDB089'});
const IBLIS_G=tuned(IB_LOOK,ibFn,{W:'#E8F4FF'});

/* Orovo's doctor: woolly hair, skull wholly swollen, lopsided and craggy; a ladle */
const DOC_HEAD={
 down:['....OOOOOOOO....','...OHhHhHhHhO...','..OWSSWSSSWSHO..','..OSWSSSWSSSSO..','..OSSSSWSSSSHO..','...OSESSESSSO...','...OSSSSSSSSO...','....OSSMMSSO....'],
 up:  ['....OOOOOOOO....','...OHhHhHhHhO...','..OHhHhHhHhHHO..','..OHHhHhHhHhHO..','..OhHhHhHhHhHO..','...OHhHhHhHhO...','...OHHHHHHHHO...','....OSSSSSSO....'],
 left:['....OOOOOOOO....','...OSWHhHhHhO...','..OSWSSWSHhHHO..','..OWSSSSSHhHHO..','..OSSSWSSSHhHO..','..OSESSSSHHHO...','...OSSSSSHHHO...','....OMSSSSSO....']};
const DOCTOR=tuned({hair:'#6A5A48',skin:'#C8946C',shirt:'#5E6E54',pants:'#4A4A3A',coat:1},(rows,view)=>{head(DOC_HEAD)(rows,view);
 if(view!=='up'){const x=view==='left'?3:13;setc(rows,8,x,'Q');setc(rows,9,x,'Q');setc(rows,10,x,'Q');setc(rows,11,x,'O');setc(rows,12,x-1,'q');setc(rows,12,x,'q');setc(rows,13,x,'O')}return rows},
 {Q:'#8A6A44',q:'#D9CFB8'});

/* Ostel: tall, very skinny, from Pavo; Severance painted in patterns on face and chest (only partly took) */
const OSTEL=tuned({hair:'#3A2A20',skin:'#D4A27A',shirt:'#9A8A6A',pants:'#5A4A3A',shoes:'#4A3A2A'},(rows,view)=>{
 if(view==='down'){setc(rows,4,5,'R');setc(rows,4,10,'R');setc(rows,6,5,'r');setc(rows,6,10,'r');setc(rows,7,7,'R');setc(rows,8,6,'R');setc(rows,8,9,'R');setc(rows,9,7,'r');setc(rows,9,8,'R');setc(rows,10,5,'r');setc(rows,10,10,'r')}
 else if(view==='left'){setc(rows,4,4,'R');setc(rows,6,5,'r');setc(rows,9,6,'R');setc(rows,10,7,'r')}
 return rows.slice(0,13).concat([rows[13]],rows.slice(13))},{R:'#A8282A',r:'#C4686A'});
/* Menic: short, broad, strong, recently Severed (the smear on his brow is invented) */
const MENIC=tuned({hair:'#5A3A22',skin:'#C9946C',shirt:'#7A6A4A',pants:'#4E4234',shoes:'#3A2E22',beard:'#5A3A22'},(rows,view)=>{
 if(view==='down'){setc(rows,4,6,'R');setc(rows,4,7,'R');setc(rows,4,8,'R')}else if(view==='left'){setc(rows,4,4,'R');setc(rows,4,5,'R')}
 return rows.slice(0,10).concat(rows.slice(11))},{R:'#9A2424'});
const lying=(pal)=>({art:flat([
 ".rrr............",
 "rrOOOO.OOOOOOO..",
 "rOHSSOOCCCCCCOOO",
 "rOSRSOCCCcCCCPPK",
 "rOHSSOOCCCCCCOOK",
 "rrOOOO.OOOOOOO..",
 ".rrr............"],Object.assign({O:OL,r:'#6E1212',R:'#B02020',K:'#2E241A'},pal))});
const MENIC_DEAD=lying({H:'#5A3A22',S:'#B98A64',C:'#7A6A4A',c:'#5E5038',P:'#4E4234'});
const FALLEN=lying({H:'#6A5A4A',S:'#A88464',R:'#A88464',C:'#6E6452',c:'#544C3E',P:'#4A4236',r:'#5E1A1A'});

/* outcasts in the stew line and the starving one (inv.); red marks where the dye was daubed */
const mark=(spots)=>(rows,view)=>{(spots[view]||[]).forEach(([y,x])=>setc(rows,y,x,'R'));return rows};
const OUTCAST=tuned({hair:'#6A5A4A',skin:'#B8906E',shirt:'#6A5E4E',pants:'#4A4236',style:'long'},mark({down:[[10,3],[11,3]],left:[[10,8],[11,8]]}),RED);
const LINE_A=tuned({hair:'#2E2420',skin:'#C49270',shirt:'#5A5244',pants:'#3E3A30',style:'short'},mark({down:[[6,9],[7,8]],left:[[6,5]]}),RED);
const LINE_B=tuned({hair:'#7A6248',skin:'#D2A684',shirt:'#6E604A',pants:'#4A4232',style:'spiky'},mark({down:[[11,12],[10,12]],left:[[11,8]]}),RED);
const LINE_C=tuned({hair:'#3A2E28',skin:'#B07E5C',shirt:'#5E5A4A',pants:'#403A30',style:'bald'},mark({down:[[2,6],[2,7],[3,8]],left:[[2,6],[3,6]]}),RED);
/* Orovo villager and hunter (inv.) */
const VILLAGER=tuned({hair:'#4A3428',skin:'#D0A07C',shirt:'#B0703A',pants:'#5A4430',style:'bun',lashes:1,lips:'#B06A5E'},r=>r);
const HUNTER=tuned({hair:'#2A2020',skin:'#B88460',shirt:'#5A5030',pants:'#3E3424',belt:'#2A2018',style:'short'},(rows,view)=>{
 const sx=view==='left'?12:14;for(let y=0;y<rows.length;y++)setc(rows,y,sx,y<2?'q':'Q');return rows},{Q:'#8A6A42',q:'#D9D2C0'});
const CHILD={art:flat([
 "...OOOO...","..OHHHHO..",".OHHHHHHO.",".OHSSSSHO.",".OSESSESO.","..OSSSSO..","..OOSSOO..",".OCCCCCCO.","OSCCCCCCSO",".OCCCCCCO.","..OPPPPO..","..OPOOPO..","..OKOOKO.."],
 {O:OL,H:'#3A2A1E',S:'#E0AE86',E:OL,C:'#C9803A',P:'#5A4630',K:'#3A2A1E'})};

/* the palewood cauldron, steaming */
const CAUL_BODY=[
 "..OOOOOOOOOOOO..",".OLLLLLLLLLLLLO.",".OLSSSsSSSSsSLO.",".OWLLLLLLLLLLWO.",".OWwWWwWWwWWwWO.",".OWwWWwWWwWWwWO.",
 ".OdwWWwWWwWWwdO.",".OdwWWwWWwWWwdO.","..OdwWwWWwWwdO..","..OOOOOOOOOOOO..","...k........k...","..kk........kk.."];
const CAUL_PAL={O:OL,L:'#F0E8D6',W:'#D9CFB8',w:'#B8AC90',d:'#8E826A',S:'#7A6A3A',s:'#9A8650',k:'#3A2E24',v:'rgba(236,236,230,.75)',V:'rgba(236,236,230,.4)'};
const steam=[["....v.....v.....","...V.....v...v..","....v...V....v..","...........V...."],["...v.....v......","....v...V....V..","...V.....v...v..","....V..........."],["....V....V......","...v......v..v..","....v...v....V..","...v......V....."]];
const CAULDRON=frames(steam.map(s=>flat(s.concat(CAUL_BODY),CAUL_PAL)),330);

/* Harboon: smaller than a man; top and bottom limb pairs cling, middle pair forked bark-cutting claws; bendy neck;
   front top and bottom eyes, side eyes on stalks; short mouth-hands */
const HB_PAL={O:OL,G:'#8A7A52',g:'#6A5C3C',l:'#5A4E36',s:'#A89A6A',E:'#F0E070',m:'#C07060',C:'#E0D6BA'};
const HB0=["..E..........E..","..s..........s..","...s..OOOO..s...","....sOGEgGOs....",".....OGggGO.....",".....OGEGGO.....","......OmmO......","OO...OOGGOO...OO",
 "Ol.OOGGGGGGOO.lO",".OlGGgGGGGgGGlO.","C.OGGGGGGGGGGO.C","CCOGgGGGGGgGGOCC",".C.OGGGGGGGGO.C.","..OlOGGGGGGOlO..",".Ol..OOOOOO..lO.","OO............OO"];
const HB1=[".E............E.","..s..........s..","...s..OOOO..s...","....sOGEgGOs....",".....OGggGO.....",".....OGEGGO.....","......OmmO......","OO...OOGGOO...OO",
 "Ol.OOGGGGGGOO.lO",".OlGGgGGGGgGGlO.",".COGGGGGGGGGGOC.","C.OGgGGGGGgGGO.C","CC.OGGGGGGGGO.CC","..OlOGGGGGGOlO..",".Ol..OOOOOO..lO.","OO............OO"];
const HARBOON=frames([flat(HB0,HB_PAL),flat(HB0,HB_PAL),flat(HB1,HB_PAL)],420);

/* a Harboon stick house with eggs; afterwards broken */
const NEST_PAL={O:OL,S:'#8A7050',s:'#5E4A34',d:'#2A1E14',E:'#F2ECD8',e:'#C8BFA0',y:'#E8B83A'};
const NEST={art:flat([".....OOOOOO.....","...OOsSsSsSOO...","..OsSsSsSsSsSO..",".OSsSsSsSsSsSsO.",".OsSsSOOOOsSsSO.","OSsSsOdddddOsSsO","OsSsOdEeEeEdOsSO",
 "OSsSOdeEeEedOSsO","OsSsOddddddOsSsO","OSsSsOOOOOOsSsSO",".OsSsSsSsSsSsSO.","..OOOOOOOOOOOO.."],NEST_PAL)};
const NEST_BROKEN={art:flat(["..s....S..s.....",".S.s..s.S...sS..",".OEyO...s.OEyO..","..OO..S...s.OO..","sS..s..OEO..S.s.",".s.S..OyyO.s..S.","..sS.s.OO..sS.s."],NEST_PAL)};

/* the Sevner's trunk and front legs, standing on the track (its body is drawn by the 'k' tiles above) */
const SV_PAL={O:OL,s:'#6E7680',S:'#565E68',T:'#7E8690',t:'#5E6670',P:'#C8C0A8'};
const SV0=["OsO...OTTO...OsO","OsO...OTtO...OsO","OsO...OTTO...OsO","OsO...OtTO...OsO","OsO...OTTO...OsO","OsO...OTtO...OsO","OsO...OTTO...OsO","OsO..OTTTTO..OsO",
 "OsO..OtTTtO..OsO","OsO.OTTOOTTO.OsO","OsO.OPO..OPO.OsO","OsO.OP....PO.OsO","OsO..OP..PO..OsO","OSSO..O..O..OSSO","OSSSO......OSSSO",".OOO........OOO."];
const SV1=SV0.slice(0,9).concat(["OsO.OTTOOTTO.OsO","OsO..OPOOPO..OsO","OsO..OP..PO..OsO","OsO...OPPO...OsO","OSSO........OSSO","OSSSO......OSSSO",".OOO........OOO."]);
const SEVNER=frames([flat(SV0,SV_PAL),flat(SV0,SV_PAL),flat(SV1,SV_PAL)],500);

/* road objects: the holed skull and bones; a fallen strut; a food bush */
const BONES={art:flat(["...OOOOO........","..OWWWWWO.......","..OWkWWkWO..O.O.","..OWWWhWWO.OWOWO","..OWwOWwWO..OWO.","...OWOWOO..OWOWO","OOO.....OOOOO.O.","OWWWWWWWWWWWWO..","OOOOOOOOOOOOOO.."],
 {O:OL,W:'#E4DCC4',w:'#B8AE94',k:'#2A2420',h:'#0E0C0A'})};
const STRUT={art:flat(["...........OO...","..........OJjO..",".........OJjO...","........OJjO....",".......OJjO.....","......OJjO......",".....OJjO.......","....OJjO........",
 "...OJjO.........","..OJjO.....rr...",".OJjO...rrrrr...","OOOO..rrrr......"],{O:OL,J:'#8A7A6A',j:'#5E4E40',r:'#9A4A2A'})};
const BUSH_PAL={O:OL,g:'#3E5A34',G:'#6A3A7A',R:'#E0533F',B:'#5A86E0',T:'#A88A5A'};
const GBUSH={art:flat([".....OOOOO......","...OOgGgGgOO....","..OgGgRgGgBgO...",".OgGgGgggRgGgO..",".OgRgGgBgGgGgO..","OgGgGgRgGgRgGgO.","OggBgGgGgGgGgRO.",".OgGgRgGgBgGgO..","..OOgTgggTgOO...","....OTOOOTO....."],BUSH_PAL)};
const GBUSH_BARE={art:flat([".....OOOOO......","...OOgGgGgOO....","..OgGgGgGgGgO...",".OgGgGgggGgGgO..",".OgGgGgGgGgGgO..","OgGgGgGgGgGgGgO.","OggGgGgGgGgGgGO.",".OgGgGgGgGgGgO..","..OOgggggggOO...","....OOOOOOO....."],BUSH_PAL)};

/* ---------------- tiles ---------------- */
const blk=(x,y)=>{const c=at(x,y);let a=x,bb=y;while(at(a-1,y)===c)a--;while(at(x,bb-1)===c)bb--;return [a,bb]};
const clipT=(X,Y,fn)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn();g.restore()};
const oval=(cx,cy,rx,ry,c)=>{for(let dy=-ry;dy<=ry;dy++){const w=Math.round(rx*Math.sqrt(Math.max(0,1-(dy/ry)**2)));r(cx-w,cy+dy,w*2,1,typeof c==='function'?c(dy):c)}};
const runOf=(x,y,set)=>{let a=x,e=x;while(set.includes(at(a-1,y)))a--;while(set.includes(at(e+1,y)))e++;return [a,e]};

/* ---- Orovo ---- */
const dirt=(X,Y,x,y)=>{const h=hash(x,y);r(X,Y,16,16,'#6E5C44');r(X+(h%12)+1,Y+(h*7%12)+2,3,1,'#5E4E3A');r(X+(h*3%12)+2,Y+(h*5%11)+3,2,1,'#82704F');
 if(h%5===0){r(X+(h%9)+3,Y+(h%7)+5,2,1,'#54442F');r(X+(h%9)+6,Y+(h%7)+7,2,1,'#54442F')}if(h%7===3)r(X+(h*5%12)+2,Y+(h*3%12)+2,1,1,'#A89470')};
const lane=(X,Y,x,y)=>{const h=hash(x,y);r(X,Y,16,16,'#5C4E3C');for(let i=0;i<3;i++){const a=(h*(i+3))%12,c=(h*(i+7))%12;r(X+a+1,Y+c+1,3,2,'#6A5A46');r(X+a+1,Y+c+1,3,1,'#78684F')}
 if(h%6===1)r(X+(h%10)+2,Y+(h%9)+4,4,1,'#B8A060')};
const roofT=(X,Y,x,y)=>{lane(X,Y,x,y);const c=at(x,y),L=at(x-1,y)!==c,R=at(x+1,y)!==c,x0=L?1:0,x1=R?15:16;
 r(X+x0,Y+4,x1-x0,12,OL);r(X+x0+(L?1:0),Y+5,x1-x0-(L?1:0)-(R?1:0),11,'#A3864F');for(let j=8;j<16;j+=3)r(X+x0+1,Y+j,x1-x0-2,1,'#86693A');
 for(let i=x0+2;i<x1-1;i+=3)r(X+i,Y+6+((i+x)%2),1,2,'#C4A468');r(X+x0+1,Y+5,x1-x0-2,1,'#C4A468');
 if(!L&&!R){r(X+4,Y+1,8,4,OL);r(X+5,Y+2,6,3,'#B8975A');r(X+6,Y,4,2,OL);r(X+7,Y,2,1,'#D4B474');r(X+6,Y+2,4,1,'#C4A468')}};
const barrel=(X,Y,x,y,top,bot)=>{const [a,e]=runOf(x,y,at(x,y)==='U'?'U':'WD'),W=(e-a+1)*16;
 for(let i=0;i<16;i++){const px=(x-a)*16+i,u=px/W;const col=u<.1||u>.9?'#6E5233':u<.38?'#A3825A':u<.7?'#8A6A44':'#7A5C3A';r(X+i,Y+top,1,bot-top,col);if(px%5===2)r(X+i,Y+top,1,bot-top,'#5E4630')}
 if(x===a)r(X,Y+top,1,bot-top,OL);if(x===e)r(X+15,Y+top,1,bot-top,OL);r(X,Y+top+((bot-top)>>1),16,1,'#4E3A26');r(X,Y+top,16,1,'#B8986A')};
const wallT=(X,Y,x,y)=>{lane(X,Y,x,y);barrel(X,Y,x,y,0,14);r(X,Y+14,16,2,'rgba(0,0,0,.28)')};
const NIGHT=()=>{const F=f();return !F.budding||(!!F.warDone&&!F.left)};
const doorT=(X,Y,x,y,t)=>{wallT(X,Y,x,y);r(X+4,Y+4,8,10,OL);r(X+5,Y+5,6,9,'#4A3220');r(X+6,Y+4,4,1,OL);r(X+5,Y+5,6,1,'#6A4A30');r(X+9,Y+9,1,1,'#D9B060');
 if(ZID==='orovo'&&NIGHT()){r(X+13,Y+3,2,3,'#FFD27A');r(X+13,Y+2,2,1,OL)}};
const upperT=(X,Y,x,y)=>{lane(X,Y,x,y);barrel(X,Y,x,y,0,13);r(X+6,Y+4,4,3,OL);r(X+7,Y+5,2,2,ZID==='orovo'&&NIGHT()?'#FFC870':'#2A1E14');
 r(X,Y+13,16,3,'#5E4630');r(X,Y+13,16,1,'#A3825A')};
const rampT=(X,Y,x,y)=>{lane(X,Y,x,y);const top=at(x,y-1)==='r'?y-1:y,gy0=(y-top)*16;
 for(let j=0;j<16;j++){const gy=gy0+j,px=Math.round(gy*11/31);r(X+px,Y+j,5,1,(gy%3===0)?'#5E4630':'#9A7A50');r(X+px,Y+j,1,1,OL);if(gy%3===1)r(X+px+1,Y+j,3,1,'#B8986A')}
 for(let j=2;j<16;j+=6){const gy=gy0+j,px=Math.round(gy*11/31);r(X+px+4,Y+j,1,16-j,'#4E3A26')}};
const quernT=(X,Y,x,y,t)=>{lane(X,Y,x,y);oval(X+8,Y+12,7,3,'rgba(0,0,0,.3)');oval(X+8,Y+10,6,4,OL);oval(X+8,Y+10,5,3,'#8D8A80');oval(X+8,Y+8,5,3,OL);oval(X+8,Y+8,4,2,'#A8A59A');
 r(X+7,Y+8,2,1,'#5E5A52');const a=t/450,hx=Math.round(8+Math.cos(a)*4),hy=Math.round(8+Math.sin(a)*2);r(X+hx,Y+hy-4,1,4,'#6E5233');r(X+hx,Y+hy-4,1,1,'#A3825A');
 if(Math.floor(t/300)%2)r(X+2+(Math.floor(t/300)%11),Y+13,1,1,'#E8E0CC')};
const penT=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#6A5A3A');r(X+(h%12)+1,Y+(h%10)+3,3,1,'#5A4A30');r(X+(h*3%11)+2,Y+(h*7%11)+2,2,1,'#B8A060');
 if(at(x,y-1)!=='L'){r(X,Y+1,16,2,'#7A5A3A');r(X,Y+1,16,1,'#9A7A52')}if(at(x,y+1)!=='L'){r(X,Y+13,16,2,'#7A5A3A');r(X,Y+13,16,1,'#9A7A52')}
 if(at(x-1,y)!=='L')r(X,Y,2,16,'#7A5A3A');if(at(x+1,y)!=='L')r(X+14,Y,2,16,'#7A5A3A');
 const k=Math.round(Math.sin(t/700+x*2+y)*2),bx=X+3+k,by=Y+5+(h%2);r(bx,by,10,5,OL);r(bx+1,by+1,8,3,'#C8B898');r(bx+1,by+1,8,1,'#E0D4B8');r(bx+(x%2?-1:8),by+1,3,3,OL);r(bx+(x%2?0:8),by+2,1,1,'#2A2018');
 for(let i=0;i<3;i++)r(bx+2+i*3,by+5,1,2,OL)};
const canY=(X,Y,x,y,t)=>{const [a,bb]=blk(x,y),X0=X-(x-a)*16,Y0=Y-(y-bb)*16;r(X,Y,16,16,'#2A1838');
 clipT(X,Y,()=>{const sw=Math.round(Math.sin(t/1600));[[12,10,13,9],[34,8,15,9],[54,14,12,10],[24,24,15,8],[48,26,14,8]].forEach(([cx,cy,rx,ry],i)=>{oval(X0+cx+sw,Y0+cy,rx,ry,dy=>dy<-ry/2?'#9A5AAE':dy<0?'#7E3F8F':i%2?'#5B2A6E':'#2F5A3A')});
  for(let i=0;i<4;i++){const ang=t/600+i*1.6;r(X0+32+Math.round(Math.cos(ang)*14),Y0+18+Math.round(Math.sin(ang)*6),1,1,'#F2D45A')}})};
const trunkZ=(X,Y,x,y)=>{lane(X,Y,x,y);const L=at(x-1,y)!=='Z';r(X+(L?4:0),Y,12,14,'#4A362A');r(X+(L?4:0),Y,1,14,L?OL:'#4A362A');if(!L)r(X+11,Y,1,14,OL);r(X+(L?5:1),Y,3,14,'#6A5040');r(X+(L?10:5),Y+2,1,10,'#3A2A20')};
const fenceT=(X,Y,x,y)=>{const inside=ZID==='orovo'&&y>6&&y<12&&x>5&&x<20;dirt(X,Y,x,y);const F=q=>q==='F'||q==='G';
 const H=F(at(x-1,y))||F(at(x+1,y)),V=F(at(x,y-1))||F(at(x,y+1));
 if(H){r(X,Y+9,16,2,'#5E4630');for(const sx of [0,4,8,12]){r(X+sx,Y+2,4,13,OL);r(X+sx+1,Y+3,2,11,'#8A6A44');r(X+sx+1,Y+3,1,11,'#A3825A');r(X+sx+1,Y+1,2,2,OL);r(X+sx+1,Y+2,2,1,'#A3825A')}}
 if(V&&!H){r(X+5,Y,6,16,OL);r(X+6,Y,4,16,'#8A6A44');r(X+6,Y,1,16,'#A3825A');for(let j=0;j<16;j+=4){r(X+7,Y+j,2,1,'#C4A468');r(X+6,Y+j+3,4,1,'#6E5233')}r(X+11,Y,2,16,'rgba(0,0,0,.3)')}
 if(!H&&!V){r(X+5,Y+1,6,14,OL);r(X+6,Y+2,4,12,'#8A6A44')}};
const gapT=(X,Y,x,y)=>{dirt(X,Y,x,y);r(X,Y+1,3,15,OL);r(X+1,Y+2,1,13,'#A3825A');r(X+13,Y+1,3,15,OL);r(X+14,Y+2,1,13,'#A3825A');r(X+5,Y+6,6,6,'#5E4E3A')};
const fireT=(X,Y,x,y,t)=>{dirt(X,Y,x,y);oval(X+8,Y+10,7,4,'#2A2420');[[1,9],[13,9],[4,13],[11,13],[3,6],[12,6],[7,5],[8,14]].forEach(([a,c])=>{r(X+a,Y+c,3,2,'#7A7468');r(X+a,Y+c,3,1,'#A39C8E')});
 r(X+4,Y+10,8,2,'#4A2E1A');r(X+5,Y+9,6,1,'#6A4022');const lit=ZID!=='road'||(f().rp===2);
 if(lit){const k=Math.floor(t/110);for(let i=0;i<5;i++){const fx=X+5+i,hh=3+((k+i*3)%4)+(i===2?3:0);r(fx,Y+10-hh,1,hh,i%2?'#FF8A2A':'#FFC24A');if((k+i)%3===0)r(fx,Y+10-hh-1,1,1,'#FFE9A0')}}
 else{r(X+6,Y+9,4,1,'#3A3632');if(Math.floor(t/700)%3===0)r(X+8,Y+9,1,1,'#C2400E')}};
const matT=(X,Y,x,y)=>{dirt(X,Y,x,y);r(X+1,Y+4,14,9,OL);r(X+2,Y+5,12,7,'#8A7458');r(X+2,Y+5,12,1,'#A8906E');r(X+11,Y+5,3,7,'#6E5A42');r(X+12,Y+5,1,7,'#A8906E');r(X+4,Y+8,5,1,'#6E5A42')};
const wattleT=(X,Y,x,y)=>{lane(X,Y,x,y);r(X,Y+5,16,10,OL);for(let j=6;j<14;j+=2){r(X,Y+j,16,2,(j/2)%2?'#7A6040':'#8E7450');for(let i=(j/2%2)*4;i<16;i+=8)r(X+i,Y+j,4,1,'#A88A5E')}
 r(X+2,Y+3,2,12,'#5E4630');r(X+12,Y+3,2,12,'#5E4630');r(X,Y+14,16,2,'rgba(0,0,0,.3)')};
const cropT=(X,Y,x,y,t)=>{r(X,Y,16,16,'#5A4630');for(let j=1;j<16;j+=5){r(X,Y+j+3,16,1,'#4A3A26');for(let i=1;i<16;i+=3){const sw=Math.round(Math.sin(t/800+i*.4+x+j));const c=(x+y+i)%5===0?'#7E5A8A':'#6E8A3A';r(X+i+sw,Y+j,1,3,c);r(X+i,Y+j+2,1,1,'#4E6A2A')}}};
const bankT=(X,Y,x,y)=>{const h=hash(x,y);r(X,Y,16,16,'#6A6040');r(X+(h%12)+1,Y+(h*3%10)+3,3,1,'#7E7450');r(X,Y,16,2,'#5A7038');for(let i=h%3;i<16;i+=4)r(X+i,Y+2,1,2,'#6E8648');
 if(at(x,y+1)==='~'){r(X,Y+14,16,2,'#4A4430')}if(h%5===2)r(X+(h%10)+3,Y+8,2,2,'#8D8A80')};
const waterT=(X,Y,x,y,t)=>{const o=Math.floor(t/260+x*3)%16;r(X,Y,16,16,'#2E4A50');r(X+(o%14),Y+5,3,1,'#5E8A8A');r(X+((o+7)%14),Y+11,4,1,'#5E8A8A');r(X,Y,16,2,'#3E3A2A');r(X,Y+14,16,2,'#4A4430')};
/* the memory stone (기억 돌): a mossy carved stone; its carvings glow ghostlight while words wait for review (as 2장) */
const memStone=(X,Y,x,y,t)=>{dirt(X,Y,x,y);const due=state&&dueWords().length>0,p=(Math.sin(t/380)+1)/2;
 oval(X+8,Y+14,7,2,'rgba(0,0,0,.35)');
 const prof=[3,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(let j=0;j<19;j++){const k=prof[j]+(j>15?-1:0),py=Y-5+j;r(X+2+k,py,12-2*k,1,OL);if(j>0&&j<18)r(X+3+k,py,10-2*k,1,j<3?'#8E9888':j>14?'#4E564C':'#6A7266')}
 r(X+11,Y-1,2,13,'#525A50');r(X+3,Y-1,1,12,'#8E9888');r(X+4,Y-4,5,2,'#4F6B3A');r(X+3,Y-2,2,1,'#4F6B3A');r(X+10,Y+9,3,3,'#4F6B3A');r(X+4,Y+11,2,1,'#5E7A44');
 const c=due?`rgba(232,244,255,${.55+p*.45})`:'#454E44';
 r(X+6,Y,4,1,c);r(X+9,Y,1,4,c);r(X+6,Y+3,4,1,c);r(X+6,Y+1,1,2,c);r(X+7,Y+2,1,1,c);r(X+5,Y+6,6,1,c);r(X+7,Y+8,2,2,c);r(X+6,Y+11,1,1,c);r(X+9,Y+11,1,1,c);
 if(due){g.fillStyle=`rgba(232,244,255,${.10+p*.08})`;g.fillRect(X+1,Y-6,14,20);for(let i=0;i<3;i++){const k=(Math.floor(t/120)+i*9)%24;r(X+5+((i*3+k)%6),Y-6-k/3,1,1,`rgba(232,244,255,${1-k/24})`)}}};

/* ---- the Harboon tree ---- */
const leafX=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#2A1838');const sw=Math.round(Math.sin(t/1500+x*.8+y));
 [[-2,-1,10,8,'#5B2A6E'],[7,1,10,8,'#2F5A3A'],[1,7,9,8,'#1E3A26'],[9,8,8,8,'#5B2A6E'],[3,3,7,5,'#7E3F8F']].forEach(([a,c,w,hh,col],i)=>{const o=(h+i*7)%4-1;oval(X+a+o+w/2+sw,Y+c+hh/2,w/2,hh/2,col)});
 r(X+(h%11)+3+sw,Y+(h%5)+2,3,1,'#A060B4');r(X+(h*3%10)+2,Y+(h*7%8)+9,2,1,'#A060B4');
 const dn=at(x,y+1);if(dn&&dn!=='X'&&dn!=='h'){r(X,Y+13,16,3,'rgba(0,0,0,.35)');for(let i=0;i<16;i+=3)r(X+i+sw,Y+12+((i+h)%3),2,3,(i+h)%2?'#5B2A6E':'#2F5A3A')}};
const BR=q=>q==='='||q==='|'||q==='h';
const branchT=(X,Y,x,y,t)=>{leafX(X,Y,x,y,t);const h=hash(x,y),Hn=at(x-1,y)==='='||at(x+1,y)==='=',V=BR(at(x,y-1))||BR(at(x,y+1));
 if(Hn){r(X,Y+3,16,10,OL);r(X,Y+4,16,8,'#5A4232');r(X,Y+4,16,2,'#7A5E44');r(X,Y+10,16,2,'#3A2A20');for(let i=h%5;i<16;i+=6)r(X+i,Y+7,3,1,'#46342A')}
 if(V){r(X+3,Y,10,16,OL);r(X+4,Y,8,16,'#5A4232');r(X+4,Y,2,16,'#7A5E44');r(X+10,Y,2,16,'#3A2A20');for(let j=h%5;j<16;j+=6)r(X+7,Y+j,1,3,'#46342A')}
 if(Hn&&V){r(X+4,Y+4,8,8,'#5A4232');r(X+4,Y+4,8,2,'#7A5E44')}
 if(h%3===0)oval(X+(h%2?3:13),Y+(h%2?3:13),3,2,'#2F5A3A')};
const stickT=(X,Y,x,y,t)=>{leafX(X,Y,x,y,t);const h=hash(x,y),broken=f().warDone;oval(X+8,Y+14,7,2,'rgba(0,0,0,.35)');
 if(broken){for(let i=0;i<6;i++)r(X+2+(h*(i+1))%11,Y+8+(i*3)%7,5,1,i%2?'#5E4A34':'#8A7050');return}
 oval(X+8,Y+9,7,6,OL);oval(X+8,Y+9,6,5,dy=>dy<-2?'#9A8060':'#7A6448');for(let i=-5;i<6;i+=2){r(X+8+i,Y+5+Math.abs(i)%3,1,8,'#5E4A34')}for(let j=6;j<14;j+=3)r(X+3,Y+j,10,1,'#A08A64');
 r(X+6,Y+10,4,4,'#1E1610');if(Math.floor(t/900+h)%5===0)r(X+7,Y+11,2,1,'#F0E070')};
const trunkI=(X,Y,x,y,t)=>{const L=at(x-1,y)!=='|';r(X,Y,16,16,'#4A362A');for(let i=0;i<16;i+=3)r(X+i,Y,1,16,'#3E2C22');r(X+(L?2:0),Y,3,16,'#6A5040');
 const k=(y*2+(L?0:1))%3;r(X+5,Y+3+k*3,6,2,'#2A1E16');r(X+5,Y+3+k*3,6,1,'#7A5E44');
 const v=L?1:13;for(let j=0;j<16;j+=4){r(X+v,Y+j,2,3,'#5A2A3A');r(X+v+(j%8?1:-1),Y+j+1,1,1,'#E8E0D0')}};
const briarB=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#4A362A');for(let i=0;i<16;i+=3)r(X+i,Y,1,16,'#3E2C22');
 for(let k=0;k<4;k++){const ox=(h*(k+2))%12,oy=(h*(k+5))%12;oval(X+ox+2,Y+oy+2,3,2,'#3A1E2A');r(X+ox+1,Y+oy+1,4,1,'#5A2A3A')}
 for(let k=0;k<7;k++)r(X+((h*(k+3))%15),Y+((h*(k+9))%15),1,1,'#E8E0D0');if(at(x,y+1)!=='B'&&at(x,y+1)!=='|')r(X,Y+13,16,3,'rgba(0,0,0,.3)')};
const groundT=(X,Y,x,y)=>{const h=hash(x,y);r(X,Y,16,16,'#5E4E38');r(X+(h%12)+1,Y+(h*7%12)+2,3,1,'#4E4030');r(X+(h*3%12)+2,Y+(h*5%11)+3,2,1,'#6E5E46');
 if(h%4===0){r(X+(h%11)+2,Y+(h%9)+4,1,3,'#5E7A3E');r(X+(h%11)+2,Y+(h%9)+4,1,1,'#7E9A5A')}if(h%6===1){r(X+(h*5%11)+2,Y+(h*3%10)+4,3,1,'#6A3A7A')}};
const rootZ=(X,Y,x,y)=>{groundT(X,Y,x,y);const L=at(x+1,y)==='Z'||at(x+1,y)==='|';r(X,Y,16,9,'#4A362A');r(X,Y+9,16,2,OL);
 for(let i=0;i<16;i+=4){const len=L?16-i:i+4;r(X+(L?i:0),Y+9+(i%3),Math.min(16,len),3,'#5A4232');r(X+(L?i:0),Y+9+(i%3),Math.min(16,len),1,'#7A5E44')}
 const h=hash(x,y);for(let k=0;k<5;k++)r(X+((h*(k+3))%15),Y+((h*(k+9))%8),1,1,'#E8E0D0');oval(X+8,Y+4,4,3,'#3A1E2A')};
const stumpT=(X,Y,x,y)=>{groundT(X,Y,x,y);oval(X+8,Y+12,7,2,'rgba(0,0,0,.3)');r(X+3,Y+5,10,8,OL);r(X+4,Y+6,8,7,'#6A5040');oval(X+8,Y+5,5,2,OL);oval(X+8,Y+5,4,1,'#C8B088');r(X+7,Y+5,2,1,'#9A7E5A')};
const cutT=(X,Y,x,y)=>{groundT(X,Y,x,y);const h=hash(x,y);for(let k=0;k<4;k++){const a=(h*(k+2))%10,c=(h*(k+4))%10;r(X+a+1,Y+c+3,6,1,k%2?'#5E4A34':'#7A6040');r(X+a+2,Y+c+2,1,1,'#3E5A34')}};
const edgeC=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#1E2A22');const sw=Math.round(Math.sin(t/1700+x));
 [[-1,0,9,8,'#2F4A34'],[7,2,10,8,'#3E2A4E'],[2,8,9,8,'#24382A'],[9,9,8,7,'#3E2A4E']].forEach(([a,c,w,hh,col],i)=>{const o=(h+i*5)%3-1;oval(X+a+o+w/2+sw,Y+c+hh/2,w/2,hh/2,col)});
 r(X+(h%11)+3,Y+(h%6)+2,3,1,'#5E7A4E');const dn=at(x,y+1);if(dn&&dn!=='C'&&dn!=='X'){r(X,Y+13,16,3,'rgba(0,0,0,.35)')}};
const pathT=(X,Y,x,y)=>{groundT(X,Y,x,y);r(X,Y+4,16,8,'#7A6A4E');r(X,Y+4,16,1,'#8A7A5A');const h=hash(x,y);r(X+(h%11)+2,Y+7,2,1,'#5E5038')};

/* ---- the road of dead villages ---- */
const floorR=(X,Y,x,y)=>{const h=hash(x,y);r(X,Y,16,16,'#3E4A32');r(X+(h%11)+1,Y+(h*7%11)+2,4,1,'#4E3A5A');r(X+(h*3%12)+1,Y+(h*5%12)+3,2,2,'#34402C');
 if(h%3===0){r(X+(h*11%12)+2,Y+(h%7)+6,1,2,'#5E7A44');r(X+(h*11%12)+3,Y+(h%7)+7,1,1,'#5E7A44')}if(h%7===2)r(X+(h%10)+3,Y+(h*3%10)+3,3,2,'#46523A')};
const trackR=(X,Y,x,y)=>{floorR(X,Y,x,y);const h=hash(x,y);r(X,Y+3,16,10,'#6A5A42');for(let i=0;i<16;i+=2)r(X+i,Y+3-((i+h)%3===0?1:0),2,1,'#6A5A42');r(X+(h%11)+2,Y+6,2,1,'#7E6E52');r(X+(h*3%12)+1,Y+10,1,1,'#7E6E52');
 if(h%4===1){r(X+(h*5%11)+3,Y+8,2,2,'#6E6252');r(X+(h*5%11)+3,Y+8,2,1,'#8A7C68')}};
const trunkT=(X,Y,x,y)=>{floorR(X,Y,x,y);oval(X+8,Y+14,7,2,'rgba(0,0,0,.35)');r(X+4,Y,8,14,OL);r(X+5,Y,6,14,'#4A3A30');r(X+5,Y,2,14,'#6A5646');r(X+9,Y+3,1,8,'#2E241E');
 r(X+2,Y+11,3,3,'#4A3A30');r(X+11,Y+11,3,3,'#4A3A30')};
const camp=(X,Y,x,y,t)=>{fireT(X,Y,x,y,t)};
/* the Sevner lies across the trees above the track (3×3 tiles): hump-backed, six tubular legs, fat tail, forked horn over
   the top eye, trumpeting through slits in its flank */
const sevnerK=(X,Y,x,y,t)=>{floorR(X,Y,x,y);const [a,bb]=blk(x,y),X0=X-(x-a)*16,Y0=Y-(y-bb)*16,F=f();
 if(F.rp>=3){clipT(X,Y,()=>{for(let i=0;i<6;i++)r(X0+6+i*7,Y0+10+(i*11)%28,6,2,'#2E3A26');r(X0+18,Y0+30,12,6,'#34402C')});return}
 clipT(X,Y,()=>{const awake=true,br=Math.round(Math.sin(t/700));
  oval(X0+24,Y0+44,22,3,'rgba(0,0,0,.35)');
  for(const [lx,ly] of [[6,30],[16,33],[30,33],[40,30]]){r(X0+lx,Y0+ly,5,14,OL);r(X0+lx+1,Y0+ly,3,13,'#6E7680');r(X0+lx+1,Y0+ly,1,13,'#8A929A')}
  oval(X0+42,Y0+20,7,5,OL);oval(X0+42,Y0+20,6,4,'#5E6670');
  oval(X0+24,Y0+22+br,20,14,OL);oval(X0+24,Y0+22+br,19,13,dy=>dy<-7?'#8A929A':dy<3?'#6E7680':'#565E68');
  oval(X0+20,Y0+12+br,9,5,'#8A929A');
  for(let i=0;i<3;i++){r(X0+30+i*4,Y0+20+br,1,6,OL);if(awake&&Math.floor(t/260+i)%3===0){r(X0+31+i*4,Y0+18+br-((t/80|0)%4),2,1,'rgba(230,230,220,.7)')}}
  oval(X0+12,Y0+26+br,8,7,OL);oval(X0+12,Y0+26+br,7,6,'#7E8690');
  r(X0+11,Y0+16+br,2,5,OL);r(X0+8,Y0+13+br,2,4,OL);r(X0+14,Y0+13+br,2,4,OL);r(X0+9,Y0+14+br,1,3,'#D8D0B8');r(X0+14,Y0+14+br,1,3,'#D8D0B8');
  const eye=awake?'#E8E070':OL;r(X0+11,Y0+22+br,2,awake?2:1,eye);r(X0+11,Y0+30+br,2,awake?2:1,eye);r(X0+5,Y0+26+br,2,1,eye);r(X0+17,Y0+26+br,2,1,eye);
  r(X0+10,Y0+33+br,5,15,OL);r(X0+11,Y0+33+br,3,15,'#7E8690')})};
/* first dead village: the burned tree (2×2) with axe scars; slightly-wrong ruined houses */
const burnedB=(X,Y,x,y,t)=>{floorR(X,Y,x,y);const [a,bb]=blk(x,y),X0=X-(x-a)*16,Y0=Y-(y-bb)*16;
 clipT(X,Y,()=>{r(X0,Y0+20,32,12,'#2A2420');oval(X0+16,Y0+28,14,3,'#1A1614');
  r(X0+11,Y0+2,10,28,OL);r(X0+12,Y0+2,8,28,'#2A2220');r(X0+12,Y0+2,2,28,'#3E3430');
  [[4,2,11,8],[21,4,28,0],[6,12,12,9],[20,10,27,7]].forEach(([x1,y1,x2,y2])=>{const n=Math.max(Math.abs(x2-x1),Math.abs(y2-y1));for(let i=0;i<=n;i++)r(X0+Math.round(x1+(x2-x1)*i/n),Y0+Math.round(y1+(y2-y1)*i/n),2,2,'#2A2220')});
  for(const yy of [16,21]){r(X0+12,Y0+yy,5,2,'#C8B088');r(X0+13,Y0+yy+2,3,1,'#8A7458')}
  if(Math.floor(t/900)%4===0)r(X0+15,Y0+1-((t/200|0)%3),1,1,'#6E6A66')})};
const ruinH=(X,Y,x,y)=>{floorR(X,Y,x,y);const h=hash(x,y);r(X+1,Y+7,14,8,OL);for(let i=2;i<14;i++){const tall=6-Math.abs(i-(h%7)-4)+(i%3);r(X+i,Y+14-Math.max(1,tall),1,Math.max(1,tall),i%3?'#6E5A40':'#544430')}
 r(X+3,Y+4,9,3,OL);r(X+4,Y+4,7,2,'#7A6A44');r(X+10,Y+2,2,3,'#7A6A44');r(X+5,Y+12,4,3,'#1A1410');r(X+12,Y+9,2,1,'#5E7A44')};
/* the boil-tree: warty trunk, many hives, big barbed wasps (keep away) */
const boilO=(X,Y,x,y,t)=>{floorR(X,Y,x,y);const [a,bb]=blk(x,y),X0=X-(x-a)*16,Y0=Y-(y-bb)*16;
 clipT(X,Y,()=>{oval(X0+16,Y0+8,15,8,'#2E4A2A');oval(X0+16,Y0+6,12,5,'#4E3A5A');r(X0+10,Y0+10,12,22,OL);r(X0+11,Y0+10,10,22,'#5A4636');
  [[12,14,3],[18,18,4],[13,24,3],[19,27,2],[15,20,2]].forEach(([bx,by,rr])=>{oval(X0+bx,Y0+by,rr,rr,OL);oval(X0+bx,Y0+by,rr-1,rr-1,'#7A5E46');r(X0+bx-1,Y0+by-1,1,1,'#9A7E62')});
  [[6,10],[25,12],[8,20]].forEach(([hx,hy])=>{oval(X0+hx,Y0+hy,3,4,OL);oval(X0+hx,Y0+hy,2,3,'#C9A86A');r(X0+hx,Y0+hy+2,1,1,OL)});
  r(X0+3,Y0+29,6,2,'#E4DCC4');r(X0+5,Y0+28,1,4,'#E4DCC4');r(X0+24,Y0+30,5,1,'#E4DCC4');
  for(let i=0;i<7;i++){const ang=t/380+i*.9,rad=10+((i*7)%8),wx=X0+16+Math.round(Math.cos(ang)*rad*1.3),wy=Y0+14+Math.round(Math.sin(ang*1.3)*rad*.8);r(wx,wy,3,2,'#C9A227');r(wx+1,wy,1,2,'#3A2A12');r(wx+3,wy+1,1,1,'#3A2A12')}})};
const bramN=(X,Y,x,y,t)=>{floorR(X,Y,x,y);const h=hash(x,y);for(let k=0;k<6;k++){const ox=(h*(k+2))%13,oy=(h*(k+3))%12;oval(X+ox+2,Y+oy+2,3,2,k%2?'#2E4A2A':'#3A2A3E');r(X+ox+1,Y+oy+1,1,1,'#E8E0D0')}
 if(h%3===0){r(X+4,Y+3,8,3,'#7A6A44');r(X+7,Y+1,2,2,'#7A6A44');oval(X+8,Y+5,5,2,'#2E4A2A')}};
/* the ancestors' ruins: struts that are neither wood nor stone, rotting membrane roof, a tree with a failed hive */
const strutJ=(X,Y,x,y)=>{floorR(X,Y,x,y);oval(X+8,Y+14,5,2,'rgba(0,0,0,.35)');r(X+6,Y-6,5,20,OL);r(X+7,Y-6,3,20,'#6B5A48');r(X+7,Y-6,1,20,'#8A7A66');
 for(let j=-4;j<14;j+=5){r(X+7,Y+j,3,2,'#9A4A2A');r(X+8,Y+j+2,1,1,'#7A3A20')}r(X+9,Y+4,1,2,'#C9CED3');r(X+5,Y+12,7,2,'#4D4237')};
const membM=(X,Y,x,y,t)=>{floorR(X,Y,x,y);const h=hash(x,y),sw=Math.round(Math.sin(t/900+x));r(X,Y-6,16,2,'#4D4237');
 for(let i=0;i<16;i++){const len=4+((h*(i+3))%7)+(i%4===0?sw:0);if((h+i)%5===0)continue;r(X+i,Y-4,1,len,(i%3)?'rgba(206,214,200,.7)':'rgba(170,184,168,.6)')}r(X+(h%10)+2,Y+1,3,2,'rgba(0,0,0,.15)')};
const hiveQ=(X,Y,x,y)=>{floorR(X,Y,x,y);oval(X+8,Y+14,6,2,'rgba(0,0,0,.35)');r(X+7,Y+2,3,12,OL);r(X+8,Y+2,1,12,'#5A4636');oval(X+8,Y+1,7,4,'#3E2A4E');oval(X+6,Y,3,2,'#5B2A6E');
 oval(X+8,Y+6,4,4,OL);oval(X+8,Y+6,3,3,'#6E6A60');r(X+7,Y+5,1,1,'#8D8A80');r(X+9,Y+8,2,1,'#3A3632')};
/* the "hill": too regular, vines and moss, small trees, worn fins in a row; one low square door with rounded corners */
const hillH=(X,Y,x,y,t)=>{const h=hash(x,y),dd=Math.max(Math.abs(x-32)/5,Math.abs(y-7)/7),HB=['#5E7A46','#527044','#46623A','#3A5632','#2E4A2A'];r(X,Y,16,16,HB[Math.min(4,Math.floor(dd*4))]);const L=!'HNOg'.includes(at(x-1,y));
 for(let k=0;k<5;k++){const ox=(h*(k+2))%13,oy=(h*(k+5))%13;oval(X+ox+2,Y+oy+2,3,2,k%2?'#4F6B3A':'#34502E')}
 for(let j=(h%4);j<16;j+=5){const sx=(h*j)%12;r(X+sx,Y+j,5,1,'#2E4A2A');r(X+sx+2,Y+j+1,1,2,'#2E4A2A')}
 if(h%7===1){r(X+6,Y+5,2,7,'#4A3A30');oval(X+7,Y+4,4,3,'#5B2A6E');r(X+6,Y+2,2,1,'#7E3F8F')}
 if(h%5===3){r(X+(h%11)+2,Y+(h%9)+4,2,1,'#6A5A48');r(X+(h%11)+2,Y+(h%9)+4,1,1,'#C9CED3')}
 if(L){r(X,Y,4,16,'#2E4A2A');r(X+3,Y,1,16,'#4F6B3A')}if(at(x,y+1)==null||at(x,y+1)==='_'||at(x,y+1)==='g')r(X,Y+12,16,4,'#2E4A2A')};
const finN=(X,Y,x,y,t)=>{hillH(X,Y,x,y,t);r(X+5,Y+1,6,13,OL);r(X+6,Y+2,4,12,'#6B5A48');r(X+6,Y+2,1,12,'#8A7A66');r(X+7,Y,2,2,OL);r(X+7,Y+1,2,1,'#6B5A48');r(X+8,Y+6,1,3,'#C9CED3');
 oval(X+8,Y+12,5,2,'#4F6B3A')};
const doorO=(X,Y,x,y,t)=>{hillH(X,Y,x,y,t);r(X,Y+1,16,15,'#4D4237');r(X+1,Y+2,14,14,'#6B5A48');r(X+3,Y+4,10,12,OL);r(X+4,Y+5,8,11,'#141210');
 r(X+3,Y+4,1,1,'#6B5A48');r(X+12,Y+4,1,1,'#6B5A48');r(X+1,Y+2,14,1,'#8A7A66');r(X+2,Y+8,1,3,'#C9CED3');r(X+13,Y+11,1,2,'#C9CED3');r(X,Y,16,1,'#2E4A2A')};
const clearG=(X,Y,x,y)=>{const h=hash(x,y);r(X,Y,16,16,'#5A6A3E');for(let i=h%3;i<16;i+=3)r(X+i,Y+((i*h)%13)+1,1,2,'#6E8648');r(X,Y+4,16,8,'#6A5A42');r(X+2,Y+12,2,2,'#4F6B3A')};

/* light: night over Orovo (fires, door lamps; brighter on the festival night), evening on the tree and the road */
const glow=(X,Y,lx,ly,rad,col,a)=>{const sx=lx*16+8-CAM.x,sy=ly*16+8-CAM.y;if(Math.abs(sx-X-8)>rad+10||Math.abs(sy-Y-8)>rad+10)return;
 const gr=g.createRadialGradient(sx,sy,1,sx,sy,rad);gr.addColorStop(0,`rgba(${col},${a})`);gr.addColorStop(1,`rgba(${col},0)`);g.fillStyle=gr;g.fillRect(X,Y,16,16)};
const DOORS=[[1,1],[5,1],[10,1],[14,1],[19,1],[1,4],[5,4],[14,4],[19,4],[1,7],[23,7],[1,10],[23,10]];
const FEST=[[3,5],[8,5],[13,5],[18,5],[23,5],[4,8],[21,8],[4,11],[21,11],[11,3],[16,3]];
function post(X,Y,t){const F=f();
 if(ZID==='orovo'&&NIGHT()){const fest=!!F.warDone;r(X,Y,16,16,fest?'rgba(14,10,34,.5)':'rgba(8,12,30,.58)');
  glow(X,Y,11,8,46,'255,150,60',.36);glow(X,Y,17,8,44+Math.sin(t/90)*2,'255,150,60',.34);for(const [lx,ly] of DOORS)glow(X,Y,lx,ly,22,'255,190,100',.3);
  if(fest)for(const [lx,ly] of FEST)glow(X,Y,lx,ly,26+Math.sin(t/300+lx)*3,(lx+ly)%2?'255,120,80':'255,210,120',.32)}
 else if(ZID==='tree'&&F.nestDone&&!F.warDone)r(X,Y,16,16,'rgba(150,70,20,.2)');
 else if(ZID==='road'){const rp=F.rp||0;if(rp===2&&!F.dawn&&!b('불을 피우다')){r(X,Y,16,16,'rgba(6,10,26,.55)');glow(X,Y,4,6,54+Math.sin(t/90)*2,'255,150,60',.36)}else if(rp<=3)r(X,Y,16,16,'rgba(150,70,30,.16)')}
}
const RAW={dirt,lane,roofT,wallT,doorT,upperT,rampT,quernT,penT,canY,trunkZ,fenceT,gapT,fireT,matT,wattleT,cropT,bankT,waterT,terminal:memStone,
 leafX,branchT,stickT,trunkI,briarB,groundT,rootZ,stumpT,cutT,edgeC,pathT,
 floorR,trackR,trunkT,camp,sevnerK,burnedB,ruinH,boilO,bramN,strutJ,membM,hiveQ,hillH,finN,doorO,clearG};
const TILES={};Object.entries(RAW).forEach(([k,fn])=>{TILES[k]=(X,Y,x,y,t)=>{fn(X,Y,x,y,t);post(X,Y,t)}});

function autoSpots(map,kinds,extra){const o={};map.forEach((row,y)=>[...row].forEach((c,x)=>{const k=kinds[c];if(!k)return;const key=x+','+y;
 if(typeof k==='function')Object.defineProperty(o,key,{get:k,enumerable:true,configurable:true});else o[key]=k[(x*7+y*13)%k.length]}));
 Object.entries(extra||{}).forEach(([k,v])=>{if(typeof v==='function')Object.defineProperty(o,k,{get:v,enumerable:true,configurable:true});else o[k]=v});return o}

/* ---------------- zones ---------------- */
const OROVO_MAP=[
"RRR,RRR,,RRR,RRR,,RRR,YYYY",
"WDW,WDW,,WDW,WDW,,WDW,YYYY",
",q,,RRR,,,,,,RRR,,,,,,,ZZ,",
"RRR,UUUr,LLL,UUUr,RRR,,,,,",
"WDW,WDWr,LLL,WDWr,WDW,,q,,",
",,,,,,,,,,,,,,,,,,,,,,,,,,",
"RRR,,FFFFFFFFFFFFFFFF,RRR,",
"WDW,,F..............F,WDW,",
",,,,,F.S...f.....f..F,,,,,",
"RRR,,F..............F,RRR,",
"WDW,qF..............F,WDW,",
",,,,,Fmm..........mmF,,q,,",
"wwwwwFFFFFFFGFFFFFFFFwwwww",
"cccccccccccc_ccc_c_ccccccc",
"__________________________",
"~~~~~~~~~~~~~~~~~~~~~~~~~~",
"cccccccccccccccccccccccccc",
"cccccccccccccccccccccccccc"];
const TREE_MAP=[
"XXXXXXXXXXXXXXXXXXXXXXXX",
"XXXXhhhXXXXXXXXXXXhhhXXX",
"XXXXX=XXXXXXXXXXXXX=XXXX",
"XXXXX=XXXXXXXXXXXXX=XXXX",
"XXX=================XXXX",
"XXXXXXXXXXX||XXXXXXXXXXX",
"CC.......BB||BB.......CC",
"C........BB||BB........C",
"C...s....BB||BB....s...C",
"C........ZZ||ZZ........C",
"C......................C",
"C..s.......vv.......s..C",
"C......................C",
"C......vv.......vv.....C",
"_..........s...........C",
"C......................C",
"CCCCC....CCCCCCC....CCCC",
"CCCCCCCCCCCCCCCCCCCCCCCC"];
const H9='HHHHHHHHH';
const ROAD_MAP=[
"C".repeat(27)+H9,
"C"+"CCTTCC"+"C".repeat(13)+"oo"+"CCCCC"+H9,
"C"+"......"+"CC"+"CCC"+"CCCC"+"C"+".bboo"+"....."+H9,
"C"+"..T..."+"CC"+"CCC"+"CCCC"+"C"+".bb.."+"....."+"HHNHNHNHN",
"C"+"......"+"CT"+"kkk"+"CCCC"+"C"+"....."+"JMMMJ"+H9,
"C"+".T...."+"CC"+"kkk"+"...."+"C"+"h...h"+"....."+H9,
"C"+"...F.."+"CC"+"kkk"+"...."+"C"+"....."+"....."+H9,
"_".repeat(27)+"gOHHHHHHH",
"C"+"......"+"CC"+"CCC"+"...."+"C"+"....."+"....."+H9,
"C"+"..T..."+"CC"+"CCC"+"...."+"C"+"h...h"+"J...J"+H9,
"C"+"......"+"CT"+"CCC"+"CCCC"+"C"+"....."+"....Q"+H9,
"C"+"CC..CC"+"CC"+"CCC"+"CCCC"+"C"+"nnnnn"+"n...C"+"HHNHNHNHN",
"C".repeat(17)+"nnnnnn"+"CCCC"+H9,
"C".repeat(27)+H9];

const ZONES={
 orovo:{name:'오로보',reg:'OROVO · OUTCAST YARD',outdoor:1,
  legend:{'R':{tile:'roofT'},'W':{tile:'wallT'},'D':{tile:'doorT'},'U':{tile:'upperT'},'r':{tile:'rampT'},',':{tile:'lane',walk:1},'q':{tile:'quernT'},'L':{tile:'penT'},
   'Y':{tile:'canY'},'Z':{tile:'trunkZ'},'F':{tile:'fenceT',over:1},'G':{tile:'gapT',walk:1},'.':{tile:'dirt',walk:1},'f':{tile:'fireT'},'m':{tile:'matT'},'S':{tile:'terminal'},
   'w':{tile:'wattleT'},'c':{tile:'cropT'},'_':{tile:'bankT',walk:1},'~':{tile:'waterT'}},
  map:OROVO_MAP,
  rooms:[[6,7,19,11,'오로보 · 추방자 마당'],[0,13,25,17,'오로보 · 밭과 도랑'],[0,0,25,5,'오로보 · 골목']],
  warps:{'0,14':{to:'tree',x:1,y:14,dir:'right',lock:()=>{const F=f();if(F.left)return '하분 나무 일은 끝났어요.';if(!F.budding)return '저쪽은 오로보 사냥꾼들 땅이에요.';if(F.warDone)return '나무 일은 끝났어요. 마당으로 가요.';return false}},
   '25,14':{to:'road',x:1,y:7,dir:'right',lock:()=>!f().left&&'어디로 가요? 갈 곳이 없어요.'}},
  spots:autoSpots(OROVO_MAP,{
   'R':['지붕 꼭대기에 술이 있어요. 아로 집하고 똑같아요.','집 사이에 또 집이 있어요. 빈 땅이 없어요.'],
   'W':['둥글게 휜 나무 벽이에요.','벽 안에서 사람 소리가 들려요.'],'D':['나무 문이에요. 추방자는 못 들어가요.'],
   'U':['집 위에 집이 있어요! 이런 집은 처음 봐요.','이 층 집이에요. 오로보에만 있어요.'],'r':['비탈길로 위층 집에 올라가요.'],
   'q':()=>'{맷돌|맷돌} 소리예요. 오로보는 밤에도 안 자요.','L':['다리가 여섯 개인 짐승들이에요. 밤에도 울어요.'],
   'Y':['오로보의 큰 나무예요. 벌집이 있어요.'],'Z':['큰 나무의 줄기예요.'],
   'F':['울타리예요. 저 너머가 오로보예요.','울타리 틈으로 골목이 보여요. 사람이 아주 많아요.'],
   'f':()=>NIGHT()?'불이 따뜻해요.':'불 옆에서 돌이 데워져요.','m':['추방자들이 자는 가죽이에요.'],
   'w':['낮은 담이에요. 밭과 마을을 나눠요.'],'c':['밭이에요. 끝이 안 보여요.','보라색, 초록색 작물이 자라요.'],
   '~':['{도랑|도랑}이에요. 물이 밭으로 흘러가요.','물소리가 작아요. 여기로 몰래 걸어왔어요.']}),
  npcs:['cauldron','doctor','lineA','lineB','lineC','sharskin','outcast','iblis','sharskinFire','ostel','menic','child','villager']},
 tree:{name:'새 마을 나무',reg:'THE HARBOON TREE',outdoor:1,
  legend:{'X':{tile:'leafX'},'=':{tile:'branchT',walk:1},'h':{tile:'stickT'},'|':{tile:'trunkI',walk:1},'B':{tile:'briarB'},'Z':{tile:'rootZ'},'.':{tile:'groundT',walk:1},
   's':{tile:'stumpT'},'v':{tile:'cutT',walk:1},'C':{tile:'edgeC'},'_':{tile:'pathT',walk:1}},
  map:TREE_MAP,
  rooms:[[0,0,23,5,'새 마을 나무 · 나무 위'],[1,6,22,16,'새 마을 나무 · 빈터']],
  warps:{'0,14':{to:'orovo',x:1,y:14,dir:'left',lock:()=>!f().warDone&&'아직 일이 안 끝났어요.'}},
  spots:autoSpots(TREE_MAP,{
   'X':['보라색, 초록색 잎이 두꺼워요.','잎 사이로 하분 소리가 들려요. 쉬익—'],
   'h':()=>f().warDone?'부서진 막대기만 남았어요.':'막대기로 엮은 하분 집이에요.',
   'B':['{가시덤불|가시덤불}이 나무줄기를 감고 올라가요.','가시 끝이 하얘요. 독이 있을 것 같아요.'],
   'Z':['큰 뿌리예요. 가시덤불이 뿌리까지 덮었어요.'],'s':['베어 낸 나무 그루터기예요.','그루터기 뒤에 숨을 수 있어요.'],
   'C':['숲이에요. 사냥꾼들이 숲 가장자리를 지켜요.']}),
  npcs:['hunter','sharskinTree','harboonW','nest','harboonE','fallen','iblisTree']},
 road:{name:'길',reg:'THE ROAD OF DEAD VILLAGES',outdoor:1,
  legend:{'C':{tile:'edgeC'},'T':{tile:'trunkT'},'.':{tile:'floorR',walk:1},'_':{tile:'trackR',walk:1},'F':{tile:'camp'},'k':{tile:'sevnerK'},'b':{tile:'burnedB'},'h':{tile:'ruinH'},
   'o':{tile:'boilO'},'n':{tile:'bramN'},'J':{tile:'strutJ'},'M':{tile:'membM'},'Q':{tile:'hiveQ'},'H':{tile:'hillH'},'N':{tile:'finN'},'O':{tile:'doorO'},'g':{tile:'clearG',walk:1}},
  map:ROAD_MAP,
  rooms:[[1,2,7,10,'길 · 첫 야영지'],[12,4,15,9,'길 · 둘째 야영지'],[17,2,21,12,'길 · 죽은 마을'],[22,2,26,11,'길 · 이상한 기둥들'],[27,0,35,13,'길 끝 · 언덕']],
  dark:()=>f().black?[-1,-1,36,14]:null,
  warps:{'0,7':{to:'orovo',x:24,y:14,dir:'left'}},
  spots:autoSpots(ROAD_MAP,{
   'C':['숲이 깊어요.'],'T':['큰 나무예요.'],
   'F':()=>f().rp===2?'불이 탁탁 소리를 내요.':f().rp>2?'불이 꺼졌어요. 재만 남았어요.':'불을 피울 자리예요. 아직 불이 없어요.',
   'k':()=>f().rp>=3?'커다란 발자국이 숲으로 이어져요.':'커다란 짐승이에요. 등이 언덕 같아요.',
   'b':['큰 나무가 까맣게 탔어요.','줄기에 도끼 자국이 있어요.'],'h':['무너진 집이에요. 모양이 조금 이상해요.','지붕이 비뚤어요. 벽이 너무 낮아요.'],
   'o':['줄기에 혹이 가득해요. 벌집이 여러 개 붙어 있어요.','크고 가시 달린 벌들이 윙윙 날아요. 가까이 가면 안 돼요.','나무 밑에 뼈만 남은 짐승이 있어요.'],
   'n':['덩굴과 가시덤불이 마을을 다 덮었어요.','덤불 속에 지붕 끝이 보여요. 샤스킨은 이쪽으로 안 가요.'],
   'J':['나무도 돌도 아닌 기둥이에요. 붉은 가루가 묻어 있어요.','만지니까 차가워요.'],'M':['썩은 천 같은 지붕이에요. 바람에 흔들려요.'],
   'Q':['벌집이 부풀었다가 말라 죽었어요. 벌이 하나도 없어요.'],
   'H':['언덕이에요. 너무 반듯해요.','덩굴과 이끼가 덮었어요.','작은 나무도 자라요.'],'N':['언덕 등에 지느러미 같은 돌기가 줄지어 있어요.'],
   'O':()=>f().done?'문 안은 캄캄해요.':'풀이 깨끗하게 잘려 있어요. 작은 네모 문이에요. 모서리가 둥글어요.'}),
  npcs:['sharskinR','ostelR','menicR','gbush','sevner','bones','strut']},
};

/* ---------------- people and things ---------------- */
const rp=()=>f().rp||0;
const NPC={
 /* ---- Orovo: the outcast yard ---- */
 cauldron:{name:'큰 솥',zone:'orovo',x:12,y:8,dir:'down',look:CAULDRON,pos:()=>[12,8],badge:['냄새를 맡다'],hide:()=>!!f().left,
  after:'국 냄새가 나요. 이제 무섭지 않아요.',
  talk:()=>[
   {who:'핸드리',say:'울타리 틈으로 들어왔어요. 아무도 저를 막지 않아요.'},
   {who:'…',say:'큰 솥이에요. 하얀 나무로 만들었어요.'},
   {who:'…',say:'김이 올라와요. 코를 대고 냄새를 맡았어요.'},
   Q.pot[0],
   {who:'핸드리',say:'이상해요. 이 냄새는… 역겹지 않아요.'},
   {who:'핸드리',say:'마을 음식 냄새는 늘 저를 아프게 했어요.'},
   Q.pot[1],
   {who:'…',say:'마당에 사람들이 있어요. 다들 몸에 검붉은 자국이 있어요.'},
   {who:'핸드리',say:'다 저 같은 {추방자|추방자}예요.',award:['냄새를 맡다']}]},
 doctor:{name:'오로보 의사',zone:'orovo',x:13,y:8,dir:'down',look:DOCTOR,badge:['국'],hide:()=>!!f().left,
  status:()=>b('냄새를 맡다')?undefined:null,
  after:'한 사람에 한 그릇이야. 더는 없어.',
  talk:()=>[
   {who:'…',say:'남자가 {국자|국자}를 들고 있어요. 머리털이 양털 같아요.'},
   {who:'…',say:'머리 전체가 부었어요. 울퉁불퉁하고 한쪽으로 기울었어요.'},
   {who:'핸드리',say:'{유령|유령}을 가진 사람이에요. 오로보의 의사예요.'},
   {who:'오로보 의사',say:'새 얼굴이네. 너도 먹어.'},
   Q.doctor[0],
   {who:'오로보 의사',say:'오로보에는 의사가 셋이야. 나는 그중 하나.'},
   {who:'오로보 의사',say:'이 국은 내가 끓였어. 너희가 먹을 수 있게.'},
   Q.doctor[1],
   {who:'…',say:'의사가 나무 그릇에 국을 담아 줬어요.',give:'국 한 그릇',award:['국']}]},
 lineA:{name:'추방자',zone:'orovo',x:13,y:9,dir:'up',look:LINE_A,hide:()=>!!f().left,
  talk:()=>[{who:'추방자',say:'밀지 마. 나도 배고파.'}]},
 lineB:{name:'젊은 추방자',zone:'orovo',x:14,y:9,dir:'left',look:LINE_B,hide:()=>!!f().left,
  talk:()=>[{who:'젊은 추방자',say:'하루에 한 번이야. 놓치면 내일까지 굶어.'}]},
 lineC:{name:'늙은 추방자',zone:'orovo',x:15,y:9,dir:'left',look:LINE_C,hide:()=>!!f().left,
  talk:()=>[{who:'늙은 추방자',say:'…'},{who:'핸드리',say:'아무 말도 안 해요. 그릇만 꼭 쥐고 있어요.'}]},
 sharskin:{name:'샤스킨',zone:'orovo',x:11,y:10,dir:'right',look:SHARSKIN,badge:['줄을 서다'],hide:()=>b('노동'),
  status:()=>!b('국')?null:undefined,
  after:'먹어. 안전해.',
  script:()=>b('국')?null:[{who:'샤스킨',say:'먼저 그릇을 받아 와. 저기 의사한테.'}],
  talk:()=>[
   {who:'…',say:'추방자들이 그릇을 들고 서 있어요. 한 줄로.'},
   {who:'…',say:'키가 크고 머리털이 없는 남자가 줄 옆에 서 있어요.'},
   {who:'…',say:'손이 팔꿈치까지 새빨개요. 옷은 얇고 이상하게 반짝여요.'},
   {who:'샤스킨',say:'밀지 마. 줄을 서.'},
   Q.shar[0],
   {who:'핸드리',say:'그릇만 봐요. 먹고 싶어요. 그런데 무서워요.'},
   {who:'핸드리',say:'마을 음식은 저를 아프게 해요. 이것도 그럴까 봐 무서워요.'},
   {who:'샤스킨',say:'못 믿겠어? 봐.'},
   {who:'…',say:'남자가 자기 그릇에서 한 숟가락 먹었어요.'},
   {who:'샤스킨',say:'먹어. 안전해.'},
   {who:'…',say:'먹었어요. 따뜻해요. 배가 안 아파요.',take:['국 한 그릇']},
   Q.shar[1],
   {who:'샤스킨',say:'이름은 아직 기억해?'},
   {who:'핸드리',say:'…핸드리예요.'},
   {who:'샤스킨',say:'나는 샤스킨이야. 여기서는 내가 질서를 지켜.'},
   {who:'핸드리',say:'눈빛이 아주 차분해요. 흔들리지 않아요.',award:['줄을 서다'],set:()=>{f().ate=1}}]},
 outcast:{name:'굶주린 추방자',zone:'orovo',x:8,y:10,dir:'right',look:OUTCAST,badge:['붐비다'],hide:()=>!!f().left,
  status:()=>f().ate?undefined:null,
  after:'오로보는 오늘도 붐비네.',
  talk:()=>[
   {who:'굶주린 추방자',say:'새로 왔구나. 오로보는 처음이야?'},
   {who:'굶주린 추방자',say:'울타리 너머를 봐. 집 위에 집이 있어.'},
   {who:'…',say:'집들이 빽빽해요. 집 사이에도 집이 있어요.'},
   {who:'…',say:'집 위에 또 집을 지었어요. 비탈길로 올라가요.'},
   Q.out[0],
   {who:'굶주린 추방자',say:'오로보는 밤에도 안 자. {맷돌|맷돌} 소리, 짐승 소리.'},
   Q.out[1],
   {who:'굶주린 추방자',say:'그래서 우리한테 일이 있는 거야. 곧 {설계자|설계자}가 올 거야.',award:['붐비다']}]},
 iblis:{name:'이블리스',zone:'orovo',x:12,y:7,dir:'down',look:IBLIS,badge:['노동'],
  hide:()=>{const F=f();return !(F.ate&&b('붐비다')&&!b('노동'))},
  after:'일해라. 그러면 먹는다.',
  script:()=>null,

  talk:()=>[
   {who:'…',say:'저녁이에요. 키가 큰 여자가 마당으로 들어와요.',walk:{npc:'iblis',from:[12,12]}},
   {who:'…',say:'높은 이마에 울퉁불퉁한 혹이 가득해요.'},
   {who:'…',say:'두 눈 중에 왼쪽 눈이 자꾸 다른 데를 봐요.'},
   {who:'…',say:'입 한쪽이 붙어 있어요. 그래서 웃음이 비뚤어요.'},
   {who:'이블리스',say:'조용! 나는 {설계자|설계자} 이블리스다.'},
   {who:'이블리스',say:'오로보에 온 걸 환영한다. 우리 의사가 너희 배에 맞게 국을 끓였다.'},
   {who:'이블리스',say:'냄새가 이상하지? 아니면, 너희한테는 좋은 냄새인가?'},
   {who:'이블리스',say:'너희는 일하러 왔다. 몰랐지? 이제 알았지. 내일 숲에 데려간다. 막대기하고 돌로 짐승을 죽여라.'},
   {who:'이블리스',say:'일해라. 그러면 먹는다.'},
   Q.ib[1],
   Q.ib[2],
   {who:'…',say:'이블리스는 바로 돌아서 나가요. 빠르고, 시끄럽고, 쉬지 않아요.',award:['노동'],walk:{npc:'sharskinFire',from:[11,10]},leave:{npc:'iblis',to:[12,14]}},
   {who:'핸드리',say:'다른 추방자들은 아무것도 안 물어봐요. 저는 궁금해요.'}]},
 sharskinFire:{name:'샤스킨',zone:'orovo',x:16,y:8,dir:'right',look:SHARSKIN,badge:['인구','이사하다'],
  hide:()=>{const F=f();return !b('노동')||F.left||(F.budding&&!F.warDone)},
  status:()=>{const F=f();if(F.warDone&&!F.left)return 'todo';return undefined},
  after:'{분봉|분봉}… 벌집처럼 마을도 나뉘어.',
  script:()=>{const F=f();
   if(F.warDone&&!F.left)return [
    {who:'…',say:'울타리 너머에서 북소리, 노랫소리가 들려요.'},
    {who:'샤스킨',say:'핸드리. 오스텔, 메닉. 이리 와.'},
    {who:'샤스킨',say:'내일이면 국이 없어. 너희는 어디로 갈 거야?'},
    {who:'샤스킨',say:'잘 들어. 너희는 저주받은 게 아니야.'},
    {who:'샤스킨',say:'이 빨간 자국은 {카인의 표식|카인의 표식}이야.'},
    {who:'샤스킨',say:'우리는 {본래 상태|본래 상태}로 돌아간 거야. 조상들처럼.'},
    {who:'샤스킨',say:'나랑 같이 가자. 우리 같은 사람들이 사는 곳이 있어. 먹을 것도, 잘 곳도 있어.'},
    {who:'핸드리',say:'저는 처음으로 제가 더럽지 않다고 느꼈어요.'},
    {who:'핸드리',say:'갈게요.'},
    {who:'…',say:'다음 날 아침, 우리 넷은 오로보를 떠났어요.',set:()=>{f().left=1}}];
   return null},
  talk:()=>[
   {who:'…',say:'밤이에요. 샤스킨이 불 옆에 앉아 있어요.'},
   {who:'샤스킨',say:'앉아. 궁금한 게 있지?'},
   {who:'핸드리',say:'무슨 일이에요? 무슨 짐승이요? 왜요?'},
   {who:'샤스킨',say:'오로보는 인구가 너무 많아. 집 위에 집을 지을 만큼.'},
   Q.ib[0],
   {who:'샤스킨',say:'벌집을 생각해 봐. 벌이 너무 많아지면 어떻게 돼?'},
   {who:'샤스킨',say:'일부가 새 집으로 떠나. 마을도 똑같아. {분봉|분봉}이라고 해.'},
   Q.fire[0],
   {who:'샤스킨',say:'{설계자|설계자}랑 벌집이 새 나무를 골라.'},
   {who:'샤스킨',say:'특별한 벌들, 의사, {판관|판관}도 같이 가.'},
   Q.fire[1],
   {who:'핸드리',w:'이사하다',build:['일부는','새 마을로','이사하게','돼요']},
   {who:'샤스킨',say:'우리는 그 나무를 비워 주는 거야. 짐승들은 우리 냄새를 싫어하거든.'},
   {who:'샤스킨',say:'하늘을 봐. 별들은 뭘 위해 있을까?'},
   {who:'핸드리',say:'…네? 별이요?'},
   {who:'…',say:'샤스킨이 조금 실망한 얼굴을 했어요.'},
   {who:'…',say:'그날 밤, 저는 오랜만에 깊이 잤어요.',award:['인구','이사하다'],set:()=>{f().budding=1}}]},
 ostel:{name:'오스텔',zone:'orovo',x:18,y:9,dir:'left',look:OSTEL,hide:()=>!!f().left,
  talk:()=>[{who:'오스텔',say:'나는 오스텔. {파보|파보}에서 왔어.'},
   {who:'…',say:'키가 크고 아주 말랐어요. 얼굴과 가슴에 빨간 무늬가 그려져 있어요.'},
   {who:'핸드리',say:'누가 일부러 무늬처럼 그렸어요. 숨길 수 없게.'},
   {who:'오스텔',say:'너도 혼자야? …여기서는 다 혼자야.'}]},
 menic:{name:'메닉',zone:'orovo',x:18,y:10,dir:'left',look:MENIC,hide:()=>!!f().left,
  talk:()=>[{who:'메닉',say:'…졸려. 말 시키지 마.'},
   {who:'…',say:'키는 작은데 어깨가 넓어요. 힘이 세 보여요.'},
   {who:'핸드리',say:'얼마 전에 쫓겨났대요. 그런데 늘 누워 있어요.'}]},
 child:{name:'오로보 아이',zone:'orovo',x:16,y:13,dir:'down',look:CHILD,pos:()=>[16,13],
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];return [
   {who:'…',say:'도랑 옆에서 오로보 아이가 혼자 수수께끼를 내고 혼자 맞혀요.'},
   {who:'오로보 아이',say:'내가 문제 낼게! 맞혀 봐!'},
   {who:'…',say:'저도 속으로 대답해요.'},{...q},
   {who:'오로보 아이',say:'와! 그럼 또 낼게. 내일!'}]},
  talk:()=>[]},
 villager:{name:'오로보 사람',zone:'orovo',x:18,y:13,dir:'down',look:VILLAGER,
  talk:()=>[{who:'…',say:'오로보 여자가 바구니를 들고 지나가요.'},{who:'…',say:'저를 한 번도 안 봐요. 제가 안 보이는 것 같아요.'}]},

 /* ---- the Harboon tree ---- */
 hunter:{name:'오로보 사냥꾼',zone:'tree',x:3,y:13,dir:'right',look:HUNTER,badge:['독'],
  after:'가시 조심해. 독이야.',
  talk:()=>[
   {who:'오로보 사냥꾼',say:'가까이 오지 마. 거기서 들어.'},
   {who:'오로보 사냥꾼',say:'저게 새 마을 나무야. {하분|하분}들이 저 위에 살아.'},
   {who:'…',say:'나무줄기에 {가시덤불|가시덤불}이 위로 감겨 올라가요.'},
   {who:'오로보 사냥꾼',say:'하분은 가시를 뱉어. 그 가시에 독이 있어.'},
   Q.hunt[0],
   {who:'오로보 사냥꾼',say:'우리는 그 가시에 맞으면 크게 아파. 너희는 괜찮대.'},
   Q.hunt[1],
   {who:'오로보 사냥꾼',say:'짐승들도 너희 냄새를 싫어해. 그래서 너희가 필요한 거야.',award:['독']}]},
 sharskinTree:{name:'샤스킨',zone:'tree',x:8,y:10,dir:'right',look:SHARSKIN,badge:['던지다'],hide:()=>!!f().warDone,
  status:()=>{const F=f();if(!b('독'))return null;if(!b('던지다'))return 'todo';if(F.bargain)return 'todo';return F.nestDone?null:undefined},
  after:'위로 올라가. 둥지를 부숴.',  // while you climb to the nest: his usual line, then one of his REVIEW lines
  script:()=>{const F=f();
   if(!b('던지다'))return null;
   if(F.bargain)return [
    {who:'…',say:'싸움은 여드레 동안 계속됐어요.'},
    {who:'…',say:'매일 나무에 올라갔어요. 둥지를 부수고 알을 깼어요.'},
    {who:'…',say:'많은 추방자가 죽었어요.'},
    {who:'…',say:'여드레째 날, 남은 하분들이 숲으로 도망쳤어요. 우리는 돌을 던지며 쫓았어요.'},
    {who:'샤스킨',say:'끝났다. 이제 이 나무는 오로보 거야.'},
    {who:'샤스킨',say:'마당으로 돌아가자.',set:()=>{f().warDone=1}}];
   if(F.nestDone)return [{who:'샤스킨',say:'오늘은 끝. 쉬어.'},{who:'핸드리',say:'저쪽 빈터 끝에서 누가 이야기해요.'}];
   return null},
  talk:()=>[
   {who:'샤스킨',say:'돌을 가져가. 위에서 하분이 오면 던져.',give:'돌'},
   Q.sharT[0],
   {who:'샤스킨',say:'가시는 별로 안 아파. 우리 몸은 달라.'},
   Q.sharT[1],
   {who:'샤스킨',say:'줄기를 타고 올라가. 가시덤불은 피해서.',award:['던지다']}]},
 harboonW:{name:'하분',zone:'tree',x:9,y:4,dir:'down',look:HARBOON,pos:()=>[9,4],badge:['가시'],hide:()=>!!f().harbW,
  status:()=>hasItem('돌')?'todo':null,
  script:()=>hasItem('돌')?null:[{who:'하분',say:'쉬이이익!'},{who:'핸드리',say:'맨손으로는 못 가요. 샤스킨한테 돌을 받아요.'}],
  talk:()=>[
   {who:'…',say:'나뭇가지에 {하분|하분}이 매달려 있어요.'},
   {who:'…',say:'사람보다 작아요. 위아래 다리로 가지를 꽉 잡았어요.'},
   {who:'…',say:'가운데 팔에는 갈라진 발톱이 있어요. 옆 눈이 줄기 끝에서 움직여요.'},
   {who:'하분',say:'쉬이이익!'},
   {who:'…',say:'돌을 던졌어요. 퍽!',take:['돌']},
   {who:'…',say:'하분이 입으로 무엇을 뱉었어요. 가시예요!'},
   Q.harb[0],
   {who:'…',say:'팔에 가시가 박혔어요. 따끔해요. 그런데 그게 다예요.'},
   Q.harb[1],
   {who:'…',say:'하분이 숨구멍으로 비명을 지르고 위로 도망쳤어요.',award:['가시'],set:()=>{f().harbW=1},leave:{npc:'harboonW',to:[5,2]}}]},
 nest:{name:'하분 둥지',zone:'tree',x:5,y:2,dir:'down',get look(){return f().nestDone?NEST_BROKEN:NEST},pos:()=>[5,2],badge:['둥지','알'],
  after:'부서진 둥지예요. 깨진 알 껍데기가 있어요.',
  talk:()=>[
   {who:'…',say:'가지 끝에 막대기로 지은 집이 있어요. 하분 둥지예요.'},
   Q.nest[0],
   {who:'…',say:'안에 알이 있어요. 동그랗고 미끈해요. 아직 따뜻해요.'},
   Q.nest[1],
   {who:'핸드리',say:'둥지를 부숴야 해요. 그게 일이에요.'},
   {who:'…',say:'막대기 집을 발로 찼어요. 알이 떨어져서 깨졌어요.'},
   {who:'…',say:'아래에서 하분들이 날카롭게 울어요.'},
   {who:'핸드리',w:'알',build:['둥지를','부수는','대신에','국을','받아요']},
   {who:'핸드리',say:'배는 부를 거예요. 그래도 기분이 이상해요.'},
   {who:'…',say:'그렇게 며칠이 지났어요.',award:['둥지','알'],set:()=>{f().nestDone=1}},
   {expand:()=>classTime(CLASS,['나무 위','둥지'])}]},
 harboonE:{name:'하분',zone:'tree',x:19,y:3,dir:'down',look:HARBOON,pos:()=>[19,3],hide:()=>!!f().nestDone,
  talk:()=>[{who:'하분',say:'쉬익! 쉬이익!'},{who:'핸드리',say:'저 하분은 아직 자기 집을 지켜요.'}]},
 fallen:{name:'쓰러진 추방자',zone:'tree',x:15,y:11,dir:'down',look:FALLEN,pos:()=>[15,11],hide:()=>!f().nestDone,
  talk:()=>[{who:'…',say:'추방자가 나무 밑에 쓰러져 있어요. 움직이지 않아요.'},{who:'…',say:'가지에서 떨어졌어요. 이름도 몰라요.'},
   {who:'핸드리',say:'저도 내일 저렇게 될 수 있어요.'}]},
 iblisTree:{name:'이블리스',zone:'tree',x:20,y:13,dir:'left',get look(){return f().ghostOn?IBLIS_G:IBLIS},pos:()=>[20,13],hide:()=>!f().nestDone||!!f().bargain,
  status:()=>'todo',
  talk:()=>[
   {who:'…',say:'저녁이에요. 이블리스가 혼자 나무를 보고 있어요.'},
   {who:'핸드리',say:'저는 조용히 다가가서 들었어요.'},
   {who:'이블리스',say:'루마스하고 레다 대신 하코, 산, 모리.'},
   {who:'…',say:'이블리스의 목소리가 갑자기 평평해져요. 이마와 턱에서 하얀 빛이 깜빡여요.',set:()=>{f().ghostOn=1}},
   {who:'이블리스 (유령)',say:'예측: 식량 모으기 0.02 감소.'},
   {who:'이블리스',say:'바꾼 대로 둬. 고르토마르하고 헤키는 채집 일로 돌려.'},
   {who:'이블리스 (유령)',say:'예측: 식량 모으기 0.0004 증가. 가구와 작은 나무 물건 만들기 0.073 감소.'},
   {who:'이블리스',say:'가구가 얼마나 남았는지 계산해.',set:()=>{f().ghostOn=0}},
   Q.ibt[0],
   {who:'핸드리',say:'유령이 정하는 게 아니에요. 이블리스가 정해요. 유령은 말만 해요.'},
   {who:'핸드리',say:'멜로리 말고, 유령한테 맞서는 사람은 처음 봐요.'},
   {who:'…',say:'이블리스가 저를 봤어요.'},
   {who:'이블리스',say:'뭐냐?'},
   {who:'핸드리',say:'{설계자|설계자}님. 일이 끝나도… 계속 국을 주세요. 우리도 더 일할 수 있어요.'},
   {who:'이블리스',say:'이익이 부족하다.'},
   {who:'이블리스',say:'공동체에 못 섞이는 게 너희 쓸모보다 크다.'},
   {who:'이블리스',say:'계산해 봤다. 안 된다.'},
   {who:'이블리스',say:'약속은 지킨다. 일하는 동안은 매일 먹인다.'},
   Q.ibr[0],
   {who:'…',say:'이블리스는 벌써 나무 쪽을 보고 있어요. 저는 거기 없는 것 같아요.',set:()=>{const F=f();F.bargain=1;F.refused=1}}]},

 /* ---- the road ---- */
 sharskinR:{name:'샤스킨',zone:'road',x:5,y:5,dir:'down',look:SHARSKIN,pos:()=>{const p=rp();return p<3?[5,5]:p===3?[16,7]:[27,7]},
  status:()=>{const p=rp(),F=f();if(F.done)return null;if(p===0)return 'todo';if(p===1)return hasItem('숲 음식')&&b('게으르다')?'todo':null;
   if(p>=4)return b('폐허')&&b('버려지다')?'todo':undefined;return p===2?undefined:null},
  badge:['불을 피우다'],
  get after(){return rp()===2?'길에 뭐가 있어. 가 보자.':'천천히 봐. 이 길에는 죽은 마을이 많아.'},  // the morning and the dead villages: his usual line, then one of his REVIEW lines
  script:()=>{const p=rp(),F=f();
   if(p===0)return [
    {who:'…',say:'오로보를 떠나서 하루 종일 걸었어요.'},
    {expand:()=>classTime(CLASS,['길'])},
    {who:'샤스킨',say:'여기서 쉬자. 메닉, 불을 피워.'},
    {who:'메닉',say:'불 피우는 거 못 해요… 정말 미안해요.'},
    Q.sr[0],
    {who:'샤스킨',say:'…오스텔, 핸드리. 먹을 걸 찾아 와.',set:()=>{f().rp=1}}];
   if(p===1){if(!hasItem('숲 음식'))return [{who:'샤스킨',say:'먹을 걸 찾아 와. 오스텔이 덤불을 알아.'}];
    if(!b('게으르다'))return [{who:'샤스킨',say:'메닉은 뭐 하고 있어? 가서 봐.'}];
    return [
     {who:'…',say:'돌아오니까 불이 없어요. 메닉은 그대로 누워 있어요.'},
     {who:'…',say:'샤스킨이 {반짝이는 네모|반짝이는 네모}를 꺼냈어요.'},
     {who:'…',say:'네모에서 작은 불꽃이 튀었어요. 마른 잎에 불이 붙었어요.',take:['숲 음식'],set:()=>{f().rp=2}},
     Q.sr[1],
     {who:'…',say:'샤스킨은 메닉을 오래 쳐다봤어요. 아무 말도 안 했어요.'},
     {who:'…',say:'밤이 지났어요.',award:['불을 피우다'],set:()=>{f().dawn=1}},
     {expand:()=>classTime(CLASS,['아침'])}]}
   if(p===2)return null;
   if(p===3)return [{who:'샤스킨',say:'오늘은 여기서 쉰다.'},{who:'핸드리',say:'메닉이 저기 누워 있어요.'}];
   if(F.done)return [{who:'샤스킨',say:'들어가자, 형제들.'}];
   if(!(b('폐허')&&b('버려지다')))return null;
   return [
    {who:'…',say:'길 끝에 언덕이 있어요. 마을보다 커요.'},
    {who:'…',say:'모양이 너무 반듯해요. 등에 지느러미 같은 돌기가 줄지어 있어요.'},
    {who:'…',say:'덩굴과 이끼가 덮었어요. 그런데 문 앞은 풀이 깨끗하게 잘려 있어요.'},
    {who:'…',say:'작은 네모 문이에요. 모서리가 둥글어요.'},
    {who:'샤스킨',say:'이게 {조상의 집|조상의 집}이다.'},
    {who:'샤스킨',say:'이 집은 밤하늘에서 왔다. 별들 사이에서.'},
    {who:'핸드리',say:'밤하늘에서요? 집이 하늘에서 와요?'},
    {who:'샤스킨',say:'들어가자, {형제|형제}들. 이제 여기가 너희 집이야.',set:()=>{f().done=1}},
    {who:'…',say:'저는 문 앞에 섰어요. 안은 캄캄했어요.',finale:1}]},
  talk:()=>[]},
 ostelR:{name:'오스텔',zone:'road',x:3,y:8,dir:'right',look:OSTEL,pos:()=>{const p=rp();return p<3?[3,8]:p===3?[14,8]:[25,8]},
  talk:()=>{const p=rp();
   if(p===1)return [{who:'오스텔',say:'저기 덤불에 먹을 게 있어. 같이 가자.'},{who:'오스텔',say:'파보 숲하고 비슷해. 뿌리를 캐 보자.'}];
   if(p===3)return [{who:'오스텔',say:'…메닉은 또 안 했어.'},{who:'오스텔',say:'샤스킨 얼굴 봤어? 무서워.'}];
   if(p>=4&&!f().done)return [{who:'오스텔',say:'누가 이걸 지었어? 짐승이 사람처럼 집을 지었나?'},{who:'오스텔',say:'그 짐승들… 아직 여기 있을까?'}];
   if(f().done)return [{who:'오스텔',say:'조상의 집… 정말 하늘에서 왔을까?'}];
   return [{who:'오스텔',say:'다리가 아파. 오로보에서 너무 멀리 왔어.'}]}},
 menicR:{name:'메닉',zone:'road',x:2,y:6,dir:'down',get look(){return f().menicDead?MENIC_DEAD:MENIC},pos:()=>rp()<3?[2,6]:[13,6],badge:['게으르다'],
  status:()=>{const p=rp();if(p===1&&!b('게으르다'))return 'todo';if(p===3)return 'todo';return f().menicDead||p<1?null:undefined},
  after:'…쿨쿨.',  // asleep (p 1–2, once he has taught 게으르다): then one of his REVIEW lines, after he wakes
  script:()=>{const p=rp(),F=f();
   if(F.menicDead)return [{who:'…',say:'메닉이에요. 움직이지 않아요.'},{who:'…',say:'우리는 메닉을 거기 두고 떠났어요.'}];
   if(p===3)return [
    {who:'…',say:'그날 저녁, 둘째 야영지예요.'},
    {who:'…',say:'오스텔이 불을 피웠어요. 메닉은 앉아서 손을 녹여요.'},
    {who:'샤스킨',say:'메닉. 먹을 걸 모아 와.'},
    {who:'메닉',say:'네가 가서 모아. 같이 가자고 한 건 너야. 난 따라왔을 뿐이야.'},
    {who:'…',say:'샤스킨은 화를 내지 않았어요. 그냥 일어났어요.'},
    {who:'…',say:'은빛 지팡이를 들었어요.'},
    {who:'…',say:'퍽.',set:()=>{f().black=1}},
    {who:'…',say:'지팡이가 메닉의 머리를 쳤어요. 머리뼈가 깨지는 소리가 났어요.'},
    {who:'…',say:'메닉이 쓰러져서 비명을 질렀어요. 샤스킨이 지팡이 끝으로 메닉의 눈을 찔렀어요.'},
    {who:'…',say:'……',set:()=>{const F=f();F.black=0;F.menicDead=1}},
    {who:'…',say:'메닉은 움직이지 않아요. 땅에 피가 고였어요.'},
    {who:'핸드리',say:'저와 오스텔은 아무것도 못 했어요. 그냥 봤어요.'},
    {who:'샤스킨',say:'우리는 모두 일해야 해.'},
    {who:'오스텔',say:'…먹을 게 없잖아요. 이건… 고기예요.'},
    {who:'샤스킨',say:'안 돼. 우리는 우리 형제를 먹지 않아.'},
    {who:'샤스킨',say:'나는 {사제|사제}다. 이건 내가 정한다.'},
    {who:'…',say:'다음 날 아침, 우리는 다시 걸었어요. 셋이서.',set:()=>{f().rp=4}}];
   if(p<1)return [{who:'메닉',say:'아이고, 다리야. 나는 좀 누울래.'}];
   return null},
  talk:()=>[
   {who:'…',say:'메닉은 나무에 기대서 누워 있어요.'},
   {who:'메닉',say:'미안해… 나는 원래 불을 못 피워. 좀 쉴게.'},
   Q.men[0],
   {who:'핸드리',say:'샤스킨이 메닉을 봐요. 아무 말도 안 해요.'},
   Q.men[1],
   {who:'메닉',say:'…내일은 할게. 아마.',award:['게으르다']}]},
 gbush:{name:'덤불',zone:'road',x:6,y:9,dir:'down',get look(){return rp()>=2||hasItem('숲 음식')?GBUSH_BARE:GBUSH},pos:()=>[6,9],
  status:()=>rp()===1&&!hasItem('숲 음식')?'todo':null,
  script:()=>{const p=rp();if(p<1)return [{who:'핸드리',say:'덤불이에요. 열매가 달려 있어요.'}];if(p>1||hasItem('숲 음식'))return [{who:'핸드리',say:'다 땄어요.'}];
   return [{who:'…',say:'오스텔하고 같이 뿌리를 캐고 열매를 땄어요.'},{who:'오스텔',say:'이건 먹어도 돼. 이건 안 돼.'},{who:'…',say:'두 손 가득 모았어요.',give:'숲 음식'}]},
  talk:()=>[]},
 sevner:{name:'세브너',zone:'road',x:10,y:7,dir:'down',look:SEVNER,pos:()=>[10,7],hide:()=>rp()>=3,
  status:()=>rp()===2?'todo':null,
  script:()=>{const p=rp();if(p<2)return [{who:'…',say:'길 앞쪽에 커다란 짐승이 있어요. 나무껍질을 먹고 있어요.'},{who:'핸드리',say:'지금은 못 지나가요. 야영지로 돌아가요.'}];
   return [
    {who:'…',say:'아침이에요. 길가에서 커다란 짐승이 코 집게로 나무껍질을 벗기고 있어요.'},
    {who:'…',say:'집만 해요. 등이 혹처럼 솟았어요.'},
    {who:'…',say:'다리가 여섯 개, 뚱뚱한 꼬리는 일곱 번째 다리 같아요.'},
    {who:'…',say:'코끝에 집게가 있어요. 위쪽 눈 위에 갈라진 뿔이 있어요.'},
    {who:'핸드리',say:'{세브너|세브너}예요.'},
    {who:'…',say:'우리 냄새 때문에 화가 났어요. 길을 막았어요.'},
    {who:'세브너',say:'뿌우우우—!'},
    {who:'샤스킨',say:'소리 질러! 돌을 던져! 눈을 노려!'},
    {who:'…',say:'저와 오스텔이 소리를 지르고 세브너 눈에 돌을 던졌어요.'},
    {who:'…',say:'샤스킨은 팔을 넓게 벌리고 앞으로 걸어갔어요. 소매가 펄럭이고 은빛 지팡이가 햇빛에 번쩍였어요.'},
    {who:'…',say:'메닉은 처음에만 조금 소리 지르고 뒤로 빠졌어요.'},
    {who:'세브너',say:'뿌우— 뿌우—'},
    {who:'…',say:'세브너가 달려들려고 몸을 웅크렸어요. 그러다가 비명을 지르며 숲으로 도망쳤어요. 나무가 우지끈 부러졌어요.'},
    {who:'…',say:'샤스킨이 메닉을 봤어요. 이번에도 아무 말도 안 했어요.',set:()=>{f().rp=3}}]},
  talk:()=>[]},
 bones:{name:'뼈',zone:'road',x:19,y:5,dir:'down',look:BONES,pos:()=>[19,5],badge:['폐허'],
  status:()=>rp()>=4?undefined:null,
  after:'마을은 폐허예요. 아무도 없어요.',
  talk:()=>[
   {who:'…',say:'마을이 하나 있어요. 그런데 아무도 없어요.'},
   {who:'…',say:'큰 나무가 까맣게 탔어요. 줄기에 도끼 자국도 있어요.'},
   {who:'…',say:'집들이 무너졌어요. 모양이 조금 이상해요.'},
   Q.bones[0],
   {who:'…',say:'풀 속에 사람 뼈가 있어요. 머리뼈 하나는 한쪽이 구멍투성이예요.'},
   {who:'핸드리',say:'여기에도 유령의 빛이 있었을까요?'},
   Q.bones[1],
   {who:'핸드리',say:'이 길에는 이런 마을이 또 있었어요.',award:['폐허']}]},
 strut:{name:'이상한 기둥',zone:'road',x:24,y:6,dir:'down',look:STRUT,pos:()=>[24,6],badge:['버려지다'],
  status:()=>rp()>=4?undefined:null,
  after:'버려진 곳이에요. 조상들이 만들었대요.',
  talk:()=>[
   {who:'…',say:'이상한 곳이에요. 나무도 돌도 아닌 기둥이 쓰러져 있어요.'},
   {who:'…',say:'기둥에 붉은 가루가 묻어 있어요. 만지니까 차가워요.'},
   {who:'…',say:'위에는 썩은 천 같은 지붕이 찢어져 있어요.'},
   Q.str[0],
   {who:'…',say:'옆에 나무가 하나 있어요. 벌집이 부풀었다가 말라 죽었어요.'},
   {who:'샤스킨',say:'조상들이 만든 거야. 오래전에 버려졌어.'},
   Q.str[1],
   {who:'핸드리',say:'조상들… 우리와 같은 사람들이었을까요?',award:['버려지다']}]},
};
const FOLLOW=null;

const INTRO=[{who:'핸드리',say:'마을에서 마을로, 저는 도둑으로 살았어요.'},{who:'핸드리',say:'그리고 아주 큰 마을에 왔어요. {오로보|오로보}예요.'},
 {who:'핸드리',say:'오로보는 크로보다 다섯 배쯤 커요.'},{who:'핸드리',say:'해가 지고 있어요. 어디서 음식 냄새가 나요.'},
 {who:'핸드리',say:'저는 밭 사이 {도랑|도랑}을 따라 몸을 숙이고 걸어요.'}];
const DONE=['3장 끝! 핸드리는 조상의 집 앞에 왔어요.','오스텔도 같이 왔어요. 메닉은 길에 남았어요.','다음 장에서는 그 문 안으로 들어가요.',{expand:()=>wrapUp()},'일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f(),p=rp();
 if(F.done)return '3장 끝 · 일지에서 복습해요';
 if(!b('냄새를 맡다'))return '오로보 · 도랑을 따라 냄새 쪽으로';
 if(!b('국'))return '추방자 마당 · 큰 솥 옆의 의사';
 if(!F.ate)return '추방자 마당 · 줄을 서요';
 if(!b('붐비다'))return '추방자 마당 · 굶주린 추방자';
 if(!b('노동'))return '추방자 마당 · 저녁 · 설계자의 말';
 if(!F.budding)return '추방자 마당 · 밤 · 샤스킨의 모닥불';
 if(!F.warDone){
  if(!b('독'))return '밭 서쪽 끝 · 새 마을 나무 · 사냥꾼';
  if(!b('던지다'))return '새 마을 나무 · 샤스킨한테 돌을 받아요';
  if(!F.harbW)return '나무 위 · 하분한테 돌을 던져요';
  if(!F.nestDone)return '나무 위 · 하분 둥지';
  if(!F.bargain)return '새 마을 나무 · 저녁 · 이블리스';
  return '새 마을 나무 · 샤스킨';
 }
 if(!F.left)return '오로보 · 잔치 밤 · 샤스킨의 모닥불';
 if(p===0)return '길 · 첫 야영지 · 샤스킨';
 if(p===1)return `길 · 먹을 것 ${hasItem('숲 음식')?'✓':'✗'} · 메닉 ${b('게으르다')?'✓':'✗'} · 샤스킨`;
 if(p===2)return '길 · 아침 · 길을 막은 짐승';
 if(p===3)return '길 · 둘째 야영지 · 메닉';
 if(!b('폐허'))return '길 · 죽은 마을';
 if(!b('버려지다'))return '길 · 이상한 기둥들';
 return '길 끝 · 언덕 앞의 샤스킨';
}
return {WORDS,DICT,CONFUSE,BANK,Q,REVIEW,CLASS,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES,PLAYER};
}});
