import React from 'react'
import FormForPost from './post_components/FormForPost'
import PostElement from './post_components/PostElement'
import { useAuth } from '../contexts/auth'
export default function Newsfeed() {
    const { tokens} = useAuth();
    return (
        <div>
            <FormForPost
            tokens={tokens}
            />
            <PostElement
            tokens={tokens}
            />
        </div>
    )
}