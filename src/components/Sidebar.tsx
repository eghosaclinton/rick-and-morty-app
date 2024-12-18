import { useContext } from 'react'
import { categories } from './sidebarData'
import './sidebar.css'
import { Context } from '../context/StateContext'


const Sidebar = () => {
 const { selected, setSelected, setSearch } =  useContext(Context)

  return (
    <div className='sidebtn'>
        <input className='nameSearch' onChange={e => setSearch(e.target.value)}  placeholder='Search name' />
        {categories.map((category) => (
            <button style={{pointerEvents: category.name=='Earth' ? 'none': 'auto'}} key={category.keyCategory} onClick={() => setSelected(category.name)}>
                <span style={{color:'#3A98B9'}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </div>
  )
}

export default Sidebar