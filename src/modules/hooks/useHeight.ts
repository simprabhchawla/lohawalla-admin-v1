import React, { useEffect, useState } from 'react';

export default function useHeight() {
  const ref = React.createRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const e = ref.current as HTMLDivElement;
    setHeight(e.getBoundingClientRect().height);
  }, []);
  return { ref, height };
}
