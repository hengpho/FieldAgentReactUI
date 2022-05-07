import {useState} from "react";
import React, {useEffect} from "react";

function GetAgent({id}) {
    const url = `http://localhost:5041/api/agent/${id}`;

    const [agent, setAgent] = useState({});

    useEffect(() => {
        loadAgent();
    }, [id]);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    const loadAgent = async () => {
            try {
                const response = await fetch(url, requestOptions);
                console.log(response);
                if (response.status !== 200) {
                    console.log(`response is not 200 OK: ${response.status} : ${response.statusText}`);
                }
                const getAgent = await response.json();
                setAgent(getAgent);
            } catch (error) {
                console.log(error);
            }
        }
        
        return (
            <div>
                <div>URL: {url}</div>
                <div>Agent Id: {agent.agentId}</div>
                <div>Agent Name: {agent.firstName} {agent.lastName}</div>
                <div>Agent Birthday: {agent.dateOfBirth}</div>
                <div>Agent Height: {agent.height}</div>
            </div>
        )
    }

export default GetAgent;