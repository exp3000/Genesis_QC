import Api from '@/services/api'

export default {
    //make index (name whatever you want) call to /songs endpoint
    index(bookmark) {
        return Api().get('bookmarks', {
            params: bookmark 
        })
    },

    post(bookmark) {
        console.log('post: ', bookmark)

        return Api().post('bookmarks',  bookmark  )
    },

    delete(bookmarkId) {
        return Api().delete(`bookmarks/${bookmarkId}`
        )
    }

}
