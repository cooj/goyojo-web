<template>
    <section>
        <div class="header-top py10px">
            <div class="flex items-center justify-between container">
                <NuxtLinkLocale to="/" class="logo">
                    <img :src="systemInfo?.logo" class="max-h75px" alt="">
                </NuxtLinkLocale>
                <div class="flex items-center">
                    <div class="phone flex items-center">
                        <div class="icon mr10px">
                            <i class="i-carbon:phone-filled" />
                        </div>
                        <div class="phone-text">
                            {{ $lang('全国咨询热线', 'National consultation hotline') }}：<br>
                            <span class="font-bold">{{ systemInfo?.phone }}</span>
                        </div>
                    </div>
                    <BaseLanguage class="ml20px" />
                </div>
            </div>
        </div>
        <div class="header-menu">
            <div class="container">
                <ul class="header-menu-ul flex">
                    <li v-for="item in menuList" :key="item.id" class="flex-1">
                        <NuxtLinkLocale :to="item.href" class="header-link">
                            {{ $lang(item.title, item.title_en) }}
                        </NuxtLinkLocale>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const { $lang } = useNuxtApp()
const systemInfo = await useSystemState().getSystemInfo()
// console.log(dat)

const menuList = await useMenuState().getMenuList()
if (process.client) {
    setTimeout(() => {
        console.log('🚀 ~ file: header.vue:21 ~ menuList:', menuList)
    }, 1500)
}
</script>

<style lang="scss" scoped>
.header-menu {
    background-color: var(--co-main-color);
    color: var(--co-white-color)
}

.phone {
    .icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--co-main-color);
        border: 2px solid var(--co-main-color);
        border-radius: 50%;
        font-size: 20px;
    }

    .phone-text {
        color: var(--el-text-color-primary);
    }
}

.header-menu-ul {
    text-align: center;

    li {
        position: relative;

        &::after {
            content: '';
            width: 1px;
            height: 60%;
            background-color: var(--co-white-color);
            position: absolute;
            top: 20%;
            right: 0;
        }

        &:last-child::after {
            content: unset;
        }
    }
}

.header-link {
    line-height: 52px;
    display: inline-block;
    font-weight: bold;
}
</style>
