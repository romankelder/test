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
      "No relation can be inferred"
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
      "5:25",
      "5:30",
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
      "Leave now and explain after arrival",
      "Contact organiser; request remote access en route",
      "Ask another attendee to cover your place",
      "Reschedule without contacting the organiser"
    ],
    "answer": 1,
    "hint": "Communicate early and offer a fallback."
  },
  {
    "category": "Real life IQ",
    "level": 2,
    "q": "A subscription renews tomorrow and you are unsure you need it. Best action?",
    "options": [
      "Ignore the renewal until it charges",
      "Cancel immediately without reviewing terms",
      "Review usage, terms and cancellation deadline",
      "Wait for the charge and request a refund"
    ],
    "answer": 2,
    "hint": "Decide using usage and renewal terms."
  },
  {
    "category": "Real life IQ",
    "level": 3,
    "q": "A client deadline is today; an internal task is due next week. Prioritise?",
    "options": [
      "Finish the easiest task to build momentum",
      "Prioritise the client deadline and alert others",
      "Work on the internal task while available",
      "Split time evenly between both tasks"
    ],
    "answer": 1,
    "hint": "Prioritise immediate impact and communicate."
  },
  {
    "category": "Real life IQ",
    "level": 4,
    "q": "A colleague's confident answer conflicts with report figures. What next?",
    "options": [
      "Trust the colleague's confidence and experience",
      "Edit the report to match the colleague's claim",
      "Compare the report with its original source data",
      "Set the disagreement aside until the deadline"
    ],
    "answer": 2,
    "hint": "Verify evidence before deciding."
  },
  {
    "category": "Real life IQ",
    "level": 5,
    "q": "You have 90 minutes, three errands, one shop closes in 25 minutes. Best plan?",
    "options": [
      "Complete the nearest errand before considering hours",
      "Choose errands based on your usual routine",
      "Do the closing-time errand, then optimise the route",
      "Skip the shop and complete the other two errands"
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
      "The original price",
      "4% below the original price",
      "4% above the original price",
      "8% below the original price"
    ],
    "answer": 1,
    "hint": "100 → 80 → 96."
  },
  {
    "category": "Math IQ",
    "level": 3,
    "q": "3 workers take 8 hours. At the same rate, how long for 6 workers?",
    "options": [
      "2 hours",
      "4 hours",
      "6 hours",
      "16 hours"
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
      "Advance directly across the open ground",
      "Use cover and seek a safer route or support",
      "Divide the team to approach from both sides",
      "Hold position until the opponent moves"
    ],
    "answer": 1,
    "hint": "Avoid a direct disadvantage; coordinate and disengage safely."
  },
  {
    "category": "Battle IQ",
    "level": 2,
    "q": "An opponent repeatedly overcommits after a feint. Best adjustment?",
    "options": [
      "Repeat the same feint to maintain pressure",
      "Adapt to the pattern while protecting your defence",
      "Stop tracking the opponent's reactions",
      "Commit more quickly to every exchange"
    ],
    "answer": 1,
    "hint": "Adapt without sacrificing defence."
  },
  {
    "category": "Battle IQ",
    "level": 3,
    "q": "Two objectives: one valuable but high-risk, one modest and low-risk. Decide based on?",
    "options": [
      "Compare the objectives by their headline value",
      "Choose the option with the lowest immediate risk",
      "Weigh value, risk, time and failure costs",
      "Give both objectives an equal share of effort"
    ],
    "answer": 2,
    "hint": "Weigh reward against risk and opportunity cost."
  },
  {
    "category": "Battle IQ",
    "level": 4,
    "q": "An opponent changes tactics after your counter. What follows?",
    "options": [
      "Assume the original counter will still work",
      "Reassess before choosing another response",
      "Ignore the change and keep your position",
      "Treat the change as proof you have lost"
    ],
    "answer": 1,
    "hint": "Strategy must update when others adapt."
  },
  {
    "category": "Battle IQ",
    "level": 5,
    "q": "You are leading late and an opponent tries to provoke a risky response. Best move?",
    "options": [
      "Take a major risk to increase the lead",
      "Protect the advantage and answer real threats",
      "Respond to every provocation immediately",
      "Abandon the plan and change tactics"
    ],
    "answer": 1,
    "hint": "Avoid unnecessary variance when ahead."
  },
  {
    "category": "Survival IQ",
    "level": 1,
    "q": "Lost outdoors at dusk; phone has 8% battery and no signal. Prioritise?",
    "options": [
      "Use the remaining battery for entertainment",
      "Conserve power, stay safe and improve visibility",
      "Walk in one direction until you find a road",
      "Switch off the phone and keep moving"
    ],
    "answer": 1,
    "hint": "Conserve resources and avoid worsening the situation."
  },
  {
    "category": "Survival IQ",
    "level": 2,
    "q": "You find an unknown wild mushroom. Safest choice?",
    "options": [
      "Taste a small amount to identify it",
      "Cook it thoroughly before eating",
      "Do not eat an unidentified mushroom",
      "Offer it to an animal to test"
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
      "Dehydration",
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
      "Turn on lights to inspect the room",
      "Call emergency services before leaving",
      "Avoid switches and flames; call outside",
      "Check the appliance for a visible leak"
    ],
    "answer": 2,
    "hint": "Leave without operating electrical devices."
  },
  {
    "category": "Survival IQ",
    "level": 5,
    "q": "Officials order evacuation for an approaching wildfire. Correct response?",
    "options": [
      "Wait until flames are visible nearby",
      "Evacuate promptly using official routes",
      "Drive closer to check the fire's direction",
      "Shelter in an outbuilding until advised"
    ],
    "answer": 1,
    "hint": "Do not wait for the fire front."
  },
  {
    "category": "Financial IQ",
    "level": 1,
    "q": "What is the main purpose of an emergency fund?",
    "options": [
      "To invest in volatile assets",
      "To cover unexpected essential expenses",
      "To increase a credit limit",
      "To pay for planned luxuries"
    ],
    "answer": 1,
    "hint": "It provides accessible cash for unexpected costs or income disruption."
  },
  {
    "category": "Financial IQ",
    "level": 2,
    "q": "You use a credit card and can afford to pay the full statement balance. What is usually the best approach?",
    "options": [
      "Pay only the minimum due",
      "Skip a payment to build cash",
      "Pay the full balance by the due date",
      "Withdraw cash from another card"
    ],
    "answer": 2,
    "hint": "Paying the statement balance on time generally avoids purchase interest."
  },
  {
    "category": "Financial IQ",
    "level": 3,
    "q": "You invest 1,000 at 10% annual compound growth. About how much is it worth after two years, before fees and tax?",
    "options": [
      "1,100",
      "1,200",
      "1,210",
      "1,220"
    ],
    "answer": 2,
    "hint": "Year one: 1,100. Year two: 1,210."
  },
  {
    "category": "Financial IQ",
    "level": 4,
    "q": "An investment returns 5% over a year while prices rise by 3%. What is the approximate real return?",
    "options": [
      "About 2% positive",
      "About 3% negative",
      "About 5% positive",
      "About 8% positive"
    ],
    "answer": 0,
    "hint": "Real return is roughly nominal return minus inflation: 5% − 3% ≈ 2%."
  },
  {
    "category": "Financial IQ",
    "level": 5,
    "q": "Why might an investor diversify across many unrelated assets?",
    "options": [
      "It guarantees a positive return each year",
      "It removes every kind of investment risk",
      "It reduces exposure to any single holding",
      "It ensures the highest possible return"
    ],
    "answer": 2,
    "hint": "Diversification can reduce asset-specific risk, but market-wide losses remain possible."
  },
  {
    "category": "Emotional IQ",
    "level": 1,
    "q": "A friend says 'I'm fine' but seems quiet. Best response?",
    "options": [
      "Ask them to explain themselves immediately",
      "Offer to listen and leave the choice to them",
      "Tell them they are making too much of it",
      "Change the subject to avoid discomfort"
    ],
    "answer": 1,
    "hint": "Offer support and respect their choice."
  },
  {
    "category": "Emotional IQ",
    "level": 2,
    "q": "Someone criticises your work publicly. Constructive first response?",
    "options": [
      "Respond with a personal criticism of your own",
      "Pause and ask for concrete examples",
      "Leave before hearing the full feedback",
      "Dismiss the criticism without discussion"
    ],
    "answer": 1,
    "hint": "Regulate your reaction and clarify useful information."
  },
  {
    "category": "Emotional IQ",
    "level": 3,
    "q": "A teammate is upset after a mistake. What helps?",
    "options": [
      "Remind them that mistakes have consequences",
      "Listen, acknowledge the impact and discuss repair",
      "Tell the rest of the team what happened",
      "Move on without acknowledging their reaction"
    ],
    "answer": 1,
    "hint": "Empathy plus a path forward."
  },
  {
    "category": "Emotional IQ",
    "level": 4,
    "q": "You misunderstood a message and reacted sharply. Best repair?",
    "options": [
      "Wait for them to apologise first",
      "Own your assumption and apologise clearly",
      "Explain why their wording caused your reaction",
      "Delete the message and avoid the topic"
    ],
    "answer": 1,
    "hint": "Take responsibility without shifting blame."
  },
  {
    "category": "Emotional IQ",
    "level": 5,
    "q": "Two friends in conflict each want you to take sides. Fairest approach?",
    "options": [
      "Agree with whichever friend spoke first",
      "Share each friend's private comments openly",
      "Set boundaries and encourage direct discussion",
      "End both friendships to avoid taking sides"
    ],
    "answer": 2,
    "hint": "Protect confidences and avoid escalating conflict."
  },
  {
    "category": "Logic IQ",
    "level": 1,
    "q": "'The key is in the box' and 'The key is not in the box.' Exactly one is true. What follows?",
    "options": [
      "Both statements can be true at once",
      "Neither statement can be true",
      "Exactly one statement must be true",
      "The statements have no logical connection"
    ],
    "answer": 2,
    "hint": "They are exact negations."
  },
  {
    "category": "Logic IQ",
    "level": 2,
    "q": "Three switches outside a room control one incandescent bulb. Enter once. How identify its switch?",
    "options": [
      "Turn one switch on and enter immediately",
      "Use light and residual bulb heat after switching",
      "Turn all three switches on before entering",
      "Try each switch in turn after entering"
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
      "2 weighings",
      "3 weighings",
      "4 weighings",
      "6 weighings"
    ],
    "answer": 1,
    "hint": "Three weighings distinguish 24 possibilities."
  },
  {
    "category": "Societal IQ",
    "level": 1,
    "q": "Crime rate rises from 1 to 2 per 10,000. Best interpretation?",
    "options": [
      "Crime has become common in every area",
      "The rate doubled, rising by one per 10,000",
      "Every resident faces twice the overall risk",
      "The increase proves a particular cause"
    ],
    "answer": 1,
    "hint": "Relative and absolute changes both matter."
  },
  {
    "category": "Societal IQ",
    "level": 2,
    "q": "A viral post makes a serious claim but gives no source. Before sharing?",
    "options": [
      "Share it because many people agree",
      "Check primary evidence and independent sources",
      "Use the comment section to assess accuracy",
      "Assume the image proves the claim"
    ],
    "answer": 1,
    "hint": "Popularity is not verification."
  },
  {
    "category": "Societal IQ",
    "level": 3,
    "q": "A policy benefits most people but severely burdens a vulnerable minority. Evaluate how?",
    "options": [
      "Focus on the total number who benefit",
      "Assess benefits, harms, rights and alternatives",
      "Reject the policy whenever effects differ",
      "Ignore minority harm if support is high"
    ],
    "answer": 1,
    "hint": "Consider outcomes and fairness."
  },
  {
    "category": "Societal IQ",
    "level": 4,
    "q": "A graph axis starts at 95 and bars show 96 versus 97. Main concern?",
    "options": [
      "The figures must have been fabricated",
      "The truncated axis makes a small gap look large",
      "A bar chart cannot compare close values",
      "The two values should be treated as equal"
    ],
    "answer": 1,
    "hint": "Truncated axes can magnify differences."
  },
  {
    "category": "Societal IQ",
    "level": 5,
    "q": "Debate is dominated by extremes, while most residents hold mixed views. Best interpretation?",
    "options": [
      "The loudest positions represent most residents",
      "Visible voices may not reflect the wider population",
      "A compromise must always be the correct view",
      "Public opinion cannot be measured reliably"
    ],
    "answer": 1,
    "hint": "Visibility is not representativeness."
  },
  {
    "category": "Creative IQ",
    "level": 1,
    "q": "Design a chair from cardboard and string. Best first step?",
    "options": [
      "Start by choosing colours and decoration",
      "Define constraints, then build and test a prototype",
      "Copy an existing chair without changing its design",
      "Use as much string as the materials allow"
    ],
    "answer": 1,
    "hint": "Define constraints before testing a structure."
  },
  {
    "category": "Creative IQ",
    "level": 2,
    "q": "A team has 30 similar ideas. How expand the range?",
    "options": [
      "Choose the most popular idea and develop it",
      "Change perspective or constraints to generate alternatives",
      "Remove unusual ideas before further discussion",
      "Ask everyone to repeat their first suggestion"
    ],
    "answer": 1,
    "hint": "Reframing breaks out of one solution cluster."
  },
  {
    "category": "Creative IQ",
    "level": 3,
    "q": "Users misunderstand a product control. Most useful creative response?",
    "options": [
      "Write a longer manual explaining every control",
      "Redesign the control and test it with users",
      "Tell users to pay closer attention next time",
      "Add more controls to make choices clearer"
    ],
    "answer": 1,
    "hint": "Redesign the source of confusion."
  },
  {
    "category": "Creative IQ",
    "level": 4,
    "q": "Explain a complex idea to children, engineers and policymakers. Best strategy?",
    "options": [
      "Use the same technical language for each audience",
      "Adapt examples and detail while keeping the core idea",
      "Remove all nuance to make the message simpler",
      "Replace the explanation entirely with pictures"
    ],
    "answer": 1,
    "hint": "Adapt presentation without changing meaning."
  },
  {
    "category": "Creative IQ",
    "level": 5,
    "q": "A prototype fails unexpectedly but reveals a new capability. Next move?",
    "options": [
      "Discard the prototype because the test failed",
      "Study the failure and test its unexpected capability",
      "Call the result a success without further testing",
      "Repeat the same test without changing anything"
    ],
    "answer": 1,
    "hint": "Treat unexpected results as evidence."
  }
];
