class ListNode {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  push(value) {
    const newNode = new ListNode(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }

      current.next = newNode
    }
  }

  unshift(value) {
    const newNode = new ListNode(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      ;[this.head, this.head.next] = [newNode, this.head]
    }
  }

  pop() {
    let current = this.head

    if (current === null) {
      return
    }

    if (current.next === null) {
      this.head = null
    } else {
      while (current.next.next !== null) {
        current = current.next
      }

      current.next = null
    }
  }

  shift() {
    if (this.head === null) {
      return
    }

    this.head = this.head.next
  }

  values() {
    if (this.head === null) {
      return []
    }

    let current = this.head

    let values = [current.data]

    while (current.next !== null) {
      current = current.next

      values.push(current.data)
    }

    return values
  }
}

exports.default = LinkedList
