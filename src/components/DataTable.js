import React, { useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainContext } from '../context';

export default function SingleColumnDemo() {
    const { expenses } = useContext(MainContext);
    return (
        <div className="w-ful bg-black h-full">
             <div className='h-full flex w-full rounded items-center justify-center '>
            <DataTable value={expenses} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="amount" header="Amount" sortable style={{ width: '25%' }}></Column>
                <Column field="date" header="Date" sortable style={{ width: '25%' }}></Column>
            </DataTable>
            </div>
        </div>
    );
}
