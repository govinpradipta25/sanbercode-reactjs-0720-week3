import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const BuahTugas15Context  = createContext();
export const BuahProvider  = props => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null);

    useEffect(() => {
      if (dataHargaBuah === null) {
        axios
          .get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then((res) => {
            setDataHargaBuah(
              res.data.map((el) => {
                return {
                  id: el.id,
                  nama: el.name,
                  harga: el.price,
                  berat: el.weight,
                };
              })
            );
          });
      }
    }, [dataHargaBuah]);


    return (
      <>
        <BuahTugas15Context.Provider value={[dataHargaBuah, setDataHargaBuah]}>
      {props.children}
    </BuahTugas15Context.Provider>
      </>
    );
};