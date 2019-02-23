import * as React from 'react'
import { TTag } from 'src/pages/programma'

type TProps = {
  tags: TTag[]
  setTags: (tags: TTag[]) => void
}

const TagFilter = ({ tags, setTags }: TProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clickedTag = e.target.name

    const toggleTag = (name: string, enabled: boolean) => {
      for (const i in tags) {
        if (tags[i].name === name) {
          tags[i].enabled = enabled
        }
      }
    }

    if (e.target.checked) {
      toggleTag(clickedTag, true)
    } else {
      toggleTag(clickedTag, false)
    }

    setTags(tags)
  }

  return !!tags ? (
    <ol>
      {tags.map(tag => (
        <li key={tag.name}>
          <input type="checkbox" name={tag.name} id={tag.name} checked={tag.enabled} onChange={e => handleChange(e)} />
          <label htmlFor={tag.name}> {tag.name}</label>
        </li>
      ))}
    </ol>
  ) : null
}

export default TagFilter
