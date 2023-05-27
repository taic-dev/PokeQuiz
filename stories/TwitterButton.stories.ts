import type { Meta, StoryObj } from '@storybook/react';
import { TwitterButton } from "./Twitter";

const meta: Meta<typeof TwitterButton> = {
  title: 'Button/TwitterButton',
  component: TwitterButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TwitterButton>;

export const HogeTweetButton: Story = {
  args: {
    url: "https://twitter.com/intent/tweet?text=hoge ",
  }
}

export const HashTagTweetButton: Story = {
  args: {
    url: " https://twitter.com/intent/tweet?hashtags=PokeQuiz,ポケクイズ,めざせポケモンマスター",
  }
}