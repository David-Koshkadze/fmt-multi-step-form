import React from "react";

export default function InputError({ errors }) {
  console.log(errors);
  return (
    <>
      {errors ? (
        <span className="text-sm font-ubuntu-bold text-strawberry-red">
            {errors.message}
        </span>
      ) : null}
    </>
  );
}
