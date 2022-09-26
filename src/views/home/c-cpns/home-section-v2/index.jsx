import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'
import {SectionV2Wrapper} from './style'

const HomeSectionV2 = memo((props) => {
  // props获取数据
  const {infoData} = props

  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  // 事件处理函数
  const tabClickHandle = useCallback(function (index, name){
    setName(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <div className="disocunt">
          <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
          <SectionTabs tabNames={tabNames} tabClcik={ tabClickHandle } />
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
        <SectionFooter name={ name } />
        </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2