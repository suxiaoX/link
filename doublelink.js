/*
 * @Author: suxiao
 * @Date: 2019-06-29 12:32:11
 * @LastEditors: suxiao
 * @LastEditTime: 2019-06-29 22:04:29
 * @Description: 头部注释-介绍开发人员信息
 * @新建文件，养成良好的编码习惯
 */
class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
    this.previous = null;
  }
}

/**
 * @description: [双向链表]
 * @ADT [基于class实现]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @return {class} result [返回一个链表基础类]
 */

const _len = Symbol('_len')
class Link {
  constructor() {
    this.head = new Node('head');
    this.currentNode = this.head;
  }

  findLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
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
    newNode.previous = currentNode;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  remove(ele) {
    let currentNode = this.find(ele);
    if (currentNode.next != null) {
      currentNode.next.previous = currentNode.previous;
      currentNode.previous.next = currentNode.next;
      currentNode.next = null;
      currentNode.previous = null;
    } else {
      currentNode.previous = null;
    }
  }

  display() {
    let currentNode = this.head;
    while (currentNode.previous != null) {
      console.log(currentNode.previous.element);
      currentNode = currentNode.previous;
    }
  }

  advance(n) {
    if (n <= 0) {
      return
    }
    let index = 0;
    while (index <= n && this.currentNode.previous != null) {
      this.currentNode = this.currentNode.previous;
      index++;
    }
  }

  show() {
    return this.currentNode.element;
  }
}

const link = new Link();
