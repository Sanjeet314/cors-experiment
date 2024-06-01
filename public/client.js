const postData = async () => {
  const data = await fetch("http://localhost:8080/products");
  const dataJson = await data.json();
  return dataJson;
};

postData();
