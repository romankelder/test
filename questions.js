// Roman Kelder Test: 50 progressive questions across ten categories.
const QUESTIONS = [
  {
    "category": "Normal IQ",
    "level": 1,
    "q": "A sequence is 2, 6, 12, 20, 30. Next?",
    "options": [
      "36",
      "40",
      "42",
      "44"
    ],
    "answer": 2,
    "hint": "Differences rise by 2: next difference is 12."
  },
  {
    "category": "Normal IQ",
    "level": 2,
    "q": "All Varns are Tels; no Tels are Mips. What follows?",
    "options": [
      "Some Varns are Mips",
      "No Varns are Mips",
      "All Mips are Varns",
      "Cannot tell"
    ],
    "answer": 1,
    "hint": "Varns belong to a group that excludes Mips."
  },
  {
    "category": "Normal IQ",
    "level": 3,
    "q": "A clock loses 5 minutes per real hour. Set at noon, what does it show after 6 hours?",
    "options": [
      "5:15",
      "5:30",
      "5:35",
      "5:45"
    ],
    "answer": 1,
    "hint": "It loses 30 minutes in six hours."
  },
  {
    "category": "Normal IQ",
    "level": 4,
    "q": "A painted cube is cut into 27 equal cubes. How many have exactly two painted faces?",
    "options": [
      "8",
      "12",
      "16",
      "20"
    ],
    "answer": 1,
    "hint": "There are 12 edge-centre cubes."
  },
  {
    "category": "Normal IQ",
    "level": 5,
    "q": "Double a number, add 18; the result is 4 less than five times it. What is it?",
    "options": [
      "22/3",
      "7",
      "8",
      "9"
    ],
    "answer": 0,
    "hint": "2x+18=5x−4, so x=22/3."
  },
  {
    "category": "Real life IQ",
    "level": 1,
    "q": "Wrong venue, meeting starts in 10 minutes, correct venue is 15 minutes away. Best first move?",
    "options": [
      "Leave without telling anyone",
      "Contact organiser and ask to join remotely while travelling",
      "Pretend you are there",
      "Cancel"
    ],
    "answer": 1,
    "hint": "Communicate early and offer a fallback."
  },
  {
    "category": "Real life IQ",
    "level": 2,
    "q": "A subscription renews tomorrow and you are unsure you need it. Best action?",
    "options": [
      "Ignore it",
      "Cancel without checking",
      "Check usage, terms and deadline",
      "Dispute it later"
    ],
    "answer": 2,
    "hint": "Decide using usage and renewal terms."
  },
  {
    "category": "Real life IQ",
    "level": 3,
    "q": "A client deadline is today; an internal task is due next week. Prioritise?",
    "options": [
      "The easier task",
      "Client deadline and notify affected people",
      "The task you enjoy",
      "Do both at once"
    ],
    "answer": 1,
    "hint": "Prioritise immediate impact and communicate."
  },
  {
    "category": "Real life IQ",
    "level": 4,
    "q": "A colleague's confident answer conflicts with report figures. What next?",
    "options": [
      "Accept confidence",
      "Change report quietly",
      "Check source data together",
      "Ignore both"
    ],
    "answer": 2,
    "hint": "Verify evidence before deciding."
  },
  {
    "category": "Real life IQ",
    "level": 5,
    "q": "You have 90 minutes, three errands, one shop closes in 25 minutes. Best plan?",
    "options": [
      "Remembered order",
      "Nearest first",
      "Do closing-time errand, then optimise route and hours",
      "Abandon all"
    ],
    "answer": 2,
    "hint": "Respect hard constraints, then reduce travel."
  },
  {
    "category": "Math IQ",
    "level": 1,
    "q": "What is 18% of 250?",
    "options": [
      "35",
      "40",
      "45",
      "50"
    ],
    "answer": 2,
    "hint": "0.18 × 250 = 45."
  },
  {
    "category": "Math IQ",
    "level": 2,
    "q": "A price drops 20%, then rises 20%. Final price versus original?",
    "options": [
      "Same",
      "4% lower",
      "4% higher",
      "8% lower"
    ],
    "answer": 1,
    "hint": "100 → 80 → 96."
  },
  {
    "category": "Math IQ",
    "level": 3,
    "q": "3 workers take 8 hours. At the same rate, how long for 6 workers?",
    "options": [
      "2h",
      "4h",
      "6h",
      "16h"
    ],
    "answer": 1,
    "hint": "Twice the workers means half the time."
  },
  {
    "category": "Math IQ",
    "level": 4,
    "q": "A bag has 5 red, 4 blue, 3 green balls. Probability of drawing two blue without replacement?",
    "options": [
      "1/9",
      "1/11",
      "2/11",
      "1/6"
    ],
    "answer": 1,
    "hint": "4/12 × 3/11 = 1/11."
  },
  {
    "category": "Math IQ",
    "level": 5,
    "q": "Solve 3(2x − 5) = 4x + 7.",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": 3,
    "hint": "6x−15=4x+7, so x=11."
  },
  {
    "category": "Battle IQ",
    "level": 1,
    "q": "Your team is outnumbered in open ground. Safest high-level response?",
    "options": [
      "Charge centre",
      "Use cover, avoid being pinned, seek safer route or support",
      "Split up",
      "Wait in place"
    ],
    "answer": 1,
    "hint": "Avoid a direct disadvantage; coordinate and disengage safely."
  },
  {
    "category": "Battle IQ",
    "level": 2,
    "q": "An opponent repeatedly overcommits after a feint. Best adjustment?",
    "options": [
      "Repeat unchanged",
      "Exploit the pattern while maintaining defence",
      "Stop observing",
      "Become reckless"
    ],
    "answer": 1,
    "hint": "Adapt without sacrificing defence."
  },
  {
    "category": "Battle IQ",
    "level": 3,
    "q": "Two objectives: one valuable but high-risk, one modest and low-risk. Decide based on?",
    "options": [
      "Value only",
      "Ease only",
      "Value, risk, time and cost of failure",
      "Equal split always"
    ],
    "answer": 2,
    "hint": "Weigh reward against risk and opportunity cost."
  },
  {
    "category": "Battle IQ",
    "level": 4,
    "q": "An opponent changes tactics after your counter. What follows?",
    "options": [
      "They are predictable",
      "Reassess; do not blindly repeat your response",
      "Ignore the change",
      "You have lost"
    ],
    "answer": 1,
    "hint": "Strategy must update when others adapt."
  },
  {
    "category": "Battle IQ",
    "level": 5,
    "q": "You are leading late and an opponent tries to provoke a risky response. Best move?",
    "options": [
      "Needless gamble",
      "Protect advantage and answer genuine threats",
      "Chase every provocation",
      "Abandon plan"
    ],
    "answer": 1,
    "hint": "Avoid unnecessary variance when ahead."
  },
  {
    "category": "Survival IQ",
    "level": 1,
    "q": "Lost outdoors at dusk; phone has 8% battery and no signal. Prioritise?",
    "options": [
      "Stream music",
      "Conserve battery, stay put if safe, make yourself visible",
      "Walk randomly",
      "Turn phone off and wander"
    ],
    "answer": 1,
    "hint": "Conserve resources and avoid worsening the situation."
  },
  {
    "category": "Survival IQ",
    "level": 2,
    "q": "You find an unknown wild mushroom. Safest choice?",
    "options": [
      "Taste a little",
      "Cook it",
      "Do not eat it",
      "Feed it to an animal"
    ],
    "answer": 2,
    "hint": "Poisonous species can resemble edible ones."
  },
  {
    "category": "Survival IQ",
    "level": 3,
    "q": "Which can become dangerous in cold, wet weather even above freezing?",
    "options": [
      "Sunburn",
      "Hypothermia",
      "Dehydration only",
      "Altitude sickness"
    ],
    "answer": 1,
    "hint": "Wind and wet clothing accelerate heat loss."
  },
  {
    "category": "Survival IQ",
    "level": 4,
    "q": "You smell gas inside a building. First action?",
    "options": [
      "Turn lights on",
      "Call from inside",
      "Avoid switches/flames, leave, call emergency services outside",
      "Inspect appliance"
    ],
    "answer": 2,
    "hint": "Leave without operating electrical devices."
  },
  {
    "category": "Survival IQ",
    "level": 5,
    "q": "Officials order evacuation for an approaching wildfire. Correct response?",
    "options": [
      "Wait for visible flames",
      "Evacuate promptly via official routes",
      "Drive toward it",
      "Hide in shed"
    ],
    "answer": 1,
    "hint": "Do not wait for the fire front."
  },
  {
    "category": "Looks IQ",
    "level": 1,
    "q": "What makes visual comparison between two portraits most reliable?",
    "options": [
      "Different lighting",
      "Same lighting, distance, angle and lens",
      "Different expressions",
      "Beauty filter"
    ],
    "answer": 1,
    "hint": "Control photographic variables."
  },
  {
    "category": "Looks IQ",
    "level": 2,
    "q": "A close portrait makes the nose look unusually large. Likely cause?",
    "options": [
      "Wide-angle lens very close",
      "Long lens from farther away",
      "Soft light",
      "Neutral background"
    ],
    "answer": 0,
    "hint": "Close wide-angle perspective exaggerates nearer features."
  },
  {
    "category": "Looks IQ",
    "level": 3,
    "q": "Comparing outfits for a formal event: most useful criteria?",
    "options": [
      "Brand alone",
      "Fit, dress code, colour harmony and context",
      "Price",
      "Ignore proportions"
    ],
    "answer": 1,
    "hint": "Appearance is contextual; fit and appropriateness matter."
  },
  {
    "category": "Looks IQ",
    "level": 4,
    "q": "A room feels unbalanced despite matching furniture. Examine?",
    "options": [
      "Price",
      "Visual weight, spacing, scale and distribution",
      "Age",
      "Object count only"
    ],
    "answer": 1,
    "hint": "Balance depends on scale, spacing and visual weight."
  },
  {
    "category": "Looks IQ",
    "level": 5,
    "q": "Two photos of the same person create different impressions. Best conclusion?",
    "options": [
      "One reveals true worth",
      "Pose, light, lens, styling and expression differ",
      "Flattering photo is truer",
      "Photo proves personality"
    ],
    "answer": 1,
    "hint": "A photo cannot establish a person's worth or personality."
  },
  {
    "category": "Emotional IQ",
    "level": 1,
    "q": "A friend says 'I'm fine' but seems quiet. Best response?",
    "options": [
      "Demand explanation",
      "Offer to listen without pressure",
      "Say they overreact",
      "Change subject"
    ],
    "answer": 1,
    "hint": "Offer support and respect their choice."
  },
  {
    "category": "Emotional IQ",
    "level": 2,
    "q": "Someone criticises your work publicly. Constructive first response?",
    "options": [
      "Insult them",
      "Pause and ask for specific examples",
      "Walk out",
      "Reject all criticism"
    ],
    "answer": 1,
    "hint": "Regulate your reaction and clarify useful information."
  },
  {
    "category": "Emotional IQ",
    "level": 3,
    "q": "A teammate is upset after a mistake. What helps?",
    "options": [
      "Remind them repeatedly",
      "Listen, acknowledge impact, discuss repair",
      "Tell everyone",
      "Pretend nothing happened"
    ],
    "answer": 1,
    "hint": "Empathy plus a path forward."
  },
  {
    "category": "Emotional IQ",
    "level": 4,
    "q": "You misunderstood a message and reacted sharply. Best repair?",
    "options": [
      "Wait for apology",
      "Own your assumption and apologise clearly",
      "Blame their wording",
      "Delete chat"
    ],
    "answer": 1,
    "hint": "Take responsibility without shifting blame."
  },
  {
    "category": "Emotional IQ",
    "level": 5,
    "q": "Two friends in conflict each want you to take sides. Fairest approach?",
    "options": [
      "Agree with first",
      "Repeat private comments",
      "Set boundaries and encourage direct discussion",
      "Avoid both forever"
    ],
    "answer": 2,
    "hint": "Protect confidences and avoid escalating conflict."
  },
  {
    "category": "Logic IQ",
    "level": 1,
    "q": "'The key is in the box' and 'The key is not in the box.' Exactly one is true. What follows?",
    "options": [
      "Both true",
      "Neither true",
      "Exactly one must be true",
      "Unrelated"
    ],
    "answer": 2,
    "hint": "They are exact negations."
  },
  {
    "category": "Logic IQ",
    "level": 2,
    "q": "Three switches outside a room control one incandescent bulb. Enter once. How identify its switch?",
    "options": [
      "Turn one on and enter",
      "Run one, turn it off, turn another on; use light and bulb warmth",
      "Turn all on",
      "Impossible"
    ],
    "answer": 1,
    "hint": "On/off state and residual heat distinguish switches."
  },
  {
    "category": "Logic IQ",
    "level": 3,
    "q": "A says B lies. B says C lies. C says A and B both lie. Each always tells truth or always lies. Who is truthful?",
    "options": [
      "A",
      "B",
      "C",
      "A and C"
    ],
    "answer": 1,
    "hint": "B truthful makes C and A liars; C's claim is then false."
  },
  {
    "category": "Logic IQ",
    "level": 4,
    "q": "Code: 682 one right digit/right place; 614 one right/wrong place; 206 two right/wrong place; 738 none; 780 one right/wrong place. Code?",
    "options": [
      "042",
      "024",
      "402",
      "420"
    ],
    "answer": 0,
    "hint": "The clues place 0 first, 4 second, 2 third."
  },
  {
    "category": "Logic IQ",
    "level": 5,
    "q": "12 coins; one counterfeit, heavier or lighter. Minimum balance weighings to identify it and direction?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 1,
    "hint": "Three weighings distinguish 24 possibilities."
  },
  {
    "category": "Societal IQ",
    "level": 1,
    "q": "Crime rate rises from 1 to 2 per 10,000. Best interpretation?",
    "options": [
      "Crime common everywhere",
      "Relative rate doubled; absolute rise is 1 per 10,000",
      "Twice as dangerous in every way",
      "Cause proven"
    ],
    "answer": 1,
    "hint": "Relative and absolute changes both matter."
  },
  {
    "category": "Societal IQ",
    "level": 2,
    "q": "A viral post makes a serious claim but gives no source. Before sharing?",
    "options": [
      "Share popularity",
      "Check original evidence and independent reporting",
      "Trust comments",
      "Assume image genuine"
    ],
    "answer": 1,
    "hint": "Popularity is not verification."
  },
  {
    "category": "Societal IQ",
    "level": 3,
    "q": "A policy benefits most people but severely burdens a vulnerable minority. Evaluate how?",
    "options": [
      "Majority only",
      "Assess benefits, harm distribution, rights and alternatives",
      "Reject all unequal effects",
      "Ignore harm if popular"
    ],
    "answer": 1,
    "hint": "Consider outcomes and fairness."
  },
  {
    "category": "Societal IQ",
    "level": 4,
    "q": "A graph axis starts at 95 and bars show 96 versus 97. Main concern?",
    "options": [
      "Data fabricated",
      "Truncated axis exaggerates a small difference",
      "Bars cannot show numbers",
      "Values identical"
    ],
    "answer": 1,
    "hint": "Truncated axes can magnify differences."
  },
  {
    "category": "Societal IQ",
    "level": 5,
    "q": "Debate is dominated by extremes, while most residents hold mixed views. Best interpretation?",
    "options": [
      "Extremes represent all",
      "Loudest voices may not represent opinion distribution",
      "Compromise always right",
      "Opinion unmeasurable"
    ],
    "answer": 1,
    "hint": "Visibility is not representativeness."
  },
  {
    "category": "Creative IQ",
    "level": 1,
    "q": "Design a chair from cardboard and string. Best first step?",
    "options": [
      "Decorate",
      "Define load, stability and constraints; prototype",
      "Copy chair exactly",
      "Use maximum string"
    ],
    "answer": 1,
    "hint": "Define constraints before testing a structure."
  },
  {
    "category": "Creative IQ",
    "level": 2,
    "q": "A team has 30 similar ideas. How expand the range?",
    "options": [
      "Vote",
      "Change perspective or constraint and generate different concepts",
      "Delete unusual ideas",
      "Repeat prompt"
    ],
    "answer": 1,
    "hint": "Reframing breaks out of one solution cluster."
  },
  {
    "category": "Creative IQ",
    "level": 3,
    "q": "Users misunderstand a product control. Most useful creative response?",
    "options": [
      "Longer manual",
      "Redesign around user expectations and test",
      "Blame users",
      "Add controls"
    ],
    "answer": 1,
    "hint": "Redesign the source of confusion."
  },
  {
    "category": "Creative IQ",
    "level": 4,
    "q": "Explain a complex idea to children, engineers and policymakers. Best strategy?",
    "options": [
      "Same jargon",
      "Keep core idea; adapt analogies, detail and evidence",
      "Remove nuance",
      "Pictures only"
    ],
    "answer": 1,
    "hint": "Adapt presentation without changing meaning."
  },
  {
    "category": "Creative IQ",
    "level": 5,
    "q": "A prototype fails unexpectedly but reveals a new capability. Next move?",
    "options": [
      "Discard it",
      "Study the failure and test whether the new behaviour serves the goal",
      "Declare success",
      "Repeat unchanged"
    ],
    "answer": 1,
    "hint": "Treat unexpected results as evidence."
  }
];
