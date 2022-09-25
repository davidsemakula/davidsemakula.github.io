import { ReactNode } from 'react';

export type ProjectInput = {
  name: string;
  website?: string;
  icon?: ReactNode | Array<any> | any;
  company?: string | Array<any>;
  role?: string;
  platforms?: Array<any>;
  details?: string | ReactNode;
  awards?: Array<any>;
  stack?: Array<any>;
  integrations?: Array<any>;
};

export type ExperienceInput = {
  company: string;
  role: string;
  location?: string;
  period: string;
  website?: string;
  details: string;
};

export type EducationInput = {
  name: string;
  award: string;
  location?: string;
  period: string;
  website?: string;
  details?: string;
};
