# Angel website-derived brand and style guide

Reconstructed November 13, 2026 at Chad Blackburn's express direction: use Angel's existing marketing website to recreate its brand/style guide. This is an observed working guide, not an Angel-issued manual or approval. It replaces the earlier loose visual interpretation as the implementation reference for all three concepts.

## Authoritative source observations

- https://www.angel.com/ : charcoal foundation, white Angel wordmark, cinematic imagery, audience/Guild-led messaging, gold conversion action.
- https://www.angel.com/guild/join : membership acquisition composition, actual desktop/mobile typography, plan tiers, copper Guild identity, gold controls and rounded panels.
- https://www.angel.com/promise : warm paper/ink surfaces and deep-green supporting palette. These support Good Word's light variant.
- Current stylesheet: https://images.angelstudios.com/raw/upload/angel-web/a4878295ae058e8ab4582751a5e196ba0f73a739/_next/static/immutable/chunks/3b5gvd9qn5fta.css .
- Official press/logo discovery: https://www.angel.com/press . Logo assets do not constitute a full company manual.

Rendered source observations and desktop/mobile screenshots are preserved in Freeman Signal iCloud, Shared/Website-derived Angel Guide. The observations distinguish computed styles, CSS declarations, rendered images and proposed concept rules.

## Typography

Actual family: **Angel Sans**, not Inter. The public stylesheet defines regular 400, medium 500, semibold 600 and bold 700 plus light/italic and condensed companions. These previews use the matching public weight-specific font URLs; no proprietary font binary is redistributed in the kit. Production font permissions are not established by a public URL.

Measured Guild/home campaign display at 1280px: 44px size, 46px line-height, weight 700, normal tracking, white. At 390px: 32px size, 34px line-height, weight 700, normal tracking. Measured secondary acquisition heading: 26px/28px, weight 600. Body foundation: 16px/24px, weight 400. CTA: 16px/24px, weight 600.

Runtime follows those measured primary sizes. Section display at 36px/38px is a documented proposed hierarchy variant for original wireless copy; phone sections use 26px/28px. No large 90-140px editorial headlines or exaggerated negative tracking remain. Product wordmark and social-card lettering are outlined from Angel Sans reference fonts with original product symbols. They are not copied Angel masterbrand marks.

Font URLs:
- Regular: https://images.angelstudios.com/raw/upload/v1767936192/angel-studios/fonts/angelSans/woff2/AngelSans-Regular.woff2
- Medium: https://images.angelstudios.com/raw/upload/v1767936190/angel-studios/fonts/angelSans/woff2/AngelSans-Medium.woff2
- Semibold: https://images.angelstudios.com/raw/upload/v1767936194/angel-studios/fonts/angelSans/woff2/AngelSans-SemiBold.woff2
- Bold: https://images.angelstudios.com/raw/upload/v1767936188/angel-studios/fonts/angelSans/woff2/AngelSans-Bold.woff2

## Color roles

| Role | Observed value | Use in the concepts |
| --- | --- | --- |
| Core charcoal | #141414 | Called and shared hub |
| Dark panel | #222222 | Guild Wireless and panels |
| White | #FFFFFF | Dark-surface text |
| Warm paper | #F5F5F4 | Editorial reference; current wireless uses charcoal |
| Secondary ink | #262626 | Editorial ink reference |
| Acquisition gold | #FFA41C | Primary dark-surface actions |
| Guild copper | #DFAF89 | Membership cues, borders and product accents |
| Promise deep green | #0E7358 | Editorial reference; current wireless CTA uses gold |
| Secondary gray | #595A5B | Light-surface supporting copy |

The live home button can resolve to #FDA21E during its visual state; #FFA41C is the measured Guild acquisition button and the shared canonical CTA here. Original forest and mint-led wireless palettes were replaced by these observed roles. The latest acquisition revision uses the dark Guild system across all three names. Accent assignment to a new product identity remains a proposal.

## Controls and shapes

Measured Get Started control: 8px corner radius, 8px 24px padding, 56px minimum height, gold background, dark text, Angel Sans 600. Primary consumer actions now follow this geometry. Navigation and secondary actions are smaller variants with visible focus. New cards use an 8px radius as a proposed consistent product variant. Use the controls appropriate to the reference context. The Guild acquisition action is rounded by 8px; the separate Promise manifesto visibly uses a mint pill. Tile shadows and image depth are part of the observed acquisition composition.

Use real buttons, links, native select/date controls, explicit labels, inline errors and deliberate focus transitions. Preserve natural document scrolling and reduced-motion preferences. The current household selector updates line count, interest copy and the next journey link. No underwritten price or membership threshold is inferred.

## Composition and imagery

Follow Angel's confident, compact type, cinematic imagery, visible value proposition and clear acquisition path. The original Called family image is concept artwork, not a member photograph or an Angel endorsement. The current version replaces the flat orbital/community and paper/conversation hero variants with a shared Guild-style layered acquisition composition. The original alternatives remain in history. These are proposed product expressions inside the reconstructed typography/color/control system, not undocumented claims of official layouts.

## Voice and offer hierarchy

Lead with household connection, clear service and the proposed Guild relationship. Show actual pricing only when supported by provider economics. The earlier four-line price and included-Guild threshold are superseded. Speak plainly about family, stories and belonging. Humor can be observant, never spiritual pressure. No fabricated testimonials, launch scarcity or official approval. Do not describe a hypothetical price as contracted, claim cheapest service, promise a network/data allowance or imply phone-wide filtering.

The waitlist and annual journeys are interactive previews with fixed sample contact data. Any future included Guild membership, prepaid-term credit and optional advance annual purchase must never double-count the same benefit. One household gets one membership; extra lines do not create more votes.

## Verification boundary

Check all three homepages and their consumer routes at desktop and phone sizes against the source observations: primary font family/weights, heading size/line-height, CTA colors/radius/geometry, core surfaces, natural wrapping, readable controls and appropriate original marks. Preserve screenshots and computed readbacks. This verifies implementation against the user-authorized website reconstruction; it does not represent Angel's approval or an externally supplied manual.

## Depth and layering correction, November 13 evening

The prior guide's flat-surface direction was incomplete and is superseded. The supplied eight screenshots and the live Guild DOM establish layering as a characteristic acquisition treatment. Source HTML and computed JSON are archived privately under Research/Daily Wire Lessons and Angel Depth.

Observed Guild DOM values:
- Poster mask: `linear-gradient(transparent 0%, #000 10%, #000 50%, transparent 100%)`.
- Copper panel border: `linear-gradient(166.78deg, #EDD7C6 1.42%, #D6A177 14.6%, #FEDEC6 39.98%, #D48D59 60.48%, #A66141 85.7%, #612B12 94.6%)`.
- Fade into next panel: transparent charcoal to #222222. Separate top/bottom fades frame secondary cinematic scenes.
- Oversized curved transition: a copper-gradient outer layer wider than the viewport, with a dark inner layer that overlaps the hero.
- Staggered columns of rounded film tiles sit in front of a dim cinematic atmospheric backdrop.

Observed source CSS also declares radial dark-green and diagonal oxide atmospheres, reflective conic borders, horizontal image edge masks and a six-stop copper ramp. A declaration is not proof of use on every route. The implemented subset is tied to rendered Guild nodes and screenshots.

Runtime uses the exact measured copper panel gradient. Its hero stacks an original text/CTA layer over a static poster composition, a low-opacity Angel background image, radial green/charcoal atmosphere and directional top/bottom/side fades. The static poster mask extends the opaque range to 68% rather than the source 50%; radial opacity and mobile cropping are derived adaptations. Each decorative layer ignores pointer input. The curve overlaps the hero without overlapping text or controls.

The verified Promise departure at https://www.angel.com/promise is a white manifesto with black oversized display type and a mint pill action, observed at 1280px. That is evidence of a distinct editorial context, not blanket permission for a light wireless acquisition product. Film-specific title art also varies inside the surrounding Angel shell. Current Called, Guild Wireless and Good Word therefore all use core Guild acquisition styling. The naming/voice distinction remains, with original concept marks.

Public art references used directly from Angel's marketing CDN:
- https://images.angelstudios.com/image/upload/v1793295749/Early_Black_Friday_Sale_Spritesheet_ujwf7y.webp
- https://images.angelstudios.com/image/upload/w_2560,f_webp,q_auto,ar_1,c_fill,g_face/q_auto:low/v1732031732/angel-studios/guild/hero/Hero-Desk-Image-min.webp
These are remote reference assets in independent concept previews. No asset license or Angel endorsement is asserted; no artwork binary is redistributed in the new kit.

### Additional verified departure: SKETCH companion page

https://www.angel.com/sketchapp was directly rendered November 13. It retains the standard dark Angel navigation but introduces a film-specific brush-lettered SKETCH mark, burgundy radial light, character cutouts and white secondary actions. The current page states the Monster Maker app has closed; this is evidence of a campaign/companion identity, not a claim that the app is operating. This confirms Angel permits contextual title branding while retaining its masterbrand shell. It does not justify treating an unrelated wireless service as a SKETCH-like campaign. Screenshot is retained with the research packet.
