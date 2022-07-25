import { Footer } from 'antd/lib/layout/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NavHeader from '../../components/NavHeader/NavHeader';
import { getRoomAction } from '../../redux/Actions/userActions';
import Banner from '../Banner/Banner';
import FooterNav from '../Footer/Footer';
import LargeCard from '../LargeCard/LargeCard';
import ListRoom from './ListRoom/ListRoom'


export default function TrangChu() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomAction())
  }, []);
  return (
    <div className="bg-gray-50">
      <Banner />
      <div className="max-w-7xl md:mx-auto px-8 sm:px-16 bg-white m-7 md:m-10 rounded-md shadow-md">
      <ListRoom />
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired"
      />
      </div>
      <FooterNav />
    </div>
  )
}
