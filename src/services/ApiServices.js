import axios from "axios";
axios.defaults.baseURL = "https://flowers-gallery.herokuapp.com";

class ApiServices {
  async signIn(userData) {
    try {
      const { data, status } = await axios.post("/api/auth/login", userData);
      if (status < 300) {
        getCollection();
      }
      return data.payload;
    } catch (e) {
      console.log(e.message);
    }
  }

  async logout() {
    try {
      const req = await axios.get("/api/auth/logout");

      return req.data;
    } catch (e) {
      console.log(e.message);
    }
  }

  async signUp(userData) {
    try {
      const { data } = await axios.post("/api/auth/register", userData);
      return data.payload.user;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getCurrentUser() {
    try {
      const { data } = await axios.get("/api/auth/current");
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default new ApiServices();

export async function getAchimenes() {
  try {
    const { data } = await axios.get("/api/achimenes");
    console.log(data.data.result);
    return data.data.result;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getViolets() {
  try {
    const { data } = await axios.get("/api/violets");
    console.log(data.data.result);
    return data.data.result;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getGerans() {
  try {
    const { data } = await axios.get("/api/gerans");
    console.log(data.data.result);
    return data.data.result;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getAchimeneById(achimeneId) {
  console.log(achimeneId);
  try {
    const result = await axios.get(`/api/achimenes/${achimeneId}`);
    console.log(result);
    return result;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getVioletById(violetId) {
  try {
    const { data } = await axios.get(`/api/violets/${violetId}`);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getGeranById(geranId) {
  try {
    const { data } = await axios.get(`/api/gerans/${geranId}`);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addAchimene(achimene) {
  try {
    const { data } = await axios.post("/api/achimenes", achimene);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addViolet(violet) {
  try {
    const { data } = await axios.post("/api/violets", violet);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addGeran(geran) {
  try {
    const { data } = await axios.post("/api/gerans", geran);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function getCollection() {
  try {
    const { data } = await axios.get("/api/collections");
    console.log(data.data.result);
    return data.data.result;
  } catch (e) {
    console.log(e.message);
  }
}

export async function addCollection(collection) {
  try {
    const { data } = await axios.post("/api/collections", collection);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function deleteCollection(id) {
  try {
    const { data } = await axios.delete(`/api/collections/${id}`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

export async function updateAchimeneById(id) {
  try {
    const { data } = await axios.patch(`/api/achimenes/${id}/active`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
