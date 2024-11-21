import { useState, useEffect } from "react";
import EditableNavbar from "./components/EditableNavbar";
import Sidebar from "./components/Sidebar";
import PromptSection from "./components/PromptSection";
import TestButtons from "./components/TestButtons";
// import { fetchAgentDetails } from "@/lib/retellApi";
import { fetchAgentDetails } from "../../../lib/retellApi";
// Define the Agent type
interface Agent {
  id: string;
  name: string;
  prompt: string;
}

export default function AgentDetailsPage({ params }: { params: { id: string } }) {
  const [agent, setAgent] = useState<Agent | null>(null); // Add type annotation for agent

  useEffect(() => {
    async function loadAgent() {
      try {
        const data = await fetchAgentDetails(params.id); // Fetch agent details
        setAgent(data); // Update state with fetched data
      } catch (error) {
        console.error("Failed to load agent details:", error); // Handle errors
      }
    }
    loadAgent();
  }, [params.id]);

  // Render component
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        {agent ? ( // Safely render if agent is loaded
          <>
            <EditableNavbar name={agent.name} />
            <PromptSection initialPrompt={agent.prompt} />
            <TestButtons />
          </>
        ) : (
          <p>Loading agent details...</p>
        )}
      </div>
    </div>
  );
}
