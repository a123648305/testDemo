/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-10-23 11:04:19
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-23 11:56:10
 */
import React, { useEffect, useState } from 'react'
import { Button, Layout, Rate } from 'antd'
import './index.less'

type PorpsType = {}
const { Sider, Content } = Layout
const CustomDetail: React.FC<PorpsType> = () => {
  return (
    <Layout className="customer_detail">
      <Sider className="customer_detail_left" width="400">
        <div className="customer_header">
          <Button className="reback_btn">返回</Button>
          <div className="customer_headImg">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F09%2F20210709210621_bcea1.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637551060&t=ecba3b03b8b5052a12b78007be0f69e5"
              alt="客户头像"
            />
          </div>
          <Button icon={<i className="iconfont icon-liebiao"></i>}>
            发放问卷
          </Button>
        </div>
        <div className="customer_container">
          <h2>基础信息</h2>
          <ul className="customer_info">
            <li>
              <span className="customer_info_label">姓名</span>
              <span className="customer_info_text">周洲舟</span>
            </li>
            <li>
              <span className="customer_info_label">姓名</span>
              <span className="customer_info_text">周洲舟</span>
            </li>
            <li>
              <span className="customer_info_label">标签</span>
              <span className="customer_info_text">
                <span className="customer_info_text_tag">标签1</span>
              </span>
            </li>
            {new Array(20).fill(0).map((item, index) => (
              <li>
                <span className="customer_info_label">备注</span>
                <span className="customer_info_text">
                  备注
                  <i className="iconfont icon-liebiao"></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Sider>
      <Content className="customer_detail_container">
        <section className="customer_dynamic">
          <div className="customer_dynamic_title">客户动态</div>
          <ul className="customer_dynamic_timeLine">
            {new Array(20).fill(1).map((item, index) => (
              <li>
                <p className="customer_dynamic_timeLine_time">06/21 12:00</p>
                <div className="timeLine_info">
                  <div className="timeLine_info_text">
                    <i className="iconfont icon-liebiao"></i>
                    <span>八爪鱼每日登录用户NPS</span>
                  </div>
                  <div className="timeLine_info_remake">NPS分数：10分</div>
                  <div className="timeLine_info_remake">
                    评分
                    <Rate
                      disabled
                      defaultValue={2}
                      className="timeLine_info_remake_star"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Content>
    </Layout>
  )
}

export default CustomDetail
