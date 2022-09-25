import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import { TAG_COLORS } from '../../helpers/constants';
import { destructureListableValue } from '../../helpers/utils';

const Tag = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}): ReactElement => (
  <span className="inline-block relative mx-1.5 my-2">
    <span
      className={`block absolute -inset-1 -skew-y-3 ${
        color || TAG_COLORS.PURPLE
      }`}
      aria-hidden="true"
    />
    <span className="relative text-white dark:text-zinc-300 px-1">
      {children}
    </span>
  </span>
);

export const TagList = ({
  tags,
  color: defaultColor,
}: {
  tags: Array<any>;
  color?: string;
}): ReactElement => (
  <>
    {tags.map((tag, idx) => {
      const [name, color] = destructureListableValue(tag);
      return (
        <Tag
          key={`skill-${idx}`}
          color={color || defaultColor || TAG_COLORS.INDIGO}
        >
          {name}
        </Tag>
      );
    })}
  </>
);

export const LabeledTagList = ({
  label,
  tags,
  color,
}: {
  label: string;
  tags: Array<any>;
  color?: string;
}): ReactElement => (
  <div className="mt-2 sm:flex sm:flex-row">
    <span className="mr-1 sm:flex-none">{label}</span>
    <span className="sm:flex-auto">
      <TagList
        tags={tags}
        color={color}
      />
    </span>
  </div>
);
