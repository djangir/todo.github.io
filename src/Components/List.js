import './List.css';
import { useState } from 'react';

function List(props) {

    const [bgColor, setBgColor] = useState('bg-danger card my-3 m-auto text-white');

    function newBgColor(clr) {
        setBgColor(clr + " card my-3 m-auto");
    }

    return (
        <>
            <div className={ bgColor } style={ { width: "19rem" } }>
                <div className="card-body">
                    <div className='text-end mb-3'>
                        <button className='close' onClick={ () => setBgColor('d-none') }>X</button>
                    </div>
                    <h5 className='card-title text-center'> { props.title } </h5>
                    <p className="card-text">{ props.about }</p>

                    <span className='bg-danger' onClick={ () => newBgColor('bg-danger text-white ') }></span>

                    <span className='bg-warning mx-2' onClick={ () => newBgColor('bg-warning') }></span>

                    <span className='bg-success' onClick={ () => newBgColor('bg-success text-white ') }></span>

                </div >
            </div >
        </>
    );
}
export default List;