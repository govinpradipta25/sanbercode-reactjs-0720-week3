import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DaftarHargaBuah =()=>{
    const[dataHargaBuah,setDataHargaBuah] = useState(null)
    const[inputNama,setInputNama]=useState("")
    const[inputHarga,setInputHarga]=useState("")
    const[inputBerat,setInputBerat]=useState("")
    const[selectedId,setSelectedId]=useState(0)
    const[statusForm, setStatusForm]=useState("create")

    useEffect( () => {
        if(dataHargaBuah===null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
            setDataHargaBuah(res.data.map(el=>{return {id: el.id, nama: el.name, harga:el.price, berat:el.weight}}))
            })
        }
    },[dataHargaBuah])

    const handleEdit=(event)=>{
        let idBuah= parseInt(event.target.value);
        let buah = dataHargaBuah.find(x=>x.id===idBuah)
        console.log(idBuah)
        setInputNama(buah.nama)
        setInputHarga(buah.harga)
        setInputBerat(buah.berat)
        setSelectedId(idBuah)
        setStatusForm("edit")
    }

    const handleDelete=(event)=>{
        let idBuah= parseInt(event.target.value);
        let newDataBuah = dataHargaBuah.filter(el=>el.id!==idBuah)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            console.log(res)
        })
        setDataHargaBuah([...newDataBuah])
    }
    const handleChange1=(event)=>{
        setInputNama(event.target.value);
    }
    const handleChange2=(event)=>{
        setInputHarga(event.target.value);
    }
    const handleChange3=(event)=>{
        setInputBerat(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(inputNama.replace(/\s/g,'')!==""&&inputHarga!==""&&inputBerat!==""){
            let daftarBuah=dataHargaBuah
            if(statusForm==="create"){
                axios.post(`http://backendexample.sanbercloud.com/api/fruits`,{inputNama, inputHarga, inputBerat})
                .then(res => {
                    setDataHargaBuah([...daftarBuah,{id:res.data.id, nama: inputNama, harga: inputHarga, berat: inputBerat}])
                })
            }
            else if(statusForm==="edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {inputNama,inputHarga,inputBerat})
                .then(res => {
                    let dataBuah = dataHargaBuah.find(el=> el.id === selectedId)
                    dataBuah.nama = inputNama
                    dataBuah.harga = inputHarga
                    dataBuah.berat = inputBerat
                    setDataHargaBuah([...dataHargaBuah])
                })
            }
            setStatusForm("create")
            setSelectedId(0)
            setInputNama("")
            setInputHarga("")
            setInputBerat("")
        }
    }

    return(
        <div className="containertugas14">
            
            <h1>Tabel Harga Buah</h1>
            <table className="tabelbuahtugas14">
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Edit</th>
                </tr>
        {
            dataHargaBuah!==null && dataHargaBuah.map((item,index)=>{
                return(
                    <tr>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                        <td>{item.berat/1000+' kg'}</td>
                        <td>
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
        </table>
        {/* Form */}
            <h1>Form Data Buah</h1>
        <div id="form-contenttugas14">
        <form onSubmit={handleSubmit}>
            <label>Masukkan nama buah : </label>          
            <input type="text" value={inputNama} onChange={handleChange1} placeholder="masukkan nama buah"/><br></br><br></br>
            <label>Masukkan harga buah : </label>          
            <input type="text" value={inputHarga} onChange={handleChange2} placeholder="masukkan harga buah"/><br></br><br></br>
            <label>Masukkan nama berat : </label>          
            <input type="text" value={inputBerat} onChange={handleChange3} placeholder="msukkan berat buah/gram"/><br></br><br></br>
            <button>submit</button>
        </form>
        </div>
        </div>
    )
}
export default DaftarHargaBuah;