import React, { useState } from "react";

const option = [
  {
    name: "0 to 10 Employee",
  },
  {
    name: "10 to 50 Employees",
  },
  {
    name: "> Then 50 Emplyees",
  },
];
export const Input = ({
  label,
  type,
  placeholder,
  isRequired,
  isSelect,
  value,
  setValue,
  error,
}) => {
  const [isClick, setClick] = useState(false);
  console.log(option);
  return (
    <div className="my-3">
      <label className="text-xs text-gray-700">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      {!isSelect && (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full text-xs px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}

      {isSelect &&
        (isClick && !value ? (
          option?.map((item, index) => {
            return (
              <label
                key={index}
                className="flex justify-between items-center space-x-3 bg-white text-gray-800 px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-100 transition"
              >
                <span>{item?.name}</span>

                <input
                  type="checkbox"
                  name="roles"
                  value={item?.name.toLowerCase()}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-checkbox  h-5 w-5 text-blue-600"
                />
              </label>
            );
          })
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onClick={() => {
              setValue("");
              setClick(true);
            }}
            className="w-full text-xs px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        ))}
    </div>
  );
};
