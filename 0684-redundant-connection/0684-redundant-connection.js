/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // first build the tree
    // go backwards in edges, seeing if that edge can be removed
    var tree = {};
    for (var [a, b] of edges) {
        // console.log(a, b);
        if (tree[a] === undefined) {
            tree[a] = [];
        }
        if (tree[b] === undefined) {
            tree[b] = [];
        }
        tree[a].push(b);
        tree[b].push(a);
    }
    // console.log(tree);
    var size = Object.keys(tree).length;
    var round = 1;
    var visited = {};
    var remove = (node) => {
        // console.log(node, round);
        for (var i = 1; i <= size; i++) {
            var index = tree[i].indexOf(node);
            // console.log(tree[i], index);
            if (index !== -1 && visited[i] !== round) {
                tree[node].splice(tree[node].indexOf(i), 1);
                tree[i].splice(index, 1);
                visited[node] = round;
            }
        }
    }
    // loop, removing all edges with 1 connection, keep going for now
    var removed = false;
    while (round <= size) {
        // console.log(tree);
        for (var key of Object.keys(tree)) {
            if (tree[key].length === 1) {
                remove(Number(key));
                removed = true;
            }
        }
        if (!removed) {
            for (var i = edges.length - 1; i >= 0; i--) {
                var [a, b] = edges[i];
                if (tree[a].length > 1 && tree[b].length > 1) {
                    return edges[i];
                }
            }
            break;
        }
        removed = false;
        round++;
    }
    return edges[edges.length - 1];
};