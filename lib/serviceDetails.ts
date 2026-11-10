/**
 * Long-form content for each service page (/services/[slug]).
 *
 * Prices and durations are NOT stored here — they come from lib/siteConfig.ts
 * so the menu can never disagree with itself across pages.
 */

export interface ServiceDetail {
  slug: string
  name: string
  /** <title> without the brand suffix. Keep under ~38 characters. */
  metaTitle: string
  tagline: string
  /** Meta description + schema description. One or two plain sentences. */
  description: string
  /** Answer-first definition shown at the top of the page. */
  intro: string
  /** HTML body. Use <h2>, <h3>, <p>, <ul>, <ol> and internal <a> links. */
  body: string
  benefits: string[]
  whoFor: string[]
  faqs: { question: string; answer: string }[]
  keywords: string[]
  relatedSlugs: string[]
}

const STUDIO =
  'my private in-call studio in West Kensington, London W14 — a few minutes from West Kensington and Barons Court Underground stations'

export const serviceDetails: Record<string, ServiceDetail> = {
  'sensual-massage': {
    slug: 'sensual-massage',
    name: 'Sensual Massage',
    metaTitle: 'Sensual Massage in London — From £80',
    tagline: 'Slow, full-body relaxation for the senses',
    description:
      'Sensual massage in West Kensington, London W14 with Anna: a slow, warm-oil, full-body massage in a private studio. £80 for 30 minutes, £120 for an hour.',
    intro:
      'Sensual massage is a slow, full-body massage with warm oil, given with long, flowing, deliberately unhurried strokes. Where a clinical massage works on individual muscles, a sensual massage is designed to relax your whole body and wake up your senses at the same time. It is the gentlest style on my menu and the one I recommend to anyone visiting for the first time.',
    body: `
      <h2>What Is a Sensual Massage?</h2>
      <p>A sensual massage is a full-body treatment in which the <em>feeling</em> of touch matters as much as the technique. I use warm oil and my hands and forearms, moving in long, continuous strokes from your shoulders to your feet and back again. The pace is slow on purpose: slow touch gives your nervous system time to settle, your breathing drops, and tension you did not know you were holding simply lets go.</p>
      <p>What makes it sensual rather than simply relaxing is the intention. The touch is designed to make you aware of your whole body — not just the knots in your shoulders — in a warm, private, candlelit room where nothing is hurried.</p>

      <h2>How a Session Unfolds</h2>
      <ol>
        <li><strong>Arrival.</strong> A warm welcome and a relaxed chat about what you are in the mood for. You are welcome to shower before we begin.</li>
        <li><strong>Settling.</strong> You lie down in a warm room, and I begin gently on your back and shoulders so your body has time to soften.</li>
        <li><strong>The massage.</strong> Long, flowing, full-body strokes with warm oil, building slowly. You can ask for a lighter or firmer touch, or a slower pace, at any moment.</li>
        <li><strong>Winding down.</strong> The session eases off gradually. Nobody rushes you off the table, and you can shower again before you leave.</li>
      </ol>

      <h2>Sensual Massage vs Relaxing Massage</h2>
      <p>The two are close cousins. A <a href="/services/relaxing-massage">relaxing massage</a> is the softest, most soothing treatment I offer — its only goal is calm. A sensual massage keeps that calm but adds slower, more attentive, more teasing touch that makes you vividly aware of your body. If you want something closer still, <a href="/services/body-to-body-massage">body to body</a> and <a href="/services/nuru-massage">nuru massage</a> are given with the whole body rather than the hands alone, and <a href="/services/tantric-massage">tantric massage</a> adds breathwork and a meditative pace.</p>

      <h2>Prices and Session Length</h2>
      <p>A sensual massage is <strong>£80 for 30 minutes</strong> or <strong>£120 for a full hour</strong>. Thirty minutes is a lovely taster; an hour gives the experience room to unfold properly, and it is what most people choose. Longer and bespoke sessions can be arranged — just ask. Payment is by cash on the day. The full menu is on my <a href="/pricing">prices page</a>.</p>

      <h2>Where and When</h2>
      <p>All sessions take place at ${STUDIO}. The exact address is shared when your booking is confirmed. I am available every day from 11:00 to 22:00, and same-day appointments are often possible. The studio is easy to reach from <a href="/massage-earls-court">Earl's Court</a>, <a href="/massage-kensington">Kensington</a>, <a href="/massage-hammersmith">Hammersmith</a>, <a href="/massage-fulham">Fulham</a> and <a href="/massage-chelsea">Chelsea</a>.</p>
    `,
    benefits: [
      'Deep, full-body relaxation',
      'Relief from everyday stress and tension',
      'Heightened awareness of your body',
      'A calm, unhurried escape from the day',
      'The gentlest introduction to sensual bodywork',
      'Complete privacy and discretion',
    ],
    whoFor: [
      'Anyone new to sensual massage',
      'Those who want to switch off and unwind',
      'People carrying stress and tension',
      'Anyone who prefers a slow, hands-led massage',
    ],
    faqs: [
      {
        question: 'What happens during a sensual massage?',
        answer:
          'A sensual massage is a slow, warm-oil, full-body massage given with long, flowing strokes in a warm, candlelit room. We begin gently, the pace builds gradually, and you stay comfortable and in control throughout.',
      },
      {
        question: 'How much does a sensual massage cost in London?',
        answer:
          'With Anna in West Kensington (W14), a sensual massage costs £80 for 30 minutes or £120 for an hour. Payment is by cash on the day, and everything — oil, towels, linen — is included.',
      },
      {
        question: 'Is sensual massage suitable for a first visit?',
        answer:
          'Yes — it is the style I recommend most for first-timers. It is slow, hands-led and unintimidating, and I explain everything before we begin.',
      },
      {
        question: 'How long should my first session be?',
        answer:
          'Thirty minutes is a lovely taster, while an hour gives the experience room to unfold. Most first-time visitors choose an hour.',
      },
      {
        question: 'What is the difference between sensual and tantric massage?',
        answer:
          'Sensual massage is hands-led and focused on slow, flowing touch. Tantric massage adds guided breathing and a meditative pace, and is built around presence and gradually building energy through the whole body.',
      },
      {
        question: 'Is it discreet?',
        answer:
          'Completely. I work alone from a private in-call studio in West Kensington (W14) — no reception, no waiting room and no records. The address is shared only when your booking is confirmed.',
      },
    ],
    keywords: ['sensual massage london', 'sensual massage near me', 'erotic massage london', 'sensual massage west kensington', 'sensual full body massage london'],
    relatedSlugs: ['tantric-massage', 'body-to-body-massage', 'nuru-massage'],
  },

  'body-to-body-massage': {
    slug: 'body-to-body-massage',
    name: 'Body to Body Massage',
    metaTitle: 'Body to Body Massage London — From £100',
    tagline: 'Warm, close, skin-on-skin connection',
    description:
      'Body to body (B2B) massage in West Kensington, London W14 with Anna: warm oil, whole-body contact, private studio. £100 for 30 minutes, £140 for an hour.',
    intro:
      'Body to body massage — often shortened to B2B massage — is a warm-oil massage given with the whole body rather than the hands alone. Instead of isolated points of contact, you feel one continuous, gliding, enveloping touch. It is the closest and most immersive style on my menu, and for many people the most deeply relaxing.',
    body: `
      <h2>What Is Body to Body Massage?</h2>
      <p>In a body to body massage, I use my whole body — not just my hands — to glide over yours with warm oil. The result is full, continuous contact that hands on their own cannot replicate. Because the touch never really breaks, the mind stops tracking where the next stroke will land and simply lets go.</p>
      <p>It is as much about closeness and presence as it is about technique, which is why people who find a traditional massage a little clinical often fall in love with it.</p>

      <h2>How a Session Unfolds</h2>
      <ol>
        <li><strong>Arrival.</strong> A warm welcome, a short chat, and a shower if you would like one.</li>
        <li><strong>Warm-up.</strong> The session begins like a classic massage — warm oil and slow, hands-led strokes across your back, shoulders and legs.</li>
        <li><strong>Body to body.</strong> The massage flows into full-body contact: slow, gliding, deliberate movements, always led by your comfort.</li>
        <li><strong>Winding down.</strong> The pace softens again before you get up, and you can shower before you leave.</li>
      </ol>

      <h2>Body to Body vs Nuru Massage</h2>
      <p>They are closely related, and the difference is simple: <strong>body to body uses warm oil; nuru uses gel.</strong> Oil gives a warm, flowing glide that feels like a classic sensual massage with far more contact. <a href="/services/nuru-massage">Nuru massage</a> uses a special seaweed-based gel that is much more slippery, so it feels lighter, more playful and almost weightless. If you want warmth and closeness, choose body to body; if you want the most unusual sensation, choose nuru. My <a href="/blog/nuru-body-to-body-massage-london">guide to nuru and body-to-body massage</a> explains both in detail.</p>

      <h2>Prices and Session Length</h2>
      <p>Body to body massage is <strong>£100 for 30 minutes</strong> or <strong>£140 for a full hour</strong>. An hour is the ideal length — it leaves time for the hands-led warm-up that makes the body-to-body part feel natural rather than sudden. Longer, bespoke sessions are available on request. Payment is by cash on the day; see the full <a href="/pricing">price list</a>.</p>

      <h2>Where and When</h2>
      <p>Sessions take place at ${STUDIO}, every day from 11:00 to 22:00. The exact address is shared once your booking is confirmed. Arrive freshly showered and ready to relax — everything else is taken care of.</p>
    `,
    benefits: [
      'A profound sense of closeness and connection',
      'Continuous, enveloping full-body contact',
      'Melts away tension and stress',
      'Warm, flowing and deeply grounding',
      'More immersive than a hands-only massage',
      'Private and discreet throughout',
    ],
    whoFor: [
      'Those wanting a closer, more intimate massage',
      'Anyone who finds traditional massage too clinical',
      'People who enjoyed sensual massage and want more',
      'Those curious about B2B massage for the first time',
    ],
    faqs: [
      {
        question: 'What is a body to body (B2B) massage?',
        answer:
          'A body to body massage is a warm-oil massage in which the therapist uses her whole body, rather than only her hands, to glide over yours. It creates continuous, full-body contact that feels much closer and more immersive than a traditional massage.',
      },
      {
        question: 'How is body to body massage different from nuru massage?',
        answer:
          'Both are given with the whole body. Body to body massage uses warm oil, so it flows like a classic sensual massage. Nuru massage uses a special slippery seaweed-based gel, which makes it lighter, more playful and more unusual.',
      },
      {
        question: 'How much does a body to body massage cost in London?',
        answer:
          'With Anna in West Kensington (W14), body to body massage is £100 for 30 minutes or £140 for an hour, paid in cash on the day.',
      },
      {
        question: 'What should I do to prepare?',
        answer:
          'Simply arrive freshly showered and relaxed. A shower is also available at the studio. The room, oils and fresh towels are all ready for you.',
      },
      {
        question: 'Is body to body massage suitable for beginners?',
        answer:
          'Yes, if the idea appeals to you. The session starts with a hands-led warm-up so it never feels sudden. If you would like something gentler first, a sensual massage is the easiest introduction.',
      },
      {
        question: 'Where does the massage take place?',
        answer:
          'At my private, discreet in-call studio in West Kensington, London W14, close to West Kensington and Barons Court stations. The exact address is shared once your booking is confirmed.',
      },
    ],
    keywords: ['body to body massage london', 'b2b massage london', 'body to body massage near me', 'b2b massage west london', 'body to body massage kensington'],
    relatedSlugs: ['nuru-massage', 'sensual-massage', 'tantric-massage'],
  },

  'tantric-massage': {
    slug: 'tantric-massage',
    name: 'Tantric Massage',
    metaTitle: 'Tantric Massage London — From £100',
    tagline: 'A slow, breath-led full-body ritual',
    description:
      'Tantric massage in West Kensington, London W14 with Anna: a slow, breath-led, full-body ritual. £100 for 30 minutes, £140 for an hour. Beginners welcome.',
    intro:
      'Tantric massage is a slow, mindful, full-body massage rooted in the ancient practice of tantra. It is guided by breath and presence rather than by a routine, and instead of rushing anywhere it lets relaxation and sensation build gradually through the whole body. People describe the result as deeply calm and vividly alive at the same time.',
    body: `
      <h2>What Is Tantric Massage?</h2>
      <p>Tantric massage draws on tantra, a tradition in which breath, energy and attention matter as much as touch. In practice, that means three things set it apart from any other massage: it is <strong>slow</strong>, it is <strong>breath-led</strong>, and it treats the <strong>whole body</strong> as one connected thing rather than a set of separate muscles.</p>
      <p>You do not need to know anything about tantra, and there is nothing to "get right". My <a href="/blog/what-is-tantric-massage-london">gentle guide to tantric massage</a> covers its origins and what it is — and is not — in more depth.</p>

      <h2>How a Tantric Session Unfolds</h2>
      <ol>
        <li><strong>Arrival.</strong> A warm welcome, a short chat about how you are feeling, and a shower if you would like one.</li>
        <li><strong>Breathing.</strong> We start with a few quiet minutes of slow, guided breathing. This is what switches a busy mind off.</li>
        <li><strong>The massage.</strong> Slow, flowing, full-body strokes with warm oil. Sensation is allowed to build and move through the body at its own pace — never hurried.</li>
        <li><strong>Stillness.</strong> The session ends quietly, with time to simply lie still before you return to the world.</li>
      </ol>

      <h2>Tantric vs Sensual vs Nuru Massage</h2>
      <p>These styles are often confused. The simplest way to tell them apart:</p>
      <ul>
        <li><strong>Tantric massage</strong> is defined by its <em>pace and philosophy</em> — slow, breath-led, meditative.</li>
        <li><a href="/services/sensual-massage"><strong>Sensual massage</strong></a> is hands-led, flowing and relaxing — the gentlest introduction.</li>
        <li><a href="/services/nuru-massage"><strong>Nuru massage</strong></a> is defined by its <em>technique</em> — full-body contact with a slippery gel; the most physical and playful style.</li>
        <li><a href="/services/body-to-body-massage"><strong>Body to body massage</strong></a> is full-body contact with warm oil — the most immersive.</li>
      </ul>
      <p>For a full comparison, read my guide to <a href="/blog/erotic-massage-types-tantric-nuru-naturist-london">every type of erotic massage in London</a>.</p>

      <h2>How Long Should You Book?</h2>
      <p>Tantra is about unhurried presence, so more time is better. A <strong>30-minute</strong> session (£100) is a taster. An <strong>hour</strong> (£140) is what I recommend for a first tantric massage. If you would like the full, slow-building ritual, ask me about a longer bespoke session. Payment is by cash on the day; the full menu is on the <a href="/pricing">prices page</a>.</p>

      <h2>Where and When</h2>
      <p>Tantric massage takes place at ${STUDIO}. I am available daily from 11:00 to 22:00. The studio is one stop from <a href="/massage-earls-court">Earl's Court</a> and minutes from <a href="/massage-kensington">Kensington</a>, <a href="/massage-hammersmith">Hammersmith</a>, <a href="/massage-fulham">Fulham</a> and <a href="/massage-chelsea">Chelsea</a>. The exact address is shared once your booking is confirmed.</p>
    `,
    benefits: [
      'Deep presence and relaxation',
      'A quieter, calmer mind',
      'Heightened sensation and body awareness',
      'A meditative, restorative experience',
      'Release of deeply held tension',
      'Suitable for beginners and the experienced',
    ],
    whoFor: [
      'Anyone whose mind never quite switches off',
      'Those drawn to a slower, more mindful experience',
      'People curious about tantra and breathwork',
      'Those who enjoy unhurried, immersive sessions',
    ],
    faqs: [
      {
        question: 'What is a tantric massage?',
        answer:
          'A tantric massage is a slow, breath-led, full-body massage rooted in the ancient practice of tantra. It focuses on presence and on letting relaxation and sensation build gradually through the whole body, rather than working on individual muscles.',
      },
      {
        question: 'Do I need any experience with tantra?',
        answer:
          'Not at all. Tantric massage is welcoming to complete beginners — I gently guide the breathing and the pace. All you need is a willingness to slow down.',
      },
      {
        question: 'How much does a tantric massage cost in London?',
        answer:
          'With Anna in West Kensington (W14), tantric massage costs £100 for 30 minutes or £140 for an hour, paid in cash on the day. Longer bespoke sessions are priced on request.',
      },
      {
        question: 'How long should a tantric massage be?',
        answer:
          'An hour is ideal for a first tantric massage. Thirty minutes works as a taster, and longer bespoke sessions can be arranged if you would like the experience to unfold more slowly.',
      },
      {
        question: 'Is tantric massage relaxing or energising?',
        answer:
          'Both. Most people leave feeling deeply calm and, at the same time, pleasantly alive and present — a combination that is hard to find in any other treatment.',
      },
      {
        question: 'Where can I get a tantric massage in West London?',
        answer:
          "At Anna's private in-call studio in West Kensington, London W14, close to West Kensington and Barons Court Underground stations and one stop from Earl's Court. Open daily 11:00–22:00; book by WhatsApp.",
      },
    ],
    keywords: ['tantric massage london', 'tantra massage london', 'tantric massage near me', 'tantric massage west london', 'tantric massage kensington', 'tantric massage earls court'],
    relatedSlugs: ['sensual-massage', 'nuru-massage', 'body-to-body-massage'],
  },

  'nuru-massage': {
    slug: 'nuru-massage',
    name: 'Nuru Massage',
    metaTitle: 'Nuru Massage London — From £100',
    tagline: 'The original Japanese body-to-body massage',
    description:
      'Nuru massage in West Kensington, London W14 with Anna: the Japanese body-to-body massage with warm, silky nuru gel. £100 for 30 minutes, £140 for an hour.',
    intro:
      'Nuru massage is a Japanese body-to-body massage that uses a special odourless, colourless gel traditionally made from nori seaweed. "Nuru" means "slippery" in Japanese — and when the gel is warmed it creates an extraordinarily smooth, almost weightless glide as the therapist uses her whole body to massage yours. It feels unlike any other massage.',
    body: `
      <h2>What Is Nuru Massage?</h2>
      <p>Nuru massage originated in Japan. Its defining feature is the gel: clear, scentless, traditionally made from nori seaweed, and far more slippery than any massage oil. Combined with a body-to-body technique, it lets the whole body glide effortlessly over yours.</p>
      <p>The sensation is the reason people seek it out — warm, slippery, immersive and playful. It is the most physical style on my menu, and the one people most often describe as unforgettable.</p>

      <h2>How a Nuru Session Unfolds</h2>
      <ol>
        <li><strong>Arrival.</strong> A warm welcome and a shower. Clean, warm skin is what makes the gel work best.</li>
        <li><strong>Warming the gel.</strong> The gel is mixed with warm water and applied generously.</li>
        <li><strong>The massage.</strong> The session flows from gentle, hands-led strokes into smooth, full-body gliding contact.</li>
        <li><strong>Afterwards.</strong> The gel rinses away cleanly with water, leaving no scent or residue. You can shower before you leave.</li>
      </ol>

      <h2>Nuru vs Body to Body Massage</h2>
      <p>Both are given with the whole body. The difference is the medium: <a href="/services/body-to-body-massage">body to body massage</a> uses warm oil and flows like a classic sensual massage, while nuru uses gel and is noticeably more slippery, lighter and more playful. Many people try body to body first and nuru second — though there is no wrong order. My <a href="/blog/nuru-body-to-body-massage-london">guide to nuru and body-to-body massage</a> goes into more detail.</p>

      <h2>Is Nuru Gel Safe for Skin?</h2>
      <p>Nuru gel is water-based, unscented and generally very gentle — many people find it leaves skin feeling soft. If you have very sensitive skin or a known allergy to seaweed, please tell me when you book so we can choose a different style, such as body to body with oil.</p>

      <h2>Prices and Session Length</h2>
      <p>Nuru massage is <strong>£100 for 30 minutes</strong> or <strong>£140 for a full hour</strong>. An hour gives the experience room to breathe. Longer, bespoke sessions can be arranged on request. Payment is by cash on the day — see the full <a href="/pricing">price list</a>.</p>

      <h2>Where and When</h2>
      <p>Nuru sessions take place at ${STUDIO}, which is fully set up for it. I am available every day from 11:00 to 22:00, and the exact address is shared once your booking is confirmed.</p>
    `,
    benefits: [
      'An incredibly smooth, gliding sensation',
      'The most immersive body-to-body experience',
      'Odourless, skin-friendly gel',
      'Warm, slippery and playful',
      'Rinses off cleanly — no scent or residue',
      'Completely private and discreet',
    ],
    whoFor: [
      'Those wanting the most unusual, immersive sensation',
      'Anyone who has enjoyed body to body and wants more',
      'People curious about this Japanese technique',
      'Those seeking something truly indulgent',
    ],
    faqs: [
      {
        question: 'What is a nuru massage?',
        answer:
          'A nuru massage is a Japanese body-to-body massage in which the therapist uses her whole body to glide over yours using a special warm, slippery, odourless gel traditionally made from nori seaweed. "Nuru" means "slippery" in Japanese.',
      },
      {
        question: 'What is nuru gel made of?',
        answer:
          'Nuru gel is traditionally made from nori seaweed. It is water-based, odourless, colourless and gentle on the skin, and it becomes very silky and slippery when mixed with warm water.',
      },
      {
        question: 'Is nuru massage messy?',
        answer:
          'The gel is used generously, so the experience is wonderfully slippery — but it rinses away cleanly with water and leaves no residue or scent. A shower is available before and after.',
      },
      {
        question: 'How much does a nuru massage cost in London?',
        answer:
          'With Anna in West Kensington (W14), nuru massage is £100 for 30 minutes or £140 for an hour, paid in cash on the day.',
      },
      {
        question: 'What is the difference between nuru and body to body massage?',
        answer:
          'Both are full-body-contact massages. Nuru uses a special slippery gel and feels lighter and more playful; body to body uses warm oil and flows more like a classic sensual massage.',
      },
      {
        question: 'Where does a nuru massage take place?',
        answer:
          'At my private in-call studio in West Kensington, London W14, which is fully set up for nuru. The exact address is shared when you book.',
      },
    ],
    keywords: ['nuru massage london', 'nuru massage near me', 'japanese nuru massage london', 'nuru gel massage london', 'nuru massage kensington', 'nuru massage west london'],
    relatedSlugs: ['body-to-body-massage', 'tantric-massage', 'sensual-massage'],
  },

  'full-body-massage': {
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    metaTitle: 'Full Body Massage London — From £130',
    tagline: 'Head to toe — the complete reset',
    description:
      'Full body massage in West Kensington, London W14 with Anna: an unhurried, head-to-toe, warm-oil massage in a private studio. £130 for 60 minutes.',
    intro:
      'A full body massage is exactly what it sounds like: one complete, unhurried, warm-oil session that covers the whole body — back, shoulders, neck, arms, hands, legs and feet. Nothing is skipped and nothing is rushed. It is the right choice when you want to feel thoroughly looked after from head to toe.',
    body: `
      <h2>What Is a Full Body Massage?</h2>
      <p>"Full body" describes the coverage rather than a technique. Instead of concentrating on one problem area, the session flows across every part of the body in turn, so you leave feeling evenly, completely relaxed rather than "done" in one place and neglected in another.</p>
      <p>I use warm oil and long, flowing strokes, with slower, more thorough attention on the back and shoulders, where most people carry their day.</p>

      <h2>What to Expect</h2>
      <p>The session lasts a full 60 minutes — the minimum needed to do the whole body justice. We usually begin with the back and shoulders, move down through the legs and feet, then the arms and hands, finishing around the neck. The room is warm and candlelit, and you can ask for more or less pressure at any point.</p>

      <h2>Make It Your Own</h2>
      <p>A full body massage combines beautifully with other styles. Add aromatic oils for an <a href="/services/aromatherapy-massage">aromatherapy</a> feel, or ask for a longer bespoke session that moves from full body massage into <a href="/services/sensual-massage">sensual</a> or <a href="/services/tantric-massage">tantric</a> massage. My <a href="/blog/full-body-massage-guide">full body massage guide</a> explains the sequence in more detail.</p>

      <h2>Price, Place and Hours</h2>
      <p>Full body massage is <strong>£130 for 60 minutes</strong>, paid in cash on the day. Sessions take place at ${STUDIO}, daily from 11:00 to 22:00. The exact address is shared once your booking is confirmed.</p>
    `,
    benefits: [
      'Complete head-to-toe coverage',
      'Evenly, thoroughly relaxed muscles',
      'Warm oil and flowing strokes',
      'A full reset for body and mind',
      'Pressure adjusted to you',
      'Unhurried — a full 60 minutes',
    ],
    whoFor: [
      'Those wanting a complete, unrushed massage',
      'Anyone overdue a thorough reset',
      'First-timers who want a classic massage',
      'Those treating themselves to something special',
    ],
    faqs: [
      {
        question: 'What does a full body massage include?',
        answer:
          'Back, shoulders, neck, arms, hands, legs and feet — every area receives attention in one flowing, warm-oil session. Nothing is skipped.',
      },
      {
        question: 'How long is a full body massage?',
        answer:
          'A full 60 minutes, which is the minimum needed to cover the whole body properly. Longer bespoke sessions can be arranged on request.',
      },
      {
        question: 'How much does a full body massage cost?',
        answer:
          'With Anna in West Kensington (W14), a 60-minute full body massage is £130, paid in cash on the day.',
      },
      {
        question: 'What is the difference between a full body massage and a relaxing massage?',
        answer:
          'A relaxing massage is defined by its gentle pressure and soothing pace. A full body massage is defined by its coverage — every area is treated, with firmer, more thorough work where you want it.',
      },
    ],
    keywords: ['full body massage london', 'full body massage west london', 'full body massage kensington', 'head to toe massage london'],
    relatedSlugs: ['relaxing-massage', 'sensual-massage', 'hot-stone-massage'],
  },

  'relaxing-massage': {
    slug: 'relaxing-massage',
    name: 'Relaxing Massage',
    metaTitle: 'Relaxing Massage London — From £80',
    tagline: 'Pure rest and restoration',
    description:
      'Relaxing massage in West Kensington, London W14 with Anna: gentle, soothing, warm-oil massage to help you switch off. £80 for 30 minutes, £120 for an hour.',
    intro:
      'A relaxing massage does one thing, and does it well: it helps you stop. Light-to-medium pressure, slow rhythmic strokes and a warm, quiet, candlelit room combine to calm the nervous system and let a tired body finally rest. It is the gentlest treatment on my menu.',
    body: `
      <h2>What Is a Relaxing Massage?</h2>
      <p>A relaxing massage uses the long, gliding strokes and gentle kneading of classic Swedish-style massage, applied deliberately slowly and softly. The aim is not to "fix" anything — it is to bring your whole system down a gear. The pace is steady, the transitions are smooth, and the touch is soothing rather than deep.</p>

      <h2>When to Choose It</h2>
      <p>Choose a relaxing massage when you feel stressed, overtired or simply overloaded rather than physically tight. It is also a lovely first step if you are new to massage and not yet sure what you like: comfortable, undemanding and easy to enjoy.</p>
      <p>Evening sessions are especially popular — many people find they sleep far better that night. I have written more about why in <a href="/blog/massage-for-better-sleep">massage for better sleep</a> and <a href="/blog/massage-for-stress-relief">massage for stress relief</a>.</p>

      <h2>Relaxing vs Sensual Massage</h2>
      <p>A relaxing massage is all about calm. A <a href="/services/sensual-massage">sensual massage</a> keeps that calm but adds slower, more attentive, more teasing touch. If you are unsure which you would prefer, tell me how you are feeling when you message and I will help you choose.</p>

      <h2>Price, Place and Hours</h2>
      <p>Relaxing massage is <strong>£80 for 30 minutes</strong> or <strong>£120 for an hour</strong>, paid in cash on the day. Sessions take place at ${STUDIO}, every day from 11:00 to 22:00.</p>
    `,
    benefits: [
      'Immediate relief from stress',
      'A calmer nervous system',
      'Often, noticeably better sleep',
      'Gentle release of muscle tension',
      'Soft, soothing and undemanding',
      'A warm, quiet, private room',
    ],
    whoFor: [
      'Anyone feeling stressed or overwhelmed',
      'Those who are sleeping badly',
      'First-timers wanting a gentle start',
      'Those who want rest rather than deep work',
    ],
    faqs: [
      {
        question: 'What is a relaxing massage?',
        answer:
          'A relaxing massage is a gentle, slow, warm-oil massage using light-to-medium pressure and long, soothing strokes. Its purpose is to calm the nervous system and help you switch off, rather than to work deeply on specific muscles.',
      },
      {
        question: 'How much does a relaxing massage cost?',
        answer:
          'With Anna in West Kensington (W14), a relaxing massage is £80 for 30 minutes or £120 for an hour, paid in cash on the day.',
      },
      {
        question: 'Can I fall asleep during a relaxing massage?',
        answer:
          'Absolutely — drifting off is a sign that your body has fully let go, which is exactly the point. Many people do, especially in the evening.',
      },
      {
        question: 'Is a relaxing massage a good choice for a first visit?',
        answer:
          'Yes. It is gentle, comfortable and undemanding, which makes it one of the easiest ways to try massage for the first time.',
      },
    ],
    keywords: ['relaxing massage london', 'relaxation massage london', 'relaxing massage west london', 'relaxing massage kensington', 'calming massage london'],
    relatedSlugs: ['sensual-massage', 'aromatherapy-massage', 'full-body-massage'],
  },

  'aromatherapy-massage': {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    metaTitle: 'Aromatherapy Massage London — From £90',
    tagline: 'Warm aromatic oils chosen for your mood',
    description:
      'Aromatherapy massage in West Kensington, London W14 with Anna: relaxing massage with aromatic oils chosen for your mood. £90 for 30 minutes, £120 for an hour.',
    intro:
      'Aromatherapy massage is a relaxing, warm-oil massage in which the scent is part of the treatment. Aromatic oils are chosen to suit the mood you are in — calming, warming or uplifting — so the session works on the senses as well as the body.',
    body: `
      <h2>What Is Aromatherapy Massage?</h2>
      <p>In an aromatherapy massage, fragrant plant oils are blended into a warm carrier oil and used throughout the session. As the scent fills the room and the oil glides over the skin, the experience becomes richer and more immersive than a standard massage.</p>
      <p>The massage itself is gentle and flowing: long strokes, soft kneading, and a calm, unhurried pace.</p>

      <h2>Choosing Your Oils</h2>
      <p>We choose the scent together at the start. As a guide: lavender is the classic choice for calm and sleep; citrus oils such as bergamot feel bright and uplifting; and warmer, richer scents such as ylang ylang feel soft and indulgent. If you dislike a scent, or have sensitive skin or an allergy, just say so — the oils are always adjusted to you.</p>

      <h2>The Experience</h2>
      <p>Warmth, scent and slow touch together make this one of the most soothing treatments I offer. It is a favourite with people who love fragrance and with anyone who wants a relaxing massage with an extra, sensory layer. My <a href="/blog/aromatherapy-massage-london">aromatherapy massage guide</a> looks at how the oils work.</p>

      <h2>Price, Place and Hours</h2>
      <p>Aromatherapy massage is <strong>£90 for 30 minutes</strong> or <strong>£120 for an hour</strong>, paid in cash on the day. Sessions take place at ${STUDIO}, daily from 11:00 to 22:00.</p>
    `,
    benefits: [
      'Multi-sensory relaxation',
      'Scents chosen for your mood',
      'Soft, nourished skin',
      'A calmer, lighter state of mind',
      'Gentle, flowing massage',
      'Warm and quietly indulgent',
    ],
    whoFor: [
      'Those who love scent and fragrance',
      'Anyone wanting a richer relaxing massage',
      'People who are stressed or sleeping badly',
      'Those who enjoy a sensory, immersive session',
    ],
    faqs: [
      {
        question: 'What is an aromatherapy massage?',
        answer:
          'An aromatherapy massage is a gentle, warm-oil massage that uses aromatic plant oils chosen for their scent and the mood they create — calming, warming or uplifting. The fragrance is part of the experience.',
      },
      {
        question: 'Can I choose the oils?',
        answer:
          'Yes. We choose the scent together at the start of the session, and any oils you dislike or are sensitive to are avoided entirely.',
      },
      {
        question: 'Is aromatherapy massage suitable for sensitive skin?',
        answer:
          'The aromatic oils are always diluted in a gentle carrier oil. If you have sensitive skin or any known allergy, tell me when you book and I will adjust the oils or use an unscented one.',
      },
      {
        question: 'How much does an aromatherapy massage cost?',
        answer:
          'With Anna in West Kensington (W14), aromatherapy massage is £90 for 30 minutes or £120 for an hour, paid in cash on the day.',
      },
    ],
    keywords: ['aromatherapy massage london', 'essential oil massage london', 'aromatherapy massage west london', 'aromatherapy massage kensington'],
    relatedSlugs: ['relaxing-massage', 'hot-stone-massage', 'sensual-massage'],
  },

  'hot-stone-massage': {
    slug: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    metaTitle: 'Hot Stone Massage London — From £130',
    tagline: 'Deep, melting, comforting warmth',
    description:
      'Hot stone massage in West Kensington, London W14 with Anna: smooth heated stones and warm oil for deep, melting relaxation. £130 for 60 minutes.',
    intro:
      'Hot stone massage uses smooth, heated stones together with warm oil and flowing strokes. The warmth sinks into the muscles, so they soften and let go with far less pressure than hands alone would need. It is one of the most comforting, grounding treatments there is — especially in the colder months.',
    body: `
      <h2>What Is Hot Stone Massage?</h2>
      <p>Smooth stones are warmed to a comfortable, carefully checked temperature. Some are rested on the body; others are held in the hand and glided across the muscles with warm oil, like an extension of the massage itself. The weight and steady heat of the stones is what makes the treatment so distinctive.</p>

      <h2>The Experience</h2>
      <p>Heat does much of the work. As the stones warm the muscles, tension eases without deep pressure, and most people slip into a heavy, drowsy, deeply relaxed state within the first few minutes. It is the treatment I suggest most often to people who feel cold, tired and tense — and to anyone who simply loves warmth.</p>
      <p>You are in control of the temperature throughout: if a stone ever feels too warm, say so and I will change it straight away. My <a href="/blog/hot-stone-massage-london">hot stone massage guide</a> explains what the heat does in more detail.</p>

      <h2>Is It Right for Me?</h2>
      <p>Hot stone massage suits most people. Please let me know before booking if you are pregnant, have diabetes, a heart or circulation condition, or reduced sensation in your skin — in those cases a <a href="/services/relaxing-massage">relaxing</a> or <a href="/services/aromatherapy-massage">aromatherapy massage</a> is usually the better choice.</p>

      <h2>Price, Place and Hours</h2>
      <p>Hot stone massage is <strong>£130 for 60 minutes</strong>, paid in cash on the day. Sessions take place at ${STUDIO}, daily from 11:00 to 22:00.</p>
    `,
    benefits: [
      'Deep, melting warmth',
      'Muscles soften without heavy pressure',
      'A very deep state of relaxation',
      'Comforting and grounding',
      'Wonderful in autumn and winter',
      'Temperature always adjusted to you',
    ],
    whoFor: [
      'Those who love warmth',
      'Anyone who feels cold, tired and tense',
      'People who prefer heat to firm pressure',
      'Those wanting a cosy, deeply comforting session',
    ],
    faqs: [
      {
        question: 'What is a hot stone massage?',
        answer:
          'A hot stone massage combines warm-oil massage with smooth, heated stones that are rested on the body and glided over the muscles. The heat relaxes the muscles deeply, with less pressure than a hands-only massage.',
      },
      {
        question: 'Do the stones feel too hot?',
        answer:
          'No. The stones are warmed to a comfortable temperature and checked before they touch your skin. If one ever feels too warm, tell me and I will change it immediately.',
      },
      {
        question: 'How much does a hot stone massage cost?',
        answer:
          'With Anna in West Kensington (W14), a 60-minute hot stone massage is £130, paid in cash on the day.',
      },
      {
        question: 'Who should avoid hot stone massage?',
        answer:
          'Please check with me first if you are pregnant, have diabetes, a heart or circulation condition, or reduced skin sensation. A relaxing or aromatherapy massage is usually a better option in those cases.',
      },
    ],
    keywords: ['hot stone massage london', 'hot stone massage west london', 'hot stone massage kensington', 'warm stone massage london'],
    relatedSlugs: ['aromatherapy-massage', 'relaxing-massage', 'full-body-massage'],
  },
}

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug]
}
