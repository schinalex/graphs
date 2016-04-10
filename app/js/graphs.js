'use strict';

var trial = {
  node1: ['node3', 'node4'],
  node2: ['node4'],
  node3: ['node1', 'node4'],
  node4: ['node1', 'node2', 'node3']
};

var graph = function graph(trial) {
  var list = trial || {};
  graph.addVertex = function (vertex, connections) {
    var node = {};
    node[vertex] = connections || [];
    list.push(node);
  };
  graph.removeVertex = function (vertex) {
    // remove vertex
  };
  graph.connections = function (node) {
    for (var key in list) {
      if (key === node) {
        return list[key];
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
  var nodes = graph.connections(root);
  if (nodes.length) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        if (!discovered(element)) {
          console.log(vertices);
          dfs(graph, element, func);
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
  }
};

var bfs = function bfs(graph, root) {
  console.log('wow!');
};

var print = function print(arg) {
  return console.log(arg);
};
var vertices = [];
var discovered = function discovered(vertex) {
  var seen = false;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = vertices[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var element = _step2.value;

      if (vertex === element) {
        seen = true;
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
dfs(graph, 'node2', print);
bfs();