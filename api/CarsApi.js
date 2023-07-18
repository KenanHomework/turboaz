class ApiService {
  _apiBaseUrl = " https://localhost:7151/api";

  getCar = async (id) => {
    try {
      const response = await fetch(`${this._apiBaseUrl}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  };

  createCar = async (car) => {
    try {
      const response = await fetch(this._apiBaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
        redirect: "follow",
      });

      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  getLastListings = async (count) => {
    try {
      const response = await fetch(
        `${this._apiBaseUrl}/lastListings?count=${count}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );

      return await response.json();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  getCars = async (searchQuery, sortingType, page, pageSize) => {
    try {
      let query = "";

      if (searchQuery) query = `&searchQuery=${searchQuery}`;
      if (sortingType) query += `&sorting=${sortingType}`;

      console.log(
        "url: " +
          `${this._apiBaseUrl}/?Page=${page}&PageSize=${pageSize}${query}`
      );

      const response = await fetch(
        `${this._apiBaseUrl}/?Page=${page}&PageSize=${pageSize}${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );

      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  };
}

export default ApiService;
