/*
 * @Description:
 * @Author: huangdeliang
 * @Date: 2020-09-23 11:17:41
 * @LastEditors: linhongzhu
 */
import React from 'react';
import ReactDom from 'react-dom';

import PropTypes from 'prop-types';

import _ from 'lodash';

import './index.less';

class Tooltip extends React.Component {
  componentDidMount() {
    const { events, elmId } = this.props;
    if (!events) {
      return;
    }
    // 点击事件直接挂在node上无效，需要间接绑定到document上
    setTimeout(() => {
      const tooltipElm = document.getElementById(elmId);
      if (tooltipElm) {
        tooltipElm.addEventListener(
          'mouseleave',
          _.debounce(() => {
            tooltipElm.style.display = 'none';
          }, 1000)
        );
      }

      events.forEach((element, idx) => {
        if (element.callback) {
          const elm = document.getElementById(`${elmId}_${idx}`);
          // console.log({ elm, type: 'componentDidMount' });
          if (elm) {
            elm.addEventListener('click', element.callback);
          }
        }
      });
    }, 0);
  }

  componentWillUnmount() {
    const { events, elmId } = this.props;
    if (!events) {
      return;
    }
    setTimeout(() => {
      events.forEach((element, idx) => {
        if (element.callback) {
          const elm = document.getElementById(`${elmId}_${idx}`);
          // console.log({ elm, type: 'componentWillUnmount' });
          if (elm) {
            elm.removeEventListener('click', element.callback);
          }
        }
      });
    }, 0);
  }

  render() {
    const { title, content = [], elmId, events, className } = this.props;
    return (
      <div className={`yt_tooltip_wrapper ${className}`} id={elmId}>
        {title && <div className="title_wrapper" dangerouslySetInnerHTML={{ __html: title }} />}
        <div className="content_wrapper">
          {content.map((con, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: con }} />
          ))}
        </div>
        {events && (
          <div className="footer_wrapper">
            {events.map((e, idx) => {
              return (
                <span id={`${elmId}_${idx}`} className="item" alt={e.title} key={e.title}>
                  <i className={`${e.icon || ''} icon_style`} />
                  <span className="title_style">{e.title}</span>
                </span>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

Tooltip.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      callback: PropTypes.func,
    })
  ),
};

/**
 * 渲染toolTip
 * @param {String|Node} title tooltip的顶部标题
 * @param {String[]|Node[]} content tooltip内容
 * @param {*} events 按钮事件组
 * @param {String} className 新tooltip类名 传'yt_new_tooltip_wrapper'
 */
function renderTooltip(title, content, events, className) {
  //   const tooltipElm = document.getElementById('tooltip');
  if (events && !(events instanceof Array)) {
    console.log('events 需要是[{callback, title, icon}]形式的数组');
    return;
  }
  const tooltipElm = document.createElement('div');
  ReactDom.render(
    <Tooltip
      title={title}
      content={content}
      events={events}
      elmId={new Date().getTime()}
      className={className}
    />,
    tooltipElm
  );
  // console.log(tooltipElm.outerHTML);
  // 提取html给tooltip渲染
  return tooltipElm.outerHTML;
}

function renderJumpTooltip(title, content, events, className) {
  const [cb1, cb2] = Object.values(events);
  const mEvents = [
    {
      title: '消息',
      icon: 'icon-cem_jump-message',
      callback: cb1,
    },
    {
      title: '下钻',
      icon: 'icon-cem_jump-details',
      callback: cb2,
    },
  ];
  return renderTooltip(title, content, mEvents, className);
}

export { renderTooltip, renderJumpTooltip };
