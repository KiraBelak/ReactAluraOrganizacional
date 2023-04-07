import './miorg.css';

const MiOrg=(props)=>{
    return(
        <section className="orgSect">
            <h3 className='title'>Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiar} className="add"/>
        </section>
    )
    
}

export default MiOrg;