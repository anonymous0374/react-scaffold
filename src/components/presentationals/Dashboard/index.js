import React from 'react'
import Header from '../Header'
import * from 'style.less'

export default function Dashboard(props) {
  return (<div className={"dashboard"}>
    <Header></Header>
    <span>The Dashboard</span>
  </div>)
}