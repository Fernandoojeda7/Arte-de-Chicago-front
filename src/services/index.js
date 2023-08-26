import axios from "axios";

const url = process.env.REACT_APP_SERVER;

export const obtenerBusqueda = async (busqueda) => {
  try {
    const response2 = await axios.get(
      `${url}/art_api/search?busqueda=${busqueda}`
    );
    return response2.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerObras = async () => {
  try {
    const response = await axios.get(`${url}/art_api/art_works`);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const cargarMas = async (pagina) => {
  try {
    const response = await axios.get(
      `${url}/art_api/page_mas?pagina=${pagina}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const cargarMenos = async (pagina) => {
  try {
    const response = await axios.get(
      `${url}/art_api/page_menos?pagina=${pagina}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerDetalles = async (id) => {
  try {
    const response = await axios.get(`${url}/art_api/art_work/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const formulario = async (data) => {
  try {
    const response = await axios.post(`${url}/message`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const registrarse = async (data) => {
  try {
    const response = await axios.post(`${url}/users`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (data) => {
  try {
    const respuesta = await axios.post(`${url}/auth/login`, data);

    if (respuesta.data.token) {
      localStorage.setItem("token", respuesta.token);
    } else {
      localStorage.removeItem("token");
    }
    return respuesta.data;
  } catch (error) {
    localStorage.removeItem("token");
    return error.response.data;
  }
};

export const logout = async () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
