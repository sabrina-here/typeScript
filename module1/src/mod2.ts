{
  //type assertion

  let anything: any;

  anything = "next level web dev";

  (anything as string).length;

  const kgtogm = (value: string | number) => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return convertValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
}
