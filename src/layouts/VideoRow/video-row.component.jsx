import React, { useState } from "react"
import * as S from "./video-row.styles"
import { Grid, Typography } from "@material-ui/core"
import parse from "html-react-parser"
import YoutubeIcon from "../../assets/icons/youtubeIcon.svg"
const VideoRow = ({ logo, title, content, videoBg, videoId }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <S.LeftGrid item xs={12} md={6}>
          <S.Logo img={logo} />
          <S.LeftWrapper>
            <h2>{parse(title)}</h2>
            <Typography>{parse(content)}</Typography>
          </S.LeftWrapper>
        </S.LeftGrid>
        <S.VideoGrid item xs={12} md={6}>
          <S.VideoImage img={videoBg}>
            <YoutubeIcon />
          </S.VideoImage>
        </S.VideoGrid>
      </Grid>
    </S.Wrapper>
  )
}

export default VideoRow
