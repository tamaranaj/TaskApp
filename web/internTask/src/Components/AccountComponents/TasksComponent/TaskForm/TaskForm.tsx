import { useForm, Controller } from 'react-hook-form';
import './TaskForm.css';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { createNewTask } from '../../../utils/newTask';

interface NewTaskData {
  title: string;
  description: string;
  dueDate: Dayjs;
}
interface TaskFormProps{
  handleNewTaskAdded: (value: boolean) => void
}
export const TaskForm = ({handleNewTaskAdded}: TaskFormProps) => {
  const { projectId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, control, reset } = useForm<NewTaskData>();
  const now = dayjs();
  const roundedNow = now.add(15 - (now.minute() % 15), 'minute').startOf('minute');

  const submit = (data: NewTaskData) => {
    const jsDate = data.dueDate.toDate();
    console.log(jsDate.toString());
    console.log(data);
    const creation = {
      projectID: projectId,
      dueDate: jsDate.toString(),
      title: data.title,
      description: data.description,
    };
   if(projectId){

    createNewTask(creation).then((res)=>{
      if(res.statusCode >= 400){
        handleNewTaskAdded(false)
        return
      }else{
        reset({
          title: '',
          description: '',
          dueDate: roundedNow,
        });
        handleNewTaskAdded(true)
        setSubmitted(true);
      }
    })



   }
   
  };

  return (
    <div className="newTaskContainer">
         {!submitted ? (
        <motion.form
          onSubmit={handleSubmit(submit)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="newTaskForm"
        >
          <div className="column">
          <TextField
  id="title"
  label="Title"
  variant="standard"
  {...register('title')}
  sx={{
    backgroundColor: 'transparent',
    borderRadius: '8px',
    color:'white',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '& .MuiInputLabel-root': {
      color: '#1565C0',
      transition: '0.3s',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '2px solid #1565C0',
    },
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid #1565C0',
    },
    '&:hover .MuiInput-underline:before': {
      borderBottom: '2px solid rgb(10, 54, 105)',
    },
    '& .MuiInputBase-root': {
      fontSize: '1rem',
      color: 'white',
    },
  }}
/>

            <TextField
              {...register('description')}
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={6}
              variant="standard"
              sx={{
                backgroundColor: 'transparent',
                borderRadius: '8px',
                fontFamily:'Courier New, Courier, monospace',
                color:'white',
                padding: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '& .MuiInputLabel-root': {
                  color: '#1565C0',
                  transition: '0.3s',
                },
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid #1565C0',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: '2px solid #1565C0',
                },
                '&:hover .MuiInput-underline:before': {
                  borderBottom: '2px solid rgb(10, 54, 105)',
                },
                '& .MuiInputBase-root': {
                  fontSize: '1rem',
                  color: 'white',
                },
              }}
            />
            <div>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </div>
          </div>

          <div className="datePicker">
            <p style={{color:'#1565C0',fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif;',fontSize:'1.1em'}}>Due date</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['StaticDateTimePicker']}>
                <DemoItem >
                  <Controller
                    control={control}
                    name="dueDate"
                    defaultValue={roundedNow}
                    render={({ field }) => (
                      <StaticDateTimePicker
                        sx={{ color: 'black' }}
                        className="picker"
                        value={field.value}
                        onChange={field.onChange}
                        minDateTime={roundedNow}
                        disablePast
                        slotProps={{
                          actionBar: {
                            actions: [],
                          },
                        }}
                      />
                    )}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="success-message"
        ><p>🎉 Task Created Successfully!</p>
          
        </motion.div>
      )}
    </div>
  );
};

