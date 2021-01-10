<template>
		<view class="content">
			<view class="name">
				言辞证据的审查验证
			</view>
			<view class="details">
				<text>证人、火灾当事人、火灾肇事人者等在提供证言时，由于主客观因素，往往存在证言与实际情况不相符的情况，因此，有必要对他们前后证言进行审查验证，达到去伪存真的目的。</text>
				<text>1.对证言的审查验证</text>
				<text>审查证人、火灾当事人、火灾肇事人者等的年龄、性别、职业和个人成分，分析验证其提供情况的可信程度，因为一个人的年龄和职业，决定了他的认知能力和判断能力。</text>
				<text>审查证人发现起火的时间和他当时的位置与行动，以判断所供证言是否符合客观事实。</text>
				<text>审查报警人的报警动机、报警前后的时间、位置和行动。</text>
				<text>审查证人证言形成的主客观因素，是否影响其供证言的客观性。</text>
				<text>审查证人与责任者或火灾肇事人的关系。</text>
				<text>2.审查验证言辞证据的一般方法</text>
				<br>
				<text>（1）情理判断法</text>
				<text>情理判断法是通过火灾发生、发展、变化的一般规律和常识，对证据内容进行审查，鉴别其真伪和证明力的一种方法，证据内容是否符合客观规律，需要与火灾时的环境条件联系起来进行比较分析。</text>
				<text>（2）实验法</text>
				<text>为了审查判断某一火灾现象在一定的时间条件下能否发生或怎样发生，按现场原有的条件，将该现象进行重演，得出可能的或不可能发生的结论，这种方法成为实验法。</text>
				<text>（3）比较印证法</text>
				<text> 火灾调查人员，对于证明某同一问题或事实的几个证据进行对照分析，发现和区分异同，进而确定其中证据真伪和证明力的一种方法。</text>
				<text>（4）逻辑证明法</text>
				<text>直接证明法，即从已知证据按照推理的规则，直接得出案件事实结论的证明方法。</text>
				<text>反证法，既通过确定某些证据为虚假来证明与之相反的证据为真实的一种证明方法。</text>
				<text>排除法，即把被证明的事实同其它可能成立的全部事实放在一起，通过证明其他事实不能成立来确认或者推论需要证明的事实成立的方法。</text>
			</view>
			
			<view class="home" @click="home">
				首页
			</view>
		</view>
</template>

<script>
	export default {
		methods: {
			home() {
				uni.switchTab({
					url: '../../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20rpx 20rpx 150rpx;
		position: relative;
		
		.name{
			font-size: 38rpx;
			font-weight: bold;
			line-height: 100rpx;
		}
		
		.details{
			text{
				display: inline-block;
				margin-bottom: 20rpx;
				line-height: 55rpx;
				text-indent: 2em;
				
				span{
					font-size: 36rpx;
					font-weight: bold;
				}
			}
			
			.next{
				margin: 50rpx 0;
			}
		}
		
		.home{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100rpx;
			border-top: 1px solid #ccc;
			background-color: #fff;
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
			z-index: 999;
		}
	}
</style>
