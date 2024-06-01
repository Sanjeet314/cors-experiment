const postData = async () => {
  const data = await fetch("/testapi");
  const dataJson = await data.json();
  return dataJson;
};

postData();
