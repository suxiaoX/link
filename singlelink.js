/*
 * @Author: suxiao
 * @Date: 2019-06-29 12:32:04
 * @LastEditors: suxiao
 * @LastEditTime: 2019-06-29 21:25:00
 * @Description: 头部注释-介绍开发人员信息
 * @新建文件，养成良好的编码习惯
 */
let _len = Symbol('_len')
/**
 * @description: [基础类]
 * @param {*} ele [声明一个类，主要用于生成首节点]
 * @return {object} result [返回一个对象]
 */
class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
    this.previous = null;
  }
}

class Link {
  constructor() {
    this.head = new Node('head');
    this.currentNode = this.head;
    this[_len] = 0;
  }

  find(ele) {
    let currentNode = this.head;
    while (currentNode.element !== ele) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPre(ele) {
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element !== ele) {
      currentNode = currentNode.next;
    }
    return currentNode
  }

  insert(ele, item) {
    const newNode = new Node(ele);
    let currentNode = this.find(item);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this[_len]++;
  }

  remove(ele) {
    let preNode = this.findPre(ele)
    while (preNode.next != null) {
      preNode.next = preNode.next.next;
      this[_len]--;
    }
  }

  display() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }

  show() {
    return this.currentNode.element;
  }

  advance(n) {
    if (n <= 0) {
      return
    }
    let index = 0;
    while (index < n && this.currentNode.next != null) {
      this.currentNode = this.currentNode.next;
      index++;
    }
  }

  isEmpty() {
    return this[_len] === 0;
  }

  size() {
    return this[_len];
  }
}