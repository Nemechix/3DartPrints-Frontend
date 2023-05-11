import { Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow, makeStyles, Card, CardActions, CardContent, CardHeader, Divider, Link, IconButton, TextField } from '@mui/material';
import { useState } from "react";
import getAllUsers from '../../Services/GetAllUser';
import getAllCategories from '../../Services/getAllCategories';
import getAllPrinters from '../../Services/getAllPrinters'
import Button3D from '../../Components/Button/Button'
import './AdminTools.css'

function AdminTools() {
  const [users, setUsers] = useState([]);
  const [categorys, setCategory] = useState([]);
  const [printers, setPrinters] = useState([]);

  const [showUsers, setshowUsers] = useState(false); // ver solo clic  boton
  const [showCategory, setshowCategory] = useState(false);
  const [showPrinters, setshowPrinters] = useState(false);
  
  const handleClickUser = async () => {
    const response = await getAllUsers();
    setUsers(response);
    setshowUsers(true); // actualizar estado
    setshowCategory(false);
    setshowPrinters(false);
  };

  const handleClickCategory = async () => {
    const response = await getAllCategories();
    setCategory(response);
    setshowUsers(false); // actualizar estado
    setshowCategory(true);
    setshowPrinters(false);
  };

    const handleClickPrinter = async () => {
    const response = await getAllPrinters();
    setPrinters(response);
    setshowUsers(false); // actualizar estado
    setshowCategory(false);
    setshowPrinters(true);
  };


  return (
    <div className="admin-wrapper">
      <div className="admin-panel" style={{ position: "top", top: 10 }}>
      <Card
        className="card"
        sx={{
          width: "500px",
          padding: "15px",
          backgroundColor: "#f0f0f0",
          border: "2px solid #634ff4",
          margin: "10px 10px 30px 0px",
        }}
        raised={true}
      >
        <CardHeader title="Panel Admin:"></CardHeader>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Button3D onClick={handleClickUser} className="button" type="submit">
            Usuarios
          </Button3D>
          <Button3D onClick={handleClickCategory} className="button" type="submit">
            Categorias
          </Button3D>
          <Button3D onClick={handleClickPrinter} className="button" type="submit">
            Impresoras
          </Button3D>
        </CardActions>
      </Card>
      <Divider />
</div>

      <Card>
        {/* mostrar tabla solo con clic botón */}
        {showUsers && (
          <TableContainer component={Paper}>
            <CardHeader title="Listado de Usuarios:"></CardHeader>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Type User</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Card>
            <Card>
        {/* mostrar tabla solo con clic botón */}
        {showCategory && (
          <TableContainer component={Paper}>
            <CardHeader title="Listado de Categorias:"></CardHeader>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorys.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell component="th" scope="row">
                      {category.id}
                    </TableCell>
                    <TableCell align="right">{category.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Card>
            <Card>
        {/* mostrar tabla solo con clic botón */}
        {showPrinters && (
          <TableContainer component={Paper}>
            <CardHeader title="Listado de Impresoras:"></CardHeader>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Brand</TableCell>
                  <TableCell align="right">Model</TableCell>
                  <TableCell align="right">Resolution</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {printers.map((printer) => (
                  <TableRow key={printer.id}>
                    <TableCell component="th" scope="row">
                      {printer.id}
                    </TableCell>
                    <TableCell align="right">{printer.brand}</TableCell>
                    <TableCell align="right">{printer.model}</TableCell>
                    <TableCell align="right">{printer.resolution}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Card>
    </div>
  );
}


export default AdminTools
