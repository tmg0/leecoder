import { describe, expect, test } from 'vitest'
import { addTwoNumbers, ListNode } from '..'

describe('two sum', () => {
  test('case 1', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    expect(addTwoNumbers(l1, l2)).toStrictEqual([0, 1])
  })

  test('case 2', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    expect(addTwoNumbers(l1, l2)).toStrictEqual([1, 2])
  })

  test('case 3', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    expect(addTwoNumbers(l1, l2)).toStrictEqual([1, 2])
  })
})
