import Mock from 'mockjs'
import feature from './feature.json'
import homeTab from './lk001.json'

Mock.mock('/featrue', { code: 0, data: feature })
Mock.mock('/homeTab', { code: 0, data: homeTab })
