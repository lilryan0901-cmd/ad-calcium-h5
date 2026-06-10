const screens = [...document.querySelectorAll('.screen')];
const $ = (id) => document.getElementById(id);

const questions = [
  {
    title: '冰柜前只剩最后一瓶AD钙奶，你会怎么做？',
    desc: '第一反应最接近你的真实人格。',
    answers: [
      ['直接拿下，快乐不能犹豫', { sweet: 3, energy: 2, social: 1 }],
      ['先拍照发群里：谁懂这一口', { nostalgia: 3, social: 2, sweet: 1 }],
      ['看配料和日期，确认后再买', { sour: 2, relax: 1 }],
      ['让给旁边小朋友，自己下次再喝', { sweet: 2, nostalgia: 2, relax: 1 }]
    ]
  },
  {
    title: '你的童年小卖部关键词是？',
    desc: '选择一个最能触发回忆的画面。',
    answers: [
      ['玻璃柜、贴纸、泡泡糖和AD钙奶', { nostalgia: 4, sweet: 1 }],
      ['放学路上边走边喝，书包晃来晃去', { nostalgia: 3, energy: 1, sweet: 1 }],
      ['考试后奖励自己一瓶冰镇的', { relax: 2, sweet: 2 }],
      ['和朋友交换零食，一起凑热闹', { social: 3, sweet: 2 }]
    ]
  },
  {
    title: '面对加班、早八或复习周，你更需要？',
    desc: 'AD钙奶在当下生活里的角色。',
    answers: [
      ['三分钟精神回血', { energy: 3, sweet: 1 }],
      ['一点熟悉的确定感', { nostalgia: 3, relax: 2 }],
      ['酸甜解腻，清醒一点', { sour: 3, relax: 1 }],
      ['发朋友圈，顺手整活', { social: 3, energy: 2 }]
    ]
  },
  {
    title: '如果给自己贴一个“酸甜人格”标签，你更像？',
    desc: '不要想太多，选最像日常状态的。',
    answers: [
      ['外表冷静，内心很软', { sour: 2, sweet: 2, relax: 1 }],
      ['热爱生活，快乐来得很快', { sweet: 4, energy: 1 }],
      ['自带滤镜，擅长安慰别人', { sweet: 2, social: 1, relax: 2 }],
      ['嘴上嫌弃，身体诚实', { sour: 3, nostalgia: 1 }]
    ]
  },
  {
    title: '最愿意把AD钙奶带进哪个场景？',
    desc: '这会影响你的人格瓶包装。',
    answers: [
      ['便利店冰柜，随手买一瓶', { relax: 2, sweet: 1 }],
      ['宿舍/办公室，大家一起分', { social: 3, energy: 1 }],
      ['家庭餐桌，给小朋友也来一瓶', { nostalgia: 2, sweet: 2 }],
      ['奶茶/特调/冰棒DIY', { energy: 2, social: 2, sour: 1 }]
    ]
  },
  {
    title: '你喝到熟悉味道时最可能说？',
    desc: '一句话暴露人格底色。',
    answers: [
      ['这不就是小时候那味儿吗', { nostalgia: 4 }],
      ['可以，今天被治愈了', { relax: 3, sweet: 1 }],
      ['有点酸甜，刚好不腻', { sour: 3, sweet: 1 }],
      ['这个必须拍，太有梗了', { social: 3, energy: 2 }]
    ]
  },
  {
    title: '朋友说你最像哪种“担当”？',
    desc: '本题决定结果页瓶身徽章。',
    answers: [
      ['纯净担当：心软但有原则', { relax: 2, sweet: 2 }],
      ['营养担当：关键时刻很可靠', { nostalgia: 1, relax: 2 }],
      ['活力担当：气氛冷不了', { energy: 4, social: 1 }],
      ['快乐担当：自带喜剧人属性', { social: 3, energy: 2 }]
    ]
  },
  {
    title: '你更喜欢哪种内容玩法？',
    desc: '对应策划案里的传播入口。',
    answers: [
      ['童年旧照复刻', { nostalgia: 3, social: 1 }],
      ['人格测试结果海报', { social: 3, sweet: 1 }],
      ['便利店即时打卡', { relax: 2, energy: 1 }],
      ['酸甜特调挑战', { sour: 2, energy: 2 }]
    ]
  },
  {
    title: '你的快乐更像哪种口感？',
    desc: '酸甜比例从这里开始拉开。',
    answers: [
      ['先酸后甜，越品越上头', { sour: 4, sweet: 1 }],
      ['甜得直接，开心就要明显', { sweet: 4, energy: 1 }],
      ['清爽不腻，保持分寸', { sour: 2, relax: 2 }],
      ['熟悉回甘，像老朋友', { nostalgia: 3, sweet: 1 }]
    ]
  },
  {
    title: '最后一题：你想把这份酸甜传给谁？',
    desc: 'AD钙奶不是只属于小孩的饮料，而是跨代际的快乐入口。',
    answers: [
      ['小时候的自己', { nostalgia: 4, relax: 1 }],
      ['现在一起发疯的朋友', { social: 4, energy: 1 }],
      ['正在长大的小朋友', { sweet: 3, nostalgia: 2 }],
      ['明天还要继续努力的自己', { relax: 3, sour: 1 }]
    ]
  }
];

const results = {
  collagen: {
    name: '逆龄胶原系', bottle: '活力担当', color: '#188d45',
    ratio: { acid: 35, sweet: 65 },
    image: 'assets/posters/result_collagen.svg',
    rule: s => s.nostalgia >= 13 && s.relax >= 6,
    copy: '内心充盈，热爱生活的满级玩家。你总能量满满，笑对挑战，享受当下。',
    coupon: '口令：逆龄胶原，满级玩家'
  },
  classic: {
    name: '经典引力系', bottle: '初心守护', color: '#d99a27',
    ratio: { acid: 25, sweet: 75 },
    image: 'assets/posters/result_classic.svg',
    rule: s => s.nostalgia >= 13,
    copy: '拥有纯粹底色的初心守护者。简单的快乐、稳定的陪伴，是你最珍贵的底色。',
    coupon: '口令：经典引力，初心守护'
  },
  peach: {
    name: '浪漫蜜桃系', bottle: '治愈担当', color: '#e35d86',
    ratio: { acid: 30, sweet: 70 },
    image: 'assets/posters/result_peach.svg',
    rule: s => s.sweet >= s.sour + 4 && s.relax >= 5,
    copy: '自带浪漫滤镜，朋友圈里的“治愈系”担当。你不张扬，却总能温柔治愈身边人。',
    coupon: '口令：浪漫蜜桃，回甘加倍'
  },
  berry: {
    name: '元气草莓系', bottle: '整活担当', color: '#e1302a',
    ratio: { acid: 45, sweet: 55 },
    image: 'assets/posters/result_berry.svg',
    rule: s => s.energy >= 10 || s.social >= 11,
    copy: '直球表达，最会整活的甜酷显眼包。你一出现，气氛立刻拉满。',
    coupon: '口令：元气草莓，快乐上线'
  },
  bacteria: {
    name: '畅爽菌菌系', bottle: '清醒担当', color: '#2b95d6',
    ratio: { acid: 55, sweet: 45 },
    image: 'assets/posters/result_bacteria.svg',
    rule: s => true,
    copy: '自带“去油腻”和“消食”属性，人间清醒去油剂。酸爽爽口，快乐不油腻。',
    coupon: '口令：畅爽菌菌，清醒快乐'
  }
};
let current = 0;
let history = [];
let score = { sour: 0, sweet: 0, nostalgia: 0, social: 0, energy: 0, relax: 0 };
let finalResult = null;
let finalRatio = { acid: 30, sweet: 70 };

function showScreen(name) {
  screens.forEach(s => s.classList.toggle('is-active', s.dataset.screen === name));
}
function toast(msg) {
  const node = $('toast');
  node.textContent = msg;
  node.classList.add('show');
  setTimeout(() => node.classList.remove('show'), 1900);
}
function renderQuestion() {
  const q = questions[current];
  $('questionTag').textContent = `Q${current + 1}`;
  $('questionTitle').textContent = q.title;
  $('questionDesc').textContent = q.desc;
  $('progressText').textContent = `${current + 1}/${questions.length}`;
  $('progressBar').style.width = `${(current / questions.length) * 100}%`;
  const list = $('answerList');
  list.innerHTML = '';
  q.answers.forEach(([text, delta], idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}. ${text}</strong><small>点击选择，进入下一题</small>`;
    btn.addEventListener('click', () => choose(delta));
    list.appendChild(btn);
  });
}
function choose(delta) {
  history.push({ current, delta });
  Object.keys(delta).forEach(k => score[k] += delta[k]);
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    $('progressBar').style.width = '100%';
    setTimeout(showResult, 180);
  }
}
function back() {
  if (!history.length) { showScreen('cover'); return; }
  const last = history.pop();
  Object.keys(last.delta).forEach(k => score[k] -= last.delta[k]);
  current = last.current;
  renderQuestion();
}
function pickResult() {
  const ordered = ['collagen', 'classic', 'peach', 'berry', 'bacteria'];
  return results[ordered.find(k => results[k].rule(score)) || 'bacteria'];
}
function showResult() {
  finalResult = pickResult();
  finalRatio = { ...finalResult.ratio };

  document.documentElement.style.setProperty('--result-color', finalResult.color);
  $('resultName').textContent = finalResult.name;
  $('resultName').style.color = finalResult.color;
  $('acidValue').textContent = `${finalRatio.acid}%`;
  $('sweetValue').textContent = `${finalRatio.sweet}%`;
  $('acidMeter').style.width = `${finalRatio.acid}%`;
  $('acidMeter').style.background = finalResult.color;
  $('sweetMeter').style.width = `${finalRatio.sweet}%`;
  $('sweetMeter').style.background = '#e1302a';

  const img = $('resultPosterImage');
  img.src = finalResult.image;
  img.alt = `${finalResult.name}｜AD钙奶人格瓶结果海报`;

  const link = $('downloadLink');
  link.href = finalResult.image;
  link.download = `AD钙奶人格瓶_${finalResult.name}.svg`;
  link.classList.remove('is-ready');
  showScreen('result');
}
function reset() {
  current = 0;
  history = [];
  score = { sour: 0, sweet: 0, nostalgia: 0, social: 0, energy: 0, relax: 0 };
  renderQuestion();
  showScreen('cover');
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function drawPoster() {
  if (!finalResult) return;
  const link = $('downloadLink');
  link.href = finalResult.image;
  link.download = `AD钙奶人格瓶_${finalResult.name}.svg`;
  link.classList.add('is-ready');
  try {
    link.click();
    toast('海报已准备好；手机端可长按图片保存');
  } catch (e) {
    toast('请长按结果海报保存到相册');
  }
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = [...text];
  let line = '';
  for (let i = 0; i < chars.length; i++) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && i > 0) {
      ctx.fillText(line, x, y);
      line = chars[i];
      y += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, y);
}
async function copyCoupon() {
  const text = `${finalResult?.name || ''}｜${finalRatio.acid}%酸涩+${finalRatio.sweet}%回甘｜${finalResult?.coupon || ''}`;
  try {
    await navigator.clipboard.writeText(text);
    toast('口令已复制');
  } catch (e) {
    toast(text);
  }
}

$('startBtn').addEventListener('click', () => { current = 0; renderQuestion(); showScreen('quiz'); });
$('backBtn').addEventListener('click', back);
$('restartBtn').addEventListener('click', reset);
$('savePosterBtn').addEventListener('click', drawPoster);
$('copyBtn').addEventListener('click', copyCoupon);

renderQuestion();
