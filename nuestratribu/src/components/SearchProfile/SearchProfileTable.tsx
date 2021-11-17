import React from "react";
import useMobile from "../../hooks/useMobile";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import GenericUser from "../../classes/GenericUser";

const TAG = "TABLE";
type SearchProfileTable = {
  usersList: GenericUser[];
};
const SearchProfileTable: React.FC<SearchProfileTable> = ({ usersList }) => {
  console.log(TAG, "render");
  const rows = usersList.map((user) => ({
    id: user.idCard,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
    secondSurname: user.secondSurname,
    gender: user.gender,
    age: user.age,
    phoneNumber: user.phoneNumber,
    email: user.email,
    address: user.address,
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "Cédula", width: 170 },
    { field: "firstName", headerName: "Primer nombre", width: 170 },
    { field: "middleName", headerName: "Segundo nombre", width: 170 },
    { field: "lastName", headerName: "Primer Apellido", width: 170 },
    { field: "secondSurname", headerName: "Segundo Apellido", width: 170 },
    //{ field: "gender", headerName: "Género", width: 90 },
    //{ field: "age", headerName: "Edad", type: "number", width: 70 },
    { field: "phoneNumber", headerName: "Teléfono", width: 170 },
    //{ field: "email", headerName: "E-mail", width: 100 },
    //{ field: "address", headerName: "Dirección", width: 100 },
  ];

  // const rows = [
  //   {
  //     id: 1091234567,
  //     firstName: "Andrés",
  //     middleName: "Felipe",
  //     lastName: "Murillo",
  //     secondSurname: "Rincón",
  //     gender: "M",
  //     age: 24,
  //     phoneNumber: "3104169093",
  //     email: "afmurillor@gmail.com",
  //     address: "Carrea 1 # 2 - 3",
  //   },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  const isMobile = useMobile();

  return (
    <React.Fragment>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </React.Fragment>
  );
};
export default SearchProfileTable;
