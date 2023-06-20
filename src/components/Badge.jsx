import TextField from '@mui/material/TextField';
import { MdClose } from 'react-icons/md'

const Badge = ({ badge, setBadge, badges, setBadges, name, label, title }) => {
    const submitBadge = (e) => {
        e.preventDefault()
        if (badge !== "") {
            const isBadgeAlreadyExists = badges.find(item => item === badge)
            if (!isBadgeAlreadyExists) {
                setBadges(prev => [...prev, badge])
            }
            setBadge("")
        }
    }

    const removeBadge = (badge) => {
        const newBadges = badges.filter(item => item !== badge)
        setBadges(newBadges)
    }
    return (
        <div className='flex flex-col gap-4 flex-grow'>
            <label className='txt-primary'>{title}</label>
            <div className='flex gap-5 font-semibold w-full'>
                <TextField
                    type="text"
                    variant="outlined"
                    label={label}
                    value={badge}
                    size='small'
                    onChange={(e) => setBadge(e.target.value)}
                    className='w-[80%]'
                />
                <button onClick={submitBadge} className='btn-initial px-2 py-1 w-[20%] text-sm rounded-md'>Add</button>
            </div>

            <ul className='flex gap-2 flex-wrap'>
                {
                    badges.map(badge => <li key={badge} className='p-1 rounded-sm flex items-center gap-2 border bgc-initial'>
                        <span className='text-xs font-medirm uppercase'>{badge}</span>
                        <MdClose className='cursor-pointer' onClick={() => removeBadge(badge)} />
                    </li>)
                }
            </ul>
        </div>
    )
}
export default Badge