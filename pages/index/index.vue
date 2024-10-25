<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="handleClick">点我</button>
		<text>我想看水果总数:{{totalNum}}</text>
		<view v-for="item in list" :key="item.di">
			<text>{{item.name}}</text>
			<text>{{item.num}}</text>
		</view>
	</view>
</template>

<script setup>
	// export default {
	// 	data() {
	// 		return {
	// 			title: 'Hello'
	// 		}
	// 	},
	// 	onLoad() {

	// 	},
	// 	methods: {

	// 	}
	// }
	import {ref,reactive,computed} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	const title = ref('hello')
	const list = reactive([
		{name:'apple',num:1,id:1},
		{name:'orange',num:1,id:2}
	])
	const handleClick=()=>{
		list.forEach(item=>{
			item.num++
		})
	}
	const totalNum = computed(()=>{
		return list.reduce((total,cur)=> total+cur.num ,0)
	})
	onLoad(()=>{
		console.log('onLoad生命周期')
	})
	
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
