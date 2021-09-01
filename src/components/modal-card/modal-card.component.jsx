import React from "react"
import * as S from "./modal-card.styles"
import CustomImage from "../custom-image/custom-image.component"
import Arrow from "../../assets/icons/arrow.svg"
import Dialog from "@material-ui/core/Dialog"
import GalleryDialog from "../gallery-dialog/gallery-dialog.component"
const ModalCard = ({ image, projectTitle, projectInfo }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <S.CardContainer onClick={handleClickOpen}>
      <S.Card>
        <CustomImage img={image} />
        <S.LinkWrapper>
          <S.TitleWrapper>
            <span>{projectTitle}</span>
          </S.TitleWrapper>
          <S.ArrowWrapper>
            <Arrow />
          </S.ArrowWrapper>
        </S.LinkWrapper>
      </S.Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <GalleryDialog {...projectInfo} />
      </Dialog>
    </S.CardContainer>
  )
}
export default ModalCard
