import Mock from 'mockjs'
import data from './data.json'
import feature from './feature.json'

Mock.mock('/featrue', { code: 0, data: feature })
Mock.mock('/info', { code: 0, data: data.info })
Mock.mock('/ratings', { code: 0, data: data.ratings })