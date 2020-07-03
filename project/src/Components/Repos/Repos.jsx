import React from 'react'
import RepoItem from './comp/RepoItem/RepoItem'

const Repos = ({repos}) => (
    <div className='list-area'>       
            { repos.map(repo => (
                <RepoItem repo={repo}/>
            ))}        
    </div>
)

export default Repos