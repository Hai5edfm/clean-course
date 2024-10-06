import { PostService } from './dependency-inversion-b';
import { JsonDataBaseService, LocalDataBaseService, WebAPIService } from './dependency-inversion-c';

// Main
(async () => {
    const jsonDB = new WebAPIService();
    const postService = new PostService(jsonDB);
    const posts = await postService.getPosts();

    console.log({ posts })
})();