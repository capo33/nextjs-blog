'use client'
import React from 'react'
import useSwr from 'swr'
import styles from './page.module.css'

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSwr('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data, error, isLoading);
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard