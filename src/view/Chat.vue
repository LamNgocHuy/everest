<template>
    <div class="container">
        <div class="row">
            <div class="col-4 me-auto members">
                <div v-for="user in users" :key="user.userId" class="d-flex align-items-center user-info">
                    <div class="flex-shrink-0">
                        <img v-bind:src="user.pictureURL" alt="..." width="50px" height="50px">
                    </div>
                    <div class="flex-grow-1 ms-3">
                        {{user.displayName}}
                    </div>
                    <div class="align-self-center ml-auto">
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" id="id-user-1" type="checkbox" @click="createUsersNeedSend(user.userId)">
                            <label class="custom-control-label" for="id-user-1"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8 chat">
                <textarea class="form-control message" id="message"></textarea>
                <div class="d-flex flex-row">
                    <button class="btn btn-primary mt-4 me-3">Send Message</button>
                    <button class="btn btn-danger mt-4" @click="toggleMessage" onClick="return confirm(Are you sure?)">Reset Message</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Chat',
    data() {
        return {
            email: this.$store.state.accountLogin.email,
            // users: this.$store.dispatch("getAllUsers")
            users: [
                {
                    userId: '1',
                    displayName: 'Ngoc Huy',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/6.jpg'
                },
                {
                    userId: '2',
                    displayName: 'Van Tu',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/6.jpg'
                },
                {
                    userId: '3',
                    displayName: 'Nguyen Van A',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/5.jpg'
                },
                {
                    userId: '4',
                    displayName: 'Nguyen Van B',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/10.jpg'
                },
                {
                    userId: '5',
                    displayName: 'Nguyen Van C',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/6.jpg'
                },
                {
                    userId: '6',
                    displayName: 'Nguyen Van C',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/6.jpg'
                },
                {
                    userId: '7',
                    displayName: 'Nguyen Van C',
                    pictureURL: 'https://offsetcode.com/themes/messenger/1.1/assets/images/avatars/6.jpg'
                },
            ],
            messenger: '',
            UNeedSend: []
        }
    },
    methods: {
        toggleMessage() {
            if (confirm("Do you really want to reset?")) {
                document.getElementById('message').value = '';
            }
        },
        createUsersNeedSend(userId) {
            this.UNeedSend.push(userId)
        },
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 60px;
    background-color: white;
    border: 2px solid #333;
    border-bottom: none;
}

.list-user{
    height: 70vh;
    background-color: white;
    border: 2px solid #333;
    margin-bottom: 60px;
}

.avatar, .avatar>img {
    height: 3.125rem;
    min-height: 3.125rem;
    width: 3.125rem;
    min-width: 3.125rem;
}
.custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.6rem;
}
.user-info {
    border-radius: 8px !important;
    background: #fff;
    padding: 24px 20px;
    margin: 20px auto;
}

.members {
    background: #edeef6;
    height: 100vh;
    overflow-y: auto;
    -ms-overflow-style: none;
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

.chat {
    background: #fff;
    height: 100vh;
    padding: 25px 40px !important;
}
textarea {
    font-size: 24px;
}
.message {
    background: #edeef6;
    height: 50vh;
    border: none;
    &:focus{ background: #edeef6;}
}
</style>
