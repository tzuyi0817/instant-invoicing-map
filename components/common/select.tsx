'use client';

import { useId } from 'react';
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
  defaultValue?: PropsValue<any>;
  value?: PropsValue<any>;
  onChange: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
  options: OptionsOrGroups<any, GroupBase<any>> | undefined;
}

const DropdownIndicator: React.FC<DropdownIndicatorProps> = props => {
  return (
    <components.DropdownIndicator {...props}>
      <ExpandMore className="w-6 md:w-8" />
    </components.DropdownIndicator>
  );
};

function InvoicingSelect(props: Props) {
  const id = useId();

  return (
    <Select
      id={id}
      className="w-fit min-w-[92px] text-center text-xs md:min-w-[184px] md:text-lg"
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
          minHeight: 'unset',
        }),
        valueContainer: baseStyles => ({ ...baseStyles, padding: '0px 8px' }),
        input: baseStyles => ({ ...baseStyles, padding: '0px', lineHeight: '16px', margin: '0px' }),
        indicatorSeparator: baseStyles => ({ ...baseStyles, width: '0px' }),
        dropdownIndicator: baseStyles => ({
          ...baseStyles,
          padding: '0px',
        }),
      }}
    />
  );
}

export default InvoicingSelect;
