import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  IconButton
} from '@material-ui/core'
import { IndeterminateCheckBox, AddBox } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage'

const useStyles = makeStyles(theme => ({
  file: {
    flexGrow: 1
  }
}))

export default function FileTree({ files, selectedFiles, onChange }) {
  const handleCheckboxClicked = selectedFileId => {
    if (selectedFiles[selectedFileId]) delete selectedFiles[selectedFileId]
    else selectedFiles[selectedFileId] = {}
    onChange(selectedFiles)
  }

  const handleSubFilesListChange = (fileId, subFiles) => {
    selectedFiles[fileId] = subFiles
    onChange(selectedFiles)
  }

  return (
    <div>
      {files.map(file => (
        <ul>
          <File
            selected={selectedFiles[file.id]}
            label={file.name}
            onChange={() => handleCheckboxClicked(file.id)}
          />
          {/* Base Case */}
          {file.subFiles.length > 0 && selectedFiles[file.id] && (
            <FileTree
              files={file.subFiles}
              selectedFiles={selectedFiles[file.id]}
              onChange={subFiles => handleSubFilesListChange(file.id, subFiles)}
            />
          )}
        </ul>
      ))}
    </div>
  )
}

const File = ({ selected, label, onChange }) => {
  const classes = useStyles()

  return (
    <div className={classes.file}>
      <IconButton
        onClick={() => {
          onChange(!selected)
        }}
      >
        <AddBox />
      </IconButton>
      {label}
    </div>
  )
}

// const File = ({ selected, label, onChange }) => {
//   const classes = useStyles()

//   return (
//     <div className={classes.file}>
//       <ListItem button onClick={() => onChange(!selected)}>
//         <ListItemIcon>
//           {selected ? <IndeterminateCheckBox /> : <AddBox />}
//         </ListItemIcon>
//         <ListItemText primary={label} />
//       </ListItem>
//       <div className={'checkbox__label'}></div>
//     </div>
//   )
// }
