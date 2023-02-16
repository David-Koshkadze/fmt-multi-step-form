import React from "react";

export function FormWrapper({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <div className="flex flex-col gap-4">{children}</div>
    </>
  );
}
