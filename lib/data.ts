import { readFileSync } from "fs";
import { join } from "path";

const dataDir = join(process.cwd(), "content", "data");

function readJson<T>(filename: string): T {
  const filePath = join(dataDir, filename);
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

// ── Types ──────────────────────────────────────────────

export interface Profile {
  name: string;
  title: string;
  location: string;
  current: string;
  philosophy: string;
  expertise: string[];
  status: string;
  skills: {
    core: Record<string, string>;
    ai: Record<string, string>;
    infrastructure: Record<string, string>;
  };
  values: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  role: string;
  category: "fintech" | "ai_agent" | "saas" | "open_source";
  stack: string[];
  highlights: string[];
  status: "production" | "development" | "archived" | "side-project";
  impact: string;
  visible: boolean;
  featured: boolean;
  order: number;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  idealFor: string[];
  icon: string;
}

export interface TimelineEntry {
  hash: string;
  ref: string | null;
  date: string;
  type: string;
  scope: string | null;
  title: string;
  description: string[];
}

export interface Stats {
  yearsOfExperience: number;
  projectsDelivered: number;
  techStackDepth: string;
  aiAgentsBuilt: string;
}

export interface ContactInfo {
  facebook: string;
  instagram: string;
  line: string;
  github: string;
}

// ── Data Loaders ───────────────────────────────────────

export function getProfile(): Profile {
  return readJson<Profile>("profile.json");
}

export function getProjects(): ProjectItem[] {
  return readJson<ProjectItem[]>("projects.json")
    .filter((p) => p.visible)
    .sort((a, b) => a.order - b.order);
}

export function getServices(): ServiceItem[] {
  return readJson<ServiceItem[]>("services.json");
}

export function getTimeline(): TimelineEntry[] {
  return readJson<TimelineEntry[]>("timeline.json");
}

export function getStats(): Stats {
  return readJson<Stats>("stats.json");
}

export function getContactInfo(): ContactInfo {
  return readJson<ContactInfo>("contact.json");
}
