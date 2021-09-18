<template>
  <div>
    <el-container>
      <el-main>
        <el-container>
          <el-header height="64px">
            <el-container>
              <el-aside width="238px">
                <div class="collapseControl" @click="isCollapse = !isCollapse">
                  <svg>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                  </svg>
                </div>
                <div>
                  <img
                    :src="
                      `//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${today.getDate() + 1}_2x.png#`
                    "
                    alt=""
                  />
                  <span class="header-span-calender">日历</span>
                </div>
              </el-aside>
              <el-main class="header-center">
                <el-button size="medium">今天</el-button>
                <span class="iconfont icon-arrow-left-bold"></span>
                <span class="iconfont icon-arrow-right-bold"></span>
                <div>
                  <p class="header_date">
                    {{ today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日" }}
                  </p>
                </div>
              </el-main>
              <el-aside class="header-right">
                <span class="iconfont icon-search"></span>
                <span class="iconfont icon-bangzhu"></span>
                <span class="iconfont icon-setting"></span>
                <el-dropdown>
                  <el-button type="primary">日<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>日</el-dropdown-item>
                    <el-dropdown-item disabled>月</el-dropdown-item>
                    <el-dropdown-item disabled>年</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span class="iconfont icon-modular"></span>
                <span class="iconfont icon-smile"></span>
              </el-aside>
            </el-container>
          </el-header>
          <el-container>
            <el-aside :width="isCollapse ? '0px' : '350px'">
              <el-row>
                <div class="aside-create-action"><span class="iconfont icon-jiahao"></span>创建</div>
              </el-row>
              <div class="calendar-box"><el-calendar> </el-calendar></div>
            </el-aside>
            <el-main>
              <el-table :data="timeData" style="width: 100%" @cell-click="showCreateActionDialog">
                <el-table-column prop="time" label="日期" width="180"> </el-table-column>
                <el-table-column prop="action" label="活动"> </el-table-column>
              </el-table>
            </el-main>
            <el-aside class="right" width="55px">
              <div><span @click="showAsideBar" class="iconfont icon-smile"></span></div>
              <div><span @click="showAsideBar" class="iconfont icon-smile"></span></div>
              <div><span @click="showAsideBar" class="iconfont icon-smile"></span></div>
            </el-aside>
          </el-container>
        </el-container>
      </el-main>
      <el-aside v-if="isAsideBar" class="aside"
        ><el-button @click="isAsideBar = false" type="danger">关闭</el-button></el-aside
      >
    </el-container>
    <el-dialog :title="createActionData.time" :visible.sync="createActionVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动描述" label-width="100px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      isAsideBar: false,
      today: new Date(),
      changeSize: "日",
      createActionVisible: false,
      createActionData: {},
      timeData: [
        { time: "0点", action: "" },
        { time: "1点", action: "" },
        { time: "2点", action: "" },
        { time: "3点", action: "" },
        { time: "4点", action: "" },
        { time: "5点", action: "" },
        { time: "6点", action: "" },
        { time: "7点", action: "" },
        { time: "8点", action: "" },
        { time: "9点", action: "" },
        { time: "10点", action: "" },
        { time: "11点", action: "" },
        { time: "12点", action: "" },
        { time: "13点", action: "" },
        { time: "14点", action: "" },
        { time: "15点", action: "" },
        { time: "16点", action: "" },
        { time: "17点", action: "" },
        { time: "18点", action: "" },
        { time: "19点", action: "" },
        { time: "20点", action: "" },
        { time: "21点", action: "" },
        { time: "22点", action: "" },
        { time: "23点", action: "" },
      ],
      form: {},
    }
  },
  methods: {
    showAsideBar() {
      this.isAsideBar = !this.isAsideBar
    },
    showCreateActionDialog(e) {
      this.createActionData = e
      this.createActionVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
  padding: 8px;
  border-bottom: #dadce0 1px solid;
}
.el-header .el-aside {
  display: flex;
  align-items: center;
}
.collapseControl {
  margin: 0px 4px;
  padding: 12px;
  width: 48px;
  height: 47px;
  border-radius: 50%;
}
.collapseControl:hover {
  background-color: #f0f0f0;
}
svg {
  height: 100%;
  width: 100%;
}
img {
  width: 44px;
  height: 40px;
  padding-right: 4px;
}
.header-span-calender {
  display: inline-block;
  display: relative;
  top: -1.5px;
  vertical-align: middle;
  padding-left: 4px;
  font: 13px/27px Roboto, RobotoDraft, Arial, sans-serif;
  font-size: 22px;
}
.iconfont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 16px;
}
.el-header .header_date {
  font-size: 22px;
}

.header-center {
  display: flex;
  align-items: center;
  padding: 0;
  min-width: 300px;
}
.header-right {
  display: flex;
  align-items: center;
}
.header-right span {
  margin: 0px 5px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.header-right span:hover {
  background-color: #f0f0f0;
}
.right {
  border-left: #dadce0 1px solid;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;

    span {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
    }
    span:hover {
      background-color: #f0f0f0;
    }
  }
}
.aside-create-action {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 20px;
  width: 118px;
  height: 48px;
  border: 1px solid #f0f0f0;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 3px rgba(64, 60, 67, 0.2);
  }
  span:first-child {
    font-size: 30px;
    margin-right: 10px;
  }
}
.aside {
  border-left: 1px solid #f0f0f0;
  box-shadow: -2px 0px 3px rgba(64, 60, 67, 0.2);
}
.el-main {
  padding: 0;
}
</style>
