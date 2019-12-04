import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach(async(to, from , next) => {
    console.log('to.path', to.path)
    console.log('from.path', from.path)
    next();
})