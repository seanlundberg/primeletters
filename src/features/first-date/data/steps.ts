import { StoryStep } from '../types';

export const firstDateSteps: StoryStep[] = [
  // === OPENING: THE ARRIVAL ===
  {
    id: 'start',
    type: 'start',
    title: 'The Arrival',
    description: "You hear the familiar rumble of an engine outside. Peeking through the curtains, you see him stepping out of a polished 1950s convertible, checking his watch with a smile. He looks up, catches your eye, and waves. Tonight feels different.",
    buttonText: 'Open the door',
    backgroundImage: '/backgrounds/pickup.jpg',
    nextStepId: 'walking-to-door',
  },

  // REACTION: He walks to the door
  {
    id: 'walking-to-door',
    type: 'info',
    content: "You watch through the window as he walks up the path with confident, easy strides. He adjusts his fedora, runs a hand down his tie, and takes a breath before reaching your door. There's something about the way he carries himself—assured yet gentle—that makes your heart flutter just a little faster.",
    backgroundImage: '/backgrounds/walking-to-the-door.jpg',
    nextStepId: 'q1-greeting',
  },

  // ACTION: Q1 - The Greeting
  {
    id: 'q1-greeting',
    type: 'choice',
    question: 'When he walks up to you, how do you greet him?',
    backgroundImage: '/backgrounds/at-door.png',
    options: [
      { id: 'warm-smile', text: 'A warm smile', nextStepId: 'greeting-reaction' },
      { id: 'gentle-touch', text: 'A gentle touch on his arm', nextStepId: 'greeting-reaction' },
      { id: 'soft-hello', text: 'A soft "hello" and lowered gaze', nextStepId: 'greeting-reaction' },
      { id: 'playful-time', text: 'A playful "you\'re right on time"', nextStepId: 'greeting-reaction' },
    ],
  },

  // REACTION: His response to greeting
  {
    id: 'greeting-reaction',
    type: 'info',
    content: "His face lights up at your greeting, and for a moment, the world seems to narrow to just the two of you standing in the doorway. \"You look absolutely stunning,\" he says, his voice warm and genuine. He offers his arm with old-fashioned courtesy. \"Shall we?\"",
    backgroundImage: '/backgrounds/the-doorway-moment.jpg',
    nextStepId: 'walking-to-car',
  },

  // REACTION: Walking to the car
  {
    id: 'walking-to-car',
    type: 'info',
    content: "You walk together down the path, your heels clicking softly on the pavement. The evening air is perfect—warm with just a hint of coolness. The cherry-red convertible gleams in the golden light, and you can smell the faint scent of leather and polish. He guides you to the passenger side with a gentle hand at the small of your back.",
    backgroundImage: '/backgrounds/walking-together.jpg',
    nextStepId: 'q2-hand-help',
  },

  // ACTION: Q2 - Taking his hand
  {
    id: 'q2-hand-help',
    type: 'choice',
    question: 'What do you do when he offers you his hand to help you into the car?',
    backgroundImage: '/backgrounds/outreached-hand.jpg',
    options: [
      { id: 'take-gratefully', text: 'Take it gratefully', nextStepId: 'hand-reaction' },
      { id: 'squeeze-lightly', text: 'Lightly squeeze it', nextStepId: 'hand-reaction' },
      { id: 'pretend-no-help', text: 'Pretend you don\'t need help', nextStepId: 'hand-reaction' },
      { id: 'hold-longer', text: 'Hold his hand a bit longer than necessary', nextStepId: 'hand-reaction' },
    ],
  },

  // REACTION: The moment of touch
  {
    id: 'hand-reaction',
    type: 'info',
    content: "His hand is warm and steady in yours. There's a quiet strength in his grip—protective without being possessive. He helps you settle into the burgundy leather seat, and you catch the faintest smile playing at the corner of his mouth. He closes your door with care, then walks around to the driver's side.",
    backgroundImage: '/backgrounds/settling-in-with-care.jpg',
    nextStepId: 'settling-moment',
  },

  // REACTION: He gets in
  {
    id: 'settling-moment',
    type: 'info',
    content: "He slides into the driver's seat with practiced ease, and suddenly the space feels more intimate. The car smells of leather, cologne, and possibility. He turns to you before starting the engine, his eyes meeting yours with that same warm intensity. \"I've been looking forward to this all week,\" he admits.",
    backgroundImage: '/backgrounds/the-intimate-space.jpg',
    nextStepId: 'q3-compliment',
  },

  // ACTION: Q3 - Responding to compliment
  {
    id: 'q3-compliment',
    type: 'choice',
    question: 'How do you react when he compliments how lovely you look tonight?',
    backgroundImage: '/backgrounds/the-compliment.jpg',
    options: [
      { id: 'blush-away', text: 'Blush and look away', nextStepId: 'compliment-reaction' },
      { id: 'compliment-back', text: 'Tell him he looks handsome too', nextStepId: 'compliment-reaction' },
      { id: 'laugh-shy', text: 'Laugh it off shyly', nextStepId: 'compliment-reaction' },
      { id: 'hold-gaze', text: 'Hold his gaze a moment too long', nextStepId: 'compliment-reaction' },
    ],
  },

  // REACTION: His response to your reaction
  {
    id: 'compliment-reaction',
    type: 'info',
    content: "Something shifts in his expression—a deepening of that warm smile, a softness in his eyes. He reaches over and gently adjusts the rearview mirror, his movements unhurried and confident. \"Ready?\" he asks, his hand moving to the gear shift. The engine purrs to life.",
    backgroundImage: '/backgrounds/compliment-reaction.jpg',
    nextStepId: 'q4-settle',
  },

  // ACTION: Q4 - How you settle in
  {
    id: 'q4-settle',
    type: 'choice',
    question: 'How do you settle into the passenger seat?',
    backgroundImage: '/backgrounds/settling-in.jpg',
    options: [
      { id: 'smooth-skirt', text: 'Smooth your skirt as you sit', nextStepId: 'settling-reaction' },
      { id: 'turn-toward', text: 'Turn toward him, open and relaxed', nextStepId: 'settling-reaction' },
      { id: 'sit-politely', text: 'Sit politely with hands folded', nextStepId: 'settling-reaction' },
      { id: 'lean-his-way', text: 'Lean slightly his way, showing comfort', nextStepId: 'settling-reaction' },
    ],
  },

  // REACTION: The drive begins
  {
    id: 'settling-reaction',
    type: 'info',
    content: "The car glides smoothly onto the street, and the neighborhood begins to drift past in a warm blur of golden light and lengthening shadows. The wind catches your hair gently—the convertible's top is down, and the evening air feels like silk. He drives with one hand on the wheel, relaxed and assured.",
    backgroundImage: '/backgrounds/gliding-away.jpg',
    nextStepId: 'q5-hands',
  },

  // ACTION: Q5 - Hand placement
  {
    id: 'q5-hands',
    type: 'choice',
    question: 'As the car starts, what do you do with your hands?',
    backgroundImage: '/backgrounds/the-drive-begins.jpg',
    options: [
      { id: 'rest-lap', text: 'Rest them on your lap', nextStepId: 'hands-reaction' },
      { id: 'console-near', text: 'Place one on the center console near his', nextStepId: 'hands-reaction' },
      { id: 'hold-purse', text: 'Hold onto your purse', nextStepId: 'hands-reaction' },
      { id: 'brush-accidentally', text: 'Lightly brush his hand "accidentally"', nextStepId: 'hands-reaction' },
    ],
  },

  // REACTION: The awareness of closeness
  {
    id: 'hands-reaction',
    type: 'info',
    content: "You become acutely aware of the small space between you—the way his hand rests on the gear shift, the subtle shift of his shoulders as he drives, the easy confidence in his posture. The radio plays softly, something romantic and timeless. He glances over at you, catches you watching him, and smiles.",
    backgroundImage: '/backgrounds/the-glance.jpg',
    nextStepId: 'q6-cologne',
  },

  // ACTION: Q6 - Cologne reaction
  {
    id: 'q6-cologne',
    type: 'choice',
    question: 'How do you react to his cologne filling the car?',
    backgroundImage: '/backgrounds/scent.jpg',
    options: [
      { id: 'smile-softly', text: 'Smile softly without saying a word', nextStepId: 'cologne-reaction' },
      { id: 'tell-smells', text: 'Tell him he smells wonderful', nextStepId: 'cologne-reaction' },
      { id: 'close-eyes', text: 'Close your eyes for a moment to enjoy it', nextStepId: 'cologne-reaction' },
      { id: 'lean-closer', text: 'Lean in closer, pretending to look at something', nextStepId: 'cologne-reaction' },
    ],
  },

  // REACTION: The moment deepens
  {
    id: 'cologne-reaction',
    type: 'info',
    title: 'The Drive',
    content: "\"You know,\" he says, his voice low and warm over the sound of the engine, \"I can't remember the last time I felt this... comfortable with someone.\" He doesn't look at you when he says it—keeps his eyes on the road—but you can see the slight curve of his smile. The sun is setting now, painting everything in shades of gold and rose.",
    backgroundImage: '/backgrounds/cologne-reaction.jpg',
    nextStepId: 'chapter-end',
  },

  // END OF CHAPTER 1
  {
    id: 'chapter-end',
    type: 'info',
    title: 'To Be Continued...',
    content: "The evening stretches ahead of you, full of promise and possibility. Where will this drive take you? What will happen when you arrive at your destination? The story of your perfect date is just beginning...",
    buttonText: 'Coming Soon',
    nextStepId: 'chapter-end',
backgroundImage: '/backgrounds/cologne-reaction.jpg',
  },
];
