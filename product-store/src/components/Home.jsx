import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsData, deleteRows } from '../store/index'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import ProductModal from './Product';

export default function Home() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [openModal, setOpenModal] = useState(false)
    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    const column = [
        { field: 'id', editable: true, headerName: 'Id', width: 50 },
        { field: 'title', editable: true, headerName: 'Title', width: 150 },
        { field: 'description', editable: true, headerName: 'Discription', width: 200 },
        { field: 'brand', editable: true, headerName: 'Brand', width: 100 },
        { field: 'rating', editable: true, headerName: 'Rating', width: 80 },
        { field: 'category', editable: true, headerName: 'Category', width: 120 },
        { field: 'stock', editable: true, headerName: 'Available Stock', width: 100 },
        { field: 'price', editable: true, headerName: 'Price', width: 80 },
        {
            field: "actions", headerName: "Actions",
            renderCell: (params) => (
                <button
                    onClick={() => {
                        setSelectedRows(params.row);
                        setOpenModal(true);
                    }}> View
                </button>
            )
        }
    ]

    useEffect(() => {
        dispatch(getProductsData())
    }, [])

    return <>
        {openModal && <ProductModal open={openModal} item={selectedRows} setOpen={setOpenModal} />}
        <h1>Our products </h1>
        <div style={{ height: 400 }}>
            <DataGrid
                editMode='row'
                columns={column}
                rows={products}
                showToolbar
                checkboxSelection
                disableRowSelectionOnClick
                onRowSelectionModelChange={(newSelection) => {
                    setSelectedRows(Array.from(newSelection.ids))
                }}
            />
        </div>
        <button onClick={() => {
            dispatch(deleteRows(selectedRows));
        }}
            disabled={selectedRows.length === 0}>
            Delete Selected
        </button>
    </>
}