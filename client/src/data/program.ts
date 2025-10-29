export interface ProgramSession {
  time: string;
  session: string;
  speaker?: string;
  type?: string;
  location?: string;
}

export interface ProgramDay {
  day: string;
  date: string;
  sessions: ProgramSession[];
}

export const program: ProgramDay[] = [
  {
    day: "Day 1",
    date: "Monday, November 24, 2025",
    sessions: [
      { time: "08:30–09:00", session: "Registration & Welcome Coffee" },
      { time: "09:00–09:15", session: "Opening Remarks" },
      { time: "09:15–10:15", session: "Keynote - The AIware Revolution: Forging the Future of Agentic Software Engineering", speaker: "Ahmed E. Hassan", type: "In-person" },
      { time: "10:15–10:45", session: "Coffee Break" },
      { time: "10:45–11:45", session: "How to Write a Great Research Paper?", speaker: "Simon Peyton Jones", type: "Remote" },
      { time: "11:45–12:30", session: "On Hard and Soft Skills for Surviving Your PhD Journey", speaker: "Walid Maalej", type: "In-person" },
      { time: "12:30–12:45", session: "Gathering and Group Photo" },
      { time: "12:45–14:00", session: "Lunch" },
      { time: "14:00–14:45", session: "Navigating Graduate School and Beyond", speaker: "Sarah Nadi", type: "Remote" },
      { time: "14:45–15:30", session: "Keynote - Towards a framework for the development of SPAs (smart process applications)", speaker: "Hafedh Mili", type: "In-person" },
      { time: "15:30–16:00", session: "Coffee Break" },
      { time: "16:00–16:30", session: "Panel Discussion – open (students mentoring, best research practices, AI and SE in the Next Decade)", type: "In-person" },
      { time: "16:30–17:15", session: "Human in the Loop: Responsible Use of Generative AI Tools in Software Engineering Practice", speaker: "Bruce Maxim", type: "Remote" },
      { time: "17:15–18:00", session: "LLM-Based Agents for Software Engineering: Benefits and Drawbacks", speaker: "Fatemeh Fard", type: "Remote" },
      { time: "18:00–20:30", session: "Cultural Evening & Tunisian Dinner" }
    ]
  },
  {
    day: "Day 2",
    date: "Tuesday, November 25, 2025",
    sessions: [
      { time: "08:30–09:30", session: "Keynote - No Size Fits All: Goal-Driven Alignment of LLMs for Software Engineering Tasks", speaker: "Houari Sahraoui" },
      { time: "09:30–10:30", session: "Keynote - Generative Requirements Engineering and Design", speaker: "Walid Maalej" },
      { time: "10:30–11:00", session: "Coffee Break" },
      { time: "11:00–11:30", session: "Ask me anything: How to integrate AI into computer science and SE curriculum at the undergraduate levels", speaker: "Ahmed E. Hassan" },
      { time: "11:30–12:30", session: "Keynote - On Software Architecture", speaker: "Michel Chaudron", type: "In-person" },
      { time: "12:30–13:45", session: "Lunch" },
      { time: "13:45–14:30", session: "The Chronicles of a Professor", speaker: "Sarah Nadi", type: "Remote" },
      { time: "14:30–15:30", session: "Keynote - Automated Testing and Safety Analysis of Deep Learning Systems", speaker: "Lionel Briand", type: "Remote" },
      { time: "15:30–16:00", session: "Coffee Break" },
      { time: "16:00–16:45", session: "System assurance in the era of Large Language Models", speaker: "Alvine B. Belle", type: "Remote" },
      { time: "16:45–17:30", session: "11 steps to structuring a manuscript", speaker: "Prasun Lala", type: "Remote" },
      { time: "17:30–18:15", session: "Think like a reviewer", speaker: "Prasun Lala", type: "Remote" }
    ]
  },
  {
    day: "Day 3",
    date: "Wednesday, November 26, 2025",
    sessions: [
      { time: "08:30–09:15", session: "From Monolith to Microservices — A Journey Powered by LLMs and the Open Challenges Ahead", speaker: "Mohamed Aymen Saied", type: "In-person" },
      { time: "09:15–10:00", session: "Automating Code Review: From Heuristics to Agentic AI", speaker: "Moataz Chouchen", type: "In-person" },
      { time: "10:00–10:30", session: "Coffee Break" },
      { time: "10:30–11:00", session: "Code Clones and Beyond: My Reflections on Software Engineering Research", speaker: "Katsuro Inoue", type: "Remote" },
      { time: "11:00–11:45", session: "Phinally Done: Life Beyond the Ivory Tower", speaker: "Zadia Codabux", type: "In-person" },
      { time: "11:45–12:30", session: "Collaborations Result in Diverse Thinking, Novelty and Different Perspectives", speaker: "Raula Gaikovina Kula", type: "Remote" },
      { time: "12:30–14:00", session: "Lunch" },
      { time: "14:00–15:00", session: "About Empirical Studies on Software Quality", speaker: "Yann-Gaël Guéhéneuc", type: "Remote" },
      { time: "15:00–16:00", session: "Ensuring Trust: Testing and Safety Monitoring of Deep Learning-based Systems", speaker: "Manel Abdellatif", type: "Remote" },
      { time: "16:00–16:30", session: "Coffee Break" },
      { time: "16:30–17:30", session: "Kickstart Your AI Journey with NVIDIA's Free Learning Resources", speaker: "Fatima Tambajang", type: "Remote" },
      { time: "17:30–17:45", session: "Closing Remarks & Certificates" },
      { time: "17:45–18:00", session: "Farewell Coffee" }
    ]
  }
];
