<template>
  <NuxtPage v-if="route.params.id" />
  <div id="page" v-else>
    <div class="container">
      <header id="masthead" class="site-header">
        <div class="site-branding">
          <h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
          <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
        </div>
        <nav id="site-navigation" class="main-navigation">
          <button class="menu-toggle">Menu</button>
          <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
          <div class="menu-menu-1-container">
            <ul id="menu-menu-1" class="menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li><a href="#">Pages</a>
                <ul class="sub-menu">
                  <li><a href="portfolio-item.html">Portfolio Item</a></li>
                  <li><a href="blog-single.html">Blog Article</a></li>
                  <li><a href="shop-single.html">Shop Item</a></li>
                  <li><a href="portfolio-category.html">Portfolio Category</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- #masthead -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area column two-thirds">
          <main id="main" class="site-main" role="main">
            <BlogPreview v-for="blog in filteredPages" :blog-item="blog" :key="blog.id"/>
            <div class="clearfix">
            </div>
            <nav class="pagination"></nav>
          </main>
          <!-- #main -->
        </div>
        <!-- #primary -->

        <div id="secondary" class="column third">
          <div id="sidebar-1" class="widget-area" role="complementary">

            <aside id="text-5" class="widget widget_text">
              <h4 class="widget-title">About Me</h4>
              <div class="textwidget">
                <p>
                  <img src="http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png"
                       class="alignleft" style="width:80px;border-radius:50%;margin-bottom:0;"> I'm a professional
                  photographer for 10 years. It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.
                </p>
              </div>
            </aside>

            <aside id="recent-posts-2" class="widget widget_recent_entries">
              <h4 class="widget-title">Recent Posts</h4>
              <ul>
                <li>
                  <a href="blog-single.html">Somewhere in time</a>
                </li>
                <li>
                  <a href="blog-single.html">Thanks for watching!</a>
                </li>
                <li>
                  <a href="blog-single.html/">Who could have thought?</a>
                </li>
                <li>
                  <a href="blog-single.html">Text Alignement</a>
                </li>
                <li>
                  <a href="blog-single.html">HTML Tags and Formatting</a>
                </li>
              </ul>
            </aside>

            <aside id="text-6" class="widget widget_text">
              <h4 class="widget-title">Like us on Facebook</h4>
              <div class="textwidget">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwowthemesnet-562560840468823%2F&amp;tabs=timeline&amp;width=340&amp;height=380&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId=365036103630036"
                    width="340" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                    allowtransparency="true">
                </iframe>
              </div>
            </aside>

            <aside id="recent-comments-2" class="widget widget_recent_comments">
              <h4 class="widget-title">Recent Comments</h4>
              <ul id="recentcomments">
                <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                <li class="recentcomments"><span><a href="#" rel="external nofollow" class="url">Mr WordPress</a></span>
                  on <a href="blog-single.html">Thanks for watching!</a></li>
                <li class="recentcomments"><span>Maria</span> on <a href="blog-single.html">Gray Blouse</a></li>
                <li class="recentcomments"><span>Maria</span> on <a href="blog-single.html">Retro Dress</a></li>
              </ul>
            </aside>

          </div>
          <!-- .widget-area -->
        </div>
        <!-- #secondary -->
      </div>
      <!-- #content -->
      <nav class="pagination">
        <a class="page-numbers" :href="'?page='+pageNumber" v-for="pageNumber in totalPages">{{pageNumber}}</a>
      </nav>
      <br/>
    </div>
    <!-- .container -->
    <footer id="colophon" class="site-footer">
      <div class="container">
        <div class="site-info">
          <h1 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">
            Moschino</h1>
          <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
        </div>
      </div>
    </footer>
    <a href="#top" class="smoothup" title="Back to top"><span class="genericon genericon-collapse"></span></a>
  </div>
</template>

<script lang="ts" setup>

import {BlogPreviewModel} from "~/model/BlogPreviewModel";

const PREVIEWS_PER_PAGE = 4

const route = useRoute()
const currentPage = route.query.page ?? 1

const startPostIndex = Number(currentPage) * PREVIEWS_PER_PAGE
const endPostIndex = startPostIndex + PREVIEWS_PER_PAGE

const allBlogs = ref<BlogPreviewModel[]>([])
const totalPages = computed(() => Math.ceil(allBlogs.value.length / PREVIEWS_PER_PAGE))
const filteredPages = computed(() => allBlogs.value.slice(startPostIndex, endPostIndex + 1))

onMounted(() => {
  fetch("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/")
      .then((res) => res.json())
      .then(jsonData => {
        allBlogs.value = jsonData.reverse()
      })
})
</script>

<style>
</style>