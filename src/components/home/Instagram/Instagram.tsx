import * as React from 'react'
import { Description, Images, ImageWrap, InnerWrap, StyledImg, Title, Wrap } from './Instagram.styled'

type TProps = {
  title: string
  description: string
}

const INSTAGRAM_ID = process.env.GATSBY_INSTAGRAM_USERNAME
const THUMBNAIL_WIDTH = 640
const PHOTO_COUNT = 10

const Instagram = (props: TProps) => {
  const { description, title } = props


  const [photos, setPhotos] = React.useState<any[]>([])

  React.useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Hack from https://stackoverflow.com/a/47243409/2217533
        const response = await fetch(
          `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`
        )
        const { data } = await response.json()
        const photos = data.user.edge_owner_to_timeline_media.edges.map(
          ({ node }:any) => {
            const { id } = node
            const comments = node.edge_media_to_comment.count
            const likes = node.edge_media_preview_like.count
            const caption = node.edge_media_to_caption.edges[0].node.text
            const thumbnail = node.thumbnail_resources.find(
              (thumbnail:any) => thumbnail.config_width === THUMBNAIL_WIDTH
            )
            const { src, config_width: width, config_height: height } = thumbnail
            const url = `https://www.instagram.com/p/${node.shortcode}`
            return {
              id,
              caption,
              src,
              width,
              height,
              url,
              comments,
              likes,
            }
          }
        )
        setPhotos(photos)
      } catch (error) {
        console.error(error)
        setPhotos([])
      }
    }
    fetchPhotos()
  }, [])

  if(photos.length === 0) return null

  return (
    <Wrap>
      <InnerWrap className="inner-container">
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Images>
          {photos.map(({ src, url, id, caption }) => (
              <ImageWrap key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <StyledImg src={src} alt={caption.substring(0, 40)} />
                </a>
              </ImageWrap>
            )
          )}
        </Images>
      </InnerWrap>
    </Wrap>
  )
}

export default Instagram
