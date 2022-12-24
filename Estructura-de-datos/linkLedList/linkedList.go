package main

import "fmt"

type Node struct {
	value int
	next  *Node
}

type LinkedList struct {
	head   *Node
	length int
}

func (l *LinkedList) prepend(n *Node) {
	second := l.head
	l.head = n
	l.head.next = second
	l.length++
}

func (l LinkedList) printListData() {
	toPrint := l.head
	for l.length != 0 {
		fmt.Printf("%d", toPrint.value)
		toPrint = toPrint.next
		l.length--
	}
	fmt.Printf("\n")
}

func (l *LinkedList) get(position int) int {
	currentPosition := 0
	currentNode := l.head
	fmt.Println("position", position)
	fmt.Println("currentPosition", currentPosition)
	fmt.Println("currentNode", currentNode)
	for position != currentPosition {
		currentNode = currentNode.next
		currentPosition++
	}
	fmt.Println("position")
	return currentNode.value
}

func (l *LinkedList) deleteWithValue(value int) {
	if l.length == 0 {
		return
	}
	if l.head.value == value {
		l.head = l.head.next
		l.length--
		return
	}

	previousToDelete := l.head
	for previousToDelete.next.value != value {
		if previousToDelete.next.next == nil {
			return
		}
		previousToDelete = previousToDelete.next
	}
	previousToDelete.next = previousToDelete.next.next
	l.length--
}

func main() {
	myList := LinkedList{}
	/* node1 := &Node{value: 48}
	node2 := &Node{value: 18}
	node3 := &Node{value: 16}
	node4 := &Node{value: 11}
	node5 := &Node{value: 7}
	node6 := &Node{value: 2}
	myList.prepend(node1)
	myList.prepend(node2)
	myList.prepend(node3)
	myList.prepend(node4)
	myList.prepend(node5)
	myList.prepend(node6) */
	//fmt.Println("ml",myList)
	/* myList.deleteWithValue(100) // runtime error : invalid memory addres or nill pointer dereference
	myList.printListData()
	myList.deleteWithValue(16)
	myList.printListData() */
	/* 	myList.deleteWithValue(100)
	   	myList.deleteWithValue(2)
	   	myList.printListData() */
	/*
		emptyList := LinkedList{}
		// emptyList.deleteWithValue(10) // runtime error : invalid memory addres or nill pointer dereference
		emptyList.deleteWithValue(10) */
	//myList.get(0)
	width := 10
	heigth := 20

	node1 := &Node{value: width}
	node2 := &Node{value: heigth}
	myList.prepend(node1)
	myList.prepend(node2)
	myList.printListData()
}
