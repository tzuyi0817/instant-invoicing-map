'use client';

import { useEffect, useState } from 'react';
import Select, {
  components,
  type PropsValue,
  type ActionMeta,
  type OptionsOrGroups,
  type GroupBase,
  type DropdownIndicatorProps,
} from 'react-select';
import ExpandMore from '@/assets/images/svg/expand-more.svg';

interface Props {
  defaultValue: PropsValue<any> | undefined;
  onChange: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
  options: OptionsOrGroups<any, GroupBase<any>> | undefined;
}

const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
  return (
    <components.DropdownIndicator {...props}>
      <ExpandMore />
    </components.DropdownIndicator>
  );
};

function InvoicingSelect(props: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Select
      id={Date.now().toString()}
      className="w-fit"
      placeholder="-----"
      {...props}
      components={{ DropdownIndicator }}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#4A8FE7',
          primary25: 'rgba(74, 143, 231, 0.1)',
          neutral80: '#000',
        },
      })}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          padding: '2px 0px 2px 10px',
          borderColor: 'transparent transparent #000 #000',
          borderRadius: '2px',
        }),
        indicatorSeparator: baseStyles => ({ ...baseStyles, width: '0px' }),
        dropdownIndicator: baseStyles => ({
          ...baseStyles,
          padding: '0px',
        }),
      }}
    />
  ) : null;
}

export default InvoicingSelect;
