const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   constructor() {
      this.node = null
   }

   root() {
      return this.node
   }

   add(data) {
      let elem = this.node
      if (!elem) {
         this.node = new Node(data)
         return;
      } else {
         const search = function (elem) {
            if (data < elem.data) {
               if (!elem.left) {
                  elem.left = new Node(data)
                  return
               } else {
                  return search(elem.left)
               }
            } else if (data > elem.data) {
               if (!elem.right) {
                  elem.right = new Node(data);
                  return;
               } else {
                  return search(elem.right)
               }
            }
         }
         return search(elem)
      }
   }

   has(data) {
      let elem = this.node;
      while (elem) {
         if (data === elem.data) {
            return true
         }
         if (data > elem.data) {
            elem = elem.right
         } else {
            elem = elem.left
         }
      }
      return false
   }

   find(data) {
      let elem = this.node;
      while (elem.data !== data) {
         if (data > elem.data) {
            elem = elem.right
         } else {
            elem = elem.left
         }
         if (!elem) return null
      }
      return elem
   }

   remove(data) {
      let elem = this.node;
      const removeElem = function (elem, data) {
         if (!elem) {
            return null
         }
         if (data === elem.data) {
            if (!elem.left && !elem.right) return null
            if (!elem.right) return elem.left
            if (!elem.left) return elem.right


            let newElem = elem.right

            while (newElem.left) {

               newElem = newElem.left
            }
            elem.data = newElem.data
            elem.right = removeElem(elem.right, newElem.data)
            return elem
         } else if (data < elem.data) {
            elem.left = removeElem(elem.left, data)
            return elem
         } else {
            elem.right = removeElem(elem.right, data)
            return elem
         }
      }
      elem = removeElem(elem, data)
   }

   min() {
      let elem = this.node;
      while (elem.left) {
         elem = elem.left
      }
      return elem.data
   }

   max() {
      let elem = this.node;
      while (elem.right) {
         elem = elem.right
      }
      return elem.data
   }
}


module.exports = {
   BinarySearchTree
};