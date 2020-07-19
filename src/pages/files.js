import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function files({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My sites files</h1>
        <table>
          <thead>
            <tr>
              <th>base</th>
              <th>relativePath</th>
              <th>Name</th>
              <th>Birth Time</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr>
                <td>{node.base}</td>
                <td>{node.relativePath}</td>
                <td>{node.name}</td>
                <td>{node.birthTime}</td>
                <td>{node.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          relativePath
          size
          birthTime(fromNow: true)
          base
          name
        }
      }
    }
  }
`
