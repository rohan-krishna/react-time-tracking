jest.useFakeTimers()
import React from 'react'
import {shallow, mount} from 'enzyme'
import {ReportFilter} from '../Filter'
import withTheme from '../../../__mocks__/withTheme'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const ReportFilter_withTheme = withTheme(ReportFilter)

let startDate = new Date()
startDate.setDate(startDate.getDate() - 7)
const endDate = new Date()
const props = {
  startDate,
  endDate,
  onChange: jest.fn()
}

describe('<ReportFilter />', () => {
  it ('should fetch data on render', () => {
    const wrapper = shallow(<ReportFilter {...props} />)
    expect(props.onChange).toHaveBeenCalled()
  })

  it ('should fetch data when close time dialog', () => {

    const wrapper = shallow(<ReportFilter {...props} />)
    wrapper.instance().handleCloseDialog()
    expect(props.onChange).toHaveBeenCalled()
  })

})