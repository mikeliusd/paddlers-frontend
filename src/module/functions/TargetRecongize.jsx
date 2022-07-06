import { Col, Row,Button } from "antd";
import React from "react";
import '../../style/TargetExtraction.css';
class TargetRecongize extends React.Component {
    componentDidMount()
    {
        document.getElementById("inputFile").addEventListener("change",()=>{
            var fr=new FileReader();
            
            fr.onload=function(e){
                document.getElementById("uploadPic").src=e.target.result
            }
            fr.readAsDataURL(document.getElementById("inputFile").files[0])
            
        })
        document.getElementById("upload").addEventListener("click",()=>{
            let FD=new FormData()
            if(document.getElementById("inputFile").files.length==0)return;
            FD.append("image1",document.getElementById("inputFile").files[0])
            fetch("/backend/process?type=targetRecongize",{method:"POST",body:FD}).then((r)=>{
                r.text().then((value)=>{
                    console.log(value)

                    fetch("/backend/getimage?type=targetRecongize&id="+value,{method:"GET"}).then((r)=>{
                    r.text().then((val)=>{
                    document.getElementById("resultPic").src="data:image/jpg;base64,"+val;})
                })})
                
            })
            
        })
    }
    render() {
        return (<>
            <Row align="middle" justify="start" xs={2} sm={4} md={6} lg={8} xl={10}>
                <Col span={6} offset = {1}>
                    <h1 className="title">
                        TargetRecongize
                    </h1>
                </Col>
                <Col>
                    <h1 className="title2">
                        目标检测
                    </h1>
                    <h2 className="title2">
                        使用目标检测技术对卫星图像中指定图像中指定对象完成检测
                    </h2>
                </Col>
            </Row>
            <hr></hr>

            <Row align="middle" justify="center" xs={2} sm={4} md={6} lg={8} xl={10}>
                <Col span={8}>
                        <input type="file" name="input1" id="inputFile" accept="image/png, image/jpeg"></input>
                        <Button id="upload">提交</Button>
                </Col>
                <Col span={8}></Col>
            </Row>

            <Row align="middle" justify="center" xs={2} sm={4} md={6} lg={8} xl={10}>
                <Col span={8}>
                    <img id="uploadPic" src="" alt="上传图片"></img>
                </Col>
                <Col span={8}>
                    <img id="resultPic" src="1.jpg" alt="运行结果"></img>
                </Col>
            </Row>
        </>);
    }
}
export default TargetRecongize;