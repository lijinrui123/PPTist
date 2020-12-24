import { Slide } from '@/types/slides'

export const slides: Slide[] = [
  {
    id: 'xxx1',
    background: {
      type: 'solid',
      value: '#fff',
    },
    elements: [
      {
        id: 'xxx1',
        type: 'text',
        left: 190,
        top: 50,
        width: 320,
        height: 104,
        rotate: 0,
        shadow: {
          h: 1,
          v: 1,
          blur: 3,
          color: 'rgba(10, 10, 10, .5)'
        },
        opacity: 1,
        lock: false,
        content: '<div style=\'text-align: center;\'><span style=\'font-size: 28px;\'><span style=\'color: rgb(232, 107, 153); font-weight: bold;\'>一段测试文字</span>，字号固定为<span style=\'font-weight: bold; font-style: italic; text-decoration-line: underline;\'>28px</span></span></div>',
      },
      {
        id: 'xxx3',
        type: 'image',
        left: 80,
        top: 250,
        width: 180,
        height: 180,
        rotate: 0,
        outline: {
          width: 4,
          style: 'solid',
          color: '#333'
        },
        clip: {
          range: [[30, 0], [100, 70]],
          shape: 'ellipse'
        },
        fixedRatio: false,
        lock: false,
        src: 'https://img.lessonplan.cn/IMG/Show/ppt/3ab74e91-c34f-499d-9711-166e423d4dd6/1573622467064v2-7aa3ce420052983d91c6d01b47a7441d_hd.jpg',
      },
      {
        id: 'xxx2',
        type: 'image',
        left: 750,
        top: 320,
        width: 150,
        height: 150,
        rotate: 0,
        fixedRatio: true,
        lock: false,
        src: 'https://img.lessonplan.cn/IMG/Show/ppt/3ab74e91-c34f-499d-9711-166e423d4dd6/62d9adb3-e7a6-4dc4-a352-095cffb49f08/b1be1a2f-f893-47d3-a8a3-eac7d04d395f/1596159381259v2-b2c69096d25ae16bf6ca09e30add3e65_hd.jpg',
      },
    ],
  },
  {
    id: 'sajd172',
    elements: [
      {
        id: 'yyx1',
        type: 'text',
        left: 590,
        top: 90,
        width: 220,
        height: 188,
        rotate: 0,
        opacity: 1,
        lock: false,
        content: '<div>😀 😐 😶 😜 🔔 ⭐ ⚡ 🔥 👍 💡 🔰 🎀 🎁 🥇 🏅 🏆 🎈 🎉 💎 🚧 ⛔ 📢 ⌛ ⏰ 🕒 🧩 🎵 📎 🔒 🔑 ⛳ 📌 📍 💬 📅 📈 📋 📜 📁 📱 💻 💾 🌏 🚚 🚡 🚢💧 🌐 🧭 💰 💳 🛒</div>',
      },
    ],
  },
]