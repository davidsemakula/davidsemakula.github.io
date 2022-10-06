import * as React from 'react';
import { HTMLAttributes, ReactElement } from 'react';
import { TAG_COLORS } from '../../helpers/constants';
import { GeneralTagInput } from '../../helpers/types';
import { cleanTagObject } from '../../helpers/utils';

interface TagAttributes<T> extends HTMLAttributes<T> {
  color?: string;
}

interface TagListAttributes<T> extends TagAttributes<T> {
  tags: Array<GeneralTagInput>;
}

interface LabeledTagListAttributes<T> extends TagListAttributes<T> {
  label: string;
}

const Tag = ({ children, color }: TagAttributes<{}>): ReactElement => (
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
}: TagListAttributes<{}>): ReactElement => (
  <>
    {tags.map((tag: GeneralTagInput, idx: number) => {
      const { name, color } = cleanTagObject(tag);
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
}: LabeledTagListAttributes<{}>): ReactElement => (
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
