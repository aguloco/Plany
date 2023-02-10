import { Col, ColGrid, Flex, Card, Block, Metric, BadgeDelta, ProgressBar, } from "@tremor/react";
import React from "react";

import TotalUsuarios from '../assets/TotalUsuarios'

const CardGridMap = () => {
    return (
        <ColGrid numColsLg={6} numColsMd={2} numColsSm={1} marginTop="mt-6" gapX="gap-x-6" gapY="gap-y-6" >
            { /* KPI sidebar */ }
            <Col numColSpanLg={ 2 }>
                <Block spaceY="space-y-6">
                    
                    <TotalUsuarios />
                </Block>
            </Col>
            { /* Main section */ }
            <Col numColSpanLg={ 4 } >
                
     
            </Col>
            

        </ColGrid>
        
    )
}

export default CardGridMap