<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222"/>
        </a>
        <button @click="kakaoLogout()">로그아웃</button>
    </div>
</template>

<script>
export default ({
    methods: {
        kakaoLogin() {
            window.Kakao.init('3cfcf89626c5945f7471c68a548d98b3');

            window.Kakao.Auth.login({
                scope : 'profile_nickname, profile_image, account_email',
                success: this.getKakaoAccount,
            })
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url:'/v2/user/me',
                success : (res) => {
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile.nickname;
                    const profileImage = kakao_account.profile.profile_image_url;
                    const email = kakao_account.email;
                    console.log('nickname', nickname);
                    console.log('email', email);
                    
                    alert('로그인 성공');
                },
                fail : error => {
                    console.log('Err', error)
                }
            })
        },
        kakaoLogout() {
            window.Kakao.Auth.logout((res) => {
                console.log(res);
            })
        }
    },
})

</script>
