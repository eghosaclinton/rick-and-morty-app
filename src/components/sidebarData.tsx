import { FaLocationArrow } from 'react-icons/fa'
import {GrStatusInfo} from 'react-icons/gr'
import {MdTripOrigin} from 'react-icons/md'
import { MdCreate } from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'

type Categories = {
    keyCategory: string,
    name: string,
    icon: React.ReactNode
}

export const categories: Categories[] = [
    {keyCategory:'origin.name', name:'Earth', icon:(<FaLocationArrow/>)},
    {keyCategory:'status', name:'Alive',icon:(<GrStatusInfo/>)},
    {keyCategory:'gender', name:'Male',icon:(<MdTripOrigin/>)},
    {keyCategory:'sex', name:'Female',icon:(<MdCreate/>)},
    {keyCategory:'species', name:'Human',icon:(<CgProfile/>)}
]