import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginActiongetdata } from '../../Redux/actions/login_actions/loagin_actions';
import { ContextUseContextProvider } from '../../contextapi/Contextapi';

function Homepage() {


    const thala = ContextUseContextProvider();

  

    const dispatch = useDispatch();

    const state = useSelector((state) => state?.users);




    const datas={
        name:"kalainazriya"
    }


    console.log(thala,"thala")


    useEffect(() => {

        let isCancelled=true;

        if(isCancelled)
        {
            dispatch(LoginActiongetdata());
            thala.FirstSection()
        }

        return ()=>{
            isCancelled=false;
        }
      
    }, [thala?.loading])
    return (
        <div>
            Homeage {datas["name"]}

            {/* {state?.loading ? <>Loading...</> : <>{
                state?.loginuser?.username
            }</>} */}

          

        </div>
    )
}

export default Homepage