import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'entities/Layout/Footer',
  component: Footer,
  argTypes: {}
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {

}
