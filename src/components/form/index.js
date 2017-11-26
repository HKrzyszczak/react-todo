import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            title: '',
            content: '',
            category: ''
        }
    }

    handleTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleContent(event) {
        this.setState({
            content: event.target.value,
            kluczNowy: "test"
        })
    }

    handleCategory(event) {
        this.setState({
            category: event.target.value
        })
    }

    submitForm(event) {

        console.log(this.state);
        event.preventDefault();


    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <h3>{this.state.title ? 'PROMOCJA! ' + this.state.title : ''}</h3>
                    <p>{this.state.content}</p>
                    <p>{this.state.category}</p>
                    <label>
                        Name:
                        <input type='text' onChange={this.handleTitle}/>
                        <div>
                            <textarea onChange={this.handleContent}/>
                        </div>
                        <div>
                            <select onChange={this.handleCategory}>
                                <option>Opcja 1</option>
                                <option>Opcja 2</option>
                                <option>Opcja 3</option>
                                <option>Opcja 4</option>
                            </select>
                        </div>
                    </label>
                    <div>
                        <input type='submit' value='Wyślij mnie! '/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
