"use client"
import React from 'react'
import { useGlobalState } from '../context/globalProvider'
import Tasks from '../components/tasks/Tasks';

function page() {
  const { incompletedTasks } = useGlobalState();
  return (
    <Tasks title='Incompleted Tasks' tasks={incompletedTasks} />
  )
}

export default page