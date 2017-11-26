import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.state = {
            title: 'sfasd',
            content: 'fasd',
            category: 'fasd'
        }
    }

    handleTitle(event) {
      this.setState({
          title: event.target.value
      })
    }

    handleContent(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleCategory(event) {
        this.setState({
            category: event.target.value
        })
    }

    submitForm(event) {
        console.log("wyslane")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.content}</p>
                    <p>{this.state.category}</p>
                    <label>
                        Name:
                        <input type='text' onChange={this.handleTitle}/>
                        <textarea onChange={this.handleContent}/>
                        <select onChange={this.handleCategory}>
                            <option>Opcja 1</option>
                            <option>Opcja 2</option>
                            <option>Opcja 3</option>
                            <option>Opcja 4</option>
                        </select>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Form;
