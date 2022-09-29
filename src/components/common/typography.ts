import withElement from './withElement';

export const Title = withElement(
  'h1',
  'text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-2'
);

export const SubTitle = withElement(
  'h2',
  'text-lg font-medium text-zinc-700 dark:text-zinc-300 mb-2'
);

export const SectionHeading = withElement('h2', 'text-2xl font-medium mb-2');

export const ItemHeading = withElement(
  'h3',
  'text-xl font-medium text-zinc-700 dark:text-zinc-300'
);

export const ItemSubTitle = withElement(
  'h4',
  'text-base font-medium text-zinc-600 dark:text-zinc-400'
);
