import { Question } from "./types";

export const questions: Question[] = [
  // ===== PATTERN QUESTIONS (13) =====
  // Easy Pattern (3)
  {
    id: 1,
    question: "What comes next in the sequence? 2, 4, 8, 16, 32, ?",
    type: "pattern",
    difficulty: "easy",
    options: [
      { text: "48", isCorrect: false },
      { text: "64", isCorrect: true },
      { text: "56", isCorrect: false },
      { text: "36", isCorrect: false }
    ],
    explanation: "Each number is multiplied by 2. 32 × 2 = 64.",
    tags: ["sequence", "numbers", "doubling"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 2,
    question: "Complete the pattern: △ □ △ □ △ ?",
    type: "pattern",
    difficulty: "easy",
    options: [
      { text: "△", isCorrect: false },
      { text: "□", isCorrect: true },
      { text: "○", isCorrect: false },
      { text: "◇", isCorrect: false }
    ],
    explanation: "The pattern alternates between △ and □. After △ comes □.",
    tags: ["sequence", "shapes", "alternating"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 3,
    question: "What comes next? 1, 3, 5, 7, 9, ?",
    type: "pattern",
    difficulty: "easy",
    options: [
      { text: "10", isCorrect: false },
      { text: "11", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "13", isCorrect: false }
    ],
    explanation: "This is a sequence of consecutive odd numbers. Each number increases by 2. 9 + 2 = 11.",
    tags: ["sequence", "numbers", "arithmetic"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  // Medium Pattern (7)
  {
    id: 4,
    question: "Find the next number: 1, 1, 2, 3, 5, 8, 13, ?",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "18", isCorrect: false },
      { text: "20", isCorrect: false },
      { text: "21", isCorrect: true },
      { text: "26", isCorrect: false }
    ],
    explanation: "This is the Fibonacci sequence. Each number is the sum of the two preceding ones. 8 + 13 = 21.",
    tags: ["sequence", "fibonacci", "numbers"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 5,
    question: "What comes next in the pattern? ○ ○ □ ○ ○ □ ○ ○ ?",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "○", isCorrect: false },
      { text: "□", isCorrect: true },
      { text: "△", isCorrect: false },
      { text: "○ □", isCorrect: false }
    ],
    explanation: "The pattern is two circles followed by one square, repeating. After ○ ○ the next symbol is □.",
    tags: ["sequence", "shapes", "repeating"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 6,
    question: "Complete the sequence: 3, 6, 12, 24, 48, ?",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "64", isCorrect: false },
      { text: "72", isCorrect: false },
      { text: "96", isCorrect: true },
      { text: "84", isCorrect: false }
    ],
    explanation: "Each number is doubled. 48 × 2 = 96.",
    tags: ["sequence", "numbers", "geometric"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 7,
    question: "What number replaces the '?' in: 2, 6, 14, 30, 62, ?",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "94", isCorrect: false },
      { text: "124", isCorrect: false },
      { text: "126", isCorrect: true },
      { text: "118", isCorrect: false }
    ],
    explanation: "Each number is multiplied by 2, then 2 is added. 62 × 2 + 2 = 126. Alternatively, the differences are 4, 8, 16, 32, 64 — each difference doubles.",
    tags: ["sequence", "numbers", "compound"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 8,
    question: "In the matrix below, what replaces '?'?\n\n[△][□][○]\n[□][○][△]\n[○][?][□]",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "△", isCorrect: true },
      { text: "□", isCorrect: false },
      { text: "○", isCorrect: false },
      { text: "◇", isCorrect: false }
    ],
    explanation: "Each row and each column contains exactly one △, one □, and one ○. The bottom row has ○ and □, so ? must be △.",
    tags: ["matrix", "shapes", "latin-square"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 9,
    question: "Find the next: 1, 4, 9, 16, 25, 36, ?",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "42", isCorrect: false },
      { text: "47", isCorrect: false },
      { text: "49", isCorrect: true },
      { text: "48", isCorrect: false }
    ],
    explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6², 7² = 49.",
    tags: ["sequence", "squares", "numbers"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 10,
    question: "What comes next? A1, C3, E5, G7, ?",
    type: "pattern",
    difficulty: "medium",
    options: [
      { text: "H8", isCorrect: false },
      { text: "I9", isCorrect: true },
      { text: "J10", isCorrect: false },
      { text: "K11", isCorrect: false }
    ],
    explanation: "Letters skip one each time (A→C→E→G→I) and numbers increase by 2 (1→3→5→7→9). So the answer is I9.",
    tags: ["sequence", "alphanumeric", "dual-pattern"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  // Hard Pattern (3)
  {
    id: 11,
    question: "What comes next? 1, 4, 27, 256, 3125, ?",
    type: "pattern",
    difficulty: "hard",
    options: [
      { text: "46656", isCorrect: true },
      { text: "15625", isCorrect: false },
      { text: "7776", isCorrect: false },
      { text: "46665", isCorrect: false }
    ],
    explanation: "Each term is n^n: 1¹=1, 2²=4, 3³=27, 4⁴=256, 5⁵=3125, 6⁶=46656.",
    tags: ["sequence", "exponential", "numbers"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 12,
    question: "Complete: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ?\nNow find: the 2nd term after 34",
    type: "pattern",
    difficulty: "hard",
    options: [
      { text: "55", isCorrect: false },
      { text: "89", isCorrect: true },
      { text: "144", isCorrect: false },
      { text: "47", isCorrect: false }
    ],
    explanation: "This is the Fibonacci sequence. After 34 comes 55 (21+34), and after 55 comes 89 (34+55). The 2nd term after 34 is 89.",
    tags: ["sequence", "fibonacci", "numbers"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },
  {
    id: 13,
    question: "In the pattern below, each symbol's position follows a rotation rule. What fills the blank?\n\n[↗][→][↘]\n[↑][ ? ][↓]\n[↖][←][↙]",
    type: "pattern",
    difficulty: "hard",
    options: [
      { text: "↗", isCorrect: false },
      { text: "→", isCorrect: false },
      { text: "· (center dot)", isCorrect: true },
      { text: "↻", isCorrect: false }
    ],
    explanation: "This is a compass/matrix of all 8 directional arrows arranged around a center. The center position is the only one without a directional arrow — it should be the center point (·), completing the 3×3 directional matrix.",
    tags: ["matrix", "spatial", "rotation"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-15"
  },

  // ===== LOGIC QUESTIONS (13) =====
  // Easy Logic (3)
  {
    id: 14,
    question: "All cats have tails. Fluffy is a cat. Therefore:",
    type: "logic",
    difficulty: "easy",
    options: [
      { text: "Fluffy has a tail", isCorrect: true },
      { text: "Fluffy does not have a tail", isCorrect: false },
      { text: "Some cats do not have tails", isCorrect: false },
      { text: "All animals with tails are cats", isCorrect: false }
    ],
    explanation: "This is a classic syllogism. If all cats have tails and Fluffy is a cat, then Fluffy must have a tail.",
    tags: ["logic", "deduction", "syllogism"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 15,
    question: "If it is raining, the ground is wet. The ground is wet. Can we conclude it is raining?",
    type: "logic",
    difficulty: "easy",
    options: [
      { text: "Yes, definitely", isCorrect: false },
      { text: "No, not necessarily", isCorrect: true },
      { text: "Only if it is daytime", isCorrect: false },
      { text: "Yes, because rain is the only cause", isCorrect: false }
    ],
    explanation: "This is the fallacy of affirming the consequent. The ground could be wet for other reasons (sprinkler, spill, etc.). Rain → wet ground does not mean wet ground → rain.",
    tags: ["logic", "fallacy", "reasoning"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 16,
    question: "If no fish can fly, and a salmon is a fish, then:",
    type: "logic",
    difficulty: "easy",
    options: [
      { text: "Some fish can fly", isCorrect: false },
      { text: "A salmon cannot fly", isCorrect: true },
      { text: "A salmon can swim", isCorrect: false },
      { text: "All flying things are not fish", isCorrect: false }
    ],
    explanation: "If no fish can fly and a salmon is a fish, then a salmon cannot fly. This follows directly from the premises.",
    tags: ["logic", "deduction", "syllogism"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  // Medium Logic (7)
  {
    id: 17,
    question: "Alex is taller than Blake. Blake is taller than Casey. Casey is taller than Dana. Which statement MUST be true?",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "Dana is the shortest", isCorrect: true },
      { text: "Alex is shorter than Casey", isCorrect: false },
      { text: "Blake is the tallest", isCorrect: false },
      { text: "Dana is taller than Casey", isCorrect: false }
    ],
    explanation: "The order from tallest to shortest is: Alex > Blake > Casey > Dana. Therefore, Dana must be the shortest.",
    tags: ["logic", "ordering", "deduction"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 18,
    question: "In a room, there are 3 boxes. One contains gold, the other two are empty. Box A says: 'Gold is not here.' Box B says: 'Gold is not here.' Box C says: 'Gold is in Box B.' Only one box is telling the truth. Where is the gold?",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "Box A", isCorrect: true },
      { text: "Box B", isCorrect: false },
      { text: "Box C", isCorrect: false },
      { text: "Cannot be determined", isCorrect: false }
    ],
    explanation: "If gold is in A: A lies (gold IS here), B tells truth (gold not in B), C lies (gold not in B). Exactly 1 truth-teller. If gold is in B: A truth, B lie, C truth = 2 truth-tellers. If gold is in C: A truth, B truth, C lie = 2 truth-tellers. Only gold in A gives exactly 1 truth-teller.",
    tags: ["logic", "puzzle", "truth-teller"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 19,
    question: "If all A are B, and some B are C, which conclusion is valid?",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "All A are C", isCorrect: false },
      { text: "Some A might be C", isCorrect: true },
      { text: "No A are C", isCorrect: false },
      { text: "All C are A", isCorrect: false }
    ],
    explanation: "All A are B and some B are C. It's possible that the B's that are C include some A's, but it's not guaranteed. The only safe statement is 'Some A might be C.'",
    tags: ["logic", "syllogism", "validity"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 20,
    question: "A farmer has a fox, a chicken, and a sack of corn. He must cross a river in a boat that can carry only him and one item. If left alone, the fox eats the chicken, and the chicken eats the corn. What should he take across first?",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "The fox", isCorrect: false },
      { text: "The chicken", isCorrect: true },
      { text: "The corn", isCorrect: false },
      { text: "Any item works", isCorrect: false }
    ],
    explanation: "Taking the chicken first leaves the fox and corn together — safe since foxes don't eat corn. Then return alone, take the fox, bring back the chicken, take the corn, return alone, and take the chicken.",
    tags: ["logic", "puzzle", "river-crossing"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 21,
    question: "Statement: If it snows, schools close. Schools are open. What can we conclude?",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "It is snowing", isCorrect: false },
      { text: "It is not snowing", isCorrect: true },
      { text: "Schools might close", isCorrect: false },
      { text: "Nothing can be concluded", isCorrect: false }
    ],
    explanation: "This is modus tollens. If snow → close, and NOT close, then NOT snow. Since schools are open (not closed), it is not snowing.",
    tags: ["logic", "modus-tollens", "deduction"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 22,
    question: "Five friends sit in a row. Eve sits next to Frank. Frank sits next to Grace. Grace does NOT sit next to Helen. Helen sits next to Ivan. Who sits in the middle?",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "Eve", isCorrect: false },
      { text: "Frank", isCorrect: false },
      { text: "Grace", isCorrect: true },
      { text: "Helen", isCorrect: false }
    ],
    explanation: "From the clues: Eve-Frank-Grace must be adjacent. Helen-Ivan must be adjacent. Grace not next to Helen means the arrangement is: Eve-Frank-Grace | Helen-Ivan or Ivan-Helen | Grace-Frank-Eve. Grace sits in the middle in both valid arrangements.",
    tags: ["logic", "seating", "ordering"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 23,
    question: "If the first two statements are true, is the third statement true?\n1. All musicians are artists.\n2. Some artists are poor.\n3. Some musicians are poor.",
    type: "logic",
    difficulty: "medium",
    options: [
      { text: "Yes, definitely true", isCorrect: false },
      { text: "No, definitely false", isCorrect: false },
      { text: "Not necessarily true or false", isCorrect: true },
      { text: "Only true if all artists are musicians", isCorrect: false }
    ],
    explanation: "All musicians are artists, and some artists are poor. But the 'poor artists' might not include any musicians. We cannot conclude that some musicians are poor — it's possible but not guaranteed.",
    tags: ["logic", "syllogism", "uncertainty"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  // Hard Logic (3)
  {
    id: 24,
    question: "You meet three people: X, Y, and Z. One always tells the truth, one always lies, and one answers randomly. You can ask two yes/no questions to one person each. What is the minimum number of questions needed to identify who is who?",
    type: "logic",
    difficulty: "hard",
    options: [
      { text: "1 question", isCorrect: false },
      { text: "2 questions", isCorrect: true },
      { text: "3 questions", isCorrect: false },
      { text: "It's impossible", isCorrect: false }
    ],
    explanation: "With 2 well-chosen questions, you can identify all three. First, ask one person about another to determine if you're dealing with the random answerer. Then use the second question strategically with the identified consistent person. This is related to the famous 'Hardest Logic Puzzle Ever.'",
    tags: ["logic", "knight-knave", "meta-reasoning"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 25,
    question: "In a tournament, every player plays every other player exactly once. A total of 45 games were played. How many players were in the tournament?",
    type: "logic",
    difficulty: "hard",
    options: [
      { text: "9", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "11", isCorrect: false },
      { text: "12", isCorrect: false }
    ],
    explanation: "The number of games in a round-robin tournament is n(n-1)/2. Setting n(n-1)/2 = 45, we get n²-n-90 = 0, which factors to (n-10)(n+9) = 0, so n = 10.",
    tags: ["logic", "combinatorics", "tournament"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },
  {
    id: 26,
    question: "There are 3 switches outside a room and 3 light bulbs inside. You can flip switches as many times as you want, but you can only enter the room ONCE. How can you determine which switch controls which bulb?",
    type: "logic",
    difficulty: "hard",
    options: [
      { text: "Turn on switch 1, wait, turn on switch 2, then enter", isCorrect: false },
      { text: "Turn on switch 1 for a while, turn it off, turn on switch 2, then enter", isCorrect: true },
      { text: "Turn all switches on, then enter", isCorrect: false },
      { text: "It's impossible with only one entry", isCorrect: false }
    ],
    explanation: "Turn switch 1 on for a few minutes (bulb gets hot), then turn it off. Turn switch 2 on. Enter: the lit bulb = switch 2, the warm unlit bulb = switch 1, the cold unlit bulb = switch 3. This uses the heat property as a second signal.",
    tags: ["logic", "puzzle", "lateral-thinking"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-20"
  },

  // ===== MATH QUESTIONS (12) =====
  // Easy Math (3)
  {
    id: 27,
    question: "If a shirt costs $40 and is on sale for 25% off, what is the sale price?",
    type: "math",
    difficulty: "easy",
    options: [
      { text: "$25", isCorrect: false },
      { text: "$30", isCorrect: true },
      { text: "$35", isCorrect: false },
      { text: "$15", isCorrect: false }
    ],
    explanation: "25% of $40 = $10. $40 - $10 = $30.",
    tags: ["math", "percentage", "practical"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 28,
    question: "What is the next prime number after 7?",
    type: "math",
    difficulty: "easy",
    options: [
      { text: "8", isCorrect: false },
      { text: "9", isCorrect: false },
      { text: "11", isCorrect: true },
      { text: "10", isCorrect: false }
    ],
    explanation: "After 7, the numbers 8, 9, and 10 are not prime. 8 = 2×4, 9 = 3×3, 10 = 2×5. 11 is only divisible by 1 and itself, making it the next prime.",
    tags: ["math", "prime", "numbers"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 29,
    question: "If 3x = 21, what is x?",
    type: "math",
    difficulty: "easy",
    options: [
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "18", isCorrect: false }
    ],
    explanation: "Divide both sides by 3: x = 21 ÷ 3 = 7.",
    tags: ["math", "algebra", "equation"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  // Medium Math (6)
  {
    id: 30,
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    type: "math",
    difficulty: "medium",
    options: [
      { text: "0°", isCorrect: false },
      { text: "7.5°", isCorrect: true },
      { text: "15°", isCorrect: false },
      { text: "90°", isCorrect: false }
    ],
    explanation: "At 3:15, the minute hand is at 90° (¼ of the way around). The hour hand moves 30° per hour plus 0.5° per minute. At 3:15, it's at 90° + 7.5° = 97.5°. The angle between them is 97.5° - 90° = 7.5°.",
    tags: ["math", "angles", "clock"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 31,
    question: "If a train travels 120 km in 1.5 hours, how long will it take to travel 200 km at the same speed?",
    type: "math",
    difficulty: "medium",
    options: [
      { text: "2.0 hours", isCorrect: false },
      { text: "2.5 hours", isCorrect: true },
      { text: "3.0 hours", isCorrect: false },
      { text: "2.25 hours", isCorrect: false }
    ],
    explanation: "Speed = 120 ÷ 1.5 = 80 km/h. Time for 200 km = 200 ÷ 80 = 2.5 hours.",
    tags: ["math", "speed", "proportion"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 32,
    question: "What is the sum of all integers from 1 to 50?",
    type: "math",
    difficulty: "medium",
    options: [
      { text: "1225", isCorrect: false },
      { text: "1275", isCorrect: true },
      { text: "1250", isCorrect: false },
      { text: "1300", isCorrect: false }
    ],
    explanation: "Using the formula n(n+1)/2: 50 × 51 ÷ 2 = 1275.",
    tags: ["math", "sum", "formula"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 33,
    question: "A rectangle has a perimeter of 30 and a length of 10. What is its area?",
    type: "math",
    difficulty: "medium",
    options: [
      { text: "50", isCorrect: true },
      { text: "100", isCorrect: false },
      { text: "30", isCorrect: false },
      { text: "40", isCorrect: false }
    ],
    explanation: "Perimeter = 2(L + W). 30 = 2(10 + W), so 10 + W = 15, W = 5. Area = L × W = 10 × 5 = 50.",
    tags: ["math", "geometry", "area"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 34,
    question: "If you flip a fair coin 3 times, what is the probability of getting exactly 2 heads?",
    type: "math",
    difficulty: "medium",
    options: [
      { text: "1/8", isCorrect: false },
      { text: "3/8", isCorrect: true },
      { text: "1/2", isCorrect: false },
      { text: "1/4", isCorrect: false }
    ],
    explanation: "There are 2³ = 8 possible outcomes. Exactly 2 heads can occur in 3 ways: HHT, HTH, THH. So probability = 3/8.",
    tags: ["math", "probability", "combinatorics"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 35,
    question: "If the ratio of boys to girls in a class is 3:5 and there are 40 students total, how many more girls than boys are there?",
    type: "math",
    difficulty: "medium",
    options: [
      { text: "8", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "15", isCorrect: false }
    ],
    explanation: "The ratio 3:5 means 8 parts total. 40 ÷ 8 = 5 per part. Boys = 3 × 5 = 15, Girls = 5 × 5 = 25. Difference = 25 - 15 = 10.",
    tags: ["math", "ratio", "word-problem"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  // Hard Math (3)
  {
    id: 36,
    question: "What is the last digit of 7²⁰²⁴?",
    type: "math",
    difficulty: "hard",
    options: [
      { text: "1", isCorrect: true },
      { text: "3", isCorrect: false },
      { text: "7", isCorrect: false },
      { text: "9", isCorrect: false }
    ],
    explanation: "The last digits of powers of 7 cycle: 7, 9, 3, 1, 7, 9, 3, 1... (period 4). 2024 ÷ 4 = 506 remainder 0. When the remainder is 0, the last digit is 1.",
    tags: ["math", "modular", "pattern"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 37,
    question: "A pool can be filled by pipe A in 6 hours and pipe B in 4 hours. If both are opened together, how long will it take to fill the pool?",
    type: "math",
    difficulty: "hard",
    options: [
      { text: "2.4 hours", isCorrect: true },
      { text: "5 hours", isCorrect: false },
      { text: "2 hours", isCorrect: false },
      { text: "3 hours", isCorrect: false }
    ],
    explanation: "Pipe A fills 1/6 per hour, Pipe B fills 1/4 per hour. Together: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 12/5 = 2.4 hours.",
    tags: ["math", "rate", "word-problem"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },
  {
    id: 38,
    question: "How many distinct ways can you arrange the letters in the word 'SMART'?",
    type: "math",
    difficulty: "hard",
    options: [
      { text: "60", isCorrect: false },
      { text: "120", isCorrect: true },
      { text: "24", isCorrect: false },
      { text: "720", isCorrect: false }
    ],
    explanation: "'SMART' has 5 unique letters. The number of arrangements is 5! = 5 × 4 × 3 × 2 × 1 = 120.",
    tags: ["math", "permutation", "factorial"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-01-25"
  },

  // ===== VERBAL QUESTIONS (12) =====
  // Easy Verbal (3)
  {
    id: 39,
    question: "Hot is to Cold as Day is to ___?",
    type: "verbal",
    difficulty: "easy",
    options: [
      { text: "Night", isCorrect: true },
      { text: "Morning", isCorrect: false },
      { text: "Sun", isCorrect: false },
      { text: "Evening", isCorrect: false }
    ],
    explanation: "Hot and Cold are direct opposites (antonyms). The direct opposite of Day is Night.",
    tags: ["verbal", "analogy", "antonyms"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 40,
    question: "Which word does NOT belong in this group? Apple, Banana, Carrot, Grape",
    type: "verbal",
    difficulty: "easy",
    options: [
      { text: "Apple", isCorrect: false },
      { text: "Banana", isCorrect: false },
      { text: "Carrot", isCorrect: true },
      { text: "Grape", isCorrect: false }
    ],
    explanation: "Apple, Banana, and Grape are all fruits. Carrot is a vegetable, so it does not belong.",
    tags: ["verbal", "classification", "category"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 41,
    question: "Book is to Read as Food is to ___?",
    type: "verbal",
    difficulty: "easy",
    options: [
      { text: "Cook", isCorrect: false },
      { text: "Eat", isCorrect: true },
      { text: "Buy", isCorrect: false },
      { text: "Serve", isCorrect: false }
    ],
    explanation: "You read a book (action on object). Similarly, you eat food (action on object).",
    tags: ["verbal", "analogy", "function"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  // Medium Verbal (6)
  {
    id: 42,
    question: "Doctor is to Hospital as Teacher is to ___?",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Students", isCorrect: false },
      { text: "School", isCorrect: true },
      { text: "Education", isCorrect: false },
      { text: "Classroom", isCorrect: false }
    ],
    explanation: "A doctor works in a hospital (professional in their workplace). A teacher works in a school. The relationship is professional → workplace.",
    tags: ["verbal", "analogy", "workplace"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 43,
    question: "What is the missing word? Pen is to Write as Needle is to ___?",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Thread", isCorrect: false },
      { text: "Sew", isCorrect: true },
      { text: "Prick", isCorrect: false },
      { text: "Cloth", isCorrect: false }
    ],
    explanation: "A pen is a tool used to write. A needle is a tool used to sew. The relationship is tool → its primary function/action.",
    tags: ["verbal", "analogy", "function"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 44,
    question: "Which word is the odd one out? Dive, Swim, Float, Sink",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Dive", isCorrect: false },
      { text: "Swim", isCorrect: true },
      { text: "Float", isCorrect: false },
      { text: "Sink", isCorrect: false }
    ],
    explanation: "Dive, Float, and Sink all describe vertical movement in water (going down, staying up, going down). Swim describes horizontal movement and is an active, self-propelled action unlike the others.",
    tags: ["verbal", "classification", "odd-one-out"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 45,
    question: "BIRD is to FEATHER as FISH is to ___?",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Water", isCorrect: false },
      { text: "Scale", isCorrect: true },
      { text: "Fin", isCorrect: false },
      { text: "Gill", isCorrect: false }
    ],
    explanation: "Feathers cover a bird's body (outer covering). Scales cover a fish's body (outer covering). The relationship is animal → body covering.",
    tags: ["verbal", "analogy", "biology"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 46,
    question: "If you rearrange the letters 'CIFAIPC', you get the name of a:",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Country", isCorrect: false },
      { text: "Ocean", isCorrect: true },
      { text: "City", isCorrect: false },
      { text: "River", isCorrect: false }
    ],
    explanation: "Rearranging 'CIFAIPC' gives 'PACIFIC', which is the name of an ocean — the Pacific Ocean.",
    tags: ["verbal", "anagram", "geography"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 47,
    question: "Complete the analogy: Seed is to Tree as Egg is to ___?",
    type: "verbal",
    difficulty: "medium",
    options: [
      { text: "Chicken", isCorrect: false },
      { text: "Bird", isCorrect: true },
      { text: "Nest", isCorrect: false },
      { text: "Shell", isCorrect: false }
    ],
    explanation: "A seed develops into a tree (early stage → mature organism). An egg develops into a bird (early stage → mature organism). The broad category 'Bird' is the correct answer since not all eggs become chickens.",
    tags: ["verbal", "analogy", "development"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  // Hard Verbal (3)
  {
    id: 48,
    question: "ELOQUENT is to INARTICULATE as PRUDENT is to ___?",
    type: "verbal",
    difficulty: "hard",
    options: [
      { text: "Careful", isCorrect: false },
      { text: "Reckless", isCorrect: true },
      { text: "Thoughtful", isCorrect: false },
      { text: "Hasty", isCorrect: false }
    ],
    explanation: "Eloquent and inarticulate are antonyms (fluent vs. not fluent in speech). Prudent means wise and careful; its best antonym here is reckless (acting without care or thought).",
    tags: ["verbal", "analogy", "antonyms"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 49,
    question: "If PICTURE is coded as QJDUVSF using a specific rule, how would FRAME be coded?",
    type: "verbal",
    difficulty: "hard",
    options: [
      { text: "GSBNF", isCorrect: true },
      { text: "GSCNF", isCorrect: false },
      { text: "GSBNE", isCorrect: false },
      { text: "HRBNG", isCorrect: false }
    ],
    explanation: "Each letter is shifted one position forward in the alphabet: P→Q, I→J, C→D, T→U, U→V, R→S, E→F. Applying the same rule to FRAME: F→G, R→S, A→B, M→N, E→F = GSBNF.",
    tags: ["verbal", "cipher", "encoding"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  },
  {
    id: 50,
    question: "Which pair of words best completes the analogy? ____ is to MINUTE as ENORMOUS is to ____?",
    type: "verbal",
    difficulty: "hard",
    options: [
      { text: "Tiny ... Gigantic", isCorrect: true },
      { text: "Small ... Large", isCorrect: false },
      { text: "Brief ... Huge", isCorrect: false },
      { text: "Short ... Massive", isCorrect: false }
    ],
    explanation: "This is a dual analogy. 'Minute' (my-NOOT) means extremely small, so its antonym counterpart to ENORMOUS needs an extreme word. 'Tiny' is the extreme opposite of 'enormous' (both are intensifiers), and 'gigantic' is the extreme that pairs with 'minute.' The pattern is: extreme small : extreme small :: extreme large : extreme large.",
    tags: ["verbal", "analogy", "dual-analogy"],
    stats: { timesAnswered: 0, timesCorrect: 0 },
    createdAt: "2026-02-01"
  }
];
