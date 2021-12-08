import React from "react";
import "./barchart.css"
import { BarChart, Bar , Legend , XAxis, YAxis , ResponsiveContainer , CartesianGrid , Cell} from 'recharts';

const Barchart = () => {
    const data = [
        {name: 'Hitachi', profiles: 550},
        {name: 'DMX', profiles: 900},
        {name: 'VMAX', profiles: 500},
      ];
        
        
      return (
        <div className = "barchart-container">
          <div style = {{display : "flex" , justifyContent : "space-between" , marginTop : "5px" , marginBottom : "5px"}}>
            <h1 style = {{marginLeft : "15px" , marginRight : "15px" , color : "#EEEEEE" , fontWeight : "bold" , fontStyle : "normal"}}>Top Configuration Profiles</h1>
            <img style = {{height : "4px" , width : "18px" , alignSelf : "center"}} src = "https://res.cloudinary.com/dqeg0ttxn/image/upload/v1638874572/Vector_aa0hso.png" alt = "dot"/>
          </div>
        <ResponsiveContainer width={230} height={190}>
          <BarChart data={data}>
            <CartesianGrid stroke = "black"/>
          <Bar dataKey="profiles" barSize = {20} strokeOpacity = "1">
          <Cell name="Hitachi" fill="#82B5FE"/>
          <Cell name="DMX" fill="#D1A0F8"/>
          <Cell name="VMAX" fill="#FDAF51" />

            </Bar>
          <XAxis type = "category" dataKey="name" stroke = "black" strokeWidth = "1"/>
          <YAxis type = "number" dataKey="profiles" stroke = "black" strokeWidth = "1"/>
          <Legend
          wrapperStyle={{
            display : "none",
          }}
          />
          </BarChart>
        </ResponsiveContainer>
        </div>
      );
      
}

export default Barchart