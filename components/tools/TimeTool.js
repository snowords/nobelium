import React from 'react'
import moment from 'moment'
import { Form, Input, DatePicker, Space} from 'antd';

class TimeTool extends React.Component {

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  constructor(props) {
    super(props);
    this.state = {
      date: moment().locale('zh-CN').format('MMMM Do YYYY, h:mm:ss a'),
      timestamp: moment().unix(),
      inputText: '',
      inputTimeStamp: '',
      inputDateTime: ''
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: moment().locale('zh-CN').format('MMMM Do YYYY, h:mm:ss a'),
      timestamp: moment().unix()
    });
  }

  textChange = (e) => {
    const value = e.target.value
    this.setState({ inputText: value})
    const sizeNum = Math.pow(10, 13 - value.length)
    this.setState({ inputTimeStamp: moment(Number(value) * sizeNum).format()})
  }

  onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    this.setState({ inputDateTime: moment(value).unix()})
  }
  
  onOk = (value) => {
    console.log('onOk: ', value);
    this.setState({ inputDateTime: moment(value).unix()})
  }

  render() {
    return (
      <>
        {/* <div>Hello World {this.props.userAgent}</div> */}
        <div className="grid p-2 grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-md bg-white bg-opacity-80 text-md text-center">
            <span className="text-gray-500 text-sm">北京时间</span>
            <p className="text-lg">{this.state.date}</p>
          </div>
          <div className="p-6 rounded-md bg-white bg-opacity-80 text-md text-center">
            <span className="text-gray-500 text-sm">时间戳</span>
            <p className="text-lg">{this.state.timestamp}</p>
          </div>
          <div className="px-2 py-4 rounded-md bg-white bg-opacity-80 text-md text-center">
            <Form.Item label="时间戳">
              <Input 
                value={this.state.inputText}
                onChange={this.textChange}
                />
            </Form.Item>
          </div>
          <div className="p-4 rounded-md bg-gray-800 bg-opacity-80 text-white">
            {this.state.inputTimeStamp}
          </div>
          <div className="px-2 py-4 rounded-md bg-white bg-opacity-80 text-md text-center">
            <Form.Item label="选择时间">
              <Space direction="vertical">
                <DatePicker showTime onChange={this.onChange} onOk={this.onOk} />
              </Space>
            </Form.Item>
          </div>
          <div className="p-4 rounded-md bg-gray-800 bg-opacity-80 text-white">
            {this.state.inputDateTime}
          </div>
        </div>
      </>
    )
  }
}

export default TimeTool
