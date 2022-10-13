import React from 'react'
import {GridComponent,ColumnsDirective,
  ColumnDirective,Page,Filter,Sort,Group,
  Reorder,Resize,Edit,Toolbar,Inject,
  ContextMenu,ExcelExport,PdfExport,} from '@syncfusion/ej2-react-grids'
import { ordersData,contextMenuItem,ordersGrid } from '../data/dummy'
import {Header} from '../components'
const Orders = () => {
  return (
    <div className='m-2 md:-10 p-2 md:p-10 bg-white rounded-3xl'><Header title ="Orders" category = "Page"/>
    <GridComponent id='gridcomp'
    dataSource={ordersData}
    allowPaging
    allowSorting>
      <ColumnsDirective>
      {ordersGrid.map((item,index)=>(
        <ColumnDirective
        key={index}
        {...item}
        />
      ))}
      </ColumnsDirective> 
      <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit, PdfExport]}/>
    </GridComponent>
    </div>
  )
}

export default Orders