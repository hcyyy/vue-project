<template>
    <ul class="nav-bar">
        <li>
            <img src="./images/films.png">
            <span>电影</span>
        </li>
        <li>
             <img src="./images/cinemas.png">
            <span>影院</span>
        </li>
        <li>
             <img src="./images/uugroupon.png">
            <span>9.9拼团</span>
        </li>
        <li>
             <img src="./images/center.png">
            <span>我的</span>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
    .nav-bar {
    display: flex;
    height: px2rem(50);
    border-top: px2rem(1) solid #ededed;
    img {
        width: px2rem(21);
        height: px2rem(21);
    }
    li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: px2rem(12);
    }
    }
</style>
