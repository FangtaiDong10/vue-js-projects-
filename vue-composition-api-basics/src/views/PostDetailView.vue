<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }} Page</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
      <button @click="goFirstPostPage">Go to first Post</button>
    </div>
    <p><router-link to="/posts">&lt; Back &copy;</router-link></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();

const showPostId = () => {
  // console.log('showPostId ');
  alert(`The ID of this post is: ${route.params.id}`);
};

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    // router.push("/");
    router.push({ name: 'home' });
  }, 3000);
};

const goFirstPostPage = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
};
</script>
