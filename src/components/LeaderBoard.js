import { useSelector } from 'react-redux'
import UserStats from './UserStats'
import { getUsersRanked, getUsersArray } from '../utils/helpers'

const LeaderBoard = () => {
    const users = useSelector((state) => state.users)
    const userIdsRanked = getUsersRanked(getUsersArray(users)).map(x => x.id)

    return (
        <div className='leaderboard-container'>
            <ol>
                {userIdsRanked.map((id) => (
                    <li key={id}>
                        <UserStats key={id} id={id} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default LeaderBoard