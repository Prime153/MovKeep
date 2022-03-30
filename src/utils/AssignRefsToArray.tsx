const assignRefToArray = (ref: Array<HTMLDivElement>) => (el: HTMLDivElement) => {
    if (el && !ref.includes(el)) {
      ref.push(el);
    }
  };

  export default assignRefToArray