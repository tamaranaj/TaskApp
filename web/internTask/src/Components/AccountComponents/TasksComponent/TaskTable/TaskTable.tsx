import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Task } from '../../../Types/task.interface';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import './TaskTable.css'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'

function createData(
  {id,title,createdAt,description,dueDate, status}: Task
) {
return {
  id,
  title,
  status,
  createdAt,
  description,
  dueDate
};
}


function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const[open,setOpen]=useState(false)
  const navigate = useNavigate()
  const handleNavigateEditTask = (id:string)=>{
    navigate(`task/${id}`)
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className='table' >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell component="th" scope="row">{row.status}</TableCell>
        <TableCell component="th" scope="row">{dayjs(row.createdAt).format('MMM D, YYYY h:mm A')}</TableCell>
        
      </TableRow>
      <TableRow  sx={{width:'100%'}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit >
            <Box sx={{ margin: 1 ,display:'flex', justifyContent:'space-between',flexDirection:'column'}}>
              <Typography variant="h6" gutterBottom component="div">
            Details
              </Typography>
              <Table size="medium" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Due date</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{backgroundColor:'white'}}>
                <TableRow key={row.id}>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.dueDate}</TableCell>
                      <TableCell ><EditIcon fontSize='small' sx={{cursor:'pointer', color:'#1565C0'}} onClick={()=>handleNavigateEditTask(row.id)} /></TableCell>
                </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
type CollapsibleTableProps = {
  tasks?: Task[]; 
};

export default function CollapsibleTable({ tasks = [] }: CollapsibleTableProps) {
  const rows = tasks.map(task => createData(task));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className='tableHead'>
          <TableRow >
            <TableCell />
            <TableCell sx={{fontSize:'1em'}}>Task title</TableCell>
            <TableCell sx={{fontSize:'1em'}} >Status</TableCell>
            <TableCell sx={{fontSize:'1em'}}>Date created</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <Row key={row.id} row={row} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                There is not tasks yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}