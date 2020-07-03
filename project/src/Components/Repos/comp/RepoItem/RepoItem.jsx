import React from 'react'

const RepoItem = ({repo}) =>(

    <a href={repo.html_url} className='repos-area' target='_blank'>
        <span>{repo.name}</span>
        <span>Stars: {repo.stargazers_count}</span>
        <span>Forks: {repo.forks}</span>
        <span>Issues: {repo.open_issues}</span>
    </a>
)

export default RepoItem