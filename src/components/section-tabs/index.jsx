import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import ScrollView from '@/base-ui/scroll-view'

import {TabsWrapper} from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClcik } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClcik(index, item)
  }

  return (
    <TabsWrapper
    >
      <ScrollView>
      { 
      tabNames.map((item, index) => {
       return (
         <div
           className={classNames("item", {active: index === currentIndex})}
           onClick={ e => itemClickHandle(index, item) }
           key={item}
         >
           {item}
         </div>
       )
      })
      }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
 tabNames: PropTypes.array
}

export default SectionTabs