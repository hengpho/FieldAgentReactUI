import GetAgent from "./components/getAgent";
import {useState} from "react";
import AgentInput from "./components/AgentInput";

function App() {
  const [agentId, setAgentId] = useState("");
  
  const addAgentId = () => {
    setAgentId(agentId);
  }

  return (
    <div>
      <AgentInput value={agentId}
                  onChange={(e) => setAgentId(e.target.value)}
                  buttonAction={addAgentId}
                  label={"Get Agent"}/>

      <GetAgent id={agentId}/>

    </div>
  );
}

export default App;
