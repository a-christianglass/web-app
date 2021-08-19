import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import * as S from "./progress-bar.styles"

export const ProgressBar = ({step}) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
  })

  const classes = useStyles()
  const [progress, setProgress] = useState(20)

  useEffect(() => {
   //setProgress(5);
  }, [])

  return (
    <S.ProgressBarWrapper>
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </S.ProgressBarWrapper>
  )
}

export default ProgressBar
