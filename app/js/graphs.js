'use strict';

var trial = [{
  node: '1',
  discovered: false,
  distance: Infinity,
  connections: ['2', '5', '6']
}, {
  node: '2',
  discovered: false,
  distance: Infinity,
  connections: ['1', '3', '4']
}, {
  node: '3',
  discovered: false,
  distance: Infinity,
  connections: ['2']
}, {
  node: '4',
  discovered: false,
  distance: Infinity,
  connections: ['2']
}, {
  node: '5',
  discovered: false,
  distance: Infinity,
  connections: ['1', '7']
}, {
  node: '6',
  discovered: false,
  distance: Infinity,
  connections: ['1']
}, {
  node: '7',
  discovered: false,
  distance: Infinity,
  connections: ['5', '8']
}, {
  node: '8',
  discovered: false,
  distance: Infinity,
  connections: ['7', '9', '10']
}, {
  node: '9',
  discovered: false,
  distance: Infinity,
  connections: ['8']
}, {
  node: '10',
  discovered: false,
  distance: Infinity,
  connections: ['8']
}];

var graph = function graph(trial) {
  var list = trial || [];
  graph.addVertex = function (vertex, connections) {
    var node = {
      node: vertex,
      discovered: false,
      distance: Infinity,
      connections: connections
    };
    list.push(node);
  };
  graph.removeVertex = function (vertex) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].node === vertex) {
        list.splice(i, 1);
      } else {
        for (var j = 0; j < list[i].connections.length; j++) {
          if (list[i].connections[j] === vertex) {
            list[i].connections.split(j, 1);
          }
        }
      }
    }
  };
  graph.getConnections = function (vertex) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;

        if (node.node === vertex) {
          return node.connections;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
  graph.setDistance = function (vertex, distance) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var node = _step2.value;

        if (node.node === vertex) {
          node.distance = distance;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };
  graph.getDistance = function (vertex) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var node = _step3.value;

        if (node.node === vertex) {
          return node.distance;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };
};

var queue = function queue() {
  var list = [];
  queue.enqueue = function (element) {
    return list.push(element);
  };
  queue.dequeue = function () {
    return list.shift();
  };
  queue.isEmpty = function () {
    return list.length === 0;
  };
};

var stack = function stack() {
  var list = [];
  stack.push = function (element) {
    return list.push(element);
  };
  stack.pop = function () {
    return list.pop();
  };
  stack.isEmpty = function () {
    return list.length === 0;
  };
};

var dfs = function dfs(graph, root, func) {
  func(root);
  discovered(root);
  var connections = graph.getConnections(root);
  if (connections.length) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = connections[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var element = _step4.value;

        if (!discovered(element)) {
          dfs(graph, element, func);
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }
};

var bfs = function bfs(graph, root, func) {
  console.log('wow! such BFS!');
  graph.setDistance(root, 0);
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    var current = queue.dequeue();
    func(current);
    var connections = graph.getConnections(current);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = connections[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var node = _step5.value;

        if (graph.getDistance(node) === Infinity) {
          var distance = graph.getDistance(current) + 1;
          graph.setDistance(node, distance);
          queue.enqueue(node);
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  }
};

var print = function print(arg) {
  return console.log('==> ' + arg);
};
var vertices = [];
var discovered = function discovered(vertex) {
  var seen = false;
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = vertices[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var element = _step6.value;

      if (vertex === element) {
        seen = true;
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  if (!seen) {
    vertices.push(vertex);
    return false;
  } else {
    return true;
  }
};

graph(trial);
queue();
stack();
dfs(graph, '2', print);
bfs(graph, '2', print);