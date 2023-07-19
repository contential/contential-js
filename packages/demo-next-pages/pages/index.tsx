import { Contential } from 'contential';
import { useEffect, useState } from 'react';

const contential = new Contential();

export function Page() {
  const [text, setText] = useState('');

  useEffect(() => {
    contential.prompt({
      prompt: 'say hello',
      onUpdate: ({ text }) => {
        setText(text);
      },
    });
  }, []);

  return <div>{text}</div>;
}

export default Page;
