// filterWorker.js
onmessage = function (e) {
  const Properties = e.data;
  let filteredProperties = [];
  if (Properties) {
    Properties.forEach((property) => {
      if (property.Rating >= 2) {
        filteredProperties.push(property);
      }
    });
  }
  postMessage(filteredProperties);
};
