import {useState} from "react";
import React, {useEffect} from "react";

function DeleteAgent({id}) {
    const url = `http://localhost:5041/api/agent/${id}`;

    const [agent, setAgent] = useState({});

    useEffect(() => {
        loadAgent();
    }, [id]);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTcyMzM3MTQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MjAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MjAwMCJ9.9ntZ32osYxb3ngzpzlxp4Xt2wEBarIp0jvZT_-9VvIo");

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
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
                <div><br></br>URL: {url}</div>
                <div><b>Agent Deleted</b></div>
                <div>Agent Id: {agent.agentId}</div>
                <div>Agent Name: {agent.firstName} {agent.lastName}</div>
                <div>Agent Birthday: {agent.dateOfBirth}</div>
                <div>Agent Height: {agent.height}<br></br></div>
            </div>
        )
    }

export default DeleteAgent;