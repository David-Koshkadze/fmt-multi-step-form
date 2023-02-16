import React from "react";

export function FormWrapper({ title, children }) {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">{title}</h1>
      <div className="flex flex-col gap-4">{children}</div>
    </>
  );
}
