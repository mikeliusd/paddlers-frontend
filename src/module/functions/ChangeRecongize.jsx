import { Col, Row ,Button} from "antd";
import React from "react";
import '../../style/ChangeRecongize.css';
class ChangeRecongize extends React.Component {
    componentDidMount()
    {
        document.getElementById("inputFile").addEventListener("change",()=>{
            var fr=new FileReader();
            
            fr.onload=function(e){
                document.getElementById("uploadPic").src=e.target.result
            }
            fr.readAsDataURL(document.getElementById("inputFile").files[0])
            
        })
        document.getElementById("inputFile2").addEventListener("change",()=>{
            var fr=new FileReader();
            
            fr.onload=function(e){
                document.getElementById("uploadPic2").src=e.target.result
            }
            fr.readAsDataURL(document.getElementById("inputFile2").files[0])
            
        })
        document.getElementById("upload").addEventListener("click",()=>{
            let FD=new FormData()
            if(document.getElementById("inputFile").files.length==0)return;
            FD.append("image1",document.getElementById("inputFile").files[0])
            FD.append("image2",document.getElementById("inputFile2").files[0])
            fetch("/backend/process?type=diffRecongize",{method:"POST",body:FD}).then((r)=>{
                r.text().then((value)=>{
                    console.log(value)

                    fetch("/backend/getimage?id="+value,{method:"GET"}).then((r)=>{
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
                        ChangeRecongize
                    </h1>
                </Col>
                <Col>
                    <h1 className="title2">
                        ????????????
                    </h1>
                    <h2 className="title2">
                        ???????????????????????????????????????????????????????????????????????????????????????
                    </h2>
                </Col>
            </Row>
            <hr></hr>

            <Row align="middle" justify="center" xs={2} sm={4} md={6} lg={8} xl={10}>
                <Col span={8}>
                        <input type="file" name="input1" id="inputFile" accept="image/png, image/jpeg"></input>
                        <input type="file" name="input2" id="inputFile2" accept="image/png, image/jpeg"></input>
                        <Button id="upload">??????</Button>
                </Col>
                <Col span={8}></Col>
            </Row>

            <Row align="middle" justify="center" xs={2} sm={4} md={6} lg={8} xl={10}>
                <Col span={8}>
                    <img id="uploadPic" src="" alt="????????????"></img>
                    <img id="uploadPic2" src="" alt="????????????2"></img>
                </Col>
                <Col span={8}>
                    <img id="resultPic" src="" alt="????????????"></img>
                </Col>
            </Row>
        </>);
    }
}
export default ChangeRecongize;