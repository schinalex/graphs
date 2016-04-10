var trial = {
  node1: ['node3', 'node4'],
  node2: ['node4'],
  node3: ['node1', 'node4'],
  node4: ['node1', 'node2', 'node3']
}

var graph = (trial) => {
  var list = trial || {}
  graph.addVertex = (vertex, connections) => {
    let node = {}
    node[vertex] = connections || []
    list.push(node)
  }
  graph.removeVertex = (vertex) => {
    // remove vertex
  }
  graph.connections = (node) => {
    for (var key in list) {
      if (key === node) {
        return list[key]
      }
    }
  }
}

var queue = function () {
  var list = []
  queue.enqueue = (element) => list.push(element)
  queue.dequeue = () => list.shift()
  queue.isEmpty = () => list.length === 0
}

var stack = function () {
  var list = []
  stack.push = (element) => list.push(element)
  stack.pop = () => list.pop()
  stack.isEmpty = () => list.length === 0
}

var dfs = (graph, root, func) => {
  func(root)
  discovered(root)
  var nodes = graph.connections(root)
  if (nodes.length) {
    for (var element of nodes) {
      if (!discovered(element)) {
        console.log(vertices)
        dfs(graph, element, func)
      }
    }
  }
}

var bfs = (graph, root) => {
  console.log('wow!')
}

var print = (arg) => console.log(arg)
var vertices = []
var discovered = (vertex) => {
  var seen = false
  for (let element of vertices) {
    if (vertex === element) {
      seen = true
    }
  }
  if (!seen) {
    vertices.push(vertex)
    return false
  } else {
    return true
  }
}

graph(trial)
queue()
stack()
dfs(graph, 'node2', print)
bfs()
