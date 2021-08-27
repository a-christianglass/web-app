import React, { useState } from "react"
import * as S from "./video-row.styles"
import { Grid, Typography } from "@material-ui/core"
import parse from "html-react-parser"
import "react-modal-video/css/modal-video.min.css"
import YoutubeIcon from "../../assets/icons/youtubeIcon.svg"
import ModalVideo from "react-modal-video"

const VideoRow = ({ logo, title, contentVideoRow, videoBg, youtubeId }) => {
  const [isVideoOpen, setVideoOpen] = useState(false)
  return (
    <>
      <S.Wrapper>
        <Grid container>
          <S.LeftGrid item xs={12} md={6}>
            {logo && <S.Logo img={logo} />}
            <S.LeftWrapper>
              {title && <h2>{parse(title)}</h2>}
              {contentVideoRow && (
                <S.Content>{parse(contentVideoRow)}</S.Content>
              )}
            </S.LeftWrapper>
          </S.LeftGrid>
          <S.VideoGrid
            item
            xs={12}
            md={6}
            onClick={() => (youtubeId ? setVideoOpen(true) : "")}
          >
            {videoBg && (
              <S.VideoImage img={videoBg}>
                <YoutubeIcon />
              </S.VideoImage>
            )}
          </S.VideoGrid>
        </Grid>
      </S.Wrapper>
      <ModalVideo
        channel={"youtube"}
        isOpen={isVideoOpen}
        videoId={youtubeId}
        autoplay={1}
        onClose={() => setVideoOpen(false)}
      />
    </>
  )
}

export default VideoRow
