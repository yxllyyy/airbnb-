import React, { memo, useCallback } from 'react'
import {shallowEqual, useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import RoomItem from '@/components/room-item'
import {changeDetailInfoAction} from '@/store/modules/detail'
import {RoomsWrapper} from './style'

const EntireRooms = memo((props) => {
  // 从redux中获取roomList数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClcikHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <div className="title">共{ totalCount }多处住所</div>
      <div className="list">
       {
       roomList.map(item => {
         return (
           <RoomItem
             itemData={item}
             itemWidth="20%"
             key={item._id}
             itemClick={itemClcikHandle}
           />)
       })
      }
      </div>

      {
        isLoading && <div className="cover"></div>
      }
    </RoomsWrapper>
  )
})

export default EntireRooms