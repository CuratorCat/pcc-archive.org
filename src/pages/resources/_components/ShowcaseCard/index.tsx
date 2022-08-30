/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { Tags, TagList, type TagType, type Resource, type Tag } from '@site/src/data/resources'
import { sortBy } from '@site/src/utils/jsUtils'
import styles from './styles.module.css'

const TagComp = React.forwardRef<HTMLLIElement, Tag>(({ label, color, description }, ref) => (
  <li ref={ref} className={styles.tag} title={description}>
    <span className={styles.textLabel}>{label.toLowerCase()}</span>
    <span className={styles.colorLabel} style={{ backgroundColor: color }} />
  </li>
))

function ShowcaseCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map(tag => ({ tag, ...Tags[tag] }))

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, tagObject => TagList.indexOf(tagObject.tag))

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`

        return <TagComp key={index} {...tagObject} />
      })}
    </>
  )
}

function ShowcaseCard({ resource }: { resource: Resource }) {
  return (
    <li
      key={resource.title}
      className="flex flex-col justify-between rounded-xl bg-slate-50 hover:scale-105 transition-all duration-150 dark:bg-slate-500/25 border-slate-500/10 dark:border-slate-500/0 border overflow-hidden "
    >
      <div>
        <div className={clsx('card__image', styles.showcaseCardImage)}>
          <img src={require('../../../../data/resources/img/' + resource.image).default} alt={resource.title} />
        </div>
        <div className="px-3 py-1">
          <div className={clsx(styles.showcaseCardHeader)}>
            <h4 className={styles.showcaseCardTitle}>
              <Link href={resource.website} className={styles.showcaseCardLink}>
                {resource.title}
              </Link>
            </h4>
            {resource.tags.includes('favorite') && '💜'}
            {resource.source && (
              <Link
                href={resource.source}
                className={clsx('button button--secondary button--sm', styles.showcaseCardSrcBtn)}
              >
                Source
              </Link>
            )}
          </div>
          <p className={styles.showcaseCardBody}>{resource.description}</p>
        </div>
      </div>
      <ul className={` ${styles.cardFooter}`}>
        <ShowcaseCardTag tags={resource.tags} />
      </ul>
    </li>
  )
}

export default React.memo(ShowcaseCard)
