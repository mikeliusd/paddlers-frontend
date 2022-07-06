import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChangeRecongize from './module/functions/ChangeRecongize';
import ItemsClassification from './module/functions/ItemsClassification';
import Start from './module/functions/Start';
import TargetExtraction from './module/functions/TargetExtraction';
import TargetRecongize from './module/functions/TargetRecongize';
import HeaderBar from './module/HeaderBar';
const { Header, Content } = Layout;
const LINKS = {
  'home': '/',
  'item-1': '/TargetExtraction',
  'item-2': '/ChangeRecongize',
  'item-3': '/TargetRecongize',
  'item-4': '/ItemsClassification'
};
function App() {
  return (
    <div className='App'>
      <Layout>
        <Header className='header'>
          <HeaderBar functions={[
            { label: '主页', key: 'home' },
            { label: '目标提取', key: 'item-1' },
            { label: '变化检测', key: 'item-2' },
            { label: '目标检测', key: 'item-3' },
            { label: '地物分类', key: 'item-4' },
          ]} onClick={({ key }) => {
            window.location.hash = LINKS[key];
          }}></HeaderBar>
        </Header>

      </Layout>
      <Layout className='main-container'>
        
        <Content>
          <div className='container'>
            <HashRouter>
              <Routes>
                <Route path='/' element={<Start />}> </Route>
                <Route path='/TargetRecongize' element={<TargetRecongize />}></Route>
                <Route path='/ChangeRecongize' element={<ChangeRecongize />}></Route>
                <Route path='/ItemsClassification' element={<ItemsClassification />}></Route>
                <Route path='/TargetExtraction' element={<TargetExtraction />}></Route>
                <Route path='*' element={<h1>404 Not Found</h1>}></Route>
              </Routes>
            </HashRouter>
            
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
