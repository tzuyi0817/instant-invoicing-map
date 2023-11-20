import Select, { type PropsValue, ActionMeta, OptionsOrGroups, GroupBase } from 'react-select';

interface Props {
  defaultValue: PropsValue<any> | undefined;
  onChange: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
  options: OptionsOrGroups<any, GroupBase<any>> | undefined;
}

function InvoicingSelect(props: Props) {
  return (
    <Select
      className="w-full max-w-[350px]"
      {...props}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#A8B8A5',
          primary25: 'rgba(127, 151, 123, 0.2)',
          neutral80: '#7F977B',
        },
      })}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          padding: '6px 10px 6px 16px',
        }),
      }}
    />
  );
}

export default InvoicingSelect;
