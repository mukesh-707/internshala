


// pages/agents.js
import { useEffect, useState } from 'react';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await fetch(`/api/agents?page=${page}`);
      const data = await res.json();
      setAgents(data);
    };
    fetchAgents();
  }, [page]);

  return (
    <div>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>{agent.name}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Agents;
