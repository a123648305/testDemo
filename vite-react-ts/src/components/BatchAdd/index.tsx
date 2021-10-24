/* eslint-disable no-multi-assign */
/*
 * @Description:新增联系人（包括批量添加）
 * @Author: wangshuzhao
 * @Date: 2019-08-28 15:05:39
 * @LastEditors: wujian
 * @LastEditTime: 2021-10-24 13:47:18
 */
import React, { Fragment } from 'react'
import { Button, Modal, Spin, message, Upload, Result } from 'antd'
import { CustomizedSelect, Option } from 'components/Select'
import CustomTagSelect from '../customTagSelect'
import './index.less'
const { Dragger } = Upload
const originState = {
  visible: false,
  steps: 2,
  file: null,
  tags: [],
  newTags: [],
  fileTest: true,
  fileResult: null,
  dragenter: false,
  uploading: false,
}

const data = [
  { id: 1, name: '0000' },
  { id: 2, name: '1000' },
  { id: 3, name: '2000' },
  { id: 4, name: '0000' },
  { id: 5, name: '1000' },
  { id: 6, name: '2000' },
  { id: 7, name: '0000' },
  { id: 8, name: '1000' },
  { id: 9, name: '2000' },
  { id: 10, name: '0000' },
  { id: 12, name: '1000' },
  { id: 13, name: '2000' },
]

export default class AddContact extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { ...Object.assign({}, originState) }
  }

  componentDidMount() {}
  show = () => {
    if (this.state.visible) {
      this.setState({
        ...Object.assign({}, originState),
      })
    } else {
      this.setState({
        visible: true,
      })
    }
  }

  readFile = (file: any) => {
    if (file.name.slice(file.name.lastIndexOf('.') + 1) !== 'xlsx') {
      message.warning('只支持 xlsx 格式,请重新上传')
      this.setState({ fileTest: false })
    } else {
      this.setState({ file: file, fileTest: true }, (e) => {
        // this.upLoadFile();
      })
    }
  }

  onFormChange = (key, val) => {
    this.setState({ form: { ...this.state.form, [key]: val } })
  }

  downLoadFile = () => {
    const anchor = document.createElement('a')
    anchor.style.display = 'none'
    anchor.href =
      'https://yunting-1251101074.coscd.myqcloud.com/联系人模板.xlsx'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  /**
   *@description 上传文件 ，由于fetch无法获取上传进度，所以用ajax
   */
  upload = () => {
    this.setState(
      {
        uploading: true,
      },
      () => {
        const xhr = (this.xhr = new XMLHttpRequest())
        xhr.open(
          'POST',
          `${
            process.env.NODE_ENV === 'development' ? '/proxy' : '/api'
          }/contact/import`
        )
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            this.setState({ steps: this.state.steps + 1 })
            if (xhr.status === 200) {
              const result = JSON.parse(xhr.responseText)
              if (result.code === 20000) {
                this.props.onBatchAdd &&
                  this.props.onBatchAdd(result.result.successfulList)
                this.setState({ fileResult: result.result, uploading: false })
              } else {
                this.setState({ fileResult: null, uploading: false })
                message.error(result.msg)
              }
            } else {
              this.setState({ fileResult: null, uploading: false })
              message.error('上传出错，请检查文件格式或联系管理员')
            }
          }
        }
        // 获取上传进度
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.floor((event.loaded / event.total) * 100)
            this.setState({ percent })
          }
        }

        xhr.onabort = (e) => {
          message.error('上传已中断')
        }

        const fd = new FormData()
        fd.append('file', this.state.file)
        fd.append('tags', JSON.stringify(this.state.tags))
        fd.append('newTags', JSON.stringify(this.state.newTags))
        fd.append(
          'uploadType',
          this.props.uploadType ? this.props.uploadType : 'ALL'
        )
        xhr.send(fd)
      }
    )
  }

  step1 = () => {
    setTimeout(() => this.wrap.appendChild(this.drag), 10)
    // 模拟进度条
    const { steps, dragenter, fileTest, file } = this.state
    const props = {
      name: 'file',
      multiple: true,
      action: '',
      accept: '.xls, .xlsx,', //只接受xlsx格式
      beforeUpload: (file) => {
        console.log(file, 'filebeac')
        this.readFile(file)
      },
      onChange(info) {
        const { status } = info.file
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files)
      },
      customRequest: () => {}, // 手动上传 不用默认上传
    }

    return (
      <Dragger {...props} className="upload_wrap">
        {/* 文件选择输入框 END */}
        {!file && (
          <Fragment>
            <div className="upload">
              <div className="add">
                <i className="icon-cem_upload-files" />
              </div>
              <b>
                <span>点击</span>
                或将EXCEL文件拖拽到这里上传
              </b>
              <p
                className="download_template"
                onClick={(e) => this.downLoadFile()}
              >
                下载标准模板
              </p>
              <div
                className="accept"
                style={{ color: fileTest ? '' : '#D96969' }}
              >
                （只支持xlsx格式，每次只能上传2000条，若超过2000条，请分批上传）
              </div>
            </div>
          </Fragment>
        )}
        {file && (
          <p className="file_name">
            {/* <img src={require('@/images/nps/excel.png')} /> */}
            <div>{file.name}</div>
            <span>重新上传</span>
          </p>
        )}
      </Dragger>
    )
  }

  step2 = () => {
    const { tags, newTags } = this.state
    return (
      <div className="step2_wrap">
        <h3>你可以给导入的「所有客户」打上标签</h3>
        <div>
          {/* <CustomizedSelect
            className="muti_select"
            tags
            tokenSeparators={[' ', ',']}
            onChange={(value) =>
              this.setState({
                tags: value.filter((item) => item.trim().length > 0),
              })
            }
            value={tags}
            optionLabelProp="label"
            optionFilterProp="label"
            placeholder="请选择或者输入标签后按回车"
          >
            {(this.props.tagList || []).map((e, i) => (
              <Option key={i} value={e.name} label={e.name}>
                {e.name}
              </Option>
            ))}
          </CustomizedSelect> */}
          <CustomTagSelect
            options={data}
            defaultVal={[]}
            placeholder="请选择或者输入标签后按回车"
            style={{ width: 400 }}
            onChange={() => {}}
          />
        </div>
        <h3>仅给导入的「新客户」打上标签</h3>
        <div>
          <CustomTagSelect
            options={data}
            defaultVal={[]}
            placeholder="请选择或者输入标签后按回车"
            style={{ width: 400 }}
            onChange={() => {}}
          />
        </div>
        <p>注：你可以跳过此步</p>
      </div>
    )
  }

  // 得到结果图
  step3 = (fileResult: any) => {
    // const {
    //   onlyPhoneNumberCount, // 仅手机
    //   onlyEmailCount, // 仅邮箱
    //   successfulCount, // 成功
    //   failedCount, // 无效（导入不成功）
    //   bothSuccessfulCount, // 手机号+邮箱
    // } = fileResult
    const successfulCount = 10
    const failedCount = 2
    return (
      <div className="result_wrapper">
        <Result
          status="success"
          title={
            <p className="result_text">
              成功导入{successfulCount}个有效客户，导入失败{failedCount}个客户
            </p>
          }
          subTitle={<p className="result_faile_text">查看失败日志</p>}
        />
        <p className="result_tip_text">
          系统已将这些客户保存到客户列表当中，方便你下次查找
        </p>
      </div>
    )
  }

  pre = () => {
    this.setState({ steps: this.state.steps - 1 })
  }

  next = () => {
    this.setState({ steps: this.state.steps + 1 })
  }

  _handleOnCancel = () => {
    this.setState({
      ...Object.assign({}, originState),
    })
  }

  rendStepsContext = (steps: number) => {
    console.log(steps, 'ss')
    switch (steps) {
      case 1:
        return this.step1()
      case 2:
        return this.step2()
      case 3:
        return this.step3(1)
      default:
        return null
    }
  }

  renderFooter = () => {
    const { steps, file, uploading } = this.state
    console.log(steps, 'footer')
    if (steps === 3) {
      return null
    }
    return (
      <>
        {steps < 3 && (
          <Button onClick={steps === 1 ? this._handleOnCancel : this.pre}>
            {steps === 1 ? '取消' : '上一步'}
          </Button>
        )}
        <Button
          type="primary"
          disabled={!file || uploading}
          onClick={steps === 2 ? this.upload : this.next}
        >
          {steps === 2 ? '确定上传' : '下一步'}
        </Button>
      </>
    )
  }

  render() {
    const { steps, visible, uploading } = this.state
    return (
      <div className="np_add_contact_batch_add">
        <Modal
          className="batch_add_dialog"
          title="批量上传"
          visible={true}
          onCancel={this._handleOnCancel}
          width={960}
          footer={this.renderFooter()}
        >
          <Spin spinning={uploading}>
            <div className="steps_warper">
              <div className={steps === 1 ? 'setps_item sel' : 'setps_item'}>
                <div className="steps_item_circle">
                  <span>1</span>
                  <p>选择表格</p>
                </div>
              </div>
              <div className={steps === 2 ? 'setps_item sel' : 'setps_item'}>
                <div className="steps_item_circle">
                  <span>2</span>
                  <p>打上标签</p>
                </div>
              </div>
              <div className={steps === 3 ? 'setps_item sel' : 'setps_item'}>
                <div className="steps_item_circle">
                  <span>3</span>
                  <p>导入结果</p>
                </div>
              </div>
            </div>
            {this.rendStepsContext(steps)}
          </Spin>
        </Modal>
      </div>
    )
  }
}
