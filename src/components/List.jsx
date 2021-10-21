import React, { useContext } from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { AuthContext } from './AuthContext'

const List = ({ data, err }) => {
    const { authenticated } = useContext(AuthContext);

    if(!authenticated) return <Redirect to='/login' />
  
    return ( 
        <div>
            { data.length > 0 && <p className='list-result'><span>{data.length}</span> patents have been found</p> }
            { data.length > 0 && 

                data.map((item, index) => 
                <div key={index} className='list'>
                    <h5>{ item['patent title'] }</h5>

                    <a target="_blank" href={`https://patents.google.com/patent/${item['patent no']}`} rel="noreferrer" >
                        {item['patent no']}
                    </a>

                    <p>{ item['chemical type 1'] }</p>
                </div>
            )}

            { data.length === 0 && !err && <p className='intro'>Search Chemical Patents Around the Internet</p> }

            { data.length === 0 && err && <p className='list-err'>{ err }</p> }
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
      data: state.database,
      err: state.error
    }
}

export default connect(mapStateToProps)(List);

