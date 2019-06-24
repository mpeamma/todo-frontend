import React from 'react';
import axios from 'axios';
import {API_URL} from './config';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      heartbeat: "Loading",
      items: [],
      newTitle: "",
      newDescription: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(API_URL + "api/todos").then(({data}) => {
      this.setState({items: data.todos});
    });
  }

  handleDelete(id) {
    axios.delete(API_URL + "api/todos/" + id).then(() => {
      this.setState({items: [...this.state.items.filter(i => i.id !== id)]});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(API_URL + "api/todos", {
      title: this.state.newTitle,
      description: this.state.newDescription
    }).then(({data}) => {
      this.setState({items: [...this.state.items, data.todo]});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container style={{marginLeft: 20}}>
            <Row>
              <Col>
                <h1>
                  Sample To Do App
                </h1>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              {this.state.items.map((item, index) => 
                <Col xs={4} key={index}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {item.title}
                        <Button 
                          variant="danger" 
                          style={{float: "right"}} 
                          size="sm"
                          onClick={() => this.handleDelete(item.id)}>
                            x
                        </Button>
                      </Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
            <Form onSubmit={this.handleSubmit} style={{margin: 10}}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Title"
                    value={this.state.newTitle}
                    onChange={e => this.setState({ newTitle: e.target.value })}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Description"
                    value={this.state.newDescription}
                    onChange={e => this.setState({ newDescription: e.target.value })}
                  />
                </Form.Group>
                <Button type="submit">Add new</Button>
              </Form.Row>
            </Form>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
