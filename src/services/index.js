const url = process.env.REACT_APP_SERVER;

export const obtenerBusqueda = async (busqueda) => {
  try {
    const response2 = await fetch(`${url}/art_api/search?busqueda=${busqueda}`);
    const responseJson2 = await response2.json();

    return responseJson2.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerObras = async () => {
  try {
    const response = await fetch(`${url}/art_api/art_works`);
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
};

export const cargarMas = async (pagina) => {
  try {
    const response = await fetch(`${url}/art_api/page_mas?pagina=${pagina}`);
    const responseJson = await response.json();

    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
};

export const cargarMenos = async (pagina) => {
  try {
    const response = await fetch(`${url}/art_api/page_menos?pagina=${pagina}`);
    const responseJson = await response.json();

    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerDetalles = async (id) => {
  try {
    const response = await fetch(`${url}/art_api/art_work/${id}`);
    const responseJson = await response.json();
    console.log(responseJson.data);
    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
};

export const formulario = async (data) => {
  try {
    const response = await fetch(`${url}/message`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const registrarse = async (data) => {
  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  try {
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const respuesta = await response.json();
    if (respuesta.token) {
      localStorage.setItem("token", respuesta.token);
    } else {
      localStorage.removeItem("token");
    }
    return respuesta;
  } catch (error) {
    localStorage.removeItem("token");
    return {
      error,
    };
  }
};

export const logout = async () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
