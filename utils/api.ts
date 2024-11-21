// // export const fetchAgents = async (page: number): Promise<{ agents: any[]; totalPages: number }> => {
// //     const response = await fetch(`/api/agents?page=${page}`);
// //     const data = await response.json();
// //     return data;
// //   };
  
// //   export const fetchAgentById = async (id: string): Promise<any> => {
// //     const response = await fetch(`/api/agents/${id}`);
// //     const data = await response.json();
// //     return data;
// //   };




// //------------

// // 


// //------------------------


// // export const fetchAgents = async () => {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //   if (!response.ok) {
// //     throw new Error(`Failed to fetch agents: ${response.statusText}`);
// //   }
// //   const data = await response.json();
// //   return data; // Returns an array of user objects
// // };


// export const fetchAgents = async (page: number) => {
//   const response = await fetch(`/api/agents?page=${page}`);
//   return response.json();
// };

// export const fetchAgentDetails = async (id: string) => {
//   const response = await fetch(`/api/agents/${id}`);
//   return response.json();
// };

// export const updateAgent = async (id: string, data: object) => {
//   await fetch(`/api/agents/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
// };

  