import axios from 'axios'

const api = {
  home:{
    banner: () => axios.get('/api/position/detail', {
        params: {
          ci: 73,
          positionIds:1382,
          channelId:70001,
          clientType:"wechat_small_program"
        }
      }),
    side: () => axios.get('/api/position/detail', {
      params: {
        ci: 821,
        positionIds: 1333,
        channelId: 70001,
        clientType: "wechat_small_program"
      }
    }),
    hotMove: () => axios.get('/mmdb/movie/v4/list/hot.json'),
    coming: () => axios.get('/mmdb/movie/home/list/rt/order/coming.json'),
    highComing: () => axios.get('/mmdb/movie/v1/list/wish/order/coming.json'),
    wonderfulShow:() => axios.get('/maoyansh/myshow/ajax/performances/wonderfulShow', {
      params: {
        cityId: 821,
        channelId: 70001,
        sellChannel: 7
      }
    }),
    common: (params) => axios.get('/sns/common/feed/channel/v2/list.json', {
      params: {
        sign: '60536f028dad721498d31e02cdb15d',
        cl: 821,
        clientType: 'wechat_small_program',
        channelId: 70001,
        version_name: 'wallet-v2.19.5',
        utm_medium: 'android',
        feedChannelId: 101,
        ...params,
      }
    })
    }
  }
export default api
