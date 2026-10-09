/* Settings for the shared engine (walk-engine): this game's names, storage prefix and default player. */
var GAME={prefix:'esb',title:'이야기',log:'기억 일지',
 term:{allWords:n=>[`단어 ${n}개를 다 모았어요!`,'복습할수록 ★가 늘어나요. 사람들도, 기억 돌도 물어봐요.'],carry:'예전에 배운 말도 다시 떠올라요.',wrap:'이번 장에서 배운 말, 한 번 더 떠올려요.',name:'기억 돌',empty:'돌이 조용해요. 아직 일지가 비어 있어요.',idle:'돌이 조용해요.',next:'다음 빛',due:(n,k)=>`돌이 빛나요. 단어 ${n}개가 기다려요.`+(k<n?` 이번에는 ${k}개만 해요.`:''),end:'빛이 꺼졌어요. 다음에 또 와요.'},

 /* spaced review: due again after 2 story beats or 5 minutes, then 5 beats or 20 minutes; later levels are hours and days, and one
    shared record lets later chapters bring earlier words back (people's lines, the 기억 돌 and the last round of each chapter) */
 srs:{gap:[0,5*60e3,20*60e3,4*3600e3,24*3600e3,3*24*3600e3],beats:[0,2,5],shared:1},
 player:{hair:'#2A2F4A',skin:'#F1C9A5',shirt:'#E4E1D6',pants:'#3B4650',belt:'#E8962A'}};
