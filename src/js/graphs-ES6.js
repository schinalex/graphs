var trial = [
  {
    node: '1',
    discovered: false,
    distance: Infinity,
    connections: ['2', '5', '6']
  },
  {
    node: '2',
    discovered: false,
    distance: Infinity,
    connections: ['1', '3', '4']
  },
  {
    node: '3',
    discovered: false,
    distance: Infinity,
    connections: ['2']
  },
  {
    node: '4',
    discovered: false,
    distance: Infinity,
    connections: ['2']
  },
  {
    node: '5',
    discovered: false,
    distance: Infinity,
    connections: ['1', '7']
  },
  {
    node: '6',
    discovered: false,
    distance: Infinity,
    connections: ['1']
  },
  {
    node: '7',
    discovered: false,
    distance: Infinity,
    connections: ['5', '8']
  },
  {
    node: '8',
    discovered: false,
    distance: Infinity,
    connections: ['7', '9', '10']
  },
  {
    node: '9',
    discovered: false,
    distance: Infinity,
    connections: ['8']
  },
  {
    node: '10',
    discovered: false,
    distance: Infinity,
    connections: ['8']
  }
]

var graph = (trial) => {
  var list = trial || []
  graph.addVertex = (vertex, connections) => {
    let node = {
      node: vertex,
      discovered: false,
      distance: Infinity,
      connections: connections
    }
    list.push(node)
  }
  graph.removeVertex = (vertex) => {
    for (var i = 0; i < list.length; i++) {
      if (list[i].node === vertex) {
        list.splice(i, 1)
      } else {
        for (var j = 0; j < list[i].connections.length; j++) {
          if (list[i].connections[j] === vertex) {
            list[i].connections.split(j, 1)
          }
        }
      }
    }
  }
  graph.getConnections = (vertex) => {
    for (var node of list) {
      if (node.node === vertex) {
        return node.connections
      }
    }
  }
  graph.setDistance = (vertex, distance) => {
    for (var node of list) {
      if (node.node === vertex) {
        node.distance = distance
      }
    }
  }
  graph.getDistance = (vertex) => {
    for (var node of list) {
      if (node.node === vertex) {
        return node.distance
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
  var connections = graph.getConnections(root)
  if (connections.length) {
    for (var element of connections) {
      if (!discovered(element)) {
        dfs(graph, element, func)
      }
    }
  }
}

var bfs = (graph, root, func) => {
  console.log('wow! such BFS!')
  graph.setDistance(root, 0)
  queue.enqueue(root)
  while (!queue.isEmpty()) {
    var current = queue.dequeue()
    func(current)
    var connections = graph.getConnections(current)
    for (var node of connections) {
      if (graph.getDistance(node) === Infinity) {
        var distance = graph.getDistance(current) + 1
        graph.setDistance(node, distance)
        queue.enqueue(node)
      }
    }
  }
}

var print = (arg) => console.log('==> ' + arg)
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
dfs(graph, '2', print)
bfs(graph, '2', print)
