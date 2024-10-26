"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("hello");
    const list = common_vendor.reactive([
      { name: "apple", num: 1, id: 1 },
      { name: "orange", num: 1, id: 2 }
    ]);
    const handleClick = () => {
      list.forEach((item) => {
        item.num++;
      });
    };
    const totalNum = common_vendor.computed(() => {
      return list.reduce((total, cur) => total + cur.num, 0);
    });
    common_vendor.onLoad(() => {
      console.log("onLoad生命周期");
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(title.value),
        c: common_vendor.o(handleClick),
        d: common_vendor.t(totalNum.value),
        e: common_vendor.f(list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.num),
            c: item.di
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
