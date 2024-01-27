import { AppBar } from '@mui/material'
import React from 'react'

const Section1 = () => {
    return (
        <AppBar style={{ marginTop: "67px", width: "100%", height: "92%", backgroundColor: "hsl(0deg 0% 90.2%)", color: "Black" }}>
            <div className="row">
                <div className="col-md-6">
                    <h1 style={{ color: "#415161", fontSize: "3rem", fontWeight: "800", marginLeft: "50%", marginTop: "40%" }}>CUSTOMIZED <br /> PRINTED TEES</h1>
                </div>
                <div className="col-md-6">
                    <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png" alt="" />
                </div>
            </div>
        </AppBar>
    )
}

export default Section1
