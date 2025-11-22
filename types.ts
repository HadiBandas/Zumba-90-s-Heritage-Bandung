
import { LucideIcon } from 'lucide-react';

export interface SlideProps {
  isActive?: boolean;
}

export interface RundownItem {
  time: string;
  title: string;
  details: string[];
  icon?: LucideIcon;
}

export interface Sponsor {
  name: string;
  tier: 'Organizer' | 'Sponsor' | 'Media Partner';
  color?: string;
  textColor?: string;
}

export interface SponsorshipDetailItem {
  name: string;
  role: string;
  support: string[];
  benefits: string[];
  color: string;
  textColor: string;
}

export interface PrizeDistributionItem {
  category: string;
  mechanism: string;
  items: { name: string; quantity: string; sponsor: string; pic?: string }[];
  icon: LucideIcon;
  color: string;
}

export interface CommitteeMember {
  role: string;
  name: string;
  organization?: string;
  jobDescription?: string[];
}

export interface CommitteeDivision {
  division: string;
  color: string;
  icon: LucideIcon;
  members: CommitteeMember[];
}

export interface KPIMetric {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface MCAdLibItem {
  sponsor: string;
  tone: string;
  talkingPoints: string[];
  color: string;
  instagram?: string;
}

export interface RACIRow {
  task: string;
  roles: {
    director: string;
    event: string;
    ops: string;
    mkt: string;
    creative: string;
  };
}