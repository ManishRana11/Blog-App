import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editBlog } from "./blogSlice"

const EditBlog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector(store => store.blogs);
  const navigate = useNavigate();
  const existingBlog = blogs.filter(blog => blog.id === params.id);
  const { title, content, date } = existingBlog[0];
  const [values, setValues] = useState({
    title,
    content,
    date
  });

  const handleEditBlog = () => {
    setValues({ title: '', content: '', date: '' });
    dispatch(editBlog({
      id: params.id,
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
      <Button onClick={handleEditBlog}>Edit</Button>
    </div>
  )
}

export default EditBlog