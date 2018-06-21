import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'https://easy-mock.com/mock/5b29fb9f74cbd41bddf1e2db/example/list',
    method: 'get',
    params
  })
}
