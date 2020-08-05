import React, { Component } from 'react';

class Row extends React.Component {
    render() {
        return <td>{this.props.x}</td>;
    }
}

class Header extends React.Component {
    render() {
        return <th>{this.props.y}</th>
    }
}

class Table2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }],
            input: {
                nama: "",
                harga: "",
                berat: ""
            },
            indexOfForm: -1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        let input = { ...this.state.input }
        input[event.target.name] = event.target.value
        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault()

        let input = this.state.input
        if (input['nama'].replace(/\s/g, '') !== "" && input['harga'].toString().replace(/\s/g, '') !== "" && input['berat'].toString().replace(/\s/g, '') !== "") {
            let newDaftarBuah = this.state.dataHargaBuah
            let index = this.state.indexOfForm
            console.log(index)
            if (index === -1) {
                newDaftarBuah = [...newDaftarBuah, input]
            } else {
                newDaftarBuah[index] = input
            }
            this.setState({
                dataHargaBuah: newDaftarBuah,
                input: {
                    nama: "",
                    harga: "",
                    berat: ""
                },
                indexOfForm: -1
            })
        }
    }

    handleEdit(event) {
        let index = event.target.value
        let buah = this.state.dataHargaBuah[index]
        this.setState({
            input: {
                nama: buah.nama,
                harga: buah.harga,
                berat: buah.berat
            },
            indexOfForm: index
        })
    }

    handleDelete(event) {
        let index = event.target.value
        let newDaftarBuah = this.state.dataHargaBuah
        let editedDaftarBuah = newDaftarBuah[this.state.indexOfForm]
        newDaftarBuah.splice(index, 1)

        if (editedDaftarBuah !== undefined) {
            var newIndex = newDaftarBuah.findIndex((el) => el === editedDaftarBuah)
            this.setState({ dataHargaBuah: newDaftarBuah, indexOfForm: newIndex })
        } else {
            this.setState({ dataHargaBuah: newDaftarBuah })
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="judulbuah">Table Harga Buah</h1>
                    <table className="tabelbuah">
                        <tr>
                            <Header y={'No'} />
                            <Header y={'Nama'} />
                            <Header y={'Harga'} />
                            <Header y={'Berat'} />
                            <Header y={'Aksi'} />
                        </tr>
                        {this.state.dataHargaBuah.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <Row x={index + 1} />
                                    <Row x={el.nama} />
                                    <Row x={el.harga} />
                                    <Row x={el.berat / 1000 + ' kg'} />
                                    <td style={{ textAlign: 'center' }}>
                                        <button onClick={this.handleEdit} value={index}>Edit</button>
                  &nbsp;
                  <button onClick={this.handleDelete} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                    <h1 className="form13">Form Buah</h1>
                    <div id="form-content">
                        <form onSubmit={this.handleSubmit} className="formTable2">
                            <label> Nama : </label>
                            <input type="text" name='nama' value={this.state.input.nama} onChange={this.handleChange} placeholder="masukkan nama buah" /><br /><br />
                            <label>Harga: </label>
                            <input type="text" name='harga' value={this.state.input.harga} onChange={this.handleChange} placeholder="masukkan harga buah" /><br /><br />
                            <label>Berat : </label>
                            <input type="text" name='berat' value={this.state.input.berat} onChange={this.handleChange} placeholder="msukkan berat buah/gram" /><br /><br />
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Table2