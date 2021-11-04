import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import { useState } from 'react';

function App() {
  let oldData = [
    {
      title: "Inter Notes Here !",
      about: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    },
    {
      title: "Notes Title 2",
      about: "Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."
    }
  ];

  const [title, settitle] = useState('');
  const [about, setabout] = useState('');
  const [data, setdata] = useState(oldData);
  const [alert, setalert] = useState('');

  const [showHide, setShowHide] = useState('d-none');


  function additem() {
    if (title !== '') {
      setdata([...data, { title, about }]);
      settitle('');
      setabout('');
      setalert('Data Added');
      setShowHide('d-none');
    } else {
      let inputTitle = document.getElementById('title');
      setalert('Insert Title');
      inputTitle.focus();
    }
  }

  return (
    <>
      <Header />
      <div className='text-end'>
        <button className='btn btn-outline-success m-2 me-3' onClick={ () => setShowHide('d-block fixed-top fixed-bottom bg-dark text-white m-auto py-4') }> Add Data </button>
      </div>

      <div className={ showHide }>
        <h2 className='text-center'>{ alert }</h2>
        <div className="w-100 p-3 container">

          <input id='title' value={ title } onChange={ (e) => settitle(e.target.value) } type="text" className='form-control' placeholder='Inter Title Here' />

          <textarea value={ about } onChange={ (e) => setabout(e.target.value) } className='form-control my-3' rows="5" placeholder='Inter Text Here'></textarea>

          <div className='row p-3'>
            <button onClick={ () => setShowHide('d-none') } className='w-50 form-control btn-outline-danger my-2' > Cancel </button>

            <button onClick={ additem } className='form-control w-50 btn-outline-success my-2' >Add Item</button>
          </div>

        </div>
      </div>



      <div className="my-3 row w-100">

        {
          data.map((dataa, index) => {
            return (
              <List key={ index } title={ dataa.title } about={ dataa.about } >
              </List>
            );
          })
        }
      </div>
    </>
  );
}

export default App;
