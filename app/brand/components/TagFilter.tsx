'use client';

import { useEffect, useState } from 'react';

interface TagFilterProps {
  title?: string;
  items: string[];
  active?: string[];
  onChange?: (active: string[]) => void;
  disabledItems?: string[];
}

export default function TagFilter({ title, items, active, onChange, disabledItems = [] }: TagFilterProps) {
  const isControlled = Array.isArray(active);
  const [internalActive, setInternalActive] = useState<string[]>(active ?? []);

  useEffect(() => {
    if (Array.isArray(active)) {
      setInternalActive(active);
    }
  }, [active]);

  const toggle = (item: string) => {
    const base = isControlled ? active ?? [] : internalActive;
    const next = base.includes(item) ? base.filter((i) => i !== item) : [...base, item];
    if (!isControlled) {
      setInternalActive(next);
    }
    onChange?.(next);
  };

  return (
    <div className="tag-filter">
      {title && <span className="tag-filter-title">{title}</span>}
      <div className="tag-filter-chips">
        {items.map((item) => {
          const isActive = internalActive.includes(item);
          const isDisabled = disabledItems.includes(item);
          return (
            <button
              key={item}
              type="button"
              className={`tag-chip ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => {
                if (isDisabled) return;
                toggle(item);
              }}
              aria-pressed={isActive}
              aria-disabled={isDisabled}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
