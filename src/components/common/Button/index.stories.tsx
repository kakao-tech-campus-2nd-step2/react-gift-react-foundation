import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

// 스토리북의 메타데이터 설정
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Button', // 스토리북에서 버튼을 'Common/Button' 경로로 설정
  tags: ['autodocs'], // 자동 생성 문서 태그 추가
  args: {
    children: '버튼', // 기본 버튼 텍스트
    theme: 'kakao', // 기본 테마
    size: 'responsive', // 기본 사이즈
    onClick: () => {
      alert('버튼 클릭'); // 기본 클릭 이벤트
    },
  },
  argTypes: {
    // theme: {
    //   control: {
    //     type: 'radio',
    //     options: ['kakao', 'outline', 'black', 'lightGray', 'darkGray'],
    //     default: 'kakao',
    //   },
    // },
    // size: {
    //   control: {
    //     type: 'radio',
    //     options: ['large', 'small', 'responsive'],
    //     default: 'responsive',
    //   },
    // },
  },
  render: (props) => (
    <div style={{ width: '120px' }}>
      <Button {...props} />
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
