import React from 'react'
import './Profile.css'
import PropTypes from 'prop-types';

function Profile(props) {
    const   styleBtn={backgroundColor:'#1982c4',
                    color:'#f1faee',
                    fontSize:'20px',
                    fontWeight:'bold',
                    width: '200px' ,
                    height: '50px',
                    marginTop:'10px',
                    boxShadow: '0px 5px 10px 0px #457b9d',
                    border:'none'
                    },
            styleinfo={
                    color:'#0077b6'
                    }
                    
    return (
        <div className='containerProfil'>
            <div className='info'>
            <h3 style={styleinfo}>{props.user.fullName}</h3>
            <p>{props.user.bio}</p>                     
            <h5 style={styleinfo}>{props.user.profession}</h5>
        </div>
            <div className='content'>
            {props.children}
            <button style={styleBtn} onClick={()=>props.handleName(props.user)}>Click</button>
            </div>
        </div>
    )
}

Profile.defaultProps={
                        user:{fullName:'Unknown',
                        bio:' Unknown',
                        profession:'Unknown'
                    }
}

Profile.prototype={
                    user:PropTypes.object,
                    handleName:PropTypes.func,
                    }

export default Profile