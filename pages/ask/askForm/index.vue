<template>
	<view class="content">
		<u-form :model="form" ref="uForm" :rules="rules">
			<u-form-item label="问次" label-width="250" label-align="left">
				<u-input v-model="form.ask" :border="border" placeholder="问次" />
			</u-form-item>
			<u-form-item label="时间" label-width="250" label-align="left">
				<u-input v-model="form.startTime" :border="border" placeholder="询问时间" disabled @click="startTimeShow = true"/>
			</u-form-item>
			<u-form-item label="地点" label-width="250" label-align="left">
				<u-input v-model="form.place" :border="border" placeholder="询问地点" />
			</u-form-item>
			<u-form-item label="询问人" label-width="250" label-align="left">
				<u-input v-model="form.inquirer" :border="border" placeholder="询问人" />
			</u-form-item>
			<u-form-item label="询问人工作单位" label-width="250" label-align="left">
				<u-input v-model="form.inquirerUnit" :border="border" placeholder="询问人工作单位" />
			</u-form-item>
			<u-form-item label="记录人" label-width="250" label-align="left">
				<u-input v-model="form.recorder" :border="border" placeholder="记录人" />
			</u-form-item>
			<u-form-item label="记录人工作单位" label-width="250" label-align="left">
				<u-input v-model="form.recorderUnit" :border="border" placeholder="记录人工作单位" />
			</u-form-item>
			<u-form-item label="被询问人" label-width="250" label-align="left">
				<u-input v-model="form.interviewee" :border="border" placeholder="被询问人" />
			</u-form-item>
			<u-form-item label="性别" label-width="250" label-align="left">
				<u-input :border="border" type="select" placeholder="性别" v-model="form.sex" :select-open="actionSexShow" @click="actionSexShow = true"></u-input>
			</u-form-item>
			<u-form-item label="年龄" label-width="250" label-align="left">
				<u-input v-model="form.age" :border="border" placeholder="年龄" type="number" />
			</u-form-item>
			<u-form-item label="出生日期" label-width="250" label-align="left">
				<u-input v-model="form.birthday" :border="border" placeholder="出生日期" disabled @click="birthdayShow = true"/>
			</u-form-item>
			<u-form-item label="身份证号" label-width="250" label-align="left" prop="cardId">
				<u-input v-model="form.cardId" :border="border" placeholder="身份证号" disabled @click="cardIdShow = true"/>
			</u-form-item>
			<u-form-item label="人大代表" label-width="250" label-align="left">
				<u-radio-group v-model="form.representative">
					<u-radio v-for="(item, index) in representativeList" :key="index" :name="item.name">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="现住址" label-width="250" label-align="left">
				<u-input v-model="form.currentAddress" :border="border" placeholder="现住址" disabled @click="currentAddressShow = true"/>
			</u-form-item>
			<u-form-item label="现住址详细地址" label-width="250" label-align="left">
				<u-input v-model="form.currentAddressDetails" :border="border" placeholder="现住址详细地址"/>
			</u-form-item>
			<u-form-item label="联系方式" label-width="250" label-align="left" prop="phone">
				<u-input v-model="form.phone" :border="border" placeholder="联系方式" type="number" maxlength="11"/>
			</u-form-item>
			<u-form-item label="户籍所在地" label-width="250" label-align="left">
				<u-input v-model="form.domicile" :border="border" placeholder="户籍所在地" disabled @click="domicileShow = true"/>
			</u-form-item>
		</u-form>
		<view class="submitBtn">
			<u-button type="primary" @click="submit">下一步</u-button>
		</view>
		<u-picker v-model="startTimeShow" :params="startTimeParams" mode="time" @confirm="startTimeConfirm"></u-picker>
		<u-picker v-model="birthdayShow" :params="birthdayParams" mode="time" @confirm="birthdayConfirm"></u-picker>
		<u-keyboard ref="uKeyboard" mode="card" v-model="cardIdShow" @change="cardChange" @backspace="cardBackspace"></u-keyboard>
		<u-action-sheet :list="actionSheetList" v-model="actionSexShow" @click="actionSexCallback"></u-action-sheet>
		<u-picker v-model="currentAddressShow" mode="region" @confirm="currentAddressConfirm"></u-picker>
		<u-picker v-model="domicileShow" mode="region" @confirm="domicileConfirm"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				border: true,
				startTimeShow: false,
				birthdayShow: false,
				cardIdShow: false,
				actionSexShow: false,
				currentAddressShow: false,
				domicileShow: false,
				startTimeParams: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: false
				},
				birthdayParams: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				form: {
					'ask': '',
					'startTime': '',
					'place': '',
					'inquirer': '',
					'inquirerUnit': '',
					'recorder': '',
					'recorderUnit': '',
					'interviewee': '',
					'sexValue': '',
					'sex': '',
					'age': '',
					'birthday': '',
					'cardId': '',
					'representative': '',
					'currentAddress': '',
					'currentAddressDetails': '',
					'phone': '',
					'domicile': ''
				},
				rules: {
					cardId: [
						{
							required: true,
							message: '请输入身份证号',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.idCard(value);
							},
							message: '身份证号不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur']
						}
					],
					phone: [
						{
							required: true,
							message: '请输入手机号',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur']
						}
					]
				},
				actionSheetList: [
					{
						text: '男',
						value: 0
					},
					{
						text: '女',
						value: 1
					}
				],
				representativeList: [
					{
						name: '是',
						checked: false,
						value: 0
					},
					{
						name: '否',
						checked: false,
						value: 1
					}
				]
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			startTimeConfirm(e) {
				this.form.startTime = e.year + '年' + e.month + '月' + e.day + '日' + e.hour + '时' + e.minute + '分'
			},
			birthdayConfirm(e) {
				this.form.birthday = e.year + '年' + e.month + '月' + e.day + '日'
			},
			// 点击退格键
			cardBackspace() {
				if(this.form.cardId.length) this.form.cardId = this.form.cardId.substr(0, this.form.cardId.length - 1);
			},
			// 键盘按键发生变化
			cardChange(detail) {
				this.form.cardId += detail;
			},
			// 性别回调
			actionSexCallback(index) {
				this.form.sexValue = this.actionSheetList[index].value;
				this.form.sex = this.actionSheetList[index].text
			},
			// 现住址回调
			currentAddressConfirm(e) {
				console.log(e)
				this.form.currentAddress = e.province.label + e.city.label + e.area.label
			},
			// 户籍所在地回调
			domicileConfirm(e) {
				console.log(e)
				this.form.domicile = e.province.label + e.city.label + e.area.label
			},
			submit() {
				// this.$refs.uForm.validate(valid => {
				// 	if (valid) {
				// 		console.log(this.form)
				// 		uni.getStorage({
				// 			key: "fireId",
				// 			success: (res) => {
				// 				this.form.handle = 'post'
				// 				this.form.fireId = res.data
				// 				uniCloud.callFunction({
				// 					name: 'record',
				// 					data: this.form
				// 				}).then((r) => {
				// 					console.log(r)
				// 					uni.setStorage({
				// 						key: "recordId",
				// 						data: r.result.id
				// 					})
				// 					uni.navigateTo({
				// 						url: './question/index'
				// 					})
				// 				})
				// 			}
				// 		})
				// 	}
				// })
				uni.getStorage({
					key: "fireId",
					success: (res) => {
						this.form.handle = 'post'
						this.form.fireId = res.data
						uniCloud.callFunction({
							name: 'record',
							data: this.form
						}).then((r) => {
							console.log(r)
							uni.setStorage({
								key: "recordId",
								data: r.result.id
							})
							uni.navigateTo({
								url: './question/index'
							})
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 30rpx;
		
		.submitBtn{
			margin: 100rpx 0;
		}
	}
</style>
