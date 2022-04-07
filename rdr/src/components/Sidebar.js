import React from 'react'

const Sidebar = () => {
  return (
    <aside className='journal_sidebar'>
        <div className='journal_sidebar-navbar'>
            <h3 className='mt-5'>
                <span>Nombre</span>
            </h3>
            <button className='buttons_btn'>
              Salir
            </button>
        </div>
        <div className='journal_new-entry pointer'>
            <i className='far far-calendar-plus fa-5px'></i>
            <p className=''>Nueva Nota</p>
</div>
    </aside>
  )
}

export default Sidebar