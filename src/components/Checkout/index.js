import clsx from "clsx";
import { useEffect, useReducer } from "react";
import { useStore } from "../store"

import CheckoutHeading from '../CheckoutHeading'
import Info from "../Info";
import InputBlock from "../InputBlock"
import InfoFooter from "../InfoFooter"
import InfoHeader from "../InfoHeader"

import { setName, setPhone, setEmail, setAddress, setForm } from "../store/actions";

import styles from "./Checkout.module.css"

import { useContext } from "react"
import { Context } from "../store"

import reducer, { initState } from "../store/reducer"

function Checkout (){
    
    const [state, dispatch] = useStore()

    const { phone, email, name, address } = state
    
    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then (users => {
                dispatch(setForm(users[0]))
            })
    }, [])

    return (
        <div className={clsx(styles.checkout)}>
            <CheckoutHeading content="Lirve Cafe" />
            <Info>
                <InfoHeader content="Thông tin giao hàng" />
                <InputBlock type="text" label="Họ tên" content="name" value={name} action= {setName} rules={['require']} />
                <InputBlock type="text" label="Phone" content="phone" value={phone} action= {setPhone} rules={['require', 'phone']} />
                <InputBlock type="text" label="Địa chỉ" content="address" value={address} action= {setAddress} rules={['require']} />
                <InputBlock type="text" label="Email" content="email" value={email} action= {setEmail} rules={['require', 'email']} />
                <InfoFooter 
                    linkData={{
                        link: "https://www.google.com.vn/",
                        label: "Giỏ hàng",
                    }} 
                    textBtn="Thanh toán"
                />
            </Info>
        </div>
    )
}

export default Checkout







