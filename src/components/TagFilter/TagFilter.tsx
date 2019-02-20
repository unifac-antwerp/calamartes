import * as React from 'react'

type TProps = {
  tags: string[] | undefined | null
}

const TagFilter = ({ tags }: TProps) => {
  return !!tags ? (
    <ol>
      {tags.map(tag => (
        <li key={tag}>
          <input type="checkbox" name={tag} id={tag} checked={tags.includes(tag)} />
          {tag}
        </li>
      ))}
    </ol>
  ) : null
}

export default TagFilter
