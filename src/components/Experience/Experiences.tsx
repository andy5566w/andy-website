import React, { Component } from 'react'
import { ExperienceState, ExperienceType } from '../../type'
import Experience from './Experience'

class Experiences extends Component<any, ExperienceState> {
  state = {
    experiences: [
      {
        icon_path: 'icon-graduation-cap',
        title: '畢業學校',
        content: ['輔仁大學', '科系：資訊管理'],
      },
      {
        icon_path: 'icon-library',
        title: '花旗銀行 (2017-5 ~ 2018-3)',
        content: [
          '工作內容：',
          '追踪乙方工作進度',
          '製作進度報備回報給主管',
          '分析市場與投放廣告給顧客',
        ],
      },
      {
        icon_path: 'icon-money',
        title: '玉山銀行 (2018-10 ~ 2019-9)',
        content: [
          '工作內容：',
          '製作內部網站',
          '優化以及維護交易系統',
          '協助廠商介接交易系統',
          '撰寫系統文件',
        ],
      },
      {
        icon_path: 'icon-laptop',
        title: '果子云網路公司 (2019-9 ~ now)',
        content: [
          '工作內容：',
          '製作客戶，廠商要求的RWD網站',
          '與UI / UX 團隊討論新專案內容，取提供意見改善使用者體驗',
          '提供前端技術意見，幫助同仁解決問題',
          '維護以及優化現有專案',
        ],
      },
    ],
  }
  render() {
    const experiences = this.state.experiences.map(
      (experience: ExperienceType, index: number) => (
        <Experience key={index} experience={experience} />
      )
    )
    return (
      <section className="experiences">
        <h1 className="heading-1 experience__header">過往經驗</h1>
        {experiences}
      </section>
    )
  }
}

export default Experiences
