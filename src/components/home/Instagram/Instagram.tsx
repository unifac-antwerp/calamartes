import Img from 'gatsby-image'
import { get } from 'lodash'
import * as React from 'react'
import { InstaNodeEdge, Maybe } from 'src/graphql'
import {} from './Instagram.styled'

type TProps = {
  posts: Array<Maybe<InstaNodeEdge>> | null | undefined
}

const Instagram = (props: TProps) => {
  const { posts } = props

  return (
    <section className="innerContainer">
      Instagram
      <div>
        {posts &&
          posts.length > 0 &&
          posts.map(
            post =>
              post &&
              post.node &&
              get(post, 'node.localFile.childImageSharp.fixed') && (
                <Img key={post.node.id} fixed={get(post, 'node.localFile.childImageSharp.fixed')} />
              )
          )}
      </div>
    </section>
  )
}

export default Instagram
