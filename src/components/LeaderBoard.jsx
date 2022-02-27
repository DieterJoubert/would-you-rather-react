import { useSelector } from 'react-redux'
import UserStats from './UserStats'
import { getUsersRanked, getUsersArray } from '../utils/helpers'

const LeaderBoard = () => {
    const users = useSelector((state) => state.users)
    const userIdsRanked = getUsersRanked(getUsersArray(users)).map(x => x.id)

    return (
        <div>
            LEADERBOARD
            {userIdsRanked.map((id) => (
                <UserStats key={id} id={id} />
            ))}
        </div>
    )
}

export default LeaderBoard