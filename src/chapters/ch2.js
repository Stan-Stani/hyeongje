CHAPTERS.push({id:'ch2',n:'2장',title:'숲',place:'숲 · 숲길 · 크로',words:16,save:'esb-ch2',color:'#4F6B3A',
 start:{zone:'forest',x:5,y:5,dir:'right'},introWho:'핸드리',
 make:()=>{
/* =====================================================================
   2장 · 숲 — content.
   Book pin: §IV only. Handry is 16, just fled Aro by night (end §III); Melory is Aro's doctor (offscreen; he believes her lost
   to the ghost). Cold season coming. Arraclid tastes the blood on his leg and leaves (animals are repelled by outcasts).
   Starvation diet: rotate foods or the toxins build; Raiker herd shuns him; day 4 despair, decides to leave. Follows Aro's
   procession (~20, drums, pipes, a heavy box) taking Kalton to Cro as honoured "fresh blood"; never shows himself; lives off
   thrown-away crusts. Cro (~2× Aro): 5-day welcome, old sharp doctor prods Kalton, Kalton settles with two young women and
   their toddler. Handry steals bread/clothes/shoes/flowers every ~3 nights; the Lawgiver orders a hunt; a round-faced huntress
   twists her knee, spear broken; he can't hurt her, weeps; she (lying) sends him east to Divo. He drifts on to Orovo (DONE only).
   Invented (inv.): Aro escort, drummer/piper/carrier lines, Cro guard, Cro hunters' chatter, Cro grandmother (review), the
   livestock-pen distraction, Cro's baker's rack and drying line as theft sites, a Cro hunter carrying an Ossclaw trap (Aro
   traps Ossclaws, §II), where Handry hides in Cro (behind a ring stone, a house corner, the bakery's low wall).
   Food (§II/§IV): in Aro he lived on near-burnt bread (meat and berries came back up); in the forest anything new keeps him
   going for a day, a second day of it makes him sick; burnt bread is the one food he can live on; a flower feeds him one night.
   Lore source: notes/canon.md + notes/chapters-outline.md (2장). Audit against the full book before publishing (see CLAUDE.md).
   ===================================================================== */
const WORDS=['숲','어둠','캄캄하다','배고프다','굶다','얼다','외롭다','숨다','흔적','꽃잎','훔치다','도둑','사냥꾼','덫','동쪽','해가 뜨다'];
const DICT={
 '숲':{k:'나무가 아주 많은 곳.',e:'forest, woods',ex:'숲에서 이상한 소리가 나요.'},
 '어둠':{k:'빛이 없어서 아무것도 안 보이는 것.',e:'darkness',ex:'어둠 속에서 무엇이 움직여요.'},
 '캄캄하다':{k:'아주 어두워서 하나도 안 보여요.',e:'to be pitch-dark',ex:'밤 숲은 정말 캄캄해요.'},
 '배고프다':{k:'음식을 먹고 싶어요. 배가 비었어요. (배고파요)',e:'to be hungry',ex:'아침부터 못 먹어서 배고파요.'},
 '굶다':{k:'밥을 안 먹거나 못 먹어요. (굶어요, 굶었어요)',e:'to go hungry, to skip meals',ex:'사흘 동안 거의 굶었어요.'},
 '얼다':{k:'너무 차가워서 물이 얼음이 돼요. 사람 몸도 얼 수 있어요. (얼어요, 얼 거예요)',e:'to freeze',ex:'밤에 손가락이 얼 것 같아요.'},
 '외롭다':{k:'혼자라서 마음이 쓸쓸해요. (외로워요)',e:'to be lonely',ex:'숲에 혼자 있어서 외로워요.'},
 '숨다':{k:'다른 사람이 못 보게 몸을 감춰요. (숨어요)',e:'to hide (oneself)',ex:'덤불 뒤에 숨었어요.'},
 '흔적':{k:'무엇이 있었거나 지나간 뒤에 남은 것.',e:'trace, trail',ex:'모닥불 흔적이 아직 따뜻해요.',hj:'痕跡 · 跡 = 발자취'},
 '꽃잎':{k:'꽃의 얇고 예쁜 조각. 색깔이 있어요.',e:'petal',ex:'주황색 꽃잎이 천천히 움직여요.',hj:'꽃 + 잎 · 나뭇잎의 잎'},
 '훔치다':{k:'남의 물건을 몰래 가져가요. (훔쳐요, 훔쳤어요)',e:'to steal',ex:'밤에 빵을 훔쳤어요.'},
 '도둑':{k:'남의 물건을 훔치는 사람.',e:'thief',ex:'크로에 도둑이 나타났어요.'},
 '사냥꾼':{k:'짐승을 잡는 일을 하는 사람.',e:'hunter',ex:'크로 사냥꾼들이 숲에 들어왔어요.'},
 '덫':{k:'짐승을 잡으려고 숨겨 놓는 도구.',e:'trap, snare',ex:'숲에 오스클로 덫을 놓아요.'},
 '동쪽':{k:'해가 뜨는 쪽.',e:'east',ex:'동쪽으로 사흘 동안 걸었어요.',hj:'東 · 동해(東海)의 동'},
 '해가 뜨다':{k:'아침에 해가 하늘에 나와요. (해가 떠요, 떴어요)',e:'the sun rises',ex:'해가 뜨는 쪽으로 가요.'},
 /* glosses for words that appear in lines but are not badges */
 '아라클리드':{k:'긴 다리가 여섯 개 있는 큰 짐승. 나무도 타요. "깍" 하고 울어요.',e:'Arraclid'},
 '레이커':{k:'무리로 사는 큰 짐승. 등이 딱딱하고 털이 뻣뻣해요.',e:'Raiker'},
 '지빗':{k:'낮게 기어 다니는 작은 짐승. 자기 이름처럼 울어요.',e:'Jibbit'},
 '트랙웜':{k:'나무껍질 비늘 밑에 사는 하얀 벌레.',e:'trackworm'},
 '토하다':{k:'먹은 것이 입으로 다시 나와요.',e:'to vomit'},
 '두드러기':{k:'피부에 빨갛게 올라오는 것. 아주 가려워요.',e:'rash, hives'},
 '추방자':{k:'마을에서 쫓겨난 사람.',e:'outcast, exile'},
 '행렬':{k:'여러 사람이 줄지어 같이 가는 것.',e:'procession'},
 '새 피':{k:'다른 마을에 선물로 보내는 젊은 남자. 큰 영광이에요.',e:'"fresh blood"'},
 '판관':{k:'유령을 가진 사람. 마을의 규칙을 지키고 판결해요.',e:'Lawgiver'},
 '파수꾼':{k:'밤에 마을을 지키는 사람.',e:'watchman'},
 '짐승 우리':{k:'짐승을 가두어 키우는 곳.',e:'(animal) pen'},
 '오스클로':{k:'사냥꾼들이 잡는 숲 짐승.',e:'Ossclaw'},
 '하펫 꽃':{k:'아침 해가 나오는 쪽으로 자라는 꽃.',e:'Haffet flower'},
 '디보':{k:'크로에서 멀지 않은 마을.',e:'Divo'},
};
const CONFUSE={'숲':['숯','술'],'어둠':['어른','얼음'],'캄캄하다':['깜짝하다','깨끗하다'],'배고프다':['배부르다','배우다'],'굶다':['끓다','긁다'],
 '얼다':['열다','울다'],'외롭다':['외우다','괴롭다'],'숨다':['쉬다','숨 쉬다'],'흔적':['흉터','흔들다'],'꽃잎':['나뭇잎','꽃집'],'훔치다':['흘리다','흔들다'],
 '도둑':['도장','두부'],'사냥꾼':['사냥개','나무꾼'],'덫':['돛','닻'],'동쪽':['서쪽','동네'],'해가 뜨다':['해가 지다','해가 타다']};

/* extra review questions (the memory stone uses these too, alongside every NPC question) */
const BANK=[
 {w:'숲',ask:'사냥꾼들은 해가 지기 전에 ___에서 돌아와요. 밤에는 위험해요.',opts:[['숲',1],['숯',0,'숯은 나무를 태워서 만든 검은 거예요. 나무가 많고 짐승이 사는 곳은 "숲".']]},
 {w:'어둠',ask:'캄캄한 ___ 속에서 지빗 우는 소리가 들려요.',opts:[['어둠',1],['아침',0,'아침에는 밝아요. 빛이 없는 캄캄한 곳 → "어둠".']]},
 {w:'캄캄하다',ask:'모닥불이 다 꺼져서 사방이 ___.',opts:[['캄캄해요',1],['깨끗해요',0,'깨끗하다는 더럽지 않은 거예요. 불이 꺼지면 → "캄캄해요".']]},
 {w:'배고프다',ask:'점심을 못 먹어서 너무 ___.',opts:[['배고파요',1],['배불러요',0,'배부르면 더 못 먹어요. 안 먹었으면 → "배고파요".']]},
 {w:'굶다',ask:'늦게 일어나서 아침을 ___.',opts:[['굶었어요',1],['굽었어요',0,'"굽었어요"는 등이 휘었다는 말이에요. (빵은 "구웠어요".) 안 먹었어요 → "굶었어요".']]},
 {w:'얼다',ask:'추운 계절이에요. 밖에서 일했더니 손이 꽁꽁 ___.',opts:[['얼었어요',1],['열었어요',0,'열다는 문을 여는 거예요. 너무 차가워지면 → "얼었어요".']]},
 {w:'외롭다',ask:'친구들은 다 밭에 갔어요. 얘기할 사람이 없어서 ___.',opts:[['외로워요',1],['외워요',0,'외우다는 말을 기억하는 거예요. 혼자라서 쓸쓸하면 → "외로워요".']]},
 {w:'숨다',ask:'한 아이가 큰 뿌리 뒤에 ___서 아무도 못 찾아요.',opts:[['숨어',1],['쉬어',0,'쉬다는 피곤할 때 하는 거예요. 아무도 못 찾게 → "숨어서".']]},
 {w:'흔적',ask:'진흙 위에 뭔가 남아 있어요. 짐승이 지나간 ___ 같아요.',opts:[['흔적',1],['흉터',0,'흉터는 상처가 나은 뒤에 피부에 남는 거예요. 지나간 뒤에 땅에 남은 건 "흔적".']]},
 {w:'꽃잎',ask:'바람이 불어서 주황색 ___이 떨어져요.',opts:[['꽃잎',1],['꽃집',0,'꽃집은 꽃을 파는 가게예요. 바람에 떨어지는 건 "꽃잎".']]},
 {w:'훔치다',ask:'누가 밤에 우리 밭에서 열매를 몰래 ___.',opts:[['훔쳤어요',1],['흘렸어요',0,'흘리다는 물이나 눈물이 떨어지는 거예요. 남의 것을 몰래 가져가면 → "훔쳤어요".']]},
 {w:'도둑',ask:'마을에서 ___을 잡으면 판관한테 데려가요.',opts:[['도둑',1],['동생',0,'동생은 가족이에요. 남의 물건을 훔쳐서 판관 앞에 서는 사람은 "도둑".']]},
 {w:'사냥꾼',ask:'___들이 창을 들고 숲으로 들어가요.',opts:[['사냥꾼',1],['사냥감',0,'사냥감은 잡히는 짐승이에요. 창을 들고 짐승을 잡으러 가는 사람 → "사냥꾼".']]},
 {w:'덫',ask:'숲에 놓은 ___에 오스클로가 걸렸어요.',opts:[['덫',1],['닻',0,'닻은 배를 멈추게 하는 무거운 쇠예요. 짐승이 걸리는 건 "덫".']]},
 {w:'동쪽',ask:'해가 지는 쪽은 서쪽, 해가 뜨는 쪽은 ___이에요.',opts:[['동쪽',1],['남쪽',0,'남쪽은 북쪽의 반대예요. 해가 뜨는 쪽은 "동쪽".']]},
 {w:'해가 뜨다',ask:'___ 전에 일어나서 밭에 나갔어요.',opts:[['해가 뜨기',1],['해가 뜬',0,'"-기 전에"를 써요. 뜨다 → "해가 뜨기 전에".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 arr:[
  {who:'핸드리',w:'어둠',ask:'빛이 하나도 없어요. 사방이 ___이에요.',opts:[['어둠',1],['얼음',0,'얼음은 차가운 물이에요. 빛이 없는 건 "어둠".'],['어른',0,'어른은 다 큰 사람이에요. 빛이 없는 건 "어둠".']]},
  {who:'핸드리',w:'어둠',ask:'무서워요. 그래도 움직이면 안 돼요. → ___ 움직이면 안 돼요.',done:'무서워도 움직이면 안 돼요.',opts:[['무서워도',1],['무서워서',0,'무서워서 움직이면 안 돼요? 이유가 아니에요. 무섭지만 그래도 → "무서워도".'],['무섭기 때문에',0,'"-기 때문에"는 이유예요. 무섭지만 그래도 → "무서워도".']]},
  {who:'핸드리',w:'캄캄하다',ask:'숲이 너무 ___ 별이 하나도 안 보여요.',opts:[['캄캄해서',1],['캄캄해도',0,'"-아/어도"는 "그래도"라는 뜻이에요. 안 보이는 이유니까 → "캄캄해서".'],['깨끗해서',0,'깨끗하다는 더럽지 않은 거예요. 빛이 없으면 → "캄캄해서".']]},
 ],
 berry:[
  {who:'…',w:'숲',ask:'나무가 아주 많은 곳은 ___이에요.',opts:[['숲',1],['섬',0,'섬은 바다 가운데 있는 땅이에요. 나무가 많은 곳은 "숲".'],['술',0,'술은 어른들이 마시는 거예요! 나무가 많은 곳은 "숲".']]},
  {who:'핸드리',w:'배고프다',ask:'꼬르륵… 배에서 소리가 나요. 너무 ___.',opts:[['배고파요',1],['배불러요',0,'배부르면 꼬르륵 소리가 안 나요. 먹고 싶으면 → "배고파요".'],['배워요',0,'배우다는 공부하는 거예요. 먹고 싶으면 → "배고파요".']]},
  {who:'핸드리',w:'배고프다',ask:'제대로 못 먹었기 ___ 힘이 없어요.',opts:[['때문에',1],['때문이에요',0,'문장이 계속되니까 "때문에"예요. "때문이에요"는 문장 끝에만 써요.'],['덕분에',0,'"덕분에"는 좋은 일에 써요. 나쁜 이유 → "때문에".']]},
 ],
 bark:[
  {who:'핸드리',w:'굶다',ask:'음식이 없어서 하루 종일 ___.',opts:[['굶었어요',1],['끓었어요',0,'끓다는 물이 뜨거워지는 거예요. 아무것도 안 먹었어요 → "굶었어요".'],['긁었어요',0,'긁다는 가려운 데를 손톱으로 하는 거예요. 안 먹었어요 → "굶었어요".']]},
  {who:'핸드리',w:'굶다',ask:'벌레는 ___ 먹어야 돼요. 안 먹으면 굶어요.',opts:[['맛없어도',1],['맛없어서',0,'맛없어서 먹어요? 이상해요. 맛없지만 그래도 → "맛없어도".']]},
 ],
 raiker:[
  {who:'핸드리',w:'얼다',ask:'이렇게 추우면 밤에 몸이 ___ 것 같아요.',opts:[['얼',1],['열',0,'열은 몸이 뜨거운 거예요. 추우면 → "얼 것 같아요".'],['울',0,'울다는 눈물이 나는 거예요. 추우면 몸이 → "얼 것 같아요".']]},
  {who:'핸드리',w:'얼다',ask:'아무리 ___ 레이커들은 저를 안 받아 줘요.',opts:[['추워도',1],['추워서',0,'추워서 안 받아 줘요? 이유가 아니에요. 춥지만 그래도 → "추워도".']]},
 ],
 nest:[
  {who:'핸드리',w:'외롭다',ask:'이제 저는 혼자예요. 너무 ___.',opts:[['외로워요',1],['외워요',0,'외우다는 단어를 기억하는 거예요. 혼자라서 쓸쓸하면 → "외로워요".'],['새로워요',0,'새롭다는 처음 보는 거예요. 혼자라서 쓸쓸하면 → "외로워요".']]},
 ],
 escort:[
  {who:'핸드리',w:'숨다',ask:'들키면 안 돼요. 덤불 뒤에 ___.',opts:[['숨어요',1],['쉬어요',0,'쉬다는 피곤할 때 하는 거예요. 안 보이게 → "숨어요".'],['숨 쉬어요',0,'숨 쉬다는 공기를 마시는 거예요. 안 보이게 → "숨어요".']]},
  {who:'핸드리',w:'숨다',ask:'그래서 멀리서 ___ 따라갈 거예요.',opts:[['숨어서',1],['숨으면',0,'"-으면"은 "만약"이에요. 안 보이게 숨은 채로 따라가요 → "숨어서".'],['숨으려고',0,'"-으려고"는 목적이에요. 숨으려고 따라가요? 이상해요. 숨은 채로 → "숨어서".']]},
 ],
 ashes:[
  {who:'핸드리',w:'흔적',ask:'발자국, 재, 빵 껍질… 사람들이 지나간 ___이에요.',opts:[['흔적',1],['약속',0,'약속은 미리 정한 거예요. 지나간 뒤에 남은 건 "흔적".'],['한숨',0,'한숨은 힘들 때 길게 쉬는 숨이에요. 지나간 뒤에 남은 건 "흔적".']]},
  {who:'핸드리',w:'흔적',ask:'잇몸에서 피가 ___ 씹었어요.',opts:[['날 때까지',1],['나서',0,'피가 나서 씹었어요? 이유가 아니에요. 피가 날 만큼 오래 → "날 때까지".'],['나기 전에',0,'"-기 전에"면 피가 안 났어요. 피가 날 만큼 오래 → "날 때까지".']]},
 ],
 woman:[
  {who:'…',w:'꽃잎',ask:'꽃에서 색깔이 있는 얇은 부분은 ___이에요.',opts:[['꽃잎',1],['나뭇잎',0,'나뭇잎은 나무에 달린 잎이에요. 꽃의 부분은 "꽃잎".'],['꽃병',0,'꽃병은 꽃을 넣는 병이에요. 꽃의 부분은 "꽃잎".']]},
  {who:'핸드리',w:'꽃잎',ask:'이 꽃은 아로에 없기 ___ 아주 신기해요.',opts:[['때문에',1],['전에',0,'"-기 전에"는 시간 순서예요. 이유니까 → "없기 때문에".'],['위해서',0,'"-기 위해서"는 목적이에요. 이유니까 → "없기 때문에".']]},
 ],
 guard:[
  {w:'훔치다',ask:'누가 밤에 몰래 빵을 ___ 갔어요.',opts:[['훔쳐',1],['빌려',0,'빌리면 나중에 돌려줘요. 몰래 가져가면 → "훔쳐 갔어요".'],['흔들어',0,'흔들다는 이리저리 움직이는 거예요. 몰래 가져가면 → "훔쳐 갔어요".']]},
  {w:'도둑',ask:'남의 물건을 훔치는 사람은 ___이에요.',opts:[['도둑',1],['도장',0,'도장은 이름을 찍는 거예요! 훔치는 사람은 "도둑".'],['도움',0,'도움은 남을 돕는 거예요! 훔치는 사람은 "도둑".']]},
 ],
 hunter:[
  {who:'…',w:'사냥꾼',ask:'숲에서 짐승을 잡는 사람은 ___이에요.',opts:[['사냥꾼',1],['사냥감',0,'사냥감은 사냥할 때 잡는 짐승이에요. 사람은 "사냥꾼".'],['나무꾼',0,'나무꾼은 나무를 하는 사람이에요. 짐승을 잡으면 "사냥꾼".']]},
  {who:'…',w:'덫',ask:'짐승을 잡으려고 땅에 숨겨 놓는 것은 ___이에요.',opts:[['덫',1],['돛',0,'돛은 배에 다는 큰 천이에요. 짐승을 잡는 건 "덫".'],['떡',0,'떡은 쌀로 만든 음식이에요! 짐승을 잡는 건 "덫".']]},
 ],
 huntress:[
  {w:'동쪽',ask:'___으로요. {하펫 꽃|하펫 꽃}이 자라는 쪽이요.',opts:[['동쪽',1],['서쪽',0,'서쪽은 해가 지는 쪽이에요. 아침 해가 나오는 쪽은 "동쪽".'],['북쪽',0,'북쪽이 아니에요. 아침 해가 나오는 쪽은 "동쪽".']]},
  {who:'…',w:'해가 뜨다',ask:'아침이 와요. 하늘이 밝아져요. ___.',opts:[['해가 떠요',1],['해가 져요',0,'해가 지면 밤이 와요. 아침에는 "해가 떠요".'],['해가 타요',0,'"해가 타요"는 없어요. 아침에 하늘에 나오면 "해가 떠요".']]},
 ],
 cafe:[ // old words from 성실호 and 1장, no badges
  {ask:'물을 ___ 차를 만들어요.',opts:[['끓여서',1],['굶어서',0,'굶다는 밥을 안 먹는 거예요! 물은 "끓여서".']]},
  {ask:'뜨거운 냄비에 손을 ___.',opts:[['데었어요',1],['되었어요',0,'"되다"는 무엇이 바뀌는 거예요. 뜨거워서 다쳤으면 → "데었어요".']]},
  {ask:'모기한테 물려서 다리가 너무 ___.',opts:[['가려워요',1],['가려요',0,'"가리다"는 안 보이게 막는 거예요. 모기 → "가려워요".']]},
  {ask:'벌이 아이 팔을 ___.',opts:[['쐈어요',1],['쌌어요',0,'싸다는 가방을 싸거나 값이 낮은 거예요. 벌은 "쐈어요".']]},
  {ask:'빵을 너무 오래 구워서 까맣게 ___.',opts:[['탔어요',1],['땄어요',0,'따다는 꽃이나 과일을 손으로 떼는 거예요. 까맣게 → "탔어요".']]},
  {ask:'옆집에 사는 사람은 우리 ___이에요.',opts:[['이웃',1],['이불',0,'이불은 잘 때 덮는 거예요. 옆집 사람은 "이웃".']]},
  {ask:'친구가 제 말을 ___. 대답도 안 해요.',opts:[['무시했어요',1],['무서웠어요',0,'무섭다는 겁나는 거예요. 대답도 안 하면 → "무시했어요".']]},
  {ask:'눈 위에 짐승 ___이 있어요. 여기로 지나갔어요.',opts:[['발자국',1],['발가락',0,'발가락은 발 끝의 다섯 개예요. 땅에 남은 발 모양은 "발자국".']]},
 ],
};

/* In-character review lines (engine: linesFor/reviewPick/sayLine): people use a word you've learned again, in their own moment.
   Who is around when: the forest things (뿌리 밑 잠자리, 열매 덤불, 비늘 나무껍질) only after the day-4 resolve (their scripts run
   the days before), always after; the Raikers once the Arraclid has gone; the camp (칼턴, 북, 피리, 상자) until the procession
   leaves, so only the forest words; the 모닥불 자리 from 흔적 on; Cro by day until the feast night; the 파수꾼 by night until the hunt;
   the second hunter until the first one speaks; the huntress only after the chapter's end. Things and animals can't speak: their
   lines are Handry's own thoughts there (who:'핸드리'). The escort and the first hunter leave the moment they teach, so their
   lines are never asked (kept so each teacher who speaks has one). Likewise the 크로 여자 teaches 꽃잎 as the day ends and the
   feast night follows in the same talk: her lines and Kalton's 꽃잎 line are never asked.
   Invented (inv., small, non-decisive): at the camp, the drummer's cold hands and a pot of boiling water for Kalton; the carrier
   burns his hand on it and has a strap sore on his shoulder; the piper feels Kalton's forehead warm; Kalton knowing no one in Cro
   and missing Aro's neighbours; something calling in the dark. In Cro by day, feast soup in a big pot and children warned off it,
   neighbours helping, a mother stopping the toddler eating a petal, the toddler pointing at a wasp, Kalton saying no one here
   ignores him. By night, the watchman noticing even burnt loaves go and no footprints, wanting more lamps, and (once Handry has
   picked a door flower that night) the flower gone, guessing the thief eats the petals. The hunters looking for
   footprints and crumbs and meaning to block the slope. The huntress's "walk toward the sunrise each morning" and "not Cro",
   and her asking how long he has starved (§IV: she sees him "painfully gaunt").
   Handry's thoughts: the leaf blanket still itching, the leg wound not yet healed (both only until the thieving nights),
   Cro hunters/traps maybe in the woods (hedged), leaving at sunrise. Class time (the five-day feast): Cro drumming and singing
   each night, a Cro person urging Kalton to eat, Handry watching from the edge of the woods. */
const REVIEW=[
 /* ---- the forest (Handry's thoughts by the Raikers, once the Arraclid has gone) ---- */
 {w:'어둠',by:'raikerB',who:'핸드리',when:()=>!!f().arraclid,pre:['후우—'],ask:'밤이 오면 숲에는 ___만 있어요.',opts:[['어둠',1],['아침',0,'아침은 밝아요. 밤에 빛이 없으면 "어둠".'],['얼음',0,'얼음은 차가운 물이에요. 밤에 빛이 없으면 "어둠".']]},
 {w:'외롭다',by:'raikerB',who:'핸드리',when:()=>!!f().arraclid,pre:['후우—'],ask:'레이커들은 붙어서 자요. 저만 혼자라서 ___.',opts:[['외로워요',1],['외워요',0,'외우다는 말을 기억하는 거예요. 혼자라서 쓸쓸하면 "외로워요".'],['가려워요',0,'가렵다는 긁고 싶은 거예요. 혼자라서 쓸쓸하면 "외로워요".']]},
 {w:'쏘다',by:'raikerC',who:'핸드리',when:()=>!!f().arraclid,pre:['후우—'],ask:'벌도 저를 안 ___. 짐승들도 저를 피해요.',opts:[['쏴요',1],['싸요',0,'싸다는 짐을 싸는 거예요. 벌은 침으로 "쏴요".'],['써요',0,'쓰다는 글씨를 쓰는 거예요. 벌은 침으로 "쏴요".']]},
 {w:'캄캄하다',by:'raikerC',who:'핸드리',when:()=>!!f().arraclid,pre:['후우—'],ask:'___ 밤에는 레이커가 안 보여요. 소리만 들려요.',opts:[['캄캄한',1],['깨끗한',0,'깨끗하다는 더럽지 않은 거예요. 소리만 들리는 밤은 "캄캄한" 밤.'],['밝은',0,'밝은 밤이면 다 보여요. 소리만 들리면 "캄캄한" 밤.']]},
 {w:'얼다',by:'raikerA',who:'핸드리',when:()=>hasItem('나뭇잎 이불'),pre:['후우— 후우—'],ask:'나뭇잎 이불은 바람에 날아가요. 밤마다 꽁꽁 ___.',opts:[['얼어요',1],['어려요',0,'어리다는 나이가 적은 거예요. 추워서 몸이 차가워지면 "얼어요".'],['녹아요',0,'녹다는 얼음이 물이 되는 거예요. 반대예요! 추우면 "얼어요".']]},
 {w:'가렵다',by:'raikerA',who:'핸드리',when:()=>hasItem('나뭇잎 이불')&&!f().night,pre:['후우— 후우—'],ask:'나뭇잎 이불 때문에 팔이 아직 ___.',opts:[['가려워요',1],['가벼워요',0,'가볍다는 무게가 안 나가는 거예요. 긁고 싶으면 "가려워요".'],['그리워요',0,'그립다는 보고 싶은 거예요. 긁고 싶으면 "가려워요".']]},
 /* ---- the forest things, after the resolve (and after the chapter's end) ---- */
 {w:'외롭다',by:'nest',who:'핸드리',ask:'숲에서는 말할 사람이 없어요. 그래서 ___.',opts:[['외로워요',1],['외워요',0,'외우다는 말을 기억하는 거예요. 혼자라서 쓸쓸하면 "외로워요".'],['가려워요',0,'가렵다는 긁고 싶은 거예요. 혼자라서 쓸쓸하면 "외로워요".']]},
 {w:'두드러기',by:'nest',who:'핸드리',ask:'나뭇잎 이불을 덮으면 ___가 나요.',opts:[['두드러기',1],['두부',0,'두부는 먹는 거예요! 피부에 빨갛게 올라오는 건 "두드러기".'],['주머니',0,'주머니는 옷에 달린 작은 가방이에요. 빨갛게 올라오는 건 "두드러기".']]},
 {w:'동쪽',by:'nest',who:'핸드리',ask:'크로를 지나서 디보가 있는 ___으로 가요.',opts:[['동쪽',1],['서쪽',0,'서쪽은 해가 지는 쪽이에요. 디보는 "동쪽".'],['남쪽',0,'남쪽이 아니에요. 사냥꾼 여자는 "동쪽"이라고 했어요.']]},
 {w:'배고프다',by:'berry',who:'핸드리',ask:'오늘도 ___. 하지만 같은 걸 이틀 먹으면 아파요.',opts:[['배고파요',1],['배불러요',0,'배부르면 열매를 안 봐요. 먹고 싶으면 "배고파요".'],['배워요',0,'배우다는 공부하는 거예요. 먹고 싶으면 "배고파요".']]},
 {w:'덫',by:'berry',who:'핸드리',ask:'숲에 사냥꾼들 ___이 있을지도 몰라요.',opts:[['덫',1],['떡',0,'떡이면 좋겠어요! 짐승을 잡는 건 "덫".'],['돛',0,'돛은 배에 다는 천이에요. 짐승을 잡는 건 "덫".']]},
 {w:'도둑',by:'berry',who:'핸드리',when:()=>!!f().hunt,ask:'저는 이제 ___이에요. 살려고 훔쳐요.',opts:[['도둑',1],['도장',0,'도장은 이름을 찍는 거예요. 훔치는 사람은 "도둑".'],['도움',0,'도움은 남을 돕는 거예요. 훔치는 사람은 "도둑".']]},
 {w:'굶다',by:'bark',who:'핸드리',ask:'벌레라도 먹어요. ___ 것보다 나아요.',opts:[['굶는',1],['끓는',0,'끓다는 물이 뜨거워지는 거예요. 아무것도 못 먹는 건 "굶는" 것.'],['긁는',0,'긁다는 가려운 데를 손톱으로 하는 거예요. 아무것도 못 먹는 건 "굶는" 것.']]},
 {w:'상처',by:'bark',who:'핸드리',when:()=>!f().night,ask:'다리 ___가 아직 다 안 나았어요.',opts:[['상처',1],['상자',0,'상자는 물건을 넣는 거예요. 다쳐서 생긴 곳은 "상처".'],['상대',0,'상대는 같이 싸우는 사람이에요. 다쳐서 생긴 곳은 "상처".']]},
 {w:'해가 뜨다',by:'bark',who:'핸드리',ask:'내일 아침 해가 ___ 바로 떠나요.',opts:[['뜨면',1],['지면',0,'해가 지면 밤이에요. 아침에 떠나니까 "뜨면".'],['타면',0,'해는 안 타요. 아침에 하늘에 나오면 "뜨면".']]},
 {w:'꽃잎',by:'bark',who:'핸드리',when:()=>!!f().hunt,ask:'주황색 ___도 하룻밤만 먹을 수 있었어요.',opts:[['꽃잎',1],['꽃집',0,'꽃집은 꽃을 파는 가게예요. 꽃의 얇은 부분은 "꽃잎".'],['꽃병',0,'꽃병은 꽃을 넣는 병이에요. 꽃의 얇은 부분은 "꽃잎".']]},
 /* ---- the road camp, overheard from the brush (until the procession leaves: only the forest words) ---- */
 {w:'외롭다',by:'kaltonR',ask:'크로에는 아는 사람이 없어요. 많이 ___ 거예요.',opts:[['외로울',1],['외울',0,'외우다는 말을 기억하는 거예요. 혼자라서 쓸쓸하면 "외로울 거예요".'],['가려울',0,'가렵다는 긁고 싶은 거예요. 혼자라서 쓸쓸하면 "외로울 거예요".']]},
 {w:'어둠',by:'kaltonR',ask:'___ 속에서 뭐가 울어요. …짐승이에요?',opts:[['어둠',1],['얼음',0,'얼음은 차가운 물이에요. 빛이 없는 곳은 "어둠".'],['어른',0,'어른은 다 큰 사람이에요. 빛이 없는 곳은 "어둠".']]},
 {w:'이웃',by:'kaltonR',ask:'아로 ___들이 벌써 보고 싶어요.',opts:[['이웃',1],['이사',0,'이사는 집을 옮기는 거예요. 같은 마을 사람은 "이웃".'],['이불',0,'이불은 잘 때 덮는 거예요. 같은 마을 사람은 "이웃".']]},
 {w:'얼다',by:'drummer',ask:'바람이 차요. 손이 ___ 북을 못 치겠어요.',opts:[['얼어서',1],['열어서',0,'열다는 문을 여는 거예요. 추워서 손이 차가워지면 "얼어서".'],['울어서',0,'울다는 눈물이 나는 거예요. 추워서 손이 차가워지면 "얼어서".']]},
 {w:'캄캄하다',by:'drummer',ask:'불 밖은 너무 ___. 하나도 안 보여요.',opts:[['캄캄해요',1],['깨끗해요',0,'깨끗하다는 더럽지 않은 거예요. 하나도 안 보이면 "캄캄해요".'],['따뜻해요',0,'불 밖은 추워요! 하나도 안 보이면 "캄캄해요".']]},
 {w:'끓이다',by:'drummer',ask:'칼턴, 물 ___ 줄게. 따뜻하게 마셔.',opts:[['끓여',1],['끓어',0,'"끓어"는 물이 혼자 하는 거예요. 제가 하면 "끓여 줄게".'],['꿇어',0,'꿇다는 무릎을 꿇는 거예요. 물은 "끓여".']]},
 {w:'숲',by:'piper',ask:'밤 ___은 노래해요. 들려요? 삐걱삐걱.',opts:[['숲',1],['술',0,'하하, 술은 노래 안 해요. 나무가 많은 곳은 "숲".'],['숯',0,'숯은 나무를 태운 검은 거예요. 나무가 많은 곳은 "숲".']]},
 {w:'열이 나다',by:'piper',ask:'칼턴, 이마가 뜨거워. 혹시 ___?',opts:[['열이 나',1],['얼어',0,'얼면 몸이 차가워요. 이마가 뜨거우면 "열이 나?"'],['열어',0,'열다는 문을 여는 거예요. 이마가 뜨거우면 "열이 나?"']]},
 {w:'배고프다',by:'carrier',ask:'아이고, ___. 크로 잔치는 아직이에요?',opts:[['배고파요',1],['배불러요',0,'배부르면 잔치를 안 기다리죠. 먹고 싶으면 "배고파요".'],['배워요',0,'배우다는 공부하는 거예요. 먹고 싶으면 "배고파요".']]},
 {w:'굶다',by:'carrier',ask:'크로에 가면 아무도 안 ___. 잔치니까요!',opts:[['굶어요',1],['끓어요',0,'끓다는 물이 뜨거워지는 거예요. 밥을 못 먹는 건 "굶어요".'],['긁어요',0,'긁다는 손톱으로 하는 거예요. 밥을 못 먹는 건 "굶어요".']]},
 {w:'데다',by:'carrier',ask:'앗, 뜨거워요! 냄비에 손을 ___.',opts:[['데었어요',1],['탔어요',0,'손이 까맣게 탄 건 아니에요. 사람 피부는 "데었어요".'],['되었어요',0,'되다는 무엇이 바뀌는 거예요. 뜨거운 것에 다치면 "데었어요".']]},
 {w:'상처',by:'carrier',ask:'상자 끈 때문에 어깨에 ___가 났어요.',opts:[['상처',1],['상태',0,'상태는 몸이나 기분이 어떤지예요. 다쳐서 생긴 곳은 "상처".'],['상자',0,'하하, 상자는 이거예요. 다쳐서 생긴 곳은 "상처".']]},
 // the escort teaches 숨다 and leaves with the procession in the same talk: never asked
 {w:'숨다',by:'escort',ask:'칼턴, 크로 가기 싫어서 ___ 거 아니지? 하하.',opts:[['숨을',1],['쉴',0,'쉬는 건 괜찮아! 안 보이게 사라지는 건 "숨을".'],['숨 쉴',0,'숨 쉬는 건 해야지! 안 보이게 사라지는 건 "숨을".']]},
 /* ---- the campfire place, after the procession (Handry's thoughts) ---- */
 {w:'흔적',by:'ashes',who:'핸드리',ask:'아로 사람들은 다 갔어요. ___만 남았어요.',opts:[['흔적',1],['흉터',0,'흉터는 다친 데 남는 거예요. 사람들이 지나간 뒤에 남은 건 "흔적".'],['약속',0,'약속은 미리 정하는 거예요. 지나간 뒤에 남은 건 "흔적".']]},
 {w:'숨다',by:'ashes',who:'핸드리',ask:'그날 밤 저는 저 덤불 뒤에 ___ 있었어요.',opts:[['숨어',1],['쉬어',0,'쉬는 게 아니었어요. 안 보이게 → "숨어 있었어요".'],['숨 쉬어',0,'숨 쉬다는 공기를 마시는 거예요. 안 보이게 → "숨어 있었어요".']]},
 {w:'굶다',by:'ashes',who:'핸드리',ask:'빵 껍질 덕분에 그날은 안 ___.',opts:[['굶었어요',1],['끓었어요',0,'끓다는 물이 뜨거워지는 거예요. 밥을 못 먹는 건 "굶다".'],['긁었어요',0,'긁다는 손톱으로 하는 거예요. 밥을 못 먹는 건 "굶다".']]},
 {w:'사냥꾼',by:'ashes',who:'핸드리',ask:'저를 쫓는 크로 ___들은 여기까지 안 와요. 아마도요.',opts:[['사냥꾼',1],['사냥감',0,'사냥감은 잡히는 짐승이에요. 짐승을 잡는 사람은 "사냥꾼".'],['나무꾼',0,'나무꾼은 나무를 하는 사람이에요. 저를 쫓는 사람들은 "사냥꾼".']]},
 /* ---- Cro by day: Kalton's welcome, until the feast night ---- */
 {w:'꽃잎',by:'kaltonC',ask:'아로에는 이런 꽃이 없어요. ___도 움직여요!',opts:[['꽃잎',1],['꽃씨',0,'꽃씨는 땅에 심는 거예요. 꽃의 얇은 부분은 "꽃잎".'],['꽃병',0,'꽃병은 꽃을 넣는 병이에요. 꽃의 얇은 부분은 "꽃잎".']]},
 {w:'무시하다',by:'kaltonC',ask:'다들 저만 봐요. 아무도 저를 ___ 않아요.',opts:[['무시하지',1],['무사하지',0,'무사하다는 다친 데가 없는 거예요. 못 본 척하는 건 "무시하다".'],['무시당하지',0,'무시당하는 건 제가 당하는 거예요. 사람들이 하면 "무시하지".']]},
 {w:'진단하다',by:'kaltonC',when:()=>!!f().sawDoc,ask:'의사 선생님이 저를 건강하다고 ___.',opts:[['진단했어요',1],['진정했어요',0,'진정하다는 마음을 가라앉히는 거예요. 의사가 살펴보고 알아내면 "진단했어요".'],['무시했어요',0,'무시하면 안 봐요. 의사 선생님은 저를 살펴봤어요. "진단했어요".']]},
 {w:'꽃잎',by:'womanA',ask:'아가, 꽃에서 뗀 ___은 먹지 마요!',opts:[['꽃잎',1],['꽃병',0,'꽃병은 꽃에서 떼는 게 아니에요. 꽃의 얇은 부분은 "꽃잎".'],['나뭇잎',0,'나뭇잎은 나무에서 떼요. 꽃에서 떼면 "꽃잎".']]},
 {w:'공동체',by:'womanA',ask:'칼턴은 이제 우리 ___ 사람이에요.',opts:[['공동체',1],['공부',0,'공부는 책으로 배우는 거예요. 같이 사는 사람들은 "공동체".'],['공기',0,'공기는 숨 쉬는 거예요. 같이 사는 사람들은 "공동체".']]},
 {w:'숲',by:'womanB',ask:'칼턴, 옛날에는 여기도 다 ___이었어요. 지금은 밭이죠.',opts:[['숲',1],['숯',0,'숯은 나무를 태운 거예요. 나무가 많은 곳은 "숲".'],['술',0,'술은 어른들이 마시는 거예요. 나무가 많은 곳은 "숲".']]},
 {w:'가마솥',by:'womanB',ask:'잔치 국은 큰 ___에 끓여요. 다 같이 먹어요.',opts:[['가마솥',1],['가방',0,'가방에는 물건을 넣어요. 국을 끓이는 큰 솥은 "가마솥".'],['가면',0,'가면은 얼굴에 써요. 국을 끓이는 큰 솥은 "가마솥".']]},
 {w:'화상',by:'womanB',ask:'솥 옆에서 뛰면 안 돼요! ___ 입어요.',opts:[['화상',1],['화장',0,'화장은 얼굴을 예쁘게 하는 거예요. 뜨거운 것에 다치면 "화상".'],['화살',0,'화살은 활로 쏘는 거예요. 뜨거운 것에 다치면 "화상".']]},
 {w:'벌',by:'toddler',ask:'엄마, ___! 윙윙!',opts:[['벌',1],['별',0,'별은 밤에 반짝반짝! 윙윙은 "벌"!'],['발',0,'발은 걸어요! 윙윙은 "벌"!']]},
 /* ---- Cro by night: the watchman at the bakery, until the hunt ---- */
 {w:'도둑',by:'guard',ask:'___은 꼭 밤에 와요. 낮에는 안 와요.',opts:[['도둑',1],['도장',0,'도장은 이름을 찍는 거예요. 몰래 훔치는 사람은 "도둑".'],['도움',0,'도움은 남을 돕는 거예요. 몰래 훔치는 사람은 "도둑".']]},
 {w:'훔치다',by:'guard',ask:'빵, 신발, 옷… 다음엔 뭘 ___ 갈까요?',opts:[['훔쳐',1],['빌려',0,'빌리면 돌려줘요. 몰래 가져가면 "훔쳐 갈까요".'],['흔들어',0,'흔들다는 이리저리 움직이는 거예요. 몰래 가져가면 "훔쳐 갈까요".']]},
 {w:'타다',by:'guard',ask:'이상해요. 까맣게 ___ 빵도 없어져요.',opts:[['탄',1],['단',0,'달다는 맛이에요. 까만 빵은 "탄" 빵.'],['덴',0,'데다는 사람이 뜨거운 것에 다치는 거예요. 빵은 "탄".']]},
 {w:'캄캄하다',by:'guard',ask:'오늘 밤은 정말 ___. 등불이 더 있어야 돼요.',opts:[['캄캄해요',1],['깨끗해요',0,'깨끗하다는 더럽지 않은 거예요. 안 보이면 "캄캄해요".'],['따뜻해요',0,'따뜻하면 등불이 왜 필요해요? 안 보이면 "캄캄해요".']]},
 {w:'흔적',by:'guard',ask:'도둑은 ___도 안 남겨요. 발자국 하나 없어요.',opts:[['흔적',1],['흉터',0,'흉터는 다친 데 남는 거예요. 지나간 뒤에 남는 건 "흔적".'],['약속',0,'약속은 미리 정하는 거예요. 지나간 뒤에 남는 건 "흔적".']]},
 {w:'꽃잎',by:'guard',when:()=>hasItem('크로 꽃'),ask:'도둑이 문 앞 꽃까지 꺾어 갔어요. ___을 먹나 봐요.',opts:[['꽃잎',1],['꽃집',0,'꽃집은 꽃을 파는 가게예요. 꽃의 얇은 부분은 "꽃잎".'],['꽃병',0,'꽃병은 꽃을 넣는 병이에요. 꽃의 얇은 부분은 "꽃잎".']]},
 /* ---- the hunt: the second hunter in the woods, until the first one gives his orders ---- */
 {w:'숨다',by:'hunter2',ask:'도둑은 덤불 속에 ___ 있을 거예요.',opts:[['숨어',1],['쉬어',0,'쉬는 게 아니에요. 안 보이게 있으면 "숨어 있을 거예요".'],['숨 쉬어',0,'숨 쉬다는 공기를 마시는 거예요. 안 보이게 → "숨어".']]},
 {w:'흔적',by:'hunter2',ask:'발자국, 빵 부스러기… 도둑이 남긴 ___부터 찾아요.',opts:[['흔적',1],['흉터',0,'흉터는 다친 데 남는 거예요. 지나간 뒤에 남은 건 "흔적".'],['약속',0,'약속은 미리 정하는 거예요. 지나간 뒤에 남은 건 "흔적".']]},
 {w:'배고프다',by:'hunter2',ask:'도둑은 많이 ___ 사람이에요. 탄 빵도 가져가요.',opts:[['배고픈',1],['배부른',0,'배부른 사람은 빵을 안 훔쳐요. 먹고 싶은 사람은 "배고픈".'],['배우는',0,'배우다는 공부하는 거예요. 먹고 싶은 사람은 "배고픈".']]},
 {w:'도둑',by:'hunter2',ask:'___을 보면 크게 소리쳐요! 혼자 잡으면 안 돼요.',opts:[['도둑',1],['도장',0,'도장은 이름을 찍는 거예요. 훔치는 사람은 "도둑".'],['도움',0,'도움은 남을 돕는 거예요. 훔치는 사람은 "도둑".']]},
 {w:'도망치다',by:'hunter2',ask:'도둑이 ___ 못하게 비탈을 막아요.',opts:[['도망치지',1],['도와주지',0,'도와주다는 힘을 보태는 거예요. 달아나는 건 "도망치지".'],['돌보지',0,'돌보다는 아이나 아픈 사람 곁에서 도와주는 거예요. 달아나는 건 "도망치지".']]},
 // the first hunter teaches 사냥꾼/덫 and leaves in the same talk: never asked
 {w:'사냥꾼',by:'hunter',ask:'우리 ___들은 이 숲을 다 알아요.',opts:[['사냥꾼',1],['사냥감',0,'사냥감은 우리가 잡는 짐승이에요. 우리는 "사냥꾼".'],['나무꾼',0,'나무꾼은 나무를 하는 사람이에요. 우리는 "사냥꾼".']]},
 {w:'덫',by:'hunter',ask:'___은 내일 놓아요. 오늘은 도둑부터 찾아요.',opts:[['덫',1],['떡',0,'떡은 먹는 거예요! 짐승을 잡는 건 "덫".'],['둑',0,'둑은 물을 막으려고 쌓은 거예요. 짐승을 잡는 건 "덫".']]},
 /* ---- the huntress on the slope, after the chapter's end ---- */
 {w:'동쪽',by:'huntress',ask:'왜 아직 여기 있어요? 어서 ___으로 가요.',opts:[['동쪽',1],['서쪽',0,'서쪽은 해가 지는 쪽이에요. 디보는 "동쪽"에 있어요.'],['북쪽',0,'북쪽이 아니에요. 디보는 해가 뜨는 "동쪽"에 있어요.']]},
 {w:'해가 뜨다',by:'huntress',ask:'아침마다 해가 ___ 쪽을 보고 걸어요.',opts:[['뜨는',1],['지는',0,'해가 지는 쪽은 서쪽이에요. 디보는 해가 "뜨는" 쪽.'],['타는',0,'해는 타지 않아요. 아침에 하늘에 나오면 "뜨는".']]},
 // (her label says 사냥꾼, so she reviews 굶다 instead: she sees how thin he is)
 {w:'굶다',by:'huntress',ask:'며칠이나 ___? 얼굴이 너무 말랐어요.',opts:[['굶었어요',1],['끓었어요',0,'끓다는 물이 뜨거워지는 거예요. 밥을 못 먹었으면 "굶었어요".'],['긁었어요',0,'긁다는 손톱으로 하는 거예요. 밥을 못 먹었으면 "굶었어요".']]},
 {w:'덫',by:'huntress',ask:'___에 걸린 짐승처럼 못 움직여요.',opts:[['덫',1],['떡',0,'떡은 먹는 거예요. 짐승이 걸리는 건 "덫".'],['둑',0,'둑은 물을 막으려고 쌓은 거예요. 짐승이 걸리는 건 "덫".']]},
 {w:'훔치다',by:'huntress',ask:'배고파서 ___ 거예요? 그래도 크로는 안 돼요.',opts:[['훔친',1],['빌린',0,'빌리면 돌려줘요. 몰래 가져갔으면 "훔친".'],['흘린',0,'흘리다는 떨어뜨리는 거예요. 몰래 가져갔으면 "훔친".']]},
];
/* class time: the five-day feast, a step in nightFall (Cro feasts; Handry watches from the woods' edge) */
const CLASS={
 '잔치':{say:'잔치 동안 크로 사람들은 밤마다 북을 치고 노래했어요.',lines:[
  {w:'배고프다',who:'크로 사람',ask:'칼턴, 더 먹어요. 아직 ___ 보여요.',opts:[['배고파',1],['배불러',0,'배불러 보이면 더 먹으라고 안 하죠. 더 먹을 사람은 "배고파 보여요".'],['배워',0,'배우다는 공부하는 거예요. 더 먹을 사람은 "배고파 보여요".']]},
  {w:'어둠',who:'크로 사람',ask:'___이 내려도 잔치는 안 끝나요!',opts:[['어둠',1],['아침',0,'아침은 밝아요. 밤이 되면 내리는 건 "어둠".'],['어른',0,'어른은 다 큰 사람이에요. 밤이 되면 내리는 건 "어둠".']]},
  {w:'숲',who:'크로 사람',ask:'아로 사람들도 ___에서 사냥해요?',opts:[['숲',1],['숯',0,'숯은 나무를 태운 거예요. 나무가 많은 곳은 "숲".'],['술',0,'술은 어른들이 마시는 거예요. 나무가 많은 곳은 "숲".']]}]},
 '숲 가장자리':{say:'저는 숲 가장자리에 숨어서 잔치를 봤어요.',lines:[
  {w:'숨다',who:'핸드리',ask:'낮에는 덤불 속에 ___ 있었어요.',opts:[['숨어',1],['쉬어',0,'쉬는 게 아니었어요. 안 보이게 → "숨어 있었어요".'],['숨 쉬어',0,'숨 쉬다는 공기를 마시는 거예요. 안 보이게 → "숨어".']]},
  {w:'굶다',who:'핸드리',ask:'잔치 냄새가 났어요. 저는 또 ___.',opts:[['굶었어요',1],['끓었어요',0,'끓다는 물이 뜨거워지는 거예요. 아무것도 못 먹으면 "굶었어요".'],['긁었어요',0,'긁다는 손톱으로 하는 거예요. 아무것도 못 먹으면 "굶었어요".']]},
  {w:'얼다',who:'핸드리',ask:'밤마다 발가락이 ___ 것 같았어요.',opts:[['얼',1],['알',0,'알다는 무엇을 아는 거예요. 추우면 발가락이 "얼" 것 같아요.'],['올',0,'오다는 이쪽으로 움직이는 거예요. 추우면 발가락이 "얼" 것 같아요.']]},
  {w:'흔적',who:'핸드리',ask:'숲 가장자리에 제 ___ 하나 안 남겼어요.',opts:[['흔적',1],['흉터',0,'흉터는 다친 데 남는 거예요. 지나간 뒤에 남는 건 "흔적".'],['약속',0,'약속은 미리 정하는 거예요. 지나간 뒤에 남는 건 "흔적".']]},
  {w:'캄캄하다',who:'핸드리',ask:'___ 밤에는 아무도 저를 못 봐요.',opts:[['캄캄한',1],['깨끗한',0,'깨끗하다는 더럽지 않은 거예요. 아무도 못 보는 밤은 "캄캄한" 밤.'],['밝은',0,'밝은 밤에는 다 보여요. 아무도 못 보는 밤은 "캄캄한" 밤.']]},
  {w:'외롭다',who:'핸드리',ask:'잔치 노래를 들으면 더 ___.',opts:[['외로웠어요',1],['외웠어요',0,'외우다는 말을 기억하는 거예요. 혼자라서 쓸쓸하면 "외로웠어요".'],['가려웠어요',0,'가렵다는 긁고 싶은 거예요. 혼자라서 쓸쓸하면 "외로웠어요".']]}]},
};

const ITEMS={'나뭇잎 이불':'큰 나뭇잎을 엮어서 만든 이불. 조금 따뜻해요. 그런데 가려워요.','막대기':'숲에서 주운 단단한 막대기.',
 '마른 빵 껍질':'아로 사람들이 버린 빵 껍질. 딱딱하지만 먹을 수 있어요.','크로 빵':'까맣게 탄 크로 빵. 핸드리가 먹을 수 있는 빵이에요.',
 '옷':'빨랫줄에서 가져온 크로 옷.','신발':'크로 사람의 신발. 조금 커요.','크로 꽃':'주황색 크로 꽃. 꽃잎에 초록 줄이 있어요. 하룻밤은 이 꽃을 먹을 수 있어요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);

/* ---------------- sprites ---------------- */
const OL='#1B1E2B';
const grid=(w,h)=>Array.from({length:h},()=>Array(w).fill('.'));
const rowsOf=G=>G.map(r=>r.join(''));
const put=(G,x,y,c)=>{if(G[y]&&x>=0&&x<G[0].length)G[y][x]=c};
const seg=(G,x0,y0,x1,y1,c)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))||1;for(let i=0;i<=n;i++)put(G,Math.round(x0+(x1-x0)*i/n),Math.round(y0+(y1-y0)*i/n),c)};
const same=r=>r;
const frames=(list,ms)=>({get art(){return list[Math.floor(Date.now()/ms)%list.length]}});
const flat=(rows,pal)=>({pal,down:rows,up:rows,left:rows});
/* humanoid generator + small edits, built lazily (the engine's generator exists only at draw time) */
const tuned=(L,fn,extra)=>{let A=null;const o={...L};Object.defineProperty(o,'art',{get(){if(!A){const pal=Object.assign(humanPal(L),extra||{});
 const mk=(d,s)=>fn(humanArt(L,d,s).slice(),d,pal);A={pal,down:mk('down',0),up:mk('up',0),left:mk('left',0),walk:{down:[mk('down',1),mk('down',2)],up:[mk('up',1),mk('up',2)],left:[mk('left',1),mk('left',2)]}}}return A}});return o};
const setc=(rows,y,x,c)=>{if(rows[y]&&x<rows[y].length)rows[y]=rows[y].slice(0,x)+c+rows[y].slice(x+1)};

/* Handry: Ma's straight dark hair, narrow eyes, the dark-red Severance streak on brow, cheek and leg. Aro wrappings, later stolen Cro clothes. */
const streak=(rows,view)=>{if(view==='down'){setc(rows,4,10,'R');setc(rows,5,11,'R');setc(rows,6,11,'R');setc(rows,6,10,'R');setc(rows,14,11,'R')}
 else if(view==='left'){setc(rows,4,4,'R');setc(rows,6,4,'R');setc(rows,6,5,'R');setc(rows,14,5,'R')}return rows};
const RED={R:'#9A2424'};
const HAND_ARO=tuned({hair:'#2A2220',skin:'#D9A47E',shirt:'#6B6150',pants:'#57503F',shoes:'#A97E60'},streak,RED);
const HAND_CRO=tuned({hair:'#2A2220',skin:'#D9A47E',shirt:'#A8662E',pants:'#4E4234',shoes:'#4A3020',belt:'#6E4A2A'},streak,RED);
const PLAYER=()=>hasItem('옷')?HAND_CRO:HAND_ARO;

const KALTON={hair:'#6A4A2A',skin:'#E0B08A',shirt:'#B89A5A',pants:'#5A4A3A',belt:'#6A4A2A'};
/* Cro's doctor: old, sharp; knuckled ghost-whorls on the brow */
const CRODOC=tuned({hair:'#B9B4AA',skin:'#C99C76',shirt:'#4E6A5A',pants:'#3A4A40',style:'bun',coat:1,lashes:1,lips:'#9E6A5E'},(rows,view)=>{if(view!=='up'){setc(rows,4,view==='left'?5:6,'W');setc(rows,4,view==='left'?7:9,'W')}return rows});
/* the huntress: round face, broken spear, sitting with a twisted knee */
const HUNTRESS=tuned({hair:'#3A2A1E',skin:'#C99470',shirt:'#6E5A3A',pants:'#4A3E2E',style:'bob',lashes:1,lips:'#A8605A'},(rows,view)=>{
 rows=rows.slice(0,12).concat(rows.slice(14));const sx=view==='left'?12:14;
 for(let y=4;y<rows.length;y++)setc(rows,y,sx,y===4?'q':'Q');setc(rows,rows.length-1,sx-1,'Q');return rows},{Q:'#8A6A42',q:'#D9D2C0'});
const TODDLER={art:flat([
 "...OOOO...","..OHHHHO..","..OSESEO..","..OSSSSO..","...OSSO...","..OCCCCO..",".OSCCCCSO.","..OCCCCO..","..OSOOSO..","..OOOOOO.."],
 {O:OL,H:'#3A2A1E',S:'#E0AE86',E:OL,C:'#D98A3A'})};

/* Arraclid: grey-blue; six long many-jointed legs arching above a flat body slung at head height; four forward eyes (the lower
   on a short stalk); mouth like an eight-fingered hand with two curved fangs. Sways like branches. */
const ARR_PAL={D:'#2A3442',O:OL,G:'#7F93A8',g:'#566A80',L:'#B9CBDA',d:'#3A4758',E:'#E4EEC8',m:'#A3808E',n:'#6E4E5E',F:'#F2EAD4'};
function arrRows(sw){
 const G=grid(16,30),by=13;
 [[5,by,4,0,1,29],[4,by+1,1,4,0,29],[6,by+1,6,6,4,29]].forEach(([ax,ay,kx,ky,fx,fy])=>{for(const m of [0,1]){const X=v=>m?15-v:v;
  seg(G,X(ax)+sw,ay,X(kx)+sw,ky,'G');seg(G,X(kx)+sw,ky,X(fx),fy,'g');put(G,X(kx)+sw,ky,'L');
  put(G,Math.round((X(kx)+sw+X(fx))/2),Math.round((ky+fy)/2),'L');put(G,Math.round((X(kx)+sw*2+X(fx)*1)/3),Math.round((ky*2+fy)/3),'L');put(G,X(fx),fy,'d')}});
 G.forEach((row,y)=>row.forEach((c,x)=>{if((c==='G'||c==='g'||c==='L')&&row[x+1]==='.')row[x+1]='D'}));
 [[5,10],[3,12],[3,12],[4,11]].forEach(([a,bb],j)=>{put(G,a-1+sw,by-1+j,'O');put(G,bb+1+sw,by-1+j,'O');for(let x=a;x<=bb;x++)put(G,x+sw,by-1+j,j===0?'L':j===3?'g':'G')});
 for(let x=5;x<=10;x++)put(G,x+sw,by-2,'O');
 put(G,7+sw,by,'E');put(G,4+sw,by+1,'E');put(G,11+sw,by+1,'E');put(G,8+sw,by+3,'d');put(G,8+sw,by+4,'E');
 for(const x of [4,5,6,10,11]){put(G,x+sw,by+3,'m');put(G,x+sw,by+4,x===4||x===11?'n':'m')}put(G,5+sw,by+5,'n');put(G,10+sw,by+5,'n');
 put(G,7+sw,by+3,'F');put(G,7+sw,by+4,'F');put(G,6+sw,by+5,'F');put(G,9+sw,by+3,'F');put(G,9+sw,by+4,'F');
 return rowsOf(G)}
const ARR_F=[0,1,0,-1].map(sw=>flat(arrRows(sw),ARR_PAL));
const ARRACLID=frames(ARR_F,420);

/* Raiker: bigger than a man, plated and bristly, many legs, hoots through slits in its sides */
const RAI_PAL={O:OL,P:'#6E604C',p:'#54493A',Q:'#9A8A6C',q:'#2E271E',b:'#E2D2A2',v:'#120C08',l:'#3E3428',E:'#F2EAB8'};
const RAI0=[
 "......b..b......",
 "....b.OOOO.b....",
 "...OOOQQQQOOO...",
 "..OQQPPPPPPQQO..",
 ".OQPPPPPPPPPPQO.",
 ".OqqqqqqqqqqqqO.",
 "OQQPPbPPPPbPPQQO",
 "OPPPPPPPPPPPPPpO",
 "OqqqqqqqqqqqqqqO",
 "OQPPPPbPPbPPPPQO",
 "OPvPPPPPPPPPPvpO",
 "OPvPPPPPPPPPPvpO",
 "OqqqqqqqqqqqqqqO",
 ".OPPPPEPPEPPPPO.",
 ".OPpPPPEEPPPpPO.",
 "..OqqqqqqqqqqO..",
 "..OlOlOlOlOlOO..",
 "..OlOlOlOlOlO...",
 ".OO.OO.OO.OO.O.."];
const RAI1=RAI0.slice(0,16).concat(["..OlOlOlOlOlOO..","...OlOlOlOlOlO..","..OO.OO.OO.OO.O."]);
const RAIKER=frames([flat(RAI0,RAI_PAL),flat(RAI0,RAI_PAL),flat(RAI1,RAI_PAL)],700);

/* Jibbit: low-slung, undulating; eyes on stalks; hand-like mouths */
const JIB_PAL={O:OL,G:'#8C8F68',g:'#6A6E4C',l:'#B4B88A',E:'#F2EED0',m:'#C29A8A'};
const JIB=frames([flat([
 "...E...E........",
 "...l...l........",
 "..OlO.OlO.......",
 ".OGGGOGGGOOO....",
 "OmGgGGGGgGGGOO..",
 "OmmGGgGGGGgGGGO.",
 ".OOGGGGGGGGGGGO.",
 "..O.O.O.O.O.OO.."],JIB_PAL),flat([
 "....E...E.......",
 "....l...l.......",
 "...OlOOOlO......",
 "..OGGGGGGGOOO...",
 ".OmGGgGGGgGGGOO.",
 "OmmGGGGgGGGGgGO.",
 ".OOGGGGGGGGGGO..",
 "..OO.O.O.O.O.O.."],JIB_PAL)],380);

/* leaf bed in the root hollow */
const NEST={art:flat([
 "................",
 "....OOOOOOO.....",
 "..OOaAaaAaaOO...",
 ".OAaaBaAaaBaAO..",
 "OaAaBaaAaaaBaaO.",
 "OaaAaaBaaAaaAaO.",
 ".OOOOOOOOOOOOO.."],{O:OL,a:'#5B2A6E',A:'#7E3F8F',B:'#3E6B3A'})};
/* berry bush: berries of different colours */
const BERRY={art:flat([
 ".....OOOOO......",
 "...OOgGgGgOO....",
 "..OgGgRgGgBgO...",
 ".OgGgGgggYgGgO..",
 ".OgRgGgBgGgGgO..",
 "OgGgGgYgGgRgGgO.",
 "OggBgGgGgGgGgYO.",
 ".OgGgRgGgBgGgO..",
 "..OOgggggggOO...",
 "....OOOOOOO....."],{O:OL,g:'#3E5A34',G:'#6A3A7A',R:'#E0533F',B:'#5A86E0',Y:'#EAC24A'})};
/* scaled-bark stump: trackworms under the scales */
const BARK={art:flat([
 "...OOOOOOOOO....",
 "..OsSsSsSsSsO...",
 "..OSdSdSdSdSO...",
 "..OsSsSWsSsSO...",
 "..OSdSdSWdSdO...",
 "..OsSsSsSsSsO...",
 "..OSdWdSdSdSO...",
 "..OsSWSsSsSsO...",
 ".OOSdSdSdSdSOO..",
 "OrrOOOOOOOOOrrO."],{O:OL,S:'#55423A',s:'#6E5A4A',d:'#2E231E',W:'#ECE6D2',r:'#4A3A2E'})};
/* campfire remains and thrown crusts */
const ASHES={art:flat([
 "................",
 "...OO.OOO.OO....",
 "..OoOOaaaOOoO...",
 ".OoOaAaaaAaOoO..",
 ".OOaaaAaaaaaOO..",
 "...OOOOOOOOOcCO.",
 ".........cCO.OO.",
 "..........OO...."],{O:OL,o:'#7A7468',a:'#2A2624',A:'#C2400E',c:'#8A5A2A',C:'#3A2414'})};
/* Cro objects */
const RACK={art:flat([
 ".OOOOOOOOOOOOO..",
 ".OwwwwwwwwwwwO..",
 ".OwbBwbBwkKwwO..",
 ".OWWWWWWWWWWWO..",
 ".OwkKwbBwbBwwO..",
 ".OWWWWWWWWWWWO..",
 ".OwwkKwkKwwwwO..",
 ".OWWWWWWWWWWWO..",
 ".OO.........OO.."],{O:OL,w:'#5A3E26',W:'#8A6440',b:'#C08A4A',B:'#E0B070',k:'#2A1A10',K:'#4A2E1A'})};
const LINE={art:flat([
 ".O............O.",
 "OPO..........OPO",
 "OPOyyyyyyyyyyOPO",
 "OPO.OCCO.OTTO.PO",
 "OPO.OCCO.OTTO.PO",
 "OPO..OCCO..OTOPO",
 "OPO..OCO.......O",
 "OPO............O",
 "OPO..OKKO.OKKO.O",
 "OOO..OOOO.OOOO.O"],{O:OL,P:'#7A5A3A',y:'#D8D0B8',C:'#A8662E',T:'#6E8A5A',K:'#4A3020'})};
const flowerRows=k=>{const G=grid(16,16);const sw=[0,1,1,0,-1,-1][k];
 seg(G,8,15,8,10,'v');seg(G,8,10,7+sw,6,'v');seg(G,7+sw,6,9+sw,3,'v');put(G,9+sw,2,'v');seg(G,8,12,11,10,'v');seg(G,8,13,5,11,'v');
 const petal=(x,y,flip)=>{const d=flip?-1:1;put(G,x,y,'F');put(G,x+d,y,'F');put(G,x+2*d,y,'f');put(G,x,y+1,'f');put(G,x+d,y+1,'V');put(G,x+2*d,y+1,'F');put(G,x+3*d,y+1,'f')};
 petal(10+sw,2,false);petal(6+sw,5,true);petal(12,9,false);petal(4,10,true);petal(9+sw,6,false);
 put(G,7,15,'O');put(G,8,15,'O');put(G,9,15,'O');return rowsOf(G)};
const FL_PAL={O:OL,v:'#4F9A3A',F:'#F08A24',f:'#C2601A',V:'#4F9A3A'};
const FLOWER=frames([0,1,2,3,4,5].map(k=>flat(flowerRows(k),FL_PAL)),520);
/* Cro livestock at the pen gate: six-legged, woolly */
const BEAST_PAL={O:OL,W:'#D8CCB0',w:'#B0A488',d:'#7A6E58',E:OL,h:'#5A4A3A'};
const BEAST0=[
 "................",
 "................",
 "....OOOOOOO.....",
 "..OOWWwWWWWOO...",
 ".OWWWWWWwWWWWOO.",
 "OhWWwWWWWWWwWWhO",
 "OhEWWWWWWWWWWWhO",
 ".OhhWWwWWWWWWO..",
 "..OOOOOOOOOOO...",
 "..Od.Od.Od.Od...",
 "..Od.Od.Od.Od...",
 "..OO.OO.OO.OO..."];
const BEAST=frames([flat(BEAST0,BEAST_PAL),flat(BEAST0.slice(0,9).concat(["..Od..Od.Od.Od..","..Od..Od.Od.Od..","..OO..OO.OO.OO.."]),BEAST_PAL)],600);

/* ---------------- tiles ---------------- */
const blk=(x,y)=>{const c=at(x,y);let a=x,bb=y;while(at(a-1,y)===c)a--;while(at(x,bb-1)===c)bb--;return [a,bb]};
const clipT=(X,Y,fn)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn();g.restore()};
const oval=(cx,cy,rx,ry,c)=>{for(let dy=-ry;dy<=ry;dy++){const w=Math.round(rx*Math.sqrt(Math.max(0,1-(dy/ry)**2)));r(cx-w,cy+dy,w*2,1,typeof c==='function'?c(dy):c)}};
/* forest palettes: day (purple-green alien wood) and the first night (near-black) */
const FD={fl:'#333E2D',l1:'#553663',l2:'#435533',moss:'#4E6B3A',bark:'#3A2C27',sc:'#55423A',scH:'#6E5A4A',scD:'#211816',
 c1:'#2A1838',c2:'#5B2A6E',c3:'#2F5A3A',c4:'#7E3F8F',c5:'#1E3A26',hi:'#A060B4',root:'#4A3A2E',rootH:'#6A5642',w:'#1E3A44',wH:'#4F8A8A',dirt:'#4A3E30',dirtH:'#5E503E'};
const FN={fl:'#0D1420',l1:'#151D2A',l2:'#1D2B2A',moss:'#18262A',bark:'#10161E',sc:'#1A222C',scH:'#26323C',scD:'#06090E',
 c1:'#070B12',c2:'#111A26',c3:'#0E1A1C',c4:'#1A2436',c5:'#0A1414',hi:'#24324A',root:'#151C22',rootH:'#212C34',w:'#08101A',wH:'#1E3040',dirt:'#141A20',dirtH:'#1C242A'};
const FP=()=>ZID==='forest'&&!f().arraclid?FN:FD;
const floor=(X,Y,x,y,t)=>{const p=FP(),h=hash(x,y);r(X,Y,16,16,p.fl);
 r(X+(h%11)+1,Y+(h*7%11)+2,4,1,p.l1);r(X+(h*3%12)+1,Y+(h*5%12)+3,2,2,p.l1);r(X+(h*13%13)+1,Y+(h%9)+5,3,1,p.l2);
 if(h%3===0){r(X+(h*11%12)+2,Y+(h%7)+6,1,2,p.moss);r(X+(h*11%12)+3,Y+(h%7)+7,1,1,p.moss)}
 if(h%7===2){r(X+(h%10)+3,Y+(h*3%10)+3,3,2,p.l2);r(X+(h%10)+4,Y+(h*3%10)+3,1,1,p.l1)}
 if(p===FD){const k=(Math.floor(t/650)+h)%17;if(k===0)r(X+(h%13)+1,Y+(h*5%13)+1,2,1,'#C9E89A');if(k===8)r(X+(h*7%13)+1,Y+(h%11)+2,1,1,'#E8F4FF')}};
const canopy=(X,Y,x,y,t)=>{const p=FP(),h=hash(x,y),c=at(x,y);r(X,Y,16,16,p.c1);
 const sw=Math.round(Math.sin(t/1500+x*.8+y));
 [[-2,-1,10,8,p.c2],[7,1,10,8,p.c3],[1,7,9,8,p.c5],[9,8,8,8,p.c2],[3,3,7,5,p.c4]].forEach(([a,bb,w,hh,col],i)=>{const o=(h+i*7)%4-1;oval(X+a+o+w/2+sw,Y+bb+hh/2,w/2,hh/2,col)});
 r(X+(h%11)+3+sw,Y+(h%5)+2,3,1,p.hi);r(X+(h*3%10)+2,Y+(h*7%8)+9,2,1,p.hi);
 if(at(x,y+1)&&at(x,y+1)!==c){r(X,Y+14,16,2,'rgba(0,0,0,.35)');for(let i=0;i<16;i+=3){r(X+i+sw,Y+12+((i+h)%3),2,3,(i+h)%2?p.c2:p.c3);r(X+i+sw,Y+12+((i+h)%3),2,1,p.hi)}}};
const trunk=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const p=FP(),c=at(x,y);let a=x,e=x;while(at(a-1,y)===c)a--;while(at(e+1,y)===c)e++;
 const x0=a*16+(e>a?2:3),x1=(e+1)*16-(e>a?2:3),W=x1-x0,gx=x*16,bot=at(x,y+1)!==c,top=at(x,y-1)!==c,hh=bot?13:16;
 if(bot){oval(X+(a===x&&e===x?8:a===x?16:0),Y+14,e>a?18:9,2,'rgba(0,0,0,.35)');
  for(const [rx,dir] of [[x0-gx,-1],[x1-gx,1]]){for(let k=0;k<5;k++){const px=rx+dir*k-(dir>0?1:0);if(px>=0&&px<16)r(X+px,Y+11+Math.floor(k/2),1,3-Math.floor(k/3),p.root)}}}
 for(let i=0;i<16;i++){const px=gx+i;if(px<x0||px>=x1)continue;const u=(px-x0)/W;
  r(X+i,Y,1,hh,px===x0||px===x1-1?p.scD:u<.2?p.scH:u<.6?p.sc:u<.82?p.bark:p.scD)}
 for(let j=1;j<hh-1;j+=4){const off=((j>>2)+y*4)%2?1:4;for(let k=x0+off;k<x1-3;k+=6){const sx=k-gx;if(sx<-3||sx>15)continue;const u=(k-x0)/W;
  r(X+sx,Y+j,4,1,u<.5?p.scH:p.sc);r(X+sx,Y+j+1,1,1,p.scD);r(X+sx+3,Y+j+1,1,1,p.scD);r(X+sx+1,Y+j+2,2,1,p.scD)}}
 if(top)r(X+Math.max(0,x0-gx),Y,Math.min(16,x1-gx)-Math.max(0,x0-gx),2,'rgba(0,0,0,.4)')};
const roots=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const p=FP(),h=hash(x,y),ph=(h%3)*.4;
 for(let i=0;i<16;i++){const yy=Math.round(9-6*Math.sin(Math.PI*(i+1)/17+ph*.2));r(X+i,Y+yy,1,4,p.root);r(X+i,Y+yy,1,1,p.rootH);if((i+h)%4===0)r(X+i,Y+yy+1,1,3,p.scD)}
 r(X+(h%5),Y+13,4,2,'rgba(0,0,0,.25)')};
const bush=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const p=FP(),h=hash(x,y);oval(X+8,Y+12,7,2,'rgba(0,0,0,.3)');oval(X+8,Y+8,7,6,OL);oval(X+8,Y+8,6,5,dy=>dy<-2?p.c4:dy<2?p.c2:p.c5);
 r(X+4,Y+6,3,1,p.hi);if(p===FD){const C=['#E0533F','#5A86E0','#EAC24A','#E8F4FF'][h%4];[[5,8],[9,6],[11,10],[7,11],[10,8]].forEach(([a,bb],i)=>{if((h+i)%3)r(X+a,Y+bb,2,2,C)})}};
const stream=(X,Y,x,y,t)=>{const p=FP(),o=Math.floor(t/300+x*3)%16;r(X,Y,16,16,p.w);r(X+((o)%14),Y+5,3,1,p.wH);r(X+((o+7)%14),Y+11,4,1,p.wH);
 if(at(x,y-1)!=='~')r(X,Y,16,2,p.dirt);if(at(x-1,y)!=='~')r(X,Y,2,16,p.dirt);if(at(x+1,y)!=='~')r(X+14,Y,2,16,p.dirt);if(at(x,y+1)!=='~')r(X,Y+14,16,2,p.dirtH)};
const hollow=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const p=FP();oval(X+8,Y+9,7,5,p===FD?'#1A1612':'#05080C');r(X+2,Y+3,12,2,p.root);r(X+1,Y+4,2,8,p.root);r(X+13,Y+4,2,8,p.root);r(X+2,Y+3,12,1,p.rootH)};
const track=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const p=FP(),h=hash(x,y),c=at(x,y),T=k=>k==='='||k==='E';
 const u=T(at(x,y-1))?0:3,d=T(at(x,y+1))?16:13;r(X,Y+u,16,d-u,p.dirt);
 if(u)for(let i=0;i<16;i+=2)r(X+i,Y+u-((i+h)%3===0?1:0),2,1,p.dirt);if(d<16)for(let i=1;i<16;i+=3)r(X+i,Y+d,2,1,p.dirt);
 r(X+(h%11)+2,Y+u+3,2,1,p.dirtH);r(X+(h*3%12)+1,Y+u+7,1,1,p.dirtH);r(X+(h*7%10)+4,Y+d-3,3,1,'rgba(0,0,0,.18)');
 if(h%3===0)r(X+(h%12)+2,Y+(h%5)+6,2,1,p.l1);if(h%4===1){r(X+(h*5%11)+3,Y+8,2,2,'#6E6252');r(X+(h*5%11)+3,Y+8,2,1,'#8A7C68')}};
/* road: brush to hide in, the firelit camp */
const brush=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const p=FP(),h=hash(x,y),sw=Math.round(Math.sin(t/900+x+y*.5));
 [[1,14,-1],[4,15,1],[11,14,1],[14,15,-1],[7,7,1]].forEach(([a,bb,d],i)=>{if(i===4&&h%2)return;const c=i%2?p.c3:p.c2;for(let k=0;k<6;k++){r(X+a+Math.round(k*d*.6)+(k>3?sw:0),Y+bb-k,2,1,c)}r(X+a+Math.round(5*d*.6)+sw,Y+bb-6,1,1,p.hi)})};
const lit=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#5A4A36');r(X+(h%12)+1,Y+(h*7%12)+2,3,1,'#6E5C44');r(X+(h*3%12)+2,Y+(h*5%11)+3,2,1,'#4A3C2C');
 if(h%3===0){r(X+(h%11)+2,Y+(h%9)+4,1,2,'#5E7A3E');r(X+(h%11)+3,Y+(h%9)+5,1,1,'#5E7A3E')}};
/* after the procession leaves the bedrolls and the box go with it: pressed grass and a deep dent stay (and you can walk there) */
const bedroll=(X,Y,x,y,t)=>{lit(X,Y,x,y,t);if(f().left){r(X+2,Y+6,12,6,'#4E4030');r(X+3,Y+7,10,1,'#5E7A3E');r(X+4,Y+10,7,1,'#5E7A3E');return}r(X+1,Y+5,14,8,OL);r(X+2,Y+6,12,6,'#8A6A44');r(X+2,Y+6,12,2,'#A8865A');r(X+11,Y+6,1,6,'#6E5233');r(X+3,Y+9,6,1,'#6E5233')};
const fire=(X,Y,x,y,t)=>{lit(X,Y,x,y,t);oval(X+8,Y+10,7,4,'#2A2420');[[1,9],[13,9],[4,13],[11,13],[3,6],[12,6],[7,5],[8,14]].forEach(([a,bb])=>{r(X+a,Y+bb,3,2,'#7A7468');r(X+a,Y+bb,3,1,'#A39C8E')});
 r(X+4,Y+10,8,2,'#4A2E1A');r(X+5,Y+9,6,1,'#6A4022');
 if(ZID==='road'&&!f().left){const k=Math.floor(t/110);for(let i=0;i<5;i++){const fx=X+5+i,hh=3+((k+i*3)%4)+(i===2?3:0);r(fx,Y+10-hh,1,hh,i%2?'#FF8A2A':'#FFC24A');if((k+i)%3===0)r(fx,Y+10-hh-1,1,1,'#FFE9A0')}
  const s=(k>>1)%8;r(X+6+(s%3),Y+2-(s>>2),1,1,'#FFB060')}
 else{r(X+6,Y+9,4,1,'#3A3632');if(Math.floor(t/700)%3===0)r(X+8,Y+9,1,1,'#C2400E')}};
const box=(X,Y,x,y,t)=>{lit(X,Y,x,y,t);if(f().left){r(X+3,Y+4,10,9,'#4A3C2C');r(X+3,Y+4,10,1,'#3A2E22');return}r(X,Y+6,16,2,'#3A2A1A');r(X+2,Y+3,12,11,OL);r(X+3,Y+4,10,9,'#7A5430');r(X+3,Y+4,10,2,'#98703F');r(X+3,Y+8,10,1,'#5A3C20');r(X+7,Y+4,2,9,'#5A3C20');r(X+4,Y+10,2,2,'#2A2420');r(X+10,Y+10,2,2,'#2A2420')};
/* Cro */
const grass=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#5A7038');r(X+(h%12)+1,Y+(h*7%12)+2,2,1,'#6E8648');r(X+(h*3%12)+2,Y+(h*5%11)+3,1,2,'#6E8648');
 if(h%4===0){r(X+(h%11)+3,Y+(h%9)+4,1,2,'#4A5E2E');r(X+(h%11)+4,Y+(h%9)+5,1,1,'#4A5E2E')}if(h%9===1)r(X+(h*7%12)+2,Y+(h%10)+3,1,1,'#7E3F8F');if(h%11===4)r(X+(h*5%12)+2,Y+(h*3%10)+3,1,1,'#E8C04A')};
const slope=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);r(X,Y,16,3,'#4A5E2E');r(X,Y+3,16,1,'#3E4E26');const h=hash(x,y);r(X+(h%10)+2,Y+8,5,1,'#4A5E2E');r(X+(h*3%10)+1,Y+12,4,1,'#6E8648');
 if(h%5===0){r(X+(h%9)+3,Y+6,3,2,'#6E6A62');r(X+(h%9)+3,Y+6,3,1,'#8D8A80')}};
const menhir=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);oval(X+8,Y+14,7,2,'rgba(0,0,0,.3)');const h=hash(x,y);
 const W=[[6,3],[5,5],[4,7],[4,7],[3,8],[3,8],[3,9],[3,9],[2,10],[2,10],[2,11],[2,11],[1,12],[1,12],[2,11]];
 W.forEach(([a,w],j)=>{const sh=(j<3?(h%3)-1:0);r(X+a+sh,Y+j,w+2,1,OL);if(j>0&&j<14)r(X+a+1+sh,Y+j,w,1,j<3?'#B0AC9F':'#8D8A80')});
 for(let j=3;j<14;j++){r(X+W[j][0]+W[j][1]-1,Y+j,2,1,'#6E6B62');r(X+W[j][0]+1,Y+j,1,1,'#A8A59A')}
 r(X+5,Y+5+(h%3),3,1,'#6E6B62');r(X+8,Y+9,4,1,'#6E6B62');r(X+6,Y+10,1,2,'#6E6B62');if(h%2){r(X+4,Y+11,3,2,'#6E8A48');r(X+5,Y+10,1,1,'#6E8A48')}else r(X+9,Y+3,2,2,'#B8C29A')};
const tcan=(X,Y,x,y,t)=>{const [a,bb]=blk(x,y),X0=X-(x-a)*16,Y0=Y-(y-bb)*16;r(X,Y,16,16,'#3E5A2E');
 clipT(X,Y,()=>{r(X0,Y0,64,32,'#3E5A2E');const sw=Math.round(Math.sin(t/1600));
  [[10,10,14,10,'#2A1838'],[34,8,18,10,'#2A1838'],[54,12,12,10,'#2A1838'],[20,20,16,10,'#2A1838'],[44,22,16,9,'#2A1838']].forEach(([cx,cy,rx,ry,c])=>oval(X0+cx+sw,Y0+cy,rx,ry,c));
  [[10,9,12,8],[34,7,16,8],[54,11,10,8],[20,19,14,8],[44,21,14,7]].forEach(([cx,cy,rx,ry],i)=>{oval(X0+cx+sw,Y0+cy,rx,ry,dy=>dy<-ry/2?'#9A5AAE':dy<0?'#7E3F8F':i%2?'#5B2A6E':'#2F5A3A')});
  /* the hive: a swollen boll in the fork */
  oval(X0+32,Y0+26,6,5,OL);oval(X0+32,Y0+26,5,4,dy=>dy<-2?'#D9C08A':dy<1?'#C9A86A':'#9A7A44');r(X0+29,Y0+25,7,1,'#8A6A3A');r(X0+30,Y0+28,5,1,'#8A6A3A');r(X0+32,Y0+29,1,1,OL);
  for(let i=0;i<6;i++){const ang=t/600+i*1.05,rad=8+((i*5)%6);r(X0+32+Math.round(Math.cos(ang)*rad*1.6),Y0+24+Math.round(Math.sin(ang)*rad*.7),1,1,'#F2D45A')}})};
const ttrunk=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);const L=at(x-1,y)!=='Y';oval(X+(L?16:0),Y+14,14,2,'rgba(0,0,0,.3)');
 r(X+(L?4:0),Y,L?12:12,14,'#4A362A');r(X+(L?4:0),Y,1,14,OL);if(!L)r(X+11,Y,1,14,OL);r(X+(L?5:1),Y,3,14,'#6A5040');r(X+(L?9:5),Y+2,1,10,'#3A2A20');r(X+(L?12:3),Y+4,1,8,'#3A2A20');
 r(X+(L?2:10),Y+12,4,3,'#4A362A');r(X+(L?2:10),Y+12,4,1,'#6A5040')};
const roof=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);const L=at(x-1,y)!=='R',R=at(x+1,y)!=='R';const x0=L?2:0,x1=R?14:16;
 r(X+x0,Y+3,x1-x0,13,OL);r(X+x0+(L?1:0),Y+4,x1-x0-(L?1:0)-(R?1:0),12,'#B8975A');for(let j=5;j<16;j+=3)r(X+x0+1,Y+j,x1-x0-2,1,'#9A7A44');
 for(let i=x0+2;i<x1-1;i+=3)r(X+i,Y+4+((i+x)%2),1,2,'#D4B474');if(!L&&!R){r(X+5,Y,6,4,OL);r(X+6,Y+1,4,3,'#C8A868');r(X+7,Y,2,1,'#D4B474')}r(X+x0+1,Y+4,x1-x0-2,1,'#D4B474')};
const wall=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);const L=at(x-1,y)!=='W'&&at(x-1,y)!=='D',R=at(x+1,y)!=='W'&&at(x+1,y)!=='D';const x0=L?2:0,x1=R?14:16;
 r(X+x0,Y,x1-x0,14,'#CDB792');r(X+x0,Y,x1-x0,2,'#9A7A44');r(X+x0,Y+12,x1-x0,2,'#A8946E');if(L)r(X+x0,Y,1,14,OL);if(R)r(X+x1-1,Y,1,14,OL);
 if(!L&&!R){}else r(X+(L?6:8),Y+4,4,4,'#4A3A2A');r(X+(L?6:8),Y+4,4,1,'#6E5A40');r(X+x0,Y+14,x1-x0,2,'rgba(0,0,0,.25)')};
const door=(X,Y,x,y,t)=>{wall(X,Y,x,y,t);r(X+4,Y+3,8,11,OL);r(X+5,Y+4,6,10,'#6A4428');r(X+5,Y+4,6,1,'#8A5E38');r(X+9,Y+9,1,1,'#E8C04A');
 if(f().night&&!f().hunt){r(X+12,Y+3,2,3,'#FFD27A');r(X+12,Y+2,2,1,OL)}};
const fenceT=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);const H=at(x-1,y)==='P'||at(x+1,y)==='P';const V=at(x,y-1)==='P'||at(x,y+1)==='P';
 if(H){r(X,Y+6,16,2,'#7A5A3A');r(X,Y+10,16,2,'#7A5A3A');r(X,Y+6,16,1,'#9A7A52')}if(V&&!H){r(X+6,Y,2,16,'#7A5A3A');r(X+10,Y,2,16,'#7A5A3A')}
 r(X+6,Y+3,3,12,OL);r(X+7,Y+4,1,10,'#9A7A52')};
const penfl=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#5A4A32');r(X+(h%12)+1,Y+(h%10)+3,3,1,'#4A3C28');r(X+(h*3%11)+2,Y+(h*7%11)+2,2,2,'#6A5A3E');
 const k=Math.floor(t/600+h)%4;if(h%2===0||true){const bx=X+2+(k===1?1:0),by=Y+5;r(bx,by,11,6,OL);r(bx+1,by+1,9,4,'#D8CCB0');r(bx+1,by+1,9,1,'#EDE4CC');r(bx+(x%2?0:8),by+2,2,2,'#5A4A3A');
  for(let i=0;i<3;i++){r(bx+2+i*3,by+6,1,2,OL)}}};
const oven=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);oval(X+8,Y+13,7,2,'rgba(0,0,0,.3)');oval(X+8,Y+8,7,6,OL);oval(X+8,Y+8,6,5,dy=>dy<-2?'#C49A6A':'#A87A4A');
 r(X+5,Y+9,6,4,'#2A1A10');const glowOn=!f().hunt;if(glowOn){const p=(Math.sin(t/300)+1)/2;r(X+6,Y+11,4,2,`rgba(255,${120+p*60|0},40,1)`)}r(X+7,Y+1,2,3,'#7A5A3A')};
const lowwall=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);r(X+1,Y+4,14,10,OL);[[2,5,6],[8,5,6],[2,9,4],[6,9,5],[11,9,3]].forEach(([a,bb,w])=>{r(X+a,Y+bb,w,3,'#8D8A80');r(X+a,Y+bb,w,1,'#A8A59A')})};
const crop=(X,Y,x,y,t)=>{const h=hash(x,y);r(X,Y,16,16,'#5A4630');for(let j=1;j<16;j+=5){r(X,Y+j+3,16,1,'#4A3A26');for(let i=1;i<16;i+=3){const sw=Math.round(Math.sin(t/800+i*.4+x+j))*1;const c=(x+y+i)%5===0?'#7E5A8A':'#6E8A3A';r(X+i+sw,Y+j,1,3,c);r(X+i,Y+j+2,1,1,'#4E6A2A')}}};
const flowerT=(X,Y,x,y,t)=>{grass(X,Y,x,y,t);const ph=Math.sin(t/650+x*1.7);const tw=Math.round(ph);
 r(X+7,Y+9,2,6,'#4F9A3A');r(X+6+tw,Y+5,2,4,'#4F9A3A');r(X+8+tw,Y+3,2,2,'#4F9A3A');r(X+9,Y+11,3,1,'#4F9A3A');
 [[4+tw,2],[10+tw,1],[3,8],[11,7]].forEach(([a,bb],i)=>{r(X+a,Y+bb,4,3,'#F08A24');r(X+a,Y+bb,4,1,'#F8B060');r(X+a+1,Y+bb+1,2,1,'#4F9A3A');if(i%2)r(X+a+3,Y+bb+2,1,1,'#C2601A')})};
/* the memory stone (기억 돌): a mossy carved stone; the carvings glow ghostlight while words wait for review */
const memStone=(X,Y,x,y,t)=>{floor(X,Y,x,y,t);const due=state&&dueWords().length>0,p=(Math.sin(t/380)+1)/2;
 oval(X+8,Y+14,7,2,'rgba(0,0,0,.35)');
 const prof=[3,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(let j=0;j<19;j++){const k=prof[j]+(j>15?-1:0),py=Y-5+j;r(X+2+k,py,12-2*k,1,OL);if(j>0&&j<18)r(X+3+k,py,10-2*k,1,j<3?'#8E9888':j>14?'#4E564C':'#6A7266')}
 r(X+11,Y-1,2,13,'#525A50');r(X+3,Y-1,1,12,'#8E9888');r(X+4,Y-4,5,2,'#4F6B3A');r(X+3,Y-2,2,1,'#4F6B3A');r(X+10,Y+9,3,3,'#4F6B3A');r(X+4,Y+11,2,1,'#5E7A44');
 const c=due?`rgba(232,244,255,${.55+p*.45})`:'#454E44';
 r(X+6,Y,4,1,c);r(X+9,Y,1,4,c);r(X+6,Y+3,4,1,c);r(X+6,Y+1,1,2,c);r(X+7,Y+2,1,1,c);r(X+5,Y+6,6,1,c);r(X+7,Y+8,2,2,c);r(X+6,Y+11,1,1,c);r(X+9,Y+11,1,1,c);
 if(due){g.fillStyle=`rgba(232,244,255,${.10+p*.08})`;g.fillRect(X+1,Y-6,14,20);for(let i=0;i<3;i++){const k=(Math.floor(t/120)+i*9)%24;r(X+5+((i*3+k)%6),Y-6-k/3,1,1,`rgba(232,244,255,${1-k/24})`)}}};
/* night over the road camp (firelight) and over Cro (door lamps) — drawn on top of each tile */
const LAMPS=[[16,7],[9,11],[20,11],[3,13],[11,10]];
const glow=(X,Y,lx,ly,rad,col,a)=>{const sx=lx*16+8-CAM.x,sy=ly*16+8-CAM.y;if(Math.abs(sx-X-8)>rad+10||Math.abs(sy-Y-8)>rad+10)return;
 const gr=g.createRadialGradient(sx,sy,1,sx,sy,rad);gr.addColorStop(0,`rgba(${col},${a})`);gr.addColorStop(1,`rgba(${col},0)`);g.fillStyle=gr;g.fillRect(X,Y,16,16)};
function post(X,Y,t){
 if(ZID==='road'&&!f().left){const fl=Math.sin(t/90)*2+Math.sin(t/37);const sx=11*16+8-CAM.x,sy=7*16+8-CAM.y;
  const gr=g.createRadialGradient(sx,sy,12,sx,sy,104+fl);gr.addColorStop(0,'rgba(6,10,26,0)');gr.addColorStop(.45,'rgba(6,10,26,.34)');gr.addColorStop(1,'rgba(6,10,26,.76)');
  g.fillStyle=gr;g.fillRect(X,Y,16,16);glow(X,Y,11,7,54+fl,'255,150,60',.32)}
 else if(ZID==='cro'&&f().night&&!f().hunt){r(X,Y,16,16,'rgba(6,10,28,.62)');for(const [lx,ly] of LAMPS)glow(X,Y,lx,ly,28,'255,170,80',.34)}
}
const RAW={floor,canopy,trunk,roots,bush,stream,hollow,track,brush,lit,bedroll,fire,box,grass,slope,menhir,tcan,ttrunk,roof,wall,door,fenceT,penfl,oven,lowwall,crop,flowerT,terminal:memStone};
const TILES={};Object.entries(RAW).forEach(([k,fn])=>{TILES[k]=(X,Y,x,y,t)=>{fn(X,Y,x,y,t);if(ZID!=='forest')post(X,Y,t)}});

/* spots: every tile of a kind gets one of a few lines */
function autoSpots(map,kinds,extra){const o={};map.forEach((row,y)=>[...row].forEach((c,x)=>{const k=kinds[c];if(!k)return;const key=x+','+y;
 if(typeof k==='function')Object.defineProperty(o,key,{get:k,enumerable:true,configurable:true});else o[key]=k[(x*7+y*13)%k.length]}));
 Object.entries(extra||{}).forEach(([k,v])=>{if(typeof v==='function')Object.defineProperty(o,k,{get:v,enumerable:true,configurable:true});else o[k]=v});return o}

/* ---------------- zones ---------------- */
const FOREST_MAP=[
"CCCCCCCCCCCCCCCCCCCCCCCC",
"CCTTCCCCCCCTTCCCCCCTTCCC",
"CC..........TT.......CCC",
"C....r..b..........TT.CC",
"C...rrr.......T.......bC",
"C..rh......b..T........C",
"CT...............r.....C",
"CT..b....S......rrr..==E",
"C........TT..........==E",
"C..~~~...TT.....b......C",
"C.~~~~~................C",
"C..~~~..b.........TT...C",
"CTT...............TT...C",
"C....b.......b.........C",
"CCC.....TT.........CCCCC",
"CCCCCCCCCCCCCCCCCCCCCCCC"];
const ROAD_MAP=[
"CCCCCCCCCCCCCCCCCCCCCCCC",
"CCTTvvvvvvvvvvvvvvvvTTCC",
"CvvvvvvvTTvvvvvvvTTvvvvC",
"CvvvvvvvTTvvvvvvvTTvvvvC",
"CvvTTvvvvvvvvvvvvvvTTvvC",
"CvvTTvvgngggggggngvvvvvC",
"CvvvvvngmggggggmggnvvvvC",
"===vvvgggggFggggBgvvv==E",
"CvvvvvvgmgggggggmgvvvvvC",
"CvvvvvvvggnggggggggvvvvC",
"CvvvvvvvvvvvvvvvvvvvvvvC",
"CvvTTvvvvvvvvvvvvvTTvvvC",
"CvvTTvvvvvvTTvvvvvTTvvvC",
"CvvvvvvvvvvTTvvvvvvvvvvC",
"CCvvvvTTvvvvvvvvvvvvvCCC",
"CCCCCCCCCCCCCCCCCCCCCCCC"];
const CRO_MAP=[
"CCCCCCCCCCCCCCCCCCCCCCCC",
"CCTvvvTvvvvvTvvvvvTvvvCC",
"=vvvvvvvvTvvvvvvvvvvvTvC",
"CvvTvvvvvvvvvTvvvvvvvvvC",
"FssssssssssssssssssssssF",
"F.........yyyy.....PPPPF",
"F...o.o...yyyy.RRR.PppPF",
"F..o...o...YY..WDW.PppPF",
"F..............f.f.PPPPF",
"F..o...o...............F",
"F...o.o.RRRO.......RRR.F",
"F.......WDW.w......WDW.F",
"F.RRR..............f.f.F",
"F.WDW..................F",
"F......................F",
"FFFFFFFFFFFFFFFFFFFFFFFF",
"FFFFFFFFFFFFFFFFFFFFFFFF",
"FFFFFFFFFFFFFFFFFFFFFFFF"];
const forestNight=()=>!f().arraclid||(f().day===4&&!f().resolve);
const ZONES={
 forest:{name:'아로 근처 · 숲',reg:'THE WILDS · NEAR ARO',outdoor:1,
  legend:{'C':{tile:'canopy'},'T':{tile:'trunk'},'.':{tile:'floor',walk:1},'r':{tile:'roots'},'b':{tile:'bush'},'~':{tile:'stream'},'h':{tile:'hollow',walk:1},
   'S':{tile:'terminal'},'=':{tile:'track',walk:1},'E':{tile:'track',walk:1}},
  map:FOREST_MAP,
  rooms:[[1,2,8,8,'숲 · 뿌리 밑 잠자리'],[16,2,22,6,'숲 · 레이커 풀밭'],[1,9,7,13,'숲 · 개울']],
  dark:()=>forestNight()?[-1,-1,24,16]:null,
  warps:{'23,7':{to:'road',x:1,y:7,dir:'right',lock:()=>!f().resolve&&(f().arraclid?'아로 사람들의 길이에요. 아직 무서워요.':'밤이에요. 길이 하나도 안 보여요.')},
   '23,8':{to:'road',x:1,y:7,dir:'right',lock:()=>!f().resolve&&(f().arraclid?'아로 사람들의 길이에요. 아직 무서워요.':'밤이에요. 길이 하나도 안 보여요.')}},
  spots:autoSpots(FOREST_MAP,{
   'b':()=>forestNight()?'잘 안 보여요. 덤불인 것 같아요.':'덤불에 작은 열매가 달려 있어요. 이 덤불 열매는 독이 있는 것 같아요.',
   'r':()=>forestNight()?'딱딱한 뿌리예요.':'마디가 있는 뿌리가 땅 밖으로 휘어져 나왔어요.',
   '~':()=>forestNight()?'물소리가 들려요.':'차가운 개울이에요. 물을 마셨어요. 손이 너무 차가워요.',
   'T':()=>forestNight()?'나무가 삐걱거려요. 자라는 소리예요.':'큰 나무예요. 껍질에 비늘이 있어요. 삐걱, 삐걱… 나무가 자라요.',
   'C':()=>forestNight()?'위를 봐도 별이 하나도 안 보여요.':'보라색, 초록색 잎이 하늘을 덮었어요.'}),
  npcs:['nest','arraclid','berry','bark','jibbit','raikerA','raikerB','raikerC']},
 road:{get name(){return f().left?'숲길':'숲길 · 행렬의 밤'},  // the night label goes with the processionreg:'FOREST TRACK · ARO → CRO',outdoor:1,
  /* the firelit clearing is off limits while the procession camps there; once it has gone you can walk it (fire pit aside) */
  legend:{'C':{tile:'canopy'},'T':{tile:'trunk'},'v':{tile:'brush',walk:1},'g':{tile:'lit',get walk(){return !!f().left}},'n':{tile:'lit',walk:1},
   'm':{tile:'bedroll',get walk(){return !!f().left}},'F':{tile:'fire'},'B':{tile:'box',get walk(){return !!f().left}},
   '=':{tile:'track',walk:1},'E':{tile:'track',walk:1}},
  map:ROAD_MAP,
  rooms:[[6,4,18,9,'숲길 · 모닥불']],
  warps:{'0,7':{to:'forest',x:22,y:7,dir:'left'},
   '23,7':{to:'cro',x:1,y:2,dir:'right',lock:()=>!f().left?'행렬이 길에 있어요. 나가면 들켜요.':!f().crust&&'배고파요. 모닥불 자리를 봐요.'}},
  spots:autoSpots(ROAD_MAP,{
   'g':()=>f().left?'아로 사람들이 앉아 있던 땅이에요. 아직 조금 따뜻해요.':'불빛이 밝아요. 저기 나가면 들켜요.',
   'm':()=>f().left?'풀이 눌린 자국만 남았어요.':'가죽 이불이에요. 누가 자고 있어요.',
   'F':()=>f().left?'불이 꺼졌어요. 재만 남았어요.':'모닥불이 탁탁 소리를 내요. 따뜻해 보여요.',
   'B':()=>f().left?'상자가 있던 자리예요. 땅이 깊이 눌렸어요.':'무거운 상자예요. 두 사람이 같이 들어요. 크로에 주는 선물일까요?',
   'T':['큰 나무예요. 뒤에 있으면 안 보여요.','나무껍질에 비늘이 있어요.'],'C':['잎이 하늘을 덮었어요.']}),
  npcs:['escort','kaltonR','drummer','piper','carrier','ashes']},
 cro:{name:'크로',reg:'CRO · FARMLAND',outdoor:1,
  legend:{'C':{tile:'canopy'},'T':{tile:'trunk'},'v':{tile:'brush',walk:1},'s':{tile:'slope',walk:1},'.':{tile:'grass',walk:1},'o':{tile:'menhir'},'y':{tile:'tcan'},'Y':{tile:'ttrunk'},
   'R':{tile:'roof'},'W':{tile:'wall'},'D':{tile:'door'},'f':{tile:'flowerT'},'O':{tile:'oven'},'w':{tile:'lowwall'},'P':{tile:'fenceT'},'p':{tile:'penfl'},'F':{tile:'crop'},'=':{tile:'track',walk:1}},
  map:CRO_MAP,
  rooms:[[1,0,22,4,'크로 · 숲 비탈'],[2,5,8,10,'크로 · 돌 고리'],[14,5,22,9,'크로 · 칼턴의 새 집']],
  warps:{'0,2':{to:'road',x:22,y:7,dir:'left'}},
  spots:autoSpots(CRO_MAP,{
   'o':['사람 키만 한 돌이에요. 돌이 둥글게 서 있어요. 아로에는 이런 게 없어요.','오래된 돌이에요. 이끼가 조금 있어요.','돌 뒤에 숨으면 아무도 저를 못 봐요.'],
   'y':['크로의 큰 나무예요. 가운데에 벌집이 부풀어 있어요.','작은 벌들이 날아다녀요. 그런데 저한테는 안 와요.'],
   'Y':['크로의 큰 나무예요. 아로 나무처럼 기울지 않았어요.'],
   'R':['지붕 꼭대기에 장식이 달려 있어요. 아로 집하고 똑같아요.'],'W':['집이 아로보다 멀리 떨어져 있어요. 크로는 아로보다 두 배쯤 커요.'],
   'D':()=>f().night&&!f().hunt?'문 옆에 등불이 켜져 있어요. 안에서 숨소리가 들려요.':'나무 문이에요.',
   'f':['주황색 꽃이에요. 초록 줄무늬가 있어요. 덩굴이 천천히 움직여요.','손바닥만 한 주황색 꽃이 빙글빙글 덩굴을 따라 피었어요.'],
   'O':()=>f().hunt?'화덕이 식었어요.':'흙으로 만든 화덕이에요. 빵 굽는 냄새가 나요.',
   'w':['돌을 쌓은 낮은 담이에요.'],'P':['짐승 {우리|짐승 우리}예요. 나무 울타리가 있어요.'],'p':['다리가 여섯 개인 짐승들이 있어요.'],
   'F':['넓고 평평한 밭이에요. 아로 밭보다 훨씬 넓어요.','밭이 끝없이 이어져요. 크로는 땅이 평평해요.'],
   'C':['숲이에요. 여기서는 마을이 다 보여요.'],'T':['큰 나무예요. 줄기가 아주 굵어요.']}),
  npcs:['crodoc','kaltonC','womanA','womanB','toddler','grandma','guard','pen','rack','line','flowerN','hunter','hunter2','huntress']},
};

/* ---------------- the forest days: eat something different each day, then sleep ---------------- */
const withAward=(steps,words)=>{const s=steps.slice();s[s.length-1]={...s[s.length-1],award:words};return s};
const EAT={
 berry:()=>[{who:'핸드리',say:'여러 열매를 조금씩 땄어요. 시고 써요.'},{who:'핸드리',say:'배가 아파요. 억지로 다 먹었어요.',set:()=>{f().ate='berry'}}],
 bark:()=>[{who:'핸드리',say:'비늘을 떼고 {트랙웜|트랙웜}을 꺼냈어요.'},{who:'핸드리',say:'꿈틀거려요. 눈을 감고 먹었어요.',set:()=>{f().ate='bark'}}],
 jibbit:()=>[
  {who:'지빗',say:'지빗! 지빗!'},
  {who:'핸드리',say:'{지빗|지빗}이에요. 낮게 기어 다녀요. 눈이 줄기 끝에 있어요.'},
  {who:'핸드리',say:'바닥에서 단단한 막대기를 주웠어요.',give:'막대기'},
  {who:'…',say:'퍽. 퍽. 퍽. 지빗이 조용해졌어요.'},
  {who:'핸드리',say:'불이 없어요. 날것으로 먹었어요. 회색이고 질겨요.'},
  {who:'…',say:'조금 {토했어요|토하다}. 너무 배고파서 나머지도 다 먹었어요.'},
  {who:'핸드리',say:'살려면 먹어야 돼요.',set:()=>{f().ate='jibbit';f().jibbit=1}}]};
/* the first meal ties back to 1장 (he lived on near-burnt bread; §II) — out here there is none, so anything (§IV) */
const FIRST_MEAL=[{who:'핸드리',say:'아로에서는 거의 탄 빵만 먹었어요.'},{who:'핸드리',say:'다른 음식은 먹으면 {토했어요|토하다}. 그런데 여기는 빵이 없어요.'}];
function eatSteps(k){
 const F=f();
 if(!F.arraclid)return [{who:'핸드리',say:'아무것도 안 보여요. 지금은 못 찾아요.'}];
 if(F.resolve)return [{who:'핸드리',say:'이제 이 숲을 떠나요.'}];
 if(F.ate)return [{who:'핸드리',say:'오늘은 벌써 먹었어요. 더 먹으면 몸이 아파요.'}];
 if(F.day===1)return [...FIRST_MEAL,...EAT[k]()];
 if(F.last===k)return [
  {who:'핸드리',say:'어제도 이걸 먹었어요. 하지만 너무 배고파요.'},
  {who:'…',say:'먹자마자 배가 뒤틀려요. 다 {토했어요|토하다}.'},
  {who:'핸드리',say:'같은 걸 이틀 먹으면 몸에 독이 쌓여요.'},
  {who:'핸드리',say:'오늘은 굶어야 돼요.',set:()=>{f().ate='sick'}}];
 return EAT[k]();
}
const foodStatus=k=>()=>{const F=f();if(F.arraclid&&!F.resolve&&!F.ate&&F.last!==k)return 'todo';return b('굶다')&&F.resolve?undefined:null};
const sleepSteps=()=>[{who:'핸드리',say:'나뭇잎 이불을 덮고 누웠어요.'},{who:'…',say:'밤이 길어요. 나무들이 삐걱삐걱 자라요.'},
 {who:'…',say:'아침이 왔어요.',set:()=>{const F=f();F.last=F.ate;F.ate=0;F.day++}}];
const lowPoint=()=>[
 {who:'…',say:'…',set:()=>{const F=f();F.last=F.ate;F.ate=0;F.day=4}},
 {who:'핸드리',say:'넷째 날 새벽이에요. 아직 캄캄해요.'},  // §IV: "waking up before the dawn"; the forest stays dark until he gets up
 {who:'핸드리',say:'일어나고 싶지 않아요.'},
 {who:'핸드리',say:'멜로리도 없어요. 아무도 없어요.'},
 Q.nest[0],
 {who:'핸드리',say:'그냥 여기 누워서 죽을까… 생각했어요.'},
 {who:'핸드리',say:'한참 동안 누워 있었어요.'},
 {who:'핸드리',w:'외롭다',build:['외로워도','저는','계속','걸어가요'],alts:[['저는','외로워도','계속','걸어가요']]},
 {who:'…',say:'날이 밝았어요.',set:()=>{f().resolve=1}},
 {who:'핸드리',say:'일어났어요. 여기 있으면 죽어요. 떠나야 돼요.'},
 {who:'…',say:'다음 날, 멀리서 북소리가 들렸어요. 둥. 둥. 둥.'},
 {who:'핸드리',say:'숲길 쪽이에요. 사람들 소리예요.',award:['외롭다']}];

/* ---------------- Cro: night falls after the welcome; morning after the last theft ---------------- */
const nightFall=()=>[{who:'…',say:'잔치는 닷새 동안 계속됐어요.'},{expand:()=>classTime(CLASS,['잔치','숲 가장자리'])},{who:'…',say:'아로 사람들은 돌아갔어요. 칼턴은 남았어요.'},
 {who:'…',say:'저는 숲에 숨어서 살았어요. 배가 고팠어요.'},{who:'…',say:'그리고 사흘에 한 번, 밤에 크로에 들어갔어요.',set:()=>{f().night=1}}];
const LOOT=['크로 빵','옷','크로 꽃'];
const morning=got=>LOOT.filter(i=>i!==got).every(hasItem)?[{who:'…',say:'날이 밝기 전에 숲으로 돌아왔어요.',set:()=>goZone('cro',2,2,'down')},{who:'…',say:'탄 빵하고 꽃을 먹었어요.',take:['크로 빵','크로 꽃']},
 {who:'…',say:'아침에 크로 사람들이 소리쳐요. "도둑이 또 왔어요!"'},{who:'…',say:'{판관|판관}이 명령한 것 같아요. 창을 든 사람들이 도둑을 찾으러 와요.',set:()=>{f().hunt=1}}]:[];
const theftGate=()=>{const F=f();if(F.hunt)return [{who:'핸드리',say:'이제 마을에 못 가요. 크로 사람들이 저를 찾아요.'}];if(!F.night)return [{who:'핸드리',say:'낮에는 사람이 많아요. 들키면 안 돼요.'}];return null};

const AROMAN={hair:'#4A3426',skin:'#C99470',shirt:'#7A5A3A',pants:'#4A3E30',beard:'#4A3426'};
const NPC={
 /* ---- forest ---- */
 nest:{name:'뿌리 밑 잠자리',zone:'forest',x:4,y:5,dir:'down',look:NEST,pos:()=>[4,5],badge:['외롭다'],
  status:()=>{const F=f();if(!F.arraclid)return null;if(!F.resolve)return (F.ate&&F.day>=2)||F.day===4||(F.day===1&&F.raikers)?'todo':null},
  after:{who:'핸드리',say:'여기서 며칠 밤을 잤어요. 이제 안 돌아와요.'},
  script:()=>{const F=f();
   if(!F.arraclid)return [{who:'핸드리',say:'제 잠자리예요. 그런데 지금은 못 누워요. 무엇이 있어요.'}];
   if(F.resolve)return null;
   if(!F.ate&&F.day!==4)return [{who:'핸드리',say:'속이 텅 비었어요. 잠이 안 와요.'},{who:'핸드리',say:'숲에서 먹을 것을 찾아야 돼요.'}];
   if(F.day===1&&!F.raikers)return [{who:'핸드리',say:'밤이 와요. 바람이 너무 차가워요.'},{who:'핸드리',say:'여기서 자면 너무 추울 거예요.'},{who:'핸드리',say:'{레이커|레이커} 무리 옆은 따뜻할 거예요.'}];
   /* the first night: the Raikers walked off, so he sleeps under leaves (§IV: the wind tears them away; a rash like the leaf veins) */
   if(F.day===1)return [{who:'핸드리',say:'큰 나뭇잎을 엮어서 이불을 만들었어요.',give:'나뭇잎 이불'},{who:'…',say:'밤새 바람이 불었어요. 나뭇잎이 자꾸 날아갔어요.'},
    {who:'…',say:'아침에 팔에 {두드러기|두드러기}가 났어요. 가려워요.'},
    {who:'핸드리',say:'얼어 죽지는 않았어요.',set:()=>{const F=f();F.last=F.ate;F.ate=0;F.day=2}}];
   if(F.day===2)return sleepSteps();
   return lowPoint()},
  talk:()=>[]},
 arraclid:{name:'아라클리드',zone:'forest',x:6,y:5,dir:'left',look:ARRACLID,pos:()=>[6,5],badge:['어둠','캄캄하다'],hide:()=>!!f().arraclid,
  talk:()=>[
   {who:'핸드리',say:'울다가 잠이 들었어요.'},
   {who:'핸드리',say:'눈을 떴어요. 뭔가가 제 위에 서 있었어요.'},
   {who:'…',say:'긴 다리가 나뭇가지처럼 흔들려요. 다리가 여섯 개예요.'},
   Q.arr[0],
   {who:'…',say:'깍. 깍. 깍.'},
   {who:'핸드리',say:'{아라클리드|아라클리드}예요. 엄마도 아라클리드를 사냥하다가 죽었어요.'},
   {who:'…',say:'눈이 네 개. 입은 손가락이 여덟 개인 손 같아요.'},
   Q.arr[1],
   Q.arr[2],
   {who:'…',say:'손 같은 입이 제 다리 상처를 만져요. 피가 나요.'},
   {who:'…',say:'짐승이 피를 맛봐요. 그리고… 뒤로 물러나요.'},
   {who:'핸드리',say:'제 피 맛이 싫은 것 같아요. 짐승들은 저를 피해요.'},
   {who:'…',say:'깍… 깍… 소리가 멀어져요.',set:()=>{f().arraclid=1;f().day=1},leave:{npc:'arraclid',to:[3,2]}},
   {who:'…',say:'짐승은 나무를 타고 위로 사라졌어요.',award:['어둠','캄캄하다']}]},
 berry:{name:'열매 덤불',zone:'forest',x:12,y:6,dir:'down',look:BERRY,pos:()=>[12,6],badge:['숲','배고프다'],status:foodStatus('berry'),
  after:{who:'핸드리',say:'빨간 열매, 파란 열매, 노란 열매. 이건 먹어도 돼요.'},
  script:()=>{if(!f().arraclid)return eatSteps('berry');if(!b('숲'))return withAward([
   {who:'핸드리',say:'아침이에요. 나뭇잎이 보라색, 초록색이에요.'},
   Q.berry[0],
   Q.berry[1],
   {who:'핸드리',say:'빨간 열매, 파란 열매, 노란 열매… 먹을 수 있을까요?'},
   Q.berry[2],
   ...eatSteps('berry')],['숲','배고프다']);
   return f().resolve?null:eatSteps('berry')},
  talk:()=>[]},
 bark:{name:'비늘 나무껍질',zone:'forest',x:10,y:10,dir:'down',look:BARK,pos:()=>[10,10],badge:['굶다'],status:foodStatus('bark'),
  after:{who:'핸드리',say:'비늘 밑에 트랙웜이 또 있어요.'},
  script:()=>{if(!f().arraclid)return eatSteps('bark');if(!b('굶다'))return withAward([
   {who:'핸드리',say:'나무껍질에 비늘이 있어요. 비늘 밑에 벌레가 살아요.'},
   {who:'핸드리',say:'아로를 떠나고 거의 아무것도 못 먹었어요.'},
   Q.bark[0],
   Q.bark[1],
   ...eatSteps('bark')],['굶다']);
   return f().resolve?null:eatSteps('bark')},
  talk:()=>[]},
 jibbit:{name:'지빗',zone:'forest',x:15,y:12,dir:'left',look:JIB,pos:()=>[15,12],hide:()=>!!f().jibbit,status:foodStatus('jibbit'),
  script:()=>eatSteps('jibbit'),talk:()=>[]},
 raikerA:{name:'레이커 무리',zone:'forest',x:19,y:5,dir:'down',look:RAIKER,badge:['얼다'],pos:()=>f().raikers?[20,12]:[19,5],
  status:()=>{const F=f();if(!b('얼다'))return F.day===1&&F.ate&&!F.raikers?'todo':null},
  after:{who:'핸드리',say:'레이커들이 저를 보면 천천히 멀어져요.'},
  script:()=>{const F=f();
   if(F.raikers)return null;
   if(!(F.day===1&&F.ate))return [{who:'핸드리',say:'{레이커|레이커} 무리예요. 사람보다 커요. 등이 딱딱하고 털이 뻣뻣해요.'},{who:'레이커',say:'후우— 후우—'}];
   return [
    {who:'핸드리',say:'해가 지고 있어요. 너무 추워요. 곧 추운 계절이에요.'},
    Q.raiker[0],
    {who:'핸드리',say:'레이커들은 서로 붙어서 자요. 그 옆은 따뜻할 거예요.'},
    {who:'레이커',say:'후우— 후우—'},
    {who:'…',say:'레이커들이 옆구리 구멍으로 울어요. 그리고 천천히 멀어져요.',set:()=>{f().raikers=1}},
    {who:'핸드리',say:'짐승들도 저를 싫어해요.'},
    Q.raiker[1],
    {who:'핸드리',say:'뿌리 밑 잠자리로 돌아가요. 나뭇잎이라도 덮어야 돼요.',award:['얼다']}]},  // the night itself is at the nest
  talk:()=>[]},
 raikerB:{name:'레이커',zone:'forest',x:20,y:5,dir:'left',look:RAIKER,pos:()=>f().raikers?[21,13]:[20,5],
  talk:()=>[{who:'레이커',say:'후우—'},{who:'핸드리',say:'제 냄새를 맡고 고개를 돌려요.'}]},
 raikerC:{name:'레이커',zone:'forest',x:20,y:4,dir:'down',look:RAIKER,pos:()=>f().raikers?[21,11]:[20,4],
  talk:()=>[{who:'레이커',say:'후우— 후우—'}]},
 /* ---- the road: Kalton's procession, overheard from the brush ---- */
 escort:{name:'아로 사람',zone:'road',x:6,y:6,dir:'right',look:AROMAN,badge:['숨다'],hide:()=>!!f().left,
  status:()=>b('숨다')?null:'todo',
  talk:()=>[
   {who:'핸드리',say:'덤불 속에서 몸을 낮췄어요. 아로 사람들이 불 옆에 있어요.'},
   {who:'…',say:'스무 명쯤이에요. 북, 피리, 그리고 무거운 상자.'},
   {who:'아로 사람',say:'칼턴, 왜 그렇게 얼굴이 어두워?'},
   {who:'아로 사람',say:'크로에 가면 대접받을 거야. {새 피|새 피}잖아.'},
   {who:'아로 사람',say:'운이 좋아! 나도 가고 싶다. 하하.'},
   Q.escort[0],
   {who:'핸드리',say:'칼턴은 어릴 때 친구예요. 제가 화상을 입은 뒤로 저하고 말도 안 했어요.'},
   {who:'핸드리',say:'저 불 옆에 가서 앉고 싶어요. 그런데 나가면 다들 저를 피할 거예요.'},  // §IV: "most certainly they would turn away from me"
   Q.escort[1],
   {who:'…',say:'밤이 깊었어요. 저는 덤불 속에서 잤어요.'},
   {who:'…',say:'아침에 {행렬|행렬}이 떠났어요. 둥, 둥… 북소리가 멀어져요.',set:()=>{f().left=1}},
   {who:'핸드리',say:'행렬은 크로로 가요. 저도 그 길로 가요.',award:['숨다']}]},
 kaltonR:{name:'칼턴',zone:'road',x:10,y:9,dir:'up',look:KALTON,hide:()=>!!f().left,
  talk:()=>[{who:'칼턴',say:'…크로는 어떤 곳일까요?'},{who:'칼턴',say:'거기 사람들이 저를 좋아할까요?'},{who:'핸드리',say:'칼턴은 불 옆에 앉아서 무릎만 봐요.'}]},
 drummer:{name:'북 치는 사람',zone:'road',x:8,y:5,dir:'down',look:{hair:'#2A1E1A',skin:'#B9825A',shirt:'#6A4A7A',pants:'#3A3040',style:'long',lashes:1,lips:'#A0605E'},hide:()=>!!f().left,
  talk:()=>[{who:'…',say:'둥, 둥. 북소리가 숲에 울려요.'},{who:'북 치는 사람',say:'크로에 가까워지면 더 크게 쳐요!'}]},
 piper:{name:'피리 부는 사람',zone:'road',x:16,y:5,dir:'down',look:{hair:'#8A6A3A',skin:'#E0AE86',shirt:'#5A7A4A',pants:'#3E4A33',style:'spiky'},hide:()=>!!f().left,
  talk:()=>[{who:'…',say:'피리 소리가 가늘게 떨려요.'},{who:'핸드리',say:'아로 축제 때 듣던 노래예요.'}]},
 carrier:{name:'상자 든 사람',zone:'road',x:18,y:6,dir:'left',look:{hair:'#3A2A22',skin:'#A87454',shirt:'#8A6A44',pants:'#4A3E30',style:'bald'},hide:()=>!!f().left,
  talk:()=>[{who:'상자 든 사람',say:'아이고, 어깨야. 이 상자 정말 무거워요.'},{who:'상자 든 사람',say:'크로 사람들이 좋아할 거예요.'}]},
 ashes:{name:'모닥불 자리',zone:'road',x:10,y:9,dir:'down',look:ASHES,pos:()=>[10,9],badge:['흔적'],hide:()=>!f().left,
  after:{who:'…',say:'행렬의 발자국이 동쪽 크로 쪽으로 이어져요.'},
  status:()=>b('흔적')?undefined:'todo',
  talk:()=>[
   {who:'핸드리',say:'불은 꺼졌어요. 재가 아직 따뜻해요.'},
   Q.ashes[0],
   {who:'핸드리',say:'빵 껍질이에요! 아로에서부터 들고 온 빵이에요.',give:'마른 빵 껍질'},  // §IV: "old crusts gone too stale" for them
   {who:'핸드리',say:'며칠 지나서 돌처럼 딱딱해요. 그래서 버렸나 봐요.'},
   Q.ashes[1],
   {who:'핸드리',say:'세상에서 제일 운이 좋은 것 같았어요.',take:['마른 빵 껍질']},
   {who:'핸드리',say:'행렬의 흔적을 따라가면 크로예요.',award:['흔적'],set:()=>{f().crust=1}}]},
 /* ---- Cro, day: Kalton's welcome ---- */
 crodoc:{name:'크로 의사',zone:'cro',x:5,y:7,dir:'down',look:CRODOC,hide:()=>!!f().night,
  status:()=>f().sawDoc?null:'todo',
  script:()=>{if(f().sawDoc)return [{who:'크로 의사',say:'건강한 아이야. 크로에 잘 왔어.'}];return [
   {who:'핸드리',say:'크로예요. 아로보다 두 배쯤 커요.'},
   {who:'핸드리',say:'저는 큰 돌 뒤에 숨어서 봐요. 다들 칼턴만 봐요.',go:['cro',2,7,'right']},  // behind the ring stone at 3,7: out of their sight
   {who:'…',say:'크로 사람들이 북을 치면서 칼턴을 맞이해요.'},
   {who:'크로 의사',say:'이리 와 봐. 팔 좀 보자.'},
   {who:'…',say:'늙은 의사가 칼턴의 팔과 배를 세게 눌러요.'},
   {who:'칼턴',say:'아야!'},
   {who:'핸드리',say:'…조금 고소했어요.'},
   {who:'크로 의사',say:'아프니? 그래도 건강하네.'},
   {who:'칼턴',say:'…네.'},
   {who:'핸드리',say:'칼턴은 쫓겨난 게 아니에요. 귀한 선물이에요.',set:()=>{f().sawDoc=1}},
   ...(f().sawHome?nightFall():[])]},
  talk:()=>[]},
 kaltonC:{name:'칼턴',zone:'cro',x:5,y:8,dir:'up',look:KALTON,hide:()=>!!f().night,
  talk:()=>[{who:'칼턴',say:'여기가… 이제 제 집이에요?'},{who:'핸드리',say:'칼턴은 아직 무서워 보여요. 그래도 사람들이 웃어요.'}]},
 womanA:{name:'크로 여자',zone:'cro',x:16,y:8,dir:'down',look:{hair:'#2E2018',skin:'#D7A77E',shirt:'#C9803A',pants:'#5A4630',style:'long',lashes:1,lips:'#C0645E'},badge:['꽃잎'],hide:()=>!!f().night,
  status:()=>b('꽃잎')?undefined:'todo',
  after:'꽃잎은 만져도 돼요. 그런데 꺾지는 마요.',
  script:()=>b('꽃잎')?null:!f().sawDoc?[{who:'크로 여자',say:'잔치 준비해요! 의사 선생님이 먼저 칼턴을 봐요.'}]:[
   {who:'핸드리',say:'저는 집 모퉁이 뒤에 숨어서 들어요.',go:['cro',14,6,'right']},  // round the corner of Kalton's new house, out of their sight
   {who:'크로 여자',say:'칼턴! 이리 와요. 여기가 우리 집이에요. 이제 같이 살아요.',move:{npc:'kaltonC',to:[15,9]}},
   {who:'크로 여자',say:'우리 아이도 같이 살아요. 인사해요.'},
   {who:'…',say:'문 옆에 주황색 꽃이 있어요. 덩굴이 천천히 움직여요.'},
   {who:'크로 여자',say:'크로 꽃이에요. 아로에도 있어요?'},
   Q.woman[0],
   {who:'크로 여자',say:'꽃잎 하나가 손바닥만 해요. 초록 줄도 있어요. 예쁘죠?'},
   Q.woman[1],
   {who:'핸드리',say:'칼턴은 여기서 살 거예요. 저는… 숲에서 살아요.',award:['꽃잎'],set:()=>{f().sawHome=1}},
   ...(f().sawDoc?nightFall():[])],
  talk:()=>[]},
 womanB:{name:'크로 여자 (2)',zone:'cro',x:18,y:9,dir:'left',look:{hair:'#5A3A22',skin:'#E0B08A',shirt:'#7A9A5A',pants:'#4A4030',style:'bob',lashes:1,lips:'#B8606A'},hide:()=>!!f().night,
  talk:()=>[{who:'크로 여자 (2)',say:'아로에서 온 새 식구예요. 환영해요!'},{who:'크로 여자 (2)',say:'오늘 밤에는 큰 잔치를 해요.'}]},
 toddler:{name:'아이',zone:'cro',x:14,y:8,dir:'right',look:TODDLER,hide:()=>!!f().night,
  talk:()=>[{who:'…',say:'아이가 꽃을 잡으려고 손을 뻗어요.'},{who:'아이',say:'꽃! 꽃!'}]},
 grandma:{name:'크로 할머니',zone:'cro',x:13,y:9,dir:'down',look:{hair:'#D8D4CC',skin:'#D2A27C',shirt:'#8A6A9A',pants:'#4A3E50',style:'bun',lashes:1,lips:'#A8706A'},hide:()=>!!f().night,
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];return [{who:'크로 할머니',say:'자, 아이들! 할머니 문제 시간이에요.'},{who:'…',say:'저도 숨어서 속으로 대답해요.'},{...q,old:1},{who:'크로 할머니',say:'잘했어요! 내일 또 해요.'}]},
  talk:()=>[]},
 /* ---- Cro, night: the thief ---- */
 guard:{name:'크로 파수꾼',zone:'cro',x:11,y:12,dir:'up',look:{hair:'#3A3028',skin:'#C48E66',shirt:'#4A5A6A',pants:'#3A3A40',belt:'#2A2A30',cap:'#4A5A6A'},badge:['도둑','훔치다'],
  // drawn off by the pen: he stands below its fence (not on 18,8, where you stand to reach the pen), so you can still talk to him
  pos:()=>f().noise?[20,9]:[11,12],hide:()=>!f().night||!!f().hunt,
  status:()=>b('도둑')?undefined:'todo',
  after:'이상하네요. 아무도 없어요.',
  talk:()=>[
   {who:'핸드리',say:'낮은 돌담 뒤에 숨었어요. 빵집 앞에 {파수꾼|파수꾼}이 있어요.',go:['cro',13,11,'left']},  // behind the low wall at 12,11
   {who:'크로 파수꾼',say:'요즘 자꾸 빵이 없어져요.'},
   {who:'크로 파수꾼',say:'신발도, 옷도 없어졌어요.'},
   Q.guard[0],
   {who:'크로 파수꾼',say:'오늘은 꼭 잡을 거예요. 여기서 지켜요.'},
   Q.guard[1],
   {who:'핸드리',say:'그 도둑은 저예요. 파수꾼이 저기 있으면 빵을 못 가져가요.',award:['도둑','훔치다']}]},
 pen:{name:'짐승 우리',zone:'cro',x:18,y:7,dir:'down',look:BEAST,pos:()=>[18,7],
  status:()=>f().night&&!f().hunt&&b('도둑')&&!f().noise?'todo':null,
  script:()=>{const g0=theftGate();if(g0)return g0;const F=f();
   if(!b('도둑'))return [{who:'핸드리',say:'짐승들이 자고 있어요. 그런데 어디서 사람 목소리가 들려요.'}];
   if(F.noise)return [{who:'…',say:'짐승들이 아직 쿵쿵 뛰어요.'}];
   return [{who:'핸드리',say:'짐승 {우리|짐승 우리}예요. 짐승들은 제 냄새를 싫어해요.'},{who:'핸드리',say:'울타리 사이로 손을 넣었어요.'},
    {who:'…',say:'짐승들이 놀라서 울어요. 쿵쿵 뛰어요.'},{who:'크로 파수꾼',say:'뭐예요? 거기 누구예요?',set:()=>{f().noise=1}},{who:'…',say:'파수꾼이 짐승 {우리|짐승 우리} 쪽으로 뛰어와요. 지금이에요!'}]},
  talk:()=>[]},
 rack:{name:'빵 선반',zone:'cro',x:11,y:11,dir:'down',look:RACK,pos:()=>[11,11],
  status:()=>f().night&&!f().hunt&&f().noise&&!hasItem('크로 빵')?'todo':null,
  script:()=>{const g0=theftGate();if(g0)return g0;if(hasItem('크로 빵'))return [{who:'핸드리',say:'빵은 벌써 가져왔어요.'}];
   return [{who:'핸드리',say:'빵 선반이에요. 까맣게 탄 빵도 있어요.'},{who:'핸드리',say:'아로에서도 이런 탄 빵을 먹고 살았어요. 많이 탈수록 좋아요.'},{who:'…',say:'탄 빵 두 개를 품에 넣었어요.',give:'크로 빵'},...morning('크로 빵')]},
  talk:()=>[]},
 line:{name:'빨랫줄',zone:'cro',x:15,y:11,dir:'down',look:LINE,pos:()=>[15,11],
  status:()=>f().night&&!f().hunt&&b('도둑')&&!hasItem('옷')?'todo':null,
  script:()=>{const g0=theftGate();if(g0)return g0;if(hasItem('옷'))return [{who:'핸드리',say:'빨랫줄이 비었어요.'}];
   return [{who:'핸드리',say:'빨랫줄에 옷이 걸려 있어요. 밑에 신발도 있어요.'},{who:'…',say:'옷을 걷었어요.',give:'옷'},{who:'…',say:'신발도 가져왔어요. 조금 커요.',give:'신발'},
    {who:'핸드리',say:'이제 조금 덜 추워요.'},...morning('옷')]},
  talk:()=>[]},
 flowerN:{name:'크로 꽃',zone:'cro',x:20,y:12,dir:'down',look:FLOWER,pos:()=>[20,12],
  status:()=>f().night&&!f().hunt&&b('도둑')&&!hasItem('크로 꽃')?'todo':null,
  script:()=>{const g0=theftGate();if(g0)return g0;if(hasItem('크로 꽃'))return [{who:'…',say:'꽃이 천천히 움직여요.'}];
   return [{who:'…',say:'문 앞에 주황색 꽃이 있어요. 덩굴이 천천히 움직여요.'},{who:'…',say:'한 송이를 꺾었어요. 꽃잎이 손바닥만 해요.',give:'크로 꽃'},{who:'핸드리',say:'처음 먹는 거라서 오늘 밤은 괜찮아요.'},{who:'핸드리',say:'또 먹으면 다른 음식처럼 배가 아플 거예요.'},...morning('크로 꽃')]},
  talk:()=>[]},
 /* ---- Cro, the hunt ---- */
 /* the hunters are labelled 크로 남자 (not 사냥꾼): the first one's talk teaches 사냥꾼, so the label mustn't say it */
 hunter:{name:'크로 남자',zone:'cro',x:9,y:3,dir:'down',look:{hair:'#4A3020',skin:'#B9825A',shirt:'#5A6A3A',pants:'#3E4A2E',belt:'#2A2420',style:'short'},badge:['사냥꾼','덫'],
  hide:()=>!f().hunt||!!f().hunters,status:()=>'todo',
  talk:()=>[
   {who:'핸드리',say:'숲 덤불 속에 숨었어요. 숨도 작게 쉬어요.'},
   {who:'크로 남자',say:'{판관|판관}님이 명령했어요. 도둑을 꼭 잡으래요.'},
   Q.hunter[0],
   {who:'크로 남자 (2)',say:'이것도 가져왔어요. 숲 짐승 {오스클로|오스클로} 잡을 때 쓰는 거요.'},
   {who:'크로 남자',say:'아니요. 그건 짐승용이에요. 도둑은 우리가 찾아요.'},
   Q.hunter[1],
   {who:'크로 남자',say:'흩어져요! 비탈 쪽으로!',set:()=>{f().hunters=1}},
   {who:'…',say:'사냥꾼들이 흩어져요. 발소리가 멀어져요.',award:['사냥꾼','덫']}]},
 hunter2:{name:'크로 남자 (2)',zone:'cro',x:10,y:3,dir:'down',look:{hair:'#2A2420',skin:'#D7A77E',shirt:'#5E5A36',pants:'#3E3A2A',beard:'#2A2420'},
  hide:()=>!f().hunt||!!f().hunters,talk:()=>[{who:'크로 사냥꾼 (2)',say:'이 숲 어딘가에 있어요. 냄새가 이상해요.'}]},
 huntress:{name:'사냥꾼 여자',zone:'cro',x:17,y:4,dir:'left',look:HUNTRESS,pos:()=>[17,4],badge:['동쪽','해가 뜨다'],hide:()=>!f().hunters,
  status:()=>f().done?undefined:'todo',  // after the end: the usual review ? like everyone else (null hid it)
  after:['동쪽이에요. 해가 뜨는 쪽.',{who:'…',say:'여자는 무릎을 잡고 앉아 있어요.'}],  // after the end she says this (it was a script, which kept her REVIEW lines from ever being asked)
  talk:()=>[
   {who:'…',say:'비탈에 누가 쓰러져 있어요. 크로 사냥꾼이에요.'},
   {who:'…',say:'얼굴이 둥근 여자예요. 창이 부러졌어요.'},
   {who:'…',say:'무릎이 이상하게 꺾였어요. 일어나지 못해요.'},
   {who:'사냥꾼 여자',say:'…당신이 도둑이에요?'},
   {who:'핸드리',say:'제 손에 막대기가 있어요. 여자는 혼자예요.'},
   {who:'…',w:'사냥꾼',ask:'저는 어떻게 할까요?',opts:[['막대기를 내려놓아요',1],['막대기를 휘둘러요',0,'여자는 벌써 너무 무서워해요. 때리고 싶은 마음이 사라졌어요.']]},
   {who:'…',say:'막대기를 내려놓았어요.',take:['막대기']},
   {who:'핸드리',say:'못 하겠어요… 눈물이 났어요.'},
   {who:'사냥꾼 여자',say:'…뭘 원해요?'},
   {who:'핸드리',say:'미안해요… 너무 배고파요. 너무 힘들어요.'},
   {who:'핸드리',say:'떠날게요. 갈 마을만 알려 주세요.'},
   {who:'사냥꾼 여자',say:'아침 해가 나오는 쪽으로 가요. 거기 {디보|디보}가 있어요.'},  // §IV: "If you go the way the sun rises, there's Divo"
   Q.huntress[0],
   {who:'사냥꾼 여자',say:'디보는 크로보다 커요. 먹을 것도 더 많아요.'},
   Q.huntress[1],
   {w:'해가 뜨다',build:['해가','뜨는','쪽으로','걸어가요']},
   {who:'핸드리',say:'고마워요.',set:()=>{f().done=1}},
   {who:'…',say:'저는 동쪽으로 걸었어요. 여자는 거기 앉아 있었어요.',award:['동쪽','해가 뜨다']},
   {who:'…',say:'그때는 몰랐어요. 그게 거짓말이었다는 걸요.',finale:1}]},
};
const FOLLOW=null;

const INTRO=[{who:'핸드리',say:'그날 밤, 저는 아로에서 도망쳤어요.'},{who:'핸드리',say:'멜로리가 "도망쳐!" 하고 소리쳤어요.'},
 {who:'핸드리',say:'뒤도 안 보고 숲으로 뛰었어요. 다리에 상처가 났어요.'},{who:'핸드리',say:'나무뿌리 사이에 몸을 웅크리고 누웠어요.'}];
const DONE=['2장 끝! 저는 디보에 갔어요.','디보는 작고 가난한 마을이었어요.',
 '저는 도둑으로 이 마을, 저 마을을 떠돌았어요.','그리고 아주 큰 마을, 오로보에 왔어요.',{expand:()=>wrapUp()},'일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f(),c=i=>hasItem(i)?'✓':'✗';
 if(F.done)return '2장 끝 · 일지에서 복습해요';
 if(!F.arraclid)return '숲 · 밤의 소리';
 if(!F.resolve){
  if(F.day===1&&F.ate&&!F.raikers)return '숲 · 레이커 무리 옆에서 자요';
  return `숲 · ${F.day}일째 · ${F.ate||F.day===4?'뿌리 밑 잠자리로 가요':'먹을 것을 찾아요'}`;  // day 4 has no food: he goes back to the root and despairs
 }
 if(!F.left)return '숲길 · 몰래 행렬을 봐요';
 if(!F.crust)return '숲길 · 모닥불 자리';
 if(!F.night)return `크로 · 칼턴의 환영 · 의사 ${F.sawDoc?'✓':'✗'} · 새 집 ${F.sawHome?'✓':'✗'}`;
 if(!F.hunt){if(!b('도둑'))return '크로 · 밤 · 빵집 앞의 목소리';if(!F.noise)return '크로 · 밤 · 파수꾼을 떼어 놓아요';return `크로 · 밤 · 빵 ${c('크로 빵')} 옷 ${c('옷')} 꽃 ${c('크로 꽃')}`}
 if(!F.hunters)return '크로 숲 · 덤불 속에서 말소리를 들어요';
 return '크로 숲 · 비탈의 사냥꾼 여자';
}
return {WORDS,DICT,CONFUSE,BANK,Q,REVIEW,CLASS,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES,PLAYER};
}});
