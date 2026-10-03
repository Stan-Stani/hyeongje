# 형제 — Korean walk-around game of Adrian Tchaikovsky's *The Expert System's Brother*

Sister project of 성실호 (/var/home/stan/Developer/exodus-a) — same engine, same learner, same workflow. Source in `src/`
(`shell.html`, `chapters/chN.js`, `engine.js`); `python3 build.py` assembles the single-file `index.html` published as a claude.ai
artifact (republish from the same path). Never edit `index.html` by hand. Save keys are `esb-chN`; never change one.

## Learner
Rusty intermediate (~TOPIK 3), reads Hangul, wants Korean-only dialogue in short sentences; English only behind a tap.
Plays on a phone; dislikes on-screen instruction text. Has already learned the 112 words in `notes/known-from-seongsilho.txt` —
never re-teach those as badges (validator enforces), use them freely in dialogue.

## Lore workflow (required)
1. `notes/canon.md` is the single source of truth (from a full read of the novella). 2. Pin each game chapter to a book section range.
3. Before every commit/publish, the lore-advisor agent (whole book in context) audits every lore claim and the Korean; fix all findings,
   re-audit until CLEAN. 4. Tone matches the book (violence plain, not beyond; sex off-screen).

## Checks before publishing
- `python3 build.py && node tests/validate.mjs`; `node tests/play.mjs chN` must end `ERRORS: none`; `python3 tests/sheet.py chN` and LOOK at every sheet.
- After ANY change to game text (dialogue, spots, things, words): `python3 lexicon/extract.py .` must report `0 without a definition` (add entries to lexicon/defs.json, analyzer misreads to lexicon/fixes.json), else tapping new words says 사전에 없는 말이에요.
- `node tests/coverage.mjs chN`: every object tile should say something when inspected (zone `things:{char:line}` for a tile kind, `spots` for one tile); keep it at 100%. Inspect lines are lore claims too — they go through the audit.
- One playtest at a time (shared lock with 성실호); never more than 2 agents playtesting in parallel — the 7 GB machine froze once.
- Publish only audited chapters: `python3 build.py --chapters ch1,…`.

## Public mirror
After every publish run `tools/sync_public.sh`: it force-pushes this repo to the public twin (see tools/public-remote) with `notes/`
filtered out of all history (book summaries stay private). GitHub Pages serves `index.html` from the public twin.
