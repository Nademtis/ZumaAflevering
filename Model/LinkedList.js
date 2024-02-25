"use strict"

//test data
const node1 = {
    data: "A",
    next: null,
    prev: null
}
const node2 = {
    data: "B",
    next: null,
    prev: null
}

const node3 = {
    data: "E",
    next: null,
    prev: null
}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;



export default class LinkedList {
    constructor() {
        // test-code: change later
        this.head = null;
        this.tail = null;
    }
    size() {
        let count = 0;
        let node = this.head;

        while (node !== null) {
            count++;
            node = node.next;
        }

        return count;
    }


    addLast(payload) {
        const nodeToAdd = { data: payload, next: null, prev: null }

        //update new node
        nodeToAdd.prev = this.tail

        //update old refferences based on new node
        //if noteToAdd is the first node in the list - don't update existing tail's next
        if (this.tail != null) {
            this.tail.next = nodeToAdd
        } else {
            this.head = nodeToAdd
        }
        this.tail = nodeToAdd
    }

    addFirst(payload) {
        const nodeToAdd = { data: payload, next: null, prev: null }

        //update new node
        nodeToAdd.next = this.head

        //update old refferences based on new node
        //if noteToAdd is the first node in the list - don't update existing head's prev
        if (this.head != null) {
            this.head.prev = nodeToAdd
        } else {
            this.tail = nodeToAdd
        }
        this.head = nodeToAdd
    }

    removeLast() {
        //if list is empty, return null
        if (this.tail == null) {
            return null
        }
        //only set new tail.next, if there is more nodes after removal
        if (this.tail != this.head) {
            this.tail.prev.next = null
        }
        //set new tail
        this.tail = this.tail.prev
        //if the tail is now null, the list is empty - update head accordingly
        if (this.tail == null) {
            this.head = null
        }
        return this.tail
    }
    removeFirst() {
        //if list is empty, return null
        if (this.head == null) {
            return null
        }
        //only set new head.next, if there is more nodes after removal
        if (this.head != this.tail) {
            this.head.next.prev = null
        }
        //set new head
        this.head = this.head.next
        //if the head is now null, the list is empty - update tail accordingly
        if (this.head == null) {
            this.tail = null
        }
        return this.head
    }

    removeNode(nodeToDelete) {
        //check if head
        if (nodeToDelete == this.head) {
            this.head = this.head.next
            this.head.prev = null
            return
        }
        //check if tail
        if (nodeToDelete == this.tail) {
            this.tail = this.tail.prev
            this.tail.next = null
            return
        }
        //traverse through, find nodeToDelete, delete it, update refferences
        let node = this.head
        while (node != null) {
            if (node == nodeToDelete) {
                node.prev.next = node.next
                node.next.prev = node.prev
                return
            }
            node = node.next
        }
    }
    insertBeforeNode(payload, existingNode) {
        const nodeToAdd = { data: payload, next: null, prev: null }

        //if list is empty
        if (this.head == null) {
            this.head = nodeToAdd
            this.tail = nodeToAdd
            return
        }
        //if existingNode is head
        if (existingNode == this.head) {
            nodeToAdd.next = this.head;
            this.head.prev = nodeToAdd;
            this.head = nodeToAdd;
            return;
        }
        //find the existingNode and make the changes
        let node = this.head;
        while (node) {
            if (node == existingNode) {
                nodeToAdd.prev = node.prev;
                nodeToAdd.next = node;
                node.prev.next = nodeToAdd;
                node.prev = nodeToAdd;
                return;
            }
            node = node.next;
        }
    }
    insertAfterNode(payload, existingNode) {
        const nodeToAdd = { data: payload, next: null, prev: null }

        //if list is empty
        if (this.head == null) {
            this.head = nodeToAdd
            this.tail = nodeToAdd
            return
        }

        //if existingNode is tail
        if (existingNode == this.tail) {
            existingNode.next = nodeToAdd
            nodeToAdd.prev = this.tail
            this.tail = nodeToAdd
            return
        }

        //find existing node and make changes
        let node = this.head;
        while (node) {
            if (node === existingNode) {
                nodeToAdd.next = node.next
                nodeToAdd.prev = node
                node.next.prev = nodeToAdd
                node.next = nodeToAdd
                return
            }
            node = node.next;
        }
    }
    /*swapNodes(nodeA, nodeB) { //TODO does not work - is not implemented
        //check if nodes exist and if the nodes are the same
        if (!nodeA || !nodeB || nodeA === nodeB) {
            console.log("something is wrong with the nodes");
            return;
        }


    }*/
    nodeAt(index) {
        //return node on index
        let node = this.head
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return node
            }
            node = node.next
        }
    }
    get(index) {
        //return payload with given index
        let node = this.nodeAt(index)
        return node.data
    }
    removeIndex(index) {
        this.removeNode(this.nodeAt(index))
    }
    first() {
        return this.head
    }
    last() {
        return this.tail
    }
    clear() {
        this.head = null
        this.tail = null
    }
    indexOf(payload) {
        let node = this.head;
        let index = 0;

        while (node) {
            if (node.data === payload) {
                return index;
            }
            node = node.next;
            index++;
        }
        //if payload not found, return -1
        return -1;
    }
    insertAfter(index, payload) {
        let existingNode = this.nodeAt(index)
        this.insertAfterNode(payload, existingNode)
    }
    insertBefore(index, payload) {
        let existingNode = this.nodeAt(index)
        this.insertBeforeNode(payload, existingNode)
    }
    dumpList() {
        let a_node = this.head;
        while (a_node != null) {
            console.log(`
          node: ${a_node.data}
          -----------
            prev: ${a_node.prev?.data}
            next: ${a_node.next?.data}
          `);
            // find next node
            a_node = a_node.next;
        }
    }

}
const ll = new LinkedList();
//console.log(ll);




