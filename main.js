import fetch from 'node-fetch';

// Función genérica para probar un endpoint
async function testEndpoint(url, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(`Response from ${method} ${url}:`, data);
  } catch (error) {
    console.error(`Error in ${method} ${url}:`, error);
  }
}

// Ejemplo de uso
(async () => {
  const baseUrl = 'http://localhost:3005/api/estudiante'; // Cambia esto por la URL base de tu API

  console.log('--- GET all  ---');
  await testEndpoint(baseUrl);

})();
