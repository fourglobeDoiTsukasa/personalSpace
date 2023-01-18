<script>
  import './../assets/css/style.css';
</script>

<header>
  <nav>
    <ul>
      <li><a href="/">テスト1</a></li>
      <li><a href="/">テスト2</a></li>
      <li><a href="/">テスト3</a></li>
      <li><a href="/">テスト4</a></li>
      <li><a href="/">テスト5</a></li>
    </ul>
  </nav>
</header>
<div class="wrapper">
  <main>
    <slot />
  </main>
</div>

<footer>
  <nav>
    <ul>
      <li><a href="/">テスト1</a></li>
      <li><a href="/">テスト2</a></li>
      <li><a href="/">テスト3</a></li>
      <li><a href="/">テスト4</a></li>
      <li><a href="/">テスト5</a></li>
    </ul>
  </nav>
</footer>

<style lang="scss">
  header {
    width: 100%;
    margin-bottom: 40px;
    nav {
      padding: 20px 0;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          font-size: 1.6rem;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
  main {
    background: #fff;
    padding: 10%;
    box-shadow: 10px 10px 30px#999, inset -8px -8px 10px #ddd,
      inset 0 0 8px #ddd;
    border-radius: 30px;
  }
  .wrapper {
    width: calc(1200 / 1920 * 100%);
    margin: 0 auto;
  }
  footer {
    margin-top: 40px;
    width: 100%;
    nav {
      padding: 20px 0;
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          font-size: 1.6rem;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
</style>
