// import { useState, useEffect } from "react";
// import { Pagination } from "@/components/Pagination";
// import { fetchAgents } from "@/lib/retellApi";
// import { useRouter } from "next/router";

// export default function AgentsPage() {
//   const [agents, setAgents] = useState([]);
//   const [page, setPage] = useState(1);
//   const router = useRouter();

//   useEffect(() => {
//     async function loadAgents() {
//       const data = await fetchAgents(page);
//       setAgents(data);
//     }
//     loadAgents();
//   }, [page]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Agents</h1>
//       <table className="w-full border">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {agents.map((agent) => (
//             <tr
//               key={agent.id}
//               onClick={() => router.push(`/agents/${agent.id}`)}
//               className="cursor-pointer hover:bg-gray-100"
//             >
//               <td>{agent.name}</td>
//               <td>{agent.email}</td>
//               <td>Details</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination currentPage={page} onPageChange={setPage} />
//     </div>
//   );
// }


//==================





import { useState, useEffect } from "react";
// import { Pagination } from "@/components/Pagination";
// import { Pagination } from "../../components/Pagination"; // Updated relative path
import { Pagination } from "./[id]/components/Pagination";


// import { fetchAgents } from "@/lib/retellApi";
// import { fetchAgents } from "../../lib/retellApi"; // Updated relative path
import {fetchAgents} from

import { useRouter } from "next/router";

export default function AgentsPage() {
  const [agents, setAgents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    async function loadAgents() {
      const { results, total_pages } = await fetchAgents(currentPage);
      setAgents(results);
      setTotalPages(total_pages);
    }
    loadAgents();
  }, [currentPage]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agents</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr
              key={agent.id}
              onClick={() => router.push(`/agents/${agent.id}`)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td>{agent.name}</td>
              <td>{agent.email}</td>
              <td>Details</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

