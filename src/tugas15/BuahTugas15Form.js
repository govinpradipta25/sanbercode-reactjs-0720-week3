import React, { useState, useContext } from "react";
import axios from "axios";
import {BuahTugas15Context} from "./BuahTugas15Context"

const BuahTugas15Form = () => {
  const [dataHargaBuah, setDataHargaBuah] = useContext(BuahTugas15Context);
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputWeight, setInputWeight] = useState("");
  const [selectedID, setSelectedID] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);
    let newDataHargaBuah = dataHargaBuah.filter((el) => el.id !== idBuah);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
    setDataHargaBuah([...newDataHargaBuah]);
    alert("Data Berhasil Dihapus")
  };

  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value);
    let buah = dataHargaBuah.find((el) => el.id === idBuah);
    console.log(buah);
    setInputName(buah.nama);
    setInputPrice(buah.harga);
    setInputWeight(buah.berat);
    setSelectedID(idBuah);
    setStatusForm("edit");
  };

  const handleChangeName = (event) => {
    const newValue = event.target.value;
    setInputName(newValue);
  };
  const handleChangePrice = (event) => {
    const newValue = event.target.value;
    setInputPrice(newValue);
  };
  const handleChangeWeight = (event) => {
    const newValue = event.target.value;
    setInputWeight(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let name = inputName;
    let price = inputPrice;
    let weight = inputWeight;

    if ( name.replace(/\s/g, "") === "" || price.toString().replace(/\s/g, "") === "" || weight.toString().replace(/\s/g, "") === ""){
        alert("Input tidak boleh ada yang Kosong");
    } else{
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/fruits`, {
            name,
            price,
            weight,
          })
          .then((res) => {
            setDataHargaBuah([
              ...dataHargaBuah,
              { id: res.data.id, nama: name, harga: price, berat: weight },
            ]);
            alert("Data Berhasil Ditambahkan")
          });
      } else if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/fruits/${selectedID}`,
            {
              name,
              price,
              weight,
            }
          )
          .then((res) => {
            let dataBuah = dataHargaBuah.find((el) => el.id === selectedID);
            dataBuah.nama = name;
            dataBuah.harga = price;
            dataBuah.berat = weight;
            setDataHargaBuah([...dataHargaBuah]);
            alert("Data Berhasil Diubah")
          });
      }

      setStatusForm("create");
      setSelectedID(0);
      setInputName("");
      setInputPrice("");
      setInputWeight("");
    }
  };

  return (
    <>
      <div style={{width: "50%", margin:"auto"}}>
                    <h1 style={{textAlign:"center"}}>Tabel Harga Buah</h1>
                    <table style={{width:"100%"}}>
          <thead>
            <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                dataHargaBuah !== null &&
                dataHargaBuah.map((val,index)=>{
                  return(                    
                    <tr key={index}>
                    <td>{val.nama}</td>
                    <td>Rp {val.harga}</td>
                      <td>{val.berat/1000} kg</td>
                      <td><button onClick={handleEdit} value={val.id} style={{borderRadius:5, marginRight :"5%",marginLeft :"5%",border:"1px white solid",padding:5}}>edit</button>
                      <button onClick={handleDelete} value={val.id} style={{padding:5,border:"1px white",backgroundColor:"red", color:"white", borderRadius:5, marginRight :"5%",marginLeft :"5%"}}>delete</button></td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <div style={{border:"2px black solid", marginTop: 20}}>
        <h1 style={{textAlign:"center",}}>Form Penambahan Buah</h1>
        <form style={{textAlign:"center"}} onSubmit={handleSubmit}>
          <label>
            Masukkan Nama Buah:
          </label>          
          <input type="text" name='inputName' value={inputName} onChange={handleChangeName}/>
          <br/>
          <label>
            Masukkan Harga Buah:
          </label>          
          <input type="number" name='inputPrice' placeholder="dalam rupiah" value={inputPrice} onChange={handleChangePrice}/>
          <br/>
          <label>
            Masukkan Berat Buah:
          </label>          
          <input type="number" name='inputWeight' placeholder="dalam gram" value={inputWeight} onChange={handleChangeWeight}/>
          <br/><br/>
          <button style={{backgroundColor:"green",borderRadius:5,padding:10 ,border:"1px white solid"}}>submit</button>
        </form>
        </div>
        </div>
    </>
  );
};

export default BuahTugas15Form;