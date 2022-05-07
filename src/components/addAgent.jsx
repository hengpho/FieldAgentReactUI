import {useState} from "react";
import React, {useEffect} from "react";
import LabeledInput from "./LabeledInput";

function AddAgent() {
    const url = `http://localhost:5041/api/agent`;

    const [agentAdd, setAgentAdd] = useState({
        dateOfBirth: "",
        firstName: "",
        height: 0.00,
        lastName: ""
    });

    const agentSetter = (field, value) => {
        const newAgent = {agentAdd};
        newAgent[field] = value;
        setAgentAdd(newAgent);
    }

    useEffect(() => {
        addAgent();
    }, [agentAdd]);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: agentAdd,
        redirect: 'follow'
    }

    const addAgent = async () => {
            try {
                const response = await fetch(url, requestOptions);
                console.log(response);
                if (response.status !== 201) {
                    console.log(`response is not 201 OK: ${response.status} : ${response.statusText}`);
                }
                else
                {
                    const getAgent = await response.json();
                    setAgentAdd(getAgent);
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        return (
        <div>
            <LabeledInput label="First Name" type="text" 
                                            value={agentAdd.firstName}
                                            setValue={(value) => agentSetter("firstName", value)}                                    />
            <LabeledInput label="Last Name" type="text" value={agentAdd.lastName}
                                            setValue={(value) => agentSetter("lastName", value)}/>
            <LabeledInput label="Date of Birth" type="text" value={agentAdd.dateOfBirth}
                                            setValue={(value) => agentSetter("dateOfBirth", value)}/>
            <LabeledInput label="Height" type="number" value={agentAdd.height}
                                            setValue={(value) => agentSetter("height", value)}/>
                                            
        </div>
        );
    }

export default AddAgent;