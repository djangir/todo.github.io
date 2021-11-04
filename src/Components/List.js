import './List.css';
import { useState } from 'react';

function List(props) {

    let status = props.status;
    const [state, setstate] = useState(status);

    return (
        <>
            { (state === 'a') ? (
                <>
                    <div className="card my-2 m-auto bg-danger text-white" style={ { width: "18rem" } }>
                        <div className="card-body">
                            <h5 className='card-title'> { props.title } </h5>
                            <p className="card-text">{ props.about }</p>
                            <span onClick={ () => (setstate('b')) }> Status B </span> |
                            <span onClick={ () => (setstate('c')) }> Status C </span>
                        </div>
                    </div>
                </>
            ) :
                (state === 'b') ? (
                    <>
                        <div className="card my-2 m-auto bg-warning" style={ { width: "18rem" } }>
                            <div className="card-body">
                                <h5 className='card-title'> { props.title } </h5>
                                <p className="card-text">{ props.about }</p>
                                <span onClick={ () => (setstate('a')) }> Status A </span> |
                                <span onClick={ () => (setstate('c')) }> Status C </span>
                            </div>
                        </div>
                    </>
                ) :
                    <>
                        <div className="card my-2 m-auto bg-success text-white" style={ { width: "18rem" } }>
                            <div className="card-body">
                                <h5 className='card-title'> { props.title } </h5>
                                <p className="card-text">{ props.about }</p>
                                <span onClick={ () => (setstate('a')) }> Status A </span> |
                                <span onClick={ () => (setstate('b')) }> Status B </span>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}
export default List;