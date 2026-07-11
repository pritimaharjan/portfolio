export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillGroup {
  name: string;
  skills: { name: string; level: number }[];
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}
