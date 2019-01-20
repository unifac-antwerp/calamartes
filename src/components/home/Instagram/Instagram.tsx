import { getInstagramPostUrl } from '@utils'
import idx from 'idx'
import * as React from 'react'
import { InstaNodeEdge, Maybe } from 'src/graphql'
import { Description, Images, ImageWrap, InnerWrap, StyledImg, Title, Wrap } from './Instagram.styled'

type TProps = {
  posts: Array<Maybe<InstaNodeEdge>> | null | undefined
  title: string
  description: string
}

const Instagram = (props: TProps) => {
  const { posts, description, title } = props

  const maxPosts = 8

  return (
    <Wrap>
      <InnerWrap className="innerContainer">
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Images>
          {posts &&
            posts.length > 0 &&
            posts.slice(0, maxPosts).map(post => {
              const image = idx(post, _ => _.node.localFile.childImageSharp.fluid)
              const id = idx(post, _ => _.node.id)
              return (
                id &&
                image && (
                  <ImageWrap key={id}>
                    <a href={getInstagramPostUrl(id)} target="_blank">
                      <StyledImg fluid={image} />
                    </a>
                  </ImageWrap>
                )
              )
            })}
        </Images>
      </InnerWrap>
    </Wrap>
  )
}

export default Instagram
