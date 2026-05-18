"""
Seed data for KidsBond - parenting & early childhood education platform.

Provides in-memory data for categories, age groups, activities, and articles.
Can be replaced with database queries when PostgreSQL is connected.
"""

from app.schemas.activity import (
    ActivitySchema,
    AgeGroupSchema,
    ArticleSchema,
    CategorySchema,
)

CATEGORIES: list[CategorySchema] = [
    CategorySchema(
        id=1,
        name="创意手工",
        slug="creative",
        description="画画、折纸、黏土等激发孩子创造力的活动",
        icon="Palette",
        color="#FF6B6B",
    ),
    CategorySchema(
        id=2,
        name="户外探索",
        slug="outdoor",
        description="亲近自然、户外游戏，培养探索精神",
        icon="TreePine",
        color="#51CF66",
    ),
    CategorySchema(
        id=3,
        name="亲子阅读",
        slug="reading",
        description="绘本推荐、阅读技巧，培养阅读习惯",
        icon="BookOpen",
        color="#339AF0",
    ),
    CategorySchema(
        id=4,
        name="音乐律动",
        slug="music",
        description="儿歌、节奏游戏，感受音乐之美",
        icon="Music",
        color="#CC5DE8",
    ),
    CategorySchema(
        id=5,
        name="科学启蒙",
        slug="science",
        description="简单实验、认知探索，激发好奇心",
        icon="FlaskConical",
        color="#FF922B",
    ),
    CategorySchema(
        id=6,
        name="生活技能",
        slug="life-skills",
        description="烹饪、整理、自理能力培养",
        icon="ChefHat",
        color="#20C997",
    ),
]

AGE_GROUPS: list[AgeGroupSchema] = [
    AgeGroupSchema(
        id=1,
        name="0-1岁",
        slug="0-1",
        min_age=0,
        max_age=1,
        description="婴儿期：感官探索与安全依恋",
    ),
    AgeGroupSchema(
        id=2,
        name="1-2岁",
        slug="1-2",
        min_age=1,
        max_age=2,
        description="学步期：运动发展与语言萌芽",
    ),
    AgeGroupSchema(
        id=3,
        name="2-3岁",
        slug="2-3",
        min_age=2,
        max_age=3,
        description="幼儿早期：想象力爆发与社交萌芽",
    ),
    AgeGroupSchema(
        id=4,
        name="3-4岁",
        slug="3-4",
        min_age=3,
        max_age=4,
        description="幼儿中期：独立意识与规则意识",
    ),
    AgeGroupSchema(
        id=5,
        name="4-6岁",
        slug="4-6",
        min_age=4,
        max_age=6,
        description="学前期：逻辑思维与入学准备",
    ),
]

ACTIVITIES: list[ActivitySchema] = [
    ActivitySchema(
        id=1,
        title="彩虹手指画",
        slug="rainbow-finger-painting",
        description="用小手蘸上安全颜料，在纸上自由创作彩虹画。培养色彩认知和精细动作能力，让孩子感受色彩混合的神奇。",
        duration_minutes=30,
        difficulty="简单",
        materials=["安全水彩颜料", "大张白纸/卡纸", "围裙或旧衣服", "湿巾", "水杯"],
        steps=[
            "铺好报纸保护桌面，让孩子穿上围裙",
            "在调色盘中挤出红、黄、蓝三原色",
            "引导孩子用手指蘸取颜料，在纸上自由涂画",
            "鼓励孩子尝试混合颜色，观察新颜色的产生",
            "可以用手掌印、指尖点等不同方式创作",
            "完成后一起欣赏作品，让孩子讲述自己画了什么",
        ],
        tips=[
            "选择无毒可水洗颜料，确保安全",
            "不要纠正孩子的画法，鼓励自由表达",
            "可以播放轻柔音乐营造氛围",
        ],
        education_value="培养色彩感知、精细动作发展、创造力表达、感官刺激",
        image_emoji="🌈",
        is_featured=True,
        category_id=1,
        age_group_id=2,
    ),
    ActivitySchema(
        id=2,
        title="树叶拓印画",
        slug="leaf-printing",
        description="收集不同形状的树叶，用颜料拓印出美丽的图案。让孩子亲近自然，认识不同植物。",
        duration_minutes=45,
        difficulty="简单",
        materials=["各种形状的树叶", "水彩颜料", "白纸", "小刷子"],
        steps=[
            "带孩子去户外捡拾不同形状的落叶",
            "将树叶洗净擦干，放在桌上",
            "用小刷子在树叶背面涂上颜料",
            "将涂好颜料的树叶压在白纸上",
            "轻轻按压后揭开，观察拓印效果",
            "尝试不同颜色和叶子的组合",
        ],
        tips=[
            "叶脉明显的叶子拓印效果更好",
            "引导孩子观察每片叶子的不同",
            "可以做成一幅完整的'树叶画'",
        ],
        education_value="自然认知、艺术表达、观察力培养、精细动作练习",
        image_emoji="🍂",
        is_featured=False,
        category_id=1,
        age_group_id=3,
    ),
    ActivitySchema(
        id=3,
        title="后院寻宝大冒险",
        slug="backyard-treasure-hunt",
        description="在户外设置寻宝游戏，让孩子根据线索找到隐藏的小宝藏。锻炼观察力和问题解决能力。",
        duration_minutes=40,
        difficulty="中等",
        materials=["小纸条（写线索）", "小奖品/零食", "篮子或袋子", "彩色标记笔"],
        steps=[
            "提前在户外不同位置藏好小物品",
            "制作简单的寻宝线索卡（可以用图画代替文字）",
            "给孩子一个小篮子，讲解寻宝规则",
            "从第一条线索开始，引导孩子寻找",
            "每找到一个宝藏，给予鼓励和欢呼",
            "全部找到后，一起清点'宝藏'并庆祝",
        ],
        tips=[
            "线索难度要适合孩子的年龄",
            "小龄孩子可以用颜色或图片线索",
            "适当给予提示，保持孩子的成就感",
        ],
        education_value="问题解决能力、空间认知、体能锻炼、逻辑思维",
        image_emoji="🗺️",
        is_featured=True,
        category_id=2,
        age_group_id=4,
    ),
    ActivitySchema(
        id=4,
        title="绘本共读：猜猜我有多爱你",
        slug="reading-guess-how-much",
        description="和孩子一起阅读经典绘本，通过角色扮演和互动问答，增进亲子情感联结。",
        duration_minutes=20,
        difficulty="简单",
        materials=["绘本《猜猜我有多爱你》", "舒适的阅读角落", "小毯子"],
        steps=[
            "选择安静舒适的环境，和孩子依偎坐好",
            "先让孩子观察封面，猜测故事内容",
            "用不同的声调为角色配音朗读",
            "每翻一页，停下来和孩子讨论画面",
            "鼓励孩子用自己的方式表达'有多爱'",
            "读完后拥抱孩子，说'我爱你到月亮再回来'",
        ],
        tips=[
            "不要急于翻页，让孩子充分观察画面",
            "可以让孩子尝试'读'给你听",
            "睡前阅读效果尤佳",
        ],
        education_value="语言发展、情感表达、想象力、亲子情感联结",
        image_emoji="📖",
        is_featured=True,
        category_id=3,
        age_group_id=3,
    ),
    ActivitySchema(
        id=5,
        title="厨房小帮手：水果沙拉",
        slug="fruit-salad-helper",
        description="和孩子一起制作简单的水果沙拉，认识各种水果，学习基本的生活技能。",
        duration_minutes=25,
        difficulty="简单",
        materials=["各种当季水果", "安全塑料刀", "大碗", "酸奶", "围裙"],
        steps=[
            "一起洗手，穿上围裙",
            "让孩子认识每种水果的名称和颜色",
            "示范如何安全地切水果（香蕉等软水果）",
            "让孩子用塑料刀切香蕉片",
            "一起将水果放入大碗中",
            "淋上酸奶，搅拌均匀",
            "一起品尝自己制作的沙拉",
        ],
        tips=[
            "全程注意安全，使用儿童专用工具",
            "让孩子参与每个步骤，增加参与感",
            "可以趁机教数数和颜色",
        ],
        education_value="生活技能、认知发展、精细动作、数学启蒙（数数、分类）",
        image_emoji="🥗",
        is_featured=False,
        category_id=6,
        age_group_id=4,
    ),
    ActivitySchema(
        id=6,
        title="节奏拍拍乐",
        slug="rhythm-clap-game",
        description="用身体和简单乐器打节奏，跟着音乐一起律动。培养节奏感和音乐兴趣。",
        duration_minutes=20,
        difficulty="简单",
        materials=["简单打击乐器（沙锤、小鼓）", "音乐播放设备", "也可用锅碗瓢盆代替"],
        steps=[
            "先用手拍一个简单节奏，让孩子模仿",
            "逐渐增加节奏的复杂度",
            "播放一首节奏明快的儿歌",
            "和孩子一起跟着节奏拍手、跺脚",
            "拿出小乐器或厨房用具，一起合奏",
            "鼓励孩子创造自己的节奏",
        ],
        tips=[
            "从最简单的节奏开始",
            "厨房用具也能成为很棒的乐器",
            "跟着孩子的节奏走，不要强求准确",
        ],
        education_value="音乐感知、节奏感、协调能力、创造力",
        image_emoji="🥁",
        is_featured=True,
        category_id=4,
        age_group_id=2,
    ),
    ActivitySchema(
        id=7,
        title="彩色冰块实验",
        slug="colorful-ice-experiment",
        description="用食用色素制作彩色冰块，观察冰的融化过程和颜色混合，感受科学的乐趣。",
        duration_minutes=35,
        difficulty="中等",
        materials=["冰块模具", "食用色素（红黄蓝）", "大托盘", "盐", "小滴管"],
        steps=[
            "提前一天用食用色素制作彩色冰块",
            "将彩色冰块放在大托盘上",
            "让孩子观察冰块的颜色和形状",
            "用小滴管在冰块上滴盐水，观察变化",
            "观察不同颜色冰块融化后的颜色混合",
            "讨论为什么冰会融化、颜色会混合",
        ],
        tips=[
            "准备不同颜色的冰块效果更好",
            "用托盘接住融化的水，方便清理",
            "引导孩子描述看到的变化",
        ],
        education_value="科学思维、观察力、因果关系理解、色彩认知",
        image_emoji="🧊",
        is_featured=False,
        category_id=5,
        age_group_id=4,
    ),
    ActivitySchema(
        id=8,
        title="感官探索瓶",
        slug="sensory-discovery-bottle",
        description="制作色彩缤纷的感官瓶，让婴幼儿通过观察和摇晃探索不同材质和颜色。",
        duration_minutes=20,
        difficulty="简单",
        materials=["透明塑料瓶", "水", "食用色素", "闪粉/亮片", "小珠子", "强力胶"],
        steps=[
            "清洗塑料瓶并晾干",
            "在瓶中加入水和食用色素",
            "加入闪粉、亮片或小珠子",
            "用强力胶封住瓶盖（确保安全）",
            "摇晃瓶子，观察里面的变化",
            "让宝宝触摸、摇晃、翻转瓶子",
        ],
        tips=[
            "务必用强力胶固定瓶盖，防止孩子打开",
            "不同瓶子放不同材料，增加趣味性",
            "洗洁精可以让闪粉下落更慢",
        ],
        education_value="感官发展、视觉追踪、手部力量、因果关系认知",
        image_emoji="✨",
        is_featured=True,
        category_id=5,
        age_group_id=1,
    ),
    ActivitySchema(
        id=9,
        title="小小整理师",
        slug="little-organizer",
        description="和孩子一起整理玩具和房间，学习分类和归纳，培养良好的生活习惯。",
        duration_minutes=30,
        difficulty="简单",
        materials=["收纳盒/篮子", "标签贴纸", "彩色标记笔"],
        steps=[
            "和孩子一起观察需要整理的区域",
            "准备不同的收纳盒，贴上图片标签",
            "教孩子按类别分拣：积木、毛绒玩具、图书等",
            "让孩子自己决定物品放在哪里",
            "一起清理桌面和地面",
            "完成后一起欣赏整洁的环境",
        ],
        tips=[
            "用图片标签帮助不认字的孩子识别",
            "把整理变成游戏：比赛谁放得快",
            "每次只整理一小块区域，避免孩子疲劳",
        ],
        education_value="分类能力、责任感、独立性、空间管理",
        image_emoji="🧹",
        is_featured=False,
        category_id=6,
        age_group_id=3,
    ),
    ActivitySchema(
        id=10,
        title="大自然音乐会",
        slug="nature-concert",
        description="带孩子到公园或花园，闭上眼睛聆听自然的声音，然后用自然材料创作音乐。",
        duration_minutes=35,
        difficulty="简单",
        materials=["户外空间", "小袋子（收集材料用）", "可选：录音设备"],
        steps=[
            "带孩子到一个安静的户外空间",
            "一起闭上眼睛，安静聆听30秒",
            "讨论听到了什么声音：鸟叫、风声、虫鸣",
            "收集树枝、石子、落叶等自然材料",
            "尝试用这些材料制造不同的声音",
            "一起用自然材料'演奏'一首曲子",
        ],
        tips=[
            "选择鸟类活跃的早晨效果最佳",
            "引导孩子用语言描述听到的声音",
            "可以把声音录下来回家再听",
        ],
        education_value="听觉发展、自然认知、语言表达、创造力",
        image_emoji="🎵",
        is_featured=False,
        category_id=2,
        age_group_id=3,
    ),
    ActivitySchema(
        id=11,
        title="纸箱城堡大作战",
        slug="cardboard-castle",
        description="用废旧纸箱搭建城堡或小屋，装饰成孩子的秘密基地。锻炼空间想象力和动手能力。",
        duration_minutes=60,
        difficulty="中等",
        materials=["大纸箱1-2个", "彩色胶带", "马克笔", "贴纸", "安全剪刀"],
        steps=[
            "和孩子一起讨论想搭建什么样的城堡",
            "在纸箱上画出门窗的位置",
            "家长帮忙裁剪出门窗（注意安全）",
            "让孩子用彩笔和贴纸装饰纸箱外部",
            "用彩色胶带加固和装饰",
            "在城堡里放上小枕头和玩偶，开始角色扮演",
        ],
        tips=[
            "大型家电的纸箱最适合",
            "让孩子主导设计，家长辅助执行",
            "城堡可以持续使用，每次添加新装饰",
        ],
        education_value="空间想象力、创造力、精细动作、角色扮演能力",
        image_emoji="🏰",
        is_featured=True,
        category_id=1,
        age_group_id=5,
    ),
    ActivitySchema(
        id=12,
        title="亲子瑜伽时光",
        slug="parent-child-yoga",
        description="和孩子一起做简单的瑜伽动作，用动物姿势让运动变得有趣，增进身体协调性。",
        duration_minutes=20,
        difficulty="简单",
        materials=["瑜伽垫或软地毯", "舒适衣服", "轻柔音乐"],
        steps=[
            "在地上铺好瑜伽垫，播放轻柔音乐",
            "从简单的深呼吸开始，让孩子模仿",
            "做'小猫伸懒腰'：手脚着地，弓背伸展",
            "做'小狗看天空'：趴下，手撑起上身",
            "做'大树站稳'：单脚站立，手臂像树枝伸展",
            "最后躺下来，做'海星放松'，慢慢呼吸",
        ],
        tips=[
            "用动物名称命名动作，增加趣味性",
            "不要追求动作标准，享受过程",
            "时间不宜过长，10-20分钟即可",
        ],
        education_value="身体协调性、专注力、呼吸意识、亲子联结",
        image_emoji="🧘",
        is_featured=False,
        category_id=2,
        age_group_id=5,
    ),
]

ARTICLES: list[ArticleSchema] = [
    ArticleSchema(
        id=1,
        title="高质量陪伴的5个黄金法则",
        slug="5-golden-rules-quality-time",
        summary="高质量陪伴不是时间的长短，而是全身心投入的深度。掌握这5个法则，让每一刻都充满意义。",
        content="""## 什么是高质量陪伴？

高质量陪伴不等于"一直在一起"。它是指在陪伴孩子时，全身心投入、专注当下、积极回应的互动方式。

## 黄金法则一：放下手机，全神贯注

当你决定陪伴孩子时，请把手机放到另一个房间。研究表明，即使手机只是放在桌上（不使用），也会分散我们的注意力。给孩子你完整的注意力，哪怕只有15分钟，也胜过心不在焉的3小时。

## 黄金法则二：跟随孩子的节奏

不要总是主导活动，试着让孩子来"带领"。当孩子在搭积木时，不要急着告诉ta应该怎么搭。观察、等待、然后加入。

## 黄金法则三：描述而非评价

把"你画得真好"换成"我看到你用了红色和蓝色，这里画了一个大大的圆"。描述性的回应让孩子感到被真正看见。

## 黄金法则四：接纳所有情绪

当孩子哭泣或发脾气时，不要急着制止。试着说"你现在很难过/生气，妈妈/爸爸在这里陪着你"。情绪需要被接纳，而不是被压抑。

## 黄金法则五：建立固定的"特别时光"

每天固定一个时间段（如睡前20分钟），作为你和孩子的"特别时光"。在这个时间里，孩子可以选择任何想做的事情，你只需要全身心陪伴。

> 记住：孩子不需要完美的父母，只需要一个愿意全身心陪伴的人。""",
        cover_emoji="💛",
        category="育儿理念",
        read_time_minutes=5,
    ),
    ArticleSchema(
        id=2,
        title="0-6岁儿童发展里程碑速览",
        slug="child-development-milestones",
        summary="了解孩子每个阶段的发展特点，帮助你提供更精准的支持和陪伴。",
        content="""## 了解孩子的发展节奏

每个孩子都有自己的成长节奏，以下里程碑仅供参考，请不要过度焦虑。

## 0-1岁：感官探索期

- **大运动**：抬头 → 翻身 → 坐 → 爬 → 站
- **精细动作**：抓握反射 → 主动抓取 → 对指捏取
- **语言**：哭声 → 咿呀 → 叫"mama/baba"
- **社交**：社交性微笑 → 认生 → 分离焦虑
- **陪伴重点**：充足的肌肤接触、回应式照顾、丰富感官刺激

## 1-2岁：运动爆发期

- **大运动**：独立行走 → 跑 → 上下台阶
- **精细动作**：叠积木 → 涂鸦 → 翻页
- **语言**：单词 → 简单句 → 词汇量爆发
- **社交**：平行游戏、物权意识
- **陪伴重点**：安全的探索环境、大量语言输入、简单规则建立

## 2-3岁：想象力爆发期

- **大运动**：跳跃 → 骑三轮车 → 踢球
- **精细动作**：用勺子 → 穿珠子 → 画圆
- **语言**：完整句子、提问"为什么"
- **社交**：开始合作游戏、角色扮演
- **陪伴重点**：假装游戏、绘本阅读、情绪引导

## 3-4岁：规则意识期

- **大运动**：单脚站立 → 接球 → 骑车
- **精细动作**：用剪刀 → 画人 → 写名字
- **语言**：讲述故事、理解时间概念
- **社交**：交朋友、理解规则
- **陪伴重点**：社交技能培养、规则游戏、创造性活动

## 4-6岁：学习准备期

- **大运动**：跳绳 → 游泳 → 骑自行车
- **精细动作**：握笔写字 → 系鞋带 → 使用筷子
- **语言**：认字 → 简单阅读 → 书面表达
- **社交**：深度友谊、团队合作
- **陪伴重点**：培养学习兴趣、独立性、解决问题能力""",
        cover_emoji="📊",
        category="儿童发展",
        read_time_minutes=8,
    ),
    ArticleSchema(
        id=3,
        title="如何选择适合孩子年龄的绘本",
        slug="choosing-picture-books-by-age",
        summary="绘本是亲子共读的最佳载体，不同年龄段的孩子对绘本有不同的需求和偏好。",
        content="""## 绘本选择的基本原则

选择绘本时，最重要的不是"好不好"，而是"适不适合"。适合孩子当前发展阶段的绘本，才能真正吸引ta的注意力。

## 0-1岁：感官触摸书

这个阶段的宝宝主要通过触摸、抓握、啃咬来探索世界。

**推荐类型**：
- 布书、洗澡书
- 触摸书（不同材质）
- 黑白卡、彩色卡（0-3个月）
- 简单认知图卡

## 1-2岁：指物命名书

孩子开始对命名事物产生强烈兴趣。

**推荐类型**：
- 认知绘本（动物、水果、交通工具）
- 翻翻书、洞洞书
- 简短的韵律故事
- 日常生活场景绘本

## 2-3岁：简单故事书

孩子能够理解简单的故事情节了。

**推荐类型**：
- 有重复句式的故事
- 情绪主题绘本
- 生活习惯绘本
- 互动型绘本

## 3-6岁：丰富故事书

孩子能够理解复杂情节，开始有自己的审美偏好。

**推荐类型**：
- 冒险故事
- 科普绘本
- 情感主题深度绘本
- 无字书（激发想象力）
- 系列绘本

## 共读小贴士

1. 不要只是"读"，要"演"
2. 一本好书可以反复读很多遍
3. 让孩子自己选书
4. 固定阅读时间和地点""",
        cover_emoji="📚",
        category="亲子阅读",
        read_time_minutes=6,
    ),
    ArticleSchema(
        id=4,
        title="拒绝屏幕依赖：有趣的非电子活动清单",
        slug="screen-free-activities",
        summary="减少屏幕时间不等于无聊。这份活动清单让你和孩子的每一天都充实有趣。",
        content="""## 为什么要减少屏幕时间？

美国儿科学会建议：2岁以下尽量避免屏幕，2-5岁每天不超过1小时。过多屏幕时间会影响：

- 语言发展
- 社交技能
- 睡眠质量
- 注意力集中

## 室内活动

### 创造类
- 画画、涂色
- 黏土/橡皮泥创作
- 纸箱改造
- 串珠项链
- 手指画

### 角色扮演类
- 开餐厅游戏
- 医生看病
- 超市购物
- 学校老师
- 消防员救援

### 建构类
- 积木搭建
- 乐高拼搭
- 磁力片城堡
- 纸牌叠高

## 户外活动

### 运动类
- 骑车/滑板车
- 追泡泡
- 踢球
- 跳绳
- 障碍赛跑

### 探索类
- 寻宝游戏
- 观察蚂蚁
- 收集石头/树叶
- 看云朵找形状
- 小小植物园

## 安静活动

- 拼图
- 桌游
- 涂色书
- 听故事
- 看家庭相册回忆

> 小贴士：打印这个清单贴在冰箱上，每次孩子说"无聊"时，就来这里找灵感！""",
        cover_emoji="🎨",
        category="陪伴技巧",
        read_time_minutes=5,
    ),
    ArticleSchema(
        id=5,
        title="爸爸参与育儿的重要性",
        slug="fathers-involvement-matters",
        summary="父亲的陪伴对孩子的发展有独特而不可替代的价值。了解爸爸可以如何更好地参与。",
        content="""## 为什么爸爸的参与如此重要？

研究表明，父亲积极参与育儿的孩子：
- 社交能力更强
- 学业表现更好
- 情绪更稳定
- 自信心更强

## 爸爸的独特优势

### 体能游戏
爸爸们天然擅长"疯玩"——举高高、骑脖子、摔跤游戏。这类高强度身体互动对孩子的平衡感、勇气和信任感都非常有益。

### 冒险精神
爸爸往往更愿意让孩子尝试新事物、接受适度挑战。这培养了孩子的冒险精神和抗挫能力。

### 不同的沟通方式
父亲的语言通常更直接，使用更多不常见的词汇，这反而促进了孩子的语言发展。

## 爸爸可以做的事

1. **每天的固定时刻**：负责洗澡、讲故事、早餐等
2. **周末专属活动**：带孩子去公园、骑车、做手工
3. **参与学校活动**：接送、家长会、亲子活动
4. **共同做家务**：让孩子看到爸爸也做饭、打扫
5. **表达情感**：说"我爱你"，拥抱，表扬

## 给妈妈的建议

- 给爸爸空间，不要总是纠正他的方式
- 具体地告诉爸爸可以做什么
- 认可爸爸的努力和付出
- 允许爸爸用自己的方式陪伴孩子""",
        cover_emoji="👨‍👧‍👦",
        category="育儿理念",
        read_time_minutes=6,
    ),
    ArticleSchema(
        id=6,
        title="在家也能做的蒙特梭利活动",
        slug="montessori-activities-at-home",
        summary="蒙特梭利教育法不只存在于学校。这些简单的家庭活动，让孩子在日常生活中自然成长。",
        content="""## 蒙特梭利的核心理念

蒙特梭利教育强调：
- **尊重孩子**：相信孩子有自我发展的能力
- **准备好的环境**：提供适合孩子的工具和空间
- **自由与秩序**：在有限的自由中学习自律

## 日常生活活动（1-3岁）

### 倒水练习
准备两个小壶和一个托盘，让孩子练习倒水。
- 培养：专注力、手眼协调、独立性

### 舀豆子
用小勺子将豆子从一个碗舀到另一个碗。
- 培养：精细动作、耐心、专注力

### 配对活动
准备相同的袜子让孩子配对，或者用颜色卡片配对。
- 培养：观察力、分类能力、视觉辨别

### 自己穿衣服
准备有大纽扣、拉链的衣服让孩子练习。
- 培养：独立性、精细动作、自信心

## 感官活动（2-4岁）

### 神秘袋
在布袋中放入不同物品，让孩子通过触摸猜测。
- 培养：触觉、语言表达、推理能力

### 声音配对
准备小瓶子装不同材料（米、沙、豆），让孩子找到声音相同的一对。
- 培养：听觉、专注力、配对能力

## 文化与科学（3-6岁）

### 植物观察
种一颗豆子，每天观察并画下变化。
- 培养：科学思维、观察力、耐心

### 地图探索
用简单的拼图地图认识世界。
- 培养：地理认知、文化意识

## 准备环境的小贴士

1. 在低处放置孩子的物品
2. 使用真实的工具（小尺寸）
3. 减少玩具数量，定期轮换
4. 保持整洁有序的环境""",
        cover_emoji="🌱",
        category="教育方法",
        read_time_minutes=7,
    ),
]


def get_categories() -> list[CategorySchema]:
    return CATEGORIES


def get_age_groups() -> list[AgeGroupSchema]:
    return AGE_GROUPS


def get_activities(
    category_id: int | None = None,
    age_group_id: int | None = None,
    difficulty: str | None = None,
    featured_only: bool = False,
) -> list[ActivitySchema]:
    results = ACTIVITIES
    if featured_only:
        results = [a for a in results if a.is_featured]
    if category_id is not None:
        results = [a for a in results if a.category_id == category_id]
    if age_group_id is not None:
        results = [a for a in results if a.age_group_id == age_group_id]
    if difficulty is not None:
        results = [a for a in results if a.difficulty == difficulty]

    cat_map = {c.id: c for c in CATEGORIES}
    age_map = {a.id: a for a in AGE_GROUPS}
    for activity in results:
        activity.category = cat_map.get(activity.category_id)
        activity.age_group = age_map.get(activity.age_group_id)
    return results


def get_activity_by_id(activity_id: int) -> ActivitySchema | None:
    for activity in ACTIVITIES:
        if activity.id == activity_id:
            cat_map = {c.id: c for c in CATEGORIES}
            age_map = {a.id: a for a in AGE_GROUPS}
            activity.category = cat_map.get(activity.category_id)
            activity.age_group = age_map.get(activity.age_group_id)
            return activity
    return None


def get_articles() -> list[ArticleSchema]:
    return ARTICLES


def get_article_by_id(article_id: int) -> ArticleSchema | None:
    for article in ARTICLES:
        if article.id == article_id:
            return article
    return None
