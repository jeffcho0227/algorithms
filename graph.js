/*
GRAPH
A graph data structure consist of a finite set of vertices or nodes or points, 
together with a set of unordered pairs of these vertices for an undirected graph or
a set of ordered pairs for a directed graph

NODES + CONNECTIONS

vertex - a node
edge - connections between nodes

undirected graph --> no direction. ex. facebook friends
directed graph --> one direction. arrow to each vertex and not a two way. ex. instagram following functionality 
weighted graph --> values are assigned to edges. ex. maps to calculate the shortest distance

adjacency matrix - two D structure. store the connections using matrix; 
  -takes up more space
  -slower to iterate over all edges
  -fater to lookup specific edge
  
adjacency list - use array to store the edges
  -take up less space
  -faster to iterate over all edges
  -can be slower to lookup specific edge
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      console.log('vertex already exist');
    } else {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }
}

let undirectedGraph = new Graph();

