class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // to insert node
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // to find if the value exits in the tree
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    // not working properly 
    lca(root, p, q) {
    if (root.value > p.value && root.value > q.value) {
        return lca(root.left, p, q);
    }
    else if (root.value < p.value && root.value < q) {
        return lca(root.right, p, q);
    }
    else {
        return root;
    }
}
}

var x = new BST();
x.insert(10);
x.insert(5);

x.insert(13);
x.insert(11);
x.insert(2);
x.insert(16);
x.insert(7);

// console.log(x.root)



// function LCA(root, p, q) {
//     if (root > p && root > q) {
//         return LCA(root.left, p, q);
//     }
//     else if (root < p && root < q) {
//         return LCA(root.right, p, q);
//     }
//     else {
//         return root;
//     }
// }

console.log(x.lca(x.root,x.root.right.right,x.root.right.left))