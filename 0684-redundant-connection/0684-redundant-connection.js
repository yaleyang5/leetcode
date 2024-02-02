/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // union find
    var par = new Array(edges.length + 1);
    for (var i = 0; i < par.length; i++) {
        par[i] = i;
    }
    var rank = new Array(edges.length + 1);
    rank.fill(1);
    // console.log(par, rank);
    var find = (node) => {
        var p = par[node];
        while (p !== par[p]) {
            par[p] = par[par[p]];
            p = par[p];
        }
        return p;
    }
    
    var union = (n1, n2) => {
        var [p1, p2] = [find(n1), find(n2)];
        
        if (p1 === p2) {
            return false;
        }
        
        if (rank[p1] > rank[p2]) {
            par[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            par[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    }
    
    for (var [n1, n2] of edges) {
        if (!union(n1, n2)) {
            return [n1, n2];
        }
    }
};