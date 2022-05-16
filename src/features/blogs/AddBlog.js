import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addBlog } from "./blogSlice"

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    content: '',
    date: ''
  });

  const handleAddBlog = () => {
    setValues({ title: '', content: '', date: '' });
    dispatch(addBlog({
      id: uuidv4(),
      title: values.title,
      content: values.content,
      date: values.date
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Blog Title' }}
      />
      <br />
      <TextField
        label="Content"
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Blog Content' }}
      />
      <br />
      <TextField
        label="Date"
        value={values.date}
        onChange={(e) => setValues({ ...values, date: e.target.value })}
        inputProps={{ type: 'date', placeholder: 'Blog Date' }}
      />
      <Button onClick={handleAddBlog}>Submit</Button>
    </div>
  )
}

export default AddBlog