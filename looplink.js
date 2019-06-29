/*
 * @Author: suxiao
 * @Date: 2019-06-29 12:32:16
 * @LastEditors: suxiao
 * @LastEditTime: 2019-06-29 22:22:38
 * @Description: 头部注释-介绍开发人员信息
 * @新建文件，养成良好的编码习惯
 */
class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
  }
}

class Link {
  constructor() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.currentNode = this.head;
  }

  findPre(ele) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== ele) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  find(ele) {
    let currentNode = this.head;
    while (currentNode.element !== ele) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(ele, item) {
    let newNode = new Node(ele);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  remove(ele) {
    const preNode = this.findPre(ele);
    if (preNode.next != null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element !== this.head.element) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next;
    }
  }

  advance(n) {
    if (n <= 0) {
      return;
    }
    while (n > 0) {
      if (this.currentNode.next.element === this.head.element) {
        this.currentNode = this.currentNode.next.next
      } else {
        this.currentNode = this.currentNode.next;
      }
    }
    n--;
  }

  size() {
    let num = 0;
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element !== this.head.element) {
      currentNode = currentNode.next;
      num++;
    }
    return num;
  }
}