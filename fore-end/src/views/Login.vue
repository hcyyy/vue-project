<template>
    <div class="login-list">
        <div>
            <div class="web-login">
                <div class="logo">
                    <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png">
                </div>
                <div class="login-form">
                    <div>
                        <form>
                            <div class="form-group">
                                <input type="text" class="input-control" maxlength="13" placeholder="手机号">
                                <div style="display:none;">
                                    <div class="clear-mobile-btn">
                                        <i class="iconfont">X</i>
                                    </div>
                                </div>
                                <div class="getSmsCode">获取验证码</div>
                            </div>
                            <div class="errorTip" style="display: none;"></div>
                            <div class="errorTip" style="display: none;"></div>
                            <div class="form-group">
                                <input type="text" placeholder="验证码" class="input-control">
                            </div>
                            <div class="submit login-btn">
                                <span>登录</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';
.login-list{
    flex: 1;
    .web-login{
        font-size: 15px;
        .logo{
            margin: 79px auto 40px;
            text-align: center;
            height: 60px;
            line-height: 60px;
            img{
                height: 60px;
            }
        }

        .login-form{
            width: 100%;
            position: relative;
            .form-group{
                line-height: 55px;
                margin: 0 25px;
                position: relative;
                .input-control{
                    height: 15px;
                    line-height: 15px;
                    padding: 20px 0;
                    width: 100%;
                    font-size: 15px;
                    color: #191a1b;
                    border: 0;
                    outline-width: 0;
                }

                .clear-mobile-btn{
                    font-size: 13px;
                    position: absolute;
                    top: 8px;
                    right: 0;
                    display: inline-block;
                    .iconfont{
                        position: absolute;
                        right: 90px;
                        line-height: 40px;
                        font-size: 23px;
                        color: rgb(189, 192, 197);
                    }
                }

                .getSmsCode{
                    position: absolute;
                    right: 0px;
                    top: 13px;
                    font-size: 13px;
                    color: #bdc0c5;
                    line-height: 30px;
                    width: 90px;
                    text-align: right;
                    float: right;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }

           .submit{
                line-height: 45px;
                font-size: 16px;
                margin: 70px 25px 0;
                border-radius: 3px;
                text-align: center;
                background-color: #ff5f16;
                height: 44px;
                color: #fff;
                border: none;
                span{
                    opacity: .3;
                }
           }

           .login-btn{
                margin-top: 70px;
           }
        }
    }
}
</style>
