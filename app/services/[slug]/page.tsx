import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

interface ServiceDetail {
  slug: string
  name: string
  tagline: string
  description: string
  duration: string
  price: string
  intro: string
  body: string
  benefits: string[]
  whoFor: string[]
  faqs: { question: string; answer: string }[]
  keywords: string[]
  relatedSlugs: string[]
}

const serviceDetails: Record<string, ServiceDetail> = {
  'sensual-massage': {
    slug: 'sensual-massage',
    name: 'Sensual Massage',
    tagline: 'Slow, full-body relaxation for the senses',
    description: 'Sensual massage is a slow, full-body treatment with warm oil and unhurried, flowing strokes — designed to quiet the mind, awaken the senses, and melt away tension in a calm, candlelit setting.',
    duration: '30 / 60 min',
    price: 'From £80',
    intro: 'Sensual massage is about slowing right down. With warm oil and long, flowing, full-body strokes, the experience gently awakens the senses while quieting a busy mind. There is no rush and no script — we begin softly, your breathing settles, and the day simply falls away.',
    body: `
      <h2>What Is Sensual Massage?</h2>
      <p>Sensual massage is a full-body treatment that places relaxation and the senses at its heart. Where a clinical massage focuses on specific muscles, a sensual massage flows across the whole body in slow, continuous strokes. Warm oil, soft lighting, and an unhurried pace combine to create an experience that feels less like a treatment and more like a deeply relaxing escape.</p>

      <h2>What to Expect</h2>
      <p>Your session begins with a warm welcome and a moment to settle. The room is candlelit and warm, the oils heated, and the pace is entirely yours. I start gently and build slowly, using long, flowing strokes designed to relax the whole body and heighten your awareness of each sensation. You remain in control throughout — this is your time, and nothing is rushed.</p>

      <h2>Discretion &amp; Comfort</h2>
      <p>Privacy is paramount. Sessions are completely discreet and confidential, in a clean, comfortable in-call studio in West Kensington (W14). All you need to do is arrive freshly showered, relax, and let go.</p>
    `,
    benefits: [
      'Deep, full-body relaxation',
      'Relief from everyday stress and tension',
      'Heightened awareness of the body',
      'A calm, unhurried escape',
      'Improved mood and sense of wellbeing',
      'Complete privacy and discretion',
    ],
    whoFor: [
      'Anyone new to sensual massage',
      'Those wanting to switch off and unwind',
      'People carrying stress and tension',
      'Anyone seeking slow, sensual relaxation',
    ],
    faqs: [
      {
        question: 'What happens during a sensual massage?',
        answer: 'A sensual massage is a slow, warm-oil, full-body treatment focused on relaxation and the senses. We begin gently and unhurried, in a calm, candlelit setting. You stay comfortable and in control throughout.',
      },
      {
        question: 'Is it discreet?',
        answer: 'Completely. Every session is private and confidential — no reception, no records. It takes place in a clean, comfortable in-call studio in West Kensington (W14).',
      },
      {
        question: 'How long should my first session be?',
        answer: '30 minutes is a lovely taster, while an hour gives the experience room to fully unfold. For something longer or completely bespoke, just ask — I am always happy to arrange it.',
      },
    ],
    keywords: ['sensual massage london', 'sensual massage near me', 'erotic massage london', 'sensual full body massage london'],
    relatedSlugs: ['body-to-body-massage', 'tantric-massage', 'nuru-massage'],
  },

  'body-to-body-massage': {
    slug: 'body-to-body-massage',
    name: 'Body to Body Massage',
    tagline: 'Intimate, skin-on-skin connection',
    description: 'Body to body massage uses the whole body — not just the hands — to apply warm, gliding pressure, creating an intimate, immersive and deeply relaxing experience.',
    duration: '30 / 60 min',
    price: 'From £100',
    intro: 'Body to body massage is one of the most intimate experiences on the menu. Rather than the hands alone, the whole body is used to apply warm, gliding pressure — a closeness and connection that hands simply cannot replicate. Every movement is slow, deliberate and beautifully relaxing.',
    body: `
      <h2>What Is Body to Body Massage?</h2>
      <p>Body to body massage is a sensual technique in which the therapist uses their entire body — gliding over yours with warm oil — to deliver the massage. The result is full, continuous contact that feels enveloping and immersive. It is as much about connection and presence as it is about touch.</p>

      <h2>What to Expect</h2>
      <p>After a warm welcome, the session begins with you lying comfortably as warm oil is applied. The massage builds slowly, moving from traditional strokes into flowing, full-body contact. The pace is unhurried and entirely led by your comfort. Many clients describe it as the most relaxing and grounding experience they have had.</p>

      <h2>Discretion &amp; Comfort</h2>
      <p>Sessions are private, clean and completely confidential at my in-call studio in West Kensington (W14). Arrive freshly showered and ready to relax — everything else is taken care of.</p>
    `,
    benefits: [
      'A profound sense of closeness and connection',
      'Full-body, immersive relaxation',
      'Melts away tension and stress',
      'Warm, enveloping contact',
      'Deeply grounding and calming',
      'Private and discreet throughout',
    ],
    whoFor: [
      'Those wanting a closer, more intimate experience',
      'Anyone who finds traditional massage too clinical',
      'People seeking deep relaxation and connection',
      'Those curious about sensual bodywork',
    ],
    faqs: [
      {
        question: 'How is body to body massage different from a normal massage?',
        answer: 'Instead of using only the hands, the whole body is used to apply warm, gliding pressure. This creates a much closer, more immersive and continuous sensation than a traditional massage.',
      },
      {
        question: 'What should I do to prepare?',
        answer: 'Simply arrive freshly showered and relaxed. The room, oils and everything else are ready for you.',
      },
      {
        question: 'Where does the massage take place?',
        answer: 'At my private, discreet in-call studio in West Kensington (W14). The exact address is shared once your booking is confirmed.',
      },
    ],
    keywords: ['body to body massage london', 'b2b massage london', 'body to body massage near me', 'sensual body to body london'],
    relatedSlugs: ['nuru-massage', 'sensual-massage', 'tantric-massage'],
  },

  'tantric-massage': {
    slug: 'tantric-massage',
    name: 'Tantric Massage',
    tagline: 'A slow, breath-led full-body ritual',
    description: 'Tantric massage is a slow, mindful full-body ritual rooted in ancient tantra. Guided by breath and presence, it builds and channels energy across the whole body for deep relaxation and heightened sensation.',
    duration: '30 / 60 min',
    price: 'From £100',
    intro: 'Tantric massage is far more than a massage — it is a meditative journey. Guided by breath and presence, the treatment works with the whole body to build, move and channel energy, creating waves of relaxation and heightened awareness that leave you feeling present, alive and beautifully relaxed.',
    body: `
      <h2>What Is Tantric Massage?</h2>
      <p>Tantric massage draws on the ancient practice of tantra, where breath, energy and presence are as important as touch. Rather than rushing toward a goal, a tantric massage slows everything down. Through conscious breathing and slow, full-body strokes, energy is invited to build and move through the body — producing a deeply relaxed, almost meditative state.</p>

      <h2>What to Expect</h2>
      <p>We begin with a few quiet moments and some gentle breathing to help you arrive and settle. The massage itself is slow and flowing, working across the whole body without rushing. There is a strong emphasis on presence — being here, now, in your body. Because the experience unfolds gradually, tantric massage is best enjoyed unhurried — an hour, or a longer bespoke session if you would like.</p>

      <h2>Discretion &amp; Comfort</h2>
      <p>Every session is private, unhurried and completely confidential. Tantric massage is suitable whether you are experienced or entirely new to it — no prior knowledge is needed, only an openness to slow down.</p>
    `,
    benefits: [
      'Deep presence and relaxation',
      'Breath-led, full-body energy',
      'Heightened sensation and awareness',
      'A meditative, restorative experience',
      'Release of deep-held tension',
      'Suitable for beginners and the experienced',
    ],
    whoFor: [
      'Those drawn to a slower, more spiritual experience',
      'Anyone curious about tantra and breathwork',
      'People wanting full-body, mindful relaxation',
      'Those who enjoy unhurried, immersive sessions',
    ],
    faqs: [
      {
        question: 'Do I need any experience with tantra?',
        answer: 'Not at all. Tantric massage is welcoming to complete beginners — I will gently guide the breathing and the pace. All you need is an openness to slow down and be present.',
      },
      {
        question: 'How long should a tantric session be?',
        answer: 'Tantra is all about unhurried presence, so the more time the better. An hour is ideal, and longer bespoke sessions can be arranged if you would like the experience to unfold more slowly.',
      },
      {
        question: 'Is tantric massage relaxing or energising?',
        answer: 'Both. Many people feel deeply relaxed and calm afterwards, while also feeling pleasantly alive and present — a uniquely restorative combination.',
      },
    ],
    keywords: ['tantric massage london', 'tantra massage london', 'tantric massage near me', 'tantric massage therapist london'],
    relatedSlugs: ['sensual-massage', 'body-to-body-massage', 'nuru-massage'],
  },

  'nuru-massage': {
    slug: 'nuru-massage',
    name: 'Nuru Massage',
    tagline: 'The ultimate body-to-body experience',
    description: 'Nuru massage is the signature body-to-body experience, using a silky, odourless gel made from seaweed for an incredibly smooth, gliding sensation across the whole body.',
    duration: '30 / 60 min',
    price: 'From £100',
    intro: 'Nuru is the ultimate body-to-body experience. Originating in Japan, it uses a special odourless, colourless gel that becomes incredibly silky and slippery when warmed — creating an unbelievably smooth, gliding sensation as the whole body glides over yours. Warm, slippery and utterly indulgent.',
    body: `
      <h2>What Is Nuru Massage?</h2>
      <p>Nuru massage originated in Japan, where "nuru" means "slippery". It uses a special gel made from nori seaweed — completely odourless and colourless — that turns wonderfully silky and slippery when warmed. Combined with a body-to-body technique, the gel allows the whole body to glide effortlessly over yours, producing a sensation unlike any other massage.</p>

      <h2>What to Expect</h2>
      <p>The warmed gel is applied generously, and the massage flows from gentle, traditional strokes into smooth, full-body contact. The signature feeling of a nuru massage is the incredibly slippery, gliding sensation — immersive, warm and deeply relaxing. The gel itself is also lovely for the skin, washing away cleanly afterwards.</p>

      <h2>Discretion &amp; Comfort</h2>
      <p>Nuru sessions are private and discreet, with everything provided at my in-call studio in West Kensington (W14). Arrive freshly showered, relax, and enjoy a truly one-of-a-kind experience.</p>
    `,
    benefits: [
      'An incredibly smooth, gliding sensation',
      'The most immersive body-to-body experience',
      'Skin-softening Nuru gel',
      'Warm, slippery and indulgent',
      'Deeply relaxing and unforgettable',
      'Completely private and discreet',
    ],
    whoFor: [
      'Those wanting the most immersive sensual experience',
      'Anyone who has enjoyed body to body and wants more',
      'People curious about this unique Japanese technique',
      'Those seeking something truly indulgent',
    ],
    faqs: [
      {
        question: 'What is Nuru gel made of?',
        answer: 'Nuru gel is made from nori seaweed. It is odourless, colourless and very gentle on the skin — becoming beautifully silky and slippery when warmed, which creates the signature gliding sensation.',
      },
      {
        question: 'Is nuru massage messy?',
        answer: 'The gel is used generously, so the experience is wonderfully slippery — but it washes away cleanly with water and leaves no residue or scent. Everything is provided and taken care of.',
      },
      {
        question: 'Where does a nuru massage take place?',
        answer: 'At my private in-call studio in West Kensington (W14), which is fully set up for it. The exact address is shared when you book.',
      },
    ],
    keywords: ['nuru massage london', 'nuru massage near me', 'japanese nuru massage london', 'nuru gel massage london'],
    relatedSlugs: ['body-to-body-massage', 'sensual-massage', 'tantric-massage'],
  },

  'swedish-massage': {
    slug: 'swedish-massage',
    name: 'Swedish Massage',
    tagline: 'Classic full-body relaxation',
    description: 'Swedish massage is the foundation of modern massage therapy — long flowing strokes, gentle kneading, and rhythmic techniques that relax the entire body and calm the nervous system.',
    duration: '60 / 90 / 120 min',
    price: 'From £80',
    intro: 'Swedish massage is the most widely requested treatment — and for good reason. Long effleurage strokes, petrissage kneading, and rhythmic tapotement work together to release muscular tension, stimulate circulation, and produce a profound state of relaxation that persists well after the session ends.',
    body: `
      <h2>What Is Swedish Massage?</h2>
      <p>Swedish massage was developed in the 19th century and remains the foundational technique in Western massage therapy. It uses five core movements: effleurage (long gliding strokes), petrissage (kneading and compression), tapotement (rhythmic tapping), friction (circular pressure on specific areas), and vibration. Together, these techniques produce a treatment that is simultaneously relaxing and physically effective.</p>

      <h2>What to Expect</h2>
      <p>A full-body Swedish massage session covers the back, shoulders, legs, arms, and neck. Pressure is adjusted throughout to your preference — the technique can range from very light and soothing to firm and thorough, depending on what you need. Most clients fall somewhere in the middle: enough pressure to work the muscles meaningfully, light enough to stay in a relaxed state throughout.</p>
      <p>The room is warm, the lighting low, and the session is conducted in professional silence or with quiet background music, depending on your preference. You undress to your comfort level and are covered with a sheet throughout — only the area being worked is uncovered at any time.</p>

      <h2>The Benefits</h2>
      <p>The primary benefit of regular Swedish massage is nervous system regulation. The sustained, predictable pressure of long effleurage strokes activates the parasympathetic nervous system — the rest-and-digest state. This produces measurable reductions in cortisol, the primary stress hormone, and increases in serotonin and dopamine.</p>
      <p>Beyond the neurological effects, Swedish massage improves circulation, reduces muscular tension, and produces better sleep in the 24 hours following treatment. Many regular clients book their sessions in the evening specifically for the sleep benefit.</p>

      <h2>Duration and Frequency</h2>
      <p>A 60-minute session covers the full body with appropriate depth. 90 minutes allows for more thorough work and additional time on specific areas. 120 minutes is the most indulgent option — full body coverage with extended work on any priority areas, including face and scalp if desired.</p>
      <p>For stress management, fortnightly sessions produce good results. Monthly sessions maintain a general baseline. Weekly sessions are chosen by clients who use massage as an active part of their health maintenance routine.</p>
    `,
    benefits: [
      'Deep nervous system relaxation',
      'Reduced cortisol and stress hormones',
      'Improved sleep quality',
      'Better circulation throughout the body',
      'Release of superficial muscular tension',
      'Improved mood and sense of wellbeing',
    ],
    whoFor: [
      'Anyone experiencing stress or anxiety',
      'Those with poor sleep or insomnia',
      'First-time massage clients',
      'Anyone wanting regular self-care',
      'Those recovering from mild muscular tension',
    ],
    faqs: [
      {
        question: 'Is Swedish massage suitable for first-timers?',
        answer: 'Yes — Swedish massage is the ideal starting point for anyone new to professional massage. The techniques are gentle, the pressure is adjustable, and the experience is straightforward and comfortable.',
      },
      {
        question: 'How deep is Swedish massage?',
        answer: 'Swedish massage is generally lighter than deep tissue, but pressure is always adjusted to your preference. You can request firmer pressure throughout — the technique is flexible.',
      },
      {
        question: 'How often should I have a Swedish massage?',
        answer: 'Monthly is a good maintenance frequency. Fortnightly for active stress management or during periods of high pressure. Some clients book weekly — particularly those who use massage as a sleep intervention.',
      },
    ],
    keywords: ['swedish massage london', 'swedish massage therapist london', 'relaxation massage london', 'full body swedish massage london'],
    relatedSlugs: ['deep-tissue-massage', 'aromatherapy-massage', 'relaxing-massage'],
  },

  'deep-tissue-massage': {
    slug: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    tagline: 'Targeted work for chronic tension and pain',
    description: 'Deep tissue massage uses slow, firm pressure and friction techniques to reach the deeper layers of muscle and connective tissue — ideal for chronic tension, postural pain, and accumulated physical stress.',
    duration: '60 / 90 / 120 min',
    price: 'From £90',
    intro: 'Deep tissue massage works below the surface layer of muscle to address the chronic tension patterns that build up over months and years of desk work, poor posture, repetitive movement, and stress. It is the most effective treatment for persistent upper back pain, neck tension, lower back pain, and the shoulder tightness that accumulates in professional life.',
    body: `
      <h2>What Is Deep Tissue Massage?</h2>
      <p>Deep tissue massage uses slow, deliberate strokes and sustained pressure applied across the grain of the muscle — a technique that reaches the deeper layers of the musculature and the connective tissue (fascia) that wraps each muscle. It is not simply a harder version of Swedish massage. The techniques are different, the pace is slower, and the intention is different: instead of systemic relaxation, deep tissue aims to release specific patterns of chronic tension.</p>

      <h2>Who It's For</h2>
      <p>Deep tissue massage is most commonly requested by desk workers with upper back and neck tension, people with lower back pain, those recovering from physical strain or overtraining, and anyone carrying chronic tension that hasn't responded to lighter treatments. In London's professional population, it is by far the most frequently requested massage type — which reflects the physical reality of long hours at a screen.</p>

      <h2>What to Expect</h2>
      <p>Deep tissue massage involves more sustained pressure than Swedish. There can be moments of discomfort during the session — particularly when working on areas of chronic tension or trigger points. This is normal and expected. The level of intensity is always communicated and adjusted during the session; you are encouraged to speak up about pressure at any point.</p>
      <p>Post-session muscle soreness is common, particularly after the first deep tissue session or following work on significantly tense areas. This typically resolves within 24-48 hours and is a sign that real tissue work has been done.</p>

      <h2>Focus Areas</h2>
      <p>The most commonly addressed areas in a deep tissue session are: upper trapezius and levator scapulae (the muscles that carry desk work tension), the rhomboids (between the shoulder blades), the cervical muscles (neck), the lumbar erectors (lower back), and the piriformis (deep gluteal muscle, often involved in hip and lower back pain).</p>
      <p>A session can address the full back and neck, or can focus on one or two specific areas with greater depth and thoroughness, depending on what you need.</p>
    `,
    benefits: [
      'Release of chronic muscular tension',
      'Pain relief for back, neck and shoulder issues',
      'Improved postural alignment',
      'Breakdown of adhesions and scar tissue',
      'Improved range of motion',
      'Long-lasting results with regular treatment',
    ],
    whoFor: [
      'Desk workers with neck and back pain',
      'Those with chronic muscular tension',
      'People with postural issues',
      'Athletes and physically active individuals',
      'Those who haven\'t found relief with lighter massage',
    ],
    faqs: [
      {
        question: 'Is deep tissue massage painful?',
        answer: 'It can be uncomfortable in areas of chronic tension — but should never be acutely painful. Pressure is always adjusted during the session. Many clients describe it as "good pain" — the productive discomfort of real work being done.',
      },
      {
        question: 'How many sessions do I need for deep tissue massage to work?',
        answer: 'Most clients notice significant improvement after 2-3 sessions. Chronic long-term tension typically requires more. A maintenance schedule of monthly sessions works well once initial tension has been addressed.',
      },
      {
        question: 'Should I be sore after deep tissue massage?',
        answer: 'Some soreness in the 24-48 hours after treatment is normal and expected, particularly for first sessions or after significant tension has been addressed. Hydration and gentle movement help recovery.',
      },
    ],
    keywords: ['deep tissue massage london', 'deep tissue massage therapist london', 'deep tissue back massage london', 'deep tissue neck massage london'],
    relatedSlugs: ['sports-massage', 'therapeutic-massage', 'swedish-massage'],
  },

  'sports-massage': {
    slug: 'sports-massage',
    name: 'Sports Massage',
    tagline: 'For active bodies and athletic recovery',
    description: 'Sports massage combines deep tissue techniques, stretching, and targeted work to support training, accelerate recovery, and address the specific muscular demands of athletic activity.',
    duration: '60 / 90 min',
    price: 'From £85',
    intro: 'Sports massage is not only for elite athletes — it is for anyone who exercises regularly and wants to train harder, recover faster, and stay injury-free for longer. Whether you run, cycle, lift weights, play sport, or simply lead an active life, sports massage addresses the specific muscular demands of your activity.',
    body: `
      <h2>What Is Sports Massage?</h2>
      <p>Sports massage draws from deep tissue techniques, myofascial release, and targeted stretching to address the specific patterns of muscular tension, tightness, and fatigue that result from regular physical activity. It is more focused and functional than general relaxation massage — the goal is improved physical performance, faster recovery, and reduced injury risk.</p>

      <h2>Pre-Event and Post-Event</h2>
      <p>Sports massage serves different purposes depending on timing. Pre-event massage (24-48 hours before a race or competition) uses lighter, stimulating techniques to increase blood flow, warm the tissues, and prime the neuromuscular system. Post-event massage (24-72 hours after) uses deeper, restorative techniques to clear metabolic waste, reduce inflammation, and accelerate the repair of microtrauma in the muscle fibres.</p>
      <p>Maintenance sports massage — the most commonly booked type — is performed between training blocks and addresses accumulated tension, identifies developing problem areas before they become injuries, and maintains tissue quality over the long training season.</p>

      <h2>Common Treatment Areas</h2>
      <p>For runners: calves, hamstrings, IT band, quadriceps, hip flexors, and lower back. For cyclists: hamstrings, quadriceps, piriformis, upper trapezius (from road position), and hip flexors. For gym-based training: depending on the programme — typically upper back, pectorals, biceps/triceps, and lower back for lifting-focused work.</p>

      <h2>Recovery and Injury Prevention</h2>
      <p>The most consistent finding in sports massage research is the reduction in next-day soreness (DOMS) when massage is performed within 72 hours of training. Beyond this, regular sports massage maintains tissue pliability and identifies areas of concern — developing trigger points, early fascial restriction, or the muscle imbalances that precede most overuse injuries — before they become significant problems.</p>
    `,
    benefits: [
      'Faster recovery between training sessions',
      'Reduced DOMS (delayed onset muscle soreness)',
      'Improved flexibility and range of motion',
      'Injury prevention through tissue maintenance',
      'Identification of problem areas before they become injuries',
      'Better training performance',
    ],
    whoFor: [
      'Runners, cyclists, and endurance athletes',
      'Gym-goers and strength trainers',
      'Weekend warriors and recreational athletes',
      'Those preparing for or recovering from events',
      'Anyone with an active lifestyle',
    ],
    faqs: [
      {
        question: 'When should I book a sports massage relative to my training?',
        answer: 'For recovery: 24-72 hours after a hard session or event. For maintenance: any time between training blocks. Avoid deep sports massage in the 24 hours before a key session or race.',
      },
      {
        question: 'Do I need to be a serious athlete for sports massage?',
        answer: 'No. Sports massage is appropriate for anyone who exercises regularly — from those who run twice a week to those training for marathons. The techniques are adjusted to your level and goals.',
      },
      {
        question: 'What should I tell you before a sports massage?',
        answer: 'Your sport or training type, current training volume, any areas of concern, recent injuries, and what you want from the session (recovery, specific area focus, general maintenance).',
      },
    ],
    keywords: ['sports massage london', 'sports massage therapist london', 'sports recovery massage london', 'post-run massage london'],
    relatedSlugs: ['deep-tissue-massage', 'therapeutic-massage', 'full-body-massage'],
  },

  'aromatherapy-massage': {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    tagline: 'Swedish technique with essential oils',
    description: 'Aromatherapy massage combines the relaxing techniques of Swedish massage with the therapeutic properties of pure essential oils — creating a deeply sensory treatment that works on both the physical and neurological levels.',
    duration: '60 / 90 / 120 min',
    price: 'From £90',
    intro: 'Aromatherapy massage combines Swedish massage technique with the use of carefully selected essential oils — blended according to your specific needs. The oils are absorbed through the skin and inhaled during the session, producing effects that go beyond standard relaxation massage.',
    body: `
      <h2>What Is Aromatherapy Massage?</h2>
      <p>Aromatherapy massage uses pure essential oils — plant-derived aromatic compounds — blended into a carrier oil and applied during the massage treatment. The oils serve two purposes: they are absorbed transdermally (through the skin) into the bloodstream, and they are inhaled as vapour during the session, acting directly on the limbic system (the brain's emotional centre) via the olfactory nerve.</p>
      <p>The massage technique itself follows Swedish principles — long effleurage strokes, gentle petrissage, and flowing movements that distribute the oil blend across the body while providing the physical relaxation benefits of a full-body treatment.</p>

      <h2>Oil Selection</h2>
      <p>Essential oils are selected based on your needs and preferences at the start of each session. Common choices include lavender for relaxation and sleep, bergamot and citrus blends for mood and energy, frankincense for deep calm and anti-inflammatory properties, eucalyptus and peppermint for muscle pain and congestion, and rose or ylang ylang for stress and emotional tension.</p>
      <p>The blend is always created fresh for your session and tailored to what you are dealing with — not a pre-set generic oil applied to everyone.</p>

      <h2>The Experience</h2>
      <p>Aromatherapy massage is among the most sensory of all treatment types. The warmth of the room, the scent of the oils, and the flowing quality of the massage technique combine to create an experience that is distinctly different from a standard Swedish session. Many clients report a deeper state of relaxation and a more pronounced post-session sense of calm.</p>
    `,
    benefits: [
      'Deep relaxation and stress relief',
      'Mood improvement and emotional balance',
      'Improved sleep quality',
      'Skin nourishment from pure oils',
      'Anti-inflammatory effects from specific oils',
      'Highly sensory and immersive experience',
    ],
    whoFor: [
      'Those dealing with anxiety or low mood',
      'Anyone wanting a deeply relaxing experience',
      'Those with stress-related sleep issues',
      'Clients who appreciate a sensory treatment',
      'Those who enjoy fragrance and want it incorporated into their session',
    ],
    faqs: [
      {
        question: 'Can I choose my own essential oils?',
        answer: 'Yes. A brief consultation at the start of the session covers your preferences and needs, and the blend is created accordingly. If you have known sensitivities to any oils, these are avoided entirely.',
      },
      {
        question: 'Is aromatherapy massage suitable for sensitive skin?',
        answer: 'Oils are diluted in a carrier oil to safe percentages. Any known allergies or skin sensitivities should be mentioned on booking or at the start of the session — oil selection will be adjusted accordingly.',
      },
      {
        question: 'How does aromatherapy massage differ from Swedish?',
        answer: 'The technique is largely the same — Swedish-style strokes and kneading. The difference is the use of essential oils, which add sensory depth and specific therapeutic properties beyond what touch alone provides.',
      },
    ],
    keywords: ['aromatherapy massage london', 'essential oil massage london', 'aromatherapy therapist london', 'relaxing aromatherapy massage london'],
    relatedSlugs: ['swedish-massage', 'relaxing-massage', 'hot-stone-massage'],
  },

  'hot-stone-massage': {
    slug: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    tagline: 'Deep warmth and muscular release',
    description: 'Hot stone massage uses smooth, heated basalt stones to warm the deep muscle tissue — allowing tensions to release more fully than with hands alone, and creating a uniquely comforting and grounding experience.',
    duration: '60 min',
    price: 'From £130',
    intro: 'Hot stone massage uses smooth basalt stones, heated to approximately 55°C, to work the muscles alongside the therapist\'s hands. The heat penetrates deeply into the muscle tissue, allowing it to release more fully and with less pressure than cold hands alone could achieve.',
    body: `
      <h2>What Is Hot Stone Massage?</h2>
      <p>Hot stone massage uses smooth, volcanic basalt stones heated in water to a carefully controlled temperature. The stones are placed on key points of the body (along the spine, on the palms, between the toes) and also used as tools — gliding across the muscles in the same movements used in Swedish massage, but with the added benefit of deep radiant heat.</p>
      <p>The heat from the stones penetrates 3-5cm into the muscle tissue, warming it to a degree that allows it to soften and release with significantly less applied pressure than in a standard massage. This makes hot stone massage particularly effective for clients who carry significant tension but prefer not to have deep direct pressure.</p>

      <h2>The Experience</h2>
      <p>Hot stone massage is one of the most distinctive and deeply relaxing treatments available. The warmth of the stones produces an immediate and profound physical response — muscles soften, the nervous system shifts into a deeply parasympathetic state, and many clients enter a sleep-like state of relaxation well before the session is complete.</p>
      <p>The contrast between the heated stones and the room temperature produces a thermal effect that is particularly noticeable in the cooler months. Many clients specifically request hot stone massage in autumn and winter for this reason.</p>

      <h2>Duration</h2>
      <p>Hot stone massage requires 90 minutes as a minimum — the setup time for the stones and the slower, more deliberate pace of the treatment mean a 60-minute session would be too compressed. 120 minutes is the optimal duration for a full-body hot stone treatment with appropriate depth throughout.</p>
    `,
    benefits: [
      'Deep muscular warming and release',
      'Very deep relaxation state',
      'Relief from chronic muscle stiffness',
      'Improved circulation from heat application',
      'Particularly effective for cold and tight muscles',
      'Grounding and comforting sensory experience',
    ],
    whoFor: [
      'Those with significant muscular tension',
      'Clients who prefer warmth over direct pressure',
      'Those who want a deeply comforting experience',
      'Particularly popular in autumn and winter',
      'Those with poor circulation or chronically cold muscles',
    ],
    faqs: [
      {
        question: 'Is hot stone massage safe?',
        answer: 'Yes, when performed by a qualified therapist. Stone temperature is carefully controlled and monitored throughout the session. Any discomfort from heat should be mentioned immediately so stones can be adjusted.',
      },
      {
        question: 'How is hot stone massage different from a standard massage?',
        answer: 'The stones do two things standard massage can\'t: penetrate with radiant heat deep into the muscle, and produce an almost immediate state of deep physical relaxation through thermal stimulation of the nervous system.',
      },
      {
        question: 'Who should avoid hot stone massage?',
        answer: 'Hot stone massage should be avoided during pregnancy, by those with diabetes affecting sensation, those with certain skin conditions, or those with cardiovascular conditions. Please mention any relevant medical history when booking.',
      },
    ],
    keywords: ['hot stone massage london', 'hot stone massage therapist london', 'lava stone massage london', 'warm stone massage london'],
    relatedSlugs: ['swedish-massage', 'aromatherapy-massage', 'deep-tissue-massage'],
  },

  'therapeutic-massage': {
    slug: 'therapeutic-massage',
    name: 'Therapeutic Massage',
    tagline: 'Targeted treatment for pain and dysfunction',
    description: 'Therapeutic massage is a results-focused approach that combines techniques from deep tissue, myofascial release, and trigger point therapy to address specific pain, dysfunction, or postural issues.',
    duration: '60 / 90 min',
    price: 'From £85',
    intro: 'Therapeutic massage is less about a single technique and more about an outcome: addressing a specific problem. Whether that problem is recurring back pain, a tension headache pattern, shoulder restriction, or hip tightness, therapeutic massage is structured around assessment and targeted intervention.',
    body: `
      <h2>What Is Therapeutic Massage?</h2>
      <p>Therapeutic massage is a clinical approach to soft tissue treatment that draws from multiple techniques — deep tissue, myofascial release, trigger point therapy, and neuromuscular technique — to address specific musculoskeletal complaints. Unlike a relaxation or wellbeing massage, the therapeutic approach begins with a brief assessment of the issue and structures the session accordingly.</p>

      <h2>The Assessment Process</h2>
      <p>Each therapeutic session begins with a short consultation covering the primary complaint, its history, any associated symptoms, relevant medical history, and what has been tried previously. For recurring issues, this assessment becomes the basis for a treatment plan across multiple sessions.</p>
      <p>Postural observation and basic range-of-motion assessment may be included for musculoskeletal complaints — not a medical examination, but an informed professional look at how the body is holding and moving that guides the session's focus.</p>

      <h2>Common Applications</h2>
      <p>Therapeutic massage is most effective for: chronic lower back pain, recurring neck and shoulder tension, tension headaches, hip flexor tightness (common in sedentary workers), IT band syndrome (common in runners), and general postural dysfunction from prolonged desk work or driving.</p>
      <p>It is often chosen by clients who have tried lighter massage and felt it was not specific enough, or by those dealing with a particular complaint they want to address systematically rather than just manage temporarily.</p>
    `,
    benefits: [
      'Targeted relief for specific pain and dysfunction',
      'Systematic improvement over multiple sessions',
      'Addresses underlying causes not just symptoms',
      'Combines multiple techniques for best results',
      'Appropriate for chronic or recurring conditions',
      'Works alongside physiotherapy and other treatments',
    ],
    whoFor: [
      'Those with chronic or recurring pain',
      'Clients who want results-focused treatment',
      'Those with specific musculoskeletal complaints',
      'People working alongside physio or other treatment',
      'Those who haven\'t found lasting relief elsewhere',
    ],
    faqs: [
      {
        question: 'What is the difference between therapeutic and deep tissue massage?',
        answer: 'Deep tissue massage uses a specific set of techniques. Therapeutic massage is defined by the goal — addressing a specific complaint — and may use deep tissue alongside other approaches such as trigger point or myofascial release.',
      },
      {
        question: 'How many therapeutic massage sessions will I need?',
        answer: 'For acute issues: often 2-3 sessions. For chronic conditions: typically 4-6 sessions to produce lasting change, followed by maintenance. The trajectory varies depending on the condition and how long it has been present.',
      },
      {
        question: 'Is therapeutic massage covered by health insurance?',
        answer: 'Some UK health insurance plans cover massage therapy — particularly Bupa and Vitality. Check your policy. Receipts can be provided if needed for insurance claims.',
      },
    ],
    keywords: ['therapeutic massage london', 'remedial massage london', 'massage for back pain london', 'therapeutic massage therapist london'],
    relatedSlugs: ['deep-tissue-massage', 'sports-massage', 'swedish-massage'],
  },

  'relaxing-massage': {
    slug: 'relaxing-massage',
    name: 'Relaxing Massage',
    tagline: 'Pure rest and restoration',
    description: 'A deeply relaxing full-body massage focused on rest, restoration, and nervous system reset — using light to medium pressure, slow strokes, and a calm, unhurried pace.',
    duration: '60 / 90 / 120 min',
    price: 'From £80',
    intro: 'Sometimes the most important thing a massage can do is simply help you stop. A relaxing massage is precisely that — an hour or more of slow, soothing work designed to quiet the nervous system, ease muscular holding patterns, and return you to a state of genuine physical rest.',
    body: `
      <h2>What Is a Relaxing Massage?</h2>
      <p>A relaxing massage prioritises the parasympathetic nervous system response above all else. The techniques — effleurage, gentle petrissage, slow rhythmic work — are the same as Swedish massage, but the application is deliberately unhurried and soothing. The pace is slower, the transitions smoother, and the intention is a sustained state of physical and mental quiet rather than thorough muscular work.</p>
      <p>For many clients, this is the most appropriate treatment for their current state. Deep tissue work requires some physical and psychological engagement from the recipient. When the nervous system is already exhausted, when sleep has been poor, or when the primary need is simply to decompress, a relaxing treatment is the better clinical choice.</p>

      <h2>Sleep and the Evening Session</h2>
      <p>A relaxing massage booked in the evening — particularly 18:00–20:00 — produces reliable improvements in sleep quality that same night. The reduction in cortisol, the increase in serotonin, and the physical muscular release combine to lower the arousal state that frequently prevents sleep in high-stress populations.</p>
      <p>Many regular clients in London's professional sector book their relaxing massage on a Thursday or Friday evening specifically for this reason — using it as a deliberate transition between the working week and the weekend.</p>

      <h2>Who It's For</h2>
      <p>A relaxing massage is the right choice when you are stressed and depleted rather than physically tight. It is also the right starting point for clients new to massage who are unsure of what they want — a gentle, comfortable, non-demanding introduction to regular bodywork that can be refined in subsequent sessions.</p>
    `,
    benefits: [
      'Profound physical and mental relaxation',
      'Significant improvement in sleep quality',
      'Cortisol reduction and stress hormone balance',
      'Gentle muscular tension release',
      'Restoration of a calm baseline nervous system state',
      'Sense of wellbeing that persists for 24-48 hours',
    ],
    whoFor: [
      'Those who are stressed and depleted',
      'Anyone with sleep difficulties',
      'New massage clients wanting a gentle start',
      'Those who want rest rather than remedial work',
      'Regular clients between deeper sessions',
    ],
    faqs: [
      {
        question: 'What is the difference between relaxing massage and Swedish massage?',
        answer: 'Swedish massage uses the same techniques but can be applied with varying intent and pressure. A relaxing massage is specifically set up for rest and calm — slower pace, lighter touch, more passive experience for the recipient.',
      },
      {
        question: 'Is a relaxing massage still physically effective?',
        answer: 'Yes. Even light massage reliably reduces cortisol, improves circulation, and releases muscular tension. The effects are less targeted than deep tissue but are significant — particularly for the nervous system and sleep.',
      },
      {
        question: 'Can I fall asleep during a relaxing massage?',
        answer: 'Absolutely — falling asleep is a sign that the nervous system has fully let go, which is exactly the goal. Many clients drift off mid-session, particularly during evening appointments. The session continues at the same pace until the end.',
      },
    ],
    keywords: ['relaxing massage london', 'relaxation massage london', 'full body relaxing massage london', 'calming massage london'],
    relatedSlugs: ['swedish-massage', 'aromatherapy-massage', 'hot-stone-massage'],
  },

  'full-body-massage': {
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    tagline: 'Head to toe — the complete experience',
    description: 'A full body massage covers every area from shoulders to feet in one complete, flowing session — combining relaxation and therapeutic techniques for a thorough treatment that leaves the whole body feeling cared for.',
    duration: '60 min',
    price: 'From £130',
    intro: 'A full body massage is exactly what it sounds like: a complete, unrushed treatment that covers every area from the scalp to the feet. No area is left behind, no part of the body neglected. For many clients, it is the most satisfying treatment on the menu — because it addresses everything at once.',
    body: `
      <h2>What Is a Full Body Massage?</h2>
      <p>A full body massage covers the complete body — back, shoulders, neck, arms, hands, legs, feet, and often the face and scalp — in one flowing session. Rather than focusing on a specific complaint or area, the aim is comprehensive coverage: every muscle group receives attention, every joint is moved through its range, and the body emerges from the session feeling genuinely, thoroughly cared for.</p>
      <p>The techniques used vary according to what each area needs. The back and shoulders typically receive deeper, more thorough work. The legs and arms benefit from long effleurage strokes. The feet and hands receive focused attention. The neck and scalp are treated last, as clients are often in a deeply relaxed state by that point.</p>

      <h2>Duration and Depth</h2>
      <p>A full body massage requires a minimum of 60 minutes to cover the whole body with appropriate depth. In 60 minutes, each area receives a thorough but time-efficient treatment. 90 minutes allows for greater depth and more time on priority areas. 120 minutes is the most complete option — full body coverage with extended work wherever it is most needed, and time to go slowly.</p>

      <h2>When to Choose a Full Body Massage</h2>
      <p>A full body massage is the right choice when you want comprehensive coverage rather than targeted work on one area, when you have not had a massage in some time and want a thorough reset, when you are treating yourself and want the most complete experience, or when you are unsure where to start and would like to experience the full range of massage therapy.</p>
    `,
    benefits: [
      'Complete head-to-toe coverage',
      'Thorough muscular and nervous system reset',
      'Improved circulation throughout the body',
      'Deep relaxation and stress relief',
      'The most comprehensive treatment available',
      'Leaves the body feeling entirely cared for',
    ],
    whoFor: [
      'Those wanting a complete, unrushed treatment',
      'Anyone overdue a thorough massage',
      'Those treating themselves to something special',
      'First-timers who want to experience everything',
      'Regular clients wanting a comprehensive session',
    ],
    faqs: [
      {
        question: 'What does a full body massage include?',
        answer: 'Back, shoulders, neck, arms, hands, legs, feet — and optionally the face and scalp. Every area of the body receives attention in one flowing session. Nothing is skipped.',
      },
      {
        question: 'How long does a full body massage take?',
        answer: "A minimum of 60 minutes is needed to do justice to the whole body. 90 minutes allows greater depth throughout. 120 minutes is the most thorough and unhurried version — highly recommended if you haven't been massaged in a while.",
      },
      {
        question: 'What is the difference between a full body massage and a Swedish massage?',
        answer: 'Swedish massage is a technique. Full body massage refers to the coverage. A full body massage typically uses Swedish techniques, but the emphasis is on completeness — ensuring every area is addressed, not just the back and legs.',
      },
    ],
    keywords: ['full body massage london', 'full body massage therapist london', 'head to toe massage london', 'complete massage london'],
    relatedSlugs: ['swedish-massage', 'relaxing-massage', 'hot-stone-massage'],
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getService(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug]
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}

  return buildMetadata({
    title: `${service.name} in London`,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  })
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
  ])
  const faq = faqSchema(service.faqs)
  const schema = serviceSchema({
    name: service.name,
    description: service.description,
    slug: service.slug,
  })

  const relatedServices = service.relatedSlugs
    .map((slug) => serviceDetails[slug])
    .filter(Boolean) as ServiceDetail[]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-brown-muted mb-6 flex-wrap">
              <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brown-dark transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brown-dark">{service.name}</span>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">{service.duration} · {service.price}</p>
            <h1 className="font-display text-display-lg text-brown-dark mb-4">{service.name}</h1>
            <p className="text-lg text-brown-muted italic mb-6">{service.tagline}</p>
            <p className="text-brown leading-relaxed mb-8 max-w-xl">{service.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book on WhatsApp
              </a>
              <Link href="/services" className="btn-secondary">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main body */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div
                  className="prose-anastasia text-brown leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: service.body }}
                />
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection delay={1}>
                <div className="bg-cream rounded-3xl border border-rose/15 p-7 lg:sticky lg:top-28">
                  <h3 className="font-display text-xl text-brown-dark mb-4">Book This Service</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-brown-muted">Duration</span>
                      <span className="text-brown-dark font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-brown-muted">Price</span>
                      <span className="text-rose-dark font-medium">{service.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-brown-muted">Location</span>
                      <span className="text-brown-dark font-medium">In-call · W14</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Book on WhatsApp
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="btn-secondary w-full text-center block mt-3"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <div className="bg-cream rounded-3xl border border-rose/15 p-7">
                  <h3 className="font-display text-xl text-brown-dark mb-4">Benefits</h3>
                  <ul className="space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-brown">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">Who Is This For?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whoFor.map((item) => (
              <AnimatedSection key={item}>
                <div className="bg-ivory rounded-2xl border border-rose/15 p-5 flex items-start gap-3">
                  <span className="text-rose text-sm flex-shrink-0 mt-0.5">✦</span>
                  <span className="text-sm text-brown">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-ivory">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">Common Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <div className="bg-cream rounded-2xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-3">{faq.question}</h3>
                  <p className="text-sm text-brown leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section bg-cream">
          <div className="container-site">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-display-md text-brown-dark">You Might Also Like</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((related, i) => (
                <AnimatedSection key={related.slug} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                  <Link href={`/services/${related.slug}`} className="service-card flex flex-col h-full group">
                    <h3 className="font-display text-xl text-brown-dark mb-2 group-hover:text-brown transition-colors">{related.name}</h3>
                    <p className="text-sm text-brown-muted leading-relaxed line-clamp-2 mb-4">{related.tagline}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose/20">
                      <span className="text-xs text-brown-muted">{related.price}</span>
                      <span className="text-rose text-xs">→</span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCTA />
    </>
  )
}
