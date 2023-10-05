"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    // base case: if next node we go to will be null; add ourselves
    if (this.val > val) {
      // check left
      if (this.left === null) {
        const newNode = new Node(val);
        this.left = newNode;
        return newNode;
      }
      this.left.insertRecursively(val);
    } else {
      // check right
      if (this.right === null) {
        const newNode = new Node(val);
        this.right = newNode;
        return newNode;
      }
      this.right.insertRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    let current = this.root;
    const newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;
      return this;
    }

    while (current !== null) {
      if (current.val > val) {
        if (current.left !== null) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      }

      if (current.val < val) {
        if (current.right !== null) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      }

    }
    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let next = null;

    if (this.root === null) { return }

    if (current.val === val) {
      return current;
    }

    if (current.val > val) {
      next = current.left;
    } else {
      next = current.right;
    }

    while (next !== null) {
      if (next.val === val) {
        return next;
      }

      if (next.val > val) {
        next = next.left;
      } else {
        next = next.right;
      }
    }

    // we would be navigate to a null node so we didn't find it
    return;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
