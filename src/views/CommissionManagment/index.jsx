import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Select } from '@mui/material';

const index = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [agentName, setAgentName] = useState('');
  const [commission, setCommission] = useState('');

  useEffect(() => {
    // Fetch list of agents from the backend
    axios.get('http://localhost:3005/api/tasks/getagentprofiledetail')
      .then((response) => {
        setAgents(response.data);
        console.log("res", response);
      })
      .catch((error) => {
        console.error('Error fetching agents:', error);
      });
  }, []);

  const handleAgentSelection = (agentId) => {
    const selected = agents.find((agent) => agent._id === agentId);
    console.log("selected", selected);

    setSelectedAgent(agentId);
    setAgentName(selected ? selected.salecode : '');

  };

  const handleSave = async (e) => {
    e.preventDefault();
    const id = selectedAgent;
    try {
      // Send the user profile data and selected payment method details to your API here
      // Example: await axios.post('/api/profile', { ...formData, paymentMethodData });

      axios.post(`http://localhost:3005/api/tasks/agents/${id}`, commission)
        .then((response) => {
          // Handle success (e.g., show success message)
          alert("call")
          console.log('Commission saved:', response.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Error saving commission:', error);
        });


    } catch (error) {
      console.error('Error submitting profile form:', error);
      toast.info(`${error}`, { autoClose: 2000 });
    }
    // Send request to backend to save selected agent and commission

  };
  return (
    <Fragment>
      <div>
        <Form onSubmit={handleSave}>

          <FormGroup>
            <Label for="agentSelect" sm={2}>
              Select Agent
            </Label>
            <Input
              type="select"
              name="firstname"
              id="agentSelect"
              value={selectedAgent}
              onChange={(e) => handleAgentSelection(e.target.value)}
            >
              <option value="">Select an Agent Name</option>
              {agents.map((agent) => (
                <option key={agent._id} value={agent._id}>
                  {agent.firstname + agent.lastname}
                </option>
              ))}
            </Input>
            {/* <Label for="idorpassport">Agent Sale#</Label>
            <select onChange={(e) => handleAgentSelection(e.target.value)}>
            <option value="">Select Agent</option>
            {agents.map((agent) => (
              <option key={agent._id} value={agent._id}>{agent.salecode}</option>
            ))}
          </select> */}
          </FormGroup>

          <FormGroup>
            <Label for="idorpassport">Agent Sale#</Label>
            <Input
              type="text"
              // name="percentage"
              // id="percentage"
              value={agentName} readOnly
              placeholder="Agent Name here... "
            />
          </FormGroup>
          {/* <input type="text" value={selectedAgentName} readOnly /> */}
          <FormGroup>
            <Label for="idorpassport">Commission Percentage</Label>
            <Input
              type="number"
              name="percentage"
              id="percentage"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              placeholder="Enter commission percentage"
            />
          </FormGroup>
          {/* <input
            type="number"
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
            placeholder="Enter commission percentage"
          /> */}
          <Button className='btn-login' type="submit"> Save</Button>
        </Form>
      </div>
    </Fragment>
  )
}

export default index