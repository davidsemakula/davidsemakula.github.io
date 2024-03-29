import { ComponentType, ReactNode } from 'react';
import { APP_TYPE, LANGUAGES, PRODUCTS, SEVERITY, SKILLS } from './constants';

export type SimpleAwardInput = string;
export type DetailedAwardInput = {
  name: SimpleAwardInput;
  url?: string;
};
export type GeneralAwardInput = SimpleAwardInput | DetailedAwardInput;

// Add Record<T, T> types while preserving autocomplete support from IDE
// https://github.com/Microsoft/TypeScript/issues/26045
// https://stackoverflow.com/questions/52146544/why-autocomplete-stop-working-in-an-object-with-type-in-typescript#answer-68060892
export const AssertRecordType =
  <T>() =>
  <D extends Record<string, T>>(data: D) =>
    data;

export type SimpleIconInput = ComponentType<any>;
export type DetailedIconInput = {
  icon: SimpleIconInput;
  className?: string;
};
export type GeneralIconInput = SimpleIconInput | DetailedIconInput;

export type SimpleCompanyInput = string;
export type DetailedCompanyInput = {
  name: SimpleCompanyInput;
  website?: string;
  location?: string;
  icon?: GeneralIconInput;
};
export type GeneralCompanyInput = SimpleCompanyInput | DetailedCompanyInput;

export const asCompanyRecord = AssertRecordType<GeneralCompanyInput>();

export type SimpleRoleInput = string;
export type DetailedRoleInput = {
  name: SimpleRoleInput;
  ref?: string;
};
export type GeneralRoleInput = SimpleRoleInput | DetailedRoleInput;

export type EducationInput = {
  name: string;
  award: string;
  location?: string;
  period: string;
  website?: string;
  details?: string | ReactNode;
};

export type ExperienceInput = {
  company: GeneralCompanyInput;
  role?: string;
  location?: string;
  period: string;
  website?: string;
  remote?: boolean;
  details: string | ReactNode;
};

export type SimplePartnerInput = string;
export enum PartnerType {
  FUNDING = 'funding',
}
export type DetailedPartnerInput = {
  name: SimplePartnerInput;
  type?: PartnerType;
  url?: string;
  announcement?: string;
};
export type GeneralPartnerInput = SimplePartnerInput | DetailedPartnerInput;

export type SimplePlatformInput = APP_TYPE;
export type DetailedPlatformInput = {
  type: SimplePlatformInput;
  url?: string;
  name?: string;
};
export type GeneralPlatformInput = SimplePlatformInput | DetailedPlatformInput;

export type PressInput = {
  name: string;
  url?: string;
};

export type SimpleTagInput = SKILLS | PRODUCTS | LANGUAGES;
export type DetailedTagInput = {
  name: SimpleTagInput;
  color?: string;
};
export type GeneralTagInput = SimpleTagInput | DetailedTagInput;

export type ProjectInput = {
  name: string;
  website?: string;
  icon?: GeneralIconInput;
  company?: GeneralCompanyInput;
  role?: GeneralRoleInput;
  platforms?: Array<GeneralPlatformInput>;
  details?: string | ReactNode;
  awards?: Array<GeneralAwardInput>;
  partners?: Array<GeneralPartnerInput>;
  stack?: Array<GeneralTagInput>;
  integrations?: Array<GeneralTagInput>;
  press?: Array<PressInput>;
};

export type BountyInput = {
  name: string;
  website?: string;
  location?: string;
  date?: string;
  severity?: SEVERITY;
  details?: string | ReactNode;
  stack?: Array<GeneralTagInput>;
};
