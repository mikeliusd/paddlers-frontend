import React from 'react';
import { Col, Row } from "antd";
import { Steps } from 'antd';
import '../../style/Start.css';
const { Step } = Steps;
class Start extends React.Component {
    render() {
        return (<div className="start-steps">
            <Row align="middle" justify="center" xs={2} sm={4} md={6} lg={8} xl={10}>
                <Col span={16}>
                    <h1 className="function-title2">
                    基于百度飞桨的遥感图像
                    </h1>
                    <h1 className="function-title3">
                    智能解译平台
                    </h1>
                    <h2 className="function-title4"> 第十一届中国软件杯大赛--A组赛题</h2>
                </Col>
            </Row>

        </div>);
    }

}
export default Start;