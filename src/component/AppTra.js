import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
import { useLocation,useParams,useNavigate } from 'react-router-dom';

export default function AppTra(props) {

    // const location = useLocation();
    // const sval = location.state?.svalue;
    // console.log("location: ",location)
    console.log(props.location.state.svalue);

    // const [sval1, setSval1] = useState();

    // useEffect(() => {
    //     const location = useLocation();
    //     const sval = location.state?.svalue;

    //     setSval1(location.state?.svalue);
    // })

  return (
    <div>
      <p>App Tra</p>
      <p>Props3: {props.location.state.svalue}</p>
      {/* <p>Props1: {props.sval}</p> */}
    
    </div>
  )
}
