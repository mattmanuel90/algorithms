export class Graph {
  private vertices = [];
  private edges = [];
  private numberOfEdges = 0;

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  removeVertex(vertex) {
    let index = this.vertices.indexOf(vertex);
    if (~index) {
      this.vertices.splice(index, 1);
    }
    while (this.edges[vertex].length) {
      let adjacentVertex = this.edges[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
    this.numberOfEdges++;
  }

  removeEdge(vertex1, vertex2) {
    let index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
    let index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
    if(~index1) {
      this.edges[vertex1].splice(index1, 1);
      this.numberOfEdges--;
    }
    if(~index2) {
      this.edges[vertex2].splice(index2, 1);
    }
  }

  size() {
    return this.vertices.length;
  }

  relations() {
    return this.numberOfEdges;
  }

  traverseBFS(vertex, fn) {
    if(!~this.vertices.indexOf(vertex)) {
      return console.log('Vertex not found');
    }
    
    let queue = [];
    queue.push(vertex);
    let visited = [];
    visited[vertex] = true;

    while(queue.length) {
      vertex = queue.shift();
      fn(vertex);
      for(var i = 0; i < this.edges[vertex].length; i++) {
        if(!visited[this.edges[vertex][i]]) {
          visited[this.edges[vertex][i]] = true;
          queue.push(this.edges[vertex][i]);
        }
      }
    }
  }

  print() {
    console.log(this.vertices
      .map((vertex)=>`${vertex} -> ${this.edges[vertex].join(', ').trim()}`, this)
      .join(' | '));
  }
}