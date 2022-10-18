import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

function FeedbackTable() {
  return (
    <>
    <TableContainer>
  <Table variant='simple'>
    <Thead bg="#eee">
      <Tr>
        <Th>Student Code</Th>
        <Th>Date</Th>
        <Th>Instructor Rating</Th>
        <Th>Instructor Feedback</Th>
        <Th>Mentor Rating</Th>
        <Th>Mentor Feedback</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>pw06_001</Td>
        <Td>13/10/2022</Td>
        <Td isNumeric>5</Td>
        <Td>Excellent</Td>
        <Td isNumeric>5</Td>
        <Td>Excellent</Td>
      </Tr>
    </Tbody>
    <Tfoot bg="#eee">
      <Tr>
        <Th></Th>
        <Th>Aeverage Rating</Th>
        <Th isNumeric></Th>
        <Th>Aeverage Rating</Th>
        <Th isNumeric></Th>
        <Th></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </>
  )
}

export default FeedbackTable