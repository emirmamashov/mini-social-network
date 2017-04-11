const apiUrl = 'https://jsonplaceholder.typicode.com';
export const pageCountPost = 20;
export const Api_config = {
    url: apiUrl,
    posts: {
        getPosts: {
            method: 'GET',
            url: apiUrl + '/posts'
        },
        createPost: {
            method: 'POST',
            url: apiUrl + '/posts'
        },
        deletePost: {
            method: 'DELETE',
            url: apiUrl + '/posts'
        }
    },
    users: {
        getUserById: {
            method: 'GET',
            url: apiUrl + '/users/'//id
        }
    },
    albums: {
        getMyAlbums: {
            method: 'GET',
            url: apiUrl + '/users'//:/1/albums
        },
        getAlbumPhotos: {
            method: 'GET',
            url: apiUrl + '/albums'//:/1/photos
        },
        delete: {
            method: 'GET',
            url: apiUrl + '/albums'//:/1
        }
    }
}