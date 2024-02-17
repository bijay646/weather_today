class ApiUrlConfig {
  static endPoint() {
    let basePath = import.meta.env.VITE_API_BASE_URL;

    return basePath;
  }
}

export default ApiUrlConfig;
