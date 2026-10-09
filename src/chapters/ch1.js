CHAPTERS.push({id:'ch1',n:'1장',title:'아로',place:'아로 · 나무 광장 · 언덕 밭 · 쌍둥이 집',words:16,save:'esb-ch1',color:'#7E3F8F',
 start:{zone:'circle',x:3,y:9,dir:'down'},introWho:'핸드리',
 make:()=>{
/* =====================================================================
   1장 · 아로 — content. Book pin: §I–III (Aro).
   §I  (Handry 13): festival of Sethr's Severing. Corto (senile Doctor) leaves the cauldron of HOT Severance unattended; Handry,
       chasing Livvi with Kalton, tries to jump it and is splashed: leg, side, cheek, brow (side of body unstated → drawn on his left).
       Sethr is daubed with COLD Severance and turned away. Corto examines Handry, ghost flickering, calls for his dead wife Sera.
   §II (13→16): Sethr found dead 30 days later (starved, gorged on berries, belly burst). Handry eats only near-burnt bread; rashes,
       fevers; covered head to toe; fleas/small wasps avoid him; villagers fail to perceive him (miss him in counts, don't hand him
       tools). Corto stops functioning ("installation failed, rebooting"), then dies BEFORE the Electors; Brosa (old Architect)
       declining. 10–12 tense days; Electors hatch; Melory is chosen as Doctor.
   §III (16): two-day fever; Melory's LEFT side swells, LEFT eye lost (socket + pits, ghostlight); she wakes still herself; doctors
       Aro a month. Day 31, night, alone: the ghost diagnoses irreversible damage, recommends expulsion, wants to tell the Lawgiver.
       Melory fights it, bleeds from eye and mouth, tells him to run. He flees by night (no pursuit; she keeps the report back).
   Invented (non-decisive): the baker, the storyteller, the field worker, the herder, the child chasing the Elector,
       the gourd pile; the exact place Melory is stung (just "under the tree"); Brosa's forehead marks.
   No one in Aro knows of ships, metal or ancestors. Ma died hunting Arraclids when the twins were 7.
   Lore source: notes/canon.md + notes/chapters-outline.md (1장). Audit against the full book before publishing.
   Terms used across the game: 판관 Lawgiver · 의사 Doctor · 설계자 Architect · 유령 ghost · 단절약 Severance · 일렉터 Elector · 벌집 hive.
   ===================================================================== */
const WORDS=['화상','데다','가마솥','끓이다','이웃','공동체','무시하다','두드러기','가렵다','타다','벌','쏘다','열이 나다','진단하다','도망치다','상처'];
const DICT={
 '화상':{k:'불이나 뜨거운 것 때문에 피부가 다친 것.',e:'a burn (injury), scald',ex:'끓는 약에 화상을 입었어요.',hj:'火傷 · 火 = 불 · 화요일의 화 · 傷 = 상처의 상'},
 '데다':{k:'뜨거운 것에 닿아서 피부를 다쳐요. 데어요 · 데었어요.',e:'to get scalded / burned (skin)',ex:'뜨거운 국에 손을 데었어요.'},
 '가마솥':{k:'밥이나 약을 한꺼번에 많이 끓이는 아주 큰 솥.',e:'cauldron',ex:'가마솥에서 빨간 약이 끓어요.'},
 '끓이다':{k:'물이나 국을 아주 뜨겁게 해서 부글부글하게 해요. (물이 혼자 → 끓다)',e:'to boil (something)',ex:'코르토가 가마솥에 약을 끓여요.'},
 '이웃':{k:'가까이 사는 사람. 같은 마을 사람.',e:'neighbour',ex:'아로 사람은 다 이웃이에요.'},
 '공동체':{k:'같이 살고 같이 일하는 사람들의 모임.',e:'community',ex:'아로는 작은 공동체예요.',hj:'共同體 · 同 = 같다 · 體 = 몸 · 체육(體育)의 체'},
 '무시하다':{k:'있는데 없는 것처럼 안 봐요.',e:'to ignore',ex:'사람들이 핸드리를 무시해요.',hj:'無視 · 無 = 없다 · 視 = 보다'},
 '두드러기':{k:'피부에 빨갛게 오톨도톨 올라오는 것. 아주 가려워요.',e:'hives, rash',ex:'풀을 뽑다가 두드러기가 났어요.'},
 '가렵다':{k:'자꾸 긁고 싶어요. 가려워요 · 가려웠어요.',e:'to be itchy',ex:'두드러기가 나서 너무 가려워요.'},
 '타다':{k:'① 불에 너무 오래 있어서 까맣게 돼요. ② (버스를) 타요. 여기는 ①.',e:'to burn (food, wood); get burnt',ex:'빵이 까맣게 탔어요.'},
 '벌':{k:'날아다니는 작은 곤충. 꽁무니의 침으로 쏴요.',e:'wasp, bee',ex:'나무 벌집에서 벌이 나와요.'},
 '쏘다':{k:'벌이 침으로 찔러요. 쏴요 · 쐈어요. 당하면 → 쏘이다.',e:'to sting (also: to shoot)',ex:'벌이 멜로리를 쐈어요. 멜로리가 벌에 쏘였어요.'},
 '열이 나다':{k:'아파서 몸이, 특히 이마가 뜨거워져요.',e:'to have a fever',ex:'멜로리가 이틀 동안 열이 났어요.',hj:'熱 = 뜨겁다 · 열정(熱情)의 열'},
 '진단하다':{k:'의사가 살펴보고 무슨 병인지 알아내요.',e:'to diagnose',ex:'의사가 핸드리를 진단했어요.',hj:'診斷 · 斷 = 끊다 · 단절(斷絶)의 단!'},
 '도망치다':{k:'무섭거나 위험해서 빨리 달아나요.',e:'to run away, flee',ex:'핸드리는 밤에 도망쳤어요.',hj:'逃亡 · 亡 = 멸망(滅亡)의 망'},
 '상처':{k:'다쳐서 생긴 곳. 피가 나거나 흉터가 남아요.',e:'wound, injury; scar',ex:'다리에 큰 상처가 있어요.',hj:'傷處 · 傷 = 다치다 · 화상(火傷)의 상'},
 /* glosses for words that appear in lines but are not badges */
 '벌집':{k:'벌이 사는 집. 아로의 벌집은 큰 나무 가운데에 있어요.',e:'hive'},
 '유령':{k:'벌집에 살다가 어떤 사람 머릿속에 들어가는 똑똑한 목소리.',e:'ghost (an advisor that lives in a bearer’s head)'},
 '판관':{k:'유령을 가진 사람. 마을의 규칙을 지키고 판결해요.',e:'Lawgiver'},
 '설계자':{k:'유령을 가진 사람. 집, 밭, 마을의 앞날을 계획해요.',e:'Architect'},
 '단절약':{k:'의사가 끓이는 검붉은 약. 바르면 그 사람은 공동체에서 끊어져요.',e:'Severance (the dye)'},
 '단절':{k:'끊어짐. 단절약을 바른 사람의 상태.',e:'Severance; being Severed'},
 '판결':{k:'잘못을 보고 벌을 정하는 것.',e:'verdict, sentence'},
 '일렉터':{k:'손가락만 한 큰 벌. 일렉터한테 쏘이면 유령이 들어올 수 있어요.',e:'Elector (wasp)'},
 '미클 케이크':{k:'축제 때 먹는 과자.',e:'mickle-cake'},
 '슈거웜 꼬치':{k:'달콤한 벌레를 꽂은 꼬치. 축제 음식.',e:'sugarworm skewer'},
 '진찰':{k:'의사가 아픈 사람을 살펴보는 것.',e:'medical examination'},
 '괭이':{k:'밭을 파는 농기구.',e:'hoe'},
 '헬리버그':{k:'밭의 잎을 먹는 해로운 벌레.',e:'Helibug (field pest)'},
 '에르티비스트':{k:'아로 사람들이 무리로 키우는 가축.',e:'Ertibeest (herd animal)'},
 '아라클리드':{k:'다리가 여섯 개 달린 숲의 큰 짐승.',e:'Arraclid'},
 '추방':{k:'마을에서 쫓아내는 것.',e:'expulsion, exile'},
 '테르펠':{k:'아로에서 집을 짓는 나무.',e:'Terfel (wood)'},
};
/* sounds-alike / looks-alike words, used when a listening question is built */
const CONFUSE={'화상':['화장','화살'],'데다':['대다','되다'],'가마솥':['가마','가방'],'끓이다':['끓다','꿇다'],'이웃':['이사','이불'],'공동체':['공부','동창'],
 '무시하다':['무서워하다','무사하다'],'두드러기':['두드리다','두부'],'가렵다':['가볍다','그립다'],'타다':['따다','차다'],'벌':['별','발'],'쏘다':['쓰다','싸다'],
 '열이 나다':['열다','화가 나다'],'진단하다':['진정하다','판단하다'],'도망치다':['도와주다','돌아가다'],'상처':['상태','상대']};

/* extra review questions (the memory stone uses these too, alongside every NPC question) */
const BANK=[
 {w:'화상',ask:'불 옆에서 놀다가 손에 ___을 입었어요.',opts:[['화상',1],['화장',0,'화장은 얼굴을 예쁘게 하는 거예요. 불에 다친 건 "화상".']]},
 {w:'데다',ask:'국이 너무 뜨거워요. 혀를 ___.',opts:[['데었어요',1],['탔어요',0,'타다는 빵이나 나무가 까맣게 되는 거예요. 사람 피부는 "데다".']]},
 {w:'가마솥',ask:'축제 때 큰 ___에 국을 끓여요. 백 명이 먹어요.',opts:[['가마솥',1],['가방',0,'가방에는 물건을 넣어요. 국을 끓이는 큰 솥은 "가마솥".']]},
 {w:'끓이다',ask:'코르토는 약을 ___ 어디론가 가 버렸어요.',opts:[['끓이다가',1],['끓이려고',0,'"-려고"는 앞으로 할 계획이에요. 하는 중에 다른 일이 생기면 → "끓이다가".']]},
 {w:'끓이다',ask:'물이 ___. 부글부글 소리가 나요.',opts:[['끓어요',1],['끓여요',0,'"끓여요"는 사람이 해요. 물이 혼자 하면 → "끓어요".']]},
 {w:'이웃',ask:'옆집 사람한테 떡을 줬어요. 좋은 ___이에요.',opts:[['이웃',1],['이사',0,'이사는 집을 옮기는 거예요. 옆집 사람은 "이웃".']]},
 {w:'공동체',ask:'마을 사람들이 다 같이 밭을 일궈요. 작은 ___예요.',opts:[['공동체',1],['공부',0,'공부는 책으로 배우는 거예요. 같이 사는 사람들의 모임은 "공동체".']]},
 {w:'무시하다',ask:'인사했는데 친구가 저를 안 봐요. 저를 ___.',opts:[['무시해요',1],['무사해요',0,'무사하다는 다친 데 없이 괜찮은 거예요. 못 본 척하면 → "무시해요".']]},
 {w:'두드러기',ask:'풀을 ___ 두드러기가 났어요.',opts:[['뽑다가',1],['뽑으려고',0,'"-려고"는 계획이에요. 뽑는 중에 생겼어요 → "뽑다가".']]},
 {w:'가렵다',ask:'모기한테 물렸어요. 팔이 ___.',opts:[['가려워요',1],['가벼워요',0,'가볍다는 무게가 안 나가는 거예요. 긁고 싶으면 → "가려워요".']]},
 {w:'타다',ask:'불을 너무 세게 해서 밥이 ___.',opts:[['탔어요',1],['데었어요',0,'데다는 사람이 뜨거운 것에 다치는 거예요. 밥은 → "탔어요".']]},
 {w:'벌',ask:'꽃에 ___이 앉았어요. 윙윙.',opts:[['벌',1],['별',0,'별은 밤하늘에서 빛나요. 꽃에 앉는 건 "벌".']]},
 {w:'쏘다',ask:'벌한테 ___ 손이 부었어요.',opts:[['쏘여서',1],['쏴서',0,'내가 쏜 게 아니에요. 벌한테 당했어요 → "쏘여서".']]},
 {w:'열이 나다',ask:'감기에 걸려서 ___. 이마가 뜨거워요.',opts:[['열이 나요',1],['열어요',0,'열다는 문을 여는 거예요. 몸이 뜨거우면 → "열이 나요".']]},
 {w:'진단하다',ask:'의사 선생님이 제 병을 감기라고 ___.',opts:[['진단했어요',1],['진정했어요',0,'진정하다는 마음을 가라앉히는 거예요. 병을 알아내는 건 "진단".']]},
 {w:'도망치다',ask:'도둑이 ___ 넘어졌어요.',opts:[['도망치다가',1],['도망치려고',0,'"-려고"는 계획이에요. 달아나는 중에 넘어졌어요 → "도망치다가".']]},
 {w:'상처',ask:'칼에 베여서 손가락에 ___가 났어요.',opts:[['상처',1],['상태',0,'상태는 건강이나 기분이에요. 다쳐서 생긴 곳은 "상처".']]},
];

const Q={ // NPC questions, kept here so review can reuse them
 elhern:[
  {w:'이웃',ask:'같은 마을, 가까이 사는 사람. 그게 ___이야.',opts:[['이웃',1],['이사',0,'이사는 집을 옮기는 거야. 가까이 사는 사람은 "이웃".'],['이불',0,'이불은 잘 때 덮는 거야! 가까이 사는 사람은 "이웃".']]},
  {w:'이웃',ask:'세서는 ___을 다치게 했어. 그래서 오늘 떠나.',opts:[['이웃',1],['이유',0,'이유는 "왜"의 대답이야. 다친 사람, 같은 마을 사람은 "이웃".']]},
 ],
 corto:[
  {w:'가마솥',ask:'약을 많이 끓이는 아주 큰 솥. 그걸 ___이라고 해.',opts:[['가마솥',1],['가방',0,'가방에는 물건을 넣어. 큰 솥은 "가마솥".'],['가면',0,'가면은 얼굴에 써. 큰 솥은 "가마솥".']]},
  {w:'끓이다',ask:'나는 아침부터 가마솥에 약을 ___ 있어.',opts:[['끓이고',1],['끓고',0,'"끓다"는 물이 혼자 끓는 거야. 내가 하면 → "끓이다" → 끓이고 있어.'],['꿇고',0,'꿇다는 무릎을 꿇는 거야. 약은 → 끓이고 있어.']]},
 ],
 corto2:[
  {w:'상처',ask:'뜨거운 약에 데어서 ___가 생겼구나.',opts:[['상처',1],['상태',0,'상태는 건강이나 기분이야. 다쳐서 생긴 곳은 "상처".'],['상대',0,'상대는 같이 싸우는 사람이야. 다친 곳은 "상처".']]},
 ],
 mel13:[
  {w:'데다',ask:'끓는 물에 손을 ___ 진짜 아파.',opts:[['데면',1],['타면',0,'타다는 빵이나 나무가 까매지는 거야. 뜨거운 물에 피부가 → "데다".'],['맞으면',0,'맞다는 무엇에 부딪히는 거야. 뜨거운 물에 → "데면".']]},
  {w:'화상',ask:'뜨거운 물에 데면 ___을 입어.',opts:[['화상',1],['화장',0,'화장은 얼굴을 예쁘게 하는 거야! 뜨거운 것에 다치면 "화상".'],['화살',0,'화살은 활로 쏘는 거야. 뜨거운 것에 다치면 "화상".']]},
  {w:'데다',ask:'나는 네가 ___ 걱정돼.',opts:[['델까 봐',1],['데서',0,'"데서"는 벌써 데었다는 말이야. 아직 안 데었고 걱정이면 → "델까 봐".'],['데려고',0,'"-려고"는 하고 싶은 계획이야. 걱정이면 → "델까 봐".']]},
 ],
 pot:[
  {w:'화상',who:'핸드리 (생각)',scene:1,ask:'살이 타는 것 같아요. 끓는 약에 ___을 입었어요.',opts:[['화상',1],['화장',0,'화장은 얼굴에 예쁘게 하는 거예요. 뜨거운 것에 다치면 "화상".']]},
 ],
 chogger:[
  {w:'무시하다',who:'핸드리 (생각)',ask:'다들 저를 못 본 것처럼 지나가요. 저를 ___.',opts:[['무시해요',1],['무서워해요',0,'무서워하면 도망가요. 그냥 안 보는 건 "무시해요".'],['미워해요',0,'미워하는 게 아니에요. 정말 저를 못 느껴요. 안 보는 건 "무시해요".']]},
  {w:'무시하다',who:'핸드리 (생각)',ask:'초거한테 또 ___ 더는 아무 말도 못 했어요.',opts:[['무시당할까 봐',1],['무시할까 봐',0,'무시하는 사람은 초거예요. 나는 당해요 → "무시당할까 봐".']]},
 ],
 baker:[
  {w:'타다',ask:'원래는 빵이 ___ 계속 지켜봐.',opts:[['탈까 봐',1],['타서',0,'"타서"는 벌써 탔다는 말이야. 걱정이면 → "탈까 봐".'],['타려고',0,'빵은 계획이 없어! 걱정이면 → "탈까 봐".']]},
  {w:'타다',ask:'빵을 너무 오래 구우면 까맣게 ___.',opts:[['타',1],['데',0,'데다는 사람 피부가 뜨거운 것에 다치는 거야. 빵은 → "타".']]},
 ],
 brosa:[
  {w:'공동체',ask:'우리는 한 나무 아래 사는 하나의 ___예요.',opts:[['공동체',1],['공부',0,'공부는 책으로 배우는 거예요. 같이 사는 사람들은 "공동체".'],['공장',0,'공장은 물건을 만드는 곳이에요. 같이 사는 사람들은 "공동체".']]},
 ],
 kid:[
  {w:'벌',who:'핸드리 (생각)',ask:'벌집에서 손가락만 한 ___이 나왔어요.',opts:[['벌',1],['별',0,'별은 밤하늘에서 빛나요. 날아다니며 쏘는 건 "벌".'],['발',0,'발은 걸을 때 써요. 윙윙 나는 건 "벌".']]},
 ],
 melTree:[
  {w:'쏘다',who:'핸드리 (생각)',ask:'일렉터가 멜로리를 ___.',opts:[['쐈어요',1],['먹었어요',0,'일렉터는 멜로리를 안 먹어요! 벌은 침으로 → "쐈어요".'],['맞았어요',0,'맞다는 당한 사람이 써요. 벌이 한 거니까 → "쐈어요".']]},
  {w:'쏘다',who:'핸드리 (생각)',ask:'멜로리가 일렉터한테 ___.',opts:[['쏘였어요',1],['쐈어요',0,'멜로리가 쏜 게 아니에요. 당했어요 → "쏘였어요".']]},
 ],
 melA:[
  {w:'두드러기',ask:'피부에 빨갛게 오톨도톨 올라온 거. 그게 ___야.',opts:[['두드러기',1],['두부',0,'두부는 먹는 거야! 피부에 올라온 건 "두드러기".'],['주름',0,'주름은 늙으면 생겨. 빨갛게 올라온 건 "두드러기".']]},
  {w:'가렵다',ask:'두드러기가 나면 너무 ___.',opts:[['가려워',1],['가벼워',0,'가볍다는 무게가 안 나가는 거야. 긁고 싶으면 → "가려워".'],['그리워',0,'그립다는 보고 싶은 거야. 긁고 싶으면 → "가려워".']]},
 ],
 melFever:[
  {w:'열이 나다',who:'핸드리 (생각)',ask:'이마가 불처럼 뜨거워요. 멜로리가 ___.',opts:[['열이 나요',1],['열어요',0,'열다는 문을 여는 거예요. 몸이 뜨거우면 → "열이 나요".'],['화가 나요',0,'화가 나면 마음이 뜨거워요. 몸이 뜨거우면 → "열이 나요".']]},
  {w:'열이 나다',who:'핸드리 (생각)',ask:'열이 더 ___ 밤새 천을 바꿔요.',opts:[['날까 봐',1],['났지만',0,'"-지만"은 "그런데"예요. 아직 안 일어난 걱정이면 → "날까 봐".']]},
 ],
 melNight:[
  {w:'진단하다',who:'핸드리 (생각)',ask:'의사가 아픈 곳을 살펴보고 병을 알아내요. 그걸 ___해요.',opts:[['진단',1],['진심',0,'진심은 거짓 없는 마음이에요. 병을 알아내는 건 "진단".'],['진정',0,'진정은 마음을 가라앉히는 거예요. 병을 알아내는 건 "진단".']]},
  {w:'도망치다',who:'멜로리',ask:'위험해! 빨리 ___!',opts:[['도망쳐',1],['도와줘',0,'도와주다는 힘을 보태는 거야. 위험해서 달아나면 → "도망쳐".'],['돌아가',0,'돌아가다는 원래 곳으로 가는 거야. 여기를 피해 달아나면 → "도망쳐".']]},
 ],
 cafe:[ // the storyteller: old words from 성실호 and 단어 마을, no badges
  {ask:'겨울 전에 ___을 많이 모아야 돼. 오래 먹을 음식 말이야.',opts:[['식량',1],['간식',0,'간식은 조금 먹는 거야. 겨울 내내 먹을 음식은 "식량".']]},
  {ask:'옛날 일을 다 ___ 버렸니? 이 할미는 다 기억해.',opts:[['잊어',1],['잃어',0,'잃다는 물건이 없어지는 거야. 기억이 없어지면 → "잊다".']]},
  {ask:'번쩍! 하늘에서 ___가 쳤어. 그다음에 쿵!',opts:[['번개',1],['폭풍',0,'폭풍은 아주 센 바람이야. 번쩍 하는 빛은 "번개".']]},
  {ask:'진흙 위에 ___이 남았어. 누가 지나갔지?',opts:[['발자국',1],['발견',0,'발견은 처음 찾는 거야. 발 모양 흔적은 "발자국".']]},
  {ask:'숲은 ___해. 아이들 혼자 가면 안 돼.',opts:[['위험',1],['안전',0,'안전은 위험의 반대야. 숲은 "위험"해.']]},
  {ask:'세월이 흘러서 마을도 많이 ___.',opts:[['변했어',1],['변명했어',0,'변명은 잘못을 말로 피하는 거야. 달라졌으면 → "변했어".']]},
  {ask:'씨름에서 내 ___는 아주 셌어.',opts:[['상대',1],['상태',0,'상태는 건강이나 기분이야. 같이 겨루는 사람은 "상대".']]},
  {ask:'그 아이는 아파서 ___가 안 좋아.',opts:[['상태',1],['상대',0,'상대는 같이 겨루는 사람이야. 건강은 "상태".']]},
 ],
};

/* In-character review lines (engine: linesFor · reviewPick · sayLine). A line plays only when its speaker's script is silent, so
   each one holds from the time you have the word until that person leaves (hide/script/flags); `when` narrows the moment.
   Never reviewing here (a script always answers once they have taught): Corto, melTree, melHome, Kalton, Livvi, the storyteller,
   the pot, the gourds and the forest.
   Invented (small, non-decisive): Chogger (13) burns his hand on fresh festival bread; the baker's burn-scarred arms and his
   sweaty, itchy back by the oven; the field hands' hot lunch soup, a slightly burnt lunch loaf, a flea bite, a hoe cut on a foot,
   a child's rash, a supper of soup in a big cauldron; the herder's Ertibeest lore (heed them when they cry, they live in a herd,
   one ran off); Helibugs dart away when touched; a mourner remembering Corto treating rashes; the mourner's son's leg wound
   swelling; Brosa forgetting for a moment that Corto is dead (and, once, that the Electors have chosen). CLASS (Melory's month
   as doctor): a leg wound, a child scalded at an oven, a hand scalded in boiling water, a swollen sting, a rash, sick children who
   itch, Melory tired at night and brewing ahead.
   Audited against §I–III (notes/audit-review-ch1.md): Chogger at 16 talks only to the workers (§II: Livvi, Kalton, Chogger stayed
   away); "no doctor" lines stop once the Electors choose (stung); the boiling-pot warning stops once Handry is burned.
   열이 나다 · 진단하다 · 도망치다 are learned when nobody is left to talk to (the fever ends at night, then the flight), so their
   lines are never asked in this chapter; each still says only what was true while its speaker was around. */
const REVIEW=[ // people use a learned word again in their own voice and moment, grouped by speaker in story order
 /* ----- the festival (13) ----- */
 {w:'이웃',by:'elhern',ask:'세서는 이제 우리 ___이 아니야.',opts:[['이웃',1],['이불',0,'이불은 덮고 자는 거야. 같은 마을 사람은 "이웃".'],['이름',0,'이름은 부르는 거야. 같은 마을 사람은 "이웃".']]},  // elhern: only after the Severing, until Corto's exam
 {w:'화상',by:'elhern',ask:'핸드리, ___이 심해. 빨리 코르토한테 가.',opts:[['화상',1],['화장',0,'화장은 얼굴을 꾸미는 거야. 뜨거운 것에 다치면 "화상".'],['화살',0,'화살은 활로 쏘는 거야. 뜨거운 것에 다치면 "화상".']]},
 {w:'가마솥',by:'elhern',ask:'아이들은 끓는 ___ 근처에서 놀면 안 돼.',opts:[['가마솥',1],['가방',0,'가방에는 물건을 넣어. 약을 끓이는 큰 솥은 "가마솥".']]},
 {w:'이웃',by:'sethr',ask:'다들 내 ___이었잖아. 근데 구경만 해.',opts:[['이웃',1],['이불',0,'이불은 덮는 거잖아. 같이 사는 사람은 "이웃".']]},
 {w:'가마솥',by:'sethr',ask:'저 ___ 약을 나한테 바를 거래.',opts:[['가마솥',1],['가방',0,'가방에 약을 끓이냐? 큰 솥은 "가마솥".']]},
 {w:'끓이다',by:'sethr',ask:'코르토는 아침부터 약만 ___. 나 하나 때문에.',opts:[['끓였어',1],['끓었어',0,'끓다는 약이 혼자 끓는 거야. 코르토가 했으니까 "끓였어".']]},
 {w:'화상',by:'mel13',when:()=>!f().cortoGone,ask:'코르토 할아버지 손이 떨려. ___ 입으면 어떡해.',opts:[['화상',1],['화장',0,'화장은 얼굴을 꾸미는 거야! 불에 다치면 "화상".'],['화살',0,'화살은 활로 쏘는 거야. 뜨거운 것에 다치면 "화상".']]},
 {w:'데다',by:'mel13',ask:'가마솥 김에도 ___ 수 있어. 조심해!',opts:[['델',1],['탈',0,'타다는 빵이나 나무가 까매지는 거야. 사람 피부는 "델".'],['될',0,'되다는 뭐가 되는 거야. 뜨거운 김에 다치면 "델".']]},
 {w:'끓이다',by:'mel13',when:()=>!!f().cortoGone,ask:'코르토 할아버지가 약만 ___ 놓고 갔어. 또 깜박했나 봐.',opts:[['끓여',1],['끓어',0,'끓다는 약이 혼자 끓는 거야. 할아버지가 했으니까 "끓여".']]},
 {w:'가마솥',by:'mel13',ask:'세서 때문에 다들 ___ 옆에 모였어.',opts:[['가마솥',1],['가면',0,'가면은 얼굴에 쓰는 거야. 약을 끓이는 큰 솥은 "가마솥".']]},
 {w:'화상',by:'crowd1',when:()=>!!f().burned,ask:'아이고, 얼굴까지 ___을 입었네. 쯧쯧.',opts:[['화상',1],['화장',0,'화장은 얼굴을 꾸미는 거야. 뜨거운 것에 다치면 "화상".']]},
 {w:'데다',by:'crowd2',when:()=>!f().burned,ask:'끓는 약이야. 가까이 가면 ___.',opts:[['덴다',1],['된다',0,'"된다"는 괜찮다는 말이야. 뜨거운 데 다치면 "덴다".']]},
 {w:'끓이다',by:'crowd2',ask:'저 약은 ___ 식혀서 바르는 거야.',opts:[['끓였다가',1],['꿇었다가',0,'꿇다는 무릎을 꿇는 거야. 약은 "끓였다가".']]},
 {w:'데다',by:'chogger13',when:()=>!f().burned,ask:'갓 구운 축제 빵에 손을 ___. 그래도 맛있어!',opts:[['데었어',1],['탔어',0,'타다는 빵이 까매지는 거야. 손은 "데었어".']]},
 /* ----- three years later (16) ----- */
 {w:'타다',by:'baker',ask:'다른 빵은 ___ 아까워. 네 빵만 괜찮지.',opts:[['타면',1],['데면',0,'데다는 사람 피부가 다치는 거야. 빵은 "타면".']]},
 {w:'화상',by:'baker',ask:'화덕 일을 오래 해서 팔에 ___ 자국이 많아.',opts:[['화상',1],['화장',0,'화장은 얼굴을 꾸미는 거야. 불에 덴 자국은 "화상".']]},
 {w:'이웃',by:'baker',ask:'멜로리 부탁이니까 하는 거야. ___ 부탁이잖아.',opts:[['이웃',1],['이불',0,'이불은 덮는 거야. 가까이 사는 사람은 "이웃".']]},
 {w:'가렵다',by:'baker',ask:'화덕 앞은 더워. 땀이 나서 등이 ___.',opts:[['가려워',1],['가벼워',0,'가볍다는 무게가 안 나가는 거야. 긁고 싶으면 "가려워".']]},
 {w:'쏘다',by:'baker',when:()=>!!f().stung,ask:'멜로리가 일렉터한테 ___. 다들 그 얘기야.',opts:[['쏘였대',1],['쐈대',0,'멜로리가 쏜 게 아니야. 당했으니까 "쏘였대".']]},
 {w:'열이 나다',by:'baker',when:()=>!!f().stung&&!f().woke,ask:'멜로리가 아직도 ___. 다들 걱정이야.',opts:[['열이 난대',1],['열었대',0,'열다는 문을 여는 거야. 몸이 뜨거우면 "열이 난대".']]},
 {w:'무시하다',by:'chogger',pre:[{who:'핸드리 (생각)',say:'초거는 일꾼들한테만 말해요. 저는 안 봐요.'}],ask:'작은 벌레라고 ___ 안 돼. 잎을 다 먹어.',opts:[['무시하면',1],['무사하면',0,'무사하다는 다친 데 없이 괜찮은 거야. 신경 안 쓰는 건 "무시하면".']]},
 {w:'타다',by:'chogger',pre:[{who:'핸드리 (생각)',say:'초거는 일꾼들한테만 말해요. 저는 안 봐요.'}],ask:'점심 빵이 좀 ___. 그래도 먹자.',opts:[['탔어',1],['데었어',0,'데다는 사람 피부가 다치는 거야. 빵은 "탔어".']]},
 {w:'공동체',by:'chogger',pre:[{who:'핸드리 (생각)',say:'초거는 일꾼들한테만 말해요. 저는 안 봐요.'}],ask:'설계자님 말처럼, 우리는 한 ___야. 같이 일하자.',opts:[['공동체',1],['공부',0,'공부는 책으로 하는 거야. 같이 사는 사람들은 "공동체".']]},
 {w:'쏘다',by:'chogger',pre:[{who:'핸드리 (생각)',say:'초거는 일꾼들한테만 말해요. 저는 안 봐요.'}],when:()=>!!f().stung,ask:'멜로리가 ___ 사람들이 집으로 옮겼대.',opts:[['쏘여서',1],['쏴서',0,'멜로리가 쏜 게 아니야. 당했으니까 "쏘여서".']]},
 {w:'열이 나다',by:'chogger',pre:[{who:'핸드리 (생각)',say:'초거는 일꾼들한테만 말해요. 저는 안 봐요.'}],when:()=>!!f().stung&&!f().woke,ask:'멜로리가 계속 ___. 괜찮을까?',opts:[['열이 난대',1],['열린대',0,'열리다는 문이 열리는 거야. 몸이 뜨거우면 "열이 난대".']]},
 {w:'데다',by:'hand1',ask:'점심 국이 너무 뜨거워서 혀를 ___.',opts:[['데었어',1],['탔어',0,'타는 건 빵이나 나무야. 혀는 "데었어".']]},
 {w:'가마솥',by:'hand2',when:()=>!f().gourd,ask:'오늘 저녁은 큰 ___에 국을 끓인대.',opts:[['가마솥',1],['가방',0,'가방에 국을 끓여? 큰 솥은 "가마솥".']]},
 {w:'가렵다',by:'hand2',ask:'벼룩한테 물렸나 봐. 등이 ___.',opts:[['가려워',1],['가벼워',0,'가볍다는 무게가 안 나가는 거야. 긁고 싶으면 "가려워".'],['그리워',0,'그립다는 보고 싶은 거야. 긁고 싶으면 "가려워".']]},
 {w:'상처',by:'worker',ask:'괭이에 발을 찍었어. ___가 꽤 깊네.',opts:[['상처',1],['상태',0,'상태는 건강이나 기분이야. 다친 곳은 "상처".']]},
 {w:'두드러기',by:'worker',ask:'애가 밤새 긁었어. ___가 났나 봐.',opts:[['두드러기',1],['두부',0,'두부는 먹는 거야! 피부에 빨갛게 올라온 건 "두드러기".']]},
 {w:'도망치다',by:'worker',ask:'헬리버그는 손만 대면 ___. 잡기 힘들어.',opts:[['도망쳐',1],['도와줘',0,'도와주다는 힘을 보태는 거야. 달아나면 "도망쳐".']]},
 {w:'무시하다',by:'herder',ask:'에르티비스트 울음소리를 ___ 안 돼. 뭔가 있는 거야.',opts:[['무시하면',1],['무사하면',0,'무사하다는 다친 데 없이 괜찮은 거야. 신경 안 쓰는 건 "무시하면".']]},
 {w:'공동체',by:'herder',ask:'에르티비스트도 무리 지어 살아. 우리 ___처럼.',opts:[['공동체',1],['공부',0,'공부는 책으로 하는 거야. 무리 지어 사는 사람들은 "공동체".']]},
 {w:'벌',by:'herder',when:()=>!f().stung,ask:'벌집에서 큰 ___이 나오고 있대.',opts:[['벌',1],['별',0,'별은 밤하늘에 떠. 벌집에서 나오는 건 "벌".']]},
 {w:'도망치다',by:'herder',ask:'에르티비스트 한 마리가 ___. 찾으러 가야 해.',opts:[['도망쳤어',1],['도와줬어',0,'도와주다는 힘을 보태는 거야. 달아났으면 "도망쳤어".']]},
 {w:'두드러기',by:'mourn1',ask:'코르토 할아버지는 ___도 잘 봐 줬는데…',opts:[['두드러기',1],['두부',0,'두부는 먹는 거야. 피부에 빨갛게 올라온 건 "두드러기".']]},  // mourners: the morning Corto dies
 {w:'상처',by:'mourn2',ask:'아들 다리 ___가 자꾸 부어. 어떡하지.',opts:[['상처',1],['상대',0,'상대는 같이 겨루는 사람이야. 다친 곳은 "상처".']]},
 {w:'진단하다',by:'mourn2',ask:'새 의사가 생기면 우리 아들부터 ___ 달라고 할 거야.',opts:[['진단해',1],['진정해',0,'진정하다는 마음을 가라앉히는 거야. 병을 알아내는 건 "진단해".']]},
 {w:'공동체',by:'brosa',when:()=>!f().stung,ask:'새 의사가 생길 때까지 아픈 사람은 ___가 돌봐요.',opts:[['공동체',1],['공부',0,'공부는 책으로 배우는 거예요. 같이 사는 사람들은 "공동체".']]},
 {w:'끓이다',by:'brosa',when:()=>!f().stung,pre:['코르토는 어디 있죠? …아, 그렇지.'],ask:'이제 약을 ___ 사람이 없어요.',opts:[['끓일',1],['끓을',0,'끓다는 약이 혼자 끓는 거예요. 사람이 하면 "끓일".']]},
 {w:'상처',by:'brosa',when:()=>!f().stung,ask:'의사가 없어서 다친 사람들 ___가 안 나아요.',opts:[['상처',1],['상대',0,'상대는 같이 겨루는 사람이에요. 다친 곳은 "상처".']]},
 {w:'벌',by:'brosa',when:()=>!f().stung,ask:'벌집이 부풀었어요. 큰 ___들이 깨어나요.',opts:[['벌',1],['별',0,'별은 밤하늘에서 빛나요. 벌집에서 나오는 건 "벌".']]},
 {w:'쏘다',by:'brosa',when:()=>!!f().stung,pre:['…아, 그렇지. 벌써 골랐죠.'],ask:'멜로리가 일렉터한테 ___. 열이 높대요.',opts:[['쏘였어요',1],['쐈어요',0,'멜로리가 쏜 게 아니에요. 당했으니까 "쏘였어요".']]},
 {w:'진단하다',by:'brosa',ask:'새 의사가 생기면 다친 사람부터 ___ 거예요.',opts:[['진단할',1],['진정할',0,'진정하다는 마음을 가라앉히는 거예요. 병을 알아내는 건 "진단할".']]},
 {w:'벌',by:'kid',ask:'큰 ___이 멜로리 누나 옆에 있어! 가 봐!',opts:[['벌',1],['별',0,'별은 밤하늘에 있어! 윙윙 나는 건 "벌".'],['발',0,'발은 걸을 때 쓰는 거야! 윙윙 나는 건 "벌".']]},
];
/* class time: Melory's month as Aro's doctor (§III), the time cut in her scene between waking and the 31st night */
const CLASS={
 patients:{say:'날마다 아픈 사람들이 멜로리를 찾아왔어요.',lines:[
  {w:'상처',who:'마을 사람',ask:'다리 ___가 안 나아요. 좀 봐 주세요.',opts:[['상처',1],['상대',0,'상대는 같이 겨루는 사람이에요. 다친 곳은 "상처".']]},
  {w:'화상',who:'마을 사람',ask:'애가 화덕 불에 ___을 입었어요.',opts:[['화상',1],['화장',0,'화장은 얼굴을 꾸미는 거예요. 불에 다치면 "화상".']]},
  {w:'데다',who:'마을 사람',ask:'끓는 물에 손을 ___. 약 좀 주세요.',opts:[['데었어요',1],['탔어요',0,'타는 건 빵이나 나무예요. 사람 손은 "데었어요".']]},
  {w:'쏘다',who:'마을 사람',ask:'벌한테 ___ 데가 너무 부었어요.',opts:[['쏘인',1],['쏜',0,'제가 쏜 게 아니에요. 벌한테 당했으니까 "쏘인".']]},
  {w:'두드러기',who:'멜로리',ask:'이건 그냥 ___예요. 긁지 마세요.',opts:[['두드러기',1],['두부',0,'두부는 먹는 거예요. 피부에 올라온 건 "두드러기".']]}]},
 evening:{say:'밤이면 멜로리는 많이 지쳐 있었어요.',lines:[
  {w:'이웃',who:'멜로리',ask:'___들이 다 나만 찾아. 오래 기다렸으니까.',opts:[['이웃',1],['이불',0,'이불은 덮고 자는 거야. 같은 마을 사람들은 "이웃".']]},
  {w:'끓이다',who:'멜로리',ask:'내일 쓸 약을 미리 ___ 놔야 해.',opts:[['끓여',1],['꿇어',0,'꿇다는 무릎을 꿇는 거야. 약은 "끓여".']]},
  {w:'가렵다',who:'멜로리',ask:'오늘은 몸이 ___ 아이들이 많이 왔어.',opts:[['가려운',1],['가벼운',0,'가볍다는 무게가 안 나가는 거야. 긁고 싶으면 "가려운".']]},
  {w:'공동체',who:'멜로리',ask:'의사는 ___ 모두를 돌봐야 해.',opts:[['공동체',1],['공부',0,'공부는 책으로 하는 거야. 같이 사는 사람들은 "공동체".']]}]},
};

const ITEMS={'탄 빵':'거의 까맣게 탄 빵. 핸드리가 먹을 수 있는 몇 안 되는 음식이에요.','물바가지':'물을 뜨는 박 바가지. 아무도 안 줘서 직접 가져왔어요.'};

const f=()=>state.f;
const hasItem=i=>state.items.includes(i);
const b=w=>state.badges.includes(w);
const E13=()=>!f().later;               // prologue: Handry is 13, festival day
const NIGHT=()=>!!f().night;           // day 31, the night Handry flees

/* ---------------- drawing helpers ---------------- */
const DK='#1B1E2B';
const nt=(X,Y,a)=>{if(NIGHT())r(X,Y,16,16,`rgba(8,10,32,${a||.62})`)};
function clip(X,Y,fn){g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn();g.restore()}
const blk=(x,y,cs,w,h)=>{let a=0,d=0;while(a<60&&cs.includes(at(x-a-1,y)||'\n'))a++;while(d<60&&cs.includes(at(x,y-d-1)||'\n'))d++;return [a%w,d%h]};
function earth(X,Y,x,y){r(X,Y,16,16,'#9A7E56');const h=hash(x,y);r(X+(h%13)+1,Y+(h%11)+2,1,1,'#A88C62');r(X+((h*7)%13)+1,Y+((h*3)%12)+2,1,1,'#8A7050');if(h%4===1)r(X+((h*11)%12)+2,Y+((h*13)%11)+3,2,1,'#8E7350');
 if(h%5===0){const a=(h*3)%12+2,c=(h*5)%10+3;r(X+a,Y+c,1,2,'#5E7A4A');r(X+a+1,Y+c-1,1,2,'#4E6A3E');r(X+a+1,Y+c-1,1,1,'#9a5aa8')}
 if(at(x,y-1)===','||at(x,y-1)==='f')r(X,Y,16,3,'rgba(46,24,56,.22)')}
function shadeG(X,Y,x,y,t){r(X,Y,16,16,'#574238');const h=hash(x,y);r(X+(h%12)+2,Y+(h%9)+3,2,1,'#64503F');r(X+((h*7)%13)+1,Y+((h*3)%12)+2,1,1,'#3E2E30');
 if(!NIGHT()&&h%3===0){const dx=Math.round(Math.sin(t/2600+h)*2);r(X+3+dx+(h%7),Y+4+(h%6),3,2,'rgba(232,186,110,.22)')}
 if(h%7===1){const a=(h%10)+3,c=((h*3)%10)+3;r(X+a,Y+c,4,1,'#5b2a6e');r(X+a+1,Y+c+1,2,1,'#7e3f8f')}
 const up=at(x,y-1);if(up==='P'){const sw=Math.round(Math.sin(t/1300+x*.8));for(let i=0;i<16;i+=3){const l=2+((h+i*5)%6);r(X+i+sw,Y,2,l,'#5b2a6e');r(X+i+sw,Y,1,l-1,'#7e3f8f');r(X+i+sw,Y+l,2,1,'rgba(0,0,0,.25)')}}}
function leafBg(X,Y,x,y,t){r(X,Y,16,16,'#2e1838');const h=hash(x,y),sw=Math.round(Math.sin(t/1300+x*.8+y));
 for(let i=0;i<7;i++){const lx=X+((h*(i+3)+i*5)%15),ly=Y+((h*(i+7)+i*3)%13);r(lx+sw,ly,2,5,i%2?'#5b2a6e':'#7e3f8f');r(lx+sw,ly,1,2,'#9a5aa8');r(lx+sw+1,ly+4,1,1,'#2e1838')}}
const cg=(X,Y,x,y,t)=>y<=6?shadeG(X,Y,x,y,t):earth(X,Y,x,y);

/* Aro's tree: 64×48 — fork + hive (map row 1), trunk (row 2), segmented root flare (row 3). Leans far out. */
function treeArt(X0,Y0,t){
 for(let yy=0;yy<48;yy++){const k=yy/47,cx=Math.round(44-k*18);let hw=Math.round(8+k*4);if(yy>33)hw+=Math.round((yy-33)*1.1);
  if(yy<13){const sp=Math.round((13-yy)*1.1);[cx-sp-7,cx+sp+1].forEach(lx=>{r(X0+lx,Y0+yy,7,1,'#5C4636');r(X0+lx,Y0+yy,2,1,'#76604A');r(X0+lx+5,Y0+yy,2,1,'#3E2E30');r(X0+lx-1,Y0+yy,1,1,DK);r(X0+lx+7,Y0+yy,1,1,DK)});
   if(yy>9)r(X0+cx-sp,Y0+yy,2*sp+1,1,'#4A3830');continue}
  r(X0+cx-hw,Y0+yy,hw*2,1,'#5C4636');r(X0+cx-hw,Y0+yy,3,1,'#76604A');r(X0+cx-hw+3,Y0+yy,1,1,'#6A5440');r(X0+cx+hw-4,Y0+yy,4,1,'#3E2E30');
  [-5,0,4].forEach((o,i)=>r(X0+cx+o+((yy>>2)+i)%2,Y0+yy,1,1,'#3E2E30'));
  if(yy%5===2)for(let i=cx-hw+4;i<cx+hw-5;i+=6)r(X0+i+(yy%10===2?3:0),Y0+yy,2,1,'#4A3830');
  r(X0+cx-hw-1,Y0+yy,1,1,DK);r(X0+cx+hw,Y0+yy,1,1,DK)}
 [[0,43,12],[50,42,13]].forEach(([rx,ry,w])=>{r(X0+rx,Y0+ry,w,4,'#4a3a2e');r(X0+rx,Y0+ry,w,1,'#6A5440');for(let i=rx+3;i<rx+w;i+=4)r(X0+i,Y0+ry,1,4,'#2E241C');r(X0+rx,Y0+ry+4,w,1,DK)});
 const hx=X0+41,hy=Y0+8; // the hive: a swollen boll in the central fork
 for(let i=-7;i<=7;i++){const w=Math.round(Math.sqrt(49-i*i)*1.05);r(hx-w,hy+i,w*2,1,i<-3?'#DCC288':'#C8A86A');r(hx-w,hy+i,1,1,DK);r(hx+w-1,hy+i,1,1,DK)}
 r(hx-5,hy-2,10,1,'#9E8048');r(hx-6,hy+2,12,1,'#9E8048');r(hx-4,hy+5,8,1,'#9E8048');r(hx-1,hy,3,2,'#3A2A12');r(hx+3,hy-4,2,1,'#3A2A12');r(hx-4,hy+3,2,1,'#3A2A12');
 const many=f().waiting&&!f().stung;
 for(let i=0;i<(many?10:6);i++){const a=t/(380+i*45)+i*1.7,rx=9+(i%3)*4,wx=hx+Math.round(Math.cos(a)*rx),wy=hy+Math.round(Math.sin(a*1.3)*8);r(wx,wy,many&&i<4?2:1,many&&i<4?2:1,i%2?'#E8C25A':'#2A1E10')}
}
/* barrel-walled Terfel-wood house, 32×32: k 0 house · 1 the twins' (skewed, door on the right) · 2 Corto's · 3 herders' hut */
function houseArt(X0,Y0,k,t,s){
 const sk=k===1,doc=k===2,hut=k===3,top=hut?8:2,lean=yy=>sk?Math.round((31-yy)/10):0,wx=hut?6:3,ww=hut?20:26;
 for(let yy=15;yy<31;yy++){const bw=Math.round(Math.sin((yy-15)/15*Math.PI)*2),x0=wx-bw+lean(yy),w=ww+2*bw;
  r(X0+x0,Y0+yy,w,1,'#8a6a44');for(let i=x0+3;i<x0+w-2;i+=4)r(X0+i,Y0+yy,1,1,'#6e5233');
  r(X0+x0+1,Y0+yy,1,1,'#a07c50');r(X0+x0,Y0+yy,1,1,DK);r(X0+x0+w-1,Y0+yy,1,1,DK);if(yy===19||yy===26)r(X0+x0+1,Y0+yy,w-2,1,'#5a4229')}
 r(X0+wx+lean(30),Y0+30,ww,1,DK);r(X0+2,Y0+31,28,1,'rgba(0,0,0,.25)');
 const dx=(sk?18:hut?14:13)+lean(25);
 r(X0+dx-1,Y0+21,8,10,'#5a4229');r(X0+dx,Y0+22,6,8,'#2A1E16');r(X0+dx,Y0+22,6,1,'#3A2A1E');
 if(NIGHT()&&!hut&&(s%3!==0||sk))r(X0+dx+1,Y0+24,4,6,'#E8A64A');
 for(let yy=top;yy<17;yy++){const hw=Math.min(15,Math.round(1+(yy-top)*(hut?1.6:1.05))),cx=16+lean(yy)+(sk?1:0);
  r(X0+cx-hw,Y0+yy,hw*2,1,'#a3864f');for(let i=cx-hw+((yy*2+s)%3);i<cx+hw-1;i+=3)r(X0+i,Y0+yy,1,1,'#86703f');
  r(X0+cx-hw,Y0+yy,1,1,DK);r(X0+cx+hw-1,Y0+yy,1,1,DK);if(yy<top+4)r(X0+cx-1,Y0+yy,1,1,'#c2a46a')}
 r(X0+1+lean(17),Y0+17,30,1,'#5a4a2a');
 const cx=16+lean(top)+(sk?1:0),sw=Math.round(Math.sin(t/900+s));
 r(X0+cx-1,Y0+top-3,2,4,'#c2a46a');r(X0+cx-3+sw,Y0+top-2,1,3,'#c2a46a');r(X0+cx+2+sw,Y0+top-2,1,3,'#c2a46a');r(X0+cx-1,Y0+top-3,2,1,'#e0c88a');
 if(doc){r(X0+5,Y0+18,2,5,'#5E7A4A');r(X0+5,Y0+18,2,1,'#3E5A34');r(X0+9,Y0+18,2,4,'#7e3f8f');r(X0+21,Y0+20,3,8,'#8E1F1F');r(X0+21,Y0+20,3,1,'#B5524A');r(X0+25,Y0+18,2,5,'#9A8A5A')}
 if(sk){r(X0+6+lean(22),Y0+22,5,4,'#2A1E16');r(X0+6+lean(22),Y0+22,5,1,'#5a4229');if(NIGHT())r(X0+7+lean(22),Y0+23,3,2,'#E8A64A')}
}
function stallArt(X0,Y0,fest){
 r(X0+2,Y0+2,2,13,'#5a4229');r(X0+28,Y0+2,2,13,'#5a4229');
 if(fest){for(let i=0;i<32;i+=4)r(X0+i,Y0+1,4,5,(i/4)%2?'#e8c25a':'#7e3f8f');r(X0,Y0+5,32,1,'#5b2a6e');for(let i=1;i<32;i+=4)r(X0+i,Y0+6,2,1,'#7e3f8f')}
 else{r(X0+1,Y0+2,30,2,'#6e5233');r(X0+6,Y0+4,8,5,'#8A6A54');r(X0+18,Y0+4,8,6,'#7A5A44');r(X0+18,Y0+4,8,1,'#9A7A64')}
 r(X0+1,Y0+9,30,4,'#8a6a44');r(X0+1,Y0+9,30,1,'#a07c50');r(X0+1,Y0+13,30,1,DK);r(X0+3,Y0+14,26,2,'rgba(0,0,0,.2)');
 if(fest){[4,9,14].forEach(c=>{r(X0+c,Y0+7,4,2,'#E8D2A0');r(X0+c,Y0+7,4,1,'#F4E6C0');r(X0+c+1,Y0+8,2,1,'#C9A86A')});
  [20,23,26].forEach((c,i)=>{r(X0+c,Y0+3,1,6,'#C9A86A');r(X0+c-1,Y0+4+i%2,3,2,'#D98AA0');r(X0+c-1,Y0+6,3,1,'#B86A80')})}
}
const RING=[...Array(10)].map((_,i)=>{const a=(i+.5)/10*Math.PI*2;return [192+Math.round(Math.cos(a)*70)-3,160+Math.round(Math.sin(a)*38)-2]}); // Terfel stumps to sit on (Aro has no stone ring)
function bedArt(X,Y,blanket,head){r(X+2,Y,12,16,'#6e5233');r(X+3,Y,10,16,'#C9A86A');if(head){r(X+2,Y,12,2,'#5a4229');r(X+4,Y+3,8,5,'#E8DCC0');r(X+4,Y+7,8,1,'#C9B898');r(X+3,Y+10,10,6,blanket)}else{r(X+3,Y,10,14,blanket);r(X+3,Y+4,10,1,'rgba(0,0,0,.18)');r(X+2,Y+14,12,2,'#5a4229')}r(X+2,Y,1,16,DK);r(X+13,Y,1,16,DK)}
function inNight(X,Y){if(NIGHT())r(X,Y,16,16,'rgba(12,8,32,.32)')}

const TILES={
 /* ---- tree circle ---- */
 canopy:(X,Y,x,y,t)=>{leafBg(X,Y,x,y,t);nt(X,Y,.5)},
 trunk:(X,Y,x,y,t)=>{const [a,d]=blk(x,y,'Y',4,2);if(d===0)leafBg(X,Y,x,y,t);else shadeG(X,Y,x,y,t);clip(X,Y,()=>treeArt(X-a*16,Y-d*16,t));nt(X,Y,.5)},
 flare:(X,Y,x,y,t)=>{const [a]=blk(x,y,'y',4,1);shadeG(X,Y,x,y,t);clip(X,Y,()=>treeArt(X-a*16,Y-32,t));nt(X,Y,.55)},
 shade:(X,Y,x,y,t)=>{shadeG(X,Y,x,y,t);nt(X,Y)},
 earth:(X,Y,x,y)=>{earth(X,Y,x,y);nt(X,Y)},
 gather:(X,Y,x,y,t)=>{r(X,Y,16,16,'#A88C62');const h=hash(x,y);r(X+(h%13)+1,Y+(h%11)+2,1,1,'#B89C70');r(X+((h*7)%13)+1,Y+((h*3)%12)+2,1,1,'#98805A');
  RING.forEach(([sx,sy])=>{const dx=sx-x*16,dy=sy-y*16;if(dx>-6&&dx<16&&dy>-5&&dy<16){r(X+dx,Y+dy+5,7,1,'rgba(0,0,0,.25)');r(X+dx,Y+dy+1,7,4,'#6e5233');r(X+dx,Y+dy,7,2,'#a07c50');r(X+dx+2,Y+dy,3,1,'#C9A86A');r(X+dx+3,Y+dy+1,1,1,'#8a6a44');r(X+dx+5,Y+dy+2,1,3,'#5a4229');r(X+dx,Y+dy+4,7,1,DK)}});
  if(E13()&&y===7){r(X,Y+2,16,1,'#5a4229');for(let i=0;i<16;i+=4){r(X+i+1,Y+3,3,1,['#7e3f8f','#e8c25a','#B5524A'][(x+i/4)%3]);r(X+i+2,Y+4,1,1,['#7e3f8f','#e8c25a','#B5524A'][(x+i/4)%3])}}
  nt(X,Y)},
 house:(X,Y,x,y,t)=>{cg(X,Y,x,y,t);const c=at(x,y),hut=c==='U',[a,d]=hut?blk(x,y,'U',2,2):[blk(x,y,c,2,1)[0],c==='H'?0:1];clip(X,Y,()=>houseArt(X-a*16,Y-d*16,hut?3:0,t,x-a+y*7));nt(X,Y)},
 twins:(X,Y,x,y,t)=>{earth(X,Y,x,y);const c=at(x,y),[a]=blk(x,y,c==='h'?'h':'aD',2,1);clip(X,Y,()=>houseArt(X-a*16,Y-(c==='h'?0:16),1,t,3));nt(X,Y)},
 doctor:(X,Y,x,y,t)=>{shadeG(X,Y,x,y,t);const c=at(x,y),[a]=blk(x,y,c,2,1);clip(X,Y,()=>houseArt(X-a*16,Y-(c==='K'?0:16),2,t,5));nt(X,Y)},
 hearth:(X,Y,x,y,t)=>{shadeG(X,Y,x,y,t);[[1,9],[4,12],[9,13],[13,10],[12,6],[2,5]].forEach(([a,c])=>{r(X+a,Y+c,3,2,'#6E6B62');r(X+a,Y+c,3,1,'#8d8a80')});r(X+5,Y+8,6,4,'#2A2220');
  if(!E13()){r(X+6,Y+9,1,1,'#5a4a40');r(X+9,Y+10,1,1,'#5a4a40')}nt(X,Y)},
 stall:(X,Y,x,y,t)=>{cg(X,Y,x,y,t);const [a]=blk(x,y,'s',2,1);clip(X,Y,()=>stallArt(X-a*16,Y,E13()));nt(X,Y)},
 lamp:(X,Y,x,y,t)=>{cg(X,Y,x,y,t);nt(X,Y);const n=NIGHT(),w=n?'#3a2a20':'#6e5233';r(X+3,Y+14,6,2,'rgba(0,0,0,.2)');r(X+5,Y+2,2,13,w);r(X+5,Y+2,6,1,w);r(X+9,Y+3,1,2,w);
  if(n){const fl=(Math.sin(t/170+x*3)+1)/2;g.fillStyle=`rgba(232,166,74,${.18+fl*.12})`;g.beginPath();g.arc(X+9.5,Y+8,6.5,0,7);g.fill();r(X+8,Y+5,3,5,'#E8A64A');r(X+9,Y+6,1,3,'#FFE2A0')}
  else{r(X+8,Y+5,3,5,'#C9B26A');r(X+8,Y+5,3,1,'#a3864f');r(X+8,Y+9,3,1,'#86703f')}},
 hedge:(X,Y,x,y,t)=>{r(X,Y,16,16,'#1F2E26');const h=hash(x,y);
  [[1,1,'#2E4A3A'],[8,0,'#3E5E44'],[4,6,'#2E4A3A'],[10,8,'#3E5E44'],[0,11,'#3E5E44'],[7,12,'#2E4A3A']].forEach(([a,c,col])=>{const xx=(a+h)%11;r(X+xx,Y+c,6,5,col);r(X+xx+1,Y+c,3,1,'#5E7E54');r(X+xx,Y+c+4,6,1,'#18241E')});
  if(h%3===0){r(X+(h%11)+2,Y+(h%9)+3,2,4,'#5b2a6e');r(X+(h%11)+2,Y+(h%9)+3,1,2,'#9a5aa8')}nt(X,Y)},
 path:(X,Y,x,y,t)=>{earth(X,Y,x,y);r(X,Y+4,16,8,'#B39466');r(X,Y+4,16,1,'#C4A57A');r(X+3,Y+7,2,1,'#9A7E56');r(X+10,Y+9,2,1,'#9A7E56');if(y%2)r(X+12,Y+5,2,2,'#8d8a80');nt(X,Y)},
 fire:(X,Y,x,y,t)=>{earth(X,Y,x,y);nt(X,Y,.4);[[2,10],[6,12],[10,12],[13,9],[3,6],[11,5]].forEach(([a,c])=>{r(X+a,Y+c,3,2,'#6E6B62');r(X+a,Y+c,3,1,'#8d8a80')});
  r(X+5,Y+11,6,1,'#3a2a20');r(X+4,Y+10,8,1,'#5a3a20');const k=Math.floor(t/120),fh=[6,8,7,9,6][k%5];
  r(X+6,Y+11-fh,4,fh,'#E8962A');r(X+7,Y+13-fh,2,fh-2,'#F7D154');r(X+5,Y+8,1,3,'#D2533F');r(X+10,Y+7+(k%2),1,3,'#D2533F');
  g.fillStyle='rgba(232,150,42,.15)';g.beginPath();g.arc(X+8,Y+8,8,0,7);g.fill()},
 oven:(X,Y,x,y,t)=>{earth(X,Y,x,y);r(X+1,Y+6,14,9,'#9A6440');r(X+2,Y+4,12,2,'#9A6440');r(X+4,Y+3,8,1,'#9A6440');r(X+4,Y+3,6,1,'#B8805A');r(X+2,Y+4,3,2,'#B8805A');r(X+1,Y+6,2,7,'#B8805A');r(X+13,Y+6,2,8,'#7A4A2E');r(X+1,Y+14,14,1,DK);
  const fl=Math.floor(t/150)%3;r(X+5,Y+9,6,5,'#2A1E16');r(X+6,Y+11,4,3,['#E8962A','#D2533F','#F7D154'][fl]);
  if(!NIGHT()){const k=(t/90)%18;r(X+11+Math.round(Math.sin(k/3)),Y+2-(k/6|0),2,2,'rgba(220,214,200,.5)')}nt(X,Y)},
 terminal:(X,Y,x,y,t)=>{(y<=6&&ZID==='circle'?shadeG:earth)(X,Y,x,y,t);nt(X,Y);const due=state&&dueWords().length>0,p=(Math.sin(t/400)+1)/2;
  if(due){g.fillStyle=`rgba(232,244,255,${.14+p*.22})`;g.beginPath();g.arc(X+8,Y+8,8,0,7);g.fill()}
  r(X+3,Y+13,10,3,'#46424E');r(X+4,Y+2,8,12,'#5E5A6A');r(X+5,Y+1,6,1,'#5E5A6A');r(X+4,Y+2,2,12,'#7E7A8E');r(X+5,Y+1,2,1,'#8E8A9E');r(X+11,Y+3,1,11,'#46424E');r(X+4,Y+1,1,1,DK);r(X+11,Y+1,1,1,DK);
  const c=due?`rgba(232,244,255,${.65+p*.35})`:'#3E3A48';[[7,4],[8,4],[9,5],[9,6],[8,7],[7,7],[6,6],[6,5],[7,9],[8,10],[7,11],[8,12]].forEach(([a,cc])=>r(X+a,Y+cc,1,1,c));
  if(due)r(X+7,Y+5,2,2,'#FFFFFF');if(hash(x,y)%2)r(X+10,Y+12,2,2,'#4E6A3E')},
 /* ---- hill fields ---- */
 wild:(X,Y,x,y,t)=>{r(X,Y,16,16,'#141C1E');const h=hash(x,y);
  [[h%5,'#2A2230'],[(h%5)+8,'#241E2A']].forEach(([tx,c])=>{r(X+tx,Y,4,16,c);r(X+tx,Y,1,16,'#3A3040');for(let j=h%4;j<16;j+=4)r(X+tx+1,Y+j,2,1,'#1A1420')});
  const sw=Math.round(Math.sin(t/1500+x*.6));r(X+((h*3)%10)+sw,Y+((h*7)%8),6,4,'#2E4A3A');r(X+((h*3)%10)+sw,Y+((h*7)%8),6,1,'#3E5E44');r(X+((h*5)%10)-sw,Y+((h*11)%9)+3,5,3,'#3E2A4E');r(X+((h*5)%10)-sw+1,Y+((h*11)%9)+3,2,1,'#5b2a6e');
  const dn=at(x,y+1);if(dn&&dn!=='X'&&dn!=='E'){r(X,Y+12,16,4,'#1F2E26');for(let i=0;i<16;i+=3)r(X+i,Y+11+(i%2),2,2,'#2E4A3A')}
  const up=at(x,y-1);if(up&&up!=='X'&&up!=='E'){r(X,Y,16,3,'#2E4A3A');for(let i=1;i<16;i+=4)r(X+i,Y+2,2,2,'#3E2A4E')}
  nt(X,Y,.55)},
 gap:(X,Y,x,y,t)=>{r(X,Y,16,16,'#0d1420');r(X+4,Y,8,16,'#1d2b2a');r(X+5,Y,6,5,'#6A5440');r(X+6,Y+5,4,5,'#3A2E2A');r(X+7,Y+10,2,4,'#24201E');r(X,Y,3,16,'#2A2230');r(X+13,Y,3,16,'#241E2A');r(X+1,Y,1,16,'#3A3040');nt(X,Y,.5)},
 crop:(X,Y,x,y,t)=>{r(X,Y,16,16,'#7A6044');r(X,Y+6,16,1,'#664F38');r(X,Y+14,16,1,'#664F38');
  for(let i=1;i<16;i+=5){const sw=Math.round(Math.sin(t/700+x+i)*.8);[4,12].forEach(c=>{r(X+i,Y+c-2,1,4,'#4E8A5A');r(X+i+sw-1,Y+c-4,3,2,(x+y+i)%3?'#7E5A9E':'#5E8A4A');r(X+i+sw,Y+c-4,1,1,'#A27ABE')})}nt(X,Y)},
 weed:(X,Y,x,y,t)=>{r(X,Y,16,16,'#7A6044');r(X,Y+6,16,1,'#664F38');const h=hash(x,y);
  for(let i=0;i<4;i++){const a=(h*(i+2))%13+1,c=(h*(i+5))%9+5;r(X+a,Y+c-4,1,5,'#C9C87A');r(X+a-1,Y+c-2,1,2,'#B8B868');r(X+a+1,Y+c-3,1,2,'#B8B868');r(X+a,Y+c-5,1,1,'#B84A3A')}nt(X,Y)},
 terrace:(X,Y,x,y)=>{r(X,Y,16,4,'#7A6044');r(X,Y+3,16,1,'#5a4630');r(X,Y+4,16,12,'#5E5B52');
  for(let j=0;j<3;j++){const o=(j%2)*4+(x%2)*2;for(let i=-o;i<16;i+=8){r(X+i,Y+4+j*4,7,3,'#8d8a80');r(X+i,Y+4+j*4,7,1,'#B0ADA2')}}r(X,Y+15,16,1,'#3E3B34');nt(X,Y)},
 steps:(X,Y,x,y)=>{r(X,Y,16,16,'#7A6044');for(let j=0;j<4;j++){r(X+1,Y+j*4,14,3,'#9E9B90');r(X+1,Y+j*4,14,1,'#C0BDB2');r(X+1,Y+j*4+3,14,1,'#5E5B52')}r(X,Y,1,16,'#5E5B52');r(X+15,Y,1,16,'#5E5B52');nt(X,Y)},
 berry:(X,Y,x,y,t)=>{const fld=at(x-1,y)==='u'||at(x,y+1)==='u'||at(x,y-1)==='X';(fld?TILES.crop:earth)(X,Y,x,y,t);const h=hash(x,y);
  r(X+2,Y+14,12,2,'rgba(0,0,0,.25)');[[4,1,8],[2,2,12],[1,3,14],[1,4,14],[0,5,16],[0,6,16],[0,7,16],[0,8,16],[1,9,14],[1,10,14],[2,11,12],[3,12,10],[5,13,6]].forEach(([a,c,w])=>{r(X+a,Y+c,w,1,'#5E1A1E');if(w>4)r(X+a+1,Y+c,w-2,1,c<9?'#9E2B2B':'#7E2226')});
  [[4,2,3],[9,3,3],[2,5,3],[7,6,4],[11,7,3],[4,9,3]].forEach(([a,c,w])=>{r(X+a,Y+c,w,1,'#C8463A');r(X+a+1,Y+c+1,w-1,1,'#B23A32')});r(X+5,Y+2,1,1,'#E8705A');
  [[3,9],[8,11],[12,8],[6,6]].forEach(([a,c],i)=>{if((h+i)%4){r(X+a,Y+c,2,2,'#5b2a6e');r(X+a,Y+c,1,1,'#9a5aa8')}});if(!fld)nt(X,Y)},
 root:(X,Y,x,y,t)=>{earth(X,Y,x,y);const [a,d]=blk(x,y,'Q',3,2),ox=a*16,oy=d*16;
  for(let j=0;j<16;j++)for(let i=0;i<16;i++){const dx=ox+i-24,dy=oy+j-29,dd=Math.sqrt(dx*dx+dy*dy);
   if(dy<=1&&dd>=12&&dd<=21){const ang=Math.atan2(dy,dx),seg=((ang+Math.PI)*7)%1;let c=dd>19.6?'#3a2c22':dd<13.6?'#6A5440':'#4a3a2e';if(seg<.1)c='#2E241C';else if(seg<.2&&dd<19)c='#5E4A3A';r(X+i,Y+j,1,1,c)}}
  if(d===1){if(a===0)r(X+2,Y+13,10,3,'#6A5440');if(a===2)r(X+4,Y+13,10,3,'#6A5440')}nt(X,Y)},
 trough:(X,Y,x,y,t)=>{earth(X,Y,x,y);r(X+1,Y+6,14,8,'#6e5233');r(X+1,Y+6,14,1,'#8a6a44');r(X+2,Y+7,12,4,'#3E6E8A');const o=Math.floor(t/500)%3;r(X+3+o*3,Y+8,3,1,'#9FD7E8');r(X+1,Y+13,14,1,DK);r(X+2,Y+14,2,2,'#5a4229');r(X+12,Y+14,2,2,'#5a4229');nt(X,Y)},
 stones:(X,Y,x,y)=>{earth(X,Y,x,y);[[2,8,6,'#8d8a80'],[7,10,6,'#7E7B72'],[5,5,5,'#9E9B90'],[10,6,4,'#8d8a80']].forEach(([a,c,w,col])=>{r(X+a,Y+c,w,4,col);r(X+a,Y+c,w,1,'#C0BDB2');r(X+a,Y+c+4,w,1,'rgba(0,0,0,.25)')});nt(X,Y)},
 /* ---- the twins' house (inside) ---- */
 hwall:(X,Y,x,y)=>{r(X,Y,16,16,'#3a2a1e');for(let i=1;i<16;i+=4)r(X+i,Y,1,16,'#2A1E16');if(y===MH-1){r(X,Y,16,7,'#6e5233');r(X,Y,16,1,'#8a6a44');for(let i=2;i<16;i+=4)r(X+i,Y+1,1,6,'#5a4229')}inNight(X,Y)},
 bwall:(X,Y,x,y,t)=>{const c=Math.abs(x-5.5)/6;r(X,Y,16,16,'#8a6a44');for(let i=2;i<16;i+=4)r(X+i,Y,1,16,'#6e5233');r(X,Y,16,16,`rgba(30,18,10,${c*.45})`);r(X,Y+4,16,1,'#5a4229');r(X,Y+11,16,1,'#5a4229');r(X,Y+14,16,2,'#3a2a1e');
  if(x===3){r(X+4,Y+2,2,6,'#5E7A4A');r(X+8,Y+2,2,5,'#7e3f8f');r(X+3,Y+1,8,1,'#5a4229')}
  if(x===8){r(X+2,Y+7,12,1,'#5a4229');r(X+4,Y+4,4,3,'#C9A86A');r(X+9,Y+5,3,2,'#B07A4E')}
  if(x===6){r(X+7,Y,1,4,'#3a2a1e');r(X+6,Y+4,3,3,NIGHT()?'#E8A64A':'#C9B26A');if(NIGHT()){g.fillStyle='rgba(232,166,74,.18)';g.beginPath();g.arc(X+7.5,Y+6,7,0,7);g.fill()}}
  if(!NIGHT()&&x===1)inNight(X,Y);if(NIGHT()&&x!==6)inNight(X,Y)},
 floor:(X,Y,x,y)=>{r(X,Y,16,16,'#7E6246');const h=hash(x,y);r(X+(h%12)+2,Y+(h%10)+3,2,1,'#6E5238');if(x>=3&&x<=7&&y>=4&&y<=7){r(X,Y,16,16,'#A68A5C');for(let j=1;j<16;j+=3)r(X,Y+j,16,1,'#8E7448')}inNight(X,Y)},
 bedM:(X,Y,x,y)=>{TILES.floor(X,Y,x,y);bedArt(X,Y,'#7e3f8f',1);inNight(X,Y)},
 bedMf:(X,Y,x,y)=>{TILES.floor(X,Y,x,y);bedArt(X,Y,'#7e3f8f',0);r(X+4,Y+6,8,1,'#9a5aa8');inNight(X,Y)},
 bedH:(X,Y,x,y)=>{TILES.floor(X,Y,x,y);bedArt(X,Y,'#5E6A44',1);inNight(X,Y)},
 bedHf:(X,Y,x,y)=>{TILES.floor(X,Y,x,y);bedArt(X,Y,'#5E6A44',0);r(X+4,Y+2,8,4,'#6E5A44');r(X+4,Y+2,8,1,'#8A7658');r(X+5,Y+7,6,3,'#7A6A52');inNight(X,Y)},
 hearthIn:(X,Y,x,y,t)=>{TILES.floor(X,Y,x,y);r(X+1,Y+3,14,12,'#6E6B62');r(X+1,Y+3,14,1,'#9E9B90');r(X+3,Y+6,10,7,'#2A2220');const k=Math.floor(t/130)%4;r(X+5,Y+9-(k%2),6,4+(k%2),'#E8962A');r(X+6,Y+10,4,3,'#F7D154');r(X+4,Y+4,8,3,'#5A3A2A');r(X+4,Y+4,8,1,'#7A5038');
  g.fillStyle=`rgba(232,150,42,${NIGHT()?.22:.1})`;g.beginPath();g.arc(X+8,Y+10,10,0,7);g.fill()},
 table:(X,Y,x,y)=>{TILES.floor(X,Y,x,y);const [a,d]=blk(x,y,'t',2,2);const ox=X-a*16,oy=Y-d*16;clip(X,Y,()=>{r(ox+2,oy+4,28,22,'#6e5233');r(ox+2,oy+4,28,2,'#8a6a44');r(ox+2,oy+26,28,2,'#4a3828');r(ox+4,oy+28,3,3,'#4a3828');r(ox+25,oy+28,3,3,'#4a3828');
  r(ox+7,oy+9,7,4,'#C9A86A');r(ox+7,oy+9,7,1,'#E0C88A');r(ox+18,oy+12,8,5,'#2A1E16');r(ox+19,oy+12,6,1,'#4A3426');r(ox+10,oy+18,4,3,'#B07A4E')});inNight(X,Y)},
 jars:(X,Y,x,y)=>{TILES.floor(X,Y,x,y);[[1,6,6,'#B07A4E'],[8,4,6,'#9A6440'],[5,10,5,'#C08A5E']].forEach(([a,c,w,col])=>{r(X+a,Y+c,w,16-c-1,col);r(X+a+1,Y+c-1,w-2,1,col);r(X+a+1,Y+c,1,16-c-2,'#D8A070');r(X+a,Y+15,w,1,DK)});inNight(X,Y)},
 hdoor:(X,Y,x,y,t)=>{r(X,Y,16,16,'#2A1E16');r(X+2,Y,12,16,NIGHT()?'#141C30':'#C9A86A');r(X+2,Y,12,3,NIGHT()?'#0d1420':'#E0C88A');r(X,Y,2,16,'#6e5233');r(X+14,Y,2,16,'#6e5233')},
};
/* a few tile aliases (legend tile names) */
TILES.twinsDoor=TILES.twins;
/* decor: Terfel woodpile, alien ground plants */
TILES.wood=(X,Y,x,y)=>{earth(X,Y,x,y);r(X+1,Y+13,14,2,'rgba(0,0,0,.25)');[[1,9],[6,9],[11,9],[3,5],[8,5],[5,1]].forEach(([a,c])=>{r(X+a,Y+c,5,4,'#8a6a44');r(X+a,Y+c,5,1,'#a07c50');r(X+a+1,Y+c+1,3,2,'#C9A86A');r(X+a+2,Y+c+2,1,1,'#8a6a44');r(X+a,Y+c+3,5,1,'#5a4229')});nt(X,Y)};
TILES.plant=(X,Y,x,y,t)=>{earth(X,Y,x,y);const h=hash(x,y),sw=Math.round(Math.sin(t/900+x));[[3,10],[10,5],[8,12]].forEach(([a,c],i)=>{if((h+i)%3===2)return;r(X+a-2,Y+c,5,1,'#4E6A3E');r(X+a-1,Y+c-1,3,1,'#5E7A4A');r(X+a+sw,Y+c-4,1,4,'#4E6A3E');r(X+a-1+sw,Y+c-5,3,2,i%2?'#7e3f8f':'#9a5aa8');r(X+a+sw,Y+c-5,1,1,'#c08ad0')});nt(X,Y)};
for(const k of Object.keys(TILES)){const fn=TILES[k];TILES[k]=(X,Y,x,y,t)=>{g.save();g.beginPath();g.rect(X,Y,16,16);g.clip();fn(X,Y,x,y,t);g.restore()}}

/* ---------------- sprites ---------------- */
const px=(rows,y,x,c)=>{rows[y]=rows[y].slice(0,x)+c+rows[y].slice(x+1)};
/* humanoid generator + pixel edits (scars, ghostlight). Built lazily: the engine's humanArt exists only once it has loaded. */
function hum(L,edit,extra){let A=null;return {get art(){if(A)return A;const pal={...humanPal(L)};if(extra)extra(pal);
 const mk=(d,s)=>{const rows=humanArt(L,d,s).slice();if(edit)edit(rows,d,s);return rows};
 A={pal,down:mk('down',0),up:mk('up',0),left:mk('left',0),walk:{down:[mk('down',1),mk('down',2)],up:[mk('up',1),mk('up',2)],left:[mk('left',1),mk('left',2)]}};return A}}}
const glow=(pal,k,failing)=>Object.defineProperty(pal,k,{get(){const n=Date.now();
 if(failing){const q=(n/110|0)%9;return q<2?'#4E6A84':q===5?'#FFFFFF':'#BFE6FF'}return (Math.sin(n/320)+1)/2>.25?'#E8F4FF':'#9FC8E8'},enumerable:true});
const RED=p=>{p.R='#8E1F1F';p.r='#B5524A'};
const chin=(rows,d)=>{if(d==='down'){px(rows,7,4,'.');px(rows,7,5,'O');px(rows,7,10,'O');px(rows,7,11,'.')}};
const scar=(rows,d)=>{chin(rows,d);
 if(d==='down'){px(rows,4,9,'R');px(rows,4,10,'R');px(rows,6,9,'r');px(rows,6,10,'R');px(rows,9,12,'R');px(rows,10,12,'r');px(rows,13,10,'R');px(rows,14,10,'r')}
 if(d==='left'){px(rows,4,4,'R');px(rows,4,5,'R');px(rows,6,5,'R');px(rows,6,6,'r');px(rows,12,6,'R');px(rows,13,6,'r')}};
const cover=(rows,d)=>{for(let y=0;y<8;y++)rows[y]=rows[y].replace(/[Hh]/g,'J');
 if(d!=='up')for(const y of [6,7])rows[y]=rows[y].replace(/[SMLs]/g,'Q');
 for(let y=8;y<16;y++)rows[y]=rows[y].replace(/S/g,'q');
 if(d==='down'){px(rows,4,4,'J');px(rows,4,11,'J');px(rows,5,4,'J');px(rows,5,11,'J');px(rows,4,10,'R')}
 if(d==='left')px(rows,4,4,'R')};
const HL={hair:'#1E1A22',skin:'#C99470',shirt:'#6E7A44',pants:'#5A4632',belt:'#8a6a44',shoes:'#3A2A1E'};
const H13=hum(HL,chin),H13B=hum(HL,scar,RED);
const H16=hum({...HL,shirt:'#5E5040',pants:'#4A3E30',coat:1},(rows,d)=>{chin(rows,d);cover(rows,d)},p=>{RED(p);p.J='#5E5040';p.Q='#7A6A52';p.q='#4A3E32'});
const ML={hair:'#1E1A22',skin:'#C99470',shirt:'#8E4A6E',pants:'#5A4632',style:'long',lashes:1,lips:'#B5565E'};
const MEL13=hum(ML),MEL16=hum({...ML,shirt:'#6E3F7E',pants:'#4A3E30'});
const elected=(rows,d)=>{ // Melory after the Electors: LEFT side swollen and ridged, LEFT eye gone, pits, ghostlight in the socket
 if(d==='down'){px(rows,5,9,'Z');px(rows,5,10,'G');px(rows,4,9,'X');px(rows,4,10,'X');px(rows,4,11,'X');px(rows,6,9,'X');px(rows,6,10,'z');px(rows,6,11,'X');px(rows,5,11,'X');px(rows,7,10,'z');px(rows,3,10,'X')}
 if(d==='left'){px(rows,5,4,'G');px(rows,4,4,'X');px(rows,4,5,'X');px(rows,6,4,'X');px(rows,6,5,'z');px(rows,5,5,'Z')}};
const MELG=hum({...ML,shirt:'#4E3A5E',pants:'#3E3448',coat:1},elected,p=>{p.X='#D69C80';p.z='#7A4A40';p.Z='#1A1018';glow(p,'G')});
const sock=(rows,d,side)=>{ // one empty socket with ghostlight; side 'R' = the bearer's right eye (viewer's left)
 if(d!=='down')return;const e=side==='R'?5:9;px(rows,5,e,'Z');px(rows,5,e+1,'G');px(rows,4,e,'X');px(rows,4,e+1,'X');px(rows,6,e,'X');px(rows,6,e+1,'X')};
const ELHERN=hum({hair:'#9A9AA0',skin:'#B98462',shirt:'#6E5A3A',pants:'#4A3A2E',belt:'#5a4229',style:'bun',lashes:1,lips:'#A0605A'},(rows,d)=>sock(rows,d,'R'),p=>{p.X='#A07050';p.Z='#1A1018';glow(p,'G')});
const CORTO=hum({hair:'#D8D4CC',skin:'#B98462',shirt:'#7A3A34',pants:'#4A3A2E',style:'bald',coat:1},(rows,d)=>{
 if(d==='down'){px(rows,5,9,'G');px(rows,5,8,'X');px(rows,5,10,'X');px(rows,4,9,'X');px(rows,4,10,'x');px(rows,6,9,'x');px(rows,6,10,'X');px(rows,4,8,'X')}
 if(d==='left'){px(rows,5,4,'G');px(rows,4,4,'X');px(rows,6,4,'x');px(rows,5,5,'X')}},p=>{p.X='#C08A78';p.x='#6A3A30';glow(p,'G',1)});
const SL={hair:'#5A3A22',skin:'#D2A27A',shirt:'#7A6A4A',pants:'#4A4038',style:'spiky'};
const SETHR=hum(SL),SETHR_RED=hum(SL,(rows,d)=>{for(let y=4;y<8;y++)rows[y]=rows[y].replace(/[SsM]/g,(m,i)=>i%3?'R':'r');for(let y=8;y<12;y++)rows[y]=rows[y].replace(/S/g,'R')},RED);
const KAL13=hum({hair:'#3A2A1E',skin:'#B07A56',shirt:'#4A6A7A',pants:'#3E3A30'}),KAL16=hum({hair:'#3A2A1E',skin:'#B07A56',shirt:'#3E5A66',pants:'#3E3A30',belt:'#5a4229'});
const LIV13=hum({hair:'#7A4A2A',skin:'#D9A882',shirt:'#C9853A',pants:'#5A4A3A',style:'bob',lashes:1,lips:'#C46A70'}),LIV16=hum({hair:'#7A4A2A',skin:'#D9A882',shirt:'#A8642E',pants:'#5A4A3A',style:'long',lashes:1,lips:'#C46A70'});
const CHOG=hum({hair:'#2A2A2A',skin:'#A87654',shirt:'#7E6A3A',pants:'#3E3A30',style:'spiky'}),CHOG16=hum({hair:'#2A2A2A',skin:'#A87654',shirt:'#6A5A30',pants:'#3E3A30',belt:'#5a4229',style:'spiky'});
const BROSA=hum({hair:'#E0DCD4',skin:'#C49870',shirt:'#4E6A5A',pants:'#3E4A40',style:'bun',coat:1,lashes:1,lips:'#A0605A'},(rows,d)=>{if(d==='down'){px(rows,4,6,'X');px(rows,4,9,'X');px(rows,3,8,'X')}},p=>{p.X='#A87A5A'});
const BAKER=hum({hair:'#4A3426',skin:'#C48E66',shirt:'#D8CBB0',pants:'#5A4632',belt:'#8a6a44',beard:'#4A3426'});
const CROWD1=hum({hair:'#4A3426',skin:'#B98462',shirt:'#5E6A44',pants:'#4A3A2E',style:'bun',lashes:1,lips:'#A0605A'}),CROWD2=hum({hair:'#2A2A2A',skin:'#C48E66',shirt:'#7A5A44',pants:'#3E3A30',beard:'#2A2A2A'});
const STORY=hum({hair:'#CFCAC0',skin:'#B07A56',shirt:'#5E4A6E',pants:'#3E3448',style:'long',coat:1,lashes:1,lips:'#9A5A5A'});
const WORKER=hum({hair:'#3A2A1E',skin:'#B98462',shirt:'#8A7A4A',pants:'#4A3A2E',style:'bun',lashes:1,lips:'#A0605A'});
const HERDER=hum({hair:'#5A4636',skin:'#A87654',shirt:'#6A5A44',pants:'#3E3A30',cap:'#8a6a44'});
function kid(hair,shirt,pants,girl){ // a small child, 12×12
 const P=girl?'S':'P';
 return {pal:{O:DK,E:DK,H:hair,h:'#00000033',S:'#D2A27A',M:'#B57A66',C:shirt,c:'#00000022',P:pants,K:'#3A3540',R:'#E86D8A'},
 down:['...OOOOOO...',girl?'..OHHHHHHRO.':'..OHHHHHHO..','.OHHHHHHHHO.','.OHSSSSSSHO.','.OSSESSESSO.','.OSSSMMSSSO.','..OSSSSSSO..','..OCCCCCCO..','.OSCCCCCCSO.',girl?'.OCCCCCCCCO.':'..OCCCCCCO..',`..O${P}${P}OO${P}${P}O..`,'..OKKOOKKO..'],
 up:['...OOOOOO...',girl?'..OHHHHHHRO.':'..OHHHHHHO..','.OHHHHHHHHO.','.OHHHHHHHHO.','.OHHHHHHHHO.','.OHHHHHHHHO.','..OSSSSSSO..','..OCCCCCCO..','.OSCCCCCCSO.',girl?'.OCCCCCCCCO.':'..OCCCCCCO..',`..O${P}${P}OO${P}${P}O..`,'..OKKOOKKO..'],
 left:['...OOOOO....',girl?'..OHHHHHRO..':'..OHHHHHO...','.OHHHHHHHO..','.OSSHHHHHO..','OSESSSHHHO..','.OMSSSSHO...','..OSSSSO....','..OCCCCO....','..OCSCCO....',girl?'.OCCCCCCO...':'..OCCCCO....',`..O${P}${P}${P}${P}O....`,'..OKKOKKO...']}}
const KID={art:kid('#3A2A1E','#C9853A','#5A4632',0)};
const flick=(on,off)=>({get(){return (Date.now()/90|0)%2?on:off},enumerable:true});
/* the cauldron of boiling Severance on its fire (fired clay — Aro has no metal) */
const POT={art:{pal:Object.defineProperties({O:DK,R:'#6E1414',L:'#9A6A4A',C:'#6A4430',c:'#4A2E20',k:'#6E6B62',f:'#D2533F'},
 {q:flick('#C23B3B','#8E1F1F'),Q:flick('#8E1F1F','#C23B3B'),F:flick('#E8962A','#F7D154'),w:flick('rgba(230,220,220,.55)',null),W:flick(null,'rgba(230,220,220,.45)')}),
 down:['................','.....w....W.....','......W..w......','.....w....W.....','..OOOOOOOOOOOO..','.ORRqRRQRRqRRRO.','.OLLLLLLLLLLLLO.','OCCcCCCCCCCCcCCO','OCcCCCCCCCCCCcCO','OCcCCCCCCCCCCcCO','.OCcCCCCCCCCcCO.','..OCCCCCCCCCCO..','..kOFfOFFOfFOk..','.kkFFfFFFFfFFkk.','.kkkFFFffFFFkkk.','..kkkkkkkkkkkk..']}};
/* an Elector: finger-long, fat, bristling, loud */
const ELECTOR={art:{pal:Object.defineProperties({O:DK,A:'#3A2A12',E:'#E8C25A',B:'#C9A227',b:'#3A2A12',l:'#2A1E10',h:'#7A5A2A'},{w:flick('rgba(220,235,245,.8)',null),v:flick(null,'rgba(220,235,245,.6)')}),
 down:['................','................','.......w..w.....','......wwv.wwv...','.......vw.vw....','....OOOOOOOOO...','..hOAAOBBbBBbO..','..OEAAOBbBBbBBOh','..OAAAOBBbBBbBO.','..hOAAOBbBBbBOh.','....OOOOOOOOO...','....l.l.l.......','...l..l..l......','................','................','................']}};
/* the gourd pile by the trough */
const GOURDS={art:{pal:{O:DK,G:'#C9B26A',g:'#9E8A48',s:'#5E7A4A',B:'#8a6a44',b:'#6e5233'},
 down:['................','................','................','................','.....s....s.....','....OGO..OGO....','...OGGgOOGGgO...','..OGGGgOGGGgO...','..OgGggOOgGgsO..','...OOOO.OOOOGO..','..OBbBbBbBbBbO..','..ObBbBbBbBbBO..','..OBbBbBbBbBbO..','..ObBbBbBbBbBO..','...OOOOOOOOOO...','................']}};
/* the dark mouth of the wilds at the field's edge */
const WILDS={art:{pal:Object.defineProperties({O:'#0d1420',T:'#2A2230',t:'#3A3040',L:'#3E2A4E',l:'#5b2a6e',g:'#2E4A3A'},{e:flick('#0d1420','#0d1420')}),
 down:['.LLlLL....LlLLL.','LLgLLlL..LLlgLLL','.lLLgLLLLLgLLl..','..LL.lLLl..LL...','TtT...l.l...TtTT','TtT..........tTT','TTt..........TtT','tTT..........TTt','TtT..........tTT','TTt..........TTt','TtT..........TtT','TTt..........tTT','tTT..........TTt','TtT..........TtT','TTt..........TTt','TtTT........TTtT']}};
/* Melory in the fever: lying in bed, the left side of her face swelling */
const FEVER={art:{pal:{O:DK,H:'#1E1A22',S:'#C99470',X:'#D69C80',x:'#A85A50',e:'#3A2A2A',Z:'#2A1418',M:'#9A5A50',B:'#7e3f8f',b:'#5b2a6e',W:'#E8DCC0',w:'#C9B898',s:'#E8F4FF',K:'#B07A5A'},
 down:['................','................','..OOOOOOOOOOOO..','..OWWHHHHHHWWO..','..OWHHHHHHHHWO..','..OWHSSSSXXHWO..','..OWHSeSSZXXHO..','..OWHSSSSXXHWO..','..OWHSSMMSxHWO..','..OWwHSSSSHwWO..',
  '..OwwwOSSOwwwO..','..OBBBBBBBBBBO..','..OBbBBKBBBbBO..','..OBbBBBBBBbBO..','..OBBbBBBBbBBO..','..OBBbBBBBbBBO..','..OBBBBBBBBBBO..','..OBBBbBBbBBBO..','..OBBBbBBbBBBO..','..OBBBBBBBBBBO..',
  '..OBbBBBBBBbBO..','..OBbBBBBBBbBO..','..OBBBBBBBBBBO..','..OBBBbBBbBBBO..','..OBBBBBBBBBBO..','..OBBbBBBBbBBO..','..OBBBBBBBBBBO..','...OBBBBBBBBO...','....OOOOOOOO....','................','................','................']}};
const FEVER_G={art:{...FEVER.art,down:FEVER.art.down.map(r=>r.replace('Z','s'))}};  // after she wakes: the ghostlight in the empty left socket
/* night: the player's sprite in moonless dark */
const nightCache=new Map();
const dim=c=>{if(typeof c!=='string'||c[0]!=='#')return c;const n=parseInt(c.slice(1),16);return `rgb(${(n>>16&255)*.42+6|0},${(n>>8&255)*.42+8|0},${(n&255)*.5+26|0})`};
function nightLook(L){let N=nightCache.get(L);if(!N){const A=L.art,pal={};for(const k in A.pal)pal[k]=dim(A.pal[k]);N={art:{...A,pal}};nightCache.set(L,N)}return N}
const PLAYER=()=>{const L=!f().burned?H13:E13()?H13B:H16;return NIGHT()&&ZID!=='home'?nightLook(L):L};

/* ---------------- zones ---------------- */
/* things whose line depends on story flags: pick a variant by tile position here, so the fn always returns one string */
const pk=fn=>(x,y)=>{const v=fn(x,y);return Array.isArray(v)?v[(x*7+y*13)%v.length]:v};
const ZONES={
 circle:{name:'아로 · 나무 광장',reg:'ARO',outdoor:1,
  legend:{'P':{tile:'canopy'},'Y':{tile:'trunk'},'y':{tile:'flare'},',':{tile:'shade',walk:1},'.':{tile:'earth',walk:1},'g':{tile:'gather',walk:1},
   'H':{tile:'house'},'A':{tile:'house'},'h':{tile:'twins'},'a':{tile:'twins'},'D':{tile:'twinsDoor',walk:1},'K':{tile:'doctor'},'k':{tile:'doctor'},
   'f':{tile:'hearth',walk:1},'s':{tile:'stall',over:1},'l':{tile:'lamp'},'w':{tile:'hedge'},'>':{tile:'path',walk:1},'b':{tile:'fire'},'O':{tile:'oven'},'T':{tile:'terminal'},'x':{tile:'wood'},'p':{tile:'plant',walk:1}},
  map:[
"PPPPPPPPPPPPPPPPPPPPPPPPPP",
"PPPPPPPPPPPYYYYPPPPPPPPPPP",
"w,,,,,,,,,,YYYY,,,,,,,,,,w",
"w,KK,,,,,,,yyyy,,,,,,,HH,w",
"w,kk,,,,T,,,,,,,,,,,,,AA,w",
"w,,,,,,,,,,f,,,,,,,,,,,,,w",
"w,,,,,ss,,,,,,,,,,ss,,,,,w",
"w.hh...gggggggggg....HH..w",
"w.aD...gggggggggg....AA..w",
"w......gggggggggg.....l..w",
"w.l....gggggggggg........>",
"w......gggggggggg........>",
"w.HH...gggggggggg.....HH.w",
"w.AA..x..b.....pp.....AA.w",
"w.p.....l.......l...pp...w",
"w...HH.....HHO.....HH....w",
"w.p.AA.....AA..x...AA..p.w",
"wwwwwwwwwwwwwwwwwwwwwwwwww"],
  rooms:[[1,2,24,6,'아로 · 큰 나무 아래'],[7,7,16,12,'아로 · 모임 터'],[1,13,24,16,'아로 · 아랫마을']],
  warps:{'3,8':{to:'home',x:5,y:8,dir:'up'},
   '25,10':{to:'fields',x:1,y:7,dir:'right',lock:()=>E13()&&'오늘은 축제예요. 밭에는 아무도 없어요.'},
   '25,11':{to:'fields',x:1,y:7,dir:'right',lock:()=>E13()&&'오늘은 축제예요. 밭에는 아무도 없어요.'}},
  spots:{
   get '11,3'(){return f().waiting&&!f().stung?'벌집이 크게 윙윙거려요. 큰 벌들이 깨어나고 있어요.':'나무 가운데에 {벌집|벌집}이 있어요. 작은 벌들이 들락날락해요.'},
   '13,3':'아로의 큰 나무. 한쪽으로 크게 기울었어요. 긴 보라색 잎이 하늘을 가려요.',
   get '2,4'(){return E13()?'코르토의 집. 약초 냄새가 나요. 문 옆 천이 검붉게 물들었어요.':f().gourd?'코르토의 집. 이제 아무도 없어요.':'코르토의 집. 안에서 아무 소리도 안 나요.'},
   '2,8':'우리 쌍둥이 집. 조금 삐뚤어졌어요. 그래도 우리 집이에요.',
   get '6,6'(){return E13()?'축제 가게. {미클 케이크|미클 케이크}가 쌓여 있어요.':'빈 가게. 가죽을 말리고 있어요.'},
   get '18,6'(){return E13()?'{슈거웜 꼬치|슈거웜 꼬치}! 달콤한 냄새가 나요.':'빈 가게. 가죽을 말리고 있어요.'},
   get '13,15'(){return '빵 굽는 화덕. '+(E13()?'축제 빵 냄새가 가득해요.':'오늘도 빵이 구워져요.')},
   '6,13':'{테르펠|테르펠} 장작이 쌓여 있어요.','15,16':'{테르펠|테르펠} 장작. 겨울 준비예요.','20,16':'통 모양의 집. {테르펠|테르펠} 나무로 지었어요. 지붕 꼭대기에 술이 달렸어요.',
   get '9,13'(){return NIGHT()?'모닥불이 거의 꺼졌어요.':'모닥불. 할머니들이 옛날이야기를 해요.'},
   get '22,9'(){return NIGHT()?(f().fled?'사람들이 등불을 켜요. 나무 그늘 때문에 별이 안 보여요.':'등불이 꺼져 있어요. 나무 그늘 때문에 별이 안 보여요.'):'등불 기둥. 모임 날에 켜요.'}},
  things:{ // a line for every object tile; exact spots above win
   'P':pk(()=>NIGHT()?['잎 때문에 별이 하나도 안 보여요.',f().fled?'머리 위가 캄캄해요. 마을이 시끄러워요.':'머리 위가 캄캄해요. 잎만 바스락거려요.']
    :['길고 두꺼운 보라색 잎이에요. 가죽처럼 질겨요.','잎이 하늘을 다 가렸어요. 그늘이 시원해요.','바람이 불면 잎이 사각사각 소리를 내요.']),
   'Y':pk((x,y)=>NIGHT()?'큰 나무가 어둠 속에 서 있어요.'
    :y===1&&x>=13?(f().waiting&&!f().stung?'{벌집|벌집}이 윙윙 울려요. 안에서 뭔가 깨어나요.':'높은 가지 사이에 {벌집|벌집}이 있어요. 땅에서는 잘 안 보여요.')
    :y===1?'나무가 두 갈래로 갈라졌어요. 가지가 아주 높아요.':['나무줄기가 아주 굵어요. 껍질이 거칠어요.','나무가 한쪽으로 크게 기울었어요. 그래도 안 넘어져요.']),
   'y':'나무 밑동이에요. 마디진 뿌리가 땅을 꽉 잡았어요.',
   'w':pk(()=>NIGHT()?'덤불이 바람에 바스락거려요.':['빽빽한 덤불이에요. 지나갈 수 없어요.','덤불에 작은 보라색 싹이 났어요.','가시는 없어요. 그래도 너무 빽빽해요.']),
   'H':pk(()=>NIGHT()?'지붕 위가 캄캄해요.':['지붕이 뾰족하게 솟았어요. 꼭대기에 술이 있어요.','지붕 꼭대기 술이 바람에 살랑살랑 흔들려요.']),
   'A':pk(()=>NIGHT()?(f().fled?['문틈으로 불빛이 새어 나와요. 다들 깼어요.','문이 열려요. 사람들이 밖으로 나와요.']:['집집마다 불이 꺼졌어요. 다들 자요.','밤이에요. 집집마다 문이 닫혔어요.'])
    :E13()?['통처럼 불룩한 나무 벽이에요.','다들 축제에 나갔어요. 집이 조용해요.']
    :['통처럼 불룩한 나무 벽이에요.','문이 닫혀 있어요. 아무도 저를 안 불러요.']),
   'h':pk(()=>f().fled?'우리 집이에요. 다시 올 수 있을까요?':'우리 집 지붕이에요. 꼭대기 술도 조금 삐뚤어졌어요.'),
   'K':pk(()=>E13()?'코르토의 집이에요. 집 안에서 약초 냄새가 나요.':f().gourd?'주인 없는 집이에요. 약초가 다 말라 버렸어요.':'코르토의 집이에요. 이제 약초 냄새가 안 나요.'),
   'k':'문 옆에 검붉게 물든 천이 있어요. 만지면 안 돼요.',
   's':pk(()=>NIGHT()?'빈 가게예요. 아무도 없어요.':E13()?'보라색, 노란색 줄무늬 천막이에요. 축제 날이에요.':'가게 기둥에 가죽이 걸려 있어요. 냄새가 나요.'),
   'l':pk(()=>NIGHT()?(f().fled?'사람들이 하나둘 등불을 켜요.':'등불이 꺼져 있어요. 사방이 캄캄해요.'):['등불 기둥이에요. 모임 날에만 켜요.','등불 기둥이에요. 지금은 꺼져 있어요.'])},
  npcs:['elhern','sethr','corto','pot','crowd1','crowd2','mel13','kalton','livvi','chogger13','baker','story','brosa','mourn1','mourn2','kid','elector','melTree']},
 fields:{name:'아로 · 언덕 밭',reg:'ARO · HILL FIELDS',outdoor:1,
  legend:{'X':{tile:'wild'},'u':{tile:'crop',walk:1},'v':{tile:'weed',walk:1},'-':{tile:'terrace'},':':{tile:'steps',walk:1},'.':{tile:'earth',walk:1},'<':{tile:'path',walk:1},
   'W':{tile:'trough'},'o':{tile:'stones'},'R':{tile:'berry'},'Q':{tile:'root'},'U':{tile:'house'},'E':{tile:'gap',walk:1},'p':{tile:'plant',walk:1}},
  map:[
"XXXXXXXXXXXXXXXXXXXXXXXXXX",
"XuuuuuuuuuuuuuuvvuuuuuRRXX",
"XuuuuvvuuuuuuuuuuuuuuuRRXX",
"X-----:--------------:--XX",
"XuuuuuuuuuuvvuuuuuuuuuuuXX",
"XuuuuuuuuuuuuuuuuuuuuuuuuX",
"X-------:-----------:----X",
"<........................X",
"<.....W.....o.......QQQ..X",
"X.RR................QQQ..X",
"X.RR...p......UU....p....X",
"X.............UU.....UU..X",
"X..p....o...p........UU..X",
"X..R.....p.........o.....X",
"XXXXXXXXXXXXEXXXXXXXXXXXXX",
"XXXXXXXXXXXXXXXXXXXXXXXXXX"],
  rooms:[[1,1,24,5,'아로 · 윗밭'],[1,7,24,13,'아로 · 언덕 아래'],[12,14,12,14,'숲 가장자리']],
  warps:{'0,7':{to:'circle',x:24,y:10,dir:'left'},'0,8':{to:'circle',x:24,y:10,dir:'left'}},
  spots:{'2,9':'빨간 잎 덤불. 줄기 밑에 보라색 열매가 달렸어요. 달콤하지만 저는 못 먹어요.','22,1':'빨간 잎 덤불. 열매 냄새가 달아요.',
   '20,8':'땅에서 솟은 거대한 뿌리. 마디마디 고리처럼 휘었어요.','14,10':'{에르티비스트|에르티비스트} 목동들의 오두막.',
   '12,8':'밭에서 골라낸 돌이 쌓여 있어요.','19,13':'밭에서 골라낸 돌. 손바닥이 아파요.','6,8':'물통. 물이 시원해 보여요.','5,14':'숲. 나무껍질에 비늘이 있어요. 안은 아주 캄캄해요.'},
  things:{
   'X':pk(()=>NIGHT()?['숲이 캄캄해요. 아무것도 안 보여요.','숲에서 나무가 삐걱거려요.']
    :['숲이 밭 바로 옆까지 와 있어요.','덩굴이 엉켜서 못 지나가요.','나무 사이가 어두워요. 들어가고 싶지 않아요.']),
   '-':pk(()=>NIGHT()?'돌담이 차가워요.':['돌을 쌓아서 밭 둑을 만들었어요.','언덕이 가팔라서 밭이 계단처럼 층층이에요.','돌 틈에 작은 풀이 자라요.']),
   'R':pk(()=>NIGHT()?'덤불에서 단 냄새가 나요.':['열매를 누르면 보라색 즙이 나와요.','세서가 먹은 열매도 이거였어요.','빨간 잎 덤불이에요. 배가 고파도 참아요.']),
   'U':pk(()=>NIGHT()?'오두막에 불이 꺼졌어요.':['오두막 문이 낮아요. 허리를 숙여야 해요.','오두막 옆에서 가축 냄새가 나요.']),
   'Q':['뿌리가 고리처럼 땅 위로 솟았어요.','마디마다 껍질이 두꺼워요. 뿌리가 제 키보다 높아요.'],
   'o':'밭에서 골라낸 돌이에요. 작은 돌탑 같아요.'},
  npcs:['chogger','worker','hand1','hand2','gourds','herder','edge']},
 home:{name:'쌍둥이 집',reg:'ARO · HOME',
  legend:{'#':{tile:'hwall'},'S':{tile:'bwall'},',':{tile:'floor',walk:1},'b':{tile:'bedH'},'n':{tile:'bedHf'},'B':{tile:'bedM'},'m':{tile:'bedMf',walk:1},
   'e':{tile:'hearthIn'},'t':{tile:'table'},'j':{tile:'jars'},'D':{tile:'hdoor',walk:1}},
  map:[
"############",
"#SSSSSSSSSS#",
"#b,,e,,jj,B#",
"#n,,,,,,,,m#",
"#,,,,,,,,,,#",
"#,,,tt,,,,,#",
"#,,,tt,,,,,#",
"#,,,,,,,,,,#",
"#,,,,,,,,,,#",
"#####DD#####"],
  warps:{'5,9':{to:'circle',x:3,y:9,dir:'down'},'6,9':{to:'circle',x:3,y:9,dir:'down'}},
  spots:{'1,2':'제 침대. 긴 옷하고 얼굴을 가리는 천이 놓여 있어요.','1,3':'제 침대. 긴 옷하고 얼굴을 가리는 천이 놓여 있어요.',
   get '4,2'(){return NIGHT()?'화덕 불이 작게 타요.':'화덕. 냄비에서 물이 데워져요.'},'7,2':'항아리. 곡식하고 물이 들어 있어요.','8,2':'항아리. 곡식하고 물이 들어 있어요.',
   get '4,5'(){return E13()?'탁자. 빵 부스러기가 떨어져 있어요.':'탁자. 까맣게 탄 빵 조각이 있어요.'},get '5,6'(){return E13()?'탁자. 깨끗해요.':'탁자. 까맣게 탄 빵 조각이 있어요.'},
   get '10,2'(){return f().stung&&!f().woke?'멜로리의 베개가 땀에 젖었어요.':'멜로리의 침대.'}},
  things:{
   '#':pk((x,y)=>NIGHT()?(f().fled?'벽 너머에서 사람들 목소리가 들려요.':'벽 너머가 조용해요.'):y===9?'앞벽이에요. 밖에서 발소리가 들려요.':['나무 벽이에요. 틈으로 바람이 조금 들어와요.','벽이 낡았어요. 그래도 우리 집이에요.']),
   'S':pk(x=>x===3?'벽에 마른 풀이 걸려 있어요.':x===6?(NIGHT()?'작은 등불이 방을 비춰요.':'벽에 작은 등불이 걸려 있어요.')
    :x===8?'선반에 그릇이 놓여 있어요.':['벽이 통처럼 둥글게 휘었어요.','벽 틈에 천을 끼워서 바람을 막았어요.']),
   't':['탁자예요. 빵 부스러기가 떨어져 있어요.','탁자 위에 까만 그릇이 있어요.']},
  npcs:['melHome']},
};

/* ---------------- people ---------------- */
const think='핸드리 (생각)',tale='이야기';
const NPC={
 /* ===== the tree circle ===== */
 elhern:{name:'판관 엘헌',zone:'circle',x:12,y:9,dir:'down',look:ELHERN,badge:['이웃'],
  hide:()=>NIGHT(),
  status:()=>{if(!E13())return null;if(!b('이웃'))return 'todo';if(f().burned&&!f().severed)return 'todo';if(!f().severed)return null},
  after:'아로 사람은 다 이웃이야. 이웃을 다치게 하면 안 돼.',
  script:()=>{
   if(!E13())return f().waiting?[{say:'의사가 없으면 다친 사람이 죽어. 벌써 몇 명이 죽었어.'},{who:think,say:'엘헌은 제 쪽을 한 번도 안 봐요.'}]
    :[{say:'오늘은 밭에 가야지. 다들 서둘러!'},{who:think,say:'엘헌은 제 쪽을 한 번도 안 봐요.'}];
   if(b('이웃')&&f().burned&&!f().severed)return [
    {say:'…핸드리? 다쳤구나. 조금만 참아.'},
    {say:'먼저 이 일을 끝내야 해. 아로 모두가 보고 있어.'},
    {who:'엘헌의 유령',say:'판결 확인. 단절. 지금 실행.'},
    {who:tale,say:'엘헌이 식은 {단절약|단절약}을 세서에게 발랐어요.',set:()=>{f().daubed=1}},
    {who:tale,say:'차갑고 검붉은 약이었어요. 끓일 때만 뜨거워요.'},
    {who:'세서',say:'싫어! 싫어!'},
    {say:'이제 너는 우리가 아니야.'},
    {who:think,say:'이상해요. 저한테는 세서가 똑같아 보여요.'},
    {who:tale,say:'세서는 혼자 숲으로 걸어갔어요. 아무도 따라가지 않았어요.'},
    {say:'핸드리, 코르토한테 가서 상처를 보여 줘. 큰 나무 왼쪽, 자기 집 앞에 있어.',set:()=>{f().severed=1}}];
   if(b('이웃')&&!f().severed&&!f().burned)return [{say:'코르토가 큰 나무 아래에서 {단절약|단절약}을 끓이고 있어. 가 봐.'}];
   return null},
  talk:()=>[
   {say:'왔니, 핸드리? 오늘은 축제야. 그래도 중요한 날이야.'},
   {say:'세서는 일을 안 했어. 남의 물건을 훔쳤어.'},
   {say:'그리고 브로에드의 팔을 부러뜨렸어.'},
   Q.elhern[0],
   {who:'세서',say:'내 잘못 아니야! 나도 아로 사람이야!'},
   {say:'(엘헌의 빈 눈에서 하얀 빛이 깜박여요.)'},
   {who:'엘헌의 유령',say:'{판결|판결} 확인. 단절. 오늘 실행.'},
   Q.elhern[1],
   {say:'코르토가 큰 나무 아래에서 {단절약|단절약}을 끓이고 있어. 식으면 바를 거야.',award:['이웃']}]},
 sethr:{name:'세서',zone:'circle',x:13,y:9,dir:'down',pos:()=>[13,9],
  get look(){return f().daubed?SETHR_RED:SETHR},
  hide:()=>!E13()||!!f().severed,
  talk:()=>[{say:'뭘 봐? 구경났어?'},{say:'내 잘못 아니야. 다들 나만 미워해.'},{say:'…숲에 혼자 가면 어떻게 될까?'}]},
 corto:{name:'의사 코르토',zone:'circle',x:11,y:5,dir:'left',look:CORTO,badge:['가마솥','끓이다','상처'],
  pos:()=>E13()?(f().cortoGone?[4,5]:[11,5]):[4,4],
  hide:()=>!E13()&&(!!f().gourd||NIGHT()),
  status:()=>{if(!E13())return null;if(!b('가마솥'))return 'todo';if(f().severed&&!b('상처'))return 'todo';if(!b('상처'))return null},
  after:'세라는 어디 갔지…? 아, 그래. 오래전에 갔지.',
  script:()=>{
   if(!E13())return [{say:'(코르토가 집 앞에서 멍하니 혼잣말을 해요. 벌써 일 년째 이래요.)'},{who:'코르토의 유령',say:'설치 실패. 재시작 중…'},{who:'코르토의 유령',say:'설치 실패. 재시작 중…'},{who:think,say:'아로에 의사가 없는 것과 같아요.'}];
   if(!b('가마솥'))return null;
   if(!f().burned)return [{say:'…뭐 하러 왔더라? 아, 약.'},{say:'약이 식어야 해. 식어야 발라.'}];
   if(!f().severed)return [{say:'(코르토는 혼잣말만 해요.)'},{say:'단절약은 식혀서 발라… 식혀서…'}];
   if(!b('상처'))return [
    {say:'아이고, 핸드리. 이리 와 봐라.'},
    {say:'(코르토의 손이 떨려요. 빈 눈에서 빛이 깜박깜박해요.)'},
    {who:'코르토의 유령',say:'이차 단절 시작… 오류. 오류.'},
    {say:'다리, 옆구리, 뺨, 이마… 상처가 깊구나.'},
    Q.corto2[0],
    {who:tale,w:'데다',build:['제가','가마솥을','뛰어넘다가','데었어요']},
    {say:'…세라? 세라, 어디 있어? 애가 다쳤어.'},
    {who:think,say:'세라는 코르토의 아내였어요. 아주 오래전에 죽었어요.'},
    {say:'세라… 추워.',award:['상처']},
    {who:tale,say:'한 달 뒤, 세서가 죽은 채 발견됐어요.'},
    {who:tale,say:'굶다가 빨간 잎 열매를 너무 많이 먹었어요. 배가 터져 있었어요.'},
    {who:tale,say:'그리고 저도 이상해졌어요. 고기도 열매도 못 먹었어요.'},
    {who:'삼 년 후',say:'삼 년이 지났어요. 저는 열여섯 살이 됐어요.',set:()=>{f().later=1}}];
   return null},
  talk:()=>[
   {say:'어? 핸드리구나. 가까이 오지 마라. 뜨거워.'},
   {say:'이건 {단절약|단절약}이야. 의사만 만들 수 있어.'},
   Q.corto[0],
   {say:'불을 꺼뜨리면 안 돼. 계속 끓여야 돼.'},
   Q.corto[1],
   {say:'(코르토의 빈 눈에서 빛이 깜박… 꺼졌어요.)'},
   {say:'…어디 가려고 했지? 아, 그래. 저기…'},
   {who:tale,say:'코르토는 가마솥을 두고 어디론가 걸어갔어요.',award:['가마솥','끓이다'],set:()=>{f().cortoGone=1}}]},
 pot:{name:'가마솥',zone:'circle',x:10,y:5,dir:'down',look:POT,pos:()=>[10,5],
  hide:()=>!E13(),
  status:()=>f().chase&&!f().burned?'todo':null,
  script:()=>{
   if(f().burned)return [{say:'가마솥이 아직도 끓어요. 보기만 해도 아파요.'}];
   if(!f().chase)return f().cortoGone?[{say:'코르토 할아버지가 없어요. 가마솥만 혼자 끓어요.'}]:[{say:'가마솥에서 검붉은 약이 부글부글 끓어요.'},{say:'김이 얼굴까지 올라와요. 뜨거워요.'}];
   return [
    {who:'핸드리',say:'리비! 거기 서!'},
    {who:tale,say:'사람들 사이로 빈틈이 보였어요. 저는 그쪽으로 뛰었어요.'},
    {who:tale,say:'가마솥이 보였을 때는 너무 늦었어요.'},
    {who:tale,say:'가마솥을 뛰어넘으려고 했어요. 발뒤꿈치가 가장자리에 걸렸어요.'},
    {who:tale,say:'끓는 단절약이 확 튀었어요.',set:()=>{f().burned=1}},
    {who:'핸드리',say:'아아아악!'},
    {who:tale,say:'다리, 옆구리, 뺨, 이마. 살이 불처럼 뜨거웠어요.'},
    Q.pot[0],
    {who:'리비',say:'핸드리! 누가 좀 와요!'},
    {who:'칼턴',say:'어른들! 핸드리가 데었어요!'},
    {who:tale,say:'사람들이 달려와서 저를 끌어냈어요.',go:['circle',12,11,'up']}]},
  talk:()=>[]},
 mel13:{name:'멜로리',zone:'circle',x:6,y:9,dir:'down',look:MEL13,badge:['화상','데다'],
  hide:()=>!E13()||!!f().burned,
  after:'우리는 쌍둥이야. 내가 몇 분 먼저 태어났어.',
  talk:()=>[
   {say:'핸드리! 어디 갔었어? 축제잖아!'},
   {say:'가마솥 봤어? 코르토 할아버지가 또 혼자 중얼거려.'},
   {say:'빨간 약이 펄펄 끓어. 가까이 가지 마.'},
   Q.mel13[0],
   Q.mel13[1],
   Q.mel13[2],
   {say:'칼턴이 너 찾던데. 놀아도 조심해!',award:['화상','데다']}]},
 kalton:{name:'칼턴',zone:'circle',x:10,y:6,dir:'down',
  get look(){return E13()?KAL13:KAL16},
  pos:()=>E13()?[10,6]:[19,10],
  hide:()=>NIGHT(),
  status:()=>E13()&&b('화상')&&f().cortoGone&&!f().chase?'todo':null,
  script:()=>{
   if(!E13())return [{who:think,say:'칼턴은 아무 말도 안 해요. 제 눈을 피해요.'}];
   if(f().burned)return [{say:'핸드리! 괜찮아? 어른들 불러올게!'}];
   if(f().chase)return [{say:'빨리! 리비가 가마솥 쪽으로 갔어!'}];
   if(!b('화상'))return [{say:'멜로리가 너 찾았어. 모임 터에 있어.'}];
   if(!f().cortoGone)return [{say:'코르토 할아버지가 가마솥 앞에 있어. 이따 놀자.'}];  // the chase starts only once Corto has left the pot (§I)
   return [
    {say:'핸드리! 리비 잡기 하자! 리비는 진짜 빨라.'},
    {who:'리비',say:'못 잡지롱! 메롱!'},
    {say:'리비가 가마솥 쪽으로 갔어! 빨리!',set:()=>{f().chase=1}}]},
  talk:()=>[]},
 livvi:{name:'리비',zone:'circle',x:15,y:6,dir:'down',
  get look(){return E13()?LIV13:LIV16},
  pos:()=>E13()?(f().chase?[9,6]:[15,6]):[20,14],
  hide:()=>NIGHT()||(E13()&&!!f().burned),
  script:()=>!E13()?[{say:'엄마가 너랑 말하지 말래.'},{who:think,say:'리비는 돌아서서 가 버렸어요.'}]
   :f().chase?[{say:'못 잡지롱! 여기까지 와 봐!'}]:[{say:'칼턴이 술래야. 너도 놀래?'},{say:'미클 케이크 먹었어? 오늘만 먹을 수 있어!'}],
  talk:()=>[]},
 crowd1:{name:'구경꾼',zone:'circle',x:9,y:4,dir:'right',look:CROWD1,hide:()=>!E13(),
  talk:()=>[{say:'세서가 오늘 떠난대.'},{say:'약이 언제 식을까? 빨리 끝났으면 좋겠어.'}]},
 crowd2:{name:'구경꾼',zone:'circle',x:12,y:6,dir:'up',look:CROWD2,hide:()=>!E13(),
  talk:()=>[{say:'가까이 가지 마라. 저 약은 한 방울도 몸에 묻으면 안 돼.'}]},
 chogger13:{name:'초거',zone:'circle',x:18,y:8,dir:'down',look:CHOG,
  hide:()=>!E13(),
  talk:()=>[{say:'{슈거웜 꼬치|슈거웜 꼬치} 먹었어? 진짜 달아!'},{say:'세서는 오늘 쫓겨난대. 무섭다.'}]},
 baker:{name:'빵 굽는 아저씨',zone:'circle',x:14,y:15,dir:'down',look:BAKER,badge:['타다'],
  hide:()=>NIGHT(),
  status:()=>{if(E13())return null;if(!b('타다'))return b('두드러기')?'todo':null},
  after:'(아저씨는 핸드리를 안 보고 빵만 봐요.) 탄 빵은 저기 있어.',
  script:()=>{
   if(E13())return [{say:'축제 빵이야! {미클 케이크|미클 케이크}도 있어!'},{say:'세서 일 때문에 다들 조용하네.'}];
   if(!b('두드러기'))return [{who:think,say:'아저씨는 저를 못 본 것 같아요.'}];
   return null},
  talk:()=>[
   {who:think,say:'아저씨는 제 쪽을 안 보고 말해요.'},
   {say:'멜로리가 시켰어. 너 때문이 아니야.'},
   Q.baker[0],
   {say:'근데 네 빵은 일부러 오래 구워.'},
   Q.baker[1],
   {say:'다 탔어. 여기 놓을게. 가져가.',give:'탄 빵'},
   {who:think,say:'아저씨는 빵을 손으로 주지 않아요. 아무도 저한테 손으로 안 줘요.',award:['타다']}]},
 story:{name:'이야기꾼 할머니',zone:'circle',x:10,y:13,dir:'left',look:STORY,
  hide:()=>NIGHT(),
  script:()=>{const q=Q.cafe[Math.random()*Q.cafe.length|0];
   return E13()?[{say:'축제 날엔 옛날이야기지! 하나 맞혀 봐.'},{...q,old:1},{say:'잘했어. 또 오너라.'}]
    :[{who:think,say:'할머니는 불을 보며 혼잣말을 해요. 저는 옆에서 들어요.'},{...q,old:1},{say:'…옛날이야기는 끝이 없지.'}]},
  talk:()=>[]},
 brosa:{name:'설계자 브로사',zone:'circle',x:11,y:5,dir:'down',look:BROSA,badge:['공동체'],
  hide:()=>E13()||NIGHT(),
  status:()=>{if(!b('공동체'))return f().gourd?'todo':null;return f().waiting?undefined:null},
  after:'일렉터가 새 의사를 고를 거예요. 기다려요.',
  script:()=>!f().gourd?[{say:'코르토는 이제 아무것도 못 해요. 의사가 없는 거랑 같아요.'},{say:'…내가 무슨 말을 하고 있었죠?'}]:null,
  talk:()=>[
   {who:think,say:'브로사 앞에 사람들이 모여 있어요.'},
   {say:'오늘 아침에 코르토가 죽었어요.'},
   {say:'이제 아로에는 의사가 없어요.'},
   {who:'마을 사람',say:'설계자님, 제 아들 다리가 부러졌어요!'},
   {say:'기다려요. 벌집이 새 의사를 고를 거예요.'},
   Q.brosa[0],
   {say:'공동체는 같이 기다려요. 같이 견뎌요.'},
   {who:tale,say:'열흘 넘게 아로는 숨죽여 기다렸어요.',award:['공동체'],set:()=>{f().waiting=1}}]},
 mourn1:{name:'마을 사람',zone:'circle',x:10,y:6,dir:'up',look:CROWD1,  // the people gathered before Brosa the morning Corto dies
  hide:()=>E13()||NIGHT()||!f().gourd||!!f().waiting,
  talk:()=>[{who:think,say:'아주머니는 브로사만 봐요. 저를 못 봐요.'},{say:'코르토 할아버지가… 새 의사는 언제 생겨?'}]},
 mourn2:{name:'마을 사람',zone:'circle',x:13,y:6,dir:'up',look:CROWD2,
  hide:()=>E13()||NIGHT()||!f().gourd||!!f().waiting,
  talk:()=>[{say:'우리 아들 다리가 부러졌어. 의사가 없으면 어떡해.'}]},
 kid:{name:'꼬마',zone:'circle',x:16,y:5,dir:'up',look:KID,
  badge:['벌'],hide:()=>!f().waiting||!!f().stung||NIGHT(),
  after:'일렉터 봤어? 엄청 크지!',
  talk:()=>[
   {say:'와! 큰 벌이다! {일렉터|일렉터}야!'},
   {say:'손가락만 해! 털이 숭숭 났어!'},
   Q.kid[0],
   {say:'일렉터한테 쏘이면 머리에 {유령|유령}이 들어온대.'},
   {say:'어? 멜로리 누나 쪽으로 날아가!',award:['벌'],move:{npc:'elector',to:[14,4]}}]},
 elector:{name:'일렉터',zone:'circle',x:16,y:3,dir:'left',look:ELECTOR,
  hide:()=>!f().waiting||!!f().stung||NIGHT(),
  talk:()=>[{say:'윙— 윙— 윙—'},{say:'아주 시끄러워요. 손가락만큼 커요.'}]},
 melTree:{name:'멜로리',zone:'circle',x:13,y:4,dir:'down',look:MEL16,badge:['쏘다'],pos:()=>[13,4],
  hide:()=>!f().waiting||!!f().stung||NIGHT(),
  status:()=>b('벌')?'todo':null,
  script:()=>b('벌')?null:[{say:'핸드리, 저 소리 들려? 벌집이 이상해.'}],
  talk:()=>[
   {say:'핸드리, 저 큰 벌 봐. 일렉터야.'},
   {say:'무서워? 나도 조금 무서워.'},
   {who:tale,say:'며칠 뒤, 저는 밭에서 일하고 있었어요.',go:['fields',9,7,'up']},
   {who:tale,say:'그때 사람들이 모두 저를 봤어요. 삼 년 만에 처음이었어요.'},
   {who:tale,say:'멜로리였어요. 일렉터가 멜로리의 어깨를 쐈어요.'},
   Q.melTree[0],
   Q.melTree[1],
   {who:tale,say:'사람들이 멜로리를 집으로 옮겼어요.',award:['쏘다'],set:()=>{f().stung=1}}]},
 /* ===== the hill fields ===== */
 chogger:{name:'초거',zone:'fields',x:5,y:5,dir:'right',look:CHOG16,badge:['무시하다'],
  hide:()=>E13()||NIGHT(),
  status:()=>{if(!b('무시하다'))return b('타다')?'todo':null},
  after:'하나, 둘, 셋… 아홉. 다 왔네.',
  script:()=>!b('타다')?[{say:'하나, 둘, 셋… 다 왔네.'},{who:think,say:'배가 고파요. 먼저 빵을 받아야 해요.'}]:null,
  talk:()=>[
   {who:think,say:'초거가 일꾼들한테 {괭이|괭이}를 나눠 줘요.'},
   {say:'하나, 둘, 셋… 아홉. 다 왔네. 자, 하나씩.'},
   {who:'핸드리',say:'초거, 나도 있어. 나도 줘.'},
   {say:'…어? 아, 남은 거 없어.'},
   {who:think,say:'초거는 다시 저를 안 봐요.'},
   Q.chogger[0],
   Q.chogger[1],
   {who:think,say:'물바가지라도 직접 가져와야겠어요. 물통 옆 바구니에 있어요.',award:['무시하다']}]},
 hand1:{name:'밭 일꾼',zone:'fields',x:8,y:4,dir:'left',look:CROWD1,  // two of 초거's nine, so the count has people to count
  hide:()=>E13()||NIGHT(),
  talk:()=>[{who:think,say:'아주머니가 괭이를 들고 제 옆을 지나가요. 저를 안 봐요.'}]},
 hand2:{name:'밭 일꾼',zone:'fields',x:10,y:5,dir:'left',look:CROWD2,
  hide:()=>E13()||NIGHT(),
  talk:()=>[{say:'오늘은 윗밭부터 하자.'},{who:think,say:'저한테 한 말이 아니에요.'}]},
 worker:{name:'밭 일꾼',zone:'fields',x:12,y:2,dir:'down',look:WORKER,
  hide:()=>E13()||NIGHT(),
  talk:()=>[{who:think,say:'아주머니가 제 앞을 그냥 지나가요.'},{say:'{헬리버그|헬리버그}가 또 잎을 다 먹었네.'},{say:'설계자님은 올해 밭이 괜찮다고 했는데.'}]},
 herder:{name:'목동',zone:'fields',x:16,y:11,dir:'left',look:HERDER,
  hide:()=>E13()||NIGHT(),
  talk:()=>[{say:'{에르티비스트|에르티비스트}가 오늘은 조용하네.'},{who:think,say:'작은 벌들이 제 옆에서 휙 피해 가요. 벼룩도 저한테는 안 와요.'}]},
 gourds:{name:'물바가지',zone:'fields',x:7,y:8,dir:'down',look:GOURDS,pos:()=>[7,8],
  hide:()=>E13()||NIGHT(),
  status:()=>b('무시하다')&&!f().gourd?'todo':null,
  script:()=>{
   if(f().gourd)return [{say:'물바가지가 쌓여 있어요.'}];
   if(!b('무시하다'))return [{say:'물바가지가 쌓여 있어요. 초거가 하나씩 나눠 줘요.'}];
   return [
    {who:think,say:'아무도 안 줘요. 그럼 제가 가져가요.',give:'물바가지'},
    {who:think,say:'물통에서 물을 떠 마셨어요. 탄 빵도 먹었어요.',take:['탄 빵']},
    {who:think,say:'풀을 뽑다가 손목에 또 두드러기가 났어요.'},
    {who:tale,say:'다음 날 아침, 마을에서 우는 소리가 들렸어요.',set:()=>{f().gourd=1},go:['circle',11,7,'up']}]},
  talk:()=>[]},
 edge:{name:'숲',zone:'fields',x:12,y:14,dir:'down',look:WILDS,pos:()=>[12,14],badge:['도망치다'],  // the last word lands after the escape, so the 16/16 note doesn't break the climax
  status:()=>f().fled&&!f().done?'todo':null,
  script:()=>{
   if(f().done)return [{say:'숲은 캄캄해요.'}];
   if(!f().fled)return [{who:think,say:'숲 저쪽은 야생이에요.'},{who:think,say:'엄마는 {아라클리드|아라클리드}를 사냥하다가 죽었어요. 우리가 일곱 살 때였어요.'}];
   return [
    {who:think,say:'뒤에서 아로의 등불이 하나둘 켜져요.'},
    {who:'핸드리',say:'멜로리… 미안해.'},
    {who:tale,w:'도망치다',build:['저는','밤에','숲으로','도망쳤어요'],alts:[['밤에','저는','숲으로','도망쳤어요'],['저는','숲으로','밤에','도망쳤어요']]},
    {who:tale,say:'그 밤, 저는 아로를 떠났어요.',award:['도망치다']},
    {who:tale,say:'마을 쪽에서 화난 목소리가 점점 커졌어요.'},
    {who:tale,say:'숲은 캄캄했어요. 사람들이 따라왔는지는 몰라요. 머릿속에서는 모두가 쫓아오고 있었어요.'},
    {who:tale,say:'멜로리는 이제 유령의 것이라고 생각했어요.'},
    {who:tale,say:'그때는 몰랐어요. 그게 끝이 아니었어요.',set:()=>{f().done=1},finale:1}]},
  talk:()=>[]},
 /* ===== the twins' house ===== */
 melHome:{name:'멜로리',zone:'home',x:6,y:4,dir:'down',badge:['두드러기','가렵다','열이 나다','진단하다'],
  get look(){return f().stung&&!f().woke?(f().glow?FEVER_G:FEVER):f().woke?MELG:MEL16},
  pos:()=>f().stung&&!f().woke?[10,3]:f().woke?[5,3]:[6,4],
  hide:()=>E13()||(b('두드러기')&&!f().stung),
  status:()=>{if(E13())return null;if(!b('두드러기'))return 'todo';if(f().stung&&!f().woke)return 'todo';if(f().night&&!f().fled)return 'todo';return null},
  script:()=>{
   if(f().fled)return [{say:'(멜로리가 입을 막고 고개를 저어요.)'},{say:'가! 빨리! 돌아보지 마!'}];
   if(f().night)return [
    {who:tale,say:'저는 멜로리 앞에 무릎을 꿇었어요.'},
    {who:'핸드리',say:'멜로리. 아니, 의사 선생님. 저를 봐 주세요.'},
    {say:'핸드리… 손 줘 봐.'},
    {who:think,say:'멜로리가 제 손바닥을 만졌어요. 따끔했어요.'},
    {who:'멜로리의 유령',say:'부분 단절 감지. 분석 중.'},
    {who:'멜로리의 유령',say:'진단 연결 완료. 진단 시작.'},
    Q.melNight[0],
    {who:'멜로리의 유령',say:'결과: {단절|단절}. 손상 회복 불가.'},
    {who:'멜로리의 유령',say:'권고: {추방|추방}. 판관에게 보고합니다.'},
    {say:'안 돼… 말하지 마! 내 입으로 말하지 마!'},
    {who:tale,say:'멜로리의 남은 눈과 입가에서 피가 흘렀어요.'},
    {say:'유령이 판관한테 말할까 봐… 오래 못 막아.'},
    Q.melNight[1],
    {say:'핸드리, 도망쳐! 지금! 밭 아래 숲으로!',award:['진단하다'],set:()=>{f().fled=1}}];
   if(f().stung&&!f().woke)return [
    {who:tale,say:'멜로리는 이틀 동안 일어나지 못했어요.'},
    {who:think,say:'이마가 불처럼 뜨거워요.'},
    Q.melFever[0],
    {who:think,say:'물바가지로 천을 적셔서 이마에 올려요.',take:['물바가지']},
    Q.melFever[1],
    {who:tale,say:'멜로리 얼굴 왼쪽이 부어올랐어요. 왼쪽 눈이… 없어졌어요.'},
    {who:tale,say:'셋째 날 아침, 멜로리가 눈을 떴어요.'},
    {say:'…핸드리? 나야. 아직 나야.'},
    {who:think,say:'빈 눈 속에서 하얀 빛이 깜박여요.',set:()=>{f().glow=1}},
    {who:tale,say:'그날부터 멜로리는 아로의 의사가 됐어요.'},
    {expand:()=>classTime(CLASS,['patients','evening'])},  // her month as doctor passes
    {who:tale,say:'한 달 동안 저는 진단해 달라는 말을 못 했어요. 유령이 "안 돼"라고 할까 봐 무서웠어요.'},
    {who:tale,say:'서른한 번째 밤. 집에는 우리 둘뿐이었어요.',award:['열이 나다'],set:()=>{f().woke=1;f().night=1}}];
   if(!b('두드러기'))return null;
   return [{say:'다녀왔어?'}]},
  talk:()=>[
   {say:'일어났어? 또 긁고 있네.'},
   {say:'팔 보여 줘. 빨갛게 올라왔어.'},
   Q.melA[0],
   {say:'긁지 마. 더 심해져.'},
   Q.melA[1],
   {who:think,say:'저는 고기도 열매도 못 먹어요. 거의 탄 빵만 먹어요.'},
   {say:'빵 굽는 아저씨한테 가. 탄 빵 부탁해 놨어.'},
   {say:'먹고 밭에 가. 나도 이따 갈게.',award:['두드러기','가렵다']}]},
};

const FOLLOW=null;
const INTRO=[
 {say:'제 이름은 핸드리예요. 이건 제 이야기예요.'},
 {say:'우리 마을 아로는 큰 나무 아래에 있어요.'},
 {say:'나무 가운데 {벌집|벌집}에서 작은 벌들이 나와요.'},
 {say:'벌한테 쏘이는 건 자연스러운 일이에요. 다 이유가 있어요.'},
 {say:'어떤 사람 머리에는 {유령|유령}이 살아요. {판관|판관}, 의사, {설계자|설계자}예요.'},
 {say:'열세 살 때였어요. 그날은 축제였어요.'},
 {say:'도둑 세서가 판결을 받았어요. 그날 세서는 마을에서 쫓겨나야 했어요.'},
];
const DONE=['1장 끝! 핸드리가 아로를 떠났어요.','다음 장에서는 혼자 숲에서 살아남아야 해요.',{expand:()=>wrapUp()},'일지에서 단어를 다시 볼 수 있어요.'];

function questText(){
 const F=f();
 if(F.done)return '1장 끝 · 일지에서 복습해요';
 if(E13()){
  if(!b('이웃'))return '모임 터 · 판관 엘헌의 말을 들어요';
  if(!b('가마솥'))return '큰 나무 아래 · 가마솥을 봐요';
  if(!b('화상'))return '모임 터 · 멜로리를 찾아요';
  if(!F.chase)return '큰 나무 아래 · 칼턴하고 놀아요';
  if(!F.burned)return '큰 나무 아래 · 리비를 잡아요';
  if(!F.severed)return '모임 터 · 세서의 추방';
  return '큰 나무 왼쪽 · 코르토한테 상처를 보여 줘요';
 }
 if(F.fled)return '언덕 밭 아래 · 숲으로 도망쳐요';
 if(F.night)return '쌍둥이 집 · 멜로리한테 물어봐요';
 if(F.stung)return '쌍둥이 집 · 멜로리 곁을 지켜요';
 if(!b('두드러기'))return '쌍둥이 집 · 멜로리';
 if(!b('타다'))return '아랫마을 · 빵 굽는 아저씨';
 if(!b('무시하다'))return '언덕 밭 · 일하러 가요';
 if(!F.gourd)return '언덕 밭 · 물바가지를 찾아요';
 if(!b('공동체'))return '큰 나무 아래 · 무슨 일이에요?';
 if(!b('벌'))return '큰 나무 아래 · 이 소리는 뭐예요?';
 return '큰 나무 아래 · 멜로리';
}
return {WORDS,DICT,CONFUSE,BANK,Q,REVIEW,CLASS,ITEMS,ZONES,NPC,FOLLOW,INTRO,DONE,questText,TILES,PLAYER};
}});
