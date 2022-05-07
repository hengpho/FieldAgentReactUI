import GetAgent from "./components/getAgent";
import {useState} from "react";
import AgentInput from "./components/AgentInput";
import AddAgent from "./components/addAgent";
import DeleteAgent from "./components/deleteAgent";

function App() {
  const [agentId, setAgentId] = useState("1");
  
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
      <AddAgent />
      <DeleteAgent id={10}/>

    </div>
  );
}

export default App;
