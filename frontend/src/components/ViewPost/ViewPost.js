// @flow
import React from 'react'

import '../../grid.scss'

import './ViewPost.scss'

type ViewPostProps = {
  location: Object,
  article: Object
}

const ViewPost = (props: ViewPostProps) => {
  const article = props.location.state.data

  console.log(article.tags)
  return (
    <div className={'ViewPost'}>
      <img className={'ViewPost__image'} src={article.image} alt="publication of article"/>
      <h1 className={'ViewPost__title'}>{article.title}</h1>
      <h3 className={'ViewPost__author'}>{article.author}</h3>
      <p className={'ViewPost__content'}>{article.content}</p>
      <ul className={'ViewPost__tags'}>
        {article.tags.map((tag, i) => (
          <li className={'ViewPost__tags_tag'} key={i}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default ViewPost
