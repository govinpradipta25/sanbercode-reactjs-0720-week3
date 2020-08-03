import React, { Component } from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class Table extends Component {
    render() {
        return (
        	
            <table className="Apptable">
            <tr className="judul2">
            	<th> <b>Tabel Harga Buah</b> </th>
            </tr>
			 <table className="judul">            	
                <thead className="thead">
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {dataHargaBuah.map(item => {
                        return (
                            <tr>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td> {`${item.berat/1000} kg`}</td>
                            </tr>
                        );
                    })}
                </tbody>
               </table>
            </table>
        );
    }
}


export default Table;