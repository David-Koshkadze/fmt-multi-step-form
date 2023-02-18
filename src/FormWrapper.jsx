import React from "react";

export function FormWrapper({ title, infoText, children }) {
  return (
    <>
      <h1 className="mb-2 mt-8 text-3xl font-bold">{title}</h1>
      <p className="text-gray-500 mb-8">{infoText}</p>
      <div className="flex flex-col gap-4">{children}</div>
    </>
  );
}
