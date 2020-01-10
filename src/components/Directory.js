import React, { useState } from 'react'
import FileTree from './FileTree'

const instanceFile = [
  {
    id: 1,
    name: 'one',
    subFiles: [
      {
        id: 2,
        name: 'two',
        subFiles: []
      },
      {
        id: 3,
        name: 'three',
        subFiles: []
      },
      {
        id: 4,
        name: 'four',
        subFiles: [
          {
            id: 6,
            name: 'six',
            subFiles: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'five',
    subFiles: [
      {
        id: 7,
        name: 'seven',
        subFiles: [
          {
            id: 8,
            name: 'eight',
            subFiles: [
              {
                id: 9,
                name: 'nine',
                subFiles: [
                  {
                    id: 10,
                    name: 'ten',
                    subFiles: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export default function Directory() {
  const [selectedFiles, setSelectedFiles] = useState({})
  return (
    <div>
      <h1>Toppings</h1>
      <FileTree
        files={instanceFile}
        selectedFiles={selectedFiles}
        onChange={selectedFiles => setSelectedFiles(selectedFiles)}
      />
    </div>
  )
}
