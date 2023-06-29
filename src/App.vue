<template>
  <div class="xlos-help-center">
    <div class="center-header">
      <a class="redirect" href="https://xlos.xuelangyun.com/web" target="_blank"></a>
      <img src="./assets/logo.png" width="215" height="32" />
    </div>
    <div class="center-content">
      <div class="banner">
        <div class="title">欢迎使用雪浪OS帮助中心</div>
        <div class="des">在这里，我们为你提供帮助与支持</div>
      </div>
      <div class="card">
        <div class="card-item" v-for="item in menus" :key="item.key">
          <div :class="`card-description ${item.key}`">
            <div class="info" @click="event => openUrl(item)">
              <div>{{ item.label }}</div>
              <div>{{ item.description }}</div>
              <a>查看全部</a>
            </div>
          </div>
          <div class="card-list">
            <div class="list">
              <div class="list-item" v-for="link in item.links" :key="`${link.label}`">
                <a :href="link.url" target="_blank">{{ link.label }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
const menus = reactive([{
  key: 'predict',
  label: "系统工程",
  description: "混合建模与联合计算",
  url: "/suanpan",
  links: [{
    "label": "雪浪OS·系统工程是什么",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E4%BA%86%E8%A7%A3%E9%9B%AA%E6%B5%AAOS%C2%B7%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B/%E9%9B%AA%E6%B5%AAOS%C2%B7%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B%E6%98%AF%E4%BB%80%E4%B9%88/"
  }, {
    "label": "算盘入门第一篇-基础概念",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E7%AE%97%E7%9B%98%E5%85%A5%E9%97%A8%E7%AC%AC%E4%B8%80%E7%AF%87-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/"
  }, {
    "label": "雪浪OS·系统工程视频集(持续更新)",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E4%BA%86%E8%A7%A3%E9%9B%AA%E6%B5%AAOS%C2%B7%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B/%E9%9B%AA%E6%B5%AAOS%C2%B7%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B%E8%A7%86%E9%A2%91%E9%9B%86%EF%BC%88%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0%EF%BC%89/"
  }, {
    "label": "算盘入门第二篇-应用开发",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E7%AE%97%E7%9B%98%E5%85%A5%E9%97%A8%E7%AC%AC%E4%BA%8C%E7%AF%87-%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91/"
  }, {
    "label": " 开始使用雪浪OS",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E4%BA%86%E8%A7%A3%E9%9B%AA%E6%B5%AAOS%C2%B7%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B/%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8%E9%9B%AA%E6%B5%AAOS/"
  }, {
    "label": "算盘入门第三篇-机器学习频道",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E7%AE%97%E7%9B%98%E5%85%A5%E9%97%A8%E7%AC%AC%E4%B8%89%E7%AF%87-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E9%A2%91%E9%81%93/"
  }, {
    "label": "客户端安装手册&问题",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E4%BA%86%E8%A7%A3%E9%9B%AA%E6%B5%AAOS%C2%B7%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B/%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%AE%89%E8%A3%85%E6%89%8B%E5%86%8C&%E9%97%AE%E9%A2%98/"
  }, {
    "label": "算盘入门第四篇-开发组件",
    "url": "/suanpan/docs/%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E4%BC%98%E7%A7%80/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E7%AE%97%E7%9B%98%E5%85%A5%E9%97%A8%E7%AC%AC%E5%9B%9B%E7%AF%87-%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6/"
  }]
}, {
  key: 'hufu', 
  label: "数据建模", 
  description: "松耦合组件化数据中台", 
  url: "http://10.88.40.5/help.html",
  links: [{
    "label": "虎符产品概述",
    "url": "http://10.88.40.5/help.html#%E4%BA%A7%E5%93%81%E6%A6%82%E8%BF%B0"
  }, {
    "label": "虎符产品架构",
    "url": "http://10.88.40.5/help.html#%E4%BA%A7%E5%93%81%E6%9E%B6%E6%9E%84"
  }, {
    "label": "虎符产品功能",
    "url": "http://10.88.40.5/help.html#%E4%BA%A7%E5%93%81%E5%8A%9F%E8%83%BD"
  }, {
    "label": "虎符应用场景",
    "url": "http://10.88.40.5/help.html#%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF"
  }, {
    "label": "虎符使用简介",
    "url": "http://10.88.40.5/help.html#%E8%99%8E%E7%AC%A6%E4%BD%BF%E7%94%A8%E7%AE%80%E4%BB%8B"
  }, {
    "label": "虎符的用户",
    "url": "http://10.88.40.5/help.html#%E8%99%8E%E7%AC%A6%E7%9A%84%E7%94%A8%E6%88%B7"
  }, {
    "label": "管理中心",
    "url": "http://10.88.40.5/help.html#%E7%AE%A1%E7%90%86%E4%B8%AD%E5%BF%83"
  }, {
    "label": "告警中心",
    "url": "http://10.88.40.5/help.html#%E5%91%8A%E8%AD%A6%E4%B8%AD%E5%BF%83"
  }]
}, {
  key: 'gonggong', 
  label: "应用搭建", 
  description: "工业低代码开发平台", 
  url: "/gonggong/",
  links: [{
    "label": "共工产品概述",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%85%B1%E5%B7%A5%E5%85%A5%E9%97%A8/%E5%85%B1%E5%B7%A5%E4%BA%A7%E5%93%81%E6%A6%82%E8%BF%B0"
  }, {
    "label": "共工名词解释",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%85%B1%E5%B7%A5%E5%85%A5%E9%97%A8/%E5%85%B1%E5%B7%A5%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A"
  }, {
    "label": "搭建应用demo",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%85%B1%E5%B7%A5%E5%85%A5%E9%97%A8/%E6%90%AD%E5%BB%BA%E5%BA%94%E7%94%A8demo"
  }, {
    "label": "如何注册登录",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%85%B1%E5%B7%A5%E5%85%A5%E9%97%A8/%E5%A6%82%E4%BD%95%E6%B3%A8%E5%86%8C%E7%99%BB%E5%BD%95"
  }, {
    "label": "工作流介绍",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%9F%BA%E7%A1%80%E6%95%99%E5%AD%A6/%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%BB%8B%E7%BB%8D"
  }, {
    "label": "领域模型介绍",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%9F%BA%E7%A1%80%E6%95%99%E5%AD%A6/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B%E4%BB%8B%E7%BB%8D"
  }, {
    "label": "逻辑功能介绍",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%9F%BA%E7%A1%80%E6%95%99%E5%AD%A6/%E9%80%BB%E8%BE%91%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D"
  }, {
    "label": "枚举功能介绍",
    "url": "/gonggong/docs/%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C/%E5%9F%BA%E7%A1%80%E6%95%99%E5%AD%A6/%E6%9E%9A%E4%B8%BE%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D"
  }]
}, {
  key: 'algo', 
  label: "算法开发", 
  description: "图形化构建机器学习模型", 
  url: "/suanpan/docs/category/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E9%A2%91%E9%81%93%E5%AE%9E%E8%B7%B5/",
  links: [{
    "label": "数据处理案例",
    "url": "/suanpan/docs/category/%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86%E6%A1%88%E4%BE%8B/"
  }, {
    "label": "产品架构",
    "url": "http://10.88.40.5/help.html#%E4%BA%A7%E5%93%81%E6%9E%B6%E6%9E%84"
  }, {
    "label": "特征工程案例",
    "url": "/suanpan/docs/category/%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B%E6%A1%88%E4%BE%8B/"
  }, {
    "label": "离群点案例",
    "url": "/suanpan/docs/category/%E7%A6%BB%E7%BE%A4%E7%82%B9%E6%A1%88%E4%BE%8B/"
  }, {
    "label": "分类案例",
    "url": "/suanpan/docs/category/%E5%88%86%E7%B1%BB%E6%A1%88%E4%BE%8B/"
  }, {
    "label": "回归案例",
    "url": "/suanpan/docs/category/%E5%9B%9E%E5%BD%92%E6%A1%88%E4%BE%8B/"
  }, {
    "label": "聚类案例",
    "url": "/suanpan/docs/category/%E8%81%9A%E7%B1%BB%E6%A1%88%E4%BE%8B/"
  }, {
    "label": "周志华机器学习习题案例",
    "url": "/suanpan/docs/category/%E5%91%A8%E5%BF%97%E5%8D%8E%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E4%B9%A0%E9%A2%98%E6%A1%88%E4%BE%8B/"
  }]
}, {
  key: 'gopt', 
  label: "GOpt", 
  description: "进化多目标优化算法平台", 
  url: "https://appa5e5neyp8107.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/image_text/i_62c3a12ee4b050af2397db45",
  links: [{
    "label": "用户手册",
    "url": "https://appa5e5neyp8107.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/image_text/i_62c3a12ee4b050af2397db45"
  }, {
    "label": "",
    "url": ""
  }, {
    "label": "",
    "url": ""
  }, {
    "label": "",
    "url": ""
  }, {
    "label": "",
    "url": ""
  }, {
    "label": "",
    "url": ""
  }, {
    "label": "",
    "url": ""
  }, {
    "label": "",
    "url": ""
  }]
}]);

const openUrl = function(item) {
  let url = item.url;
  if (url.startsWith("/")) {
    url = location.origin + url;
  }
  window.open(url, "_blank");
}
</script>

<style lang="less">
body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  overflow: auto;
  .xlos-help-center {
    display: flex;
    flex-direction: column;

    .center {
      &-header {
        width: 100%;
        height: 32px;
        padding: 16px 24px;
        border-bottom: 1px solid #EAECEF;
        width: calc(100% - 48px);

        .redirect {
          position: absolute;
          top: 16px;
          left: 24px;
          width: 115px;
          height: 30px;
        }
      }

      &-content {
        flex: 1;

        .banner {
          height: 280px;
          background: url('./assets/banner.png') no-repeat center center;
          background-size: 1920px 280px;
          padding: 0 calc((100% - 1200px) / 2);
          display: flex;
          flex-direction: column;
          justify-content: center;

          .title,
          .des {
            width: 1200px;
          }

          .title {
            font-size: 32px;
            font-weight: 500;
            line-height: 40px;
            letter-spacing: 0em;
            color: #1C2126;
            margin-bottom: 16px;
          }

          .des {
            font-size: 20px;
            font-weight: normal;
            line-height: 28px;
            letter-spacing: 0em;
            color: #4C5A67;
          }
        }

        .card {
          padding: 64px calc((100% - 1200px) / 2);

          &-item {
            width: 100%;
            height: 200px;
            border: 1px solid #DCDEE1;
            margin-bottom: 32px;
            display: flex;

            &:last-child {
              margin-bottom: 0;
            }
          }

          &-description {
            flex: 1 3;
            position: relative;
            background-size: 400px 200px;

            .info {
              position: relative;
              padding: 32px;
              width: calc(100% - 64px);
              height: calc(100% - 64px);
              color: #fff;
              cursor: pointer;

              div:nth-child(1) {
                font-size: 18px;
                font-weight: 500;
                line-height: 26px;
                margin-bottom: 4px;
              }

              div:nth-child(2) {
                font-size: 14px;
                font-weight: normal;
                line-height: 22px;
                margin-bottom: 16px;
              }

              a {
                border: 1px solid rgba(255, 255, 255, 0.65);
                background: rgba(255, 255, 255, 0.15);
                width: 68px;
                height: 26px;
                border-radius: 14px;
                font-size: 12px;
                font-weight: 500;
                line-height: 20px;
                color: #fff;
                padding: 5px 10px;
                text-decoration: none;

                &:hover {
                  background: #FFFFFF;
                  font-weight: normal;
                }
              }
            }

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            &.predict {
              background-image: url('./assets/predict-bg.png');

              &::before {
                background: linear-gradient(90deg, #30A9FF 0%, rgba(127, 191, 255, 0.10) 100%);
              }

              a:hover {
                color: #0095FF;
              }
            }

            &.hufu {
              background-image: url('./assets/hufu-bg.png');

              &::before {
                background: linear-gradient(90deg, #3098FF 0%, rgba(127, 180, 255, 0.10) 100%);
              }

              a:hover {
                color: #1886F3;
              }
            }

            &.gonggong {
              background-image: url('./assets/gonggong-bg.png');

              &::before {
                background: linear-gradient(90deg, #3086FF 0%, rgba(134, 174, 255, 0.10) 100%);
              }

              a:hover {
                color: #1979FF;
              }
            }

            &.algo {
              background-image: url('./assets/algo-bg.png');

              &::before {
                background: linear-gradient(90deg, #5A83FF 0%, rgba(159, 175, 255, 0.10) 100%);
              }

              a:hover {
                color: #3265FF;
              }
            }

            &.gopt {
              background-image: url('./assets/gopt-bg.png');

              &::before {
                background: linear-gradient(90deg, #7E7EFF 0%, rgba(173, 166, 255, 0.10) 100%);
              }

              a:hover {
                color: #4C4CFF;
              }
            }
          }

          &-list {
            flex: 2 3;

            .list {
              padding: 32px 64px;
              width: calc(100% - 128px);
              height: calc(100% - 64px);
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;

              .list-item {
                width: calc((100% - 32px) / 2);
                overflow: hidden;
                text-overflow: ellipsis;
                
                a {
                  text-decoration: none;
                  font-size: 14px;
                  font-weight: normal;
                  line-height: 22px;
                  color: #1C2126;
                  cursor: pointer;
                  text-wrap: nowrap;

                  &:hover {
                    color: #2EA1FF;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 812px) and (max-width: 1296px) {
  .card, .banner {
    padding-left: 48px !important;
    padding-right: 48px !important;
  }
}

@media (max-width: 812px) {
  .card, .banner {
    padding-left: 48px !important;
    padding-right: 48px !important;
  }
  .xlos-help-center {
    width: 812px;
  }

  .banner .title, .banner .des {
    width: calc((100% - 96px) / 2) !important;
  }
}
</style>
