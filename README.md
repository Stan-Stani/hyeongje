# 형제

A pixel-art walk-around Korean vocabulary game following Handry's exile in Adrian Tchaikovsky's novella *The Expert System's Brother*.
Sister game of [성실호](https://github.com/Stan-Stani/seongsilho) — same engine, and it never re-teaches 성실호's words.

**Play:** https://stan-stani.github.io/hyeongje/ (built for phones; arrow keys + Z/X on a keyboard)

| | | |
|:-:|:-:|:-:|
| <img src="docs/img/1-festival.png" width="240" alt="The festival in 아로"> | <img src="docs/img/2-tap-a-word.png" width="240" alt="Tapping a word shows its Korean definition"> | <img src="docs/img/3-word-order.png" width="240" alt="A word-order puzzle"> |
| 1장 · 아로 | Tap any word: Korean first, English behind ? | Word-order puzzles |
| <img src="docs/img/4-wilds.png" width="240" alt="The wilds near 아로"> | <img src="docs/img/5-drovo.png" width="240" alt="The outcast yard at 드로보"> | <img src="docs/img/6-ancestors.png" width="240" alt="The house of the ancestors"> |
| 2장 · the wilds | 3장 · 드로보 | 4장 · the ancestors' house |

- Four chapters, each with its own save; spaced review at the memory stones
- Tap any Korean word for a simple Korean definition; English is behind the **?** button
- Runs on the shared [walk engine](https://github.com/Stan-Stani/walk-engine) with 성실호, 방과 후 and 단어 마을

A fan-made learning tool. It contains no text from the novella, and the book itself is not included.

## Build and test
`python3 build.py` assembles `index.html` from `src/`; `node tests/validate.mjs`; `node tests/play.mjs ch1`.
