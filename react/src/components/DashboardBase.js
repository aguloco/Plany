// import React from "react"
import { ColGrid,Card, Tab, TabList, Text, Title, Block, Link} from "@tremor/react";
import React, { useState } from "react";
import CardGridMap from "./CardGridMap";
import UsersList from '../assets/UsersList'


const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)
    return (
        <main className='bg-slate-200 p-6 sm-:p-15'>
            <Title>Plany</Title>
            <Text> <strong>Usuarios</strong></Text>
            
            <TabList defaultValue={selectedView} handleSelect={ value => selectedView(value)} marginTop= "mt-6">
                <Tab value={selectedView} text="Dashboard"/>
                
            </TabList>
        
    <CardGridMap />

    <Block marginTop="mt-6">
        <UsersList/>
    </Block> 

    <Block marginTop="mt-6">
        
    </Block> 
    
    <Block marginTop="mt-6">
       
    </Block>

        


           


        
        
        </main>
    )
} 
export default DashboardBase