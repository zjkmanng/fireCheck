<template>
	<view class="content">
		<u-form :model="form" ref="uForm" :rules="rules">
			<u-form-item label="">
				<u-input v-model="form.question" :border="border" placeholder="请选择问题" disabled @click="questionListShow = true"/>
			</u-form-item>
			<u-form-item label="">
				<u-input v-model="form.questiondiy" :border="border" placeholder="请选择问题" disabled @click="questionDiyListShow = true"/>
			</u-form-item>
			<u-form-item label="问" label-position="top" prop="ask">
				<view class="deleteContent">
					<view class="input">
						<u-input v-model="form.ask" type="textarea" :border="border" height="100" :auto-height="true" placeholder="请输入问题" />
					</view>
					<view class="delete">
						<u-button type="warning" size="medium" @click="deleteAsk">清除</u-button>
					</view>
				</view>
			</u-form-item>
			<u-form-item label="答" label-position="top" prop="answer">
				<u-input v-model="form.answer" type="textarea" :border="border" height="150" :auto-height="true" placeholder="请输入答案" />
			</u-form-item>
		</u-form>
		<view class="btn">
			<u-button type="primary" size="medium" @click="see">查看题纲</u-button>
		</view>
		<view v-if="showPrevBtn === true" class="btn">
			<u-button type="primary" size="medium" @click="prev">上一问</u-button>
		</view>
		<view class="btn">
			<u-button type="primary" size="medium" @click="save">保存此问，添加下一问</u-button>
		</view>
		<view v-if="showPrevBtn === true" class="btn">
			<u-button type="primary" size="medium" @click="createRecord">生成询问笔录</u-button>
		</view>
		<!-- <view class="home" @click="home">
			首页
		</view> -->
		<u-select v-model="questionListShow" :list="questionList" @confirm="confirm"></u-select>
		<u-select v-model="questionDiyListShow" :list="questionDiyList" @confirm="confirmDiy"></u-select>
		<u-modal v-model="modelShow" :content="content" :show-cancel-button="true" @confirm="confirmQuestion" @cancel="cancelQuestion"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPrevBtn: false,
				activeIndex: 0,
				border: true,
				questionListShow: false,
				questionDiyListShow: false,
				modelShow: false,
				form: {
					question: '',
					questiondiy: '',
					ask: '',
					answer: ''
				},
				content: '是否替换问题内容？',
				ask: '',
				question: '',
				details: '',
				rules: {
					ask: [
						{
							required: true,
							message: '请输入问题',
							trigger: ['change','blur'],
						}
					],
					answer: [
						{
							required: true,
							message: '请输入答案',
							trigger: ['change','blur'],
						}
					]
				},
				questionList: [
					{
						label: '最先发现起火的人和最先报警的人',
						value: '<p>1.发现起火的时间、地点以及最初起火的部位，并且还要了解能够证实起火时间、部位的依据。</p><p>2.发现起火的详细经过，即发现者在什么情况下发现，起火前有什么征相？发现时主要燃烧物质，有什么声、光、味儿等现象，一些可燃物起火后，发出一种特殊的气味儿，这种异常的气味儿，如果引起了人们的注意，也能及时发现起火。动物对于火焰、气味及声响反应比人更灵敏，尤其在夜里，人们多处于熟睡状态，在刚刚发出火焰或异味，以及异响时，动物便会做出鸣叫或逃离反应，这时它们的行为，提醒人们已经起火。</p><p>3.发现起火后火场变化的情况，火势蔓延的方向、燃烧范围，火焰和烟雾的颜色变化情况。</p><p>4.发现火情后采取过哪些灭火措施，现场有无发生变动，变动的原因和情况。</p><p>5.发现起火时还有何人在场，是否有可疑人员出入火场，还有其它什么已知的情况等。</p><p>6.发现起火时电源情况，电灯是否亮，设备是否运转等。一般火灾现场都有电线， 所以一般都要问电的情况。</p><p>7.发现起火时的风向、风力情况。对火灾蔓延有影响。</p><p>8.报警时间、地点及报警过程。</p>',
						extra: [
							{
								label: '你什么时候发现起火的？',
								value: ''
							},
							{
								label: '发现起火的时候你在哪里？在做什么？',
								value: ''
							},
							{
								label: '请你描述下你发现起火的经过？',
								value: ''
							},
							{
								label: '你看到是哪里起的火？',
								value: ''
							},
							{
								label: '你什么时候报警的？在哪报警的？',
								value: ''
							},
							{
								label: '请描述下你报警的过程？',
								value: ''
							},
							{
								label: '请你描述你发现起火后火场变化的情况？比如火势蔓延的方向、燃烧范围，火焰和烟雾的颜色变化有什么变化？',
								value: ''
							},
							{
								label: '请你说明一下发现起火后采取过哪些措施？',
								value: ''
							},
							{
								label: '请问现场有没有发生过变动？',
								value: ''
							},
							{
								label: '请问变动的原因和情况是什么？',
								value: ''
							},
							{
								label: '你发现起火时还有什么人在现场？',
								value: ' '
							},
							{
								label: '你有没有看到可疑的人员出入火场？',
								value: ' '
							},
							{
								label: '请说明下你发现起火时的电源情况？电灯是否亮，设备是否运转等？',
								value: ' '
							},
							{
								label: '请描述下你发现起火时的风向、风力情况？',
								value: ' '
							}
						]
					},
					{
						label: '最先到达场救火的人',
						value: '<p>1.到火场时火灾发展的形势和特点，冒火、冒烟的具体部位，火焰、烟雾的颜色、气味儿。</p><p>2.到达火场时，火焰蔓延到的位置和扑救的过程。</p><p>3.进入火场、起火部位的具体路线。</p><p>4.扑救过程中是否发现了可疑痕迹、物件和可疑的人出入情况。</p><p>5.起火单位的消防器材和设施是否遭到了破坏。</p><p>6.起火部位在扑救过程中火势如何？是否经过破拆和破坏，原来的状态怎样？</p><p>7.采取何种灭火方式，使用什么灭火剂？作用如何。</p>',
						extra: [
							{
								label: '请描述一下你到火场时火灾发展的形势和特点，比如冒火、冒烟的具体部位，火焰、烟雾的颜色、气味儿等？',
								value: ''
							},
							{
								label: '请描述一下你到达现场时火焰蔓延到的位置？',
								value: ''
							},
							{
								label: '请描述一下你扑救的过程？',
								value: ''
							},
							{
								label: '请说明一下你进入火场的具体路线？',
								value: ''
							},
							{
								label: '你扑救过程中有没有发现可疑痕迹？',
								value: ''
							},
							{
								label: '你扑救过程中有没有发现可疑物品？',
								value: ''
							},
							{
								label: '你扑救过程中有没有发现可疑人出入？',
								value: ''
							},
							{
								label: '你扑救的时候起火单位的消防器材和设施是否遭到了破坏？',
								value: ''
							},
							{
								label: '你扑救的时候起火部位在扑救过程中火势如何？',
								value: ''
							},
							{
								label: '你扑救的时候起火部位是否经过破拆和破坏？原来的状态是怎样的？',
								value: ''
							},
							{
								label: '你采用的是哪种灭火方式，使用什么灭火剂？灭火作用如何？',
								value: ' '
							}
						]
					},
					{
						label: '最先到达到场扑救的消防人员',
						value: '<p>1.火灾现场基本情况（如最先冒烟、冒火部位、塌落倒塌部位、燃烧最猛烈和终止的部位等）。</p><p>2.燃烧特征（烟雾、火焰、颜色、气味儿、响声。）。</p><p>3.现场出现的异常反应，异常的气味、响声等，到达火灾现场时门窗关闭情况，有无强行进入的痕迹。</p><p>4.扑救情况（扑救措施、扑救顺序、力量布置、供水、消防破拆情况等）。</p><p>5.现场设备、设施工作状况，破坏情况等。如室内消火栓有没有水？</p><p>6.是否发现非现场火源，或放火遗留物。</p><p>7.现场其他人活动情况。</p><p>8.现场抢救人情况（死、伤者的位置、状态）。</p><p>9.现场人员向其反映的有关情况。</p><p>10.接警时间、到达火灾现场时间。</p><p>11.扑救时的天气情况，如风力、风向、雷、雨情况。</p><p>12.最初进入火场时，有无对周围环境及起火部位的照相、录像等资料。</p>',
						extra: [
							{
								label: '请你简述下火灾现场的基本情况？（比如最先冒烟、冒火部位、塌落倒塌部位、燃烧最猛烈和终止的部位等）。',
								value: ''
							},
							{
								label: '请你简述下现场的燃烧特征？（比如烟雾、火焰、颜色、气味儿、响声）',
								value: ''
							},
							{
								label: '火灾现场有没有异常的气味？',
								value: ''
							},
							{
								label: '火灾现场有没有异常的响声？',
								value: ''
							},
							{
								label: '请描述下你到达火灾现场时现场门窗关闭的情况？',
								value: ''
							},
							{
								label: '请描述下你到达火灾现场时现场门窗等出入口有没有强行进入的痕迹？',
								value: ''
							},
							{
								label: '请描述一下你采取的扑救措施、扑救顺序、水量布置、供水、破拆等现场扑救的情况？',
								value: ''
							},
							{
								label: '请描述一下现场设备、设施的工作状况、破坏情况等？',
								value: ''
							},
							{
								label: '请说明一下现场消防设施的情况？',
								value: ''
							},
							{
								label: '请问你有没有发现非现场的火源，或放火遗留物？',
								value: ''
							},
							{
								label: '请说明一下你知道的现场其他人的活动情况？',
								value: ' '
							}
						]
					},
					{
						label: '火灾发生前最后留离开起火部位的人火灾发生时在场...',
						value: '<p>1.在场时的活动情况，离开起火部位之前是否吸烟或动用了明火，生产设备运转情况，本人具体作业或其他活动内容及活动的位置。</p><p>2.离开时，火源、电源处理情况，是否关闭燃烧气源、电源，附近是否有可燃、易燃物品及自然性物品以及它们的种类、数量、性质。</p><p>3.在工作期间有无违章操作行为，是否发生过故障或异常现象，采取过何种措施。</p><p>4.其他在场人的具体位置和活动内容，何时、何故离去，有无他人来往，来此目的，具体的活动内容及来往的时间，路线。</p><p>5.离开之前是否进行过检查，是否有异常气味和响动，门窗关闭情况。</p><p>6.最后离开起火部位的具体时间、路线、先后顺序，有无证人。</p><p>7.得知发生火灾时间和经过，对火灾原因的见解和依据。</p>',
						extra: [
							{
								label: '请说一下得知发生火灾时间和经过，你对火灾原因有什么想法？',
								value: ''
							},
							{
								label: '你对火灾原因的想法是依据什么得出的？ ',
								value: ''
							},
							{
								label: '请描述一下你在现场时的活动情况？',
								value: ''
							},
							{
								label: '请描述一下你具体的作业或其他活动内容和活动的位置？',
								value: ''
							},
							{
								label: '请说一下以前有没有发生过故障或异常现象，采取过何种措施？',
								value: ''
							},
							{
								label: '请说一下在你工作期间有无违章操作的行为？',
								value: ''
							},
							{
								label: '请说一下你离开起火部位之前是否吸烟或动用了明火？',
								value: ''
							},
							{
								label: '请说一下你离开起火部位之前生产设备的运转情况？',
								value: ''
							},
							{
								label: '请描述下你离开时，对火源、电源的处理情况？',
								value: ''
							},
							{
								label: '请说一下你离开时是否关闭燃烧气源、电源？附近是否有可燃、易燃物品及自然性物品以及它们的种类、数量、性质？',
								value: ''
							},
							{
								label: '请说一下你离开之前是否进行过检查？（比如是否有异常气味和响动及门窗关闭情况等）',
								value: ' '
							},
							{
								label: '有没有证人？',
								value: ' '
							},
							{
								label: '请说一下你知道的其他在场人的具体位置和活动内容？什么时间、什么原因离去？有没有他人来往？来此的目的？具体的活动内容和来往的时间、路线？',
								value: ' '
							}
						]
					},
					{
						label: '熟悉起火现场物品摆放和生产工艺、设备的人',
						value: '<p>1.建筑物的主体和平面布置，建筑的结构耐火性能，每个车间、房间的用途，车间内的设备及室内陈设情况等，起火部位存放、使用的物质情况。</p><p>2.火源、电源和热源等情况，火源分布的部位及与可燃材料、物体的距离，有无不正常情况，是否采取过防火措施；架设线路的部位，电线是否合乎规格、使用年限，有没有破、损、漏电现象，负荷是否正常。</p><p>3.设备及工艺情况和安全制度执行情况。近期检查、修理、改造情况，机械设备的性能、使用情况和发生的故障情况等，都应该了解清楚，以便推断出可能起火的物体和设备。</p><p>4.储存物资的情况。起火部位存放使用的物资，材料产品情况（包括种类、数量、相互位置）。如起火的房间或库房内，是否有性能相互抵触的化学物质和自然物品；可燃性物品与电源、火源的关系，库内的通风是否良好？温度、湿度是否适当，以及是否漏雨、漏雪等。</p><p>5.有无火灾史，曾在什么时间、部位、地点，什么原因发生过火灾或其他事故，事后采取过什么措施。</p><p>6.设备及工艺情况，以及生产及设备运转情况。</p><p>7.有无防火安全规定、制度和操作规程，实际执行情况如何？有关制度和规程是否与新工艺、新设备相适应？</p><p>8.有哪些不正常现象，如设备、控制装置及灯火闪动、异响、异味儿等。</p>',
						extra: [
							{
								label: '请你描述一下建筑的主体和平面布置以及建筑的结构耐火性能？',
								value: ''
							},
							{
								label: '请你说明一下每个车间、房间的用途，车间内的设备及室内陈设情况等？',
								value: ''
							},
							{
								label: '请详细说明一下起火部位的物品存放、使用的情况？',
								value: ''
							},
							{
								label: '请说明一下建筑物内火源、电源、热源等的使用情况？',
								value: ''
							},
							{
								label: '请详细描述一下建筑物内火源的分布部位及与可燃材料、物体的距离？以及以前和近期有没有不正常的情况？',
								value: ''
							},
							{
								label: '请说明一下针对火源采取了什么防火措施？',
								value: ''
							},
							{
								label: '请详细描述一下架设线路的部位？电线的规格？使用年限？',
								value: ''
							},
							{
								label: '请问之前有没有破、损、漏电的现象？负荷是否正常？',
								value: ''
							},
							{
								label: '请你描述一下设备及工艺情况？',
								value: ''
							},
							{
								label: '请描述一下生产及设备运转情况。',
								value: ''
							},
							{
								label: '请你说明一下安全制度执行情况？',
								value: ' '
							},
							{
								label: '请你说明一下近期检查、修理、改造情况？',
								value: ' '
							},
							{
								label: '请你说明一下机械设备的性能、使用情况和发生的故障情况等？',
								value: ' '
							},
							{
								label: '请问之前有没有哪些不正常现象，如设备、控制装置及灯火闪动、异响、异味儿等。',
								value: ' '
							},
							{
								label: '请说明一下储存物资的情况？',
								value: ' '
							},
							{
								label: '请详细说明一下起火部位存放使用的物资，材料产品情况？（包括种类、数量、相互位置）',
								value: ' '
							},
							{
								label: '请详细说明一下起火的房间或库房内，是否有性能相互抵触的化学物质和自然物品？',
								value: ' '
							},
							{
								label: '请详细说明一下可燃性物品与电源、火源的关系？',
								value: ' '
							},
							{
								label: '请问库内的通风是否良好？',
								value: ' '
							},
							{
								label: '请问库内的温度、湿度是否适当？以及是否有漏雨、漏雪等情况？',
								value: ' '
							},
							{
								label: '请问有没有火灾史？曾在什么时间、部位、地点，什么原因发生过火灾或其他事故，事后采取过什么措施？',
								value: ' '
							},
							{
								label: '请问你们有没有防火安全规定、制度和操作规程，实际执行情况怎么样？',
								value: ' '
							},
							{
								label: '请问你们有没有有关制度和规程是否与新工艺、新设备相适应？',
								value: ' '
							}
						]
					},
					{
						label: '火灾肇事嫌疑者、责任制',
						value: '<p>1.用火用电、操作作业等的详细过程，有无因本人生产、生活用电不慎，疏忽大意，违反安全操作规程而引起火灾的可能，火灾当时及火灾前，火灾责任者和受伤人当时在何处、何位置、做什么、肇事前和受灾后的主要活动情况。</p><p>2.起火部位可燃物情况、品种、种类和火源距离等。</p><p>3.起火过程及扑救逃生情况。</p><p>4.受伤的部位、原因。</p><p>5.对居民火灾，还要了解其社会关系、邻里关系等。</p>',
						extra: [
							{
								label: '请你描述一下用火用电、操作作业等的详细过程？',
								value: ''
							},
							{
								label: '请问你有没有生产、生活用电不慎，疏忽大意，违反安全操作规程的行为？',
								value: ''
							},
							{
								label: '请问你认为有没有因你本人生产、生活用电不慎，疏忽大意，违反安全操作规程而引起火灾的可能？',
								value: ''
							},
							{
								label: '火灾当时及火灾发生前你在哪里？具体什么位置？在做什么？',
								value: ''
							},
							{
								label: '请描述一下你受灾后的主要活动情况？',
								value: ''
							},
							{
								label: '请描述一下肇事前你的主要活动情况？',
								value: ''
							},
							{
								label: '请说明一下起火部位可燃物情况、品种、种类和火源距离等？',
								value: ''
							},
							{
								label: '请描述一下你知道的看到的起火过程？',
								value: ''
							},
							{
								label: '请描述一下扑救逃生情况？',
								value: ''
							},
							{
								label: '请描述一下你受伤的部位和原因？',
								value: ''
							},
							{
								label: '请说明一下你的社会关系？',
								value: ''
							},
							{
								label: '请说明一下你的邻里关系？',
								value: ''
							}
						]
					},
					{
						label: '起火单位的有关领导',
						value: '<p>1.向起火单位领导主要了解对起火原因的看法，如存在的内部矛盾，提供可疑人、重点人等。</p><p>2.安全制度的执行情况。</p><p>3.火灾隐患及整改情况。</p><p>4.以往火灾及其他事故方面的情况。</p><p>5.起火前生产中有无故障及处理情况。</p><p>6.起火场所相关人员的上岗培训、职业技能、健康情况。</p>',
						extra: [
							{
								label: '请说一下你对起火原因的看法？',
								value: ''
							},
							{
								label: '请说一下你单位有没有内部矛盾？什么情况？',
								value: ''
							},
							{
								label: '请说明一下你单位安全制度的执行情况？',
								value: ''
							},
							{
								label: '请说一下你知道的火灾隐患及整改情况？',
								value: ''
							},
							{
								label: '请说一下之前有没有政府部门来检查？有没有提出过什么问题？你们做了什么整改措施？',
								value: ''
							},
							{
								label: '请说一下以往有没有发生火灾或其他事故等？情况是什么样的？',
								value: ''
							},
							{
								label: '请说一下起火前生产中有没有故障？采取了什么处理？',
								value: ''
							},
							{
								label: '请说明一下你单位起火场所相关人员的上岗培训、职业技能和健康情况？',
								value: ''
							}
						]
					},
					{
						label: '起火现场，当班人员或巡查人员',
						value: '<p>1.交接班时间、记录、巡查记录。</p><p>2.检查情况。检查时间、检查部位、检查线路、检查次数、有无反常情况及处理情况。</p><p>3.用火、用电情况，如本人吸烟、照明情况等。</p><p>4.发现起火经过、火势情况和采取的措施。</p><p>5.有无人员进出及具体时间。</p><p>6.值班巡查制度、措施。</p>',
						extra: [
							{
								label: '请说一下你单位的交班时间和交班记录情况？',
								value: ''
							},
							{
								label: '请说明一下近期你单位的巡查记录情况？',
								value: ''
							},
							{
								label: '请说明一下单位近期的检查情况？（比如检查时间、检查部位、检查线路、检查次数、有无反常情况及处理情况）',
								value: ''
							},
							{
								label: '请说明一下你单位的用火用电情况？',
								value: ''
							},
							{
								label: '请问你是否吸烟？',
								value: ''
							},
							{
								label: '请描述一下你发现起火的经过？',
								value: ''
							},
							{
								label: '请描述一下你发现时的火势情况？',
								value: ''
							},
							{
								label: '请说明一下你发现起火后采取的措施？',
								value: ''
							},
							{
								label: '请说明一下你单位人员进出情况及具体时间？',
								value: ''
							},
							{
								label: '请说明一下你单位的值班巡查制度、措施？',
								value: ''
							}
						]
					},
					{
						label: '相邻单位目击者和附近群众',
						value: '<p>1.起火当时和起火前后，他们耳闻目睹的有关情况，如发现起火的部位、范围、火势情况，起火前火源、电源的反常情况，是否发现可疑物等。</p><p>2.群众对起火的各种反应、议论、情绪及其他活动。</p><p>3.当事人的有关情况。如政治、经济、作风和思想品质等家庭和社会关系，火灾前后的行为表现等。</p><p>4.当地地理环境特点、社会风土民情、人员往来情况等。</p><p>5.以往发生火灾及其他事故和案件情况。</p><p>6.发现火灾时，有无照、相录像等资料。</p>',
						extra: [
							{
								label: '请描述一下起火当时和起火前后，你耳闻目睹的有关情况？（比如发现起火的部位、范围、火势情况，起火前火源、电源的反常情况，是否发现可疑物等）',
								value: ''
							},
							{
								label: '请描述一下你听到的周围群众对起火的议论？',
								value: ''
							},
							{
								label: '请描述一下你看到的周围群众的情绪和反应？',
								value: ''
							},
							{
								label: '请描述一下你看到的周围群众的行为？',
								value: ''
							},
							{
								label: '请说一下你知道的当地地理环境特点？',
								value: ''
							},
							{
								label: '请说一下你知道的社会风土民情？',
								value: ''
							},
							{
								label: '请说一下你知道的当地人员往来情况？',
								value: ''
							},
							{
								label: '请说一下你知道的有关当事人的情况？（比如政治、经济、作风和思想品质等家庭和社会关系）',
								value: ''
							},
							{
								label: '请说一下你知道或看到的当事人火灾前后的行为表现？',
								value: ''
							},
							{
								label: '请问一下附近以往有没有发生过火灾或其他事故和案件？',
								value: ''
							},
							{
								label: '请问你发现火灾时，有没有进行拍照、录像？有没有相关资料？',
								value: ''
							}
						]
					},
					{
						label: '辖区消防监督人员',
						value: '<p>1.对该场所日常消防监督情况。</p><p>2.该场所消防设施设置及运行情况。</p><p>3.火灾隐患检查整改情况。</p><p>4.起火单位日常消防安全管理情况。</p>',
						extra: [
							{
								label: '请说明一下对该场所日常消防监督管理的情况？',
								value: ''
							},
							{
								label: '请说明一下监督管理中该场所消防设施设置及运行的情况？',
								value: ''
							},
							{
								label: '请说明一下该场所火灾隐患检查整改的情况？',
								value: ''
							},
							{
								label: '请说明一下你所知道的该场所的日常消防安全管理情况？',
								value: ''
							}
						]
					},
					{
						label: '火灾受害人',
						value: '<p>1.损失情况（建筑、设备、家具、物品等损失）。</p><p>2.与起火场所业主或火灾肇事人的关系，是否存在矛盾纠纷、经济往来、商业竞争。</p><p>3.建筑结构、分隔情况、电气线路敷设与起火场所的关系。</p><p>4.如何得知起火信息。</p><p>5.对起火原因的看法及起火场所的相关情况。</p>',
						extra: [
							{
								label: '请说一下你是如何得知起火信息的？',
								value: ''
							},
							{
								label: '请说一下你对起火原因的看法及起火场所的相关情况？',
								value: ''
							},
							{
								label: '请描述一下建筑结构和分隔情况？',
								value: ''
							},
							{
								label: '请描述一下损失情况？（比如建筑、设备、家具、物品等损失）。',
								value: ''
							},
							{
								label: '请描述一下电气线路敷设与起火场所的关系？',
							}
						]
					},
					{
						label: '其他与火灾有关联或了解火灾相关情况的人',
						value: '',
						extra: []
					}
				],
				questionDiyList: [],
				saveQuestionList: []
			}
		},
		onLoad() {
			this.initQuestion()
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		methods: {
			initQuestion() {
				uni.getStorage({
					key: 'askType',
					success: (res) => {
						for(let i = 0; i < this.questionList.length; i++) {
							if (res.data.name === this.questionList[i].label) {
								this.form.question = this.questionList[i].label
								this.questionDiyList = this.questionList[i].extra
								this.form.questiondiy = this.questionDiyList[0].label
								this.form.ask = this.questionDiyList[0].label
								this.details = res.data.details
							}
						}
						
					}
				})
			},
			confirm(e) {
				this.form.question = e[0].label
				this.details = e[0].value
				this.questionDiyList = e[0].extra
				this.form.questiondiy = this.questionDiyList[0].label
			},
			confirmDiy(e) {
				console.log(e)
				this.form.questiondiy = e[0].label
				this.ask = e[0].label
				this.modelShow = true
			},
			confirmQuestion() {
				this.form.ask = this.ask
			},
			cancelQuestion() {
				this.questionListShow = false
				this.form.ask = ''
			},
			deleteAsk() {
				this.form.ask = ''
			},
			see() {
				if (this.details === '') {
					this.$u.toast('请选择被询问人性质或无题纲')
				} else {
					let data = {
						name: this.form.question,
						details: this.details
					}
					uni.navigateTo({
						url: './details?data=' + JSON.stringify(data)
					})
				}
			},
			save() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						
						this.saveQuestionList.push({
							questionName: this.form.ask,
							answer: this.form.answer
						})
						this.showPrevBtn = true
						
						uni.getStorage({
							key: "recordId",
							success: (res) => {
								console.log(res.data)
								
							}
						})
					}
				})
			},
			prev() {
				
			},
			createRecord() {
				
			},
			reset() {
				this.form.ask = '',
				this.form.answer = ''
				this.initQuestion()
			},
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
		padding: 30rpx;
		
		.deleteContent{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.input{
				flex: 2;
			}
			
			.delete{
				flex: 1;
				display: flex;
				justify-content: flex-end;
			}
		}
		
		.btn{
			width: 50%;
			margin: 50rpx auto;
			
			.u-btn{
				width: 100%;
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
