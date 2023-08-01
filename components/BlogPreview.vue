<script setup lang="ts">
import {BlogPreviewModel} from "~/model/BlogPreviewModel";
import formatDate from "~/shared/formatDate";

const props = defineProps<{
  blogItem: BlogPreviewModel
}>()

const formattedDate = formatDate(props.blogItem?.createdAt) ?? ""
</script>

<template>
  <article v-if="blogItem">
    <header class="entry-header">
      <h1 class="entry-title"><a :href="'blog/' + blogItem.id" rel="bookmark">{{blogItem?.title}}</a></h1>
      <div class="entry-meta">
        <span class="posted-on"><time class="entry-date published">{{formattedDate}}</time></span>
        <span class="comments-link"><a href="#">Leave a comment</a></span>
      </div>
      <div class="entry-thumbnail">
        <img :src="blogItem?.image" alt="">
      </div>
    </header>
    <div class="entry-summary">
      <p>
        {{blogItem?.preview}}
      </p>
    </div>
    <footer class="entry-footer">
					<span class="cat-links">
					Posted in <a href="#" rel="category tag">audio</a>, <a href="#" rel="category tag">embed</a>, <a href="#"
                                                                                                           rel="category tag">media</a>
					</span>
    </footer>
  </article>
</template>

<style>
</style>