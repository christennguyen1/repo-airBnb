import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DOMAIN, TOKEN_CYBERSOFT } from '../../configUrl/configURL';
import CommentDetail from './CommentDetail';
import { Button, Modal } from 'antd';
import httpServ from '../../serviceWorker/http.service';

export default function DanhGiaPhong() {

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const[dataComment,setDataComment]=useState([]);

    let { id } = useParams();

    useEffect(() => {
        httpServ
        .layDanhGiaPhong(id)
          .then((res) => {
            console.log("res", res);
            setDataComment(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      console.log("danhsachphong",dataComment);

      const renderRoom = (danhSachPhong) => {
        return danhSachPhong.map((item, index) => {
          if(index<6){
             return <CommentDetail data={item} key={index} />
          }
        })
    }

    const renderPhong=(dsPhong)=>{
      return dsPhong.map((item,index)=>{
        if(item.content!=null){
        return <CommentDetail data={item} key={index} />
        }
      })
    }

  return (
    <div className="m-10">
      <div className="flex flex-wrap">
       {renderRoom(dataComment)}
       </div>
       <>
      <Button className="border rounded-lg pl-5 pr-5 justify-center" onClick={showModal}>
       <span className="font-bold text-black">Show All</span>
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {renderPhong(dataComment)}
      </Modal>
    </>
    </div>
  )
}
