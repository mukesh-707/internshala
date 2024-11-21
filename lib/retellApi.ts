// import axios from "axios";

// const API_BASE_URL = "https://api.retellai.com";

// export async function fetchAgents(page: number) {
//   const { data } = await axios.get(`${API_BASE_URL}/agents?page=${page}`);
//   return data.results;
// }






import axios from "axios";

const API_BASE_URL = "https://docs.retellai.com/api-references/create-agent";

export async function fetchAgents(page: number) {
  const response = await axios.get(`${API_BASE_URL}/agents?page=${page}`);
  const { data, meta } = response.data;

  return {
    results: data,
    total_pages: meta.total_pages, // Assuming the API provides this
  };
}

export async function fetchAgentDetails(id: string) {
  const response = await fetch(`/api/agents/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch agent details");
  }
  return response.json();
}

// lib/retellApi.ts

// Define the structure of an agent (adjust based on your data structure)
export interface Agent {
  id: string;
  name: string;
  prompt: string;
}

// Fetch all agents from the API (replace the URL with your actual API endpoint)
// export async function fetchAgents(): Promise<Agent[]> {
//   const response = await fetch("/api/agents");  // Replace with the actual URL if needed
//   if (!response.ok) {
//     throw new Error("Failed to fetch agents");
//   }
//   return response.json();  // Assuming the API returns a JSON array of agents
// }


