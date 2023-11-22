import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAgents } from '../Selectors';
import { fetchAgentsSuccess, fetchAgentsFailure } from '../Actions/Action';
const Index = () => {

  // const reduxAgents  = useSelector((state) => state.agent.agents);
  const reduxAgents = useSelector(selectAgents);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [agentName, setAgentName] = useState('');
  const [commission, setCommission] = useState('');
  const [applyToAll, setApplyToAll] = useState(false);

  useEffect(() => {
    if (reduxAgents && reduxAgents.length > 0) {
      setAgents(reduxAgents);
    }
    // axios.get('http://localhost:3005/api/tasks/getagentprofiledetail')
    //   .then((response) => {
    //     setAgents(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching agents:', error);
    //     toast.info(`${error}`, { autoClose: 2000 });
    //   });
  }, [reduxAgents]);
  // useEffect(() => {
  //   axios.get('http://localhost:3005/api/tasks/getagentprofiledetail')
  //     .then((response) => {
  //       console.log("data",response.data)
  //       dispatch(fetchAgentsSuccess(response.data));
  //     })
  //     .catch((error) => {
  //       dispatch(fetchAgentsFailure(error));
  //       console.error('Error fetching agents:', error);
  //       // You might consider showing an error message using toast here
  //     });
  // }, [dispatch]);

  const handleAgentSelection = (agentId) => {
    const selected = agents.find((agent) => agent._id === agentId);
    setSelectedAgent(agentId);
    setAgentName(selected ? selected.salecode : '');
  };
  // const team = (props) => {
  //   let a = 0;
  //   let b = 0
  //   for (let round of props) {
  //     if (round === 1) {

  //       console.log("rounda",round,"a",a)
  //       a++

  //     } else {
  //       console.log("roundb",round,"b",b)
  //       b++
  //     }
  //   }
  //   if(a>b){
  //     console.log("player1 is win the match and with round of",a)
  //   }else if(b>a){
  //     console.log("player2 is win the match and with round of",b)
  //   }
  // }
  const handleSave = async (e) => {
    e.preventDefault();
    // team([1, 2, 1,2,2])

    try {
      if (applyToAll) {
        console.log("applytoall");
        await axios.post(`http://localhost:3005/api/tasks/applyall`, { commission });
        toast.info('Commission applied to all agents', { autoClose: 2000 });
      } else {
        console.log("not");
        await axios.post(`http://localhost:3005/api/tasks/agents/${selectedAgent}`, { commission });
        toast.info('Commission saved for the selected agent', { autoClose: 2000 });
      }
    } catch (error) {
      console.error('Error saving commission:', error);
      toast.info(`${error}`, { autoClose: 2000 });
    }
  };

  return (
    <Fragment>
      <div>
        <Form onSubmit={handleSave}>
          <FormGroup>
            <Label for="agentSelect">Select Agent</Label>
            <Input
              type="select"
              name="agentSelect"
              value={selectedAgent}
              onChange={(e) => handleAgentSelection(e.target.value)}
              disabled={applyToAll}
            >
              <option value="">Select an Agent Name</option>
              {agents.map((agent) => (
                <option key={agent._id} value={agent._id}>
                  {agent.firstname + ' ' + agent.lastname}
                </option>
              ))}
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="agentSale">Agent Sale#</Label>
            <Input
              type="text"
              value={agentName}
              readOnly
              placeholder="Agent Name here..."
              disabled={applyToAll}
            />
          </FormGroup>

          <FormGroup>
            <Label for="commission">Commission Percentage</Label>
            <Input
              type="number"
              name="commission"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
              placeholder="Enter commission percentage"
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={applyToAll}
                onChange={(e) => setApplyToAll(e.target.checked)}
              />{' '}
              Apply to all agents
            </Label>
          </FormGroup>

          <Button className='btn-login' type="submit"> Save</Button>
        </Form>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Index;
