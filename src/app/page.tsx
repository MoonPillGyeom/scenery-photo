"use client";

import { Button, Input } from "gyeomui";
import { useState } from "react";


export default function Home() {
  const [value, setValue] = useState("");
console.log(value);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button variant="primary" >Test</Button>
      <Button variant="secondary" >Test2</Button>
      <Button variant="danger" >Test3</Button>
      <Button variant="danger" className="p-40 w-100 h-100 ">Test3</Button>
<Input id="testInput" label="testInput" onChange={handleChange} />
<Input id="testInput" label="testInput" errorMessage="에러테스트" />
gdgdgd
<div>
</div>
    </div>
  );
}
