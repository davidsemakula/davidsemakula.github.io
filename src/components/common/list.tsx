import React, { ComponentType, useMemo, useState } from 'react';
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/outline';
import { StyledIcon } from './icons/containers';

type Props = {
  items: Array<any>;
  component: ComponentType<any>;
  max?: number;
  suffix?: string;
};
export default function List({
  items,
  component: Component,
  max = 5,
  suffix,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [visibleItems, isExpandable] = useMemo(() => {
    const allItems = items ?? [],
      visibleItems = allItems.slice(0, isExpanded ? allItems.length : max);
    return [visibleItems, allItems.length > max];
  }, [items, max, isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(prevValue => !prevValue);
  };

  return (
    <>
      {visibleItems.map(item => (
        <Component {...item} />
      ))}

      {isExpandable ? (
        <button
          className="h-8 pl-3 pr-4 mb-3 text-indigo-600 rounded-md border border-indigo-500 hover:text-indigo-700 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-300 dark:hover:text-indigo-500 dark:hover:bg-transparent dark:hover:border-indigo-400"
          onClick={toggleExpanded}
        >
          <StyledIcon
            icon={isExpanded ? ChevronDoubleUpIcon : ChevronDoubleDownIcon}
            size="medium"
          />{' '}
          Show {isExpanded ? 'less' : 'more'}
          {suffix ? ` ${suffix}` : ''}
        </button>
      ) : null}
    </>
  );
}
