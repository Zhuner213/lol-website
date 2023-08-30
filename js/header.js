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
// hover：搜索栏
const searchHoverWrap = document.querySelector('.search-hover-wrap')
// 搜索按钮（hover前）
const headSearchBtn = document.querySelector('.head-search-btn')
// 搜索栏关闭按钮X
const btnCloseSearch = document.querySelector('.btn-close-search')
// 搜索框
const inputSearch = document.querySelector('.input-search')

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

// 搜索框模块
const HeadSearch = {
    init() {
        this.searchHover()
    },
    // 点击搜索按钮搜索栏出现 和 点击关闭搜索栏消失
    searchHover() {
        // 点击搜索按钮搜索栏出现
        headSearchBtn.addEventListener('click', function() {
            searchHoverWrap.classList.add('show')
            inputSearch.focus()
        })

        // 点击关闭搜索栏消失
        btnCloseSearch.addEventListener('click', function() {
            searchHoverWrap.classList.remove('show')
        })
    }
}

const HeadModules = {
    init() {
        HeadHoverControl.init()
        HeadSearch.init()
    }
}


export default HeadModules