<script setup lang="ts">
import {BlogPostModel} from "~/model/BlogPostModel";

const data = ref<BlogPostModel>()
const route = useRoute()

onMounted(() => {
  fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`)
      .then((res) => res.json())
      .then(jsonData => {
        data.value = jsonData
      })
})
</script>

<template>
  <div id="page">
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
            <article>
              <header class="entry-header">
                <h1 class="entry-title">{{ data?.title }}</h1>
                <div class="entry-meta">
                  <span class="posted-on"><time class="entry-date published">{{ data?.createdAt }}</time></span>
                  <span class="comments-link"><a href="#">Leave a comment</a></span>
                </div>
                <div class="entry-thumbnail">
                  <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/10/2015/09/30160348/sep4.jpg" alt="">
                </div>
              </header>
              <!-- .entry-header -->
              <div class="entry-content">
                <p>
                  {{data?.description}}
                </p>
              </div>
              <!-- .entry-content -->
              <footer class="entry-footer">
				<span class="cat-links">
				Posted in
				<a href="#" rel="category tag">audio</a>,
				<a href="#" rel="category tag">embed</a>,
				<a href="#" rel="category tag">media</a>
				</span>
              </footer>
              <!-- .entry-footer -->
            </article>
            <!-- #post-## -->
            <nav class="navigation post-navigation" role="navigation">
              <h1 class="screen-reader-text">Post navigation</h1>
              <div class="nav-links">
                <div class="nav-previous">
                  <a href="#" rel="prev"><span class="meta-nav">←</span> Thanks for watching!</a>
                </div>
              </div>
              <!-- .nav-links -->
            </nav>
            <!-- .navigation -->
            <div id="comments" class="comments-area">
              <div id="respond" class="comment-respond">
                <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/demo-moschino/embed-audio/#respond" style="display:none;">Cancel reply</a></small></h3>
                <form action="http://www.themepush.com/demo-moschino/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate="">
                  <p class="comment-notes">
                    <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span>
                  </p>
                  <p class="comment-form-comment">
                    <label for="comment">Comment</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true" required="required"></textarea>
                  </p>
                  <p class="comment-form-author">
                    <label for="author">Name <span class="required">*</span></label><input id="author" name="author" type="text" value="" size="30" aria-required="true" required="required">
                  </p>
                  <p class="comment-form-email">
                    <label for="email">Email <span class="required">*</span></label><input id="email" name="email" type="email" value="" size="30" aria-describedby="email-notes" aria-required="true" required="required">
                  </p>
                  <p class="comment-form-url">
                    <label for="url">Website</label><input id="url" name="url" type="url" value="" size="30">
                  </p>
                  <p class="form-submit">
                    <input name="submit" type="submit" id="submit" class="submit" value="Post Comment"><input type="hidden" name="comment_post_ID" value="90" id="comment_post_ID">
                    <input type="hidden" name="comment_parent" id="comment_parent" value="0">
                  </p>
                  <noscript>
                  </noscript>
                </form>
              </div>
              <!-- #respond -->
            </div>
            <!-- #comments -->
          </main>
          <!-- #main -->
        </div>
        <div id="secondary" class="column third">
          <div id="sidebar-1" class="widget-area" role="complementary">
            <aside id="text-5" class="widget widget_text">
              <h4 class="widget-title">About Me</h4>
              <div class="textwidget">
                <p>
                  <img src="http://www.themepush.com/demo-hypnosa/wp-content/uploads/sites/9/2015/09/avatar5.png" class="alignleft" style="width:80px;border-radius:50%;margin-bottom:0;"> I'm a professional photographer for 10 years. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwowthemesnet-562560840468823%2F&amp;tabs=timeline&amp;width=340&amp;height=380&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId=365036103630036" width="340" height="380" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowtransparency="true">
                </iframe>
              </div>
            </aside>
            <aside id="recent-comments-2" class="widget widget_recent_comments">
              <h4 class="widget-title">Recent Comments</h4>
              <ul id="recentcomments">
                <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                <li class="recentcomments"><span>ThemePush</span> on <a href="blog-single.html">Male T-Shirt</a></li>
                <li class="recentcomments"><span><a href="#" rel="external nofollow" class="url">Mr WordPress</a></span> on <a href="blog-single.html">Thanks for watching!</a></li>
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
    </div>
    <!-- .container -->
    <footer id="colophon" class="site-footer">
      <div class="container">
        <div class="site-info">
          <h1 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">Moschino</h1>
          <a target="blank" href="https://www.wowthemes.net/">&copy; Moschino - Free HTML Template by WowThemes.net</a>
        </div>
      </div>
    </footer>
    <a href="#top" class="smoothup" title="Back to top"><span class="genericon genericon-collapse"></span></a>
  </div>
</template>

<style scoped>

</style>