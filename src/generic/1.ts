import axios from "axios";

async function fetchData<U>(url: string): Promise<U> {
  try {
    const response = await axios.get<U>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
