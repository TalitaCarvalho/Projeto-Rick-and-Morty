const httpRequets = async function (query) {
  const BASE_URL = "https://rickandmortyapi.com/graphql";
  try {
    const request = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        query: `query {
            ${query}
          }`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return await request.json();
  } catch (error) {
    
  }
}

// fetch() // API do browser para chamar APIs Rest
// .then((response) => {}) // ele recebe como parametro uma função de call back que tem como parametro a resposta do serviço 
// .catch((error) => {})


export default httpRequets;