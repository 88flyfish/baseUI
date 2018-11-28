/**
 * created by DELL  2018-11-15
 * @Description 菜单管理统一api
 */
import httpReq from './http';
//分页获取菜单列表(demo)
export function getDemoList(opts) {
    return httpReq({
        method: 'post',
        url: 'menu/page',
        opts: opts
    });
}
export function deleteItem(opts) {
    return httpReq({
        method: 'post',
        url: 'menu/page',
        opts: opts
    });
}
export function modifyItem(opts) {
    return httpReq({
        method: 'post',
        url: 'menu/page',
        opts: opts
    });
}
/************************************/
