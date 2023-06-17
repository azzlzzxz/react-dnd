export const CARD = 'CARD';
/**
 * React使用数据而不是视图作为来源
 * 当你的屏幕上拖动某物的时候，我们并不说你在拖一个DOM节点，而是说某种类型(type)的项目(item)正在被 拖动
 * 什么项目？项目其实就是一个js对象，用来描述被 拖动的内容
 * 每个项目都会有一个type类型，类型可以是字符串或者是Symbol,可以唯 一的标识某个项目的类型
 * 拖放源很多
 * 放置目标也也会很多
 * 男 类型 高富帅
 * 男 类型 矮搓穷
 * 女 accept 高富帅
 * 女 accept 矮搓穷
 */