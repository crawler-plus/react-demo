import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = () => {
        // 得到输入的关键字
        const searchName = this.input.value.trim()
        if(searchName) {
            // 发布搜索消息
            PubSub.publish('search', searchName)
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => this.input = input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}