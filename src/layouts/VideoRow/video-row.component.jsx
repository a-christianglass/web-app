import React, { useState } from "react"
import * as S from "./video-row.styles"
import { Grid, Typography } from "@material-ui/core"
import parse from "html-react-parser"
import YoutubeIcon from "../../assets/icons/youtubeIcon.svg"
const VideoRow = ({ logo, title, contentVideoRow, videoBg, videoId }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6}>
          {logo && <S.Logo img={logo} />}
          <S.LeftWrapper>
            {title && <h2>{parse(title)}</h2>}
            {contentVideoRow && <Typography>{parse(contentVideoRow)}</Typography>}
          </S.LeftWrapper>
        </S.LeftGrid>
        <S.VideoGrid item xs={12} md={6}>
          {videoBg && (
            <S.VideoImage img={videoBg}>
              <YoutubeIcon />
            </S.VideoImage>
          )}
        </S.VideoGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default VideoRow
