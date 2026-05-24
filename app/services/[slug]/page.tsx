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
    duration: '90 / 120 min',
    price: 'From £100',
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
        answer: 'Yes, and many clients do. This is not an inconvenience — it is an indication that the session is doing precisely what it is meant to do. The treatment continues as normal.',
      },
    ],
    keywords: ['relaxing massage london', 'relaxation massage london', 'calming massage london', 'soothing massage london'],
    relatedSlugs: ['swedish-massage', 'aromatherapy-massage', 'hot-stone-massage'],
  },

  'full-body-massage': {
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    tagline: 'Complete coverage from head to toe',
    description: 'A comprehensive full body massage covering all muscle groups — back, legs, arms, neck, and chest — for a complete physical reset and the most thorough relaxation experience available.',
    duration: '90 / 120 min',
    price: 'From £90',
    intro: 'A full body massage is exactly what it describes: comprehensive coverage of all major muscle groups in a single session. Back, shoulders, neck, legs, arms, hands, feet, and chest — the complete circuit of the body\'s musculature, addressed without omission.',
    body: `
      <h2>What Is a Full Body Massage?</h2>
      <p>A full body massage covers all major muscle groups in a single session. Most standard massages focus primarily on the back and shoulders — because that is where the most acute tension lives for most clients. A full body massage extends that work to include the legs (hamstrings, quadriceps, calves), the arms and hands, the chest and pectorals, and the feet.</p>
      <p>The result is a more complete physical reset than any focused treatment can provide. The body is interconnected — lower back tension often relates to tight hamstrings and hip flexors; neck tension to pectoral tightness; lower leg fatigue to gluteal holding patterns. A full body treatment addresses these connections rather than treating each area in isolation.</p>

      <h2>Duration</h2>
      <p>A full body massage requires a minimum of 90 minutes to cover the full circuit with appropriate thoroughness. 120 minutes is the optimal duration — allowing real depth of work on each area, time for transition between zones, and a pace that is genuinely relaxing rather than rushed.</p>
      <p>The 120-minute full body massage is the most indulgent option in the treatment menu and the one most frequently requested for special occasions — a birthday, anniversary, or a deliberate act of self-care after a particularly demanding period.</p>

      <h2>Technique</h2>
      <p>The technique within a full body session is tailored to your preference and the needs of each area. Upper back and shoulders typically receive deeper, more thorough work. Legs and arms may be done with a lighter, more flowing Swedish approach. Specific problem areas can receive additional time — within the session structure, the order and depth of each zone is adjusted to what you need.</p>
    `,
    benefits: [
      'Complete physical reset — no area left unaddressed',
      'Addresses whole-body tension patterns and connections',
      'The most thorough relaxation experience available',
      'Improved circulation throughout the entire body',
      'Leaves the body feeling genuinely and completely worked',
      'Best value per body area of any treatment type',
    ],
    whoFor: [
      'Those who want a thorough, complete treatment',
      'Anyone carrying tension in multiple areas',
      'Those treating themselves for a special occasion',
      'Clients who want the most comprehensive session possible',
      'Those who have never had a truly full body treatment',
    ],
    faqs: [
      {
        question: 'What exactly is included in a full body massage?',
        answer: 'Back, shoulders, neck, lower back, buttocks (through sheet), legs (front and back), feet, arms, hands, and chest/décolletage. Face and scalp can be included in 120-minute sessions on request.',
      },
      {
        question: 'Is 90 minutes enough for a full body massage?',
        answer: '90 minutes is sufficient for a thorough full body treatment at a comfortable pace. 120 minutes allows additional depth in each area and a more unhurried experience — the preferred option if time allows.',
      },
      {
        question: 'How often should I have a full body massage?',
        answer: 'Monthly full body sessions work well as a maintenance schedule. Some clients book a full body treatment quarterly and use shorter focused sessions in between.',
      },
    ],
    keywords: ['full body massage london', 'full body massage therapist london', 'whole body massage london', 'complete body massage london'],
    relatedSlugs: ['swedish-massage', 'deep-tissue-massage', 'hot-stone-massage'],
  },
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = serviceDetails[params.slug]
  if (!service) return {}

  return buildMetadata({
    title: `${service.name} London — ${service.tagline}`,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  })
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug]
  if (!service) notFound()

  const relatedServices = siteConfig.services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  )

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
  ])
  const faq = faqSchema(service.faqs)
  const schema = serviceSchema({ name: service.name, description: service.description, slug: service.slug })

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
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">{service.tagline}</p>
            <h1 className="font-display text-display-lg text-brown-dark mb-6">{service.name}</h1>
            <p className="text-lg text-brown leading-relaxed mb-8 max-w-xl">{service.intro}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-ivory border border-rose/20 rounded-full px-4 py-2 text-sm text-brown">
                <span className="text-rose text-xs">⏱</span> {service.duration}
              </span>
              <span className="inline-flex items-center gap-2 bg-ivory border border-rose/20 rounded-full px-4 py-2 text-sm text-brown">
                <span className="text-rose text-xs">£</span> {service.price}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="btn-primary">Book {service.name}</Link>
              <Link href="/pricing" className="btn-secondary">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <div className="prose-anastasia text-brown leading-relaxed space-y-5"
                  dangerouslySetInnerHTML={{ __html: service.body }} />
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection delay={1}>
                <div>
                  <h2 className="font-display text-2xl text-brown-dark mb-6">Benefits</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 bg-cream rounded-2xl border border-rose/15 p-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-2" />
                        <span className="text-sm text-brown leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Who it's for */}
              <AnimatedSection delay={2}>
                <div>
                  <h2 className="font-display text-2xl text-brown-dark mb-6">Who It&apos;s For</h2>
                  <ul className="space-y-2">
                    {service.whoFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-brown">
                        <span className="w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-28 space-y-5">
                {/* Booking */}
                <div className="bg-brown-dark rounded-3xl p-6 text-ivory">
                  <h3 className="font-display text-xl text-ivory mb-2">{service.name}</h3>
                  <p className="text-ivory/60 text-sm mb-1">{service.duration}</p>
                  <p className="text-rose text-lg font-display mb-5">{service.price}</p>
                  <Link href="/booking" className="btn-rose w-full justify-center text-sm">Book Now</Link>
                </div>

                {/* Other services */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-4">Related Treatments</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`}
                          className="text-sm text-brown hover:text-rose transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="text-xs text-rose mt-3 inline-block hover:text-rose-dark transition-colors">
                    All services →
                  </Link>
                </div>

                {/* Contact */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-4">Questions?</h3>
                  <p className="text-sm text-brown mb-4 leading-relaxed">Not sure which treatment is right for you? Get in touch.</p>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-brown hover:text-rose transition-colors">
                    <span className="text-rose">→</span> WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl text-brown-dark">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <div className="bg-ivory rounded-2xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-2">{faq.question}</h3>
                  <p className="text-brown text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
