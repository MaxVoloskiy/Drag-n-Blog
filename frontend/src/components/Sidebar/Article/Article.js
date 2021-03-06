// @flow
import React from 'react'
import { DragSource } from 'react-dnd/lib/index'
import { Link } from 'react-router-dom'
import flow from 'lodash/flow'

import { shortenContent } from '../../../helpers/shortenContent'

import './Article.scss'
import BEM from '../../../helpers/BEM'

const b = BEM('Article')

type ArticleProps = {
  article: Object,
  itemDeleter: number => Object,
  connectDragSource: Function,
  isDragging: boolean
}

const Article = ({ isDragging, connectDragSource, article, itemDeleter }: ArticleProps) => (
  connectDragSource(
    <li className={b()} style={{ opacity: isDragging ? 0 : 1 }}>
      <h4 className={b('title')}>{article.title}</h4>
      <div className={b('modifiers')}>
        <button
          className={b('remove')}
          onClick={() => itemDeleter(article.id)}
        >
          Remove
        </button>
        <Link
          to={{ pathname: `/edit-article/${article.id}` }}
          className={b('edit')}
        >
          Edit
        </Link>
      </div>
      <p className={b('content')}>
        {shortenContent(article.content, 50)}
      </p>
      <small className={b('author')}>{article.author}</small>
      <time className={b('date')}>{article.date}</time>
    </li>)
)

export default flow(
  DragSource(
    'Article',
    {
      beginDrag: props =>
        props.article
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging()
    })
  )
)(Article)
