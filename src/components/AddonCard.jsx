import { useFormContext } from "react-hook-form";

export default function AddonCard({ id, name, title, infoText }) {
  const { register } = useFormContext();

  return (
    <div className="relative">
      <input
        {...register(name)}
        type="checkbox"
        id={id}
        value={id}
        className="peer absolute top-[1.875rem] left-6 w-5 h-5 bg-gray-100 border-gray-300 rounded"
      />
      <label
        htmlFor={id}
        className="flex items-center justify-between w-auto h-20 pl-16 pr-6 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-purplish-blue hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50"
      >
        <div className="mr-24">
          <p className="font-semibold">{title}</p>
          <p className="text-sm">{infoText}</p>
        </div>
        <p>+$1/mo</p>
      </label>
    </div>
  );
}
