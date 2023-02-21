export default function InputField({ label, error, register }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <label>{label}</label>

        {error && (
          <span className="text-strawberry-red font-ubuntu-md">
            {error.type === 'required' && 'This field is required'}
            {error.message}
          </span>
        )}
      </div>
      <input
        autoFocus
        placeholder="Vanessa Mint"
        type="text"
        {...register}
        className={`custom-input-field ${error && "!ring-strawberry-red"}`}
      />
    </div>
  );
}
