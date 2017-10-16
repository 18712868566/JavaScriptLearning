#### DOM(1)
* DOM 简介 / DOM 标准 / DOM 节点
* 获取元素的子节点: childNodes / 兼容性问题
* 节点类型: nodeType 文本节点 元素节点
    1: 元素节点
    2: 属性节点
    3: 文本节点
* children的使用
    childNodes 在IE 和 FF 中不兼容
        --> ie8- 中childNodes 为最近的元素节点
        --> FF中 空格是最近的元素节点
    children 兼容

* 获取元素父节点 parentNode
* 获取定位元素的父节点 offsetParent
* 获取首尾子元素 : firstChild、 firstElementChild、 lastChild、 lastElementChild
    兼容性问题: IE / FF
* 获取兄弟节点: nextSibling、 nextElementSibling、 previousSibling、 previousElementSibling
* 元素属性操作： “.”与“[]”回顾、setAttribute、getAttribute、removeAttribute
* 通过className 获取元素、封装getByClass函数


#### DOM(2)

* 创建元素 createElement、appendChild
* 添加元素的性能差异
* insertBefore方法及实例
* 删除元素：removeChild方法
* 文档碎片：document.createDocumentFragment()
* 性能测试方法
* 创建元素 createElement    --> createElement(Ele)
* 插入元素 appendChild      --> 父.appendChild(子元素)
* 插入元素 insertBefore     --> 父.insertBefore(子元素)
* 删除元素 removeChild      --> 父.removeChild(子元素)  --> 父节点 this.parentNode
* 文档碎片 createDocumentFragment   --> 袋子 理论上比 一个一个创建 的性能高 -- 实际还慢了