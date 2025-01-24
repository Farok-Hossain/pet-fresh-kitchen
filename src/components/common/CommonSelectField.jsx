import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CommonSelectField = ({ options = [], label, width }) => {
  return (
    <div>
      <h3 className="text-textGray text-[14px] mb-[6px]">{label}</h3>
      <Select>
        <SelectTrigger
          className={`${width}  text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]`}
        >
          <SelectValue placeholder={options.length > 0 && options[0].label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CommonSelectField;
