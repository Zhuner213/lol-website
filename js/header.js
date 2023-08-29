const body = document.body
// 顶部广告大图
const topAct = document.querySelector('.comm-topact')
// 顶部导航
const headNav = document.querySelector('.head-nav')
// 导航子菜单
const headNavSub = document.querySelector('.head-nav-sub')
// 掌盟图标
const headApp = document.querySelector('.head-app-normal')
// hover：掌盟二维码
const headAppHover = document.querySelector('.head-app-hover')
// 玩家信息
const headUserInfo = document.querySelector('.head-userinfo-normal')
// 登录hover
const headLoginHover = document.querySelector('.head-login-hover')

// 滚动top广告图切换
body.addEventListener('click', function () {
    topAct.classList.remove('big')
})

// 鼠标移入hoverFrom或移入hoverLayer给hoverLayer添加classname
// 鼠标移出hoverFrom或移出hoverLayer给hoverLayer删掉classname
const hoverToggleClass = function hoverToggleClass(hoverFrom, hoverLayer, classname, delay) {

    let timeout
    let showTimeout

    delay = delay || 0

    const addClass = function addClass(...args) {
        // 要绑定事件的dom元素数组
        const elements = args
        elements.forEach(ele => {
            ele.addEventListener('mouseenter', function () {
                clearTimeout(timeout)
                clearTimeout(showTimeout)
                showTimeout = setTimeout(() => {
                    hoverLayer.classList.add(classname)
                }, delay)
            })
        })
    }

    const removeClass = function removeClass(...args) {
        const elements = args
        elements.forEach(ele => {
            ele.addEventListener('mouseleave', function () {
                clearTimeout(timeout)
                clearTimeout(showTimeout)
                timeout = setTimeout(() => {
                    hoverLayer.classList.remove(classname)
                }, 100)
            })
        })
    }

    // 鼠标移入 hoverFrom、hoverLayer 给hoverLayer添加classname
    addClass(hoverFrom, hoverLayer)

    // 鼠标移出 hoverFrom、hoverLayer 给hoverLayer删掉classname
    removeClass(hoverFrom, hoverLayer)
}

// 头部hover控制
const HeadHoverControl = {
    init() {
        // 给【顶部导航栏】和【导航子菜单】添加 hover-show 系列事件
        hoverToggleClass(headNav, headNavSub, 'show', 300)
        // 给【玩家信息】和【登录hover】添加 hover-show 系列事件
        hoverToggleClass(headUserInfo, headLoginHover, 'show')
        // 给【掌盟图标】和【hover：掌盟二维码】添加 hover-show 系列事件
        hoverToggleClass(headApp, headAppHover, 'show')
    }
}

const HeadModules = {
    init() {
        HeadHoverControl.init()
    }
}


export default HeadModules