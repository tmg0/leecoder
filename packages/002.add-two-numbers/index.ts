/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null

  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function arrayToList (arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null
  }

  const head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

export function addTwoNumbers (l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const a1: number[] = []
  const a2: number[] = []

  if (l1) {
    while (true) {
      a1.push(l1.val)
      if (l1.next === null) { break }
      l1 = l1.next
    }
  }

  if (l2) {
    while (true) {
      a2.push(l2.val)
      if (l2.next === null) { break }
      l1 = l2.next
    }
  }

  const n1 = Number(a1.reverse().join(''))
  const n2 = Number(a2.reverse().join(''))

  const ans = String(n1 + n2).split('').map(Number).reverse()

  return arrayToList(ans)
}
