<template>
  <div class="xlos-help-center">
    <div class="center-header">
      <img src="./assets/logo.png" width="215" height="32"/>
    </div>
    <div class="center-content">
      <div class="banner">
        <div class="title">欢迎使用雪浪OS帮助中心</div>
        <div class="des">在这里，我们为你提供帮助与支持</div>
      </div>
      <div class="card">
        <div class="card-item" v-for="item in menus" :key="item.key">
          <div :class="`card-description ${item.key}`">
            <div class="info">
              <div>{{ item.label }}</div>
              <div>{{ item.description }}</div>
              <a :href="item.url" target="_blank">查看全部</a>
            </div>
          </div>
          <div class="card-list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"
const menus = reactive([ {
  key: 'predict', label: "系统工程", description: "混合建模与联合计算", url: "http://docs.xuelangyun.com"
}, {
  key: 'hufu', label: "数据建模", description: "松耦合组件化数据中台", url: "http://10.88.40.5/help.html",
}, {
  key: 'gonggong', label: "应用搭建", description: "工业低代码开发平台", url: "https://xuelangyun.feishu.cn/wiki/wikcnbNgvMqZu3293jWecPekO9e",
}, {
  key: 'algo', label: "算法开发", description: "图形化构建机器学习模型", url: "https://docs.xuelangyun.com/docs/category/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E9%A2%91%E9%81%93%E5%AE%9E%E8%B7%B5/",
},{
  key: 'gopt', label: "GOpt", description: "进化多目标优化算法平台", url: "https://appa5e5neyp8107.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/image_text/i_62c3a12ee4b050af2397db45"
}]);
</script>

<style lang="less">
body, html, #app, .xlos-help-center {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
#app {
  .xlos-help-center {
    display: flex;
    flex-direction: column;

    .center {
      &-header {
        width: 100%;
        height: 32px;
        padding: 16px 24px;
        border-bottom: 1px solid #EAECEF;
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
          .title, .des {
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
                background: linear-gradient(90deg, #30A9FF 0%, rgba(127,191,255,0.10) 100%);
              }
            }
            &.hufu {
              background-image: url('./assets/hufu-bg.png');
              &::before {
                background: linear-gradient(90deg, #3098FF 0%, rgba(127,180,255,0.10) 100%);
              }
            }
            &.gonggong {
              background-image: url('./assets/gonggong-bg.png');
              &::before {
                background: linear-gradient(90deg, #3086FF 0%, rgba(134,174,255,0.10) 100%);
              }
            }
            &.algo {
              background-image: url('./assets/algo-bg.png');
              &::before {
                background: linear-gradient(90deg, #5A83FF 0%, rgba(159,175,255,0.10) 100%);
              }
            }
            &.gopt {
              background-image: url('./assets/gopt-bg.png');
              &::before {
                background: linear-gradient(90deg, #7E7EFF 0%, rgba(173,166,255,0.10) 100%);
              }
            }
          }

          &-list {
            flex: 2 3;
          }
        }
      }
    }
  }
}
</style>
