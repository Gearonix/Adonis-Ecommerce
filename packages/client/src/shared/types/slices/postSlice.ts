import {User} from 'shared/types/slices'

export interface PostsSlice{
    data: Post[],
    page: number,
    count : number
}

export interface Post{
    message: string,
    userId: number,
    image : string,
    likes: number,
    date: string,
    postId: number,
    user: User
}
