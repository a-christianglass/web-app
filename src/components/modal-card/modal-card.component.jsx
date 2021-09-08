import React from "react"
import * as S from "./modal-card.styles"
import Arrow from "../../assets/icons/arrow.svg"
import GalleryDialog from "../gallery-dialog/gallery-dialog.component"
import { DialogContent, Modal } from "@material-ui/core"
import CloseIcon from "../../assets/icons/close.svg"
import { CustomDialog } from "./modal-card.styles"

const ModalCard = ({ projectImage, projectTitle, projectInfo }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <S.CardContainer onClick={projectInfo.galleryImages && handleClickOpen}>
        <S.Card>
          {projectImage && <S.CardImage img={projectImage} />}
          {projectTitle && (
            <S.LinkWrapper>
              <S.TitleWrapper>
                <span>{projectTitle}</span>
              </S.TitleWrapper>
              <S.ArrowWrapper>
                <Arrow />
              </S.ArrowWrapper>
            </S.LinkWrapper>
          )}
        </S.Card>
      </S.CardContainer>

      <CustomDialog onClose={handleClose} open={open} maxWidth="lg">
        <S.IconWrapper>
          <CloseIcon onClick={handleClose} />
        </S.IconWrapper>
        <DialogContent>
          <GalleryDialog {...projectInfo} />
        </DialogContent>
      </CustomDialog>
    </>
  )
}
export default ModalCard
